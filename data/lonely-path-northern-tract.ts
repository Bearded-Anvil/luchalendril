export const lonelyPathNorthernTract = {
  id: "lonely-path-northern-tract",
  name: "Lonely Path — Northern Tract",
  image: "/lonely-pines-north-tract.jpg",
  path: "/pine-loft/lonely-path-pines/northern-tract",
  day: "Day 1 of 3",

  sceneDescription: `The Northern Tract of the Lonely Path Pines is dark and gloomy. Only narrow shafts of light beam through the branches above, and everything else is illuminated only by the glow of sunlight filtered through pine needle. The path goes straight for as long as you can see until, finally, it begins to shift to the left — east — and out of sight.

To the east of the road, a natural spring bubbles out of the ground, a gout of water jetting a good four feet into the air before splashing down on a flat rock to begin its run alongside the road. The natural fountain sits about thirty feet off the path, but you can hear it clearly in the darkness.

To the west of the road, a giant tree — an Elder Pine — lays at a forty-five degree angle, its fallen trunk wedged into the split of another Elder Pine over a hundred yards away. The trunk of this tree is massive, some of the oldest timber in the forest. It would take ten men holding hands to reach around it.`,

  dmNote: `The Northern Tract is the first full day of travel through the Lonely Path Pines. For most travelers, this section is uncomfortable but not actively dangerous — the road is clear, the forest doesn't press in on it, and a group that keeps moving and stays on the road will reach the halfway point without serious incident.

The discomfort is the point. The pines are not hospitable. They are indifferent, which is in some ways worse. Players who decide to leave the road should understand immediately that visibility drops to almost nothing within a few dozen feet and that tracking direction becomes genuinely difficult without a skilled navigator.

Planned encounters here should favor atmosphere over combat — something heard but not seen, tracks that don't match a known creature, a brief glimpse of movement in the dark between the trunks. Save the harder threats for the deeper sections.

This tract should take an entire day of travel before the party reaches the Lonely Pine Midbend Tract.`,

  encounters: {
    note: `It is up to the DM to make these enemies fit their game system and set the number of enemies or enemy stats appropriate for the party.`,
    common: [
      { name: "Goblins", detail: "They patrol looking for travelers to rob or kill." },
      { name: "Wolves", detail: null },
      { name: "Bandits", detail: null },
    ],
    uncommon: [
      { name: "Dryads", detail: null },
      { name: "Giant Snake", detail: null },
    ],
    rare: [
      { name: "River Trolls", detail: null },
    ],
  },

  locations: [
    {
      name: "The Artesian Well",
      description: "A natural spring thirty feet east of the road that jets four feet into the air like a miniature geyser. You can hear it from the road before you see it.",
      path: "/pine-loft/lonely-path-pines/northern-tract/pale-run",
      status: "live",
    },
    {
      name: "The Fallen Elder",
      description: "A massive Elder Pine fallen at a forty-five degree angle, its trunk wedged into the split of another Elder Pine over a hundred yards away. Ten men holding hands could not reach around it.",
      path: "/pine-loft/lonely-path-pines/northern-tract/fallen-elder",
      status: "live",
    },
    {
      name: "The Marked Tree",
      description: "A pine at the road's edge bearing carvings no one has been able to identify. They are old. Someone made them deliberately.",
      path: "/pine-loft/lonely-path-pines/northern-tract/marked-tree",
      status: "live",
    },
  ],

  roads: [
    {
      label: "Lonely Path Pines",
      direction: "North",
      description: "Back to the forest entrance and Pine Loft beyond.",
      path: "/pine-loft/lonely-path-pines",
      status: "live",
    },
    {
      label: "Lonely Pine Midbend Tract",
      direction: "South",
      description: "The road continues deeper into the forest. Day 2.",
      path: "/pine-loft/lonely-path-pines/midbend-tract",
      status: "coming-soon",
    },
  ],
};
