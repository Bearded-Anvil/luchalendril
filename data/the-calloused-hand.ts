export const theCallousedHand = {
  id: "the-calloused-hand",
  name: "The Calloused Hand",
  tagline: "Tools shape the world.",
  street: "South Main Street",
  city: "Beacon",
  image: "/the-calloused-hand.jpg",

  sceneDescription: `As you walk by, you see a simple booth — nothing too decorative or lavish — selling all sorts of tools. And when you say all sorts, you mean so many tools you don't even know what half of them are for. A middle-aged halfling works the booth, making sure every tool is at the right angle and placed correctly, checking them over for rust or weathering, making sure hinges don't squeak and adding oil to the ones that do. And every once in a while, after handling a particularly heavy tool, you see him flex his right hand and massage the palm rather deeply.`,

  owner: {
    name: "Teppy Downwhistle",
    race: "Halfling",
    age: "Middle-aged",
    appearance: `Light brown hair, a little unusually chiseled for a halfling. Light gray eyes. His hands are calloused, rough, and scarred — and he looks over every item in his booth with the practiced eye of a man who has used all of them.`,
  },

  dmPrivate: {
    fears: `Teppy has noticed that his hands don't function the way they used to. His grip strength is fading, and he fumbles his tools quite a bit. For a man who has spent his life being a master of everything, this means he's nearing the end of his professional line. Selling tools is all he has left.`,
    goals: `Teppy wants to be the greatest craftsman in the world. Not just in Beacon — everywhere. Natural crafts, not magical. He loves working with his hands and would do a great many things to keep that going. The fading is eating him alive.`,
    questHooks: [
      {
        title: "The Fading Grip",
        description: `Teppy is quietly looking for someone who can find a cure for his aging hands. Anything that will get him back to working at full strength. He won't ask directly — but if players spend time at his booth, ask questions, or show genuine interest in his craft, he may open up about it.`,
        dmNote: `This quest is open-ended. Run it however fits your world. As Luchalendril expands, this will be built into a full living adventure. For now, keep Teppy warm and a little melancholy — not bitter, just aware.`,
      },
    ],
  },

  artisanTools: [
    { name: "Alchemist's Supplies", description: "Glassware, burners, mixing tools, reagents", price: "45 gp" },
    { name: "Brewer's Supplies", description: "Fermentation tools, tubing, casks", price: "18 gp" },
    { name: "Calligrapher's Supplies", description: "Fine inks, parchment tools, nibs", price: "9 gp" },
    { name: "Carpenter's Tools", description: "Saws, hammers, chisels, measuring tools", price: "7 gp" },
    { name: "Cartographer's Tools", description: "Compasses, inks, rulers, parchment case", price: "13 gp" },
    { name: "Cobbler's Tools", description: "Leather needles, awls, shaping forms", price: "4 gp" },
    { name: "Cook's Utensils", description: "Pots, knives, stirring tools, pans", price: "9 gp" },
    { name: "Glassblower's Tools", description: "Blowpipe, shaping paddles, shears", price: "27 gp" },
    { name: "Jeweler's Tools", description: "Tiny hammers, files, precision tools", price: "22 gp" },
    { name: "Leatherworker's Tools", description: "Knives, punches, stitching tools", price: "4 gp" },
    { name: "Mason's Tools", description: "Trowels, levels, chisels, mallets", price: "9 gp" },
    { name: "Painter's Supplies", description: "Brushes, pigments, mixing trays", price: "9 gp" },
    { name: "Potter's Tools", description: "Clay shaping tools, wire cutters", price: "9 gp" },
    { name: "Smith's Tools", description: "Hammer, tongs, files, bellows tools", price: "18 gp" },
    { name: "Tinker's Tools", description: "Small repair tools, clamps, screws", price: "45 gp" },
    { name: "Weaver's Tools", description: "Needles, frames, threading tools", price: "9 gp" },
    { name: "Woodcarver's Tools", description: "Chisels, knives, carving gouges", price: "9 gp" },
  ],

  specialistKits: [
    { name: "Disguise Kit", description: "Makeup, wigs, dyes, false facial pieces", price: "22 gp" },
    { name: "Forgery Kit", description: "Inks, seals, waxes, paper templates", price: "13 gp" },
    { name: "Herbalism Kit", description: "Clippers, pouches, drying papers", price: "4 gp" },
    { name: "Navigator's Tools", description: "Sextant, compass, star charts", price: "22 gp" },
    { name: "Poisoner's Kit", description: "Vials, mixers, grinders, applicators", price: "45 gp" },
    { name: "Thieves' Tools", description: "Picks, tension tools, tiny mirrors", price: "22 gp" },
    { name: "Gaming Set (Dice)", description: "Bone dice and travel cup", price: "9 sp" },
    { name: "Gaming Set (Cards)", description: "Painted cards in leather case", price: "4 sp" },
    { name: "Dragonchess Set", description: "Folding carved strategy board", price: "9 gp" },
    { name: "Musical Instrument Repair Kit", description: "Strings, pegs, glue, tuning tools", price: "7 gp" },
  ],

  tradeGoods: [
    { name: "Hammer", description: "Standard iron hammer", price: "9 sp" },
    { name: "Hand Saw", description: "Fine toothed woodworking saw", price: "1 gp" },
    { name: "Chisel Set", description: "Three sizes", price: "8 sp" },
    { name: "Iron Nails (100)", description: "Wrapped in wax cloth", price: "5 sp" },
    { name: "Lock Components", description: "Springs, pins, tiny screws", price: "2 gp" },
    { name: "Empty Glass Bottles (5)", description: "Thick travel-safe glass", price: "1 gp" },
    { name: "Lantern Repair Kit", description: "Wicks, wire, replacement glass", price: "1 gp" },
    { name: "Sewing Roll", description: "Needles, thread, patches", price: "7 sp" },
    { name: "Portable Sharpening Stone", description: "Pocket-sized whetstone", price: "4 sp" },
    { name: "Measuring Twine (100 ft.)", description: "Waxed and knotted every foot", price: "3 sp" },
  ],
};
