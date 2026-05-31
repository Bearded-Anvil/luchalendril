export const tobysCobblerShop = {
  id: "tobys-cobbler-shop",
  name: "Toby's Cobbler Shop",
  street: "Pine Loft North",
  city: "Pine Loft",
  image: "/tobys-cobbler.jpg",
  imageLarge: "/tobys-cobbler.jpg",

  sceneDescription: `The smell hits you before anything else — strong, rich new leather, the kind that fills a room and doesn't apologize for it. Inside, Toby's is less a shop and more a workshop that happens to have a door. The entire left wall is a long workbench buried under tools, scraps of leather, and boots in various stages of becoming. Lasts, awls, hammers, and waxed thread compete for space beside half-finished soles and a curled strip of brown hide. The right wall is shelves floor to ceiling — thread and cord in a dozen weights, leather in sheets and strips, small metal rings for lace eyelets, steel toe caps, tin of wax, and more. At the back, instead of a sales counter, there is a tilted drafting table with several hand-drawn schematics pinned to it — shoe patterns, sole profiles, boot cross-sections. A young man in a green shirt and leather apron turns from his bench with a wide, freckled grin. "Well! What can I do for your feet today?"`,

  owner: {
    name: "Toby Rodenbury",
    race: "Human",
    age: "Mid 20s",
    appearance: `Around 5'10" with light brownish-red hair and a freckled face. Brown eyes that lean toward warm and easy. Wears a light green shirt beneath a brown leather vest and brown breeches worn soft from use. A genuinely chipper personality — Toby always seems ready and excited to help, as if your arrival is the best thing that's happened to him all day.`,
  },

  dmPrivate: {
    personality: `Toby is warm, enthusiastic, and quick to laugh. He's not naive — he reads people well from years of watching travelers pass through — but he leads with openness and assumes the best. He's the kind of person who gives people the benefit of the doubt right up until they prove him wrong.`,
    desires: `Toby loves his craft genuinely and takes quiet pride in doing it well. He wants to be known as the best cobbler on the southern road — someone travelers remember and come back to. He's not greedy. He just wants to matter in his trade.`,
    fears: `Pine Loft has been outgrown by Beacon to the north and Toby knows it. He doesn't know of a cobbler in Beacon yet — but he's thought about it. The fear that someone will set up shop there before him gnaws at him. He considers making the move himself, leaving the home he loves to claim the better market. He hasn't decided yet.`,
    questHooks: [
      {
        title: "The Password",
        description: `Toby's special inventory isn't on display and he won't mention it to a stranger. If a party member approaches with the right password — something a quest-giver, a fence, or a shady contact gave them beforehand — Toby's expression shifts just slightly. He glances around, then nods. "Ah. You're not here for a re-sole then." He steps to the back and returns with a small wrapped bundle. Use this as a thread in a smuggling quest, a spy arc, or a thieves' guild introduction. The password is yours to set for your campaign.`,
      },
    ],
    secretItems: [
      {
        name: "The Smuggler's Heel",
        description: `A pair of leather boots that look completely ordinary. The thread holding the sole to the heel can be picked at and pulled free, revealing a small hollow compartment inside — large enough for folded letters, coins, or anything flat. The compartment is water-sealed and safe to wear in rain, streams, or puddles. Once used, the player can re-lace the sole themselves to seal it back up. Many in stock.`,
        price: "35 gp",
        note: `Only shown after the password is given. Toby wraps them in plain cloth before handing them over.`,
      },
      {
        name: "Saw Laces",
        description: `Look like ordinary boot laces. Inside the braided cord is a rough wire core that can be used to saw through wood, rope, or thin metal bars. Wrap around the target and work back and forth. After each use, roll a D6 — on a 1 or 2, the lace snaps and must be replaced. 10 in stock.`,
        price: "25 gp",
        note: `Sold in pairs. Toby recommends buying a spare set. "The wire holds better than you'd think, but it's not immortal."`,
      },
    ],
  },

  inventory: [
    {
      name: "Boot Repair (Basic)",
      description: "Re-sole, re-lace, or patch standard leather boots. Same-day service in most cases.",
      price: "2–5 sp",
      quote: "Bring them in, I'll have them back to you by end of day. Maybe sooner if it's just a sole.",
    },
    {
      name: "Standard Leather Boots",
      description: "Sturdy, well-made traveling boots. Comfortable from the first day.",
      price: "4 gp",
      quote: "Nothing fancy, but nothing that'll fall apart on you either. These'll outlast the road.",
    },
    {
      name: "Soft-Sole Boots",
      description: "Thin, quiet-soled boots. Disadvantage on checks to be heard while moving slowly.",
      price: "7 gp",
      quote: "Hunters buy these. Or people who don't want to wake up a whole inn when they come in late.",
      quoteNote: "He raises an eyebrow but keeps smiling.",
    },
    {
      name: "Reinforced Work Boots",
      description: "Steel-toe capped, thick-soled. Reduce foot injury from falling objects or stomping attacks at DM discretion.",
      price: "9 gp",
      quote: "These are what the lumberjacks wear. You don't notice how often something heavy lands near your feet until you're wearing these.",
    },
    {
      name: "Custom Boot (Any Style)",
      description: "Any boot, built to the customer's specifications. Fitted to the foot. Takes 2–3 days.",
      price: "12–20 gp",
      quote: "Tell me what you need them to do and I'll tell you what I can do. Most things I can figure out.",
    },
    {
      name: "Waxed Leather Laces (Pair)",
      description: "Replacement laces, waxed for weather resistance.",
      price: "2 cp",
      quote: "Cheapest thing I sell. Buy a few pairs. You'll lose one eventually.",
    },
  ],
};
