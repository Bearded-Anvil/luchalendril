export const roundaboutWay = {
  id: "roundabout-way",
  name: "Roundabout Way",
  tagline: "Good Food. Good Wine. Good Company. That's Life.",
  image: "/roundabout-way.jpg",

  sceneDescription: `A red carpet runs from the entrance all the way to the bar at the back — and for a moment, that's the first thing you notice, because restaurants don't usually do that. Then you notice everything else. Ten round tables on each side of the carpet, white cloth nearly touching the dark, polished stone floor, fine silverware on folded tan napkins, eight chairs to a table, and in the center of each — a silver pot of wildflowers from the median outside, the kind of flowers you walked past to get here, arranged like they were always meant for this room.

The walls are bare stone, dark gray and cold-looking, with dark wood paneling climbing the first three feet. The ceiling is painted black and disappears entirely above the chandeliers, each one heavy with candles and fitted with reflective glass above to throw the light down where it belongs — on the tables, on the silver, on the people. In the far right corner, a low stage lined with deep red drapes tied with gold cord holds three musicians: cello, violin, and harp. In the far left corner is the waiters' station, door to the kitchen just behind it. And at the very end of the carpet, the bar — ten feet wide, twelve shelves of bottles stacked to the ceiling in every shape and size. A few of them glow faintly, as if something inside is lit.

Along the left wall, between the waiters' station and the nearest dining table, there is a table without chairs. No one is seated at it, and you get the impression no one will be. The tabletop is covered — not cluttered, but covered with intention — in letters, some sealed and some open, folded drawings, dried wildflowers pressed flat, small carved tokens, a child's toy, a folded scarf. There is no sign explaining it. No placard. It simply exists, tended and purposeful, and when Myrtellion notices you looking at it, his expression goes somewhere quieter for a moment before he smiles again.`,

  emptyTable: {
    playerDescription: `A table along the left wall sits without chairs. It cannot be reserved — Myrtellion will say so simply and without further explanation if asked. The top is layered with objects left by others: folded letters, pressed flowers, a carved wooden bird, a child's drawing of a family, a ring on a ribbon, a boot heel. None of it is labeled. All of it has been left deliberately.`,
    dmNote: `The Empty Table is not a memorial. It is a place of hope — for those who are missing, not confirmed dead. Sailors who didn't come back. Adventurers who never returned. People who simply vanished. Anyone may add to it. Nothing is ever removed. The Danderbills keep it clean and dust-free. That's all they do.`,
    questHook: `Somewhere in a future session, the party may encounter someone who woke up on the beach outside Beacon with no memory of who they are. When and if the party thinks to check the Empty Table, let them look. Somewhere among the letters and drawings is a clue — a name, a sketch that resembles the person, a letter addressed to someone who sounds like them. If the party makes the connection and investigates, there is a family somewhere in Beacon — or beyond — who has been leaving things on this table for years. The reunion, if it happens, is the DM's to shape. The table just holds the door open.`,
    dmGuidanceNote: `Don't force this. Don't hint at it. Let the party notice the table on their own — or not. If they ask about it, Myrtellion will explain it quietly and warmly. He doesn't know most of the stories behind the objects. He just knows the table matters.`,
  },

  owners: {
    myrtellion: {
      name: "Myrtellion Danderbill",
      race: "Halfling (Male)",
      appearance: `Chubby and cheerful, with red cheeks, a round little nose, and a head that's given up most of its hair without complaint. He wears a vest and a loose shirt and looks exactly like someone who has spent his whole life happy to be near good food. He doesn't cook much anymore — mostly he moves between tables, hands clasped, listening to people enjoy themselves.`,
    },
    ursillia: {
      name: "Ursillia Danderbill",
      race: "Halfling (Female)",
      appearance: `Graying brown hair tucked under a bonnet, modest dress, modest manner, and the quiet pride of someone who built something real. She and Myrtellion work the floor together most evenings, accepting compliments and genuine suggestions with equal grace.`,
    },
    sharedNote: `The Danderbills built Roundabout Way together. Their vision: a dining experience that feels expensive without being cruel about it. Middle class coin, upper class atmosphere. They love this place the way people love something they made with their hands.`,
  },

  staff: [
    {
      name: "Barta Marthell",
      role: "Waitress",
      race: "Human (Female)",
      age: "Early 20s",
      description: `Long brown hair in a single braid down her back. Pretty enough that she gets excellent tips regardless of whether the order came out right, which it sometimes doesn't. Her personality makes up the difference — warm, quick to laugh, and genuinely happy to be here. The Danderbills are fond of her and have no intention of letting her go.`,
    },
    {
      name: "Doza Hugman",
      role: "Waiter",
      race: "Gnome (Male)",
      age: "40s",
      description: `Short black hair, thin build, handsome in the way that gnomes sometimes manage when they're not trying. He's a flirt — reflexively, harmlessly, at everyone — and he trips over things more often than a waiter probably should. The ladies at the tables find him entertaining and then tip him anyway. Doza believes, without a doubt, that they are all in love with him.`,
    },
  ],

  lighthouseVoucher: `Guests staying in the Suite at the Lighthouse Inn receive a voucher for one free meal at Roundabout Way. Barta or Doza will honor it without making a production of it.`,

  menu: {
    note: `A full meal — first course, main, and dessert — counts toward removing one level of exhaustion during a subsequent long rest. Wine and ale are available at the bar and by the table.`,
    firstCourse: [
      { name: "White Bay Chowder", cost: "4 SP", description: "Creamy fish soup with bread on the side. Made fresh daily." },
      { name: "Warmloaf with Herb Butter", cost: "2 SP", description: "House-baked, served warm from the kitchen." },
      { name: "Garden Salad with Herb Oil", cost: "3 SP", description: "Fresh greens, edible wildflowers, light dressing." },
      { name: "Smoked Dock Fish Plate", cost: "6 SP", description: "Thinly sliced, served with pickled vegetables and small rye toasts." },
    ],
    mainCourse: [
      { name: "Roasted Half Chicken", cost: "8 SP", description: "Herb-crusted, root vegetables, pan gravy." },
      { name: "Pan-Seared Bay Fish", cost: "10 SP", description: "Catch of the day, lemon butter, seasonal greens." },
      { name: "Braised Lamb Shank", cost: "14 SP", description: "Slow cooked, root mash, dark reduction." },
      { name: "Beef Medallions", cost: "18 SP", description: "Two cuts, mushroom cream, dressed greens. The house's finest plate." },
      { name: "Mushroom & Grain Bowl", cost: "6 SP", description: "Hearty and filling. No meat." },
    ],
    dessert: [
      { name: "Sweet Cream Tart", cost: "3 SP", description: "Flaky shell, vanilla cream, berry." },
      { name: "Honey Spice Cake", cost: "4 SP", description: "Served warm, dusted, with a spoonful of cream." },
      { name: "Poached Pear", cost: "3 SP", description: "In red wine reduction, soft cheese crumble." },
    ],
    wines: [
      { name: "House Red", cost: "3 SP / glass — 12 SP / bottle", description: "Earthy, medium body, reliable. Poured generously." },
      { name: "House White", cost: "3 SP / glass — 12 SP / bottle", description: "Light, slightly floral. Goes well with the fish." },
      { name: "Beacon Bay Blush", cost: "4 SP / glass — 15 SP / bottle", description: "A semi-sweet rosé-style local wine. Popular choice." },
      { name: "Cordun Estate Reserve", cost: "8 SP / glass — 2 GP / bottle", description: "Dry, elegant, and unmistakably refined. From the Cordun family vineyard outside Beacon — the same bottles Xavien Cordun pours at her counter across the square. The bar keeps a modest stock." },
    ],
    otherDrinks: [
      { name: "Stoutmug Ale", cost: "8 SP", description: "On tap from Braver's Gaze Brewery across town. If you carry a Stoutmug Mug, your first is free." },
      { name: "Sparkling Cider", cost: "3 SP", description: "Light, cold, and a fine alternative to wine." },
      { name: "Warm Spiced Tea", cost: "2 SP", description: "A house blend. Good before or after a meal." },
      { name: "Fresh Water", cost: "1 SP", description: "Chilled. Always available." },
    ],
    drinkingNote: `After three glasses of wine (or two glasses of Cordun Estate Reserve), have the creature make a CON saving throw, DC 10. On a failure, they are mildly drunk for the next hour: disadvantage on DEX checks, but advantage on CHA checks. Each additional glass resets the save at the same DC.`,
  },

  dmPrivate: {
    concept: `Roundabout Way exists to be the nicest restaurant the party can afford. It is not trying to be exclusive — the Danderbills specifically built it for people who wouldn't normally sit at a table like this. That's the whole point. Anyone who walks in gets the same red carpet, the same silverware, the same wildflowers. Price keeps it middle-range but the experience is genuinely good.`,
    staffNotes: `Barta and Doza are both memorable and imperfect in ways that make them real. Barta's tips aren't purely earned; Doza's confidence is both unfounded and completely harmless. Play them as likeable chaos in a restaurant that otherwise runs with quiet elegance. The Danderbills are aware of both staff members' quirks and consider them charming assets.`,
    gardenDistrictTour: {
      setup: `Myrtellion lives in the Garden District — Beacon's wealthy enclave, protected not by the city watch but by the King's Guard, soldiers of the High King's army stationed specifically to keep the district's residents safe. Entry without invitation or authorization results in immediate detainment. Myrtellion doesn't mention where he lives unless he likes you. It isn't something he brags about.`,
      trigger: `On evenings when a table has genuinely caught his attention — the party has done something memorable, behaved with unusual decency, made him laugh, or simply seemed like people worth knowing — Myrtellion will linger after dessert. He'll refill the wine himself. Eventually, without much preamble, he'll say something like: "You seem like people who'd appreciate something most people never get to see." He won't explain further until they agree.`,
      whatTheyGet: `The tour happens on foot, in the evening, and gives the party legitimate access to the Garden District under Myrtellion's residency rights. During the tour, the party can observe: the layout of the district and its streets, the exterior of establishments that don't advertise outside the district, King's Guard patrol patterns and rotation schedules, NPCs who reside or operate exclusively within the Garden District, and the general feel of how wealth operates in Beacon when no one is watching.`,
      dmUsage: `Use this as a setup tool. If a future quest requires the party to operate inside the Garden District — retrieve something, meet someone, move through undetected — this tour gives them the map in their heads, the guard timing in their memory, and a legitimate reason to have been seen there once before. Myrtellion won't always extend the invitation. Use it when the party has earned it and when the timing serves the story.`,
      kingGuardNote: `The King's Guard are not city guards. They report to the High King, not to Beacon's local government. They are better trained, better armed, and less negotiable. Make this clear through description during the tour — the party should feel the difference without being told outright.`,
    },
  },
};
