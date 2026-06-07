export const lonelyPathMidbendTract = {
  id: "lonely-path-midbend-tract",
  name: "Lonely Pine Midbend Tract",
  image: "/lonely-pine-midbend.jpg",
  path: "/pine-loft/lonely-path-pines/midbend-tract",
  day: "Day 2 of 3",

  sceneDescription: `As the second day slowly rolls by, you find yourself trudging along the road farther and farther into the giant forest. Here, nearer the heart of the forest, you see a few more of the Elder Pines here and there — giants stretching up beyond the canopy of the forest.

For several miles, the east side of the road begins to climb upward, making a steep, heavily treed embankment. And close by the west side of the road, the embankment drops off, leaving the road winding on a narrow ledge barely wide enough for a small wagon or cart to traverse. Down below, where the western embankment levels out a hundred feet below, you hear the babbling of a small brook.

As the third day begins to come to a close, you find what appears to be a well-used campsite off the west side of the road, as the downward-sloping embankment begins to level back out. The fireplace seems to have been used many times. A few bundles of firewood are piled around it from previous travelers, and stones have been placed in a rough circle to serve as seats. The road turns relatively sharply to the east here — or north, if you've come from that direction.`,

  dmNote: `The Midbend Tract is the second full day of travel through the Lonely Path Pines. The narrow ledge road is the defining feature of this section — a small wagon can make it, but it requires care. Any combat or forced movement on this stretch risks a fall off the western edge. The brook a hundred feet below is real and audible. If anyone goes over, the fall is survivable but bad.

The campsite at the road's bend is the only reliable shelter on the Midbend Tract. Previous travelers have maintained it enough that it functions — firewood is stocked, the fire pit is usable. This is a natural stopping point for the night.`,

  campsite: {
    path: "/pine-loft/lonely-path-pines/midbend-tract/campsite",
    dmNote: `Have the party roll a Nature, Survival, or Perception check. DC 15 — or DC 12 if they already noticed the sandstone ruins from the top of the Fallen Elder.

On a success: While the main road veers and continues on, the party notices a small footpath branching off heading south. It isn't well traveled and doesn't seem to have been used in quite some time — but after a bit of looking, they find an old boot print in the dirt.`,
  },

  camping: {
    note: `The campsite provides a fire pit and stocked firewood — this is a genuine rest point. Unlike the Northern Tract, a fire here is normal and expected. The embankment has leveled out enough to provide some natural concealment from the road.`,
  },

  encounters: {
    note: `Deeper in the forest, encounters are more frequent. It is up to the DM to make these enemies fit their game system and set the number of enemies or stats appropriate for the party.`,
    noEncounterNote: `There is still a reasonable chance the party passes through without incident, but the odds are shorter here than in the Northern Tract. Roll for encounter occurrence before consulting the table.`,
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
      label: "Lonely Path — Northern Tract",
      direction: "North",
      description: "Back toward Pine Loft. Day 1.",
      path: "/pine-loft/lonely-path-pines/northern-tract",
      status: "live",
    },
    {
      label: "Lonely Path Southeast Tract",
      direction: "South",
      description: "The road continues. Day 3.",
      path: "/pine-loft/lonely-path-pines/southeast-tract",
      status: "coming-soon",
    },
    {
      label: "The Foot Path",
      direction: "South — Off Road",
      description: "A faint path heading south from the campsite. Not well traveled.",
      path: "/pine-loft/lonely-path-pines/midbend-tract/foot-path",
      status: "coming-soon",
      dmOnly: true,
      dmNote: "Only if they noticed with passive perception or passed the campsite check.",
    },
  ],
};
