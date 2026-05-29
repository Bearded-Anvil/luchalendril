export const splittingHairs = {
  id: "splitting-hairs",
  name: "Splitting Hairs",
  tagline: "A blade for every purpose. An edge for every fight.",
  street: "South Main Street",
  city: "Beacon",
  image: "/splitting-hairs.jpg",

  sceneDescription: `As you approach, the first thing you can't help but notice is that the table is a carved giant wooden anvil. Both front tent poles are wooden hammers — their heads at the top, their handles forming the poles. No cloth or table runner here, and the top of the wood is perfect, without a single blemish, coated to a shine so deep it may as well be a real anvil. Carefully placed the full length of the table are all sorts of knives and daggers — combat daggers, fishing knives, skinning knives, throwing knives, assassin's daggers. Two racks in the back of the tent are loaded with axes of every kind: throwing axes, butterfly axes, hatchets, tomahawks, hammerhead axes, and more.`,

  owner: {
    name: "Torgin Ironspout",
    race: "Dwarf",
    age: "Young",
    appearance: `A sturdy young dwarf with a blonde mohawk and a braided blonde beard to match it, hanging down to his belt. Well muscled and shirtless, his bright blue eyes peer out from a tough face. His hands are rough and calloused from years of work at Beacon's forge, and his arms make clear he knows how to swing a hammer.`,
  },

  dmPrivate: {
    fears: `Torgin doesn't have many fears. If any, he worries that he won't be able to smith as well as his teacher, Drogga Fireheart — that when the time comes, he won't be ready to fill those boots.`,
    goals: `Torgin wants to absorb everything Drogga Fireheart can teach him and take his place as Beacon's most celebrated smith when Drogga eventually retires. He is patient about it. He knows the work will get him there.`,
    questHooks: [
      {
        title: "Drogga's Forge",
        description: `Torgin speaks freely about his teacher, Drogga Fireheart, if asked. He is proud of the connection and not shy about it. This is an easy thread for players to pull if they want access to Beacon's forge, need custom smithing work done, or are looking for someone who knows the city's metalworking history.`,
        dmNote: `Drogga Fireheart has not yet been built out. Use Torgin as an introduction point. When players ask to meet Drogga, keep it warm but vague until the forge location and character are established.`,
      },
    ],
  },

  inventory: [
    {
      mundane: {
        name: "Riverknife",
        description: "A narrow-bladed fishing and utility knife with a hooked gutting edge. Ideal for cleaning fish, cutting rope, and skinning small game.",
        price: "9 gp",
      },
      enchanted: {
        name: "Razorwake Riverknife",
        description: "The edge carries a faint blue shimmer when wet.",
        effect: "The first successful hit made after drawing the blade deals an additional 1d4 slashing damage. Effect refreshes after a short or long rest.",
        price: "95 gp",
      },
    },
    {
      mundane: {
        name: "Throwing Hatchet",
        description: "A compact balanced axe wrapped in dark leather. Designed for short-range throwing.",
        price: "7 gp",
      },
      enchanted: {
        name: "Returning Crow Axe",
        description: "A blackened throwing axe engraved with tiny feather patterns.",
        effect: "Once per short rest: after being thrown, the axe returns to the wielder's hand at the end of the turn if unobstructed.",
        price: "240 gp",
      },
    },
    {
      mundane: {
        name: "Assassin's Dagger",
        description: "A matte steel dagger designed to avoid reflecting light. Favored by scouts, rogues, and gamblers who lose arguments.",
        price: "18 gp",
      },
      enchanted: {
        name: "Whisperfang Dagger",
        description: "The blade seems unnaturally silent when cutting air.",
        effect: "Advantage on Dexterity (Stealth) checks made immediately after striking a creature with this weapon. Effect usable once per short rest.",
        price: "310 gp",
      },
    },
    {
      mundane: {
        name: "Sharpening Stone",
        description: "A dense gray whetstone with leather wrap.",
        price: "4 sp",
      },
      enchanted: {
        name: "Grindstone of the Keen Edge",
        description: "A smooth black stone veined with silver.",
        effect: "After spending 1 minute sharpening a blade, the weapon gains +1 damage on its next 1d4 successful attacks. May only affect a weapon once per short or long rest.",
        price: "110 gp",
      },
    },
    {
      mundane: {
        name: "Skinner's Knife",
        description: "A broad curved knife meant for removing hides cleanly.",
        price: "5 gp",
      },
      enchanted: {
        name: "Hunter's Mercy Skinner",
        description: "The blade never seems to catch or drag.",
        effect: "Advantage on Survival checks made to harvest hides, meat, or monster parts.",
        price: "82 gp",
      },
    },
    {
      mundane: {
        name: "Tomahawk",
        description: "A lightweight axe with a long throwing handle.",
        price: "10 gp",
      },
      enchanted: {
        name: "Splitwind Tomahawk",
        description: "Tiny grooves along the blade whistle softly during flight.",
        effect: "Once per turn when thrown: ignore disadvantage from medium range.",
        price: "175 gp",
      },
    },
    {
      mundane: {
        name: "Blade Oil Kit",
        description: "A leather pouch containing polishing cloths and protective oils. Prevents rust and weather damage.",
        price: "6 sp",
      },
      enchanted: {
        name: "Emberoil Weapon Grease",
        description: "The oil smells faintly of smoke and cloves.",
        effect: "As a bonus action, coat one weapon. For 1 minute the weapon sheds faint ember sparks and deals an additional 1 fire damage on successful hits. Usable once per long rest.",
        price: "160 gp",
      },
    },
    {
      mundane: {
        name: "Wolf Trap",
        description: "Heavy iron jaws attached to chain and spike.",
        price: "6 gp",
      },
      enchanted: {
        name: "Ironbite Snap Trap",
        description: "The inner teeth twitch slightly when armed.",
        effect: "When triggered: creatures suffer disadvantage on the first attempt to escape the trap.",
        price: "88 gp",
      },
    },
    {
      mundane: {
        name: "Butterfly Axes",
        description: "A matched pair of slim hand axes balanced for speed.",
        price: "14 gp",
      },
      enchanted: {
        name: "Twinfang Axes",
        description: "The pair bears matching silver wolf-head pommels.",
        effect: "If both axes hit the same target in one turn, the second hit deals an additional +2 damage.",
        price: "285 gp",
      },
    },
    {
      mundane: {
        name: "Piton & Climber's Hammer Set",
        description: "Iron spikes with a sturdy travel hammer.",
        price: "1 gp",
      },
      enchanted: {
        name: "Stonegrip Climber's Set",
        description: "The pitons vibrate faintly when driven properly.",
        effect: "Advantage on Athletics checks related to climbing secured surfaces prepared with this kit.",
        price: "90 gp",
      },
    },
  ],
};
