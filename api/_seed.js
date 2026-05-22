// _seed.js — fabrikkinnhold som leveres når Redis er tom.
// JSON-filene er sannheten; denne wrapperen leser dem ved oppstart.
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

function loadJson(name) {
  try {
    return JSON.parse(readFileSync(join(__dirname, name), "utf8"));
  } catch (e) {
    console.error("Failed to load seed", name, e);
    return {};
  }
}

export const VILLA_SEED = loadJson("_villa_seed.json");
export const GUIDEBOOK_SEED = loadJson("_guidebook_seed.json");
