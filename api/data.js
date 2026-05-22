// GET  /api/data?page=villa       → { ok, data }
// GET  /api/data?page=guidebook   → { ok, data }
// POST /api/data?page=villa       → save (requires auth)
//   Body: { data: {...} }
//
// Hvis nøkkelen ikke finnes i Redis, returneres innebygd seed-data
// (fabrikkstart). Dette gjør at siden ALDRI går blank, selv om
// Redis er tom eller utilgjengelig.

import {
  redis,
  requireAuth,
  readJsonBody,
  json,
  err,
} from "./_lib.js";
import { VILLA_SEED, GUIDEBOOK_SEED } from "./_seed.js";

function seedFor(page) {
  return page === "villa" ? VILLA_SEED : GUIDEBOOK_SEED;
}

export default async function handler(req, res) {
  const page = String(req.query?.page || "").toLowerCase();
  if (page !== "villa" && page !== "guidebook") {
    return err(res, 400, "page must be 'villa' or 'guidebook'");
  }

  // ── GET: les data ────────────────────────────────────────────────
  if (req.method === "GET") {
    try {
      const key = `${page}:data`;
      let data = await redis.get(key);
      // Upstash kan returnere JSON som string OR allerede-parset objekt.
      if (typeof data === "string") {
        try {
          data = JSON.parse(data);
        } catch {
          data = null;
        }
      }
      if (!data) {
        // Fall tilbake til seed-data. Vi skriver IKKE seedet automatisk
        // til Redis her — det gjøres bevisst via POST /api/seed.
        return json(res, 200, { ok: true, data: seedFor(page), seed: true });
      }
      return json(res, 200, { ok: true, data, seed: false });
    } catch (e) {
      console.error("GET /api/data error:", e);
      // Selv ved Redis-feil, lever seed så siden ikke går ned.
      return json(res, 200, {
        ok: true,
        data: seedFor(page),
        seed: true,
        warning: "Redis unavailable, serving seed data",
      });
    }
  }

  // ── POST: skriv data (krever auth) ──────────────────────────────
  if (req.method === "POST") {
    if (!(await requireAuth(req, res))) return;
    const body = await readJsonBody(req);
    if (!body || typeof body.data !== "object" || body.data === null) {
      return err(res, 400, "body.data must be an object");
    }
    // Vi lagrer som streng for å være eksplisitt og ha kontroll på
    // serialisering. Upstash støtter også direkte objekt-set,
    // men eksplisitt JSON.stringify er tryggere på tvers av versjoner.
    const serialized = JSON.stringify(body.data);
    if (serialized.length > 500_000) {
      return err(res, 413, "Data too large (>500KB)");
    }
    await redis.set(`${page}:data`, serialized);
    // Sett også et timestamp så admin kan se "sist endret"
    await redis.set(`${page}:updated_at`, new Date().toISOString());
    return json(res, 200, { ok: true });
  }

  return err(res, 405, "Method not allowed");
}
