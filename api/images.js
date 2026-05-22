// GET /api/images?folder=bilder           → list villa images
// GET /api/images?folder=villa-guide-9k2m7p → list guidebook images
//
// Bruker en pre-generert manifest (_images.json) bygget på deploy-tid.
// Dette er pålitelig på Vercel serverless, hvor lesing av statiske
// repo-filer fra functions-bundlen ikke er garantert.
//
// For å oppdatere manifest når du legger til nye bilder:
// 1. Last opp bilder til /bilder/ via GitHub
// 2. Kjør "Refresh from folder" i admin — Vercel re-deploy oppdaterer manifest
//
// Returnerer: { ok, folder, count, items: [{ file, ext, fullName, hasThumb }] }
import { createRequire } from "node:module";
import { json, err } from "./_lib.js";

const require = createRequire(import.meta.url);

let MANIFEST = { bilder: { count: 0, items: [] }, "villa-guide-9k2m7p": { count: 0, items: [] } };
try {
  MANIFEST = require("./_images.json");
} catch (e) {
  console.error("Could not load _images.json manifest:", e?.message);
}

const ALLOWED_FOLDERS = new Set(["bilder", "villa-guide-9k2m7p"]);

export default async function handler(req, res) {
  if (req.method !== "GET") return err(res, 405, "Method not allowed");

  const folder = String(req.query?.folder || "bilder");
  if (!ALLOWED_FOLDERS.has(folder)) {
    return err(res, 400, "folder must be 'bilder' or 'villa-guide-9k2m7p'");
  }

  const entry = MANIFEST[folder] || { count: 0, items: [] };
  return json(res, 200, { ok: true, folder, count: entry.count, items: entry.items });
}
