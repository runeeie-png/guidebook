// ════════════════════════════════════════════════════════════
//  VILLAEN I ALSVIK — INNHOLD
//  Denne filen inneholder all tekst og alle veiledninger.
//  Du redigerer via admin-panelet på siden (enklest),
//  eller direkte i denne filen om du vil.
//
//  Video: lim inn en YouTube-lenke i video-feltet.
//  Tips: sett YouTube-videoen til "Uoppført / Unlisted" — da er
//  den ikke søkbar, men kan spilles av via lenken. Gratis.
// ════════════════════════════════════════════════════════════

window.VILLA_DATA = {

  // ── GENERELT (vises på forsiden) ──
  house: {
    name: "Villaen i Alsvik",
    tagline: "Et stille hus ved fjorden, i hjertet av Ryfylke",
    intro:
      "Omgitt av skog, sjø og fjell ligger Villaen i Alsvik som et tilbaketrukket pusterom. Her er det rom for lange morgener, kalde bad og kvelder ved peisen mens lyset forsvinner bak åsene. Et godt utgangspunkt for å oppleve det beste av Ryfylke.",
    checkIn: "Fra kl. 16:00",
    checkOut: "Innen kl. 11:00",
    contactName: "Vert",
    contactPhone: "+47 000 00 000",
    contactEmail: "post@villaenialsvik.no",
    // Bilder: bytt til lenker til egne bilder når du har dem.
    heroImage:
      "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?auto=format&fit=crop&w=2400&q=80",
    houseImage:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1400&q=80",
    areaImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80",
  },

  // ── VEILEDNINGER (guidebook) ──
  // Hver veiledning: id, ikon, tittel, kort beskrivelse, seksjoner.
  // Seksjon = "text" (overskrift + tekst + valgfri video)
  //        eller "checklist" (overskrift + liste med punkter).
  // Ikoner: key, wifi, flame, thermometer, compass, door, book
  manuals: [
    {
      id: "ankomst",
      icon: "key",
      title: "Ankomst og nøkkel",
      summary: "Slik kommer du deg inn og finner deg til rette.",
      sections: [
        {
          type: "text",
          heading: "Velkommen",
          body: "Hjertelig velkommen til Villaen i Alsvik. Vi håper dere får et fint opphold ved fjorden. Her finner dere alt dere trenger å vite — ta gjerne en titt gjennom veiledningene før dere setter dere til rette.",
          video: "",
        },
        {
          type: "text",
          heading: "Nøkkelboks",
          body: "Nøkkelboksen henger til høyre for inngangsdøren. Koden sendes på SMS dagen før ankomst. Vri hjulene tilbake til 0000 og lukk luken godt igjen etter at dere har tatt ut nøkkelen.",
          video: "",
        },
        {
          type: "text",
          heading: "Parkering",
          body: "Parker på grusplassen foran huset. Det er plass til to biler. Vennligst ikke blokker den private veien videre — naboen bruker den daglig.",
          video: "",
        },
      ],
    },
    {
      id: "husregler",
      icon: "book",
      title: "Husregler",
      summary: "Det viktigste å være klar over under oppholdet.",
      sections: [
        {
          type: "checklist",
          heading: "Kort oppsummert",
          items: [
            "Røyking er ikke tillatt innendørs",
            "Maks antall gjester som avtalt ved booking",
            "Ro etter kl. 23:00 — vis hensyn til naboer",
            "Ingen fester eller arrangementer uten avtale",
            "Kjæledyr kun etter avtale på forhånd",
            "Hold det ryddig — behandle huset som ditt eget",
          ],
        },
        {
          type: "text",
          heading: "Skader og uhell",
          body: "Det går fint å si fra om noe går i stykker — gi oss beskjed så raskt som mulig, så ordner vi opp sammen. Ærlighet settes alltid pris på.",
          video: "",
        },
      ],
    },
    {
      id: "wifi",
      icon: "wifi",
      title: "WiFi og underholdning",
      summary: "Nettverk, passord og hvordan TV-en fungerer.",
      sections: [
        {
          type: "text",
          heading: "Trådløst nettverk",
          body: "Nettverksnavn: Villaen_Alsvik\nPassord: fjorden2024\n\nRuteren står i teknisk skap i gangen. Skru den av og på igjen dersom nettet henger.",
          video: "",
        },
        {
          type: "text",
          heading: "TV",
          body: "Smart-TV i stuen har strømmetjenester ferdig installert. Logg gjerne inn på din egen konto, men husk å logge ut igjen før avreise.",
          video: "",
        },
      ],
    },
    {
      id: "kjokken",
      icon: "flame",
      title: "Kjøkken og hvitevarer",
      summary: "Oppvaskmaskin, induksjonstopp, kaffe og det praktiske.",
      sections: [
        {
          type: "text",
          heading: "Induksjonstopp",
          body: "Kjøkkenet har induksjonstopp. Bruk kun kjeler og panner med magnetisk bunn (de medfølgende fungerer). Trykk og hold av/på-knappen i to sekunder for å starte.",
          video: "",
        },
        {
          type: "text",
          heading: "Kaffe",
          body: "Det står en stempelkanne og en filtertrakter på benken. Kaffe og filter finner dere i øverste skuff til venstre for komfyren.",
          video: "",
        },
        {
          type: "text",
          heading: "Avfall og sortering",
          body: "Restavfall, papir og pant sorteres i skapet under vasken. Dunkene står ved innkjørselen. Vennligst ta med avfall ut ved avreise — det hjelper oss å holde standarden oppe til neste gjest.",
          video: "",
        },
      ],
    },
    {
      id: "varme",
      icon: "thermometer",
      title: "Varme og peis",
      summary: "Varmepumpe, gulvvarme og fyring i peisen.",
      sections: [
        {
          type: "text",
          heading: "Varmepumpe",
          body: "Varmepumpen i stuen styres med fjernkontrollen på veggen. Vi anbefaler 21–22 grader. Vennligst senk til 18 grader ved avreise i stedet for å skru helt av.",
          video: "",
        },
        {
          type: "text",
          heading: "Peis",
          body: "Ved ligger i vedboden på utsiden. Bruk opptenningsbriketter og la luken stå på gløtt de første minuttene. Steng spjeldet halvveis når det brenner godt. Aske må være helt kald før den fjernes.",
          video: "",
        },
      ],
    },
    {
      id: "omradet",
      icon: "compass",
      title: "Opplevelser i området",
      summary: "Turer, severdigheter og dagsutflukter i Ryfylke.",
      sections: [
        {
          type: "text",
          heading: "Alsvik natursenter",
          body: "Rett i nærheten ligger Alsvik natursenter med turstier, badeplasser og grillhytter. Et fint og rolig utgangspunkt for både korte og lange turer, og perfekt for en padletur i Lutsivassdraget.",
          video: "",
        },
        {
          type: "text",
          heading: "Preikestolen",
          body: "Den ikoniske turen til Preikestolen ligger en kjøretur unna. Selve turen er omtrent fire kilometer hver vei og tar to–tre timer opp. Start tidlig på dagen for å unngå de største folkemengdene.",
          video: "",
        },
        {
          type: "text",
          heading: "Lysefjorden",
          body: "Fjordcruise på den 42 kilometer lange Lysefjorden går fra Stavanger og er en flott opplevelse uansett årstid, med stup som reiser seg over tusen meter rett opp fra vannet.",
          video: "",
        },
      ],
    },
    {
      id: "avreise",
      icon: "door",
      title: "Avreise",
      summary: "Sjekkliste for en grei utsjekk.",
      sections: [
        {
          type: "checklist",
          heading: "Før dere drar",
          items: [
            "Oppvaskmaskinen tømt og satt i gang",
            "Søppel tatt ut og sortert",
            "Senger forlatt slik dere fant dem (sengetøy ligges igjen)",
            "Brukt servise satt på plass",
            "Varmepumpe senket til 18 grader",
            "Strømmetjenester logget ut av",
            "Vinduer og dører lukket og låst",
            "Nøkkel lagt tilbake i nøkkelboksen, hjulene stilt til 0000",
          ],
        },
        {
          type: "text",
          heading: "Tusen takk",
          body: "Takk for at dere tok godt vare på huset. Vi setter stor pris på gjester som etterlater stedet pent, og håper dere har hatt et fint opphold. En god anmeldelse betyr mye for oss — og vi gir gjerne en god tilbake.",
          video: "",
        },
      ],
    },
  ],
};
