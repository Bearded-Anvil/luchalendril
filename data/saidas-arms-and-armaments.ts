export const saidasArmsAndArmaments = {
  id: "saidas-arms-and-armaments",
  name: "Saida's Arms and Armaments",
  image: "/saidas-arms-and-armaments.jpg",

  sceneDescription: `The floors and walls of Saida's shop are sandstone-colored, plain and practical, and the ceiling is open to the A-frame rafters above — no decoration, no pretense. The shop is organized like someone who takes inventory seriously. Along one wall, mannequins stand in a line wearing every grade of armor from padded leather to full plate, shields mounted beside most of them. Along the other wall, glass-topped display cases run the full length, filled with daggers, knives, hand axes, and every kind of handheld weapon she stocks. Weapon racks are mounted above those cases — long swords, great swords, things that need the height. Down the center of the room, a rack holds the ranged weapons: bows, crossbows, sorted and displayed without drama. At the back of the room, a row of practice dummies lines the wall. They are there to be used. Saida expects it — she'd rather you test a weapon here than bring it back.

In the back left corner, a door. Above it, a sign: Serious Shoppers Only.`,

  owner: {
    name: "Saida Crackjaw",
    race: "Half-Orc (Female)",
    appearance: `Black hair braided down to her mid back. Built like someone who has carried a weapon their whole life and never once set it down lightly — muscular through the shoulders, forearms, everything. Olive-green skin. Still striking in form, though she shows no awareness of it and wouldn't care if you told her. She wears leather pants and a plain black shirt and looks at your hands when you pick something up.`,
  },

  mundaneInventory: {
    simpleWeapons: [
      { name: "Club", cost: "1 sp" },
      { name: "Dagger", cost: "2 gp" },
      { name: "Greatclub", cost: "2 sp" },
      { name: "Handaxe", cost: "5 gp" },
      { name: "Javelin", cost: "5 sp" },
      { name: "Light Hammer", cost: "2 gp" },
      { name: "Mace", cost: "5 gp" },
      { name: "Quarterstaff", cost: "2 sp" },
      { name: "Sickle", cost: "1 gp" },
      { name: "Spear", cost: "1 gp" },
    ],
    martialMeleeWeapons: [
      { name: "Battleaxe", cost: "10 gp" },
      { name: "Flail", cost: "10 gp" },
      { name: "Glaive", cost: "20 gp" },
      { name: "Greataxe", cost: "30 gp" },
      { name: "Greatsword", cost: "50 gp" },
      { name: "Halberd", cost: "20 gp" },
      { name: "Lance", cost: "10 gp" },
      { name: "Longsword", cost: "15 gp" },
      { name: "Maul", cost: "10 gp" },
      { name: "Morningstar", cost: "15 gp" },
      { name: "Pike", cost: "5 gp" },
      { name: "Rapier", cost: "25 gp" },
      { name: "Scimitar", cost: "25 gp" },
      { name: "Shortsword", cost: "10 gp" },
      { name: "Trident", cost: "5 gp" },
      { name: "War Pick", cost: "5 gp" },
      { name: "Warhammer", cost: "15 gp" },
      { name: "Whip", cost: "2 gp" },
    ],
    simpleRangedWeapons: [
      { name: "Light Crossbow", cost: "25 gp" },
      { name: "Dart", cost: "5 cp" },
      { name: "Shortbow", cost: "25 gp" },
      { name: "Sling", cost: "1 sp" },
    ],
    martialRangedWeapons: [
      { name: "Blowgun", cost: "10 gp" },
      { name: "Hand Crossbow", cost: "75 gp" },
      { name: "Heavy Crossbow", cost: "50 gp" },
      { name: "Longbow", cost: "50 gp" },
      { name: "Net", cost: "1 gp" },
    ],
    lightArmor: [
      { name: "Padded Armor", cost: "5 gp" },
      { name: "Leather Armor", cost: "10 gp" },
      { name: "Studded Leather Armor", cost: "45 gp" },
    ],
    mediumArmor: [
      { name: "Hide Armor", cost: "10 gp" },
      { name: "Chain Shirt", cost: "50 gp" },
      { name: "Scale Mail", cost: "50 gp" },
      { name: "Breastplate", cost: "400 gp" },
      { name: "Half Plate", cost: "750 gp" },
    ],
    heavyArmor: [
      { name: "Ring Mail", cost: "30 gp" },
      { name: "Chain Mail", cost: "75 gp" },
      { name: "Splint Armor", cost: "200 gp" },
      { name: "Plate Armor", cost: "1,500 gp" },
    ],
    shields: [
      { name: "Shield", cost: "10 gp" },
    ],
    ammunition: [
      { name: "Arrows (20)", cost: "1 gp" },
      { name: "Blowgun Needles (50)", cost: "1 gp" },
      { name: "Crossbow Bolts (20)", cost: "1 gp" },
      { name: "Sling Bullets (20)", cost: "4 cp" },
    ],
  },

  backRoom: {
    sign: "Serious Shoppers Only",
    dmNote: `Saida doesn't take everyone back here. She watches how people handle the weapons on the floor, listens to what they ask about, and decides. If someone's clearly window shopping, asking about the wrong things, or has coin she doesn't believe in, the door stays closed. If someone handles a weapon like they know what it's for and asks the kind of questions that suggest they've actually used one — she may unlock it. She won't explain her criteria.`,
    magicWeapons: [
      {
        name: "Sword of Magical Rebuke",
        cost: "2,000 gp",
        note: "Counts as a Longsword",
        description: "The bearer of this sword cannot cast spells while it is equipped. When a ranged spell attack is made at the bearer, they can attempt to roll an attack above the caster's spell DC. On success, the attack is struck harmlessly from the air. On a natural 20, it is sent back at the caster. On failure, the bearer takes the full effect as if the sword were not equipped.",
      },
      {
        name: "Hand Axe of Recall",
        cost: "1,750 gp",
        note: "Follows regular hand axe damage and weight",
        description: "A very plain-looking hand axe. After being thrown — whether it hits or misses — the owner may reach out and summon it back. The axe appears in their hand rather than flying back through the air.",
      },
      {
        name: "Hammer of Shattering",
        cost: "3,200 gp",
        note: "Follows stats and weight of a regular two-handed hammer",
        description: "When the bearer successfully hits a creature wearing armor, they may reduce the damage dealt by half. If they do, the creature's AC drops by 2 for the remainder of the fight — the armor is damaged and weakened by the blow.",
      },
      {
        name: "Club of Forceful Denial",
        cost: "2,400 gp",
        note: "Counts as a Club",
        description: "Twice per long rest, the bearer may choose to double their STR bonus after a successful hit. Furthermore, upon successfully wounding a creature, that creature is knocked 10 feet directly away from the bearer and falls prone.",
      },
      {
        name: "Tiga's Linked Daggers",
        cost: "1,000 gp",
        note: "Count as daggers. Sold as a pair.",
        description: "When held close together, the daggers vibrate faintly — drawn toward each other. When both daggers wound the same creature in the same combat round, they deal an extra D6+1 damage to that creature.",
      },
    ],
    magicArmor: [
      {
        name: "Deathward Breastplate",
        cost: "3,000 gp",
        note: "Counts as Plate Armor. One use per long rest.",
        description: "When the wearer falls to 0 HP, they instead fall to 1 HP. Furthermore, upon falling unconscious, they automatically pass their first death saving throw.",
      },
      {
        name: "Helm of Mental Intrusion",
        cost: "3,500 gp",
        note: "",
        description: "The wearer has advantage on all WIS saving throws.",
      },
      {
        name: "Shield of Redeployment",
        cost: "1,000 gp",
        note: "Counts as a Shield",
        description: "When the bearer steps away from combat, they gain a further +2 to their AC against any attacks of opportunity triggered by that movement.",
      },
      {
        name: "Shadowleather Vest",
        cost: "2,500 gp",
        note: "Counts as Leather Armor. 3 uses per long rest.",
        description: "The wearer can activate this blackened leather vest to hide in plain sight. A magical shadow appears on them, shaped as something of the wearer's choosing — a building in a city, a tree in the woods. The shadow is convincing enough to attempt hiding within it. Lasts 10 minutes or until the wearer moves out of the shadow.",
      },
    ],
  },
};
