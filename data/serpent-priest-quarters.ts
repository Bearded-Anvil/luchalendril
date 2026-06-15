export const serpentPriestQuarters = {
  id: "serpent-priest-quarters",
  name: "Priest Quarters",
  image: "/serpent-priest-quarter-hall.jpg",
  path: "/pine-loft/lonely-path-pines/the-ruins/dungeon/priest-quarters",

  sceneDescription: `Stepping into the dark passage connecting to the Great Hall, you find a straight hallway approximately ten feet wide. Three doors line each side — solid wood, single pieces, heavy in their frames. Four of them stand cracked or wide open, darkness beyond them. Two are closed, one on each side of the hall.

At the far end, wooden double doors stand shut.`,

  dmNotes: {
    overview: `Six individual cells where the priests who served Kahthriss lived. Whatever devotion drove them to spend their lives down here in the dark with something that could swallow them whole, it was enough to keep them. The open rooms are empty of anything valuable — lived-in once, abandoned long ago. The locked rooms are another matter.`,
    lockedDoors: {
      lockpick: 12,
      smash: 14,
      note: `One locked door on each side of the hall. Both use the same DCs. The priests who locked these doors did so deliberately — whatever is inside was worth protecting, even from each other.`,
    },
    doubleDoors: `The double doors at the end of the hall are not locked. They open into the kitchen and dining area.`,
  },

  locations: [
    {
      name: "The Open Rooms",
      description: "Four cells, cracked or standing wide open. Cots, rotted furniture, the remnants of lives spent underground.",
      path: "/pine-loft/lonely-path-pines/the-ruins/dungeon/priest-quarters/open-rooms",
      status: "live",
      locked: false,
    },
    {
      name: "The Locked Rooms",
      description: "Two closed doors, one on each side. DC 12 to pick. DC 14 to smash. Something inside was worth locking away.",
      path: "/pine-loft/lonely-path-pines/the-ruins/dungeon/priest-quarters/locked-rooms",
      status: "live",
      locked: true,
      lockDCs: { pick: 12, smash: 14 },
    },
  ],
};
