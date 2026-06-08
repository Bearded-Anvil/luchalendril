export const stonejutTunnel = {
  id: "stonejut-tunnel",
  name: "Stonejut Tunnel",
  image: "/stonejut-tunnel.jpg",
  path: "/pine-loft/lonely-path-pines/southern-tract/stone-tunnel",

  sceneDescription: `The way down the side of the decline is slow going. Rocks push from the soil here and there, giving safer places to step and grab, but they are mostly slick from the moisture trapped beneath the canopy of pines. There is no path to follow — just fern and moss and small things that skitter beneath their leaves.

When you reach the place where the ground levels out, you can see the stone better. From what you can tell, it looks as though the massive stones aren't connected at the top. Rather, it looks as though they were once standing straight up from the ground and have fallen into each other, to rest there forever.

Looking through the tunnel, it appears to be nothing more than that — a dark cave of sorts with daylight nearly a hundred feet through. Some sort of moss dangles from the top of the stones, making black streaks through the visible light on the other side. Spiderwebs are here and there throughout, probably not having been disturbed in ages.`,

  dmNotes: [
    {
      trigger: `Passive Perception 14 or higher`,
      note: `The player may notice a few bones here and there in the greenery. Not everywhere, and not complete skeletons. Just bones — scattered, half-hidden, easy to miss.`,
    },
    {
      trigger: `Darkvision`,
      note: `A player with darkvision may notice that the ground throughout the tunnel is uneven — as if small pits and ditches run all the way through.`,
    },
  ],

  creature: {
    name: "Old Grushu",
    image: "/old-grushu.jpg",
    description: `Living inside the tunnel is an ancient beast — a monstrous centipede that has become one with the forest. Its torso's shell appears to have transformed into the bark of the very trees around it, and its hundred legs are now roots, twisted and bent, that drive into the soil beneath it while it rests.

When disturbed, Grushu stands tall, the front twenty-five to thirty legs lifting above the ground as it shrieks a terrifying shriek before attacking.`,
    dmNote: `While the attacks and abilities for this creature are listed here, the stats are yours to adjust depending on how hardy you'd like this ancient beast to be. Perhaps not a final boss — but definitely not something they hunt while learning their characters.`,
    stats: {
      STR: { score: 22, mod: "+6" },
      DEX: { score: 18, mod: "+4" },
      CON: { score: 20, mod: "+5" },
      WIS: { score: 14, mod: "+2" },
      INT: { score: 14, mod: "+2" },
      CHA: { score: 10, mod: "+0" },
    },
    hp: `DM's discretion depending on party level`,
    ac: 20,
    attacks: [
      {
        name: "Mandible Bite",
        range: "5 ft.",
        hit: "+8 to hit",
        damage: "2d10 + 5 piercing",
        special: {
          name: "Venom",
          description: `If a creature takes damage from the Mandible Bite, they must make a CON saving throw DC 17 or be envenomed. At the beginning of that creature's turn, they take 1d8 + 2 poison damage. At the start of each subsequent turn, they must make the DC 17 CON save again to resist the poison. On a failure, they take 1d8 + 2 again. This continues until the creature passes the save, or someone uses an antidote or a spell that removes venom or poison.`,
        },
      },
      {
        name: "Constricting Segments",
        range: "5 ft.",
        hit: "+8 to hit",
        damage: "1d10 + 6 bludgeoning",
        special: {
          name: "Grappled and Constricted",
          description: `A creature hit by Constricting Segments must pass a DC 18 STR or DEX saving throw or be grappled. At the beginning of each of their subsequent turns, they must pass a STR DC 18 check or be crushed for another 1d10 + 6 damage. Each time Old Grushu takes damage, the constricted creature may attempt to break free again — Grushu may be distracted.`,
        },
      },
    ],
    resistances: [`Slashing damage`, `Bludgeoning damage`],
    vulnerabilities: [`Fire damage`],
    loot: {
      onBody: {
        name: "Venom Gland",
        check: "Medicine DC 15",
        description: `A successful Medicine check allows the hero to remove the venom gland from Grushu's body. The gland yields 1d6 applications of venom. Each application deals an additional 1d8 damage when used on a weapon.`,
      },
      inTunnel: {
        description: `Searching through the tunnel reveals many more bones — human and otherwise. Digging around the area, the party finds a single spear, free from the muck that covers everything else.`,
        item: {
          name: "Spear of the Hunt",
          description: `A spear made for throwing, though it can be used for melee as well. When thrown, the spear streaks forward, speeding up until it makes contact with an object.`,
          effect: `Can be thrown twice as far as a regular spear. Deals 1d12 + 4 damage on a hit. If thrown beyond normal throw range, deals 2d12 + 4 damage instead.`,
        },
      },
    },
  },
};
