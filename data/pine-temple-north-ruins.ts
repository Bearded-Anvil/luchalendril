export const pineTempleNorthRuins = {
  id: "pine-temple-north-ruins",
  name: "Pine Temple — North Ruins",
  image: "/pine-temple-north-ruins.jpg",
  path: "/pine-loft/lonely-path-pines/the-ruins/north-ruins",

  sceneDescription: `As you push past the last of the branches blocking your sight, the stonework opens up before you. Yellowish stone, broad and flat, stretching out in every direction — patches of moss pressed into the cracks, vines running along whatever they can find to hold. It is quieter here than the forest. The sound of the pines stops at the edge of the stone.

Around thirty feet ahead, eight steps rise to a second wide platform. To the left of that, a larger stairway climbs nearly twenty steps to an upper level that you can't see clearly from here. To the right, a walkway leads out to another open area of stonework — broad columns standing in broken rows, most of them cracked or toppled, the ones still standing going nowhere.

Whatever was here, it was built to impress. It still does, a little, even now.`,

  dmNotes: {
    howlerTerritory: {
      title: "Howler Territory",
      dc: 12,
      description: `Any character with a Passive Perception of 12 or higher notices piles of animal scat scattered across the stonework — large, unmistakably so. Some is dried and old. Some is not.

This is Howler territory. The party should be making Stealth checks against the Howlers' Passive Perception of 12. Any character who fails to stay below that threshold has been noticed.`,
    },
    hiddenShaft: {
      title: "The Hidden Shaft",
      dc: 18,
      description: `Very easy to miss. Near the base of one of the still-standing columns, at ground level, there is a small opening in the stonework — roughly the size of a fist. A faint, cool breeze moves through it. Not wind exactly. More like the stone itself is exhaling.

A character with Passive Perception 18 or higher notices it without looking. Anyone actively investigating the area can also find it on a DC 18 Investigation check.

Looking into the opening reveals only darkness. Darkvision does not help — the shaft goes on too far and bends before it reaches anything. But the cool air, the scale of the opening relative to the stonework around it, and the faint sense of depth below suggest one thing clearly: there is something underneath this temple. More than a basement. Rooms. Corridors. Whatever this place was, it did not end at the surface.`,
    },
  },
};
