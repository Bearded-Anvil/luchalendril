export const lonelyPinesHowlers = {
  id: "lonely-pines-howlers",
  name: "The Howlers",
  image: "/howlers.jpg",
  path: "/pine-loft/lonely-path-pines/the-ruins/howlers",

  sceneDescription: `The ruins feel empty at first. More than empty — still. No birdsong, no rustling in the undergrowth, nothing moving in the canopy above. Just the creak of old stone settling, and somewhere far off, the sound of wind through the pines.

You might notice the scat before you notice anything else. Small piles of it, dark and wet, pressed into crevices in the stonework. A print in the soft ground near a collapsed wall — five digits, wide-spread, with something that dragged behind it.

And then, high in the trees, something shifts. A branch bends. A shape moves that you almost didn't see.

It was watching you before you ever arrived.`,

  dmNote: `Howlers live in the canopy above the ruins. They are almost never alone — they travel in loose packs spread across a wide area, each one covering its own stretch of territory but within earshot of the others. At rest, they are nearly invisible in the upper branches. They do not come down unless they are feeding.

The ruins are their territory. Anyone who enters is prey, or close enough to it.`,

  stealth: {
    title: "Moving Through the Ruins",
    description: `Stealth checks should be called periodically as the party explores — not once at the entrance and never again. The Howlers are spread throughout the ruins, and a group that slipped past one may still be spotted by another fifty yards deeper in.

A reasonable approach is to call for a check at each new location or area the party enters. The DM decides when the environment changes enough to warrant it.

Certain actions should always trigger a new check regardless of where the party is:
· Casting a spell
· Working a puzzle or mechanism
· Any action that creates noise, light, or visible movement in the open

A failure means a Howler has spotted them. It does not attack immediately — it screams.

The party has one turn to silence the Howler before its call is answered. Silencing it means killing it, knocking it unconscious, or using some means to stop the sound entirely. A Silence spell qualifies. A hand over its mouth does not — it will bite through the hand.

If the Howler is silenced in that one turn, the call never goes out. No others arrive. But the party should check again before they do anything else.`,
  },

  escalation: {
    title: "When the Call Goes Out",
    description: `If the first Howler is not silenced in time, roll a d4. That many Howlers drop from the trees and join the fight on the following turn.

Once multiple Howlers are in the fight, they are all calling. The alarm doesn't stop just because one goes down — the others keep it going. Every round from that point forward, roll a d6. On a 1, one more Howler arrives.

This continues for the entire fight. The d6 roll only stops when the last Howler is silenced or dead. Until then, another one can always come.

The DM should not tell the players when the pack runs out. Let each d6 roll feel like it could bring one more.`,
  },

  creature: {
    name: "Howler",
    image: "/howlers.jpg",
    description: `Roughly the size of a large dog when on all fours, but capable of standing briefly upright when startled or threatening. Sandy brown fur, long limbs built for climbing, hands and feet nearly identical — all four used for gripping. A long tail ends in a cluster of barbed thorns, hardened and yellowed like old bone.

The chest and upper abdomen are plated in overlapping bark-like scale, gray and rough. Not armor exactly — more like something the body grew. It is thicker than it looks.

The face is primate. The expression, when it opens its mouth, is not.`,

    stats: {
      STR: { score: 16, mod: "+3" },
      DEX: { score: 16, mod: "+3" },
      CON: { score: 14, mod: "+2" },
      WIS: { score: 8, mod: "-1" },
      INT: { score: 8, mod: "-1" },
      CHA: { score: 6, mod: "-2" },
    },

    hp: "40 — adjust to party level at DM's discretion",
    ac: "15 (fast and difficult to land a clean hit)",

    attacks: [
      {
        name: "Bite",
        range: "5 ft.",
        hit: "+5 to hit",
        damage: "1d6 + 3 piercing",
        special: null,
      },
      {
        name: "Tail Barbs",
        range: "10 ft.",
        hit: "+5 to hit",
        damage: "1d6 + 3 piercing",
        special: null,
      },
      {
        name: "Grapple",
        range: "5 ft.",
        hit: "+5 to hit",
        damage: null,
        special: {
          name: "Grappled",
          description: `On a successful hit, the target is grappled. At the start of the grappled creature's turn, it may use its action to attempt to break free with a contested STR saving throw against the Howler.

Any time the Howler takes damage while grappling, it must succeed on a WIS saving throw DC 12 or release its grip.`,
        },
      },
    ],

    resistances: [],
    vulnerabilities: [],

    loot: null,
  },
};
