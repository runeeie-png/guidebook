// GET /api/images?folder=bilder → list villa images
// GET /api/images?folder=villa-guide-9k2m7p → list guidebook images
//
// Henter fillisten direkte fra GitHub sitt Contents API ved hvert kall,
// i stedet for en statisk manifest-fil (_images.json) som måtte
// oppdateres manuelt for hvert nytt bilde. Med denne versjonen ser
// "Refresh from folder" i admin alltid de nyeste bildene som er lastet
// opp til GitHub — uten noe mellomsteg.
//
// Hvis GitHub-oppslaget skulle feile (f.eks. rate limit), faller vi
// tilbake til den gamle _images.json-fila så admin ikke går i stykker.
//
// Returnerer: { ok, folder, count, items: [{ file, ext, fullName, hasThumb }] }
import { createRequire } from "node:module";
import { json, err } from "./_lib.js";

const require = createRequire(import.meta.url);

const REPO_OWNER = "runeeie-png";
const REPO_NAME = "guidebook";

const ALLOWED_FOLDERS = new Set(["bilder", "villa-guide-9k2m7p"]);
const IMAGE_EXT = new Set(["jpg", "jpeg", "png", "webp", "gif"]);

function loadFallbackManifest(folder) {
  try {
    const manifest = require("./_images.json");
    return manifest[folder] || { count: 0, items: [] };
  } catch {
    return { count: 0, items: [] };
  }
}

function buildItems(entries) {
  // Finn alle "-t" miniatyrbilder først, så vi vet hvilke basefiler
  // som har en, uten å liste miniatyrene som egne bilder.
  const thumbBases = new Set();
  for (const entry of entries) {
    if (entry.type !== "file") continue;
    const dot = entry.name.lastIndexOf(".");
    if (dot <= 0) continue;
    const base = entry.name.slice(0, dot);
    if (base.endsWith("-t")) thumbBases.add(base.slice(0, -2));
  }

  const items = [];
  for (const entry of entries) {
    if (entry.type !== "file") continue;
    const dot = entry.name.lastIndexOf(".");
    if (dot <= 0) continue;
    const base = entry.name.slice(0, dot);
    const ext = entry.name.slice(dot + 1);
    if (!IMAGE_EXT.has(ext.toLowerCase())) continue; // hopp over index.html osv.
    if (base.endsWith("-t")) continue; // dette ER en miniatyr, ikke et eget bilde

    items.push({
      file: base,
      ext,
      fullName: entry.name,
      hasThumb: thumbBases.has(base),
    });
  }

  items.sort((a, b) => a.file.localeCompare(b.file, "nb"));
  return items;
}

export default async function handler(req, res) {
  if (req.method !== "GET") return err(res, 405, "Method not allowed");

  const folder = String(req.query?.folder || "bilder");
  if (!ALLOWED_FOLDERS.has(folder)) {
    return err(res, 400, "folder must be 'bilder' or 'villa-guide-9k2m7p'");
  }

  const apiUrl =
    "https://api.github.com/repos/" +
    REPO_OWNER +
    "/" +
    REPO_NAME +
    "/contents/" +
    folder;

  try {
    const ghRes = await fetch(apiUrl, {
      headers: { Accept: "application/vnd.github+json" },
    });

    if (!ghRes.ok) {
      throw new Error("GitHub svarte " + ghRes.status);
    }

    const entries = await ghRes.json();
    if (!Array.isArray(entries)) {
      throw new Error("Uventet svar fra GitHub");
    }

    const items = buildItems(entries);
    return json(res, 200, { ok: true, folder, count: items.length, items });
  } catch (e) {
    // Live oppslag mot GitHub feilet — fall tilbake til sist kjente
    // manifest så admin ikke går helt i stykker.
    console.error(
      "images.js: live GitHub fetch failed, using fallback manifest:",
      e && e.message ? e.message : e
    );
    const entry = loadFallbackManifest(folder);
    return json(res, 200, {
      ok: true,
      folder,
      count: entry.count,
      items: entry.items,
      stale: true,
    });
  }
}
