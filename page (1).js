// app/admin/page.js
import { cookies } from "next/headers";
import { verifyToken, COOKIE_NAME } from "@/lib/auth";
import { getContent } from "@/lib/store";
import AdminLogin from "./AdminLogin";
import AdminEditor from "./AdminEditor";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const token = cookies().get(COOKIE_NAME)?.value;
  const isAuthed = verifyToken(token);

  if (!isAuthed) {
    return <AdminLogin />;
  }

  const content = await getContent();
  return <AdminEditor initial={content} />;
}
