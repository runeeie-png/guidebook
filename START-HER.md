# START HER

Slik får du nettsiden på nett — uten å dra filer og uten å kunne kode.

---

## Steg 1 — Lag et tomt GitHub-repo

1. Gå til **github.com** og lag en konto (hvis du ikke har).
2. Klikk den grønne knappen **New** (eller pluss-tegnet øverst → New repository).
3. Gi det et navn, f.eks. `villaen-i-alsvik`.
4. **Ikke** huk av for noe (verken README, .gitignore eller lisens).
5. Klikk **Create repository**.
6. På siden som kommer opp: kopier nettadressen som slutter på `.git`.
   Den ser slik ut:
   `https://github.com/dittbrukernavn/villaen-i-alsvik.git`

---

## Steg 2 — Kjør opplastingsskriptet

Pakk ut denne mappen et sted du finner igjen (f.eks. Skrivebordet).

**På Mac:**
- Dobbeltklikk `LAST-OPP-TIL-GITHUB-mac.command`
- Sier Mac at filen ikke kan åpnes? Høyreklikk på den → **Åpne** → **Åpne**.

**På Windows:**
- Dobbeltklikk `LAST-OPP-TIL-GITHUB-windows.bat`
- Sier Windows «Windows beskyttet PC-en»? Klikk **Mer info** → **Kjør likevel**.

Skriptet ber deg lime inn adressen fra Steg 1. Lim den inn, trykk Enter.
Hele prosjektet sendes opp med alle mapper intakt.

> Mangler git? Skriptet sier fra og gir deg lenken. Installer, og
> dobbeltklikk skriptet på nytt.

---

## Steg 3 — Sjekk at det ble riktig

Gå til GitHub-repoet i nettleseren og oppdater siden. Du skal nå se
mapper du kan klikke deg inn i — spesielt **`app`** og **`lib`**.
Ser du dem, er alt riktig.

---

## Steg 4 — Publiser gratis med Vercel

Følg **README.md, Del 3**. Kort fortalt:
1. Logg inn på **vercel.com** med GitHub.
2. **Add New → Project**, velg repoet ditt.
3. Legg inn to miljøvariabler: `ADMIN_PASSWORD` og `ADMIN_SESSION_SECRET`.
4. Klikk **Deploy**.

Etter ca. ett minutt er nettsiden live.

---

Resten av detaljene — admin, video, bilder, eget domene — står i
**README.md**.
