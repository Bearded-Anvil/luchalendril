export const centaurHoovesAndHubs = {
  id: "centaur-hooves-and-hubs",
  name: "Centaur Hooves and Hubs",
  tagline: "Horse and Carriage Rental",
  image: "/hooves-and-hubs.jpg",

  sceneDescription: `Hooves and Hubs is long and narrow, and there is nothing here to browse — no shelves, no merchandise, no displays. The floor is laid in wide wooden planks that run left to right the full width of the room, end to end like a dock. Along the left wall, eight plain chairs with gray cloth padding wait in a neat row. Above them, a single long painting runs the length of the wall: a spotted horse in harness, pulling a carriage down a road that curves away from a distant castle. On the right wall, dozens of smaller paintings crowd together in mismatched frames — horses, show horses, carriages, pack animals, wagons. Some formal portraits, some what look like they were painted from memory. A wooden counter sits near the back of the room, a green-paned lantern on top casting warm light across the space.`,

  owner: {
    name: "Taila Witsby",
    race: "Halfling (Female)",
    appearance: `Light brown hair pulled into a bun at the back of her head. Small, stylish glasses. Green eyes. She wears a simple white shirt and a gray floor-length skirt with a black belt. Very pretty in an unassuming way, and she carries herself with the easy confidence of someone who has answered the same questions for years and doesn't mind.`,
  },

  services: [
    {
      name: "Travel Horse",
      tagline: "Good for adventurers, messengers, and merchants.",
      rates: [
        { label: "Draft horse", price: "3 sp / day" },
        { label: "Average riding horse", price: "5 sp / day" },
        { label: "Fast horse", price: "1 gp / day" },
        { label: "War-trained horse", price: "3–5 gp / day (rarely available)" },
      ],
      notes: [
        "Includes saddle, blanket, and simple tack.",
        "Deposit required: 10–50 gp depending on horse quality, or collateral held by Taila.",
      ],
    },
    {
      name: "Pack Horse",
      tagline: "Slower but durable.",
      rates: [
        { label: "Small load", price: "2 sp / day" },
        { label: "Standard load", price: "3 sp / day" },
        { label: "Heavy mule or mountain pack horse", price: "5 sp / day" },
      ],
      notes: [
        "Comes with basic pack rigging and feed bag.",
        "Can include rope, waterproof canvas, and extra feed.",
        "Saddlebags available for an additional fee.",
      ],
    },
    {
      name: "Carriage Ride Around Beacon",
      tagline: "Point to point within the city. Like a hired cab.",
      rates: [
        { label: "Short trip", price: "2 cp" },
        { label: "Across a district", price: "5 cp" },
        { label: "Wealthy or private carriage", price: "1 sp" },
        { label: "Reserved carriage for several hours", price: "5 sp" },
      ],
      notes: [
        "Garden District routes typically cost more.",
      ],
    },
    {
      name: "Wagon Ride Within Beacon Territory",
      tagline: "Regional passenger and supply wagons.",
      rates: [
        { label: "Beacon to a nearby village", price: "5 sp" },
        { label: "Beacon to farming settlements", price: "8 sp" },
        { label: "Remote territory", price: "1–2 gp" },
      ],
      notes: [
        "Cheaper if: riding in a cargo wagon, sharing seats, traveling light.",
        "More expensive if: private wagon, fast departure, or livestock transport.",
      ],
    },
    {
      name: "Long Distance Wagon Outside Beacon Territory",
      tagline: "Serious travel. Prices reflect the road.",
      rates: [
        { label: "Safe trade road", price: "3–5 gp" },
        { label: "Forest route", price: "6–10 gp" },
        { label: "Dangerous frontier", price: "10–15 gp" },
        { label: "Winter or fog season", price: "+50% on any route" },
      ],
      notes: [
        "Most people save for these trips.",
      ],
    },
    {
      name: "Guarded Wagon Outside Beacon Territory",
      tagline: "This is where adventurers become relevant.",
      rates: [
        { label: "2 guards", price: "10–15 gp" },
        { label: "4 guards and a scout", price: "20–35 gp" },
        { label: "Heavy escort", price: "50+ gp" },
      ],
      notes: [
        "Includes armed guards and sometimes overnight camp security.",
        "Taila can connect the party with contractors, or the party may offer their services directly.",
      ],
    },
  ],

  dmPrivate: {
    currentAvailability: `When the party first arrives, Taila will tell them: "I'm so sorry, but our travel horses are all rented and the only carriage we have is currently being worked on. We can't rent anything for purposes of leaving the city right now. But the mail is running if you have anyone you'd like to send something to."

She is charming and polite about it. This is not a brush-off — she genuinely can't help right now. These services will become available as more of the world outside Beacon opens up.`,
    dmNote: `Hooves and Hubs is primarily a logistics resource for later in the campaign when the party needs to travel outside Beacon. For now, Taila is a pleasant dead end with an interesting detail: the mail is still running. That's worth remembering. If the party ever needs to send something — a message, a package, word to someone — Taila is the connection.`,
  },
};
