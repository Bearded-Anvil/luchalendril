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
    ],
  },

  inventory: [
    { name: "Wooden Miniature (common animal)", description: "A small hand-carved figure — fox, cat, dog, bear, mushroom, or barrel. Smooth and detailed.", price: "2 sp" },
    { name: "Wooden Miniature (custom request)", description: "Dorrin can carve a specific figure if you describe it. Takes 2 days.", price: "8 sp" },
    { name: "Carved Wooden Mug", description: "A sturdy drinking mug with decorative knotwork carved around the outside. Holds liquid just fine.", price: "4 sp" },
    { name: "Wooden Spoon (decorative)", description: "A long cooking spoon with a carved flower motif on the handle. The kind you'd hang on a wall.", price: "1 sp" },
    { name: "Wooden Spoon (set of 4)", description: "Four plain but well-made cooking spoons. Good for actual use.", price: "3 sp" },
    { name: "Carved Stool", description: "A three-legged stool with simple knotwork carved into the seat. Sturdy enough for daily use.", price: "12 sp" },
    { name: "Practice Longsword (wood)", description: "A full-length wooden training sword. Balanced and smooth, no sharp edges. Common among parents buying for children or trainers.", price: "1 gp" },
    { name: "Practice Dagger (wood)", description: "A short wooden training blade. Good balance.", price: "4 sp" },
    { name: "Carved Quarterstaff", description: "A beautifully decorated walking staff with leaf and vine carvings down the length. Functions as a normal quarterstaff.", price: "3 gp" },
    { name: "Wind Chime (wooden spoons)", description: "Like the ones hanging at the booth — a bundle of carved spoons on a cord that clack pleasantly in a breeze.", price: "6 sp" },
    { name: "Carved Dice Set (4 dice)", description: "Four six-sided dice carved from dark hardwood with burnt-in numbers. Unusually smooth.", price: "2 gp" },
    { name: "Decorative Wall Panel", description: "A flat carved panel about 18 inches wide depicting a forest scene. Meant to hang on a wall.", price: "5 gp" },
  ],
};
