export const serpentPreparationChamber = {
  id: "serpent-preparation-chamber",
  name: "Sacrificial Preparation Chamber",
  image: "/serpent-shrine-preparation-chamber.jpg",
  path: "/pine-loft/lonely-path-pines/the-ruins/dungeon/preparation-chamber",

  sceneDescription: `As you step through the opening, you find yourself in a wide passage that opens into a chamber beyond. To the west, a barred cell is set into the wall — its gate shut and locked. Through the bars you can make out a rotten old bed frame and a chamber pot in the far corner. Nothing else. Whoever was put in there is long gone.

Deeper into the chamber, a stone table dominates the center of the room. It is slightly tilted — the surface angled toward you, toward the door. At each corner, a length of chain is bolted into the stone and ends in a manacle. The table was built to hold someone who did not want to be there.

Along the back wall, more chains hang down from iron rings set high near the ceiling, each one ending in a manacle. Beside them stands a wooden workbench. Across its surface lay hooks, hand drills, tongs, and other tools whose purpose is not difficult to imagine.

On the wall across from the cell, a wide passage continues further in — open, dark, ten feet across, stretching deeper into whatever this place was built to be.`,

  dmNotes: {
    prisonCell: {
      title: "The Prison Cell",
      description: `The cell is locked — DC 12 to pick, DC 16 to force. There is nothing inside worth taking. The rotten bed and the chamber pot are the only evidence that anyone was ever kept here.

The cell is not a mystery to solve. It is context. Someone was held here before being moved to the table. The players do not need to be told that. The room makes it clear enough on its own.`,
    },

    table: {
      title: "The Table",
      description: `The tilt is intentional. Whatever was strapped to it was meant to face the passage — toward what waited at the other end. The chains are old iron and show no sign of rust damage. They were maintained.`,
    },

    workbench: {
      title: "The Workbench",
      description: `The tools are not surgical. They are not the instruments of a healer or a craftsman. A player who examines them and succeeds on a DC 10 Medicine or Investigation check understands what they were used for — preparation of a living subject. Not killing. Preparing.`,
      dc: 10,
      skill: "Medicine or Investigation",
    },

    inscription: {
      title: "The Hallway Inscription",
      dc: 15,
      skill: "Investigation",
      description: `The passage leading deeper into the shrine is not plain stone. Cut into the wall, running the full length of the corridor, the same phrase is carved over and over — sometimes large, sometimes small, sometimes tight and cramped as if the carver ran out of room and simply kept going.

The words repeat without pause or break. They are not painted. They were cut by hand, one letter at a time.`,
      text: `"Kahthriss. Honor. Fealty. Praise be yours."`,
      dmNote: `On a DC 15 Investigation, a player notices that the carvings are not uniform — different depths, different spacing, different hands. This was not the work of a single craftsman. Many people carved this wall, over a long period of time. The name Kahthriss appears here for the first time. Do not call attention to it. Let them read it.`,
    },
  },
};
