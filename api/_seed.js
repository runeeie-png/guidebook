// _seed.js — fabrikkinnhold som leveres når Redis er tom.
// Bruker createRequire for å laste JSON, som er robust på alle Node-versjoner
// inkludert Vercel serverless. ESM JSON imports kan ha edge cases avhengig av
// runtime, så vi går via Node's require som alltid fungerer for JSON.
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

let villaSeed = {};
let guidebookSeed = {};
try {
  villaSeed = require("./_villa_seed.json");
} catch (e) {
  console.error("Could not load _villa_seed.json:", e?.message);
}
try {
  guidebookSeed = require("./_guidebook_seed.json");
} catch (e) {
  console.error("Could not load _guidebook_seed.json:", e?.message);
}

export const VILLA_SEED = villaSeed;
export const GUIDEBOOK_SEED = guidebookSeed;
