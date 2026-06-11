export const lonelyPinesRuins = {
  id: "lonely-pines-ruins",
  name: "The Ruins",
  image: "/lonely-pines-ruins.jpg",
  path: "/pine-loft/lonely-path-pines/the-ruins",

  sceneDescription: `At the bottom of the cliff, the ruins open up around you. What looked structured from above is more complex at ground level — walls that seemed short from the cliff now stand over your head in places, and what appeared to be simple rubble resolves into doorways, corridors, and the remnants of rooms whose purpose is no longer obvious.

The stone is sandstone, pale and warm-colored beneath the green that has grown over most of it. Vines run along every surface. Ferns push up through the floors. The columns that broke through the canopy above you are enormous at the base — wide as wagon wheels, cut from single pieces of stone. Most have snapped somewhere above fifteen feet, but a few still stand to something near their original height.

The ruins stretch nearly half a mile before the forest reclaims them. There are stairs here that go up to nothing. Archways that open onto more rubble. A structure at the far end that looks more deliberate than the rest — wider steps, a heavier door, its stone darker than the sandstone around it.

Something in the trees is watching you.`,

  dmNote: `The ruins are old enough that no one in Beacon's living memory knows what they were. The architecture is unlike anything currently built in the Valpin — the proportions are wrong, the stonework uses techniques no current craftsman would recognize, and the scale suggests whoever built this wasn't building for humans.

The Howlers patrol the surface. They are not aggressive until provoked or until their numbers are sufficient. The dungeon beneath the ruins is sealed — the door at the far structure requires something other than force to open.

Build out these locations as your campaign develops. The ruins are a place the party can return to — they don't have to solve it in one visit.`,

  locations: [
    {
      name: "The Howlers",
      description: "Creatures like howler monkeys that patrol the ruins. One sighting triggers a howl. More arrive. When numbers are on their side, they attack.",
      path: "/pine-loft/lonely-path-pines/the-ruins/howlers",
      status: "live",
    },
    {
      name: "The Dungeon Door",
      description: "A heavier door of darker stone at the far structure. It does not open by force. A puzzle lock seals it.",
      path: "/pine-loft/lonely-path-pines/the-ruins/dungeon-door",
      status: "coming-soon",
    },
    {
      name: "The Underground Dungeon",
      description: "Below the ruins. Something old sleeps here, surrounded by what it has accumulated over a very long time.",
      path: "/pine-loft/lonely-path-pines/the-ruins/dungeon",
      status: "coming-soon",
    },
  ],
};
