export const clanksSmithyData = {
  id: "clanks-smithy",
  name: "Clank's Smithy",
  street: "Pine Loft North",
  city: "Pine Loft",
  image: "/clanks-smithy.jpg",
  imageLarge: "/clanks-smithy.jpg",

  sceneDescription: `The heat is wrong — not the roaring blast of a coal forge you might expect, but something lower, more precise. You realize quickly that Barlin Dotes doesn't forge with fire. Copper and brass coils glow red along the floor of his press, and the light they throw is orange and steady. The shop is large for Pine Loft — stone walls, not wood — and every surface is covered. Metal tables hold bolts, brackets, unfinished mechanisms, and parts from projects either in progress or taken apart for salvage. To the left of center, a massive power forge towers over the room, its hammer head cast in the shape of a downward punching fist. Beside it, a helve hammer sits rigged like a seesaw — a leather seat strapped to the arm for the smith to ride up and down. To the right, a long metal quench can runs the length of the wall, a pulley system overhead ready to lower hot metal into the oil below. You start to notice the pattern: every machine in this shop operates by pulley, counterweight, or crank. There is no magic here — only leverage, and a great deal of it. A small figure in an enormous leather apron glances up at you from a workbench. The apron touches the floor and hides most of him. A long white beard is tucked behind it. His eyes, almost always half-closed beneath thick white brows, find you briefly before returning to whatever he's turning in his fingers. "Be right with you," he says.`,

  owner: {
    name: "Barlin Dotes",
    race: "Gnome",
    age: "Elderly",
    appearance: `Around 3 feet tall and thin as a fence post, almost entirely hidden by a leather apron so large it drags on the floor and conceals most of his body. A white beard tucked behind the apron. A round nose. A slightly wrinkled face that is almost always smeared with coal. His eyes seem perpetually half-shut beneath enormous bushy white eyebrows — not sleepy, just focused inward on whatever he's currently thinking about. Friendly enough, in the way that someone who loves their work is friendly: warmly distracted.`,
  },

  dmPrivate: {
    personality: `Barlin talks while he works and works while he talks. He'll answer questions mid-hammer-strike and forget he asked a follow-up before you answer it. He is genuinely kind but operates on his own frequency. He is not eccentric for effect — he simply lives in his head. He's been building things since before most people in Pine Loft were born.`,
    desires: `Barlin wants to build the thing he hasn't built yet. Whatever that is changes weekly. He keeps a chalkboard of ideas on the back wall and crosses things off when he finishes them or decides they won't work. It's nearly full.`,
    fears: `Barlin doesn't worry much about the wider world, but he has one persistent anxiety: that someone will come into his shop and steal his unfinished work. Not the finished pieces — those are for sale. The half-built things on his tables represent years of ideas and he guards them quietly.`,
    questHooks: [
      {
        title: "The Missing Prototype",
        description: `Something was taken from Barlin's shop — not something finished, but a half-built mechanism he won't describe in detail. He noticed it gone three days ago and hasn't said anything to the guard yet because he's not sure he wants the attention. If the party seems trustworthy, he might ask them to look into it quietly.`,
      },
      {
        title: "The Commission",
        description: `Barlin occasionally takes custom orders for unusual requests — provided the requester can explain what they need clearly enough. He doesn't ask questions about why. He considers that none of his business.`,
      },
    ],
    secretItems: [
      {
        name: "Custom Commission",
        description: `If a player describes something mechanical they need — a locking mechanism, a pressure-triggered device, a counterweighted trap — Barlin will think about it, say "Hmm," and either quote a price or say he doesn't know how to do that yet. He usually knows how.`,
        price: "Varies",
        note: `DM discretion on feasibility and price. Barlin won't build weapons of mass destruction but he'll build almost anything else if the concept is sound.`,
      },
    ],
  },

  inventory: [
    {
      name: "Magnetic Weapon Grips",
      description: `Barlin fits magnetic grips to an existing weapon's handle. The magnetic tension makes it significantly harder to be disarmed. Whenever the user rolls to avoid being disarmed, they do so with advantage.`,
      price: "250 gp",
      quote: `"The worst thing that can happen to a warrior in a fight is lose his weapon. I can help with that!"`,
      quoteNote: `He holds up a handled grip with brass fittings, turns it over twice, and sets it back down without looking at you.`,
      mechanical: `Advantage on all checks and saving throws to avoid being disarmed.`,
    },
    {
      name: "Find It Tuner",
      description: `A hand-forged tuning fork with unusual sensitivity to metal resonance. When struck, the fork vibrates at a frequency that causes nearby metal to faintly ring or hum in response. Useful for locating hidden metal objects — concealed weapons, locked boxes, buried hardware — in an area.`,
      price: "400 gp",
      stock: "1 in stock",
      quote: `"I made this to help me find my keys when it's dark in the shop!"`,
      mechanical: `Advantage on Investigation checks to locate metal objects in a room or area. Does not function through more than 6 inches of stone or lead.`,
    },
    {
      name: "Armor Piercing Arrow Heads",
      description: `Specially forged to a hardness and edge that punches through even heavily layered armor. Compatible with bows and crossbows. Sold by the dozen.`,
      price: "Ask Barlin",
      quote: `"The steel I use for these takes three times as long to work. The edge holds though. You'll feel the difference."`,
      mechanical: `+1 to attack rolls made with these arrows, effectively treating the target's AC as 1 lower. One-time use per arrow head.`,
    },
    {
      name: "Magnetic Land Mine",
      description: `A pressure-sensitive magnetic device designed to trigger against heavily armored targets. When a creature carrying or wearing 25 lbs or more of metal passes within 5 feet of the mine, it detonates. The creature takes 4d10 thunder damage and must succeed on a DC 13 Dexterity saving throw or fall prone. The mine is destroyed on use.`,
      price: "300 gp",
      stock: "2 in stock",
      quote: `"Set it on the ground, step back, and let the armor do the work."`,
      mechanical: `Triggers on 25+ lbs of metal within 5 ft. 4d10 thunder damage. DC 13 DEX save or fall prone. Single use.`,
    },
    {
      name: "Immovable Magnet",
      description: `A powerful magnetic device that disrupts armored opponents and disarms careless warriors. As an action, place it on the ground and activate it. Choose a direction — the magnet projects a 10-foot magnetic field in a straight line. Any creature carrying or wearing metal that enters the field must succeed on a DC 15 Strength saving throw or be pulled to the magnet, landing in the nearest unoccupied space adjacent to it and becoming Grappled until the end of their next turn. If the metal triggering the effect is a held weapon rather than armor, the creature may choose to release the weapon instead — it is pulled to the magnet and the creature is disarmed. After successfully pulling a creature or weapon, the magnet powers down until the next long rest. If nothing is pulled, it remains active until manually deactivated.`,
      price: "600 gp",
      stock: "1 in stock",
      quote: `"Powerful enough to move a man in full plate. Took me four tries to get the field direction right."`,
      mechanical: `10-ft directional magnetic field. DC 15 STR save or pulled to magnet and Grappled until end of next turn. Weapon option: creature releases weapon instead. Powers down after first successful pull.`,
    },
  ],
};
