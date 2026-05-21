export const southeastBeaconStreet = {
  id: "southeast-beacon-street",
  name: "Southeast Beacon Street",
  image: "/southeast-beacon-street.jpg",

  sceneDescription: `Southeast Beacon Street is wide and well-kept — the same cobblestone as everywhere else in Beacon, but these stones have been laid with care and maintained. Two wagons could pass each other without either driver thinking twice. Timber-framed buildings line both sides, their upper floors leaning slightly in the way of old construction, and narrow sidewalks run the length of both edges.

Between some of the doors, flower beds have been planted low to the ground. Others bloom in iron boxes hung from balcony railings, and in wall-mounted pots fixed to the timber framing. It is not the Garden District — but someone on this street tends to things. Street lamps rise at intervals on tall metal frames, lanterns at the top.

On the left, a sign hangs from the wall on an L-shaped bracket, extending over the sidewalk. The sign is shaped like a toolbox. In large, boxy letters: The Tinker Box. In smaller, almost cursive letters beneath it: Mechanics and Repairs.

The road continues curving gently to the left, but just before the bend, it splits hard to the right through a wide stone archway. Mounted in the arch, a decorative iron sign: Home Hearth District.`,

  homeHearthArchway: {
    playerDescription: `The archway is stone — the same cut as the surrounding buildings, fitted into the gap between two structures that were built to frame it. The iron sign across the top is ornamental work: scrolling vines curling out from either end of the lettering, which reads Home Hearth District. The road through the arch turns and disappears almost immediately.

There is no gate. No guard. Just the arch, and the sign, and the street beyond it.`,
    dmNote: `The Home Hearth District is Beacon's residential quarter — the neighborhood where people actually live. Working families, tradespeople, city staff. Most of the City Watch lives here. Most of the people who keep Beacon running but don't own anything live here.

It is not wealthy and it is not dangerous. It is just where people go home. The district has its own internal streets and is not accessible from the main road network except through this arch and one other entrance on the far side.

If the party needs to find someone who lives in Beacon rather than works in it — a contact's home address, a family member, a witness who clocked out two hours ago — they come here.`,
  },

  locations: [
    {
      name: "The Tinker Box",
      description: "Mechanics and repairs. The sign is shaped like a toolbox and hangs over the sidewalk on an L-bracket.",
      status: "coming-soon",
      path: null,
    },
    {
      name: "Iron's End Forge",
      description: "A smithy on the left side of the street. The sign is mounted on the wall above the door.",
      status: "coming-soon",
      path: null,
    },
    {
      name: "The Traveler's Nest",
      description: "Long term housing for rent. A large sign faces the street from the upper floor of a stone and timber building.",
      status: "coming-soon",
      path: null,
    },
  ],

  roads: [
    {
      name: "Temple Square",
      direction: "West",
      description: "Back to the roundabout at Braver's Temple.",
      status: "live",
      path: "/beacon/temple-square",
    },
    {
      name: "Home Hearth District",
      direction: "Right (through the arch)",
      description: "Beacon's residential quarter. Where working people live.",
      status: "coming-soon",
      path: null,
    },
    {
      name: "East Main Street",
      direction: "East",
      description: "The road continues toward the eastern gate.",
      status: "coming-soon",
      path: null,
    },
  ],

  dmNotes: `Southeast Beacon Street sits between the civic center of Temple Square and the residential calm of the Home Hearth District. It is not a destination street — most people passing through are either heading home or cutting through toward the square. The businesses here serve a steady, local clientele.

The Tinker Box is worth remembering when the party needs something repaired, modified, or figured out mechanically. Iron's End Forge handles heavier metalwork. The Traveler's Nest is the place to send players who need somewhere to stay for more than a night — long-term rent, month to month, no questions about occupation as long as payment clears.

The Home Hearth District arch is visible from this street. If the party looks through it, they see a quieter road with laundry lines and children. It doesn't look dangerous. It isn't.`,
};
