export const serpentPriestOpenRooms = {
  id: "serpent-priest-open-rooms",
  name: "The Open Rooms",
  image: "/serpent-priest-bedroom.jpg",
  path: "/pine-loft/lonely-path-pines/the-ruins/dungeon/priest-quarters/open-rooms",

  sceneDescription: `You push the wooden door open with a loud SCREEEEE as it squeaks on its old hinges.

Inside, an old rotting bed sits in one corner, the sheets pulled up but crumbling around the edges onto the stone floor. A wooden chest of drawers rests against the wall across from it. A single round table sits next to the door with a single chair.

The room is dark, dingy, and smells of rot.`,

  dmNotes: {
    overview: `Nothing of value in the open rooms. Whatever the priests owned was either taken long before the party arrived or has long since crumbled. The rooms are identical enough that the party doesn't need to search each one separately — describe one, let them take it as representative of the rest.`,
    drawers: {
      trigger: "If they search the chest of drawers",
      description: `You slide the drawers open and find tattered pieces of cloth piled in some and nothing in the others. Piecing them together, you can make out that these were once some sort of white robes.`,
      dmNote: `White robes. The same color worn by the figures in the painting at the entrance — the ones pushing the sacrifice off the ledge. If the party saw the painting and makes the connection, they now know who those figures were. Don't point it out. Let them get there.`,
    },
    details: [
      `One room has faint scratches on the wall beside the bed — small marks, grouped in fives. Someone was counting something. Days, most likely. There are a great many of them.`,
      `One room still has a wooden peg above the bed with a small dried bundle hanging from it — herbs, long dead, the smell entirely gone.`,
    ],
    note: `Use one or two of the extra details at DM discretion. Not every room needs a moment — but one makes the priests feel like people rather than set dressing.`,
  },
};
