export const whittledThings = {
  id: "whittled-things",
  name: "Whittled Things",
  street: "South Main Street",
  city: "Beacon",
  image: "/whittled-things-store.png",
  imageLarge: "/whittled-things-store-large.jpeg",

  sceneDescription: `As you approach the booth, you hear the clacking and tapping of wooden spoons hanging from a string like a muffled wind chime. Several small stools and chairs are placed in a half circle as if the vendor is expecting company, but the prices marked on the chairs tell you otherwise. A weapon rack off to the right side holds a series of wooden longswords and wooden daggers. Across the front of the table, between you and the rest of the wares, are little wooden miniatures — mushrooms, bears, foxes, cats and dogs, barrels and much more. An older gentleman shaves away a decent curl of wood from his latest project, dusts more wood shavings from his clothes, and looks up to greet you. "Hello there! Welcome to Whittled Things!"`,

  owner: {
    name: "Dorrin Gossell",
    race: "Human",
    age: "Late 50s",
    appearance: `Brown hair, close cut with streaks of gray. Stubble but no beard. Around 6' tall. Average build — not barrel chested, but more of a strength build from natural ability. Very tan skin from years in nature, hunting, and spending time in the woods.`,
    history: `Dorrin grew up near a lumber mill his father worked at. One thing he learned early was the wood his father would bring home to build onto their home. They weren't a wealthy family and Dorrin didn't have many toys or friends, so he spent his time whittling and carving with his father's tools. Growing up, the hobby never left him — until one day he decided to try to sell some of his work. A lot of his goods are carved with great efficiency and decoration, but he has very little past the ordinary as far as uses are concerned. His quarterstaff may be pretty... but it's still just a quarterstaff.`,
  },

  dmPrivate: {
    personality: `Dorrin is warm and talkative with customers he likes, but becomes short and businesslike with anyone he suspects is wasting his time. He has a sharp eye for quality and will quietly judge the gear of anyone who browses his wares. He respects hard work above all else.`,
    desires: `Dorrin didn't get a start working for himself until later in life. He wants to retire comfortably on his goods rather than having to continue working odds and ends jobs on top of his woodworking.`,
    fears: `Merchants are getting bolder when it comes to using the White Bay. His fear is that some of the wealthier merchants will bring woodworks from other lands and he will lose the small foothold he has in Beacon.`,
    questHooks: [
      {
        title: "The Watching Merchant",
        description: `A new merchant has been seen walking the streets of Beacon, eyeing the goods and wares of the local shops. Dorrin couldn't help but notice that this merchant stopped and studied his own craftsmanship for a long time — asking prices, checking quality — before heading off with his guards. Dorrin fears he may be scouting competition. He wants someone to sneak aboard the merchant's vessel and investigate the cargo for signs of woodworking goods. He doesn't come right out and ask, but if the party earns his trust he'll bring it up quietly.`,
      },
    ],
    secretItems: [
      {
        name: "Carved Signal Whistle",
        description: "A small carved bird whistle. Dorrin made these for the city watch years ago and still has a few. The tone matches the watch's standard all-clear signal.",
        price: "8 gp",
        note: "Only offered to trusted customers or those who clearly aren't city guards.",
      },
      {
        name: "Hollow Compartment Staff",
        description: "A beautiful carved quarterstaff with a hidden compartment in the base, sealed with a carved stopper. Looks purely decorative.",
        price: "22 gp",
        note: "Dorrin won't mention this unless the customer seems to need to hide something small.",
      },
      {
        name: "Rootbound Grip",
        description: "A gnarled wooden handle wrapped in living vine. As a bonus action, press against a surface and speak its command word — roots burst outward, anchoring it firmly. Functions like a temporary immovable rod (natural or worked surfaces only — stone, wood, dirt, no mid-air use). Holds up to 500 lbs. Lasts 1 minute. 2 uses per day. If used in soil or earth, faint roots remain behind — trackable by rangers and druids.",
        price: "85 gp",
        note: "Only shown to players who ask for something special, or when the DM says: \"You look like a group that's seen some things. Take a look at these.\"",
      },
    ],
  },

  inventory: [
    {
      name: "Wooden Mess Kit",
      description: "Bowl, cup, and utensils for travel meals. Light, durable, and won't shatter if dropped.",
      price: "5 sp",
      quote: "Light as a feather and tough as old bark. Drop it off a cliff, pick it up, keep eating. I've seen soldiers go through three tin kits to every one of mine.",
    },
    {
      name: "Practice Dagger (Blunted Wood)",
      description: "Training weapon. No lethal damage — DM may allow 1 bludgeoning.",
      price: "2 sp",
      quote: "Teach your kids to fight without teaching 'em to bleed. Every fighter I know started with something like this. Some still carry one for sparring.",
    },
    {
      name: "Carved Wooden Shield",
      description: "Functions as a normal shield (AC +2), but vulnerable to fire.",
      price: "8 sp",
      quote: "Lighter than steel and half the price. I carve 'em strong — won't split easy. Just... don't take it into a burning building. That's on you.",
    },
    {
      name: "Walking Stick (Balanced)",
      description: "Can function as a quarterstaff. Doubles as a mobility aid and a self-defense tool.",
      price: "3 sp",
      quote: "Looks like a walking stick. Feels like a weapon. The balance on that one took me three tries to get right. Nobody expects the old man's cane.",
    },
    {
      name: "Children's Toy Soldier Set",
      description: "Small carved figures — knights, beasts, and archers.",
      price: "1 sp",
      quote: "Knights, archers, a couple of beasts. Kids love 'em. Funny thing is, I've sold just as many to grown men planning out battle formations on a tavern table.",
    },
    {
      name: "Folding Camp Stool",
      description: "Simple but sturdy — folds flat for travel.",
      price: "4 sp",
      quote: "Folds down flat, fits in a pack. You'd be surprised how much a man's mood improves when he's not sitting on wet ground. Ask any soldier.",
    },
    {
      name: "Wooden Training Sword (Longsword Style)",
      description: "Practice weapon for non-lethal sparring. Heavier than it looks.",
      price: "5 sp",
      quote: "Heavier than it looks — I do that on purpose. Train with this, real steel feels like nothing. Your arms'll hate me for a week. Then they won't.",
    },
    {
      name: "Whittled Animal Totem",
      description: "A carved charm — bear, wolf, stag, and more. May grant advantage on certain roleplay checks at DM discretion.",
      price: "6 sp",
      quote: "Bear for strength. Wolf for cunning. Stag for endurance. I don't make promises about what they do — I just know people who carry 'em tend to come back.",
    },
    {
      name: "Wooden Mess Tray with Compartments",
      description: "Keeps food from mixing — popular with organized travelers and camp groups.",
      price: "6 sp",
      quote: "Each section's separate — bread, meat, whatever sauce you've got. Keeps things tidy. I've also seen a ranger use one to sort his arrows. Man had a system.",
    },
    {
      name: "Quarterstaff (Well-Balanced Craft)",
      description: "Standard quarterstaff with an exceptionally smooth grip.",
      price: "2 sp",
      quote: "Best two-silver piece you'll spend. The grip's sanded down six times — no splinters, no slipping. It's plain, but plain and reliable beats fancy and brittle every time.",
    },
  ],
};
