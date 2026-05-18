# Villaen i Alsvik — Guidebook

Eksklusiv nettside med guidebook, på tre språk (Engelsk standard,
Norsk, Tysk). Løse filer, ingen mapper, ingen database.

## Filene

- `index.html` — hele nettsiden. Røres aldri.
- `data.js` — alt innhold på alle tre språk. Det eneste du redigerer.
- `hero.jpg`, `house.jpg`, `area.jpg`, `preikestolen.jpg` — bildene.
- `vercel.json` — Vercel-konfig.

Alle ligger løst i samme mappe, ingen undermapper.

## Språk

Siden åpner på **engelsk**. Gjesten bytter selv mellom EN / NO / DE
øverst til høyre. I admin redigerer du ett språk om gangen — bruk
språkfanene (EN/NO/DE) øverst i admin og fyll ut alle tre.

## Slik redigerer du

1. Åpne siden, scroll til bunnen, trykk **Admin**.
2. Passord: `villaen2024`
3. Velg språkfane (EN/NO/DE) og rediger tekst, veiledninger,
   turer i området (med bilde + Google Maps-lenke), og bilder.
4. Trykk **⬇ Download data.js** — en ny `data.js` lastes ned.
5. Legg den nye `data.js` opp på GitHub (erstatt den gamle).
6. Vercel publiserer automatisk på ~30 sekunder.

### Bytt admin-passord (gjør dette før siden deles)

I `index.html`, finn linjen `var ADMIN_PASSWORD="villaen2024";`
og endre til ditt eget. Last opp `index.html` på nytt.

### Bilder

Legg en bildefil i repoet og skriv filnavnet i admin (f.eks.
`mittbilde.jpg`), eller lim inn en full https://-adresse.
Preikestolen-bildet er foreløpig et midlertidig utsiktsbilde —
bytt det gjerne ut med et ekte Preikestolen-bilde i admin
(turen «Preikestolen», bildefeltet).

### Video i veiledninger

Lim inn en YouTube/Vimeo-lenke i video-feltet. Tips: sett
YouTube-videoen til «Unlisted» — ikke søkbar, men spillbar via lenke.

## ───── OPPSETT: GitHub + Vercel ─────

### Steg 1 — GitHub
1. github.com → **New repository**. Ikke huk av for noe. Create.
2. **uploading an existing file**.
3. Dra inn alle filene (index.html, data.js, vercel.json og
   alle .jpg). Løse filer, ingen mapper — går rett inn.
4. **Commit changes**.

### Steg 2 — Vercel
1. vercel.com → logg inn med GitHub.
2. **Add New → Project** → velg repoet → **Import** → **Deploy**.
3. Du får en URL, f.eks. `villaen-alsvik.vercel.app`.

### Steg 3 — Eget domene (senere)
Vercel → prosjektet → **Settings → Domains** → **Add** → følg
DNS-instruksjonene hos domeneleverandøren.

## Oppdatere senere
Rediger i admin → last ned `data.js` → erstatt på GitHub.
Vercel publiserer automatisk.
