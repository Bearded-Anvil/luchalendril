export const northwestBeaconStreet = {
  id: "northwest-beacon-street",
  name: "Northwest Beacon Street",
  image: "/northwest-beacon-street.jpg",

  sceneDescription: `The cobblestones here are the same as anywhere else in Beacon — same stone, same cut — but these haven't been swept in a while. Puddles sit in the low spots. Laundry hangs between upper floors. The buildings along both sides are timber-framed and leaning, the kind of structures that were built to last and then simply weren't maintained. Some have boards over windows. Most have their doors closed.

On a wall to the left, a City Watch posting — faded but legible: "Beacon. Protect Your Family. Report Suspicious Activity." Across the street, nailed to a post: a wanted notice. Fifty gold, dead or alive. Smuggling and theft. No name given, just a silhouette.

Down the length of the street, cranes are visible where the Warehouse District begins at the far end — dark against the sky, idle. The Dock Yard used to send traffic through here every day. It doesn't anymore.`,

  dmNotes: `Northwest Beacon Street used to be desirable. When the Warehouse District was active, this road was full of workers, carters, merchants, and their families. When the warehouses went quiet, the working people left, and the ones who stayed behind weren't always doing honest work.

The City Watch doesn't patrol here often. That's not an official policy — it's just the reality of a department stretched thin choosing where to spend its attention. Smugglers know it. Dealers know it. The remaining residents know it too, and most of them keep their heads down.

It isn't a place where violence breaks out in the open. It's a place where it's easier to move things you shouldn't be moving.`,

  encounter: {
    trigger: "1–2 or 18–20 on a D20",
    readAloud: `A strange figure steps directly into your path — what appears to be a half-lizard, half-man wearing a long brown coat that nearly drags the ground. He glances both ways and says in a hushed voice: "Looking for anything… unusual?" He opens his coat.`,
    dmNote: `He carries one of each item below per encounter. Stock resets each time the players pass through. This is the same merchant the players may have encountered on Southwest Beacon Street — he moves between both streets. He never offers his name and won't answer questions about himself.`,
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

  roads: [
    {
      name: "North Main Street Intersection",
      direction: "East",
      description: "Back to the intersection where North Main Street splits. Hattiswain Pawn is there.",
      status: "live",
      path: "/beacon/north-main-street-intersection",
    },
    {
      name: "Warehouse District",
      direction: "West",
      description: "The northern end of the Dock Yard. The cranes are visible from here.",
      status: "live",
      path: "/beacon/warehouse-district",
    },
  ],
};
