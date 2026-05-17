# Villaen i Alsvik

Nettside med guidebook, praktisk informasjon og redigerbare veiledninger
(tekst + video). Bygget med Next.js, klar for GitHub + Vercel. Gratis å drifte.

---

## Hva du får

- **Eksklusiv forside** med stort førsteinntrykk, naturpalett fra Ryfylke,
  rolig typografi og myke scroll-animasjoner.
- **Guidebook** der hver veiledning får sitt eget kort og sin egen side
  (ankomst, WiFi, kjøkken, varme, området, avreise — alt kan endres).
- **Admin-panel på `/admin`** med passord. Her kan du:
  - Endre all tekst på forsiden og kontaktinfo
  - Lage nye veiledninger, slette og endre rekkefølge
  - Legge til tekstblokker, videoblokker og sjekklister
  - Lime inn YouTube/Vimeo-lenke **eller** laste opp egen videofil
- **Ingen database nødvendig.** Lokalt lagres innhold i en fil. I produksjon
  brukes Vercel Blob (gratis nivå), som settes opp automatisk.

---

## Del 1 — Kjøre lokalt på maskinen din (valgfritt)

1. Installer [Node.js](https://nodejs.org) (versjon 18 eller nyere).
2. I en terminal, i denne mappen:
   ```bash
   npm install
   cp .env.example .env.local
   npm run dev
   ```
3. Åpne `http://localhost:3000`. Admin ligger på `http://localhost:3000/admin`
   (passord = det du satte i `.env.local`, standard `villaen`).

Endringer du gjør i admin lokalt lagres i en lokal fil (`.data/`) og påvirker
ikke den publiserte siden.

---

## Del 2 — Legge prosjektet på GitHub

1. Lag en konto på [github.com](https://github.com) hvis du ikke har en.
2. Lag et nytt, **tomt** repository (f.eks. `villaen-i-alsvik`). Ikke huk av
   for README/gitignore — vi har allerede det.
3. I terminalen, i denne mappen:
   ```bash
   git init
   git add .
   git commit -m "Villaen i Alsvik - første versjon"
   git branch -M main
   git remote add origin https://github.com/DITT-BRUKERNAVN/villaen-i-alsvik.git
   git push -u origin main
   ```

---

## Del 3 — Publisere gratis med Vercel

1. Gå til [vercel.com](https://vercel.com) og logg inn **med GitHub**.
2. Klikk **Add New → Project**, og velg repoet `villaen-i-alsvik`.
3. Vercel oppdager Next.js automatisk. Før du klikker Deploy, åpne
   **Environment Variables** og legg til disse to:

   | Navn | Verdi |
   |---|---|
   | `ADMIN_PASSWORD` | Passordet du vil bruke for å logge inn på `/admin` |
   | `ADMIN_SESSION_SECRET` | En lang tilfeldig streng (se under) |

   En god `ADMIN_SESSION_SECRET` lager du f.eks. på
   [random.org/strings](https://www.random.org/strings/) eller med kommandoen
   `openssl rand -hex 32` i en terminal.

4. Klikk **Deploy**. Etter ca. ett minutt er siden live på en `.vercel.app`-adresse.

### Skru på video-/bildeopplasting (Vercel Blob)

Opplasting av egne filer krever lagring. Dette er gratis å sette opp:

1. I Vercel-prosjektet: gå til fanen **Storage**.
2. Velg **Blob → Create**, og knytt den til prosjektet.
3. Vercel legger da automatisk inn `BLOB_READ_WRITE_TOKEN`.
4. Gå til **Deployments → ⋯ → Redeploy** for at endringen skal tre i kraft.

Uten dette steget fungerer alt unntatt direkte filopplasting — du kan
fortsatt lime inn YouTube/Vimeo-lenker for video.

### Anbefaling for video (viktig)

For instruksjonsvideoer i manualene anbefales **uoppslagbare
YouTube-videoer** fremfor direkte filopplasting:

- Last opp videoen på YouTube og sett synlighet til **«Unlisted»**
  (uoppslagbar). Da er den ikke søkbar og dukker ikke opp på kanalen din,
  men kan spilles av av alle som har lenken.
- Lim YouTube-lenken inn i videofeltet i admin.

Fordeler: gratis og ubegrenset lagring, rask avspilling på alle enheter,
og det belaster ikke Vercel Blob-kvoten. Bruk heller Blob-opplasting til
*bilder*, og YouTube til *video*. Direkte filopplasting av video fungerer
også, men er best for helt korte klipp.

---

## Del 4 — Bruke admin

- Gå til `dittdomene.vercel.app/admin` og logg inn med `ADMIN_PASSWORD`.
- Rediger tekst, legg til veiledninger og blokker.
- Klikk **Lagre & publiser**. Endringene vises umiddelbart på nettsiden.

---

## Bytte ut bilder

Bildene på forsiden ligger øverst i `app/page.js` (objektet `IMG`). Bytt
URL-ene til dine egne bilder av villaen — enten direkte lenker, eller last
opp bildene et sted og lim inn lenkene. (For å bruke egne domener til bilder,
legg dem til i `next.config.mjs` under `remotePatterns`.)

## Eget domene

I Vercel: **Settings → Domains → Add**. Følg veiledningen for å peke
f.eks. `villaenialsvik.no` til siden.

## Oppdatere siden senere

Endre filer lokalt, og kjør:
```bash
git add . && git commit -m "Oppdatering" && git push
```
Vercel bygger og publiserer automatisk ved hver push.
