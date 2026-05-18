export const templeSquare = {
  id: "temple-square",
  name: "Temple Square",
  city: "Beacon",
  image: "/temple-square.jpg",

  description: `Central Bowl Street ends — and begins — at Temple Square. The road rounds into a wide circle around Braver's Temple, giving the temple grounds room to breathe in a city that otherwise packs itself tight. The square is paved in darker cobblestone than the street that feeds it, and the roundabout itself is wide enough that two carts can pass each other on it without either driver holding their breath. Iron lamp posts stand at intervals around the circle, and blue banners bearing Braver's flame hang between them, catching whatever wind comes through.

Braver's Temple stands at the center, elevated slightly above the square on a low stone platform ringed with trimmed hedges and small garden plantings. The temple door is tall and arched, carved wood set into heavy stone, with the golden flame of Braver's mark above it. From here, looking up, the tower seems to go further than it should. From here, the four roads of the city branch outward — and the four businesses of Temple Square wait at each corner, lit warmly against the stone.`,

  dmNotes: `Temple Square is the geographic center of Beacon — every major road in the city either connects here or connects to something that does. It is not a busy market or a rough district. People pass through it with purpose. Locals don't linger unless they're heading into the temple. It is orderly and slightly formal by Beacon standards.

The Warehouse District is accessible via the northern route out of Temple Square — Northeast Beacon Street connects to Northwest Beacon Street, which runs directly to the northern docks. Players who entered through the Dock Yard and explored the Warehouse District will recognize where they've ended up when they reach the northern roads.`,

  businesses: [
    {
      name: "Roundabout Way",
      description: "A candlelit restaurant on the southwest corner. White tablecloths, warm light through the windows. Suite guests at the Lighthouse Inn carry a voucher for one free meal.",
      status: "live",
      path: "/beacon/temple-square/roundabout-way",
    },
    {
      name: "Enchanted Steps",
      description: "A shop on the southeast corner. The sign reads: The Beginning of Every Journey.",
      status: "live",
      path: "/beacon/temple-square/enchanted-steps",
    },
    {
      name: "Saida's Arms and Armaments",
      description: "A weapons and armor shop on the northeast corner. Suits of armor stand in the shopfront, visible from across the square.",
      status: "live",
      path: "/beacon/temple-square/saidas-arms-and-armaments",
    },
    {
      name: "Cordun's Custom Clothier",
      description: "A tailor on the northwest corner. The sign reads: Fit for a King.",
      status: "live",
      path: "/beacon/temple-square/corduns-custom-clothier",
    },
  ],

  roads: [
    {
      name: "Central Bowl Street",
      direction: "West",
      description: "Back toward the Dock Yard and White Bay. The road you came in on.",
      status: "live",
      path: "/beacon/central-bowl-street",
    },
    {
      name: "Southeast Beacon Street",
      direction: "South",
      description: "Heads south from the square into the lower city.",
      status: "coming-soon",
      path: null,
    },
    {
      name: "Northeast Beacon Street",
      direction: "North",
      description: "Heads north, connecting to Northwest Beacon Street and eventually the Warehouse District at the northern end of the Dock Yard.",
      status: "coming-soon",
      path: null,
    },
    {
      name: "East Main Street",
      direction: "East",
      description: "Runs east from the temple through Beacon and out through the city's outer wall.",
      status: "coming-soon",
      path: null,
    },
  ],
};
