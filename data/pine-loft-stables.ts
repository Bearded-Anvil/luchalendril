export const pineLoftStables = {
  id: "pine-loft-stables",
  name: "Pine Loft Stables",
  street: "Pine Loft North",
  city: "Pine Loft",
  image: "/pine-loft-stables.jpg",
  imageLarge: "/pine-loft-stables.jpg",

  sceneDescription: `The wide double doors stand open and the smell of hay, horses, and warm wood rolls out to meet you. The stable runs long and straight, stalls lining both sides from the entrance to the rear doors, lanterns mounted between each one casting the whole place in amber light. Several horses lean their heads over stall gates, watching you without much concern. At the far end, a young man in a plain work shirt moves quietly beside a gray mare, brushing her down without rushing. Two painted boards flank the entrance — a Stable Rules sign on the left, its four rules carved neat and straight, and a Boarding Rates board on the right listing prices by the day or by the week. A saddle rack and tack stand just inside the left door, a few bridles and leads hanging in order. The place is well kept. The floors are swept clean and the stalls look tended. The young man notices you, sets down his brush, and walks over. He's maybe eighteen, lean from real work, and he meets you with a nod rather than a greeting — the manner of someone who's comfortable around animals and a little quieter around people.`,

  owner: {
    name: "Bennen Taylor",
    race: "Human",
    age: "18",
    appearance: `Lean and unhurried, with the kind of quiet confidence that comes from knowing what he's doing. Plain work clothes — nothing fancy, nothing wasted. He keeps his eyes level and his hands busy. Friendly in a low-key way, more comfortable with horses than with conversation, but not unfriendly. He manages the stables on behalf of Pine Loft and takes the job seriously.`,
  },

  stableRules: [
    "Treat every horse with care.",
    "Keep stalls clean.",
    "No loud noises.",
    "Respect others and their mounts.",
  ],

  dmPrivate: {
    personality: `Bennen is reliable, observant, and not easily rattled. He's been around enough travelers to read a room — or a stable — quickly. He doesn't volunteer information but he notices things. If a horse comes in lame, he'll say so. If someone's asking questions about other guests' mounts, he'll remember that later.`,
    desires: `Bennen wants to run the best stables on the southern road. He takes pride in the fact that no horse has ever gone missing or gone lame under his watch. He'd like to expand the stable someday — maybe buy it from the town and run it himself.`,
    fears: `Pine Loft is growing and Bennen worries that the town council will bring in someone older or more "qualified" to run the stables as they get busier. He's never been told this will happen, but he thinks about it.`,
    questHooks: [
      {
        title: "The Nervous Horse",
        description: `One of the boarded horses — a traveler's mount left for the week — has been agitated for two days. Bennen can't find anything wrong with it physically. He wonders if something spooked it, or if someone has been in the stable at night who shouldn't be.`,
      },
      {
        title: "Bennen Knows the Road",
        description: `Bennen hears things from travelers passing through. He's not a gossip, but if the party earns a little trust, he might mention someone who rode through three nights ago in a hurry, or a rider who asked strange questions about the road north. He doesn't know what it means. He just knows what he saw.`,
      },
    ],
    secretItems: [
      {
        name: "After-Hours Access",
        description: `The stables are technically closed after dark, but Bennen lives in the small room at the back. For the right reason — or the right coin — he can be woken up and will see to a horse or open the gates without making it official.`,
        price: "5 sp",
        note: `He won't do it for anyone who gives him a bad feeling. He's young but he's not naive.`,
      },
    ],
  },

  services: [
    {
      name: "Horse Boarding — Day Rate",
      description: "Full stall, feed, water, and basic grooming. Rider may sleep in the stable loft at no extra charge.",
      price: "2 sp / day",
    },
    {
      name: "Horse Boarding — Week Rate",
      description: "Same full care. Weekly rate saves a traveler two days' cost over daily pricing.",
      price: "1 gp / week",
    },
    {
      name: "Feed and Water Only",
      description: "For a horse whose owner is staying nearby and handling their own grooming.",
      price: "5 cp / day",
    },
    {
      name: "Full Grooming",
      description: "Brushing, hoof cleaning, mane and tail combing. Bennen does good work.",
      price: "3 cp",
    },
    {
      name: "Tack Repair (Basic)",
      description: "Stitching on straps, buckle replacement, cleaning. Bennen handles minor repairs himself.",
      price: "5–15 cp",
    },
    {
      name: "Horse for Hire — Day Rate",
      description: "Pine Loft keeps two town horses available for short-term hire. Suitable for local travel — not war horses.",
      price: "5 sp / day",
    },
    {
      name: "Horse for Hire — Week Rate",
      description: "Same town horses, extended hire. Deposit required — returned when the horse comes back in good shape.",
      price: "2 gp / week",
    },
  ],
};
