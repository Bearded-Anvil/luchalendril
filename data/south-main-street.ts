export const southMainStreet = {
  id: "south-main-street",
  name: "South Main Street",
  city: "Beacon",
  image: "/south-main-street.png",

  description: `The cobblestones of South Main Street are worn smooth by decades of boots and cart wheels. Vendor stalls line both sides of the street beneath stretched canvas awnings — green, brown, and weathered blue — their wares displayed on tables, racks, and hanging lines. The smell of cut wood, leather oil, and something faintly sweet drifts through the crowd. A statue rises at the far end of the street, half-obscured by the bustle of the market. The shouts of vendors, the clink of coin, and the occasional laugh of a haggler fill the air. This is Beacon at work.`,

  dmNotes: `South Main Street is the busiest commercial stretch in the lower city. It runs from the South Gate plaza northward toward the civic quarter. The vendors here are mostly independent tradespeople — not guild-backed — which means their prices are negotiable and their loyalties are personal. A sharp-eyed party may notice that two of the stalls are watched by the same pair of men who never seem to buy anything.`,

  vendors: [
    { id: "whittled-things", name: "Whittled Things", description: "Hand-carved wooden goods, training weapons, and miniatures.", path: "/beacon/south-main-street/whittled-things" },
    { id: "risk-and-reward", name: "Risk & Reward", description: "Locked mystery boxes of unknown contents. Fortune favors the bold.", path: "/beacon/south-main-street/risk-and-reward" },
    { id: "lyrics-and-laughter", name: "Lyrics and Laughter", description: "Instruments, accessories, and magical music items. A song for every tale.", path: "/beacon/south-main-street/lyrics-and-laughter" },
    { id: "kelliks-pride", name: "Kellik's Pride", description: "Enchanted jewelry and accessories. Beauty is not vanity — it is intention.", path: "/beacon/south-main-street/kelliks-pride" },
    { id: "a-journeys-first-step", name: "A Journey's First Step", description: "Travel gear, survival supplies, and enchanted road essentials.", path: "/beacon/south-main-street/a-journeys-first-step" },
    { id: "splitting-hairs", name: "Splitting Hairs", description: "A weapons stall specializing in bladed goods.", path: "/beacon/south-main-street/splitting-hairs" },
    { id: "the-curious-handle", name: "The Curious Handle", description: "Oddities, curiosities, and things that probably have a story.", path: "/beacon/south-main-street/the-curious-handle", comingSoon: true },
    { id: "batyas-blades", name: "Batya's Blades", description: "Fine daggers and short swords from a quiet woman with steady hands.", path: "/beacon/south-main-street/batyas-blades", comingSoon: true },
    { id: "boddiks-bargain-goods", name: "Boddik's Bargain Goods", description: "If you need it cheap and don't ask questions, Boddik has it.", path: "/beacon/south-main-street/boddiks-bargain-goods", comingSoon: true },
  ],
};
