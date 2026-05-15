export const shipwreckTavern = {
  id: "shipwreck-tavern",
  name: "Shipwreck Tavern",
  tagline: "Drink Until You Dance",
  image: "/shipwreck-tavern.jpg",

  sceneDescription: `Stepping into the Shipwreck Tavern is a culture shock. From the serious streets outside to a tavern decorated like the interior of a pirate ship from an adventure novel — it stops you. The smell hits first: juicy roasted meat from the two fire pits where pigs turn slowly over open flames. Several round tables fill most of the floor, crowded and noisy. To your left, the bartender moves behind a long bar, pouring for patrons perched on stools, a wall of bottles behind her rising shelf by shelf to the ceiling. Music pulls your ears toward the back — a raised stage where three performers play lute, lyre, and hand drum for a crowd that is eating and drinking and not trying very hard to look like they're listening. Then a loud thunk, followed by a cheer, and you turn right: a hand axe is buried near the center of a target board, someone is pulling a knife from their belt, and a small crowd is losing their minds about all of it.`,

  staff: {
    name: "Tinya Bowsithe",
    role: "Runs the tavern. Garren Stoutmug owns it.",
    race: "Human (Female)",
    age: "25",
    appearance: `Long black hair, green eyes. Polite in the way that someone is polite when they've learned it keeps things from getting worse. She knows how to handle a drunk and how to not hear a compliment she doesn't want. She moves behind the bar like she's done it a thousand times, because she has.`,
  },

  menu: {
    nonAlcoholic: [
      {
        name: "Salted Citrus Water",
        cost: "2 SP",
        note: "Popular with sailors after long voyages.",
      },
      {
        name: "Honey Ginger Tea",
        cost: "3 SP",
        note: "Warm and soothing.",
      },
      {
        name: "Spiced Apple Cider",
        cost: "4 SP",
        note: "Served hot near the fire.",
      },
      {
        name: "Blackberry Lemon Tonic",
        cost: "3 SP",
        note: "Sweet, tart, and refreshing.",
      },
    ],
    ales: [
      {
        name: "Beacon Brown Ale",
        cost: "4 SP",
        note: "A smooth, nutty dark ale brewed locally in Beacon.",
      },
      {
        name: "White Bay Wheat",
        cost: "5 SP",
        note: "Light and slightly citrusy with a crisp finish.",
      },
      {
        name: "Fogwalker Stout",
        cost: "6 SP",
        note: "Heavy black stout with hints of coffee and smoke.",
      },
      {
        name: "Storm Sail Lager",
        cost: "4 SP",
        note: "Cold, clean, and easy drinking after a long day on the docks.",
      },
      {
        name: "Blackwater Porter",
        cost: "6 SP",
        note: "Rich porter with roasted barley and molasses sweetness.",
      },
    ],
    featured: {
      name: "Stoutmug Ale",
      cost: "8 SP per mug",
      source: "Brewed across the street at Braver's Gaze Brewery",
      note: "The house specialty. Brewed by the owner himself. It hits differently than anything else on the menu — ask Tinya and she'll just smile and pour.",
      mugPerk: "If you carry a Stoutmug Mug purchased from the brewery, your first drink is free.",
      effect: "A full mug allows any painful status effect to be ignored for 8 hours. The creature has disadvantage on all DEX, INT, and WIS checks for the duration. When attempting to sprint or run, make a DEX saving throw DC 12 or fall prone at the end of regular move distance.",
      dmNote: "The effect note is DM-only. Players who ask Tinya what it does will get: 'You'll feel better. Then you'll feel brave. Stop after two.'",
    },
  },

  tonight: [
    {
      name: "Live Music",
      description: "Three performers on the stage — lute, lyre, and hand drum. They play most of the night.",
    },
    {
      name: "Darts Tournament",
      description: "Entry is free. Rounds are elimination. Prize is a tab covered by the house for the night.",
    },
    {
      name: "Axe & Knife Throw Competition",
      description: "Targets are mounted on the right wall. Entry costs 2 SP. Three throws each. Closest total score wins the pot.",
    },
    {
      name: "Arm Wrestle Finals",
      description: "Bracket has been running all week. Tonight is the last round. The crowd has opinions.",
    },
  ],

  dmPrivate: {
    tinyaFears: `Tinya is aware of how Garren thinks — she's watched him cycle through distrust of nearly everyone around him. She does everything right, keeps the books clean, handles problems before they reach him, and still goes to bed some nights wondering if tomorrow is the day he decides she's the problem. She genuinely likes the job. The pay is good and the work suits her. The paranoia isn't hers — but she lives inside it.`,
    tinyaGoals: `She's heard Garren talk about expansion, usually in a "this will never happen" tone that she suspects is fear more than honesty. Tinya wants to be the person he finally trusts enough to grow with. She's been quietly proving herself for two years. She's not sure what the threshold is, but she hasn't stopped trying to reach it.`,
    garrenConnection: `Garren owns the Shipwreck Tavern and supplies all the ale from Braver's Gaze Brewery across the street. He spends most evenings here once the brewery closes — drinking, singing, losing card games he insists he's winning. The party may find him here if they visit in the evening. Tinya knows to leave him to it but also knows when to quietly water his drink.`,
    questThread: `Tinya and Garren are two halves of the same unresolved problem. Garren needs someone he trusts. Tinya is already that person but he hasn't said it yet. If the party earns Garren's confidence at the brewery AND builds rapport with Tinya here, there's a natural thread: helping one of them make the case to the other, or simply being present when Garren finally works up to saying what he should have said a year ago.`,
  },
};
