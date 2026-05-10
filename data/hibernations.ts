export const hibernations = {
  id: "hibernations",
  name: "Hibernations",
  tagline: "Inn & Eatery",
  city: "Beacon",
  image: "/hibernations.jpg",

  sceneDescription: `As you enter the inn, the atmosphere hits you first — bright and cheery. Patrons have meals at four long tables, two rows of two. The tables are like picnic tables, bench seating fixed to the wooden tops. No cloth or runners, just boards nailed to a frame. Across the room a counter runs the width of the back wall, where a tan-skinned woman wipes glass mugs dry and lines them up in a row. Behind her, shelves hold bottles of all shapes, sizes, and colors. On either side of the counter are single doors leading elsewhere. To the left, a window in the outer wall looks out into an alley. To the right of the counter, a low stage — a single step, elevated about eight inches — holds a few stools for performers. Nobody is playing right now. The room is well lit by a strange chandelier, roughly twelve inches tall and six feet wide, built like an oversized glass-pane lantern. Frosted panes flicker with something burning inside. More lanterns hang from the walls and support beams throughout.`,

  owner: {
    name: "Breonn Deshra",
    race: "Human",
    age: "Early 30s",
    appearance: `Very tanned skin — from her race, not the sun. Shapely and attractive, though her bearing doesn't invite any comment on it. Too many years behind a bar has made her nearly immune to charm — magical charm being the only kind that still lands. Black hair, probably long, tied up in a loose bun at the back of her head. She moves efficiently and wastes very little.`,
    quirk: `Breonn is impatient. She knows people, she has information, she has good product and a clean inn. But anything beyond paying her for services and moving along tends to register as an inconvenience.`,
  },

  staff: [
    {
      name: "Gund the Slower",
      role: "General Labor",
      description: `Nearly seven feet tall and broad to match. Slow of mind and almost never speaks. He listens, nods, carries tubs of water, delivers meals to rooms, and — when Breonn asks — knocks heads together and throws people into the street. Gentle and kind otherwise. He looks at Breonn something like the way a child looks at a mother, though there's no relation between them.`,
    },
  ],

  dmPrivate: {
    goals: `Breonn is annoyed that two other inns operate in Beacon. Her own inn isn't nearly large enough to handle the city's guests — but that's not the point. She hates the split. She plots, steadily and quietly, on ways to bring the other two inns under the Hibernations name and to prevent any new ones from opening.`,
    questHook: {
      title: "Under One Name",
      description: `Anyone who makes real headway in helping Breonn gain ownership over Beacon's other two inns will have her full attention. That means free room and board, at minimum. It may also mean access to information she has gathered over years of listening to people talk too freely after a drink.`,
      dmNote: `Breonn can serve as an in-city information source. She doesn't know everything — but a dice roll could determine what she has on a given topic. The roll gets easier the more local the question. Goings-on inside Beacon walls are her strongest ground.`,
    },
  },

  food: [
    {
      name: "Hot Meal",
      description: "Whatever is being cooked that day. Good and filling.",
      price: "5 sp",
    },
    {
      name: "Ale",
      description: "Rotating selection. Whatever is on the board behind the counter.",
      price: "1 gp",
    },
    {
      name: "Higher End Ale",
      description: "A bottle from the upper shelves. Strong enough that travelers tend to stagger and speak freely after one.",
      price: "10 gp",
    },
  ],

  rooms: [
    {
      name: "Single Bed Room",
      description: "A fireplace, a bed, a round table, a coat rack, and pegs for bags. Comfortable and no-nonsense.",
      price: "5 sp / night",
      weekly: "3 gp / week",
      floors: "3 rooms on the ground floor. 5 rooms on the upper floor.",
    },
    {
      name: "Double Bed Room",
      description: "Same as the single — fireplace, two beds, table, coat rack, pegs. Fits a party without complaint.",
      price: "8 sp / night",
      weekly: "5 gp / week",
      floors: "3 rooms on the ground floor. 5 rooms on the upper floor.",
    },
    {
      name: "The Royal Treatment",
      description: "A single or double room with extras. A hot bath is brought to the room. A bottle of the 1 gp ale is included. Meals can be sent up on request. The fireplace is lit on request.",
      price: "2 gp / night",
      weekly: "No weekly rate.",
      floors: "Available in any qualifying room when requested.",
      note: "Additional ale bottles added at the standard price. The bath is the draw — everything else is already available in any room.",
    },
  ],
};
