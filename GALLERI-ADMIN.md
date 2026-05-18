# GALLERI-ADMIN — slik fungerer det

Du kan nå styre bildegalleriet selv, uten å røre kode.

═══════════════════════════════════════════════════════════════
  ÅPNE ADMIN
═══════════════════════════════════════════════════════════════

1. Gå til forsiden (preikestolenvilla.com)
2. Scroll helt ned til bunnen
3. Klikk den lille teksten "Gallery admin" i footeren
4. Skriv passordet: villaen2024
   (bytt dette før lansering — se nederst)

═══════════════════════════════════════════════════════════════
  HVA DU KAN GJØRE I ADMIN
═══════════════════════════════════════════════════════════════

For hvert bilde kan du:
- Velge ROMTYPE (Living room, Kitchen, Bedroom, Exterior osv.)
  - Velg "+ New room type…" for å lage din egen
- Skrive en BESKRIVELSE (vises når gjesten åpner bildet stort)
- Slå bildet PÅ/AV (Off skjuler det fra galleriet uten å slette)
- Endre REKKEFØLGE med ▲ og ▼

Gjesten kan filtrere galleriet på romtype (knappene øverst i
galleriet — "All / Living room / Kitchen …").

═══════════════════════════════════════════════════════════════
  SLIK LAGRER DU ENDRINGENE
═══════════════════════════════════════════════════════════════

Endringene lagres IKKE automatisk på nettsiden (det er en
trygg, enkel løsning uten server). Slik gjør du dem permanente:

1. Gjør endringene i admin
2. Klikk "⬇ Download galleri.js"
3. Filen galleri.js lastes ned til PC-en din
4. Legg den i prosjektmappen (erstatt den gamle galleri.js)
5. Last opp til GitHub via GitHub Desktop

Neste gang siden lastes, vises endringene for alle.

═══════════════════════════════════════════════════════════════
  LEGGE TIL NYE BILDER
═══════════════════════════════════════════════════════════════

Selve bildefilene kan ikke lastes opp gjennom admin (en ren
nettside uten server kan ikke ta imot filer). Slik legger du
til nye bilder:

1. Lag TO versjoner av bildet:
   - navn.jpg     (stor, maks ~1600px bred — til lysboks)
   - navn-t.jpg   (liten, maks ~700px bred — til rutenett)
   Bruk samme "navn" på begge (uten mellomrom/spesialtegn).
2. Legg begge i mappen bilder/ via GitHub Desktop
3. Åpne galleri.js i en teksteditor og legg til en linje under
   "photos": (kopier en eksisterende linje, bytt "file")
   ELLER: si fra til meg, så legger jeg dem inn for deg.
4. Bildet dukker nå opp i admin, klart til å merkes.

Tips: trenger du hjelp til å lage de to bildestørrelsene,
send originalene, så optimaliserer jeg dem riktig.

═══════════════════════════════════════════════════════════════
  BYTTE PASSORD (gjør dette før lansering)
═══════════════════════════════════════════════════════════════

Åpne index.html, søk etter:
  var ADMIN_PASSWORD = "villaen2024";
Bytt "villaen2024" til ditt eget passord. Lagre, last opp.

Merk: repoet er offentlig, så dette er en enkel sperre mot
tilfeldig tukling — ikke en sikker innlogging. Det holder for
formålet (styre et bildegalleri), men ikke legg noe sensitivt
bak den.
