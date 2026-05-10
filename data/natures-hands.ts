export const naturesHands = {
  id: "natures-hands",
  name: "Nature's Hands",
  tagline: "Ask about a sample of our special.",
  street: "South Main Street",
  city: "Beacon",
  image: "/natures-hands.jpg",

  sceneDescription: `As you approach the booth, the young woman inside offers her accustomed smile. Her awning is light blue with gold trim, held up by cast iron tent poles with forged twists halfway up. The table is light wood with a matching blue runner the full length of it. A wooden crate sits on each back corner of the table, turned on its side to act as a shelf. Inside and atop each crate, and across the table between them, are bottles of every shape and height — reds, blues, greens, golds, blacks, colors that don't have an easy name. Behind where she stands, shelves reach nearly to the top of the tent, stacked with more bottles, mini stills, beakers, mixing bowls, and storage jars packed with ingredients. Near the far right edge of the table sits a small handwritten sign: "Ask about a sample of our special."`,

  owner: {
    name: "Villi Mooncrest",
    race: "Elf",
    age: "Young",
    appearance: `Long blonde hair and bright green eyes that seem to catch the light even in shade. Thin and lithe, she moves with a natural grace that isn't performed. She greets customers with a polite curtsy and a warm smile. Many who pass slow their step to get a second look. Some whisper that she must have an enchantment on her — but those are only rumors.`,
  },

  dmPrivate: {
    fears: `Villi has no shortage of suitors. Rich, poor, shady, and warmly honest — they find her without trying. But she no longer trusts any of them. So many have approached her, with so many hidden motives, that she has closed the door entirely. She even wears an enchanted necklace that prevents her from being tricked, seduced, charmed, or magically befriended in any way. She knows this about herself. It doesn't make it easier.`,
    goals: `Villi is genuinely warm — that part has never left. She wants to fall in love with someone who sees past what she looks like. But her walls are built high and she has broken more than a few hearts simply by being unable to let them in.`,
    questHooks: [
      {
        title: "Tyrin",
        description: `If it naturally comes up, Villi will mention a young elf male named Tyrin who has been speaking to her lately. She likes him. Something feels different. But she can't bring herself to trust it. She hints — not directly, but clearly enough — that she'd love for someone outside the situation to spend time near Tyrin when she isn't around and get a real read on who he is.`,
        dmNote: `Tyrin's true nature is yours to decide. He can be exactly what she hopes — patient, genuine, quietly in love with her — or he can be another manipulator with a motive. Either version has story in it. Run him however fits your campaign.`,
      },
    ],
    theSpecial: {
      signText: `"Ask about a sample of our special."`,
      sampleReadAloud: `At first, you feel a warmth moving down your throat — even though the liquid wasn't warm. You feel it reach your gut and expand as it coats the walls of your stomach. A moment passes as you feel a strange and overwhelming calm come over you. Any anxiety, confusion, anger, frustration… melts away and you find a peace settle over you. Your breathing slows, as does everything in your vision. And then you blink. When your eyes reopen, the world is in hues of gray — like darkvision — as you look at the street around you. But you notice glowing. The necklace around Villi's neck is glowing blue. Looking down the street, you see slight glows of different colors from many of the booths and several travelers. Your eyes find a large guard patrolling the street and you suddenly understand — this man is a masterful liar. That he is terrible at hiding pain. That he is very good with his sword. That he absolutely cannot tolerate extreme cold. That he is easily charmed, either by magic or the opposite sex. And as more information begins to flood in, you blink again — and color returns. Nothing is glowing. And Villi is there with her warm smile. "Welcome back. And that was just a sample."`,
      effect: `For 10 minutes, the drinker gains a true sight that negates negative emotions. They can see all magical items as glowing objects and, on a successful DC 15 Wisdom check, can identify what a glowing item does. They can also read details about any creature they observe — proficiencies, advantages, susceptibilities, and weaknesses. While active: the imbiber is slow to react. All attacks against them are made with advantage. Only normal movement speed is possible. The effect cannot be ended prematurely.`,
      price: "1,500 gp",
      stock: "5 in stock",
      note: "Villi pours a thimble-sized sample for free when asked. The full bottle is what she sells.",
    },
  },

  inventory: [
    {
      category: "Restoratives & Recovery",
      items: [
        {
          name: "Minor Healing Draught",
          stock: "6 in stock",
          description: "A small red vial tasting strongly of cherries and copper.",
          effect: "Restores 2d4 + 2 HP.",
          price: "25 gp",
        },
        {
          name: "Traveler's Healing Tonic",
          stock: "5 in stock",
          description: "A deeper crimson potion with faint gold flakes.",
          effect: "Restores 4d4 + 4 HP.",
          price: "90 gp",
        },
        {
          name: "Vitality Brew",
          stock: "10 in stock",
          description: "A thick orange liquid that feels warm even through the glass.",
          effect: "The drinker gains advantage on saving throws against exhaustion for 8 hours.",
          price: "70 gp",
        },
      ],
    },
    {
      category: "Enhancement Potions",
      items: [
        {
          name: "Giantroot Elixir",
          stock: "5 in stock",
          description: "A dark earthy mixture with tiny floating root fibers.",
          effect: "For 1 hour: gain +2 Strength (maximum 22).",
          price: "240 gp",
        },
        {
          name: "Owlmind Infusion",
          stock: "4 in stock",
          description: "A pale silver-blue liquid that smells faintly of mint.",
          effect: "For 1 hour: gain +2 Wisdom (maximum 22).",
          price: "240 gp",
        },
        {
          name: "Scholar's Distillation",
          stock: "3 in stock",
          description: "A perfectly clear potion in a square bottle.",
          effect: "For 1 hour: gain +2 Intelligence (maximum 22).",
          price: "240 gp",
        },
        {
          name: "Harefoot Mixture",
          stock: "4 in stock",
          description: "A bubbling yellow potion that fizzes constantly.",
          effect: "For 10 minutes: movement speed is doubled. After the effect ends: suffer a fatigue-like sluggishness for 10 minutes — movement reduced by 10 feet.",
          price: "310 gp",
        },
        {
          name: "Nightseer Extract",
          stock: "6 in stock",
          description: "A pitch-black liquid that reflects light strangely.",
          effect: "For 10 minutes: darkness appears nearly as clear as daylight. Magical darkness is unaffected.",
          price: "180 gp",
        },
      ],
    },
    {
      category: "Magical Utility Brews",
      items: [
        {
          name: "Mindwell Tonic",
          stock: "2 in stock",
          description: "A swirling violet potion that never settles.",
          effect: "Restores one expended spell slot of up to 3rd level. Only one Mindwell Tonic may benefit a creature per day — additional doses cause violent magical nausea and automatically fail.",
          price: "650 gp",
        },
        {
          name: "Purity Serum",
          stock: "1 in stock",
          description: "A bright white liquid suspended with glittering particles.",
          effect: "Can remove curses, neutralize poisons, restore dulled senses, end magical afflictions, and restore clarity to fractured minds. Cannot regrow limbs or resurrect the dead.",
          price: "1,250 gp",
        },
        {
          name: "Whisperoil",
          stock: "5 in stock",
          description: "A matte black oil stored in a flat tin flask. One application coats armor, boots, straps, or equipment.",
          effect: "For 8 hours: armor no longer imposes disadvantage on Stealth checks caused by noise. The oil dries away naturally afterward.",
          price: "190 gp",
        },
        {
          name: "Lockmelter Vial",
          stock: "8 in stock",
          description: "A smoking gray liquid kept behind a thick cork.",
          effect: "When poured into a mundane lock, the mechanism loosens and unlocks within seconds. Does not affect magical locks, puzzle locks, or mechanisms without key tumblers. Single use.",
          price: "120 gp",
        },
      ],
    },
    {
      category: "Exotic Brews",
      items: [
        {
          name: "Stoneblood Draft",
          stock: "3 in stock",
          description: "A heavy gray potion almost impossible to swirl.",
          effect: "For 1 hour: gain resistance to nonmagical bludgeoning damage. Movement speed reduced by 5 feet while active.",
          price: "420 gp",
        },
        {
          name: "Tongueleaf Essence",
          stock: "4 in stock",
          description: "A green potion with floating herb fragments.",
          effect: "For 1 hour: understand and speak simple phrases in nearly any spoken language. Complex technical or ancient texts are unaffected.",
          price: "140 gp",
        },
        {
          name: "Emberlung Tonic",
          stock: "10 in stock",
          description: "A smoky red liquid bottled warm.",
          effect: "For 10 minutes: immune to smoke inhalation, advantage on saves against inhaled fumes or gases.",
          price: "95 gp",
        },
        {
          name: "Ghostwater Philter",
          stock: "10 in stock",
          description: "A translucent pale-blue potion.",
          effect: "For 1 minute: leaves no footprints, creates no ripples in water, and grants advantage on Stealth checks involving movement.",
          price: "340 gp",
        },
      ],
    },
  ],
};
