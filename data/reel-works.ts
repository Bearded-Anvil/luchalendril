export const reelWorks = {
  id: "reel-works",
  name: "Reel Works",
  tagline: "Deep Sea Fishing Gear · Rods · Reels · Nets · Harpoons · Spears",
  street: "Dock Yard",
  city: "Beacon",
  image: "/reel-works.jpg",

  sceneDescription: `Reel Works is a wooden structure about twelve feet wide and ten feet tall. Mounted above the front counter, turned on its side with its hull facing out, is a lifeboat — you can see straight down into it. Two oars cross in an X above it. Both front roof supports are wrapped so tightly in ship rope that you can't see the wood beneath except through a few gaps where the coils haven't quite met.

Laid across the front counter is a large, barbed harpoon — sharp and faintly glistening — with a thick coil of rope piled at its base. Along the back wall hang several throwing harpoons, a trio of heavy harpoon crossbows with rope reels mounted beneath them, and a row of deep-sea fishing rods so large they'd require two hands just to hold steady. One side wall is covered nearly floor to ceiling in thick nets, hung from iron hooks, overlapping each other in heavy folds. The booth is lit well — multiple lanterns placed throughout. Centered on the back wall, mounted with its mouth facing the counter, is the head of a very large shark. A lantern hangs inside the open mouth. The light comes through the teeth.`,

  owner: {
    name: "Brock Shorntusk",
    race: "Half-Orc",
    age: "Middle-aged",
    appearance: `A large man with light green skin and a wide, round belly that his gray shirt has given up trying to contain. His brown pants are cut off just below the knees. He wears an eye patch on his left eye — though some people who've visited more than once will quietly note that it seems to have changed eyes. He doesn't explain it and doesn't invite the question.`,
  },

  dmPrivate: {
    goals: `Brock knows of a great black whale that lives somewhere in the ocean beyond the bay. He has hunted it for years — come close more than once — and it has thwarted him every time. He keeps building, improving, and modifying his equipment. The gear he sells is good. The gear he keeps for himself is better. He intends to bring that whale in before he's too old to go out after it.`,
    eyePatchNote: `The eye patch does change eyes. Brock will not acknowledge it. If players bring it up, he stares at them until they stop. He genuinely does not seem aware it has changed, or he simply does not care. Leave it unexplained.`,
    questNote: `The black whale quest becomes available when the White Bay content opens. Until then, Brock may mention the whale offhandedly to players who ask what he's working toward, but he won't commission them formally.`,
  },

  inventory: [
    {
      name: "Throwing Harpoon",
      description: "A barbed, weighted harpoon designed to be thrown. Its hooks are shaped specifically to catch and hold aquatic flesh.",
      effect: "Acts as a thrown spear. When used against an aquatic creature, add 1d6+2 to the damage.",
      cost: "5 gp",
      stock: 4,
    },
    {
      name: "Harpoon Crossbow",
      description: "A heavy crossbow fitted with a rope reel mounted beneath the stock. When the bolt lands, a barbed harpoon head sets into the target.",
      effect: "Acts as a heavy crossbow. On a successful hit, the target is impaled. The user and the target make a contested STR check. If the user wins, the target is dragged 10 feet closer. If the target wins, it pulls free from the harpoon.",
      cost: "80 gp",
      stock: 3,
    },
    {
      name: "Weighted Net",
      description: "A heavy net weighted along the edges to help it sink fast and spread wide. Works equally well on dry land.",
      effect: "Range as a thrown weapon. Uses Dexterity to hit. A hit target must pass a DC 15 Dexterity saving throw or be grappled. A grappled creature must pass a DC 15 Strength check to break free. A friendly creature may assist, granting advantage on the escape roll.",
      cost: "20 gp",
      stock: 4,
    },
    {
      name: "Shorntusk's Special Weapon",
      description: "A single massive harpoon, hand-built by Brock himself. It requires significant strength just to throw. There is only one.",
      effect: "Use STR or DEX to hit (thrown, same range as a spear). On a hit, the target is impaled. The target must make a STR saving throw, DC 15, at disadvantage to pull free. If the thrower chooses, the impaled target is automatically dragged 10 feet toward them. An impaled creature has its movement reduced to 0 until it breaks free. Damage: 1d12 + the modifier of whichever stat the thrower used to attack.",
      cost: "150 gp",
      stock: 1,
      unique: true,
    },
  ],
};
