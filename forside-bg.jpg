# DOMENEOPPSETT — preikestolenvilla.com (hoved) + .no (videresending)

Domener kjøpt hos Domeneshop (domene.shop). Nettsiden ligger på Vercel.
Oppsett i to ledd: først Vercel, så Domeneshop.

═══════════════════════════════════════════════════════════════
DEL 1 — I VERCEL  (prosjektet → Settings → Domains)
═══════════════════════════════════════════════════════════════

[ ] Add: preikestolenvilla.com
      → velg: www redirecter til uten-www (preikestolenvilla.com)
[ ] Noter DNS-verdiene Vercel viser. Typisk:
      A      @     76.76.21.21
      CNAME  www   cname.vercel-dns.com
[ ] Add: preikestolenvilla.no
      → klikk domenet → Redirect to: preikestolenvilla.com  (308 Permanent)
[ ] (valgfritt) Add: www.preikestolenvilla.no → samme redirect

VIKTIG: Bruk alltid de EKSAKTE verdiene Vercel viser, hvis de
avviker fra eksemplene over.

═══════════════════════════════════════════════════════════════
DEL 2 — HOS DOMENESHOP  (domene.shop → Mine domener)
═══════════════════════════════════════════════════════════════

--- preikestolenvilla.com → DNS ---
[ ] Slett gamle A/AAAA/CNAME for tom (@) og www (parkering)
[ ] Legg til:  A      (navn tomt)   76.76.21.21
[ ] Legg til:  CNAME  www           cname.vercel-dns.com.
[ ] Lagre

--- preikestolenvilla.no → DNS ---
[ ] Slett gamle A/AAAA/CNAME for tom (@) og www
[ ] Legg til:  A      (navn tomt)   76.76.21.21
[ ] Legg til:  CNAME  www           cname.vercel-dns.com.
[ ] Lagre

IKKE bruk Domeneshops egen "Videresending"-funksjon — videresending
fra .no til .com styres av Vercel (Del 1). DNS skal bare peke mot Vercel.

═══════════════════════════════════════════════════════════════
ETTERPÅ
═══════════════════════════════════════════════════════════════

[ ] Vent 15–60 min (maks 24–48 t) på at DNS sprer seg
[ ] Sjekk Vercel → Settings → Domains: grønn hake = ferdig
[ ] https (SSL) ordnes automatisk av Vercel — ingenting å gjøre

SLUTTRESULTAT:
  preikestolenvilla.com  + www   →  viser nettsiden (hovedside)
  preikestolenvilla.no   + www   →  videresender permanent til .com
