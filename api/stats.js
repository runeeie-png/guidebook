// POST /api/stats          → tracker en sidevisning. Body: { page: "villa"|"guidebook" }
//                             (Ikke auth — kalles fra klienten på hver load.)
// GET  /api/stats          → returnerer totaler + siste 30 dager (krever auth).
import { redis, requireAuth, readJsonBody, trackView, json, err } from "./_lib.js";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const body = await readJsonBody(req);
    const page = String(body.page || "").toLowerCase();
    if (page !== "villa" && page !== "guidebook") {
      return err(res, 400, "page must be 'villa' or 'guidebook'");
    }
    await trackView(page);
    return json(res, 200, { ok: true });
  }

  if (req.method === "GET") {
    if (!(await requireAuth(req, res))) return;

    const today = new Date();
    const days = [];
    for (let i = 0; i < 30; i++) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      days.push(d.toISOString().slice(0, 10));
    }

    // Bygg alle nøklene vi vil hente i én pipeline
    const p = redis.pipeline();
    p.get("stats:villa:total");
    p.get("stats:guidebook:total");
    p.get("villa:updated_at");
    p.get("guidebook:updated_at");
    days.forEach((d) => p.get(`stats:villa:daily:${d}`));
    days.forEach((d) => p.get(`stats:guidebook:daily:${d}`));
    const r = await p.exec();

    const num = (v) => (v == null ? 0 : Number(v) || 0);
    const result = {
      ok: true,
      villa: {
        total: num(r[0]),
        updatedAt: r[2] || null,
        daily: days.map((d, i) => ({ date: d, count: num(r[4 + i]) })),
        last7: 0,
        last30: 0,
      },
      guidebook: {
        total: num(r[1]),
        updatedAt: r[3] || null,
        daily: days.map((d, i) => ({ date: d, count: num(r[4 + 30 + i]) })),
        last7: 0,
        last30: 0,
      },
    };
    result.villa.last7 = result.villa.daily
      .slice(0, 7)
      .reduce((s, x) => s + x.count, 0);
    result.villa.last30 = result.villa.daily.reduce((s, x) => s + x.count, 0);
    result.guidebook.last7 = result.guidebook.daily
      .slice(0, 7)
      .reduce((s, x) => s + x.count, 0);
    result.guidebook.last30 = result.guidebook.daily.reduce(
      (s, x) => s + x.count,
      0
    );
    return json(res, 200, result);
  }

  return err(res, 405, "Method not allowed");
}
