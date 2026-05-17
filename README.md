# Villaen i Alsvik — Guidebook

Eksklusiv nettside med guidebook og veiledninger. Tre løse filer,
ingen mapper, ingen database. Dra rett inn i GitHub.

## Filene

- `index.html` — hele nettsiden. Røres aldri.
- `data.js` — alt innhold (tekst, veiledninger). Det eneste du redigerer.
- `vercel.json` — Vercel-konfig.

## Slik redigerer du

1. Åpne nettsiden, scroll til bunnen, trykk **Admin**.
2. Passord: `villaen2024`
3. Rediger tekst, legg til veiledninger, video og sjekklister.
4. Trykk **⬇ Last ned data.js** — en ny `data.js` lastes ned.
5. Legg den nye `data.js` opp på GitHub (erstatt den gamle).
6. Vercel publiserer automatisk på ~30 sekunder.

### Bytt admin-passord (gjør dette før du deler siden)

Åpne `index.html`, finn linjen:
`var ADMIN_PASSWORD = "villaen2024";`
Endre til ditt eget, og last opp `index.html` på nytt.

### Video i veiledninger

Lim inn en YouTube- eller Vimeo-lenke i video-feltet i admin.
Tips: sett YouTube-videoen til **«Uoppført / Unlisted»** — da er den
ikke søkbar, men kan spilles av via lenken. Gratis og ubegrenset.

### Bilder

Lim inn bildelenker i admin (hero-bilde, bilde av huset, bilde av
området), eller behold standardbildene.

## ───── OPPSETT: GitHub + Vercel ─────

### Steg 1 — GitHub

1. github.com → **New repository**.
2. Navn: f.eks. `villaen-alsvik`. Ikke huk av for noe. Create.
3. Klikk **uploading an existing file**.
4. Dra inn de tre filene: `index.html`, `data.js`, `vercel.json`.
   (Tre løse filer, ingen mapper — går rett inn.)
5. Klikk **Commit changes**.

### Steg 2 — Vercel

1. vercel.com → logg inn med GitHub.
2. **Add New → Project** → velg repoet → **Import**.
3. Trykk **Deploy**.
4. Du får en URL, f.eks. `villaen-alsvik.vercel.app`.

### Steg 3 — Eget domene (senere)

1. Vercel → prosjektet → **Settings → Domains**.
2. **Add** → skriv domenet ditt.
3. Vercel viser DNS-oppføringer du legger inn hos domeneleverandøren.

## Oppdatere senere

Rediger i admin → last ned `data.js`. På GitHub: åpne `data.js` →
blyant-ikon (Edit) → merk alt, slett, lim inn nytt innhold → Commit.
Vercel publiserer automatisk.
