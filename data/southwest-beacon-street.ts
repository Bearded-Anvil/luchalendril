export const southwestBeaconStreet = {
  id: "southwest-beacon-street",
  name: "Southwest Beacon Street",
  city: "Beacon",
  image: "/southwest-beacon-street.jpg",

  description: `Southwest Beacon Street is a wide, cobblestone road — broad enough for two horse-drawn wagons to pass each other without trouble. A sidewalk runs along both sides, separating foot traffic from the road. Most of the buildings lining the street are personal homes: timber-frame and cob construction, pressed shoulder to shoulder with barely an alley between them. The homeowners here take pride in their frontages — window boxes overflow with bright flowers on every ledge, and a handful of the upper floors have standing balconies trimmed in black wrought iron railing.

Halfway along the road, a squat, one-floor stone building breaks the rhythm of the homes. Plain gray walls, no decoration — but a wooden sign shaped like an anvil hangs from a black iron bracket over the sidewalk, reading "Iron's End Forge."

Further along, one building rises noticeably higher than its neighbors — five floors to everyone else's three. A sign in elegant lettering reads "The Traveler's Nest," and below it in plainer text: "Long Term Housing For Rent."`,

  dmNotes: `Southwest Beacon Street is primarily residential. It is quieter than South Main Street but not empty — residents go about their lives, carts make deliveries, and foot traffic moves between the intersection and the dockyard. The street has character. Use it.`,

  locations: [
    { name: "Iron's End Forge", status: "coming-soon", path: "/beacon/southwest-beacon-street/irons-end-forge" },
    { name: "The Traveler's Nest", status: "coming-soon", path: "/beacon/southwest-beacon-street/travelers-nest" },
  ],

  encounters: {
    instruction: `When players travel this street without fast traveling, have one of them roll a D20. On a 1 or a 20, roll a D6 on the chart below. Both results use the same table.`,

    onOne: [
      {
        result: 1,
        title: "She's Got My Baby",
        oneTime: true,
        afterText: "Once this encounter has occurred, treat future rolls of 1 as Result 3 — The Shady Merchant.",
        readAloud: `As you're walking the street, you hear a woman cry out "He's got my baby!" Scanning the crowd, you see a rough-looking half-orc man carrying a small halfling child — probably four or five years old — hurrying toward you, knocking people aside with a look of pure panic on his face.`,
        dmNote: `Scale this man to be a small challenge for the party's level. At level 5 or higher, he poses little real threat. If the players save the child, read the following.`,
        resolution: `The mother runs up and drops to her knees to grab the child. Wiping tears from her eyes, she says "Thank you all so much. I don't know how to thank you enough." Guards arrive and take hold of the half-orc. One of them looks your party over and starts to say something — but the mother cuts him off. "These people just saved my child from that monster. If it wasn't for them, you'd be putting up a missing child poster around town." That silences him. He gives you a respectful nod before turning back to his work. The mother looks back to you. "I don't have much to give you… but I do have this, if you want it. I think I've pretty much memorized it anyway."`,
        reward: `She hands you a book titled "Useful Herbs and Plants of Luchalendril" — a plant identification guide that grants advantage on checks to search an area for useful local plants.`,
        rewardNote: `A comprehensive guide to plant life in each region of Luchalendril will be released as the world expands.`,
      },
      {
        result: 2,
        title: "Care to Try Your Luck?",
        readAloud: `As you walk the sidewalk, a boy around twelve years old catches your eye. He gives you a grin and juggles a few dice in one hand. "Care to try your luck?"`,
        dmNote: `The player and the DM (as the boy) take turns rolling one die at a time until either side rolls a 6. When the 6 is rolled, both sides stop immediately and add up their results. The higher total wins, and the winner collects however much the player bet. If any player questions the results or refuses to pay, a large bald man covered in tattoos and scars steps out of a nearby alley holding a heavy club. Scale him as needed to be a credible threat at early levels. If players attempt a Perception check to see if the boy is cheating — no matter the result — the answer is the same: as far as anyone can tell, he isn't cheating in any way. Because he isn't.`,
      },
      {
        result: 3,
        title: "The Shady Merchant",
        readAloud: `A strange figure steps directly into your path — what appears to be a half-lizard, half-man wearing a long brown coat that nearly drags the ground. He glances both ways and says in a hushed voice: "Looking for anything… unusual?" He opens his coat.`,
        dmNote: `He carries one of each item below per encounter. Stock resets each time the players pass through.`,
        items: [
          {
            name: "Blackwake Powder",
            description: "A tiny paper twist filled with dark gray powder.",
            effect: "When inhaled: gain advantage on Initiative rolls for 1 hour. Immune to magical sleep during that time.",
            sideEffect: "After the effect ends: disadvantage on Wisdom checks for 2 hours due to paranoia and agitation.",
            price: "18 gp",
          },
          {
            name: "Red-Eye Brew",
            description: "A tiny bottle of harsh crimson liquor.",
            effect: "When consumed: gain +2 bonus to Intimidation checks for 1 hour. Ignore the frightened condition for 10 minutes.",
            sideEffect: "During the duration: disadvantage on Persuasion checks. Temper becomes noticeably shorter.",
            price: "22 gp",
          },
          {
            name: "Grave Salt",
            description: "A small tin of gray-black salt.",
            effect: "Thrown into a flame: creates thick smoke in a 10-foot radius for 1 minute.",
            sideEffect: "Anyone within the smoke coughs violently — including the user. Constitution save or suffer disadvantage on Perception checks relying on hearing for 1 minute.",
            price: "12 gp",
          },
          {
            name: "Sparkbite Vials",
            description: "Glass vials full of unstable yellow liquid.",
            effect: "Thrown up to 20 feet: explodes in sparks and fire, dealing 2d6 fire damage in a 10-foot radius.",
            sideEffect: "On a natural 1 during the throw: the vial detonates in the thrower's hand.",
            price: "35 gp each",
          },
          {
            name: "Whisperleaf Chew",
            description: "A folded packet of bitter green leaves.",
            effect: "Chewing grants advantage on Stealth checks involving movement for 30 minutes.",
            sideEffect: "Speech becomes slurred and whispery. Disadvantage on verbal Charisma checks while active.",
            price: "9 gp",
          },
          {
            name: "Lockjaw Oil",
            description: "A black oil in a narrow tube.",
            effect: "Applied to locks, hinges, chains, or doors — makes them nearly silent for 1 hour.",
            sideEffect: "The oil smells awful. Tracking creatures gain advantage on Survival checks to follow the scent for several hours.",
            price: "15 gp",
          },
          {
            name: "Flash Caps",
            description: "Tiny clay capsules filled with reactive powder.",
            effect: "Thrown at the ground: produces a blinding flash. Creatures within 10 feet must make a Constitution save or be blinded until the end of their next turn.",
            sideEffect: "The user is not immune if looking toward the blast.",
            price: "28 gp for 3",
          },
          {
            name: "Hushwater",
            description: "A dark blue liquid in a flat bottle.",
            effect: "When swallowed: footsteps become nearly silent for 10 minutes. Advantage on Stealth checks involving movement.",
            sideEffect: "Voice also becomes extremely faint. Disadvantage on shouted communication or verbal spellcasting clarity.",
            price: "40 gp",
          },
          {
            name: "Corpsewax Candles",
            description: "Short gray candles wrapped in cloth. Burns with almost no visible light.",
            effect: "Useful for hidden camps, signaling, or secret meetings.",
            sideEffect: "The wax smells strongly of decay while burning.",
            price: "7 gp each",
          },
          {
            name: "Razorwire Coin",
            description: "A fake gold coin with tightly wound wire hidden inside.",
            effect: "As an action: release 15 feet of nearly invisible razor wire. Useful for traps, trip lines, or escapes.",
            sideEffect: "Deploying it safely requires a Dexterity check. Failure causes minor cuts to the user.",
            price: "45 gp",
          },
          {
            name: "Devil's Courage",
            description: "A thick black liquid carried in tiny corked bottles.",
            effect: "For 1 minute: gain resistance to fear, advantage on Strength checks, and ignore pain from minor wounds.",
            sideEffect: "Afterward: suffer one level of exhaustion. Many users become emotionally volatile while under its effects.",
            price: "75 gp",
          },
        ],
      },
      {
        result: 4,
        title: "Found Coin",
        dmNote: `Each player makes a Perception check. Whoever scores highest spots a coin purse lying beside the sidewalk. There is nothing to identify the owner. Inside: 10 gp.`,
      },
      {
        result: 5,
        title: "The Gnome's Broken Wagon",
        readAloud: `As you go to pass a horse-drawn wagon stopped in the road — filled with vegetables and wicker baskets — you notice an older gnome dressed in overalls and a wide straw hat, crouched beside the back wheel examining a broken axle. He looks up as your group passes. "Wait! Can you help me lift the corner of my wagon? I'm stuck here and there's no way I can do it myself."`,
        dmNote: `Lifting the back corner while he changes the axle is an Athletics check, DC 12. If a teammate assists, the rolling player gains advantage. Once the wagon is repaired, read the following.`,
        resolution: `The farmer beams. "Oh my, thank you so much. I was in a PINCH!" He climbs into the back of the wagon, rummages around, and hands down a small basket. "Here. It isn't much but it's what I have. Thank you again!"`,
        reward: `The party receives 8 uses of Rest Herb. Consuming 1 use removes one point of exhaustion.`,
      },
      {
        result: 6,
        title: "The Foxfolk Beggar",
        readAloud: `You hear a soft rattle. On the sidewalk, a Foxfolk sits hunched forward — ragged clothing, matted fur, one hand pressed to their back as if aching, the other holding a tin cup toward passersby.`,
        dmNote: `If the players put coin into the cup, read the following.`,
        resolution: `His eyes brighten slightly as he looks at the coin. "Ah, thank you kindly, my new friends." He leans in a little closer and says quietly: "Beacon's Ghosts appreciate your kindness — and they never forget." He gives a small nod across the street. When you look to see what he's pointing at, you see nothing unusual. When you look back, the fox is gone without a trace.`,
        rewardNote: `Beacon's Ghost is one of the names for the Thieves' Guild in Beacon. If the players encounter the guild in the future, remember this moment — lower DC checks slightly and have the guild be more willing to work with them.`,
      },
    ],

    onTwenty: "same", // Uses the same D6 chart as a roll of 1
  },
};
