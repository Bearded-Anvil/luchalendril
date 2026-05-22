export const finesseForSuccess = {
  id: "finesse-for-success",
  name: "Finesse For Success",
  image: "/finesse-for-success.jpg",
  tagline: "Precision. Elegance. Victory.",
  path: "/beacon/garden-district/hydrangea-way/finesse-for-success",

  sceneDescription: `Finesse For Success is not a large store, and it doesn't need to be. Looking around, it is immediately obvious that the owner has strong opinions about what kind of weapons belong here.

On the left wall, a long display case holds three rapiers mounted vertically — handle and hilt at the top, blade pointing straight down — each one presented like something worth standing in front of for a while. The basket hilts catch the chandelier light from above.

On the right wall, several suits of leather armor hang from mannequins in muted colors. Beside them, mounted separately, is a single black mask — the kind that slips over the top of the head, ties in the back, and pulls down to cover the face to the nose, with eye holes cut cleanly into the front.

At the back of the store, a practice mat covers the floor. Three target dummies stand in a loose line. Training rapiers lean in a rack beside padded practice suits. A sign above reads:

Try your hand at fencing…
If you wish.

The man leaning against the counter turns to look at you. He shifts his right leg behind his left, brings one hand across his stomach, and bows.`,

  signs: [
    `"Finesse For Success — Precision. Elegance. Victory."`,
    `"Try your hand at fencing… If you wish."`,
  ],

  owner: {
    name: "Indigo Mastoya",
    race: "Human (Male)",
    appearance: `Thin, with long wavy black hair and a thin mustache. His skin has a natural yellowish-tan hue and he speaks with a slight accent that doesn't quite place itself. He wears a tan shirt under a leather vest and brown leather pants that tie in the front. A rapier with a large silver wire basket guard sits on his hip. When meeting guests, he greets them with a flourished bow — left leg shifting behind the right, one hand sweeping across his stomach.`,
    personality: `Indigo is warm, precise, and quietly dramatic in the way that people are when they've spent their whole lives doing one thing and gotten very good at it. He will invite any interested party to use the practice mat in the back. He does not push. He simply leaves the offer open, because he believes fencing speaks for itself.`,
    dmPrivate: {
      fears: `Indigo spent most of his life adventuring — hunting the man who killed his mother. He barely avoided falling into piracy along the way. Now that it's over, he doesn't know what to do with himself. Selling blades and leather armor is what he knows. Teaching is what he hopes for. But underneath both is a man who hasn't figured out what he's for now that the thing that drove him is gone.`,
      goals: `He wants to find a protégé. Someone who loves fencing the way he does — not as a tool, but as an art. He has spent his life studying every great fencer he could find. He wants to pass it on before he dies. He won't say this directly, but a player who shows genuine interest in the practice mat will find him considerably more forthcoming than he is with casual customers.`,
      hookNote: `Indigo will not sell throwing knives. He hates throwing knives. If a player asks for them, he will decline without explanation. If pushed, he will say only: "They require no skill." He won't elaborate. This is a personal line and he will not cross it regardless of the price offered.`,
    },
  },

  inventory: [
    {
      name: "Sword of Pathfinding",
      price: "3,500 gp",
      stock: "1 in existence",
      description: "A well-balanced rapier with no unusual markings. Its quality is evident but not showy.",
      effect: "Once per long rest: close your eyes, hold the destination in mind for 1 minute, then hold the blade out straight. The tip pulls like a compass needle until it points in the direction needed to reach that destination. The pull ends once it finds its bearing. This sword is also +1 to hit and +1 to damage at all times.",
      dmNote: "The direction given is correct but unspecific — it points the way, not the path. It is up to the DM to know which direction is needed for any given destination.",
    },
    {
      name: "Sword of the Blocked Way",
      price: "4,000 gp",
      stock: "1 in existence",
      description: "A rapier with a particularly deep guard, the basket worked to deflect attacks from multiple angles.",
      effect: "Whenever the owner is engaged by three or more opponents simultaneously, they gain +1 additional attack per action. This sword is also +1 to hit and +1 to damage at all times. All three targets must be within range — they do not all need to be actively attacking the owner.",
      dmNote: null,
    },
    {
      name: "Sword of Whittling Ire",
      price: "3,000 gp",
      stock: "1 in existence",
      description: "A slender blade, almost too light. It moves faster than it should.",
      effect: "Whenever the owner successfully wounds a creature, that creature loses either an action or a bonus action on their next turn (creature's choice). Only one can be lost per turn, regardless of how many times they are wounded. This sword is also +1 to hit and +1 to damage at all times.",
      dmNote: null,
    },
    {
      name: "Armor of Determination",
      price: "3,500 gp",
      stock: "1 in existence",
      description: "Fine leather armor in deep muted tones. It sits close to the body without restricting movement.",
      effect: "When the wearer knows what they are after, their resolve holds firm. The wearer has advantage on saving throws against bribery and deceit. Counts as leather armor with a +1 armor bonus.",
      dmNote: null,
    },
    {
      name: "Armor of Anti-Cowardice",
      price: "2,800 gp",
      stock: "1 in existence",
      description: "Leather armor reinforced in unusual places — across the shoulders and upper arms particularly.",
      effect: "The wearer has disdain for those who don't fight in close. They gain resistance to damage from thrown weapons. Counts as leather armor with a +1 armor bonus.",
      dmNote: null,
    },
    {
      name: "Armor of Broken Glass",
      price: "3,500 gp",
      stock: "1 in existence",
      description: "Dark leather armor that looks like it has been repaired more than once. It has.",
      effect: "When the wearer is knocked unconscious, they immediately return to 1 HP and may move out of combat without provoking attacks of opportunity. Counts as leather armor with a +1 armor bonus.",
      dmNote: null,
    },
    {
      name: "The Black Mask",
      price: "3,000 gp",
      stock: "1 in existence",
      description: "A black mask that slips over the top of the head and ties in the back, pulling down to cover the face to the nose. Eye holes only.",
      effect: "While wearing this mask, the wearer is completely unrecognizable — even to people who know them well, even to people who love them. Once the wearer voluntarily reveals their identity to a specific person, the mask's effect is permanently broken for that person alone. It will never work on them again.",
      dmNote: null,
    },
  ],
};
