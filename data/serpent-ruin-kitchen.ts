export const serpentRuinKitchen = {
  id: "serpent-ruin-kitchen",
  name: "The Kitchen",
  image: "/serpent-shrine-kitchen.jpg",
  path: "/pine-loft/lonely-path-pines/the-ruins/dungeon/kitchen",

  sceneDescription: `As you push open the door near the end of the table, it opens with a loud and lengthy squeak on its rusted hinges.

Peering inside, you see what appears to be a small kitchen area. A little room, about fifteen feet deep, with an extinguished cook fire at the far end and a large black pot hanging above it on a chain. A stone counter runs the length of the left wall, and a large water basin takes up most of the right wall. The center of the room is barely wide enough for a single person to move between them.

Atop the counter, several baskets and small shelves sit empty except for scraps of parchment and the droppings scattered around them. The water basin holds almost nothing — a shallow film at the bottom, dark and still, with a sour odor rising from it.`,

  dmNotes: {
    doorWarning: {
      title: "Before They Open the Door",
      description: `If any player listens at this door or investigates it before opening, warn them: they can hear skittering footsteps on the other side — the occasional scratch of claws on stone and the brief, sharp squeak of something small and agitated. The sound is not subtle. A player who opens this door has done so with full knowledge of what is in there.`,
    },

    rats: {
      title: "The Rat Lair",
      description: `This is where the rats live. Unlike the dining hall, where they spill out in response to noise, the kitchen rats are already present when the door opens — packed in along the counter, crouched under the basin, clustered around the base of the hearth. They do not wait to be disturbed.

The moment the door opens more than a crack, the nearest rats rush the entrance. More follow from the back of the room. Players who step inside are immediately surrounded on three sides.

There is nothing of any value in this room. No coin, no equipment, nothing hidden in the baskets or under the counter. The rats have had it for a long time.`,

      stats: {
        name: "Giant Rat",
        STR: { score: 10, mod: "+0" },
        DEX: { score: 14, mod: "+2" },
        CON: { score: 12, mod: "+1" },
        INT: { score: 2, mod: "-4" },
        WIS: { score: 10, mod: "+0" },
        CHA: { score: 3, mod: "-4" },
        hp: 14,
        ac: 12,
        attacks: [
          {
            name: "Bite",
            hit: "+4 to hit",
            range: "5 ft.",
            damage: "1d6 + 2 piercing",
          },
        ],
        special: {
          name: "Pack Tactics",
          description: "The rat has advantage on attack rolls if at least one ally is adjacent to the target.",
        },
      },

      waveChart: [
        { partySize: "2–3 players", firstWave: 4, subsequentWave: "3 rats", interval: "Every 2 rounds" },
        { partySize: "4 players", firstWave: 6, subsequentWave: "3–4 rats", interval: "Every 2 rounds" },
        { partySize: "5–6 players", firstWave: 8, subsequentWave: "4 rats", interval: "Every 2 rounds" },
      ],

      cap: `The kitchen holds more rats than the dining hall. Cap at 20 active rats total. Once 20 are present, no more emerge until some are killed. The storage room at the far end of the dining hall is a separate population and does not count against this cap.`,

      torchFear: {
        title: "Fire and Torches",
        description: `Rats that can see an open flame must make a WIS saving throw DC 11 at the start of their turn or become frightened for 1 round — they cannot move toward the flame's bearer and have disadvantage on attack rolls while in line of sight of it.

The cook fire hearth is cold and unlit. A player who lights it would need to fuel it first — but a torch held in the doorway can hold the rats at bay long enough for the party to decide whether stepping inside is worth it.`,
      },

      doorControl: {
        title: "The Door",
        description: `Closing the kitchen door stops the encounter entirely. The rats cannot open it. A party that pulls the door shut and holds it has ended the fight — but they have also sealed themselves out of the kitchen and everything in it.

If rats spilled into the dining hall before the door was closed, those rats remain and continue fighting.`,
      },
    },
  },
};
