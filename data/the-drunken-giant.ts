export const theDrunkenGiant = {
  id: "the-drunken-giant",
  name: "The Drunken Giant",
  image: "/the-drunken-giant.jpg",
  tagline: "Two Doors. Two Experiences. One Unforgettable Evening.",
  path: "/beacon/garden-district/rose-vine-view/the-drunken-giant",

  sceneDescription: `The building announces itself before you reach the door. Two stories of stone and dark timber, with a carved wooden sign above the entrance — a giant's face worked into the frame, broad and jovial, the lettering below it reading: The Drunken Giant.

At street level, two doors stand side by side beneath a covered entrance. Above the left door, a smaller sign reads Tavern. Above the right, Fine Dining. Between them, a sandwich board in careful script:

Two Doors. Two Experiences. One Unforgettable Evening.

On the floor mat below: Welcome to The Drunken Giant.

A man stands just inside the entrance, positioned precisely between the two doors. He is nearly eight feet tall and dressed in formal black — coat, trousers, a leather hat pulled low. His maroon skin and the sheer fact of his size make him impossible to miss. And yet he is not what you expect. He holds himself with a kind of careful grace, watching your approach with a calm, attentive expression. When you near, he inclines his head — not a bow, exactly. An acknowledgment.

"Good evening," he says, his voice low and deliberate. "Which side tonight?"

Behind the left door: noise, warmth, the smell of roasting meat. A pig turns slowly on a spit over an open fire in full view of the guests. Round wooden tables fill the room, every seat taken. A dancing girl spins on a small stage, a fiddler beside her playing something quick and bright. The bar runs along the far wall, a bartender working steadily behind it.

Behind the right door: candlelight, the soft murmur of conversation, black tablecloths to the floor. Servers in fine black attire move between the tables with unhurried precision, cloth napkins over one arm. At the back of the room, behind tall glass doors with ornate handles, a massive fireplace burns. A spiral staircase in the corner leads to the second floor.`,

  signs: [
    `"The Drunken Giant"`,
    `"Tavern" — left door`,
    `"Fine Dining" — right door`,
    `"Two Doors. Two Experiences. One Unforgettable Evening."`,
    `"Welcome to The Drunken Giant" — floor mat`,
  ],

  owner: {
    name: "Andora Feggiz",
    race: "Half-Giant (Male)",
    appearance: `Nearly eight feet tall and solid muscle, with maroon skin and a presence that fills any room without effort. He dresses in black formal attire and wears a leather gambler's hat pulled low. His size and the raw power he exudes are only partially softened by his grace and his manners — a courteous half-giant is a rare thing, and the Garden District knows it.`,
    personality: `Andora speaks carefully and moves with deliberate grace. He is attentive and hospitable in the way that suggests genuine investment, though the investment is, in truth, in the position rather than the people. He greets every guest with a measured incline of the head and remembers details about returning visitors.`,
    dmPrivate: {
      theCirclet: `Andora always wears his leather hat. Beneath it is a circlet of enhanced intelligence — the only reason he is able to run this establishment, entertain the clientele, and maintain the reputation he has built. Without it, the refinement drops away entirely. He would feel undisguised disdain for the smaller humanoids around him and lack the patience to hide it.`,
      fears: `Andora does not fear much. But he does sometimes concern himself with discovery — that someone will work out what the hat is hiding, or catch him on an evening when something has gone wrong with it. He has grown comfortable here. He does not wish to return to the wilds.`,
      goals: `He is content. He has lived rough and prefers this. His only goal is to keep what he has — his position, his reputation, and his place in Beacon.`,
      hookNote: `If a player manages to knock the hat off, or encounters Andora without it for any reason, the shift in manner is immediate and unmistakable. He becomes blunt, contemptuous, and barely functional as a host. He will retrieve the hat quickly and claim nothing happened. A player paying attention will know something did.`,
    },
  },

  upperFloor: {
    description: `The spiral staircase on the fine dining side leads to the second floor, where private rooms are available by invitation only. No payment is accepted at the establishment — all arrangements must be made in advance through a Garden District resident. There is no clerk and no front desk. If you have to ask, you were not invited.`,
  },

  rooftopDining: {
    description: `Accessible via a set of wooden stairs from the Rooftop Garden Walk, the rooftop of The Drunken Giant holds a small number of dining tables available by reservation only. The view looks out over the outer wall of Beacon and across The Valpin — the rolling green hills below and the mountains beyond. The Rooftop Garden Walk continues past the diners and down the opposite side of the building, through a short hallway with a small bar, and out onto Rose Vine View.`,
  },

  tavernMenu: {
    label: "Tavern",
    note: "The tavern side is a deliberate exercise in atmosphere — a wealthy person's version of a rough night at the inn. The food is honest and well-made. The presentation is not.",
    food: [
      {
        name: "The Spit Plate",
        price: "12 sp",
        description: "Thick slices carved right from the pig on the fire, served with a heel of bread and a pot of coarse mustard.",
      },
      {
        name: "Barley Stew",
        price: "6 sp",
        description: "Slow-cooked with root vegetables and a knuckle bone for depth. Served with rye bread.",
      },
      {
        name: "Smoked Sausage and Pickled Cabbage",
        price: "8 sp",
        description: "Two fat links over a bed of sharp pickled cabbage. Simple. Filling.",
      },
      {
        name: "Beef Hand Pie",
        price: "7 sp",
        description: "Short-crust pastry stuffed with beef, onion, and thick gravy. Served warm.",
      },
      {
        name: "Pickled Egg Plate",
        price: "3 sp",
        description: "Six eggs, salt, and a smear of mustard on the side.",
      },
      {
        name: "Rye Bread with Dripping",
        price: "2 sp",
        description: "Thick slices, still warm, with a pot of rendered fat for spreading.",
      },
    ],
    drinks: [
      {
        name: "House Ale",
        price: "4 sp",
        description: "Dark, slightly bitter, brewed on premise. Served in a proper tankard.",
      },
      {
        name: "Spiced Mead",
        price: "6 sp",
        description: "Sweet with clove and cinnamon. The most popular drink on this side.",
      },
      {
        name: "Mudroot Cider",
        price: "5 sp",
        description: "Tart and slightly fermented, served cool.",
      },
      {
        name: "Black Stout",
        price: "5 sp",
        description: "Thick and dark, almost a meal on its own.",
      },
    ],
  },

  finingDiningMenu: {
    label: "Fine Dining",
    note: "The fine dining side is what the Garden District comes here for. Service is unhurried. The fireplace at the back burns behind glass — it is not for show, but most guests assume it is.",
    food: [
      {
        name: "Lobster Bisque",
        price: "14 gp",
        description: "Rich cream broth with a drizzle of herb oil. Served with toasted bread on the side.",
      },
      {
        name: "Roasted Bone Marrow",
        price: "11 gp",
        description: "Split bone served on a board with pickled shallots and toasted bread points.",
      },
      {
        name: "Seared Duck Breast",
        price: "22 gp",
        description: "With a dark plum reduction, roasted turnips, and braised bitter greens.",
      },
      {
        name: "Rack of Lamb",
        price: "28 gp",
        description: "Herb-crusted, served with rosemary jus. The most ordered dish on this side.",
      },
      {
        name: "Aged Cheese Selection",
        price: "9 gp",
        description: "Three cuts chosen by the kitchen, served with honeycomb, candied walnut, and thin crackers.",
      },
      {
        name: "Dark Chocolate Torte",
        price: "8 gp",
        description: "Served warm, with a pour of cold cream at the table.",
      },
    ],
    drinks: [
      {
        name: "Redcap Red",
        price: "4 gp / glass — 22 gp / bottle",
        description: "A bold red from the southern vineyards. Full-bodied, long finish.",
      },
      {
        name: "Pale Harvest White",
        price: "3 gp / glass — 18 gp / bottle",
        description: "Light and dry with a faint floral note. Pairs well with the bisque.",
      },
      {
        name: "House Brandy",
        price: "6 gp",
        description: "Aged in oak. Served in a wide glass with nothing added.",
      },
      {
        name: "Sparkling Spring Water",
        price: "1 gp",
        description: "Chilled, with a pressed citrus wedge on the rim.",
      },
    ],
  },

  connections: [
    {
      name: "Rose Vine View",
      description: "The street entrance. The main doors open onto Rose Vine View.",
      status: "coming-soon",
      path: null,
    },
    {
      name: "Rooftop Garden Walk",
      description: "The walk exits through this building. Walkers descend from the rooftop, pass through the flower hallway, and step out onto Rose Vine View. The walk cannot be entered from here.",
      status: "live",
      path: "/beacon/garden-district/rooftop-garden-walk",
    },
  ],
};
