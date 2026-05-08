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
    { name: "Wooden Mess Kit", description: "Bowl, cup, and utensils for travel meals. Light, durable, and won't shatter if dropped.", price: "5 sp" },
    { name: "Practice Dagger (Blunted Wood)", description: "Training weapon — no lethal damage; DM may allow 1 bludgeoning. Commonly used for sparring or teaching young fighters.", price: "2 sp" },
    { name: "Carved Wooden Shield", description: "Functions as a normal shield (AC +2), but vulnerable to fire. Lighter than steel, often decorated with simple carvings.", price: "8 sp" },
    { name: "Walking Stick (Balanced)", description: "Can function as a quarterstaff. Doubles as both a mobility aid and a self-defense tool.", price: "3 sp" },
    { name: "Children's Toy Soldier Set", description: "Small carved figures — knights, beasts, and archers. Good as a toy, roleplay prop, or distraction.", price: "1 sp" },
    { name: "Folding Camp Stool", description: "Simple but sturdy — folds flat for travel. Portable seating during rests.", price: "4 sp" },
    { name: "Wooden Training Sword (Longsword Style)", description: "Practice weapon for non-lethal sparring. Heavier than it looks — good for building strength and technique.", price: "5 sp" },
    { name: "Whittled Animal Totem", description: "Often carried as a charm — bear, wolf, stag, and more. May grant advantage on certain roleplay checks at DM discretion.", price: "6 sp" },
    { name: "Wooden Mess Tray with Compartments", description: "Keeps food from mixing — popular with organized travelers. Good for camps or groups.", price: "6 sp" },
    { name: "Quarterstaff (Well-Balanced Craft)", description: "Standard quarterstaff weapon with an exceptionally smooth grip. Clearly made by a skilled hand.", price: "2 sp" },
  ],
};
