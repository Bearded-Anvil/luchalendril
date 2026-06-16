export const serpentRuinDiningHall = {
  id: "serpent-ruin-dining-hall",
  name: "The Dining Hall",
  image: "/serpent-ruin-dining-hall.jpg",
  path: "/pine-loft/lonely-path-pines/the-ruins/dungeon/dining-hall",

  sceneDescription: `The room is unusually bright as you enter. The ceiling here has been busted open — sixty feet or more above, a jagged hole lets in gray daylight, vines hanging down through the gap and swaying gently in the air from below.

A long wooden dining table dominates the center of the room, surrounded by six wooden stools. Two of them are on their sides. Several large bricks from the ceiling lie scattered around the table and across its surface.

Along the walls, torches sit in iron brackets — long darkened, the wax and oil of them gone cold for years beyond counting.

Directly across from you, a small wooden door stands closed. At the far end of the room, beyond the dining table, another single wooden door — also closed.`,

  dmNotes: {
    ceilingHole: {
      title: "The Ceiling Hole",
      description: `The hole above is the collapsed platform floor from the temple chase sequence — Check Two. Any player who fell through during the chase landed here, sixty feet down, before the rest of the party descended via the elevator.

If a player arrives this way, they land in the dining hall alone — no iron door behind them, no party, and the rats are already present. Handle the separation however fits your table, but the player is inside the dungeon ahead of everyone else with no obvious way back up without help.`,
    },

    rats: {
      title: "The Giant Rats",
      description: `The rats live in the kitchen and storage rooms beyond the two doors. They are drawn by noise, movement, and the smell of living things. They do not charge as a unit — they spill out of the doorways in waves, more arriving as the fight continues.`,

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
        { partySize: "2–3 players", firstWave: 3, subsequentWave: "2 rats", interval: "Every 2 rounds" },
        { partySize: "4 players", firstWave: 4, subsequentWave: "2–3 rats", interval: "Every 2 rounds" },
        { partySize: "5–6 players", firstWave: 6, subsequentWave: "3 rats", interval: "Every 2 rounds" },
      ],

      cap: `No more than 15 active rats in the room at one time from the kitchen door. Once 15 are present, the kitchen door sends no more until some are killed. The storage room door triggers its own separate wave when opened and does not count against the kitchen cap — it can push the total briefly above 15.`,

      torchFear: {
        title: "Fire and Torches",
        description: `Rats that can see an open flame must make a WIS saving throw DC 11 at the start of their turn or become frightened for 1 round — they cannot move toward the flame's bearer and have disadvantage on attack rolls while in line of sight of it.

A player holding a lit torch can hold a doorway against incoming waves, buying time for the rest of the party. A torch thrown into a doorway achieves the same effect until it burns out or is extinguished.

Rats already in the fight who are not currently looking at the flame are not affected — they're focused on whatever is in front of them.`,
      },

      storageRoom: `Opening the storage room door at the far end triggers a separate wave regardless of how many rats are currently in the room. The storage room has been undisturbed longer — the rats there are more agitated.`,

      doorNote: `Closing either door stops that source of waves entirely. The rats cannot open doors. A barred or held door is a permanent solution to that entrance.`,
    },
  },
};
