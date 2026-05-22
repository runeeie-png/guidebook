// GET /api/images?folder=bilder       → list villa images
// GET /api/images?folder=villa-guide-9k2m7p → list guidebook images
//
// Bruker filsystemet på Vercel — repoet (inkludert bilder) deployes
// sammen med koden, så vi trenger ingen GitHub-API-tilgang.
//
// Returnerer: { ok, folder, files: ["villa-hage.jpg", ...] }
import { readdirSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";
import { json, err } from "./_lib.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
// Vercel: /var/task/api/images.js  →  repo-root er /var/task
const REPO_ROOT = resolve(__dirname, "..");

const ALLOWED_FOLDERS = new Set(["bilder", "villa-guide-9k2m7p"]);
const IMG_EXT = /\.(jpe?g|png|webp|gif|avif)$/i;

export default async function handler(req, res) {
  if (req.method !== "GET") return err(res, 405, "Method not allowed");

  const folder = String(req.query?.folder || "bilder");
  if (!ALLOWED_FOLDERS.has(folder)) {
    return err(res, 400, "folder must be 'bilder' or 'villa-guide-9k2m7p'");
  }

  try {
    const abs = join(REPO_ROOT, folder);
    // Sikkerhetsskjekk: sti må ligge under REPO_ROOT
    if (!abs.startsWith(REPO_ROOT)) {
      return err(res, 400, "Invalid folder path");
    }
    const all = readdirSync(abs);
    // Behold bare bildefiler, ikke thumbnails (-t.jpg)
    const files = all
      .filter((f) => IMG_EXT.test(f))
      .filter((f) => !/-t\.(jpe?g|png|webp|gif|avif)$/i.test(f))
      .sort();
    // Lag også par-info: filnavn uten extension, og om -t finnes
    const items = files.map((f) => {
      const m = f.match(/^(.+)\.([^.]+)$/);
      const base = m ? m[1] : f;
      const ext = m ? m[2] : "";
      const hasThumb = all.includes(`${base}-t.${ext}`);
      return { file: base, ext, hasThumb, fullName: f };
    });
    return json(res, 200, { ok: true, folder, count: items.length, items });
  } catch (e) {
    console.error("images error", e);
    return err(res, 500, "Could not read folder: " + (e?.message || "unknown"));
  }
}
