// app/api/upload/route.js
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { put } from "@vercel/blob";
import { verifyToken, COOKIE_NAME } from "@/lib/auth";

export const dynamic = "force-dynamic";

function authed() {
  return verifyToken(cookies().get(COOKIE_NAME)?.value);
}

export async function POST(req) {
  if (!authed()) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Filopplasting krever Vercel Blob. Legg til BLOB_READ_WRITE_TOKEN, eller lim inn en YouTube/Vimeo-lenke i stedet.",
      },
      { status: 400 }
    );
  }

  const form = await req.formData();
  const file = form.get("file");
  if (!file || typeof file === "string") {
    return NextResponse.json({ ok: false, error: "Ingen fil" }, { status: 400 });
  }

  const safeName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, "_");
  const blob = await put(`media/${Date.now()}-${safeName}`, file, {
    access: "public",
    addRandomSuffix: true,
  });

  return NextResponse.json({ ok: true, url: blob.url });
}
