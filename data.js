// ════════════════════════════════════════════════════════════
//  VILLAEN I ALSVIK — INNHOLD / CONTENT / INHALT
//  All tekst finnes på tre språk: en (English), no (Norsk), de (Deutsch).
//  Rediger via admin-panelet på siden (enklest), eller her direkte.
//
//  Video: lim inn en YouTube-lenke. Tips: sett den til "Unlisted".
//  Bilder: filnavn (ligger i repoet) eller full https://-adresse.
// ════════════════════════════════════════════════════════════

window.VILLA_DATA = {

  // Standardspråk når siden åpnes
  defaultLang: "en",

  // ── GENERELT (forsiden) ──
  house: {
    // navn er likt på alle språk
    name: "Villaen i Alsvik",
    tagline: {
      en: "A quiet house by the fjord, in the heart of Ryfylke",
      no: "Et stille hus ved fjorden, i hjertet av Ryfylke",
      de: "Ein stilles Haus am Fjord, im Herzen von Ryfylke",
    },
    intro: {
      en: "Surrounded by forest, sea and mountains, Villaen i Alsvik is a place to slow down. Long mornings, cold dips, and evenings by the fire while the light fades behind the hills. A fine base for experiencing the best of Ryfylke.",
      no: "Omgitt av skog, sjø og fjell ligger Villaen i Alsvik som et tilbaketrukket pusterom. Lange morgener, kalde bad og kvelder ved peisen mens lyset forsvinner bak åsene. Et godt utgangspunkt for å oppleve det beste av Ryfylke.",
      de: "Umgeben von Wald, Meer und Bergen ist Villaen i Alsvik ein Ort zum Entschleunigen. Lange Morgen, kalte Bäder und Abende am Kamin, während das Licht hinter den Hügeln verschwindet. Ein guter Ausgangspunkt, um das Beste von Ryfylke zu erleben.",
    },
    checkIn: { en: "From 4:00 PM", no: "Fra kl. 16:00", de: "Ab 16:00 Uhr" },
    checkOut: { en: "By 11:00 AM", no: "Innen kl. 11:00", de: "Bis 11:00 Uhr" },
    heroImage: "hero.jpg",
    houseImage: "house.jpg",
  },

  // ── KONTAKT-SEKSJON ──
  contact: {
    heading: {
      en: "Anything you're wondering about?",
      no: "Er det noe du lurer på?",
      de: "Gibt es etwas, das Sie wissen möchten?",
    },
    body: {
      en: "We handle all communication through Airbnb and similar platforms, so everything stays in one place for you. Feel free to send us a message there before or during your stay — we always strive to reply within a short time.",
      no: "All kommunikasjon går gjennom Airbnb og lignende plattformer, slik at alt er samlet ett sted for deg. Send oss gjerne en melding der før eller under oppholdet — vi etterstreber alltid å svare innen kort tid.",
      de: "Die gesamte Kommunikation läuft über Airbnb und ähnliche Plattformen, sodass für Sie alles an einem Ort bleibt. Schreiben Sie uns dort gerne vor oder während Ihres Aufenthalts — wir bemühen uns stets, innerhalb kurzer Zeit zu antworten.",
    },
  },

  // ── OMRÅDET (redigerbare turer med bilde + kartlenke) ──
  area: {
    heading: {
      en: "Ryfylke right outside the door",
      no: "Ryfylke rett utenfor døren",
      de: "Ryfylke direkt vor der Tür",
    },
    intro: {
      en: "From Alsvik nature center with trails and bathing spots, to Preikestolen and fjord cruises on the Lysefjord — most of it is within reach for a day trip.",
      no: "Fra Alsvik natursenter med stier og badeplasser, til Preikestolen og fjordcruise på Lysefjorden — det meste ligger innen rekkevidde for en dagstur.",
      de: "Vom Naturzentrum Alsvik mit Wegen und Badeplätzen bis zum Preikestolen und Fjordkreuzfahrten auf dem Lysefjord — vieles ist für einen Tagesausflug erreichbar.",
    },
    trips: [
      {
        image: "preikestolen.jpg",
        title: { en: "Preikestolen (Pulpit Rock)", no: "Preikestolen", de: "Preikestolen (Kanzelfelsen)" },
        text: {
          en: "The iconic hike to Preikestolen is a short drive away. The trail is about four kilometres each way and takes two to three hours up. Start early to avoid the biggest crowds.",
          no: "Den ikoniske turen til Preikestolen ligger en kjøretur unna. Turen er omtrent fire kilometer hver vei og tar to–tre timer opp. Start tidlig for å unngå de største folkemengdene.",
          de: "Die ikonische Wanderung zum Preikestolen ist eine kurze Autofahrt entfernt. Der Weg ist etwa vier Kilometer pro Richtung und dauert zwei bis drei Stunden hinauf. Starten Sie früh, um die größten Menschenmengen zu vermeiden.",
        },
        mapUrl: "https://maps.google.com/?q=Preikestolen",
      },
      {
        image: "area.jpg",
        title: { en: "Lysefjord cruise", no: "Fjordcruise på Lysefjorden", de: "Lysefjord-Kreuzfahrt" },
        text: {
          en: "A cruise on the 42-kilometre Lysefjord departs from Stavanger and is a wonderful experience in any season, with cliffs rising over a thousand metres straight from the water.",
          no: "Fjordcruise på den 42 kilometer lange Lysefjorden går fra Stavanger og er en flott opplevelse uansett årstid, med stup som reiser seg over tusen meter rett opp fra vannet.",
          de: "Eine Kreuzfahrt auf dem 42 Kilometer langen Lysefjord startet in Stavanger und ist zu jeder Jahreszeit ein wunderbares Erlebnis, mit Klippen, die über tausend Meter direkt aus dem Wasser ragen.",
        },
        mapUrl: "https://maps.google.com/?q=Lysefjorden",
      },
      {
        image: "",
        title: { en: "Alsvik nature center", no: "Alsvik natursenter", de: "Naturzentrum Alsvik" },
        text: {
          en: "Right nearby is Alsvik nature center with walking trails, bathing spots and barbecue huts. A calm starting point for both short and long walks, and ideal for a paddle in the Lutsi waterway.",
          no: "Rett i nærheten ligger Alsvik natursenter med turstier, badeplasser og grillhytter. Et rolig utgangspunkt for både korte og lange turer, og perfekt for en padletur i Lutsivassdraget.",
          de: "Ganz in der Nähe liegt das Naturzentrum Alsvik mit Wanderwegen, Badeplätzen und Grillhütten. Ein ruhiger Ausgangspunkt für kurze und lange Spaziergänge und ideal für eine Paddeltour auf dem Lutsi-Wasserweg.",
        },
        mapUrl: "https://maps.google.com/?q=Alsvik+natursenter",
      },
    ],
  },

  // ── VEILEDNINGER (guidebook) ──
  // Ikoner: key, wifi, flame, thermometer, compass, door, book, water
  manuals: [
    {
      id: "ankomst",
      icon: "key",
      title: { en: "Arrival & keys", no: "Ankomst og nøkkel", de: "Ankunft & Schlüssel" },
      summary: {
        en: "How to get in and settle during the first minutes.",
        no: "Slik kommer du deg inn og finner deg til rette.",
        de: "So kommen Sie hinein und richten sich ein.",
      },
      sections: [
        {
          type: "text",
          heading: { en: "Welcome", no: "Velkommen", de: "Willkommen" },
          body: {
            en: "A warm welcome to Villaen i Alsvik. We hope you have a lovely stay by the fjord. Here you'll find everything you need — feel free to look through the guides before you settle in.",
            no: "Hjertelig velkommen til Villaen i Alsvik. Vi håper dere får et fint opphold ved fjorden. Her finner dere alt dere trenger — ta gjerne en titt gjennom veiledningene før dere setter dere til rette.",
            de: "Herzlich willkommen in Villaen i Alsvik. Wir hoffen, Sie haben einen schönen Aufenthalt am Fjord. Hier finden Sie alles Nötige — schauen Sie sich gerne die Anleitungen an, bevor Sie sich einrichten.",
          },
          video: "",
        },
        {
          type: "text",
          heading: { en: "Key box", no: "Nøkkelboks", de: "Schlüsselbox" },
          body: {
            en: "The key box is to the right of the front door. The code is sent by SMS the day before arrival. Turn the dials back to 0000 and close the box well after taking out the key.",
            no: "Nøkkelboksen henger til høyre for inngangsdøren. Koden sendes på SMS dagen før ankomst. Vri hjulene tilbake til 0000 og lukk luken godt igjen etter at dere har tatt ut nøkkelen.",
            de: "Die Schlüsselbox befindet sich rechts neben der Haustür. Der Code wird am Tag vor der Ankunft per SMS gesendet. Stellen Sie die Räder auf 0000 zurück und schließen Sie die Box gut, nachdem Sie den Schlüssel entnommen haben.",
          },
          video: "",
        },
        {
          type: "text",
          heading: { en: "Parking", no: "Parkering", de: "Parken" },
          body: {
            en: "Park on the gravel area in front of the house. There is room for two cars. Please do not block the private road further on, as the neighbour uses it daily.",
            no: "Parker på grusplassen foran huset. Det er plass til to biler. Vennligst ikke blokker den private veien videre, da naboen bruker den daglig.",
            de: "Parken Sie auf dem Schotterplatz vor dem Haus. Es ist Platz für zwei Autos. Bitte blockieren Sie nicht die private Straße dahinter, da der Nachbar sie täglich nutzt.",
          },
          video: "",
        },
      ],
    },
    {
      id: "badstamp",
      icon: "water",
      title: { en: "Hot tub & sauna", no: "Badestamp og badstue", de: "Badezuber & Sauna" },
      summary: {
        en: "How to use the hot tub and the sauna safely and well.",
        no: "Slik bruker du badestampen og badstuen trygt og godt.",
        de: "So nutzen Sie Badezuber und Sauna sicher und gut.",
      },
      sections: [
        {
          type: "text",
          heading: { en: "The hot tub", no: "Badestampen", de: "Der Badezuber" },
          body: {
            en: "The hot tub takes a few hours to heat up, so start early in the day. Light the stove with dry wood (in the wood shed) and keep an eye on it. Comfortable temperature is around 37–39°C — never exceed 40°C. Always keep the lid on when not in use to retain heat.",
            no: "Badestampen bruker noen timer på å varmes opp, så start tidlig på dagen. Fyr opp ovnen med tørr ved (i vedboden) og hold et øye med den. Behagelig temperatur er rundt 37–39°C — overstig aldri 40°C. Ha alltid lokket på når den ikke er i bruk for å holde på varmen.",
            de: "Der Badezuber braucht einige Stunden zum Aufheizen, beginnen Sie also früh am Tag. Heizen Sie den Ofen mit trockenem Holz an (im Holzschuppen) und behalten Sie ihn im Auge. Angenehme Temperatur liegt bei 37–39°C — überschreiten Sie nie 40°C. Lassen Sie den Deckel bei Nichtbenutzung immer geschlossen, um die Wärme zu halten.",
          },
          video: "",
        },
        {
          type: "text",
          heading: { en: "The sauna", no: "Badstuen", de: "Die Sauna" },
          body: {
            en: "The electric sauna heater is turned on with the dial inside the door. It reaches a good temperature in about 30–40 minutes. Pour water on the stones with the ladle for steam. Sit on a towel, drink plenty of water, and step out if you feel unwell.",
            no: "Den elektriske badstuovnen skrus på med bryteren innenfor døren. Den når god temperatur på cirka 30–40 minutter. Hell vann på steinene med øsen for damp. Sitt på et håndkle, drikk rikelig med vann, og gå ut hvis du føler deg uvel.",
            de: "Der elektrische Saunaofen wird mit dem Schalter innen an der Tür eingeschaltet. Er erreicht in etwa 30–40 Minuten eine gute Temperatur. Gießen Sie mit der Kelle Wasser auf die Steine für Dampf. Sitzen Sie auf einem Handtuch, trinken Sie ausreichend Wasser und gehen Sie hinaus, wenn Sie sich unwohl fühlen.",
          },
          video: "",
        },
        {
          type: "checklist",
          heading: { en: "Good to remember", no: "Greit å huske", de: "Gut zu merken" },
          items: {
            en: [
              "Shower before using the hot tub and sauna",
              "No glass near the hot tub or sauna",
              "Children only with an adult present",
              "Avoid alcohol when using the sauna or hot tub",
              "Turn off the sauna heater after use",
              "Put the lid back on the hot tub",
            ],
            no: [
              "Dusj før du bruker badestamp og badstue",
              "Ikke glass i nærheten av stamp eller badstue",
              "Barn kun sammen med en voksen",
              "Unngå alkohol ved bruk av badstue eller stamp",
              "Skru av badstuovnen etter bruk",
              "Legg lokket tilbake på badestampen",
            ],
            de: [
              "Vor Nutzung von Badezuber und Sauna duschen",
              "Kein Glas in der Nähe von Zuber oder Sauna",
              "Kinder nur mit einem Erwachsenen",
              "Alkohol bei Sauna- oder Zubernutzung vermeiden",
              "Saunaofen nach Gebrauch ausschalten",
              "Deckel wieder auf den Badezuber legen",
            ],
          },
        },
      ],
    },
    {
      id: "husregler",
      icon: "book",
      title: { en: "House rules", no: "Husregler", de: "Hausregeln" },
      summary: {
        en: "The most important things during your stay.",
        no: "Det viktigste å være klar over under oppholdet.",
        de: "Das Wichtigste während Ihres Aufenthalts.",
      },
      sections: [
        {
          type: "checklist",
          heading: { en: "In short", no: "Kort oppsummert", de: "Kurz gefasst" },
          items: {
            en: [
              "No smoking indoors",
              "Maximum number of guests as agreed at booking",
              "Quiet after 11:00 PM — please respect the neighbours",
              "No parties or events without prior agreement",
              "Pets only by prior arrangement",
              "Keep it tidy — treat the house as your own",
            ],
            no: [
              "Røyking er ikke tillatt innendørs",
              "Maks antall gjester som avtalt ved booking",
              "Ro etter kl. 23:00 — vis hensyn til naboer",
              "Ingen fester eller arrangementer uten avtale",
              "Kjæledyr kun etter avtale på forhånd",
              "Hold det ryddig — behandle huset som ditt eget",
            ],
            de: [
              "Rauchen im Innenbereich nicht gestattet",
              "Maximale Gästezahl wie bei Buchung vereinbart",
              "Ruhe nach 23:00 Uhr — bitte Nachbarn respektieren",
              "Keine Feiern oder Veranstaltungen ohne Absprache",
              "Haustiere nur nach vorheriger Vereinbarung",
              "Halten Sie es ordentlich — wie Ihr eigenes Zuhause",
            ],
          },
        },
        {
          type: "text",
          heading: { en: "Damage and accidents", no: "Skader og uhell", de: "Schäden und Unfälle" },
          body: {
            en: "It's perfectly fine to let us know if something breaks — tell us as soon as possible and we'll sort it out together. Honesty is always appreciated.",
            no: "Det går fint å si fra om noe går i stykker — gi oss beskjed så raskt som mulig, så ordner vi opp sammen. Ærlighet settes alltid pris på.",
            de: "Es ist völlig in Ordnung, uns zu informieren, wenn etwas kaputtgeht — sagen Sie uns so schnell wie möglich Bescheid, und wir regeln es gemeinsam. Ehrlichkeit wird immer geschätzt.",
          },
          video: "",
        },
      ],
    },
    {
      id: "wifi",
      icon: "wifi",
      title: { en: "WiFi & entertainment", no: "WiFi og underholdning", de: "WLAN & Unterhaltung" },
      summary: {
        en: "Network, password and how the TV works.",
        no: "Nettverk, passord og hvordan TV-en fungerer.",
        de: "Netzwerk, Passwort und wie der Fernseher funktioniert.",
      },
      sections: [
        {
          type: "text",
          heading: { en: "Wireless network", no: "Trådløst nettverk", de: "WLAN-Netzwerk" },
          body: {
            en: "Network name: Villaen_Alsvik\nPassword: fjorden2024\n\nThe router is in the technical cabinet in the hallway. Turn it off and on again if the connection drops.",
            no: "Nettverksnavn: Villaen_Alsvik\nPassord: fjorden2024\n\nRuteren står i teknisk skap i gangen. Skru den av og på igjen dersom nettet henger.",
            de: "Netzwerkname: Villaen_Alsvik\nPasswort: fjorden2024\n\nDer Router befindet sich im Technikschrank im Flur. Schalten Sie ihn aus und wieder ein, wenn die Verbindung abbricht.",
          },
          video: "",
        },
        {
          type: "text",
          heading: { en: "TV", no: "TV", de: "Fernseher" },
          body: {
            en: "The smart TV in the living room has streaming services installed. Feel free to log in to your own account, but remember to log out again before departure.",
            no: "Smart-TV i stuen har strømmetjenester ferdig installert. Logg gjerne inn på din egen konto, men husk å logge ut igjen før avreise.",
            de: "Der Smart-TV im Wohnzimmer hat Streaming-Dienste installiert. Melden Sie sich gerne mit Ihrem eigenen Konto an, denken Sie aber daran, sich vor der Abreise wieder abzumelden.",
          },
          video: "",
        },
      ],
    },
    {
      id: "kjokken",
      icon: "flame",
      title: { en: "Kitchen & appliances", no: "Kjøkken og hvitevarer", de: "Küche & Geräte" },
      summary: {
        en: "Dishwasher, induction hob, coffee and the practical bits.",
        no: "Oppvaskmaskin, induksjonstopp, kaffe og det praktiske.",
        de: "Spülmaschine, Induktionskochfeld, Kaffee und Praktisches.",
      },
      sections: [
        {
          type: "text",
          heading: { en: "Induction hob", no: "Induksjonstopp", de: "Induktionskochfeld" },
          body: {
            en: "The kitchen has an induction hob. Use only pots and pans with a magnetic base (the ones provided work). Press and hold the on/off button for two seconds to start.",
            no: "Kjøkkenet har induksjonstopp. Bruk kun kjeler og panner med magnetisk bunn (de medfølgende fungerer). Trykk og hold av/på-knappen i to sekunder for å starte.",
            de: "Die Küche hat ein Induktionskochfeld. Verwenden Sie nur Töpfe und Pfannen mit magnetischem Boden (die mitgelieferten funktionieren). Halten Sie die Ein-/Aus-Taste zwei Sekunden gedrückt zum Starten.",
          },
          video: "",
        },
        {
          type: "text",
          heading: { en: "Coffee", no: "Kaffe", de: "Kaffee" },
          body: {
            en: "There is a French press and a filter brewer on the counter. Coffee and filters are in the top drawer to the left of the stove.",
            no: "Det står en stempelkanne og en filtertrakter på benken. Kaffe og filter finner dere i øverste skuff til venstre for komfyren.",
            de: "Auf der Arbeitsplatte stehen eine French Press und eine Filtermaschine. Kaffee und Filter finden Sie in der obersten Schublade links vom Herd.",
          },
          video: "",
        },
        {
          type: "text",
          heading: { en: "Waste sorting", no: "Avfall og sortering", de: "Abfalltrennung" },
          body: {
            en: "Residual waste, paper and deposit bottles are sorted in the cabinet under the sink. The bins are by the driveway. Please take the waste out on departure — it helps us keep the standard for the next guest.",
            no: "Restavfall, papir og pant sorteres i skapet under vasken. Dunkene står ved innkjørselen. Vennligst ta med avfall ut ved avreise — det hjelper oss å holde standarden oppe til neste gjest.",
            de: "Restmüll, Papier und Pfandflaschen werden im Schrank unter der Spüle getrennt. Die Tonnen stehen an der Einfahrt. Bitte nehmen Sie den Müll bei der Abreise mit — das hilft uns, den Standard für den nächsten Gast zu halten.",
          },
          video: "",
        },
      ],
    },
    {
      id: "varme",
      icon: "thermometer",
      title: { en: "Heating & fireplace", no: "Varme og peis", de: "Heizung & Kamin" },
      summary: {
        en: "Heat pump, underfloor heating and lighting the fire.",
        no: "Varmepumpe, gulvvarme og fyring i peisen.",
        de: "Wärmepumpe, Fußbodenheizung und Kaminfeuer.",
      },
      sections: [
        {
          type: "text",
          heading: { en: "Heat pump", no: "Varmepumpe", de: "Wärmepumpe" },
          body: {
            en: "The heat pump in the living room is controlled with the remote on the wall. We recommend 21–22°C. Please lower it to 18°C on departure rather than turning it off completely.",
            no: "Varmepumpen i stuen styres med fjernkontrollen på veggen. Vi anbefaler 21–22 grader. Vennligst senk til 18 grader ved avreise i stedet for å skru helt av.",
            de: "Die Wärmepumpe im Wohnzimmer wird mit der Fernbedienung an der Wand gesteuert. Wir empfehlen 21–22°C. Bitte stellen Sie sie bei der Abreise auf 18°C, statt sie ganz auszuschalten.",
          },
          video: "",
        },
        {
          type: "text",
          heading: { en: "Fireplace", no: "Peis", de: "Kamin" },
          body: {
            en: "Firewood is in the wood shed outside. Use firelighters and keep the door slightly open for the first few minutes. Close the damper halfway once it burns well. Ash must be completely cold before removal.",
            no: "Ved ligger i vedboden på utsiden. Bruk opptenningsbriketter og la luken stå på gløtt de første minuttene. Steng spjeldet halvveis når det brenner godt. Aske må være helt kald før den fjernes.",
            de: "Brennholz befindet sich im Holzschuppen draußen. Verwenden Sie Anzünder und lassen Sie die Tür die ersten Minuten leicht offen. Schließen Sie die Klappe halb, wenn es gut brennt. Asche muss vor dem Entfernen vollständig kalt sein.",
          },
          video: "",
        },
      ],
    },
    {
      id: "avreise",
      icon: "door",
      title: { en: "Departure", no: "Avreise", de: "Abreise" },
      summary: {
        en: "Checklist for a smooth check-out.",
        no: "Sjekkliste for en grei utsjekk.",
        de: "Checkliste für einen reibungslosen Check-out.",
      },
      sections: [
        {
          type: "checklist",
          heading: { en: "Before you leave", no: "Før dere drar", de: "Bevor Sie gehen" },
          items: {
            en: [
              "Dishwasher emptied and started",
              "Rubbish taken out and sorted",
              "Beds left as you found them (linen left behind)",
              "Used dishes put away",
              "Heat pump lowered to 18°C",
              "Streaming services logged out",
              "Windows and doors closed and locked",
              "Key back in the box, dials set to 0000",
            ],
            no: [
              "Oppvaskmaskinen tømt og satt i gang",
              "Søppel tatt ut og sortert",
              "Senger forlatt slik dere fant dem (sengetøy ligges igjen)",
              "Brukt servise satt på plass",
              "Varmepumpe senket til 18 grader",
              "Strømmetjenester logget ut av",
              "Vinduer og dører lukket og låst",
              "Nøkkel lagt tilbake i boksen, hjulene stilt til 0000",
            ],
            de: [
              "Spülmaschine geleert und gestartet",
              "Müll hinausgebracht und getrennt",
              "Betten so gelassen wie vorgefunden (Bettwäsche liegen lassen)",
              "Benutztes Geschirr weggeräumt",
              "Wärmepumpe auf 18°C gesenkt",
              "Streaming-Dienste abgemeldet",
              "Fenster und Türen geschlossen und abgeschlossen",
              "Schlüssel zurück in der Box, Räder auf 0000",
            ],
          },
        },
        {
          type: "text",
          heading: { en: "Thank you", no: "Tusen takk", de: "Vielen Dank" },
          body: {
            en: "Thank you for taking good care of the house. We greatly appreciate guests who leave the place tidy, and hope you've had a wonderful stay. A good review means a lot to us — and we're glad to leave a good one in return.",
            no: "Takk for at dere tok godt vare på huset. Vi setter stor pris på gjester som etterlater stedet pent, og håper dere har hatt et fint opphold. En god anmeldelse betyr mye for oss — og vi gir gjerne en god tilbake.",
            de: "Danke, dass Sie gut auf das Haus aufgepasst haben. Wir schätzen Gäste, die den Ort ordentlich hinterlassen, sehr und hoffen, Sie hatten einen schönen Aufenthalt. Eine gute Bewertung bedeutet uns viel — und wir geben gerne eine gute zurück.",
          },
          video: "",
        },
      ],
    },
  ],
};
