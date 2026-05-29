export const theHook = {
  id: "the-hook",
  name: "The Hook",
  tagline: "Fresh Catch · Smoked Fish · Toxins and Venoms",
  street: "Dock Yard",
  city: "Beacon",
  image: "/the-hook.jpg",

  sceneDescription: `The booth is built like a wooden box — about twelve feet long and ten feet tall, open at the front with a wide serving window and a door cut through the back wall. Along the back wall, fish of every shape hang suspended: fat ones, nearly round; long thin ones; a few with scales that look like they were carved from stone. On the left side of the counter, an enormous fish hangs from a hook in the roof by its tail, its lips reaching all the way down to the counter surface. Two blades are buried in the countertop — a butcher's knife and a meat cleaver — the wood around them scarred from years of the same.

On the right side of the counter, a wooden box holds paper-wrapped parcels of fish. A hand-lettered sign reads: "Smoked fish! Great for road snacks." In the center of the counter, a flat wooden tray holds rows of small glass vials in a grid of round holes — five across, ten deep — each bottle corked and dark. A sign nailed to the front of the tray reads: Toxins and Venoms.`,

  owner: {
    name: "Burley Mackrin",
    race: "Human",
    age: "Middle-aged",
    appearance: `A solidly built man standing close to six feet, with long shaggy black hair that hangs over his eyes and a dirty beanie pulled down over it. He wears an olive green vest that hangs open over bare skin. His hands are scarred. He moves around the booth with the ease of someone who has spent a lifetime handling things most people don't want to touch.`,
  },

  dmPrivate: {
    fears: `After years on the water and too many close calls with what lives beneath it, Burley refuses to go back out. He still makes his living from fish — he just pays other people to bring them to him now. He does not talk about why. He won't be asked twice.`,
    goal: `There is a fish Burley wants more than anything. Most of the men he hires don't believe it exists. But Burley swears he had it — felt the weight of it in the net, watched it come up toward the surface — and then it slipped free. Its scales were gold. Not gold-colored. Gold. He is more worried about saving face than the fish at this point, and he's willing to pay twice what such a fish would be worth just to have it brought to him.`,
    questNote: `This quest becomes available when the White Bay content opens. Until then, Burley may mention the fish offhandedly if players ask what he's looking for, but he won't formally offer the commission.`,
  },

  fishInventory: [
    {
      name: "Dried Hungerfish",
      description: "Preserved and dried. Plain-tasting but filling beyond reason.",
      effect: "If the consumer's only meal of the day is a Hungerfish, it counts as a full day's rations with no hunger penalties.",
      cost: "1 gp",
      stock: 10,
    },
    {
      name: "Dried Stoutfish",
      description: "Dense, heavily salted fish. Dockworkers eat these before long shifts.",
      effect: "The consumer gains 10 temporary HP lasting until the next long rest.",
      cost: "2 gp",
      stock: 4,
    },
    {
      name: "White Bay Fish Strips",
      description: "Smoked, seasoned, and wrapped in paper. Burley's most popular product. The sign on the box is right — they are good on the road.",
      effect: "Each strip counts as one ration and one meal.",
      cost: "5 sp",
      stock: 20,
    },
  ],

  itemsInventory: [
    {
      name: "Fish Hooks",
      description: "Standard iron hooks, sold in sets of ten.",
      effect: "Must have fish hooks in your inventory to attempt fishing.",
      cost: "1 gp per set of 10",
      stock: 30,
    },
    {
      name: "Glitter Scale Bait",
      description: "A hook threaded with three strings of scales from the Glitter Scale Fish. When light catches them, they flash with something almost magical. It isn't — just reflection — but it's convincing enough that a DC 13 WIS save is required to not be distracted. Large fish love them.",
      effect: "Advantage on fishing skill checks made in White Bay. The bait is consumed on use.",
      cost: "2 gp",
      stock: 2,
    },
  ],

  venomInventory: [
    {
      name: "Bloat Fish Venom",
      description: "The Bloat Fish's bite sends venom through its victim, causing swelling throughout the body — bloated, agonized, and immobilized.",
      weaponUse: "May be applied to any weapon. Affects the next 1d4+1 successful attacks.",
      effect: "Wounded creatures must make a CON saving throw, DC 15, or begin bloating. On a failed save, the creature takes 1d8 damage immediately, and again at the end of each following turn. At the beginning of each subsequent turn, the creature may attempt the CON DC 15 save again to resist the venom. Once resisted, the effect ends unless the venom is reapplied.",
      cost: "175 gp",
      stock: 2,
    },
    {
      name: "Slumberfish Venom",
      description: "The Slumberfish's bite fills its victims with extreme weariness — often putting them to sleep while they drown.",
      weaponUse: "May be applied to any weapon. Affects the next 1d4+1 successful attacks.",
      effect: "Deals no additional damage. Wounded creatures must make a CON saving throw, DC 14, or fall asleep. Any damage dealt to the sleeping creature wakes it. At the start of each subsequent turn, the sleeping creature may attempt the CON DC 14 save to wake. Once resisted, the effect ends unless the venom is reapplied.",
      cost: "125 gp",
      stock: 3,
    },
    {
      name: "Berserkerfish Venom",
      description: "Victims of the Berserkerfish's bite enter severe confusion — thrashing and attacking anything near them without reason or control.",
      weaponUse: "May be applied to any weapon. Affects the next 1d4+1 successful attacks.",
      effect: "Deals no additional damage. Wounded creatures must make a WIS saving throw, DC 14, or immediately turn on the nearest living creature and attack with full aggression — attempting to kill it. At the end of each of its consecutive turns, the creature may attempt the WIS DC 14 save to resist. Once resisted, the effect ends unless the venom is reapplied.",
      cost: "250 gp",
      stock: 2,
    },
  ],
};
