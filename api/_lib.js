// _lib.js — delte hjelpere for API-endepunkter.
// Importeres av data.js, login.js, images.js, stats.js.
import { Redis } from "@upstash/redis";
import { createHash, randomBytes, timingSafeEqual } from "node:crypto";

// Redis-klient. Bruker UPSTASH_-variablene først, faller tilbake til KV_-
// variablene som Vercel Marketplace-integrasjonen kan ha satt fra før.
function makeRedis() {
  const url =
    process.env.UPSTASH_REDIS_REST_URL ||
    process.env.KV_REST_API_URL ||
    process.env.STORAGE_KV_REST_API_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN ||
    process.env.KV_REST_API_TOKEN ||
    process.env.STORAGE_KV_REST_API_TOKEN;
  if (!url || !token) {
    throw new Error(
      "Missing Redis env vars. Expected UPSTASH_REDIS_REST_URL/TOKEN " +
        "or KV_REST_API_URL/TOKEN — check Vercel project settings."
    );
  }
  return new Redis({ url, token });
}

export const redis = makeRedis();

// ─── JSON-svar-hjelpere ─────────────────────────────────────────────────
export function json(res, status, body) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store, max-age=0");
  res.status(status).end(JSON.stringify(body));
}

export function err(res, status, message) {
  return json(res, status, { ok: false, error: message });
}

// ─── Tokens (admin-økt) ────────────────────────────────────────────────
// Format i Redis: nøkkel "admin:token:<token>" -> "1" med 7 dagers TTL.
// Vi lagrer bare hash av tokenet, så den faktiske strengen aldri ligger
// i Redis (selv om Upstash skulle bli kompromittert).
const TOKEN_TTL_SECONDS = 7 * 24 * 60 * 60; // 7 dager

function hashToken(token) {
  return createHash("sha256").update(token).digest("hex");
}

export async function createToken() {
  const token = randomBytes(32).toString("hex");
  const key = "admin:token:" + hashToken(token);
  await redis.set(key, "1", { ex: TOKEN_TTL_SECONDS });
  return token;
}

export async function isValidToken(token) {
  if (!token || typeof token !== "string" || token.length < 32) return false;
  const key = "admin:token:" + hashToken(token);
  const v = await redis.get(key);
  return v === "1" || v === 1;
}

// Henter token fra Authorization-header eller cookie. Returnerer
// strengen, ellers null.
export function getToken(req) {
  const h = req.headers.authorization || "";
  if (h.startsWith("Bearer ")) return h.slice(7).trim();
  const cookie = req.headers.cookie || "";
  const m = cookie.match(/(?:^|;\s*)pv_admin=([a-f0-9]+)/);
  return m ? m[1] : null;
}

// Krev gyldig token, ellers send 401 og returnér false.
export async function requireAuth(req, res) {
  const token = getToken(req);
  if (!(await isValidToken(token))) {
    err(res, 401, "Unauthorized");
    return false;
  }
  return true;
}

// ─── Passord-verifisering ──────────────────────────────────────────────
// timingSafeEqual er motstandsdyktig mot timing-angrep. Trenger like
// lange buffere; vi krymper/strekker derfor til hash av begge strenger
// før sammenligning.
export function verifyPassword(given) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  if (typeof given !== "string" || given.length === 0) return false;
  const a = createHash("sha256").update(given).digest();
  const b = createHash("sha256").update(expected).digest();
  // Begge er nå Buffer av lengde 32 — trygt å sammenligne.
  try {
    return timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

// ─── IP-rate-limit for login ───────────────────────────────────────────
// 5 forsøk per IP per 5 minutter. Bruker enkel teller med TTL.
export async function loginRateLimit(ip) {
  const key = "ratelimit:login:" + ip;
  const n = await redis.incr(key);
  if (n === 1) await redis.expire(key, 300); // 5 min
  return { allowed: n <= 5, remaining: Math.max(0, 5 - n) };
}

export function clientIp(req) {
  return (
    req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
    req.headers["x-real-ip"] ||
    req.socket?.remoteAddress ||
    "unknown"
  );
}

// ─── Body-parser (Vercel parser er ikke alltid garantert) ──────────────
export async function readJsonBody(req) {
  if (req.body && typeof req.body === "object") return req.body;
  if (typeof req.body === "string" && req.body.length) {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }
  return new Promise((resolve) => {
    let raw = "";
    req.on("data", (c) => (raw += c));
    req.on("end", () => {
      if (!raw) return resolve({});
      try {
        resolve(JSON.parse(raw));
      } catch {
        resolve({});
      }
    });
  });
}

// ─── Statistikk-helper ─────────────────────────────────────────────────
// Inkrementerer total + dagstotal for en gitt side ("villa" eller "guidebook").
export async function trackView(page) {
  if (page !== "villa" && page !== "guidebook") return;
  const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  // Pipeline = ett HTTP-kall, sparer Upstash-kvote og latency.
  const p = redis.pipeline();
  p.incr(`stats:${page}:total`);
  p.incr(`stats:${page}:daily:${today}`);
  // 90 dagers TTL på daglige tellere — autopruning.
  p.expire(`stats:${page}:daily:${today}`, 90 * 24 * 60 * 60);
  await p.exec();
}
