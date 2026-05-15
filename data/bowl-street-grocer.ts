export const bowlStreetGrocer = {
  id: "bowl-street-grocer",
  name: "Bowl Street Grocer",
  tagline: "The Wild Is Good Medicine",
  image: "/bowl-street-grocer.jpg",

  sceneDescription: `Walking into Bowl Street Grocer is a shock to the senses. The moment you step through the door, an earthy smell of soil, living plants, and gently burning herbs fills your lungs. Shelves line every wall and run in rows through the center of the room — all of them packed with jars of seeds, dried leaves, pressed flowers, and things that have no obvious name. On the counter, a small glass jar holds sticks of incense, a slow curl of white smoke rising from the tips. A hand-painted sign on the counter reads "The Wild Is Good Medicine," letters wrapped in painted vines. Above you, an upside-down wheelbarrow hangs from the ceiling beams — purely decorative, and somehow charming. Lanterns dangle here and there just below the rafters, glowing flies hovering lazily around the light. Near the counter, a wooden porch swing hangs from a well-built A-frame, creaking faintly as though someone just stood up from it.

Behind the counter stands Gretta — smallish for a minotaur, which still puts her at eye level with most humans. Long braids and dreads fall heavily over her face, threaded with flowers. A crown of wildflowers from the median sits atop her head, propped up by small upward-curving horns. She watches you through the curtain of hair with a patience that suggests she has seen everything and judged very little.`,

  owner: {
    name: "Gretta Haymuck",
    race: "Minotaur (Female)",
    appearance: `Smallish for her kind, though she still meets most humans eye to eye. Her hair is a long mix of braids and dreads, threaded with wildflowers and hanging heavily over her face — it genuinely appears she cannot see through them, and yet somehow she always does. A crown of wildflowers from the median outside rests atop her head, held in place by small sharp horns that curve only slightly as they point upward. She wears simple dresses in light pastel colors, tied at the waist with a thin golden cord.`,
  },

  dmPrivate: {
    fears: `Gretta works hard to run a clean, reputable business and has built something real on Central Bowl Street. But there are those who do not trust or like that a minotaur owns a shop on their central road. She fears her reputation will be chipped away by people who either dislike her race or fear her presence — not through any confrontation, but through whisper campaigns and quiet discouragement of customers.`,
    goals: `Gretta wants Bowl Street Grocer to be so well regarded that other minotaurs feel confident opening their own shops in other cities under her name. She is building a legacy, not just a business.`,
    questHook1: `Gretta is looking for local businesses willing to carry or cook with her products. If the party lingers long enough to chat, she may ask if they'd be willing to visit nearby shops on her behalf and make introductions. She'll offer a small finder's fee for any deal that takes.`,
    questHook2: `The Healing Herbs bin on the shelf is empty. If the party asks, Gretta will tell them the only place they grow in this region is a grove somewhere in the Whispershade Woods southeast of Beacon. Anyone who can bring her a few bushels will be paid 40 gp per bushel — and she still has a few healing potions she can throw in.`,
    questNote: `The Whispershade Woods will be available as content soon. When it is, flesh out the grove encounter. The reward for returning with Healing Herbs: 40 gp per bushel + D4+1 healing potions. Gretta is genuine — she's not sending anyone into danger she wouldn't take seriously.`,
  },

  herbs: [
    {
      name: "Healing Herbs",
      cost: "60 gp per bushel",
      stock: "Out of Stock",
      outOfStock: true,
      description: "Can be eaten raw, though it takes time. If brewed into a tea or mixed into a soup, they work just as well in a tastier form.",
      effect: "However consumed, heals 3D6 HP over 10 minutes. This is not immediate healing — the body processes it gradually.",
    },
    {
      name: "Healing Salve",
      cost: "20 gp per bottle",
      stock: "5 in stock",
      stockCount: 5,
      description: "3 uses per bottle. Rubbed directly onto a wound during a short rest.",
      effect: "Heals D8 HP during a short rest. Can be used alongside other healing methods. 1 use per short rest.",
    },
    {
      name: "Urine of the Ice Skink",
      cost: "10 gp per vial",
      stock: "10 in stock",
      stockCount: 10,
      description: "The Ice Skink is a massive eight-foot lizard native to the northern wastelands. Its urine, when poured over a burn, removes the pain instantly.",
      effect: "Instantly removes any recurring burn damage and extinguishes fires small enough to be doused by the vial. Heals no HP.",
    },
    {
      name: "Dietary Herbs",
      cost: "5 sp each",
      stock: "50 in stock",
      stockCount: 50,
      description: "Filling enough to count as a full meal. They do not spoil and can be eaten alone or added to a stew for flavor.",
      effect: "Counts as one ration. Does not spoil.",
    },
    {
      name: "Jar of Unspoiling Milk",
      cost: "6 sp each",
      stock: "20 in stock",
      stockCount: 20,
      description: "A jar of milk with an enchanted powder that prevents spoiling. Warm, but safely drinkable.",
      effect: "Counts as one ration. If consumed before a long rest, removes any non-magical effect that would prevent sleep.",
    },
  ],

  soups: [
    {
      name: "Soup of Clarity",
      cost: "25 gp per jar",
      stock: "5 jars in stock",
      stockCount: 5,
      description: "Powdered soup mix. One jar feeds four people.",
      effect: "Anyone who consumes a full serving during a long or short rest has advantage on WIS saving throws until their next long rest.",
    },
    {
      name: "Soup of the Sun Pepper",
      cost: "20 gp per jar",
      stock: "3 jars in stock",
      stockCount: 3,
      description: "Powdered soup mix. One jar feeds four people.",
      effect: "Anyone who consumes a full serving gains resistance to natural cold damage (environmental). Has no effect against magical cold damage.",
    },
    {
      name: "Soup of the Slumberberry",
      cost: "65 gp per jar",
      stock: "1 jar in stock",
      stockCount: 1,
      description: "Powdered soup mix. One jar feeds four people. The Slumberberry's sleeping properties have ended more than a few unwary travelers.",
      effect: "Anyone who consumes a full serving must sleep within 10 minutes. The sleep lasts 4 hours, but each hour counts as two for rest purposes — a long rest can be completed in half the time.",
    },
    {
      name: "Soup of the Gullible Dealer",
      cost: "40 gp per jar",
      stock: "3 jars in stock",
      stockCount: 3,
      description: "Powdered soup mix. One jar feeds four people.",
      effect: "Anyone who consumes a full serving has disadvantage on persuasion, intimidation, and deception saving throws, as well as insight checks made against others. Lasts 1 hour. After the effects wear off, the consumer has full memory of everything that transpired.",
      quote: "Before you ask — no, I won't be consuming any of this before we talk prices.",
    },
  ],

  incense: [
    {
      name: "Incense of the Hunting Wolf",
      cost: "10 gp per use",
      stock: "10 in stock",
      stockCount: 10,
      description: "Burned during a long or short rest while focusing on a specific living creature being tracked.",
      effect: "Upon finishing the rest, the user knows which direction that target is currently. Effect lasts 1 minute.",
    },
    {
      name: "Aroma of Patience",
      cost: "40 gp per use",
      stock: "3 in stock",
      stockCount: 3,
      description: "Lit before a battle takes place.",
      effect: "Any creature within 15 feet must pass a WIS saving throw, DC 14, or be overtaken by a calming effect that strips away rage, anger, sadness, happiness, and confusion. Lasts 1 hour.",
    },
    {
      name: "Gas of Wafting Flatulence",
      cost: "25 gp per use",
      stock: "5 in stock",
      stockCount: 5,
      description: "A small ball of incense soaked in Stink Toad toxins. Tossed into a space, it silently emits an odor so foul that most cannot help but move away from it.",
      effect: "Anyone within 20 feet must make a CON saving throw, DC 15, or move directly away from it as far as they can in one turn. Lasts 20 minutes. The lingering smell can persist for days.",
      quote: "I've never had the courage to use one myself… but believe me, I've been tempted.",
    },
  ],

  magicItems: [
    {
      name: "Never Ending Canteen",
      cost: "250 gp",
      stock: "1 in stock",
      stockCount: 1,
      description: "A canteen that permanently never runs out of water. One can drink enough to last half a day before it runs dry — but after one hour, it refills and is ready again.",
      effect: "Provides unlimited water. Refills automatically every hour.",
      quote: "I can't think of a slower and worse way to die than to die of thirst. With this, you'll never have to worry about that again.",
    },
    {
      name: "Magic Cook Pot",
      cost: "300 gp",
      stock: "1 in stock",
      stockCount: 1,
      description: "Requires no fire. Once food is placed inside, it heats automatically until removed. Emits no light.",
      effect: "Cooks food without fire or light. Produces no visible heat source.",
      quote: "If you're planning on traveling somewhere dangerous, a fire can attract all sorts of creatures. Sometimes you need the food without the attention.",
    },
    {
      name: "Flower Stakes",
      cost: "10 gp each",
      stock: "25 in stock",
      stockCount: 25,
      description: "Small wooden stakes — the same kind used to anchor a tent. Once driven into the ground, wildflowers bloom in a 10-foot radius within a few hours.",
      effect: "Wildflowers grow and bloom in a 10-foot radius. They require no water or sunlight as long as the stake remains at their center.",
      quote: "Everyone can spread a little beauty no matter where they're going.",
    },
  ],
};
