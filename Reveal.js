// app/components/Header.js
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <Link href="/" className="brand">
        Villaen
        <small>i Alsvik · Ryfylke</small>
      </Link>
      <nav className="nav">
        <a href="/#huset">Huset</a>
        <a href="/#guidebook">Guidebook</a>
        <a href="/#omradet">Området</a>
        <a href="/#kontakt">Kontakt</a>
      </nav>
    </header>
  );
}
