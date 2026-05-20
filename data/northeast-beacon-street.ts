export const northeastBeaconStreet = {
  id: "northeast-beacon-street",
  name: "Northeast Beacon Street",
  image: "/northeast-beacon-street.jpg",

  sceneDescription: `Northeast Beacon Street runs wide — wide enough for two wagons to pass each other without either driver flinching. Cobblestone, no median. Timber-framed buildings line both sides, the upper floors leaning slightly toward the street the way old buildings do. The road curves to the left as it goes, so you can never quite see where it ends.

Halfway up on the right, a pair of iron gates breaks the line of buildings. They are tall and decorative — iron flowers forged into the metalwork, curling around the arch and along the bars. In large iron letters above the gate: Garden District. Two guards stand at attention, one on either side. Bright silver armor, gold trim, royal blue sleeves, dark leather breeches. They hold halberds and do not look at you.

Across the street from the gates, directly opposite, a squat one-floor building of plain gray stone with a flat roof keeps its own counsel. Double doors face the street, a push bar across both, faintly glowing. A large shield mounted above the door reads: City Watch.

A little further on, past the gates, a small storefront hangs a painted sign. A centaur draws back on a bow. Beneath the image: Centaur Hooves and Hubs. And in smaller letters below that: Horse and Carriage Rental.`,

  gardenDistrictGate: {
    playerDescription: `The gate is iron — tall, heavy, and clearly decorative as much as functional. Iron flowers curl around the arch and along the bars in full bloom. The letters spelling out Garden District were forged as part of the gate itself, not bolted on after. It is the kind of craftsmanship that announces money without saying so directly.

The gate is closed. The two guards stand at parade rest on either side. They do not greet you. They do not hold your eye for long. If you linger, one of them will say, without inflection: "Move along."`,
    guards: [
      {
        race: "Human (Male)",
        description: "Large and strong, at full attention. Keeps his eyes on the street without turning his head.",
      },
      {
        race: "Half-Orc (Male)",
        description: "Larger still. The same practiced stillness. His eyes track movement on the street without his head moving to follow it.",
      },
    ],
    dmNote: `These are not City Watch. These are King's Guard — soldiers of the High King, stationed here specifically to protect the Garden District's residents. Most of those residents are wealthy supporters of the High King's interests in Beacon. The King's Guard answers to the High King, not to Beacon's local government. The City Watch across the street has no jurisdiction past those gates. The King's Guard has no interest in anything outside them.

They will not engage with players or common folk beyond "move along." They are not rude. They are simply not speaking to anyone who doesn't already belong inside.

Entry requires a magical brand — it appears on the palm only when held up before the gates, and only if the person holding it has been granted access. When presented, the gates swing open on their own. No words are exchanged. No acknowledgment is given.

For flavor: the first time the party comes through this street, have someone approach the gate from the other direction — a well-dressed figure, unhurried. They raise their palm toward the gate without breaking stride. The gates open. They walk through. The gates close. The guards do not move. Use this to establish the mechanic before the party ever thinks to ask about it.`,
  },

  locations: [
    {
      name: "City Watch",
      description: "A squat, one-floor building of plain gray stone with a flat roof. Double doors face the street — a push bar across both, faintly glowing. A large shield above the door reads: City Watch.",
      status: "live",
      path: "/beacon/northeast-beacon-street/city-watch",
    },
    {
      name: "Centaur Hooves and Hubs",
      description: "Horse and carriage rental. The sign shows a centaur drawing back on a bow. Beneath the name, in smaller letters: Horse and Carriage Rental.",
      status: "live",
      path: "/beacon/northeast-beacon-street/centaur-hooves-and-hubs",
    },
  ],

  roads: [
    {
      name: "Temple Square",
      direction: "South",
      description: "Back to the roundabout at Braver's Temple.",
      status: "live",
      path: "/beacon/temple-square",
    },
    {
      name: "North Main Street Intersection",
      direction: "North",
      description: "Where Northeast Beacon Street meets North Main Street. Hattiswain Pawn is here.",
      status: "coming-soon",
      path: null,
    },
    {
      name: "Warehouse District",
      direction: "Northwest",
      description: "Where Northeast Beacon Street meets the northern end of the Dock Yard.",
      status: "coming-soon",
      path: null,
    },
  ],

  dmNotes: `Northeast Beacon Street is where ordinary Beacon ends and something else begins. The City Watch on the left and the King's Guard on the right are not accidentally placed across from each other. Their jurisdictions stop exactly at those iron gates. That boundary is worth making the party feel — not through explanation, but through the quiet way both sets of guards ignore each other completely.

Centaur Hooves and Hubs is the practical reason most people come up this street. If the party needs a horse or a carriage for travel outside Beacon's walls, this is the place.`,
};
