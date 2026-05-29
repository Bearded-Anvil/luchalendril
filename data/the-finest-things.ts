export const theFinestThings = {
  id: "the-finest-things",
  name: "The Finest Things",
  image: "/the-finest-things.jpg",
  tagline: "Commissions. Customized. No rushing.",
  path: "/beacon/garden-district/hydrangea-way/the-finest-things",

  sceneDescription: `The inside of The Finest Things seems a little sparse at first. There is no clutter. What lines the shelves and counters are common items — gloves, boots, capes, cloaks, belts, hats, canes — in a broad and well-arranged selection that wouldn't look out of place in any quality outfitter in the city.

What is out of place is the lighting. There are no lanterns in this room. No candles. In the corner stands a quarterstaff, its top glowing with a steady, bright light. Above the counter, a hat hangs from a wall hook, emitting its own warm glow. On the far wall, a vase holds an arrangement of flowers, each little bloom backlit from within — a warm, even light that fills the room from three different directions without a single flame.

The floor is a fine dark wood, long slats running the length of the room. The walls are a soft blue that fades gradually to purple as they rise toward the ceiling.

Behind the counter, a young halfling sits in a tall chair with her brown-booted feet propped on the service counter, crossed at the ankles. Her arms are folded. Her white hair is in pigtails. A pair of goggles rests on her forehead above her bright eyes. She is watching you with a small, easy smile, the way someone watches a thing they already understand.

On the wall behind her, a framed sign reads:

All jobs are commissions customized for the individual.
Any attempts to rush my work will add 24 hours to the wait time.`,

  signs: [
    `"All jobs are commissions customized for the individual. Any attempts to rush my work will add 24 hours to the wait time."`,
  ],

  owner: {
    name: "Priscilla Pruneleaf",
    race: "Halfling (Female)",
    appearance: `Young, chipper, and pretty in a way that doesn't quite fit the Garden District. White hair worn in pigtails. A bright blue sleeveless shirt and a knee-length black skirt. Brown leather boots that she is almost always wearing on top of the counter, crossed at the ankles. A pair of goggles rests habitually on her forehead above her eyes. No one has ever seen her use them.`,
    personality: `Priscilla doesn't perform warmth or professionalism — she just sits there looking pleased with herself and lets her work do the explaining. The district accepted her for her talent rather than her money, which she finds genuinely funny. She will quote you a price and a commission time and not adjust either one. The sign on the wall is not a joke.`,
    dmPrivate: {
      note: `The goggles are not decorative. Priscilla can see enchantments on items just by putting them on. She doesn't tell customers this because it would make every interaction a negotiation about appraisals. If a player brings in something she reacts to with more than passing interest, that's why.`,
      questHook: `If a player brings her an item with an enchantment she doesn't recognize — something old, something foreign, something that shouldn't exist — she will ask where they got it. Carefully. She won't say why. But she won't forget it either.`,
    },
  },

  dmNote: `This is a commission shop. Priscilla does not sell finished enchanted items off the shelf. She enchants items to order — either ones she stocks in their base form or ones the player provides. Commission times and prices are fixed. Any attempt to negotiate the timeline will add 24 hours to the wait. She means it.`,

  services: [
    {
      category: "Boots",
      items: [
        {
          name: "Silent Steps",
          price: "1,500 gp",
          commission: null,
          description: "Magically muffled. They make almost no noise — even dropped on the floor.",
          effect: "+2 bonus to all Stealth rolls.",
        },
        {
          name: "Leaps and Lunges",
          price: "1,000 gp",
          commission: null,
          description: "Standard in appearance. Unremarkable until the wearer jumps.",
          effect: "Twice per long rest, the wearer can double their jump distance — both height and length.",
        },
        {
          name: "Suregrip Soles",
          price: "1,200 gp",
          commission: null,
          description: "Enhanced to find purchase on any surface.",
          effect: "Advantage on any ability check to prevent slipping or falling — grease, ice, wet stone, etc.",
        },
        {
          name: "Hastestep Boots",
          price: "2,500 gp",
          commission: null,
          description: "Look ordinary. They are not.",
          effect: "Twice per long rest, the wearer can double their movement speed without using their Dash action. If they use Dash while under this effect, their movement triples — it does not double twice.",
        },
      ],
    },
    {
      category: "Gloves",
      items: [
        {
          name: "Gloves of Sticky Fingers",
          price: "1,800 gp",
          commission: "2 weeks",
          description: "Look entirely ordinary. Feel entirely ordinary.",
          effect: "+2 to all checks for picking pockets or stealing.",
        },
        {
          name: "Strongfist Fingerless",
          price: "2,500 gp",
          commission: "4 weeks",
          description: "Fingerless leather gloves, reinforced at the knuckle.",
          effect: "+1 STR as long as the wearer has them on.",
        },
        {
          name: "Light Tip Fingers",
          price: "750 gp",
          commission: "3 days",
          description: "A set of two glove fingers — not full gloves. They slide over a finger on each hand. Quite possibly the missing fingers from the Strongfist Fingerless.",
          effect: "When pointed, each finger shines a focused beam of light up to 30 feet. The circle it forms is 3 feet wide. The wearer must aim to see outside that 3-foot area.",
        },
        {
          name: "Gloves of Flinging Fury",
          price: "1,500 gp",
          commission: "1 week",
          description: "Reinforced at the palm and fingers. Balanced for the throw.",
          effect: "+1 to hit and +1 to damage with any thrown weapon.",
        },
      ],
    },
    {
      category: "Capes",
      items: [
        {
          name: "Dizzying Flourish",
          price: "1,800 gp",
          commission: "3 weeks",
          description: "When the wearer spins on their heel, the cape forms a blurring image of them in that spot for a brief moment — disorienting to anyone watching close.",
          effect: "Three times per long rest, the wearer can use this cape to leave combat without provoking attacks of opportunity.",
        },
        {
          name: "Untrusting Drape",
          price: "3,000 gp",
          commission: "2 weeks",
          description: "Sits close to the shoulders. Nothing about it invites trust from anyone watching.",
          effect: "The wearer gains resistance to any attack that deals sneak attack extra damage, and to any attack made in a surprise round.",
        },
      ],
    },
    {
      category: "Cloaks",
      items: [
        {
          name: "Cloak of Invisibility",
          price: "4,500 gp",
          commission: "3 weeks",
          description: "A full cloak. Well made. Ordinary in every visible way.",
          effect: "Three times per long rest, the wearer can turn invisible. Each use lasts up to 10 minutes.",
        },
        {
          name: "Cloak of Disguises",
          price: "1,800 gp",
          commission: "3 weeks",
          description: "Changes the outward appearance of the wearer — not the actual shape beneath it.",
          effect: "Twice per day, the wearer can alter their visible appearance. Each use lasts 1 hour. The illusion does not change the wearer's actual form and will not hold up to close investigation or hard scrutiny.",
        },
        {
          name: "Cloak of the Turned Arrow",
          price: "3,000 gp",
          commission: "4 weeks",
          description: "A heavy cloak with an unusual drape to the back.",
          effect: "+2 AC against all ranged attacks. This does not apply to ranged spells, but does apply to magical arrows, bolts, and similar projectiles.",
        },
      ],
    },
    {
      category: "Hats",
      items: [
        {
          name: "Hat of the Scholar",
          price: "3,000 gp",
          commission: "4 weeks",
          description: "A structured hat. Dignified. The kind that suggests the wearer knows things.",
          effect: "+2 INT while the hat is being worn.",
        },
        {
          name: "Hat of the Closed Mind",
          price: "3,500 gp",
          commission: "3 weeks",
          description: "Looks like any other well-made hat. Feels like certainty.",
          effect: "Advantage on all WIS saving throws.",
        },
      ],
    },
    {
      category: "Accessories",
      items: [
        {
          name: "Glasses",
          price: "1,800 gp",
          commission: "2 weeks",
          description: "Clear lenses, simple frames. Nothing to suggest what they actually do.",
          effect: "The wearer can see through minor illusions within 30 feet of them — including disguises.",
        },
        {
          name: "Audible Earplugs",
          price: "2,000 gp",
          commission: "2 weeks",
          description: "Small enchanted earplugs. Used in the ear, not against it.",
          effect: "The wearer can clearly hear anyone they are looking at within 100 feet, regardless of ambient noise. When pressed against a wall no more than 2 feet thick, the wearer can hear whatever is inside as though the wall were not there — up to 25 feet into the room.",
        },
      ],
    },
    {
      category: "Canes",
      items: [
        {
          name: "Jolt Stick",
          price: "2,200 gp",
          commission: "3 weeks",
          description: "A sturdy cane with a grip wound in dark leather. It does not look dangerous.",
          effect: "A creature hit with this cane takes 1d10 + 4 shock damage and must make a CON saving throw (DC 15). On a failure, they lose either their action or their bonus action on their next turn — their choice.",
        },
        {
          name: "Cane of Contents",
          price: "2,000 gp",
          commission: "2 weeks",
          description: "Touch the tip to any closed container — a box, chest, drawer, cabinet — and make a WIS check.",
          effect: "DC 14: the owner learns the contents of the container. If the container is magical in any way, the DC is raised to 16.",
        },
      ],
    },
  ],
};
