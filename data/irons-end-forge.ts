export const ironsEndForge = {
  id: "irons-end-forge",
  name: "Iron's End Forge",
  tagline: "Custom work only. No items for sale.",
  street: "Southwest Beacon Street",
  city: "Beacon",
  image: "/irons-end.jpg",

  sceneDescription: `The forge is a single-story building with no front wall and no front door — completely open to the street. One third of the frontage is a counter, as if there were a storefront, though there is no merchandise displayed. The remaining two thirds are open air, and anyone passing by can look straight inside. You can't help but shy away from the uncomfortable heat billowing out as multiple forges burn at once. A steady clink… clink… clink… sounds from smiths hammering at their work. Along the back and side walls hang swords, spear heads, axes, hammers, chains, hooks, long metal rods, wrenches, chisels, and dozens of other tools and projects in various states of completion. Overseeing the work is a shirtless red-headed dwarf, his body smeared and smudged with black soot, a long braided red beard hanging down his chest. A sign on the front counter reads: "Custom work only. No items for sale."`,

  owner: {
    name: "Drogga Fireheart",
    race: "Dwarf",
    age: "Seasoned",
    appearance: `A red-headed dwarf built like a stone wall — as muscular as you've ever seen a dwarf be. His long red beard is usually braided. His body carries the permanent marks of forge work: burn scars, soot, and the kind of hands that have shaped metal for decades.`,
  },

  dmPrivate: {
    fears: `Drogga fears his craft is dying — at least at his level. More and more people entering the trade are doing the bare minimum, unwilling to invest the years it takes to learn the advanced techniques that separate a smith from a master.`,
    goals: `His apprentice, Torgin Ironspout, who runs the booth at Splitting Hairs on South Main Street, is showing genuine potential. Drogga hopes to keep him inspired and push him toward mastery before his own forge days end.`,
    note: `Drogga is aware of Torgin's stall on South Main Street and checks in on him occasionally. Players who mention Torgin by name earn a slight warming in Drogga's otherwise blunt manner.`,
  },

  services: [
    {
      name: "Edge Honing",
      description: "Blade sharpening and edge refinement. Drogga reworks the cutting geometry of a weapon rather than simply grinding it sharper.",
      effect: "Weapon gains +1 damage on the next 1d8 successful attacks.",
      timeRequired: "Several hours",
      cost: "18 gp",
    },
    {
      name: "True Balance Reweighting",
      description: "Handle and weight redistribution for better weapon control. Particularly common for longswords, axes, throwing weapons, and warhammers.",
      effect: "Choose one: gain +1 to attack rolls on the first attack made each combat, OR reduce thrown weapon long-range disadvantage range by 5 feet. Effect lasts permanently unless the weapon is badly damaged.",
      timeRequired: "2 days",
      cost: "120 gp",
    },
    {
      name: "Reinforced Armor Riveting",
      description: "Additional reinforcement plates and structural improvements added beneath armor joints.",
      effect: "Once per long rest: reduce incoming nonmagical slashing, piercing, or bludgeoning damage by 3 from one attack.",
      drawback: "Armor weight increases slightly.",
      timeRequired: "3–4 days",
      cost: "240 gp",
    },
    {
      name: "Silent Strap Refitting",
      description: "Leather replacement, buckle wrapping, and movement dampening. Drogga despises noisy equipment.",
      effect: "Removes stealth disadvantage from chain shirts, breastplates, or similarly lighter metal armors. Heavy armor remains too loud to fully silence.",
      timeRequired: "2 days",
      cost: "180 gp",
    },
    {
      name: "Deep Tempering",
      description: "A dangerous reheating and cooling process that strengthens a weapon's fundamental durability.",
      effect: "Weapon becomes extremely resistant to rust, chipping, and breakage. Advantage on checks or saves involving weapon durability.",
      timeRequired: "5 days",
      cost: "150 gp",
    },
    {
      name: "Hook & Climb Modifications",
      description: "Custom utility additions for adventurers. Can include climbing hooks, hidden loops, rope rings, torch brackets, shield straps, belt clips, or saddle anchors.",
      effect: "Advantage on one relevant Athletics or Survival check per long rest involving the modification.",
      timeRequired: "1–2 days",
      cost: "75–140 gp depending on complexity",
    },
    {
      name: "Emberforge Temper",
      description: "Drogga's signature process. The metal is repeatedly heated in extremely hot forge coal mixed with powdered volcanic stone.",
      effect: "For one weapon: the first successful hit in combat deals an additional 1d4 fire damage. Effect refreshes after a short or long rest.",
      drawback: "Weapon grows noticeably warm during combat.",
      timeRequired: "1 full week",
      cost: "620 gp",
      note: "Drogga only accepts a few Emberforge commissions each season.",
    },
    {
      name: "Masterwork Commission",
      description: "A fully custom-forged weapon or armor piece. Drogga interviews the customer extensively before beginning — fighting style, dominant hand, posture, travel habits, armor preference, and temperament.",
      effect: null,
      options: [
        { benefit: "+1 to initiative", cost: "1,500 gp" },
        { benefit: "+1 damage on critical hits", cost: "1,000 gp" },
        { benefit: "Advantage on one weapon-related skill check type", cost: "1,600 gp" },
        { benefit: "Increase range on thrown weapons by 20 feet", cost: "1,500 gp" },
        { benefit: "Once per long rest, force a successful hit against the player to be rerolled. Second roll stands.", cost: "2,000 gp" },
      ],
      timeRequired: "2–4 weeks",
      cost: "1,200–3,500 gp",
    },
  ],
};
