export const rayshasRecipeWorks = {
  id: "rayshas-recipe-works",
  name: "Raysha's Recipe Works",
  image: "/home-hearth-district.jpg",
  tagline: "Magical Components, Herbs, Oils, Essences & More.",
  path: "/beacon/home-hearth-district/rayshas-recipe-works",

  signs: [
    `The sign is not mounted. It grows. Living vines have been trained and coaxed to grow directly from the mortar between the stones, entwining and branching until they spell out: Raysha's Recipe Works. The lettering shifts slightly with the seasons but never loses its shape.`,
    `"Magical Components, Herbs, Oils, Essences & More" — painted board near the door.`,
  ],

  sceneDescription: `The vines on the outside are a hint. The inside is their full answer.

Every surface in Raysha's Recipe Works is occupied. Shelves line every wall from floor to ceiling, packed with jars of dried material — leaf, root, bark, seed, petal — each labelled in two hands: a common name and a smaller notation below it in a tighter script that most customers can't read. Bundles of dried herbs hang from the ceiling beams on cord, some of them turning to dust at the edges, some still vibrant. The floor has a center aisle left open, barely wide enough for two people to pass. Everything else is storage.

The smell is — a lot. Layered. Some of it familiar, some of it not. Something astringent. Something floral underneath that. Something dark at the back.

The glass cases along the counter are different from the shelves — smaller quantities, higher labels, locks on two of them. Bottles with wax seals. Small cloth bags tied with specific-colored cord. Chips and fragments of something that looks like stone but isn't.

Raysha herself is behind the counter, writing in a ledger. Gnome, small even for it, with braided brown hair pinned up and a pair of lensed goggles pushed up on her forehead. She finishes her line before she looks up.

"What do you need?" she says. Not unfriendly. Very direct.`,

  owner: {
    name: "Raysha Fennick",
    race: "Gnome (Female)",
    appearance: `Small and compact, with braided brown hair pinned up and a pair of brass-framed goggles she keeps on her forehead during business hours. Her apron has pockets — many of them, all used. Her hands are stained in ways that vary by week. She is not particularly tall even behind the counter, but the counter is lower than usual, which she had custom-made when she bought the shop.`,
    personality: `Direct and efficient. She asks what you need and does not ask why. She does not judge purchases. She does maintain a running mental tally of what people buy and in what combination, and she notices patterns — though she keeps this to herself unless there's a reason to speak up. She knows her inventory completely and can locate any item within thirty seconds.`,
    dmPrivate: {
      theGoggles: `The goggles on her forehead are not decorative and not standard magnification lenses. When worn, they allow her to see active magical enchantments, residue, and traces. She uses them to assess incoming stock for quality, but she also uses them on customers — a quick look when they enter, out of habit. She does not mention this. She may or may not react visibly to what she sees.`,
      whatSheKnows: `Raysha knows what most of her components are used for, in the same way a general store owner knows what rope is used for. She doesn't ask. She has seen customers buy components for healing and for harm and for things she couldn't identify even with the goggles on. Her policy is that what people make is their business. This policy has a limit, though she has only reached it once.`,
      questHook: `She has been looking for something specific for about six months — a component she has received requests for three times and cannot source through her usual suppliers. She hasn't advertised this. If the party asks whether there's anything she's looking for, she will tell them. The component is rare, has a very specific origin, and finding it would require going somewhere most people don't go voluntarily.`,
    },
  },

  inventory: {
    driedHerbs: [
      { name: "Sunpetal Bloom, dried", cost: "4 cp", description: "Bright yellow petals, fully dried. Common base component. Strong shelf life." },
      { name: "Deeproot Bark, shaved", cost: "1 sp", description: "Dark and dense, shaved from the deeproot tree. Earthy smell, stable in compound." },
      { name: "Embervine Leaf", cost: "2 sp", description: "A red-edged leaf that retains mild heat when dried. Handle carefully — it is not dangerous, but it is warm." },
      { name: "Coldmoss, pressed", cost: "1 sp", description: "A grey-green moss, pressed and dried. Found only near cold running water. Imported through the docks." },
      { name: "Whispergrass, cut", cost: "2 sp", description: "Fine pale reeds, cut and bundled. They hum faintly in still air. Dried versions are quieter but not silent." },
      { name: "Ashweed Bundle", cost: "3 sp", description: "A common gray-leafed weed, gathered and dried in bundles. Releases a grey smoke when burned." },
      { name: "Ironbell Flower, whole", cost: "4 sp", description: "A metallic-looking flower, fully intact and dried. The petals don't crush easily. A good sign." },
      { name: "Emberfrost Leaf", cost: "6 sp", description: "A red leaf that is cold to the touch. The contrast is consistent and unexplained. Raysha has stopped trying to explain it." },
    ],
    oils: [
      { name: "Moonbloom Oil", cost: "1 gp / vial", description: "A pale oil pressed from moonbloom petals. Slight luminescence under low light. Standard quality." },
      { name: "Ashvine Extract", cost: "2 gp / vial", description: "A thick dark extract from the ashvine. Slow to incorporate into compounds. High potency per drop." },
      { name: "Twilight Essence", cost: "3 gp / vial", description: "Made from a combination of components harvested at a specific time of day. The timing is what matters. Raysha makes this herself." },
      { name: "Stone Pine Distillate", cost: "5 gp / vial", description: "Distilled from stone pine resin. Rare. Clear with a faint amber tint. Very stable." },
    ],
    rawComponents: [
      { name: "Glowcap Dust", cost: "3 gp / pouch", description: "Ground from luminescent mushrooms. Faint glow, fine texture. Kept sealed." },
      { name: "Cinderstone Chip", cost: "5 gp each", description: "Small chips of a heat-absorbing black stone. Warm to the touch. Does not lose heat." },
      { name: "Thornberry Resin", cost: "8 gp / vial", description: "Thick amber resin from thornberry bushes. Collected with some difficulty — hence the price." },
      { name: "Riverclay, raw", cost: "1 sp / lump", description: "Grey clay from riverbeds. Mild preservative properties. Sold in hand-sized lumps." },
      { name: "Darkpool Algae, dried", cost: "2 gp / sheet", description: "From underground pools. Flat, dark, and faintly iridescent when dry." },
      { name: "Quartz Shard, raw", cost: "10 gp each", description: "Raw quartz, unpolished. Sourced for quality — Raysha inspects every batch." },
      { name: "Feldspar Dust", cost: "1 gp / pouch", description: "Ground feldspar, fine grade. A common inert base for compound work." },
      { name: "Shell Powder, fine", cost: "3 sp / pouch", description: "Ground from coastal shells. Good for binding. Faintly saline." },
      { name: "Preserved Spider Eyes", cost: "12 gp / set of 8", description: "Preserved in oil, sold in a sealed jar. Raysha doesn't specify the species." },
    ],
    essences: [
      { name: "Smoke Essence", cost: "4 gp / vial", description: "Concentrated essence of smoke. No fire. Releases on contact with air." },
      { name: "Still Water Essence", cost: "6 gp / vial", description: "From a deep, unmoving water source. Has a specific character. Raysha will not tell you which source." },
      { name: "Ash Essence", cost: "3 gp / vial", description: "The distillate of burned material — plant material specifically. Clean and simple." },
    ],
  },
};
