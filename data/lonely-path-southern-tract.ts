export const lonelyPathSouthernTract = {
  id: "lonely-path-southern-tract",
  name: "Lonely Path Pine — Southern Tract",
  image: "/lonely-pine-path-southern.jpg",
  path: "/pine-loft/lonely-path-pines/southern-tract",
  day: "Day 3 of 3",

  sceneDescription: `The southernmost tract of the Lonely Path Pines stretches downhill as it turns east. Moving from east to west on this stretch would be a gradual incline. The path runs between the campsite to the west and the eastern entrance to the forest, and on both sides the ground slopes downward into ravines filled with pines and rock formations that jut up from the earth like large gray fingers. Small stones are scattered here and there along the road's edge.

The light is barely more visible here. The green glow of the canopy still illuminates your surroundings, but shafts of light stream through here and there along your course — more than you've seen since entering the forest.

South of the road, far down at the bottom of the ravine, two giant stones jut upward toward each other, forming a long dark tunnel between them before reaching daylight on the other side. The tunnel runs nearly a hundred feet between beginning and end.`,

  dmNote: `If the party is heading east — leaving the Lonely Path Pines — it will take almost a full day to make this travel from the campsite. Consult the encounter table if desired.

The Stone Tunnel is the only point of interest on this tract. It sits at the bottom of the ravine south of the road. Players who want to explore it have to leave the road and descend into the ravine.`,

  locations: [
    {
      name: "The Stone Tunnel",
      description: "Two massive stones jutting toward each other at the bottom of the south ravine, forming a natural tunnel nearly one hundred feet long.",
      path: "/pine-loft/lonely-path-pines/southern-tract/stone-tunnel",
      status: "coming-soon",
    },
  ],

  encounters: {
    note: `Consulting the encounter table on this tract is optional. It is up to the DM to make enemies fit their game system and party level.`,
    noEncounterNote: `There is still a reasonable chance the party passes through without incident. Roll for encounter occurrence before consulting the table.`,
    common: [
      { name: "Goblins", detail: "They patrol looking for travelers to rob or kill." },
      { name: "Wolves", detail: null },
      { name: "Bandits", detail: null },
      { name: "Dryads", detail: null },
      { name: "Giant Snake", detail: null },
    ],
    uncommon: [
      { name: "River Trolls", detail: null },
    ],
    rare: [
      { name: "DM's Choice", detail: "Add a creature appropriate to your campaign and party level. Something that belongs in the deep forest and has no business being on a road." },
    ],
  },

  roads: [
    {
      label: "Midbend Tract — Campsite",
      direction: "West",
      description: "Back to the campsite and the Midbend Tract.",
      path: "/pine-loft/lonely-path-pines/midbend-tract/campsite",
      status: "live",
    },
    {
      label: "Forest Exit",
      direction: "East",
      description: "The eastern edge of the Lonely Path Pines.",
      path: null,
      status: "coming-soon",
    },
  ],
};
