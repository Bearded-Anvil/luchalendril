export const serpentDungeon = {
  id: "serpent-dungeon",
  name: "The Serpent Dungeon",
  image: "/serpent-dungeon-map.jpg",
  path: "/pine-loft/lonely-path-pines/the-ruins/dungeon",

  dmNote: `The dungeon beneath the ruins was built by the same civilization that constructed the temple above — non-human proportions, unfamiliar stonework, a scale that suggests its builders were not small. Whatever they worshipped, they built it a home down here and fed it for generations.

The dungeon can be entered two ways. The iron door at the bottom of the elevator platform is the intended route. The collapsed floor during the chase sequence drops players directly into the dining area near the kitchen — inside, separated from the party, with no iron door between them and whatever is further in.

Kahthriss uses the collapsed section to hunt on the surface. When it is below, it is in the sunning chamber. When it is not there, it could be anywhere in the dungeon or above ground.`,

  locations: [
    {
      name: "The Great Hall",
      description: "The first chamber beyond the iron door. Six columns, two skeletons with shattered ribs, a rat the size of a dog, and the first painting.",
      path: "/pine-loft/lonely-path-pines/the-ruins/dungeon/great-hall",
      status: "live",
    },
    {
      name: "Priest Quarters",
      description: "Six individual sleeping cells where the priests who served Kahthriss lived. Whatever they believed, they lived close to it.",
      path: "/pine-loft/lonely-path-pines/the-ruins/dungeon/priest-quarters",
      status: "coming-soon",
    },
    {
      name: "Kitchen & Dining",
      description: "Where the priests cooked and ate. The collapsed floor hole from the chase drops into this area.",
      path: "/pine-loft/lonely-path-pines/the-ruins/dungeon/kitchen",
      status: "coming-soon",
    },
    {
      name: "The Prison Cell",
      description: "A single cell off the southern passage. Where sacrifices were held before preparation.",
      path: "/pine-loft/lonely-path-pines/the-ruins/dungeon/prison-cell",
      status: "coming-soon",
    },
    {
      name: "Sacrificial Preparation Chamber",
      description: "Between the prison cell and the sacrificial chamber. The second inscription — Kahthriss's name — is carved into the hallway wall here.",
      path: "/pine-loft/lonely-path-pines/the-ruins/dungeon/preparation-chamber",
      status: "coming-soon",
    },
    {
      name: "The Sunning Chamber",
      description: "Where Kahthriss waits. The ledge. The grate above. The floor that breathes.",
      path: "/pine-loft/lonely-path-pines/the-ruins/dungeon/sunning-chamber",
      status: "coming-soon",
    },
  ],
};
