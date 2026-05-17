export const enchantedSteps = {
  id: "enchanted-steps",
  name: "Enchanted Steps",
  tagline: "Walk a Different Path",
  image: "/enchanted-steps.jpg",

  sceneDescription: `Stepping into Enchanted Steps fills you with something between awe and unease — the good kind. The floor is wood, but snaking across it is a path of packed dirt, stamped tight and clearly real, that winds through the shop in a lazy S before looping back to itself at the far end. You walk the path the way the store intends to be walked, past round display tables covered in small glowing bottles and clusters of crystal, past mannequins in leather armor gripping staves, past hooks hung with coiled rope and racks of items you'd need a closer look to name.

On the left, near the front, is a large dark-wood counter. Atop it sits a lantern filled with live fireflies, their light pressing warm and unsteady through frosted glass panes. And beside the counter is a tree. A real tree, by every indication — bark, roots, and branches all accounted for. Its trunk disappears into the wall behind the counter as though it simply grew there first and the building was put up around it. The roots vanish into the floorboards as if the boards were soil. The branches extend into the ceiling and through the walls, green-leafed and lit here and there by wandering fireflies.

Forty feet back, a rope bridge spans the width of the rear wall as a display — thick braided cord, the kind built to hold weight over a real drop. Above it, painted on the wall in careful letters: Every step tells a story. Where will yours take you? On the right, an archway of twisted wood and climbing roses frames a window where daylight pours in, warm and vivid, as though it came from somewhere other than Temple Square.`,

  owner: {
    name: "Gruk Snowshanks",
    race: "Orc (Male)",
    appearance: `Old. The kind of old that was once something else entirely — broad-shouldered and powerful, by the look of the frame still underneath. Age has bent him forward and drawn the color from his gray-green skin. His hair is white and tied back. An eye patch covers one eye. His bottom tusks push past his lips, the tip of the right one broken off at an angle. He wears a plain brown vest with nothing beneath it and leather breeches. He leans against the counter the way people lean when standing has become a negotiation with their body rather than a given.`,
  },

  inventory: [
    {
      name: "Thistleward Staff",
      cost: "450 gp",
      stock: "1 in stock",
      unique: true,
      description: "A traveling staff etched with thistle patterns along its length.",
      effect: "The bearer ignores the effects of difficult terrain while traveling.",
      quote: "It only works on one person but it's an amazing tool for scouting ahead.",
    },
    {
      name: "Travel-Light Staff",
      cost: "375 gp",
      stock: "1 in stock",
      unique: true,
      description: "Tapping the butt of this staff twice on the ground activates the head, which lights up with a bright steady glow.",
      effect: "Provides bright light in total darkness out to 50 feet. Lasts 1 hour per use. 3 uses per long rest.",
    },
    {
      name: "Squeam-Light Lantern",
      cost: "450 gp",
      stock: "1 in stock",
      unique: true,
      description: "An unremarkable lantern when unlit. When lit at night, it casts a dim green glow and emits an effect that most creatures find deeply unpleasant to approach.",
      effect: "Any creature that starts its turn outside of 30 feet and attempts to enter that radius must pass a CON saving throw. On a failure, the creature gets sick to its stomach and must turn away. Lasts 8 hours. The lantern must remain still — if moved, the effect ends and it becomes an ordinary lantern. 1 use per long rest.",
      quote: "There are a lot of places out there where the wildlife will kill you faster than bandits. This will help keep some of them at bay while you rest.",
    },
    {
      name: "Illusion Stones",
      cost: "65 gp each",
      stock: "10 in stock",
      stockCount: 10,
      description: "Plain-looking stones. The user holds one, thinks of an illusion — what it looks like, sounds like, how it moves — and then throws it within range. When it lands and settles, the illusion appears.",
      effect: "Creates a complete illusion with sound and movement at the landing point. Any close inspection reveals it as fake.",
    },
    {
      name: "Whispering Spyglass",
      cost: "500 gp",
      stock: "1 in stock",
      unique: true,
      description: "A brass spyglass, longer than most, with faint script running along the barrel.",
      effect: "The user can read the lips of any humanoid visible through the glass. Understands all languages and translates directly in the user's mind. The speaker's lips must be visible. Range: 100 feet.",
    },
    {
      name: "Deep Breath Necklace",
      cost: "400 gp",
      stock: "1 in stock",
      unique: true,
      description: "A simple cord necklace with a small blue-green pendant that looks like a droplet.",
      effect: "The wearer can breathe underwater for up to 2 hours per long rest.",
    },
    {
      name: "Ring of Missile's Wrath",
      cost: "1,000 gp",
      stock: "1 in stock",
      unique: true,
      description: "A heavy iron ring with a small amber stone set into the band.",
      effect: "The wearer can cast magic missiles at second level. 3 uses per long rest. Uses one action.",
    },
    {
      name: "Glove of the Invisible Hand",
      cost: "750 gp",
      stock: "1 in stock",
      unique: true,
      description: "A single glove, leather, with faint embroidery along the fingers. The left hand only.",
      effect: "The wearer can summon an invisible hand that reaches up to 60 feet and can lift objects up to 15 lbs. The hand remains present for 1 hour after casting. 3 uses per long rest.",
    },
    {
      name: "The Spy Bolt",
      cost: "350 gp each",
      stock: "3 in stock",
      stockCount: 3,
      description: "Sold in two pieces: a crossbow bolt and a smooth stone meant to sit in the ear. Once the bolt is stuck in a surface — by hand or by firing — the user wearing the ear stone can hear anything within 20 feet of the bolt for 10 minutes.",
      effect: "The bolt can be pressed into wood, dirt, or similar materials, or fired from a crossbow. Recharges during a long rest. The bolt must be retrieved after use to use again.",
    },
    {
      name: "Whisper Oil",
      cost: "50 gp per vial",
      stock: "5 in stock",
      stockCount: 5,
      description: "Applied to the bare soles of a creature's feet, this oil creates a noise-dampening field that radiates from the feet in a 2-inch radius for 10 minutes. One vial holds enough for four people.",
      effect: "While active, add +5 to all stealth checks made through movement, on top of any other bonuses from stats or abilities.",
    },
  ],

  dmPrivate: {
    fears: `Gruk knows what orcs face in most cities and has lived long enough to see how quickly goodwill can turn. He built something real at Enchanted Steps but he's getting older, slower, and less able to defend it — not with muscle, the way he once would have, but with presence and reputation. He worries the day comes when the effort to keep the shop going costs more than what he gets back from it, and he has nowhere else to go.`,
    goals: `Gruk is selling his past, piece by piece, if the stories are true. He wants enough to stop. Enough coin, enough quiet, enough proof that his last years can look different from the ones that came before. He doesn't speak about this directly but it comes out in the way he talks about the merchandise — like a man who is both proud of what he has and glad to see it go.`,
    questHook: `During his last raid, Gruk killed a man and his wife and looted their home. When he went inside, a boy — maybe five years old — was hiding behind a table, clutching a butter knife. Gruk took everything and left the child alive. He has never forgotten it.

Over the years he has sent adventurers to the town just to hear what became of the boy. What comes back is always the same: the man he grew into hates orcs. He leads raids into orc territory. He hunts them.

Among the loot from that house, Gruk found a locket. One side holds a painted portrait of the boy's father. The other, his mother. Gruk has never been able to throw it away.

If the party earns his trust — if he hears of good work they've done, real work, not bragging — he may eventually ask if they would carry the locket back to the man. Not to beg forgiveness. Not to explain. Just to return what belongs to the son, and close the chapter. He expects nothing in return and will say so.`,
    questNote: `The man who grew up after that night is not yet a built location. When you develop him, consider: he has built his entire identity around the loss of his parents and his hatred of the thing that caused it. The locket arriving — carried by strangers on behalf of an old orc who is still alive — will be complicated. This is not a quest with a clean ending. That's the point.`,
  },
};
