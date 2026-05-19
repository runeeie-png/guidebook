/* Galleri-data for Preikestolen Villa.
   5 brede kategorier — juster fritt i admin
   (footer -> Gallery admin, passord villaen2024).
   Last ned ny galleri.js fra admin og legg den her i prosjektet.

   Hvert bilde: file (uten -t og uten .jpg), ext (jpg/JPG),
   room, desc, tall (true=stående), show. */
window.GALLERI = {
  rooms: ["Exterior & garden", "Living areas", "Kitchen & dining",
          "Bedrooms", "Surroundings"],
  photos: [
    { file: "villa-hage",        ext: "jpg", room: "Exterior & garden", tall: false, show: true, desc: "The villa seen through the garden gate, framed by ancient oaks." },
    { file: "villa-utsikt",      ext: "jpg", room: "Exterior & garden", tall: true,  show: true, desc: "The villa and its manicured garden." },
    { file: "hage-badestamp2",   ext: "JPG", room: "Exterior & garden", tall: false, show: true, desc: "The wood-fired hot tub in the garden." },
    { file: "hage-drivhus2",     ext: "JPG", room: "Exterior & garden", tall: false, show: true, desc: "The greenhouse in the garden." },
    { file: "stue-peis",         ext: "jpg", room: "Living areas",      tall: false, show: true, desc: "The main living room with fireplace." },
    { file: "stue-lys",          ext: "jpg", room: "Living areas",      tall: false, show: true, desc: "Bright, light-filled lounge." },
    { file: "stue-stue1",        ext: "jpg", room: "Living areas",      tall: false, show: true, desc: "The living room." },
    { file: "stue-kjellerstue2", ext: "jpg", room: "Living areas",      tall: false, show: true, desc: "The lower-level lounge." },
    { file: "stue-loft2",        ext: "jpg", room: "Living areas",      tall: false, show: true, desc: "The loft lounge." },
    { file: "stue-loftsstue",    ext: "jpg", room: "Living areas",      tall: false, show: true, desc: "The loft sitting area." },
    { file: "stue-loftstue2",    ext: "jpg", room: "Living areas",      tall: false, show: true, desc: "The loft lounge." },
    { file: "stue-vinkjeller2",  ext: "jpg", room: "Living areas",      tall: false, show: true, desc: "The wine cellar." },
    { file: "kjokken",           ext: "jpg", room: "Kitchen & dining",  tall: false, show: true, desc: "Fully equipped kitchen." },
    { file: "kjøkken-bord2",     ext: "jpg", room: "Kitchen & dining",  tall: false, show: true, desc: "The kitchen dining table." },
    { file: "kjøkken-peis2",     ext: "jpg", room: "Kitchen & dining",  tall: false, show: true, desc: "The kitchen with fireplace." },
    { file: "spisestue",         ext: "jpg", room: "Kitchen & dining",  tall: false, show: true, desc: "Dining area with seating for the whole family." },
    { file: "soverom",           ext: "jpg", room: "Bedrooms",          tall: true,  show: true, desc: "One of the five bedrooms." },
    { file: "soverom-loft2",     ext: "jpg", room: "Bedrooms",          tall: false, show: true, desc: "The loft bedroom." },
    { file: "soverom-soverom4",  ext: "jpg", room: "Bedrooms",          tall: false, show: true, desc: "One of the bedrooms." },
    { file: "fjord-solned",      ext: "jpg", room: "Surroundings",      tall: false, show: true, desc: "Sunset over the Lysefjord, just below the property." },
    { file: "solnedgang",        ext: "jpg", room: "Surroundings",      tall: false, show: true, desc: "Evening light across the fjord." },
    { file: "fjord-dag",         ext: "jpg", room: "Surroundings",      tall: false, show: true, desc: "The fjord in daylight." },
    { file: "omrade",            ext: "jpg", room: "Surroundings",      tall: false, show: true, desc: "The area seen from above." },
    { file: "natur",             ext: "jpg", room: "Surroundings",      tall: true,  show: true, desc: "The surrounding nature and walking paths." }
  ]
};
