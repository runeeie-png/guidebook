# E-POSTOPPSETT — booking@preikestolenvilla.com

Forsiden viser nå en diskret lenke for direkte booking:
booking@preikestolenvilla.com

Denne adressen finnes ikke ennå — du må sette den opp. Gratis,
tar noen minutter, via Cloudflare (der domenet ditt allerede ligger).

═══════════════════════════════════════════════════════════════
  Slik lager du adressen (Cloudflare Email Routing)
═══════════════════════════════════════════════════════════════

1. Logg inn på dash.cloudflare.com
2. Velg domenet preikestolenvilla.com
3. I menyen til venstre: klikk "Email" → "Email Routing"
4. Klikk "Get started" / "Enable Email Routing"
5. Cloudflare legger automatisk inn nødvendige MX-oppføringer
   (godkjenn dette — det er trygt)
6. Under "Routing rules" / "Custom addresses":
   - Custom address:  booking@preikestolenvilla.com
   - Action:          Send to
   - Destination:     din vanlige private e-postadresse
7. Cloudflare sender en bekreftelses-e-post til din private
   adresse — klikk lenken der for å bekrefte
8. Ferdig. Alt som sendes til booking@preikestolenvilla.com
   havner nå i din vanlige innboks.

═══════════════════════════════════════════════════════════════
  Viktig å vite
═══════════════════════════════════════════════════════════════

- Dette er VIDERESENDING. Du mottar e-post, men når du svarer
  kommer svaret fra din private adresse (ikke booking@...).
  For de fleste er det helt greit. Vil du også SENDE fra
  booking@-adressen, kreves en ekte e-postjeneste (f.eks.
  Google Workspace) — det koster penger og er sjelden nødvendig
  for en utleiebolig.

- Endre adressen i index.html hvis du vil bruke et annet navn:
  søk etter "booking@preikestolenvilla.com" (to steder:
  mailto-lenken og den synlige teksten).

- Airbnb-tips: ikke bruk Airbnb-meldinger til å lede gjester til
  direkte booking. Å ha adressen på din egen nettside er greit;
  å aktivt sende Airbnb-gjester vekk fra plattformen kan gi
  problemer med Airbnb-kontoen din.
