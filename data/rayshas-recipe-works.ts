export const rayshasRecipeWorks = {
  id: "rayshas-recipe-works",
  name: "Raysha's Recipe Works",
  image: "/rayshas-recipes.jpg",
  tagline: "Potions. Spells. Remedies. Wonders.",
  path: "/beacon/home-hearth-district/rayshas-recipe-works",

  signs: [
    `The name "Raysha's Recipe Works" is lettered on the front of the counter — visible the moment you walk through the door.`,
    `"Potions — Spells — Remedies — Wonders" — posted on the left wall near the entrance.`,
    `"A blank book is like a blank mind: Ready to be filled with wonders." — small framed sign sitting atop the spellbooks on the counter.`,
    `"By invitation only." — above the door on the back wall.`,
  ],

  sceneDescription: `When you walk into Raysha's you're hit by a mix of smells that leaves you… uncertain. Some sweet… some sour… a little bitter here and a pleasant aroma there.

The entire right hand side of the room looks like a post office — tiny drawers with little cards made into their facing, 12 boxes high and the length of the room. Atop those boxes are different sized jars and vials, each holding a different liquid or collection of solids, some glowing, some mundane.

On the left side wall, you see a round wicker basket with four wizard's staves in them. Beside that is a counter that she stands behind while speaking to customers and, on top of that, is a collection of different colored and styled spell books. A sign sits atop one of the books that reads "A blank book is like a blank mind: Ready to be filled with wonders."

On the back wall, you see a very normal looking wooden door with a sign above it that says "By invitation only."`,

  owner: {
    name: "Raysha Runespire",
    race: "Elf (Female)",
    appearance: `Tall and slender with long, straight blonde hair and blue eyes. Fair skin. She dresses in a slim, fitted light brown dress and wears a flower necklace made with daisies. Gold bracelets are on both wrists and one ankle.`,
    dmPrivate: {
      teleportationCircle: `Raysha has a teleportation circle in the back of her store that she keeps for personal use. She will, however, allow some to use it when she gets to know them. Guard this well — the dangers of travel should not be skipped lightly.`,
      questHook: `She has been looking for something specific for some time — a component she has received requests for and cannot source through her usual suppliers. If the party asks whether there's anything she's looking for, she will tell them. The component is rare and finding it would require going somewhere most people don't go voluntarily. DM, this is yours to define.`,
    },
  },

  forSale: [
    {
      name: "Wizard's Staff, Plain",
      cost: "4 gp",
      description: "A tall hardwood staff, lacquered and balanced. No magical properties. A functional tool for channeling or walking.",
    },
    {
      name: "Wizard's Staff, Carved",
      cost: "9 gp",
      description: "Carved with decorative scrollwork along the length. No magical properties. Looks the part.",
    },
    {
      name: "Blank Spellbook, Standard",
      cost: "25 gp",
      description: "A solid tome with quality parchment pages and a leather cover. 100 pages. Ready to receive whatever a caster needs to put in it.",
    },
    {
      name: "Blank Spellbook, Fine",
      cost: "50 gp",
      description: "Thicker cover, gilded page edges, a brass clasp. 200 pages. The kind of book a spell deserves to live in.",
    },
    {
      name: "Blank Spellbook, Pocket",
      cost: "10 gp",
      description: "Small enough to tuck into a coat. 40 pages. Good for travel or overflow.",
    },
  ],

  componentNote: `Raysha stocks common components for everyday spells and a rotating selection of rarer materials. The specific inventory is left to the DM — component lists vary by system and edition, and part of what makes a component shop interesting is deciding what she has on a given day.

As a rule: Raysha carries everything needed for common and some higher-level spells. For rare components, roll a d6 — on a 1–2, she's out of stock; on a 3–4, she has one; on a 5–6, she has what you need. She always knows what she's missing and will tell you where to look.`,
};
