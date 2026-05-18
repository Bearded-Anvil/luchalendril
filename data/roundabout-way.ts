export const roundaboutWay = {
  id: "roundabout-way",
  name: "Roundabout Way",
  tagline: "Good Food. Good Wine. Good Company. That's Life.",
  image: "/roundabout-way.jpg",

  sceneDescription: `A red carpet runs from the entrance all the way to the bar at the back — and for a moment, that's the first thing you notice, because restaurants don't usually do that. Then you notice everything else. Ten round tables on each side of the carpet, white cloth nearly touching the dark, polished stone floor, fine silverware on folded tan napkins, eight chairs to a table, and in the center of each — a silver pot of wildflowers from the median outside, the kind of flowers you walked past to get here, arranged like they were always meant for this room.

The walls are bare stone, dark gray and cold-looking, with dark wood paneling climbing the first three feet. The ceiling is painted black and disappears entirely above the chandeliers, each one heavy with candles and fitted with reflective glass above to throw the light down where it belongs — on the tables, on the silver, on the people. In the far right corner, a low stage lined with deep red drapes tied with gold cord holds three musicians: cello, violin, and harp. In the far left corner is the waiters' station, door to the kitchen just behind it. And at the very end of the carpet, the bar — ten feet wide, twelve shelves of bottles stacked to the ceiling in every shape and size. A few of them glow faintly, as if something inside is lit.`,

  owners: {
    headline: "Owners",
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

  // Menu and story hooks to be added
  menu: null,
  storyHooks: null,

  dmPrivate: {
    concept: `Roundabout Way exists to be the nicest restaurant the party can afford. It is not trying to be exclusive — the Danderbills specifically built it for people who wouldn't normally sit at a table like this. That's the whole point. Anyone who walks in gets the same red carpet, the same silverware, the same wildflowers. Price keeps it middle-range but the experience is genuinely good.`,
    staffNotes: `Barta and Doza are both memorable and imperfect in ways that make them real. Barta's tips aren't purely earned; Doza's confidence is both unfounded and completely harmless. Play them as likeable chaos in a restaurant that otherwise runs with quiet elegance. The Danderbills are aware of both staff members' quirks and consider them charming assets.`,
    // Story hooks to be added
  },
};
