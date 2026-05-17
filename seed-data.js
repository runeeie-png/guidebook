// lib/store.js
// Lagring av innhold. Bruker Vercel Blob i produksjon (gratis nivå),
// og en lokal JSON-fil under utvikling slik at du slipper å sette opp
// noe som helst for å teste på maskinen din.

import { seedManuals, seedHouse } from "./seed-data";

const BLOB_KEY = "villaen-data.json";

function defaultData() {
  return { house: seedHouse, manuals: seedManuals };
}

// ---- Lokal fil-lagring (kun under `npm run dev`) ----
async function readLocal() {
  const fs = await import("fs/promises");
  const path = await import("path");
  const file = path.join(process.cwd(), ".data", "content.json");
  try {
    const raw = await fs.readFile(file, "utf-8");
    return JSON.parse(raw);
  } catch {
    return defaultData();
  }
}

async function writeLocal(data) {
  const fs = await import("fs/promises");
  const path = await import("path");
  const dir = path.join(process.cwd(), ".data");
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(
    path.join(dir, "content.json"),
    JSON.stringify(data, null, 2),
    "utf-8"
  );
}

// ---- Vercel Blob (produksjon) ----
function hasBlob() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

async function readBlob() {
  try {
    const { list } = await import("@vercel/blob");
    const { blobs } = await list({ prefix: BLOB_KEY });
    const match = blobs.find((b) => b.pathname === BLOB_KEY);
    if (!match) return defaultData();
    const res = await fetch(match.url, { cache: "no-store" });
    if (!res.ok) return defaultData();
    return await res.json();
  } catch {
    return defaultData();
  }
}

async function writeBlob(data) {
  const { put } = await import("@vercel/blob");
  await put(BLOB_KEY, JSON.stringify(data, null, 2), {
    access: "public",
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
  });
}

// ---- Offentlig API ----
export async function getContent() {
  if (hasBlob()) return await readBlob();
  return await readLocal();
}

export async function saveContent(data) {
  if (hasBlob()) {
    await writeBlob(data);
  } else {
    await writeLocal(data);
  }
  return data;
}
