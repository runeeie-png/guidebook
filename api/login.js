// POST /api/login
// Body: { password: "..." }
// Response: { ok: true, token: "..." } + HttpOnly cookie
import {
  readJsonBody,
  verifyPassword,
  createToken,
  loginRateLimit,
  clientIp,
  json,
  err,
} from "./_lib.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return err(res, 405, "Method not allowed");

  const ip = clientIp(req);
  const rl = await loginRateLimit(ip);
  if (!rl.allowed) {
    return err(res, 429, "Too many attempts. Try again in 5 minutes.");
  }

  const body = await readJsonBody(req);
  if (!verifyPassword(body.password)) {
    return err(res, 401, "Wrong password");
  }

  const token = await createToken();
  // 7 dager. HttpOnly = JS kan ikke lese cookien; Secure = bare HTTPS;
  // SameSite=Strict = ikke send på cross-site requests.
  res.setHeader(
    "Set-Cookie",
    `pv_admin=${token}; Max-Age=${7 * 24 * 60 * 60}; Path=/; HttpOnly; Secure; SameSite=Strict`
  );
  return json(res, 200, { ok: true, token });
}
