export const templeSquare = {
  id: "temple-square",
  name: "Temple Square",
  city: "Beacon",

  description: `Central Bowl Street ends — and begins — at Temple Square. The road rounds into a wide circle around Braver's Temple, giving the temple grounds room to breathe in a city that otherwise packs itself tight. The square is paved in a darker stone than the street that feeds it, and the roundabout itself is wide enough that two carts can pass each other on it without either driver holding their breath. From the square, four roads branch outward in each direction of the city.

Braver's Temple stands at the center, elevated slightly above the square on a low stone platform. The statue of Braver faces outward from the top, visible from most of Central Bowl Street on the approach. The blue fire in its eyes is closer now.`,

  dmNotes: `Temple Square is the geographic center of Beacon — every major road in the city either connects here or connects to something that does. It is not a busy market or a rough district. People pass through it with purpose. Locals don't linger unless they're heading into the temple. It is orderly and slightly formal by Beacon standards.

The Warehouse District is accessible via the northern route out of Temple Square — Northeast Beacon Street connects to Northwest Beacon Street, which runs directly to the northern docks. Players who entered through the Dock Yard and explored the Warehouse District will recognize where they've ended up when they reach the northern roads.`,

  businesses: [
    {
      name: "Roundabout Way",
      description: "A restaurant situated at the edge of the square, beside Braver's Temple. Suite guests at Lighthouse Inn arrive with a voucher for a free meal.",
      status: "coming-soon",
      path: "/beacon/temple-square/roundabout-way",
    },
    {
      name: "Coming Soon",
      description: "A business on the square. Details forthcoming.",
      status: "coming-soon",
      path: null,
    },
    {
      name: "Coming Soon",
      description: "A business on the square. Details forthcoming.",
      status: "coming-soon",
      path: null,
    },
    {
      name: "Coming Soon",
      description: "A business on the square. Details forthcoming.",
      status: "coming-soon",
      path: null,
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
