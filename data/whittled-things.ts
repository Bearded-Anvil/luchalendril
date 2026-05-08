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
      description: "Bowl, cup, and utensils for travel meals. Light and silent — won't clank around in your pack.",
      price: "5 sp",
      quote: "Nothing special here. Just a mess kit that won't clank around in your pack like a metal one will. Just in case you plan on doing some sneaking around.",
      quoteNote: "He chuckles.",
    },
    {
      name: "Practice Dagger (Blunted Wood)",
      description: "Training weapon. No lethal damage — DM may allow 1 bludgeoning. Sold alongside the training sword.",
      price: "2 sp",
      quote: "I started making these for fun but I hear a lot of my customers buy them for practicing safely.",
    },
    {
      name: "Wooden Training Sword (Longsword Style)",
      description: "Practice weapon for non-lethal sparring.",
      price: "5 sp",
      quote: "I started making these for fun but I hear a lot of my customers buy them for practicing safely.",
    },
    {
      name: "Wooden Shield (Plain)",
      description: "Fully functional wooden shield. Functions as a normal shield (AC +2), but vulnerable to fire.",
      price: "6 sp",
      quote: "These are not for practice. They're fully functional. We have this one that's plain… one that's got a decorative pattern and this one that's carved like a bear. And if you want one personalized I can do that too for the same cost as the bear one.",
    },
    {
      name: "Wooden Shield (Carved)",
      description: "Fully functional carved wooden shield — decorative pattern or bear design. Custom carving available for same price. Functions as a normal shield (AC +2), but vulnerable to fire.",
      price: "8 sp",
      quote: "These are not for practice. They're fully functional. We have this one that's plain… one that's got a decorative pattern and this one that's carved like a bear. And if you want one personalized I can do that too for the same cost as the bear one.",
    },
    {
      name: "Walking Stick (Balanced)",
      description: "Can function as a quarterstaff. Sturdy grip for rough terrain.",
      price: "3 sp",
      quote: "If you're doing a lot of walking in rocky terrain or plan on hiking in the rain, this will help you keep your footing.",
      quoteNote: "He picks it up in both hands over one shoulder. \"And it's also good for giving things a good whackin'!\"",
    },
    {
      name: "Children's Toy Soldier Set",
      description: "Small carved figures — knights, beasts, and archers.",
      price: "1 sp",
      quote: "Eh, these are just for fun. Lots of little ones running around here without much to play with. I just put these out there to see the smile on their faces.",
    },
    {
      name: "Folding Camp Stool",
      description: "Simple but sturdy — sized to fit in most backpacks.",
      price: "4 sp",
      quote: "I made these where they'll fit in most backpacks. Feels a lot better on your butt than a muddy camp site.",
    },
    {
      name: "Whittled Animal Totem",
      description: "A carved charm — bear, wolf, stag, and more. Said to take enchantments particularly well. May grant advantage on certain roleplay checks at DM discretion.",
      price: "6 sp",
      quote: "These are a little different from the toys. I didn't know this when I started making them but I've been told that the animal shapes and such take certain enchantments better than just a plain object.",
    },
    {
      name: "Wooden Mess Tray with Hidden Compartments",
      description: "Organized travel tray with separate food sections and small hidden drawers on the underside for concealing valuables.",
      price: "6 sp",
      quote: "If you're looking for a little more than a common mess kit, I've made some of these with little compartments.",
      quoteNote: "He turns it over. \"And there's even little hidden drawers in the back where you can hide valuables if they're small enough.\"",
    },
    {
      name: "Quarterstaff (Well-Balanced Craft)",
      description: "Standard quarterstaff with a smooth, sturdy grip.",
      price: "2 sp",
      quote: "Nothing too fancy here. Just a good sturdy staff for walking with or whacking a goblin on the head.",
      quoteNote: "He laughs. \"I've even had a couple of wizards buy some of my more… intricate work. They like to show off with their staves, ya know.\"",
    },
  ],
};
