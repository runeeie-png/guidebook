# Villaen i Alsvik — Guidebook

Eksklusiv nettside med guidebook, på tre språk (Engelsk standard,
Norsk, Tysk). Løse filer, ingen mapper, ingen database.

## Filene

- `index.html` — **forsiden** (preikestolenvilla.com). Midlertidig
  "kommer snart"-side. Byttes ut med bestillingsside senere.
- `forside-bg.jpg` — bakgrunnsbilde for forsiden.
- `vercel.json` — Vercel-konfig.
- `guidebook/` — **guidebooken**, ligger på preikestolenvilla.com/guidebook
  - `guidebook/index.html` — selve guidebook-siden
  - `guidebook/data.js` — alt innhold (det du redigerer)
  - `guidebook/*.jpg` — bildene i guidebooken

## Struktur / adresser

- `preikestolenvilla.com` → forsiden (kommer snart / senere bestilling)
- `preikestolenvilla.com/guidebook` → guidebooken for gjester

Når bestillingssiden er klar, erstatter du bare `index.html` på roten.
Guidebooken i `guidebook/`-mappen forblir uendret.

## Språk

Siden åpner på **engelsk**. Gjesten bytter selv mellom EN / NO / DE
øverst til høyre.

I admin skriver du alt på **engelsk**. Trykk så **⇄ Oversett-hjelper**
øverst. Den samler all engelsk tekst, lar deg kopiere den og åpne
Google Translate i en ny fane. Du oversetter der, limer resultatet
tilbake i hjelperen, velger språk (Norsk eller Tysk), og teksten
fordeles automatisk til riktige felter. Gjenta for det andre språket.

Dette er en bevisst robust løsning: ingen oversettelsestjeneste er
bygget inn i nettsiden, så ingenting kan «slutte å virke» for gjestene.
Du kan også bytte språkfane (EN/NO/DE) og skrive oversettelsene helt
manuelt hvis du foretrekker det.

Viktig: ikke slå sammen eller del opp linjer i oversettelsen —
antall linjer må stemme. Hjelperen sier fra hvis det ikke gjør det,
og skriver ingenting før det stemmer.

## Slik redigerer du

1. Gå til `preikestolenvilla.com/guidebook`, scroll til bunnen,
   trykk **Admin**.
2. Passord: `villaen2024`
3. Skriv alt innhold på **engelsk** — tekst, veiledninger, turer i
   området (med bilde + Google Maps-lenke), og bilder.
4. Trykk **⇄ Oversett-hjelper** og følg stegene for norsk og tysk.
5. Trykk **⬇ Download data.js** — en ny `data.js` lastes ned.
6. Legg den nye `data.js` opp på GitHub, **i guidebook-mappen**
   (erstatt den gamle `guidebook/data.js`).
7. Vercel publiserer automatisk på ~30 sekunder.

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

### Steg 3 — Eget domene
preikestolenvilla.com er hovedside, preikestolenvilla.no videresender
dit. Full steg-for-steg-oppskrift (tilpasset Domeneshop) ligger i
egen fil: **DOMENEOPPSETT.md**

## Oppdatere senere
Rediger i admin → last ned `data.js` → erstatt på GitHub.
Vercel publiserer automatisk.
