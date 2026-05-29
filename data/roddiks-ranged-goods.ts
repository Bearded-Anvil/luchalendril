export const roddikssRangedGoods = {
  id: "roddiks-ranged-goods",
  name: "Roddik's Ranged Goods",
  tagline: "If it flies, it started here.",
  street: "South Main Street",
  city: "Beacon",
  image: "/roddiks-ranged-goods.jpg",

  sceneDescription: `Roddik's booth stands on four natural tree-branch poles with a brown and green striped canvas stretched across the walls. The table is small — centered in the space with room to walk inside on either side. A rack along the back wall holds a variety of longbows and shortbows. Light and heavy crossbows lay across the table, with bundles of crossbow bolts between them. Javelins stand propped in one corner. A set of shelves in the front right holds throwing knives and throwing stars. Along the front of the counter, sitting on the ground and leaning against it, are rows of quivers packed with arrow bundles in groups of ten.`,

  owner: {
    name: "Roddik Bevarin",
    race: "Human",
    age: "Middle-aged",
    appearance: `Red hair and a short red beard. Bright blue eyes over light skin covered in freckles. Around five foot nine, dressed in brown leathers with a green cloak. He has the look of a ranger without a doubt — someone who spent years in the wild and knows exactly how to use everything he sells.`,
  },

  dmPrivate: {
    history: `Roddik was a ranger and a good one. But one night in the wilds, he stumbled upon a camp with four sleeping Orcs and a valuable trinket left unguarded. He stealthed in and took it — but on his way out he bumped a cook pot and woke them all. For more than a week they pursued him through the wilderness, throwing spears, firing arrows, setting ambushes. In desperation he threw the trinket into the woods, hoping they'd see it and give up the chase. They never did. They still believed he had it. He made it to Beacon, losing them at the gates — but he has spotted them since. Near the walls. Once even inside the city, moving through the street like commoners.`,
    fears: `Roddik is afraid to leave Beacon without a serious escort. Something about those Orcs broke something in him. He won't say what he saw, what he did, or how bad it got. He just won't go back out there alone. He is convinced the pursuit won't end until the Orcs are dead or the trinket is found and returned.`,
    goals: `Roddik wants one of his bows to win the Beacon Archery Grand Tournament at the Winter's Grasp festival. He takes enormous pride in his craftsmanship. That bow winning would mean more to him than coin.`,
    questHooks: [
      {
        title: "The Orc Pursuit",
        description: `If players earn Roddik's trust, he will eventually tell the story — haltingly, and not all at once. He needs someone to either find the trinket he threw into the woods and return it to the Orcs, or deal with the Orcs permanently. He knows roughly where he threw it but has never been willing to go back.`,
        dmNote: `The trinket, its nature, and the Orcs' identities are yours to define. This can be a straightforward retrieval quest or something with real weight behind it — why was the trinket so important? Who were those Orcs really? Festivals and the Archery Tournament will be built out at a later date.`,
      },
    ],
  },

  inventory: [
    {
      category: "Bows & Crossbows",
      items: [
        {
          name: "Shortbow",
          description: "Lightweight hunting bow.",
          price: "25 gp",
        },
        {
          name: "Longbow",
          description: "Tall yew bow with strong draw weight.",
          price: "50 gp",
        },
        {
          name: "Recurve Hunting Bow",
          description: "Compact bow designed for horseback or close woodland travel.",
          price: "38 gp",
          rules: "Functions as a shortbow (1d6 piercing, range 80/320). Counts as a shortbow for all proficiency and feat purposes. Its compact limbs grant no disadvantage in tight spaces where a longbow would be unwieldy.",
        },
        {
          name: "Heavy Crossbow",
          description: "Thick steel bow arms, crank-loaded.",
          price: "50 gp",
        },
        {
          name: "Light Crossbow",
          description: "Easier loading and lighter frame.",
          price: "25 gp",
        },
        {
          name: "Compact Travel Crossbow",
          description: "Foldable stock for easier transport.",
          price: "35 gp",
          rules: "Functions as a light crossbow (1d8 piercing) with reduced range of 60/240. Folding and unfolding the stock requires a bonus action. Small and Medium creatures may stow it without penalty.",
        },
        {
          name: "Spare Bowstring",
          description: "Waxed and wrapped in oilcloth.",
          price: "5 sp",
        },
        {
          name: "Bowstring Wax",
          description: "Keeps strings weather-resistant.",
          price: "2 sp",
        },
      ],
    },
    {
      category: "Ammunition",
      items: [
        {
          name: "Bundle of 10 Arrows",
          description: "Standard wood shaft arrows.",
          price: "1 gp",
        },
        {
          name: "Bundle of 10 Hunting Arrows",
          description: "Broadhead tips designed for game.",
          price: "2 gp",
          rules: "When fired at beasts or unarmored creatures (AC 11 or lower), deal an additional 1 damage on a hit. No benefit against armored targets.",
        },
        {
          name: "Bundle of 10 Bodkin Arrows",
          description: "Narrow armor-piercing heads.",
          price: "5 gp",
          rules: "When fired at a target wearing medium or heavy armor, ignore the +2 AC bonus granted by that armor (but not shield or natural armor). No additional benefit against unarmored targets.",
        },
        {
          name: "Bundle of 10 Crossbow Bolts",
          description: "Standard bolts.",
          price: "1 gp",
        },
        {
          name: "Bundle of 10 Heavy Bolts",
          description: "Thick reinforced bolts for heavy crossbows only.",
          price: "2 gp",
          rules: "Heavy crossbow only. Deals 1d10 piercing instead of 1d8 on a hit. Loading time unchanged, but the crossbow must be re-braced after every 5 shots or the mechanism jams (requires a bonus action to clear).",
        },
        {
          name: "Practice Arrows (10)",
          description: "Blunted tips for training.",
          price: "8 sp",
        },
      ],
    },
    {
      category: "Throwing Weapons",
      items: [
        {
          name: "Throwing Knife",
          description: "Balanced steel throwing blade.",
          price: "2 gp",
        },
        {
          name: "Throwing Star",
          description: "Four-point steel star.",
          price: "1 gp",
          rules: "Light, Finesse, Thrown (20/40). Deals 1d4 piercing damage. Can be drawn and thrown as part of the same attack. Counts as a simple weapon.",
        },
        {
          name: "Weighted Throwing Spike",
          description: "Heavy penetration spike built for force over distance.",
          price: "3 gp",
          rules: "Thrown (20/40). Deals 1d6 piercing damage. If the attack roll exceeds the target's AC by 5 or more, the spike lodges in the target — they suffer 1 damage at the start of their next turn and must use an action to remove it.",
        },
        {
          name: "Throwing Hatchet",
          description: "Compact axe designed for rotation.",
          price: "7 gp",
        },
        {
          name: "Hunting Knife",
          description: "Multipurpose field blade.",
          price: "5 gp",
        },
      ],
    },
    {
      category: "Javelins & Pole Throwers",
      items: [
        {
          name: "Javelin",
          description: "Hardwood shaft with iron tip.",
          price: "5 sp",
        },
        {
          name: "Bundle of 5 Javelins",
          description: "Tied with leather carry strap.",
          price: "2 gp",
        },
        {
          name: "Heavy War Javelin",
          description: "Thicker shaft and weighted iron head for greater impact.",
          price: "1 gp",
          rules: "Thrown (20/40). Deals 1d8 piercing instead of 1d6. Heavier weight reduces throwing range. On a hit, the target must succeed on a DC 12 Strength saving throw or be knocked back 5 feet.",
        },
        {
          name: "Practice Javelin",
          description: "Blunted training version.",
          price: "4 sp",
          rules: "Deals 1 bludgeoning damage on a hit. Used for training, sparring, or nonlethal throws. Otherwise identical to a standard javelin.",
        },
      ],
    },
    {
      category: "Quivers & Carry Gear",
      items: [
        {
          name: "Leather Arrow Quiver",
          description: "Holds 20 arrows.",
          price: "1 gp",
        },
        {
          name: "Hip Bolt Case",
          description: "Crossbow bolt holster worn at the hip.",
          price: "8 sp",
        },
        {
          name: "Back Harness Quiver",
          description: "Double-strap stability rig for longer travel.",
          price: "3 gp",
        },
        {
          name: "Waterproof Arrow Tube",
          description: "Sealed against rain and mud.",
          price: "5 gp",
        },
      ],
    },
    {
      category: "Maintenance & Utility",
      items: [
        {
          name: "Fletching Kit",
          description: "Feathers, glue, cutting knife.",
          price: "2 gp",
        },
        {
          name: "Arrowhead Replacement Pack",
          description: "Mixed iron tips.",
          price: "1 gp",
        },
        {
          name: "Bow Repair Kit",
          description: "String thread, glue, tools.",
          price: "3 gp",
        },
        {
          name: "Sharpening Stone",
          description: "Pocket whetstone.",
          price: "4 sp",
        },
        {
          name: "Weapon Oil Cloth",
          description: "Oiled rag for rust prevention.",
          price: "2 sp",
        },
        {
          name: "Leather Finger Tabs",
          description: "Prevents bowstring cuts on the draw fingers.",
          price: "3 sp",
        },
        {
          name: "Archery Arm Guard",
          description: "Leather bracer protecting the bow arm from string snap.",
          price: "5 gp",
        },
      ],
    },
    {
      category: "Hunting Supplies",
      items: [
        {
          name: "Small Game Trap",
          description: "Spring snare for rabbits or birds.",
          price: "2 gp",
        },
        {
          name: "Hunting Whistle",
          description: "Mimics woodland bird and small animal calls.",
          price: "5 sp",
          rules: "As an action, make a DC 13 Survival or Nature check. On a success, lure one Small or Tiny beast within 60 feet to approach your position for up to 1 minute. Loud noise or sudden movement breaks the effect. At the DM's discretion, exceptional rolls may attract curious Medium creatures.",
        },
        {
          name: "Scent Covering Herbs",
          description: "Crushed pine and sage blend.",
          price: "6 sp",
          rules: "Applying the herbs takes 1 minute. For 4 hours, creatures relying on smell to detect you make Perception checks at disadvantage. Does not affect creatures with Blindsight or Truesight. One application per pouch.",
        },
        {
          name: "Game Skinning Roll",
          description: "Knife, scraper, twine.",
          price: "4 gp",
        },
      ],
    },
    {
      category: "Specialty Ammunition",
      items: [
        {
          name: "Rope-Tether Arrow",
          description: "Arrow attached to up to 50 feet of thin cord.",
          price: "3 gp",
          rules: "On a hit, the arrow lodges in the target or surface. The cord remains attached to both the arrow and the shooter's end. Can be used to cross gaps, restrain a creature (DC 12 Strength check to break free while the cord is held taut), or retrieve small objects. The cord snaps if more than 200 lbs of tension is applied.",
        },
        {
          name: "Signal Arrows (3)",
          description: "Whistles loudly in flight.",
          price: "2 gp",
          rules: "When fired, produces a loud whistle audible up to 600 feet away. Can be used for signaling allies, triggering reactions, or marking direction. The whistle begins the moment the arrow is released and continues until the arrow lands or strikes a surface.",
        },
        {
          name: "Firestarter Arrows (3)",
          description: "Cloth-wrapped heads for oil ignition.",
          price: "4 gp",
          rules: "Must be lit before firing (bonus action if fire is available). On a hit against an oil-coated surface or creature, ignites the oil immediately. Against a target not coated in oil, deals 1 fire damage in addition to normal arrow damage. Unlit, functions as a standard arrow. Wind at the DM's discretion may extinguish the flame mid-flight.",
        },
        {
          name: "Blunt Hunting Bolts (5)",
          description: "Rounded heads designed to stun small game without ruining the hide.",
          price: "1 gp",
          rules: "Deals bludgeoning damage instead of piercing. Against Small or Tiny beasts, on a hit the creature must make a DC 11 Constitution saving throw or be stunned until the end of its next turn. Against larger creatures, deals normal crossbow damage with no stun effect.",
        },
      ],
    },
  ],
};
