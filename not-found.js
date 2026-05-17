// app/api/content/route.js
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getContent, saveContent } from "@/lib/store";
import { verifyToken, COOKIE_NAME } from "@/lib/auth";

export const dynamic = "force-dynamic";

function authed() {
  const token = cookies().get(COOKIE_NAME)?.value;
  return verifyToken(token);
}

export async function GET() {
  const data = await getContent();
  return NextResponse.json(data);
}

export async function PUT(req) {
  if (!authed()) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }
  const body = await req.json().catch(() => null);
  if (!body || !body.house || !Array.isArray(body.manuals)) {
    return NextResponse.json({ ok: false, error: "Ugyldig data" }, { status: 400 });
  }
  await saveContent(body);
  return NextResponse.json({ ok: true });
}
