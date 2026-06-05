export const lonelyPathPines = {
  id: "lonely-path-pines",
  name: "Lonely Path Pines",
  image: "/lonely-path-pines.jpg",
  path: "/pine-loft/lonely-path-pines",

  signs: [
    `"By order of the king, the patrol of roads inside the Valpin ends here. Enter the Lonely Path Pines at your own risk."`,
    `"Recommended: Lantern · Mounts · Tent · Proper Protection · Rations for 3 days · Guide if leaving the path"`,
  ],

  sceneDescription: `Fifty feet of open road separate Pine Loft's southern gate from the tree line — enough space to reconsider. The pines on the other side are tall and pressed close together, their trunks dark and their canopy so dense that what light reaches the forest floor comes in as a diffuse green glow through the branches. The road enters the forest the way a road enters a tunnel, through an arch of bark and shadow that closes the sky off almost immediately.

The pines run west until they meet the cliff's edge, where the land drops hard into the ocean below. East, they continue until distance and dark take them from view. There is no obvious end in either direction.

Standing at the edge, just before the trees begin, is a sign mounted on a heavy square timber post. It has been here long enough that the wood has weathered to gray, but the lettering is still clear. Someone maintains it.`,

  dmNote: `The Lonely Path Pines is not a den of constant evil. It is a wild place — genuinely, quietly wild — that for the most part stays inside its own borders. Travelers who stay on the road and move purposefully tend to pass through without incident. Most.

The patrols used to include the forest in their route. It didn't work. Whether the forest was too dangerous for the patrol rotation or the patrols were simply too thin to matter, the result was the same: people still got lost, still got robbed, still came out of the trees missing members of their party. Eventually the king's order formalized what had already become practice. The road is yours. The trees are not.

What lives in the pines is yours to define. The road through is real and passable. Everything off the road is a different question.`,

  roads: [
    {
      label: "Pine Loft South",
      direction: "North",
      description: "Back to Pine Loft's southern gate and the town beyond.",
      path: "/pine-loft/south",
      status: "live",
    },
    {
      label: "Lonely Path — Northern Tract",
      direction: "South",
      description: "The road continues south through the pines.",
      path: "/pine-loft/lonely-path-pines/northern-tract",
      status: "live",
    },
  ],
};
