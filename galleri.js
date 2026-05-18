/* Galleri-data for Preikestolen Villa.
   Redigeres via admin på forsiden (footer → Galleri-admin).
   Last ned ny galleri.js fra admin og legg den her i prosjektet.

   Hvert bilde: file (uten -t), room (romtype), desc (beskrivelse),
   tall (true hvis stående bilde), show (true/false). */
window.GALLERI = {
  rooms: ["Exterior", "View", "Living room", "Kitchen", "Dining", "Bedroom", "Nature"],
  photos: [
    { file: "villa-hage",    room: "Exterior",    tall: false, show: true, desc: "The villa seen through the garden gate, framed by ancient oaks." },
    { file: "fjord-solned",  room: "View",        tall: false, show: true, desc: "Sunset over the Lysefjord, just below the property." },
    { file: "villa-utsikt",  room: "Exterior",    tall: true,  show: true, desc: "The villa and its manicured garden." },
    { file: "solnedgang",    room: "View",        tall: false, show: true, desc: "Evening light across the fjord." },
    { file: "stue-peis",     room: "Living room", tall: false, show: true, desc: "The main living room with fireplace." },
    { file: "omrade",        room: "View",        tall: false, show: true, desc: "The area seen from above." },
    { file: "stue-lys",      room: "Living room", tall: false, show: true, desc: "Bright, light-filled lounge." },
    { file: "natur",         room: "Nature",      tall: true,  show: true, desc: "The surrounding nature and walking paths." },
    { file: "kjokken",       room: "Kitchen",     tall: false, show: true, desc: "Fully equipped kitchen." },
    { file: "fjord-dag",     room: "View",        tall: false, show: true, desc: "The fjord in daylight." },
    { file: "spisestue",     room: "Dining",      tall: false, show: true, desc: "Dining area with seating for the whole family." },
    { file: "soverom",       room: "Bedroom",     tall: true,  show: true, desc: "One of the five bedrooms." }
  ]
};
