export const riskAndReward = {
  id: "risk-and-reward",
  name: "Risk & Reward",
  tagline: "Fortune Favors the Bold",
  street: "South Main Street",
  city: "Beacon",
  image: "/risk-and-reward.jpg",

  sceneDescription: `The table is covered in a deep purple cloth, stained and worn at the edges. Locked boxes of every size and shape are stacked and arranged across the surface — iron-banded trunks, tiny black cases bound in silver chain, carved wooden chests, and at least one thing wrapped entirely in chain with no visible lid. Lanterns hang from the posts on either side, casting uneven amber light across the locks and latches. Three hand-painted signs are nailed to the frame: "OPEN if you DARE." "WHAT YOU SEEK... MAY SEEK YOU." And at the front of the table, burned into a plank of wood in large letters: "CHOOSE WISELY — NO REFUNDS • NO QUESTIONS • ONLY CONSEQUENCES."`,

  owner: {
    name: "Unknown",
    race: "Unknown",
    age: "Unknown",
    appearance: `Appears to be female, though little can be confirmed. She wears an oversized hood pulled far forward, completely obscuring her face in shadow. Her robes are deep blue with intricate gold trim — well-made, but worn.`,
    greeting: `As you approach, a slightly scratchy and almost shaky voice emerges from beneath the hood: "Feeling lucky? All of these boxes have come from travelers, shipwrecks and other such mishaps… all of them locked with no idea of the contents. Beacon's smiths unable to unlock them." She waves her hands over the boxes as if inviting you to browse.`,
  },

  dmPrivate: {
    personality: `Everything she says sounds like a sales pitch. She thinks she's far better at it than she actually is. Her delivery is slightly off — a beat too eager, a touch too rehearsed — but she commits to it completely.`,
    desires: `Unknown. She reveals nothing of what she wants, and deflects any personal questions with a redirect back to the merchandise.`,
    fears: `Her true identity and past are extremely difficult to uncover. However, a player who makes a very high Perception check may notice something odd: she seems genuinely, subtly unsettled by some of her own boxes — particularly if a customer attempts to open one at the booth. She does not know what's in all of them. Some of these boxes she has never been able to open herself.`,
    identity: `Her exact race, name, and age are unknown and intentionally concealed. DM may reveal at their discretion.`,
    history: `Very difficult to discover — requires significant trust-building or investigation. If uncovered: Her husband was a thief who prided himself on lockpicking. He would steal lockboxes and jewelry boxes and store them in their home — a growing collection of unopened prizes. Until one day he was caught. She was spared, but her husband was executed for his thievery. She was left alone with a room full of lockboxes he had never successfully picked. So it became her business. She buys them. She sells them. She has never once opened one in front of a customer.`,
    lockpickNote: "All boxes have a DC 20 to lockpick.",
    questHooks: [
      {
        title: "Boxes That Won't Open",
        description: `As the players leave the booth, the merchant calls after them: "If you come across any boxes that you can't get open, just bring them here and I'll give you a fair price."`,
      },
    ],
    boxContents: [
      {
        boxName: "The Whisper Box",
        contents: [
          "14 gp in assorted silver",
          "Tiny silver ring shaped like intertwined snakes",
        ],
      },
      {
        boxName: "The Soldier's Burden",
        contents: [
          "Military shaving kit",
          "Flint and steel",
          "23 gp hidden in a false bottom",
        ],
      },
      {
        boxName: "The Perfumed Case",
        contents: [
          "Fine embroidered kerchief",
          "Lavender perfume vial",
          "Pair of silver earrings worth 15 gp",
        ],
      },
      {
        boxName: "The Coffin Coin",
        contents: [
          "One single platinum piece",
          `A folded note reading: "If you're holding this, I didn't make it home."`,
        ],
      },
      {
        boxName: "The Tinkerer's Mistake",
        contents: [
          "🔧 Clockwork Fire Beetle — A tiny mechanical beetle. Emits bright light 10 ft / dim 10 ft. Can crawl up walls. Lasts 1 hour per winding. Unlimited reuse.",
        ],
      },
      {
        boxName: "The Pilgrim's Relief",
        contents: [
          "Potion of Healing",
          "Small religious token",
          "Dried fruit wrapped in cloth",
        ],
      },
      {
        boxName: "The Noble's Regret",
        contents: [
          "Gold necklace worth 75 gp",
          "Small ruby ring",
          `Love letter, never sent. Reads: "I wanted you to know, I forgive you. And I still love you. I'll wait for you to come home if you can forgive me as well." — Marrion`,
        ],
      },
      {
        boxName: "The Hollow Prison",
        contents: [
          "🪵 Rootbound Grip (must be identified) — When placed against any natural wood or stone surface, sprouts roots and anchors to that surface, supporting up to 500 lbs. Only the owner can remove it.",
        ],
      },
      {
        boxName: "The Smuggler's Comfort",
        contents: [
          "Warm wool socks",
          "Pipeweed pouch",
          "Folding eating knife",
          "9 gp sewn into lining",
        ],
      },
      {
        boxName: "The Wanderer's Last Gamble",
        contents: [
          "🏹 Whisperwood Arrows (6) (must be identified) — Make no sound when fired. When something touches or steps on the object the arrows are embedded in, the owner feels a vibration in their bow.",
          "🧭 Pathfinder's Knot — A braided leather-and-wood charm. Once per dawn while traveling outdoors: reroll one Survival check or one navigation-related failed roll.",
        ],
        note: "The merchant refuses to haggle on this one.",
      },
    ],
  },

  boxes: [
    {
      name: "The Whisper Box",
      description: "A tiny black wooden box bound with thin silver chain. Barely heavier than a loaf of bread.",
      whenShaken: "Sounds like faint sliding sand… and occasionally something tapping from inside.",
      price: "8 gp",
    },
    {
      name: "The Soldier's Burden",
      description: "A rough military lockbox with iron corners and old water stains.",
      whenShaken: "Heavy thudding with a soft metallic clink.",
      price: "15 gp",
    },
    {
      name: "The Perfumed Case",
      description: "Polished walnut wood with tiny flower carvings burned into the lid.",
      whenShaken: "Almost silent except for soft fabric shifting.",
      price: "12 gp",
    },
    {
      name: "The Coffin Coin",
      description: "Long, narrow darkwood box wrapped in black cord.",
      whenShaken: "One single heavy thunk.",
      price: "20 gp",
    },
    {
      name: "The Tinkerer's Mistake",
      description: "Copper-banded box with mismatched hinges and scorch marks.",
      whenShaken: "Rapid clicking and rattling.",
      price: "25 gp",
    },
    {
      name: "The Pilgrim's Relief",
      description: "A plain box of pine, surprisingly lightweight.",
      whenShaken: "Liquid sloshing.",
      price: "18 gp",
    },
    {
      name: "The Noble's Regret",
      description: "Elegant redwood chest with velvet lining visible through cracks.",
      whenShaken: "Soft clinking like glass beads or gems.",
      price: "40 gp",
    },
    {
      name: "The Hollow Prison",
      description: "A thick ironwood cube wrapped entirely in chain.",
      whenShaken: "Nothing at all.",
      price: "55 gp",
    },
    {
      name: "The Smuggler's Comfort",
      description: "Flat rectangular box smelling faintly of pipe smoke and cedar oil.",
      whenShaken: "Muted shifting and leather creaking.",
      price: "14 gp",
    },
    {
      name: "The Wanderer's Last Gamble",
      description: "A beautifully carved chest bearing symbols of roads, stars, and campfires.",
      whenShaken: "A dull weight slides once… then stops.",
      price: "120 gp",
      note: "The merchant refuses to haggle on this one.",
    },
  ],
};
