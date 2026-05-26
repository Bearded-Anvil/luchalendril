export const aromaticEmbers = {
  id: "aromatic-embers",
  name: "Aromatic Embers",
  image: "/home-hearth-district.jpg",
  tagline: "Fine Pipes, Tobaccos & Accessories.",
  path: "/beacon/home-hearth-district/aromatic-embers",

  signs: [
    `A flat carved wooden pipe mounted above the door — the smoke from the bowl has been shaped into letters: "Aromatic Embers."`,
    `"Fine Pipes, Tobaccos & Accessories" — smaller sign hung below the front window.`,
  ],

  sceneDescription: `The shop smells the way a good pipe shop should — deep and woody, with something faintly sweet underneath. Not smoke exactly. The potential of smoke. The memory of it in the walls and the shelves and the grain of the old wooden counter.

Pipes line one wall from floor to ceiling, mounted in neat rows on wooden pegs. Clay, briar, cherry, bone, carved and plain — every type in at least three sizes. Glass cases on the counter hold accessories: brass tampers, leather pouches, small knives for scraping, pipe stands both simple and ornate.

Behind the counter, jars of tobacco line a shelf — a dozen or more, each labelled in small careful script, each with a strip of paper listing the variety and price clipped to the front. A few of the jars are half empty. A few appear untouched.

The man behind the counter is shorter than most people he serves. Halfling, neat hair, dressed plainly, with a worn apron that has seen a lot of pipe resin. He is cleaning a pipe when you enter — holding it up to the light from the window, turning it slowly, looking for something. He sets it down when you cross the threshold.

"Blend first or pipe first?" he says. As if those are the only two options, and they probably are.`,

  owner: {
    name: "Caelan Drest",
    race: "Halfling (Male)",
    appearance: `Short even by Halfling measure, with neat dark hair and the kind of hands that are precise without being delicate. He wears a plain apron over dark clothing and keeps a pipe in his breast pocket that he almost never lights in the shop. He smells, faintly, of Silverleaf Reserve.`,
    personality: `Caelan is not talkative in the social sense. He is talkative in the sense that he will speak at length about tobacco — about origin, cut, aging, moisture content, the effect of a bowl's shape on a draw. If you have questions about his product, he has answers, and the answers are long. If you do not have questions, he will finish cleaning the pipe and wait. He is not unfriendly. He just measures conversation the way he measures a blend.`,
    dmPrivate: {
      background: `Caelan came to Beacon through the docks — he worked tobacco import and quality review for a merchant house for nearly a decade before buying the shop from its previous owner. He knows the docking manifests, the import schedules, and most of the dock factors by name.`,
      whatHeKnows: `He knows which ships bring what. He knows when a shipment of high-end tobacco has arrived and when one has gone missing. He hears things from the dock crews who buy his Dockside Black and talk while they smoke it. He does not volunteer this information. He can be asked. He responds to specific questions better than general ones.`,
      hookNote: `If the party is investigating anything moving through the docks — smuggling, missing cargo, unusual ships — Caelan is a useful contact. He won't lie, and he won't speculate. But he'll tell you what he knows if you ask him the right way.`,
    },
  },

  inventory: {
    tobaccoBlends: [
      {
        name: "Valley Mild",
        cost: "2 sp / oz",
        description: "Light and sweet, with a note of fresh hay. A beginner's blend. Burns clean and cool.",
      },
      {
        name: "Shoregrass Twist",
        cost: "2 sp / oz",
        description: "Local leaf, twisted and dried. A simple, honest smoke. No complexity. Gets the job done.",
      },
      {
        name: "Dockside Black",
        cost: "3 sp / oz",
        description: "Strong and smoky, rolled dense. Popular with the dock crews. Not a social smoke — it commands the air around you.",
      },
      {
        name: "Hearthwarm",
        cost: "4 sp / oz",
        description: "Spiced with clove and dried orange peel. Burns slowly. Good for long evenings.",
      },
      {
        name: "Ember's Own",
        cost: "5 sp / oz",
        description: "The house blend. Caelan won't share the recipe. Medium strength, complex finish, never harsh.",
      },
      {
        name: "Silverleaf Reserve",
        cost: "1 gp / oz",
        description: "An aged blend from the southern reach. Low smoke, long burn. A quiet tobacco for someone who knows what they're doing.",
      },
    ],
    pipes: [
      {
        name: "Clay Pipe",
        cost: "2 sp",
        description: "Simple. Functional. Breaks if dropped hard enough. Good for someone who hasn't decided yet.",
      },
      {
        name: "Briar Pipe",
        cost: "8 sp",
        description: "Standard working pipe. Good grain, clean draw, comfortable in the hand.",
      },
      {
        name: "Cherry Wood Pipe",
        cost: "14 sp",
        description: "A slightly sweet wood that adds its own quiet note to whatever blend you run through it.",
      },
      {
        name: "Carved Bone Pipe",
        cost: "22 sp",
        description: "Heavier than it looks. Runs cooler than briar. Some say it changes the flavor. Caelan says it doesn't.",
      },
      {
        name: "Rosewood Long Pipe",
        cost: "2 gp",
        description: "A long-stemmed pipe for a long evening. The stem keeps the heat away from your face. Slightly pretentious. Caelan stocks it because people ask.",
      },
    ],
    accessories: [
      { name: "Leather Tobacco Pouch", cost: "1 sp", description: "Keeps tobacco dry. Fits about two ounces." },
      { name: "Oilskin Pipe Wrap", cost: "4 sp", description: "Protects a pipe from impact in a pack or pocket." },
      { name: "Brass Tamper", cost: "3 sp", description: "For packing and clearing the bowl. The correct tool for this. Using your finger is not." },
      { name: "Pipe Stand, Simple", cost: "2 sp", description: "A turned wooden stand. Keeps the pipe upright between draws." },
      { name: "Pipe Cleaning Kit", cost: "5 sp", description: "Brushes, picks, and a cloth. For maintaining a briar or bone pipe properly." },
    ],
  },
};
