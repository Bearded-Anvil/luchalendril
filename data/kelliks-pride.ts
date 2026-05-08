export const kelliksPride = {
  id: "kelliks-pride",
  name: "Kellik's Pride",
  tagline: "Beauty is not vanity. It is intention.",
  street: "South Main Street",
  city: "Beacon",
  image: "/kelliks-pride.jpg",

  sceneDescription: `As you near Kellik's Pride, you see a fine dark wood table with a deep purple satin runner draping the length of it and dangling off both sides. The entirety of the booth is enclosed by a cloth covering — deep purple, glimmering with satin texture. The tent posts are dark wood studded with small pegs, each one holding a ring, bracelet, or necklace. The table itself is covered in jewelry — small neck-shaped mannequins wearing necklaces, wooden hands displaying rings, trays of earrings and pendants catching the light. A black cat sits atop the table at the center, watching every approaching customer with bright, nearly glowing blue eyes. You cannot shake the feeling that the cat is observing you with something beyond ordinary animal attention.`,

  owner: {
    name: "Kellik Illahan",
    race: "Elf",
    age: "Older — though how old is difficult to say",
    appearance: `Silver hair, worn up beneath a flat-topped hat adorned with gems sewn into a band across the forehead like a circlet. Her skin is deeply tanned — almost orange, like desert sand. Rings on nearly every long finger, each set with a different shaped and colored stone. Bracelets jingle on both wrists. Three necklaces hang at her collar: two simple chains and one with a ruby pendant. Her eyes are a light shade of purple — an odd and striking contrast to her tan skin.`,
  },

  dmPrivate: {
    personality: `Kellik is gracious, perceptive, and quietly manipulative. She speaks as though she is doing her customers a favor — and she believes it. She reads insecurity the way others read weather, and she knows exactly which piece to suggest and when. She never pushes. She simply points, and lets vanity do the rest.`,
    fears: `Kellik fears growing old and losing what she considers her beauty. Rumors around Beacon, for those who investigate, suggest that some of the jewelry she herself wears keeps her looking younger than she truly is. She is deeply uncomfortable around anything that could reveal the truth of her age — or her enchantments.`,
    goals: `Kellik wants to adorn everyone in Beacon with some trinket that gives them an improvement they crave. Her items are real and hold real enchantments — but she knows the mind and how vanity works. Once she gets one person to improve themselves in one way, they will come back as soon as they grow self-conscious about something else. She is building a city full of repeat customers.`,
    catNote: `The black cat is not real. It is a magical construct, and its sole purpose is to monitor the hands of shoppers and alert Kellik to any shoplifting. It does not attack. It does not speak. But it never blinks, it never loses interest, and it always knows where your hands are.`,
    questHooks: [
      {
        title: "The Buried Fortune",
        description: `Kellik had one client in particular who spent a small fortune at her booth. It was a shock to many in Beacon when this wealthy lady died so young. But Kellik knows a little secret: she wasn't nearly as young as everyone believed. This lady was buried with her jewelry on — as she never took it off. Kellik is very interested in having this body exhumed so she can reclaim her jewelry for two reasons. One: it's worth a fortune. Two: she fears that someone may investigate the jewelry and discover that Kellik was behind the lady fooling so many into believing she was young and beautiful. The buried lady wears 3 rings, 2 earrings, a necklace, and an anklet.`,
        dmNote: `Kellik will only offer this quest if a party member makes it obvious they are willing to do things a little shady. She will not bring it up otherwise.`,
      },
    ],
    secretItems: [
      {
        name: "Circlet of Hidden Cracks",
        rarity: "Rare — Requires Attunement",
        description: `A thin silver circlet set with a single violet gemstone shaped like an unblinking eye. While worn, the circlet subtly reveals the insecurities of those around you — not as words, but as impressions, fleeting flashes, and instincts. You might know: someone fears appearing weak; another desperately wants approval; another hides shame about poverty, appearance, intelligence, or cowardice.`,
        effect: `As a bonus action, focus on one creature within 30 feet. For 1 minute, gain advantage on all Charisma checks against that creature. Also gain advantage on Wisdom (Insight) checks against them during this time. Usable twice per long rest.`,
        drawback: `After the second use, the wearer must succeed on a DC 13 Wisdom saving throw or suffer disadvantage on Insight checks until completing a long rest. The flood of insecurity becomes difficult to ignore.`,
        price: "4,800 gp",
        note: "Offered only to customers who have already spent coin and proven they want something with real edge to it.",
      },
      {
        name: "The Masquerade Circlet",
        rarity: "Rare — Requires Attunement",
        description: `An elegant black-metal circlet adorned with tiny mirrored shards. When activated, the wearer's face reshapes into that of another humanoid they have personally seen before. The transformation is illusionary but highly convincing — facial structure, eye shape, skin tone, scars, wrinkles, and facial hair may all appear or vanish.`,
        effect: `As an action, choose a humanoid face you have seen in person. The illusion lasts 1 hour. Physical inspection allows an Investigation check against DC 16 to notice inconsistencies. Once per short or long rest.`,
        drawback: `Cannot duplicate creatures of a different size category. Cannot mimic magical disguises or shapeshifters perfectly. Does not copy memories, mannerisms, or voice.`,
        price: "6,200 gp",
        note: "Kellik produces this quietly, from beneath the table.",
      },
      {
        name: "Spectacles of True Hue",
        rarity: "Uncommon",
        description: `Delicate silver-framed spectacles with circular crystal lenses that shimmer faintly blue. When looking through the lenses, the wearer's eye color may be altered to nearly any natural or unnatural hue. While wearing them, the wearer can also see through minor illusion magic and automatically recognize minor illusions, cosmetic glamours, illusionary makeup, false eye color enchantments, and illusory disguises affecting only small details. Larger or more powerful illusions still require Investigation checks.`,
        effect: `Passive vision through lenses. Eye color alteration is cosmetic only.`,
        drawback: `None — but see DM note.`,
        price: "2,900 gp",
        note: "IMPORTANT: Kellik refuses to allow these spectacles near her booth and becomes visibly irritated if someone attempts to wear them inside. They would reveal the enchantments on her own jewelry — and on her.",
      },
    ],
  },

  inventory: [
    {
      name: "The Scholar's Chain",
      description: "A thin silver necklace with a smoky quartz pendant.",
      effect: "While worn, others unconsciously perceive the wearer as more thoughtful, articulate, and educated. Grants advantage on first-impression Charisma (Persuasion) checks involving scholars, merchants, scribes, and nobles. Does not increase actual intelligence.",
      price: "320 gp",
    },
    {
      name: "Ring of Sculpted Form",
      description: "A polished bronze ring, warm to the touch.",
      effect: "The wearer appears slightly leaner, healthier, and more physically fit. Clothing seems to hang better. A minor illusion smooths posture and body shape. Grants no actual athletic ability.",
      price: "450 gp",
    },
    {
      name: "The Longstep Anklet",
      description: "A delicate gold chain with a tiny hanging bell that makes no sound.",
      effect: "Creates the subtle illusion that the wearer stands roughly 2–3 inches taller. Alters perceived posture and proportions. Particularly popular among nobles and actors.",
      price: "380 gp",
    },
    {
      name: "Veilglass Earrings",
      description: "Twin crystal earrings filled with shifting silver mist.",
      effect: "The wearer's skin appears clearer and more symmetrical. Scars, blemishes, dark circles, and minor imperfections are softened. Does not conceal major injuries.",
      price: "500 gp",
    },
    {
      name: "The Commander's Brooch",
      description: "A dark iron brooch shaped like crossed spears.",
      effect: "Others instinctively read the wearer as more authoritative and capable. Grants advantage on Charisma (Intimidation) checks made to establish control or discipline. Guards and soldiers are slightly more likely to obey quick commands.",
      price: "700 gp",
    },
    {
      name: "Whisperthread Bracelet",
      description: "A woven silver bracelet lighter than cloth.",
      effect: "The wearer's voice becomes subtly more pleasant and memorable. Singing sounds richer, speech seems calmer and more confident. Grants advantage on Performance checks involving speech or storytelling.",
      price: "540 gp",
    },
    {
      name: "The Moonlit Choker",
      description: "A black velvet choker with a single pale pearl.",
      effect: "The wearer appears younger by roughly 5–10 years. Hair subtly darkens, wrinkles and age lines soften. Does not disguise race or identity.",
      price: "950 gp",
    },
    {
      name: "Ring of Noble Bearing",
      description: "A silver signet ring with no crest upon it.",
      effect: "The wearer unconsciously adopts elegant posture and refined movements. Common folk often assume the wearer has wealth or noble status. Grants advantage on Charisma (Deception) checks involving etiquette or social standing.",
      price: "620 gp",
    },
    {
      name: "Cat's Eye Pendant",
      description: "A narrow gemstone necklace whose oval pupil shifts in candlelight.",
      effect: "The wearer's eyes appear brighter, sharper, and more striking. Creatures are more likely to maintain eye contact. Provides a slight advantage in social interactions where charm or magnetism matters.",
      price: "410 gp",
    },
    {
      name: "The Velvet Shadow Clasp",
      description: "A matte black cloak clasp that never reflects light.",
      effect: "The wearer seems more mysterious, dangerous, or alluring — depending on the observer. Shadows cling subtly to the wearer. Particularly favored by rogues, performers, and spies. Grants advantage on Charisma (Performance) or (Intimidation) checks made in dim light.",
      price: "1,200 gp",
    },
  ],
};
