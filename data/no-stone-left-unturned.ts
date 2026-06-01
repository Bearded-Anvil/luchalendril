export const noStoneLeftUnturned = {
  id: "no-stone-left-unturned",
  name: "No Stone Left Unturned",
  street: "Pine Loft South",
  city: "Pine Loft",
  image: "/no-stone-unturned.jpg",
  imageLarge: "/no-stone-unturned.jpg",

  sceneDescription: `There are no doors here, no fence, no counter between you and the work. The shop opens right onto the street — a wide covered front with stone stacked in every direction, cut blocks and rough chunks and finished pieces leaning against each other in what looks like chaos until you notice it isn't. A large tree stump serves as Gadrid's worktable, its surface white with stone dust and scarred from years of chisel strikes. A flat wooden table beside it holds his tools in a row — chisels, punches, a hammer — arranged with the quiet order of someone who knows exactly where everything is. A carved stone panel near the entrance shows a decorative flower pattern, detailed and clean. Stone chips and pale dust cover the ground around the stump. The man working the stump doesn't look up immediately. He's staring at a blank block of gray stone the way a person stares at something they haven't decided yet. Then he sets his hammer down and looks at you. He doesn't smile exactly, but he doesn't not smile either.`,

  owner: {
    name: "Gadrid Masonson",
    race: "Human",
    age: "Mid 40s",
    appearance: `Around 6 feet tall with brown hair and a shaggy brown beard kept without much fuss. Work clothes in gray and brown, long-sleeved and worn soft from daily use. A kind enough man — but not a man of many words. His father was a stone mason. His grandfather before that. He works because it is simply what he is, and he's never felt the need to think much deeper than that.`,
  },

  dmPrivate: {
    personality: `Gadrid communicates in short sentences and long silences. He's not unfriendly — he'll answer questions directly and without attitude — he just doesn't add anything extra. If you ask him how his day is going, he'll say "Fine" and go back to the stone. He respects people who know what they want and don't waste his time finding out.`,
    desires: `Gadrid doesn't want much. He wants the work to be good. He wants to be left alone while he does it. He wants Pine Loft to keep growing so there's more stone work to be done. That's about the whole of it.`,
    fears: `Gadrid has one quiet worry he's never said out loud: that the work will stop before he does. Pine Loft is small. There are only so many walls to build, so many markers to carve. He watches the town grow slowly and hopes it keeps growing.`,
    questHooks: [
      {
        title: "The Marked Stone",
        description: `A traveler brought Gadrid a stone piece some weeks ago — asked him to identify the markings on it. Gadrid couldn't. He's seen a lot of stonework in his life and he didn't recognize the chisel pattern or the symbol. He still has it on a shelf in the back. He didn't know why it stuck with him. It just did.`,
      },
      {
        title: "Structural Knowledge",
        description: `Gadrid has worked on most of Pine Loft's stone buildings and knows their weak points better than anyone. If the party needs to get into a stone structure quietly — or bring part of one down — he's the person who would know where to strike. He won't volunteer it, but he won't lie about it either if asked directly.`,
      },
    ],
    secretItems: [
      {
        name: "Custom Inscription",
        description: `Gadrid can carve a message, symbol, or name into any stone surface — a wall, a marker, a weapon pommel, a piece of gear. He doesn't ask what it means. He just carves it.`,
        price: "5–25 gp depending on complexity",
        note: `Useful for leaving marks, forging documents in stone, or creating false evidence. Gadrid's work is indistinguishable from professional stonework — no one will be able to tell it was done recently.`,
      },
    ],
  },

  inventory: [
    {
      name: "Mason's Tools (Full Set)",
      description: "Chisels, a stone hammer, a square, and a level — everything needed to shape and lay stone. Proficiency in Mason's Tools allows use of these for crafting checks and identifying stonework.",
      price: "10 gp",
    },
    {
      name: "Stone Chisel (Single)",
      description: "A single well-tempered chisel. Useful as a tool or, in a pinch, as a short improvised weapon (1d4 piercing).",
      price: "5 sp",
    },
    {
      name: "Stone Hammer",
      description: "A heavy-headed hammer for shaping rock. Functions as a warhammer in combat if needed. Heavier than a standard warhammer — not balanced for fighting, but effective.",
      price: "2 gp",
      mechanical: "Functions as a warhammer (1d8 bludgeoning). Disadvantage on attack rolls unless the wielder has Strength 14 or higher.",
    },
    {
      name: "Climbing Pitons (10)",
      description: "Stone-forged iron pitons, heavier and more durable than standard. Driven into rock faces they hold better than most — advantage on checks to maintain a climb anchor in natural stone.",
      price: "1 gp",
      mechanical: "Advantage on checks to set a climbing anchor in natural stone surfaces.",
    },
    {
      name: "Stone Caltrops (Bag of 20)",
      description: "Hand-cut stone caltrops — heavier than iron ones and harder to spot on rocky ground. Creatures moving through the area must succeed on a DC 15 Dexterity saving throw or stop moving and take 1 piercing damage.",
      price: "8 sp",
      mechanical: "DC 15 DEX save (vs. DC 13 for standard caltrops). Harder to spot on stone or gravel surfaces — DC 14 Perception to notice before stepping.",
    },
    {
      name: "Whetstone (High Grade)",
      description: "A fine-grained sharpening stone cut from quality quarry rock. Sharpening a blade with this whetstone before combat grants a +1 to the first damage roll on the first hit of that encounter.",
      price: "3 sp",
      mechanical: "+1 damage on first successful hit after sharpening. One-time use per whetstone.",
    },
  ],

  services: [
    {
      name: "Stone Repair",
      description: "Patching cracked or broken stonework — walls, foundations, hearths, monuments. Gadrid will assess and quote on-site.",
      price: "Varies — ask Gadrid",
    },
    {
      name: "Structural Assessment",
      description: "Gadrid can inspect a stone structure and identify weak points, stress fractures, or hidden passages in the stonework. Useful before a siege, a break-in, or any situation where knowing the building matters.",
      price: "5 gp",
      mechanical: "Party gains advantage on checks related to breaching, collapsing, or navigating the assessed structure. DM may reveal hidden details about the building's construction.",
    },
    {
      name: "Custom Stonework",
      description: "Markers, gravestones, carved panels, decorative pieces, or any custom commission. Gadrid quotes by complexity and size. Typical work takes 1–3 days.",
      price: "10–50 gp",
    },
  ],
};
