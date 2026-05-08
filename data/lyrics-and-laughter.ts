export const lyricsAndLaughter = {
  id: "lyrics-and-laughter",
  name: "Lyrics and Laughter",
  tagline: "Music for the Soul, a Song for Every Tale.",
  street: "South Main Street",
  city: "Beacon",
  image: "/lyrics-and-laughter.jpg",

  sceneDescription: `A black cloth drapes the long table, embroidered with a golden lyre at its center and trimmed in gold fringe. Instruments of every kind line the front — harps, fiddles, lutes, a banjo, a horn, a mandolin — each on its own small stand. Behind them, a wooden shelf unit holds rows of smaller goods: reeds, strings, picks, pipes, and things harder to identify. A banner hangs to the left reading "Songs Tell Stories — Music Creates Magic." A small placard on the right reads "Every note has power. Every song has a purpose." Behind the table, a young-looking half-elf with long blonde hair and a winning smile notices you approaching and opens his arms wide in welcome.`,

  owner: {
    name: "Alvin Munst",
    race: "Half-Elf",
    age: "Young-looking",
    appearance: `Long blonde hair, mid-back, hanging loosely. Very handsome but not heavily muscled or masculine. His face is cleanly shaven. Blue eyes peer out between strands of long blonde hair that hang here and there in front of his face. He has a very winning smile that he especially flashes towards any ladies that approach.`,
    history: `Alvin is a traveling bard — but not so much an adventurous one as far as danger goes. He has spent much of his life avoiding real physical labor by using his many musical instrument proficiencies to earn coin. His "travels" have been less about adventure and danger and more about entertaining caravans as they make long treks across Luchalendril. And then, after earning and spending coin in taverns and brothels across the land, he returns home with another caravan, to Beacon, where he sells his instruments and sings fanciful, mostly exaggerated stories about his travels.`,
  },

  dmPrivate: {
    personality: `Alvin pitches himself as an adventurer, a brave magic user who has saved princesses, defeated evil at every turn, and who has damsels awaiting his return in every city across Luchalendril. He is charming, theatrical, and completely full of himself — and yet somehow still likeable. He performs even when he isn't performing.`,
    desires: `For all of his lies, Alvin does genuinely wish he had the courage to actually adventure and see heroics — to do them, even. At some point, he hopes to have the bravery to join a group on daring adventures so that his tales will be true and he no longer has to fear being discovered as a fraud.`,
    fears: `Alvin is a fraud. Not so much in his business practices — his instruments are genuine and his prices fair — but a fraud in his life. He fears that one day the truth will get out about who he really is. He even weaves a bit of magic into his songs about his own phony adventures to make sure others believe it more than they normally would.`,
    questHooks: [
      {
        title: "The Reluctant Adventurer",
        description: `The DM should be careful to never place a level on Alvin. Rather, when Alvin is asked to join the players on a quest as a guest NPC, the DM should scale him to fit the party or be slightly weaker to represent his inexperience. His pitch could look something like: "Oh you look to be adventurers!" Then a nervous look. "One day I hope to maybe join you… if you have room on one of your… less dangerous adventures."`,
      },
    ],
  },

  inventory: [
    {
      name: "Lute",
      description: "A versatile string instrument with a rich, warm tone.",
      price: "15 gp",
    },
    {
      name: "Lyre",
      description: "A classic favorite of bards and poets.",
      price: "25 gp",
    },
    {
      name: "Fiddle (Violin)",
      description: "Perfect for lively tunes or sorrowful ballads.",
      price: "30 gp",
      quote: "This one's good for a fast and lively dance or a slow and lovely cry.",
    },
    {
      name: "Flute",
      description: "A light woodwind with a sweet, clear sound.",
      price: "10 gp",
    },
    {
      name: "Pan Flute",
      description: "Pipes of varying lengths that sing in harmony.",
      price: "12 gp",
    },
    {
      name: "Hand Harp",
      description: "Small and portable, yet beautifully resonant.",
      price: "35 gp",
    },
    {
      name: "Horn",
      description: "Bold and brassy, made to be heard.",
      price: "20 gp",
      quote: "A fine instrument… but just to be fair, it isn't easy to play it quietly.",
    },
    {
      name: "Banjo",
      description: "Cheerful, bright, and full of character.",
      price: "15 gp",
    },
    {
      name: "Mandolin",
      description: "Quick and nimble, ideal for fast fingers.",
      price: "18 gp",
    },
    {
      name: "Drum (Hand)",
      description: "A steady rhythm in the palm of your hand.",
      price: "8 gp",
      quote: "Sometimes these little guys need someone to sing along. Good for setting a rhythm more than providing all of the entertainment.",
    },
  ],

  magicItems: [
    {
      name: "Strings of Distraction",
      description: "When played, chance to distract one living creature that can hear the music.",
      effect: "Wisdom save DC 13. Can be added to any stringed instrument — one you buy here or one you bring in yourself.",
      price: "750 gp",
      quote: "I can add these to just about any stringed instrument. Whether you buy one of mine or provide your own. Play it at the right time and you can distract a guard, interrupt a spell… so many uses.",
    },
    {
      name: "Virtuoso's Glove",
      description: "While worn, you have advantage on ability checks made to play stringed instruments.",
      effect: "Advantage on all stringed instrument ability checks.",
      price: "1,200 gp",
      quote: "I swear I could put this glove on a cave troll and it would be playing in the local pubs by nightfall.",
    },
    {
      name: "Whistle of the Whispered Word",
      description: "Speak a short message through the whistle. Only the intended creature within 120 feet and line of sight can hear it.",
      effect: "Unlimited uses. Target must be within 120 ft and line of sight.",
      price: "850 gp",
      quote: "Maybe not as powerful as a message spell… but then again, you can use it as many times as you'd like.",
    },
    {
      name: "Chord of Inspiration",
      description: "Once per day, as a bonus action, play a note to grant one ally inspiration without counting towards your limit.",
      effect: "Bard Only. 1/day bonus action.",
      price: "1,500 gp",
    },
    {
      name: "Songkeeper's Lute",
      description: "A +1 lute that grants a +1 bonus to spell save DCs for Bard spells while attuned.",
      effect: "Bard Only. Requires attunement.",
      price: "2,500 gp",
    },
    {
      name: "Mantle of Melodic Presence",
      description: "While performing, you gain advantage on Charisma (Performance) checks made to entertain or influence.",
      effect: "Bard Only.",
      price: "2,200 gp",
      quote: "Ah this one. Let me tell you from experience, it's hard for them to take their eyes off of ya while you're wearing it.",
    },
    {
      name: "Ever-Tuning Pegs",
      description: "These pegs keep your instrument perfectly tuned. No need to tune it, ever.",
      effect: "Passive. Fits any stringed instrument.",
      price: "600 gp",
    },
    {
      name: "Wind Chime of Echoes",
      description: "When struck (or by wind), plays a random soothing melody in a 15-foot radius for 1 minute.",
      effect: "Wisdom save DC 13 or calms any emotions in the vicinity.",
      price: "900 gp",
      quote: "Many a night this one has calmed us. Nights of fear… anxiety… sadness…",
      quoteNote: "Alvin stares off into space for a moment, then shakes it off. You half suspect he may be exaggerating until you notice the redness around his eyes.",
    },
    {
      name: "Resounding Resonator",
      description: "Attach to any instrument. Your music carries farther — doubles the normal distance it can be heard and increases bardic spell range by 20 feet.",
      effect: "Doubles audible range. +20 ft to bardic spell range.",
      price: "1,500 gp",
      quote: "Sometimes, you just want to make sure you're heard. Become the person that cannot be ignored.",
      quoteNote: "He smiles.",
    },
  ],
};
