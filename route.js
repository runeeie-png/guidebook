// app/admin/AdminLogin.js
"use client";

import { useState } from "react";

export default function AdminLogin() {
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setBusy(true);
    setErr("");
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: pw }),
    });
    if (res.ok) {
      window.location.reload();
    } else {
      setErr("Feil passord. Prøv igjen.");
      setBusy(false);
    }
  }

  return (
    <div className="admin-login">
      <form onSubmit={submit}>
        <div className="eyebrow" style={{ color: "var(--gold)" }}>
          Villaen i Alsvik
        </div>
        <h1>Administrasjon</h1>
        <p>Logg inn for å redigere guidebook og veiledninger.</p>
        <div className="field">
          <label>Passord</label>
          <input
            className="input"
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            autoFocus
            placeholder="••••••••"
          />
        </div>
        {err && (
          <div style={{ color: "var(--rust)", fontSize: 14, marginBottom: 16 }}>
            {err}
          </div>
        )}
        <button className="btn" style={{ width: "100%" }} disabled={busy}>
          {busy ? "Logger inn …" : "Logg inn"}
        </button>
      </form>
    </div>
  );
}
