export const serpentDungeonGreatHall = {
  id: "serpent-dungeon-great-hall",
  name: "The Great Hall",
  image: "/serpent-dungeon-great-hall.jpg",
  path: "/pine-loft/lonely-path-pines/the-ruins/dungeon/great-hall",

  sceneDescription: `As you step through the iron door, you find yourself walking into darkness. Light bounces from stone, revealing six large columns — three on each side of a walkway that crosses straight through the room. The chamber is massive, more than two hundred feet across and nearly as wide. The ceiling appears to be close to fifty feet up, the columns stretching upward until the darkness consumes them entirely.

Vines grow up the columns and creep along sections of the floor, surviving down here without any sunlight. The floor is stone — dirty, cut stone from some ancient time.

Looking around, you find two exits. On the opposite wall, an open passage leads further in. To the side, a set of brass double doors stand closed, embossed with the image of a giant serpent's head — the head split down the middle where the doors meet.

Making your way around the columns, you find two skeletons. One is sitting on the floor with its back against a column. The other lies near the brass doors. Both of their rib cages appear shattered — the smaller pieces scattered around them, some of them nibbled on, some carried away.`,

  dmNotes: {
    firstEntry: {
      title: "First Time Entering",
      description: `In the darkness, a skittering sound — little clicks and tapping. As the party looks toward it, a rat scurries across the floor. A rat the size of a medium dog. It stops, stands up on its hind legs to sniff the air, looks the party over for a long moment, then turns and disappears into the darkness down the open passage.

It wasn't afraid of them. It was deciding.`,
    },

    painting: {
      title: "The Painting",
      dc: 11,
      type: "Passive Perception",
      trigger: "Just before the chamber opens up, on the wall to the side of the entrance.",
      description: `On the wall, a faded old painting covers the bricks. The detail is worn but readable — six white-robed figures in the process of pushing a man from a platform. The man wears nothing but a loin cloth. Below him, a giant snake is coiled, looking upward in anticipation.`,
      dmNote: `This is the first painting. It should land before the party has any idea what Kahthriss is. The image is disturbing on its own — six people pushing one off a ledge to a waiting snake. They don't need to understand it yet.`,
    },

    skeletons: {
      title: "The Skeletons",
      description: `The shattered rib cages are the tell. These weren't killed by blades or bludgeons — the ribs are crushed inward from outside. Something squeezed them. The nibbled pieces suggest the rats found them after.`,
      finds: [
        {
          dc: 10,
          type: "Investigation",
          target: "Skeleton against the column",
          description: `A small cloth bag, deteriorated beyond function. As you go to lift it, the bottom simply falls apart — and five platinum pieces clink against the stone floor.`,
        },
        {
          dc: 18,
          type: "Investigation",
          target: "Skeleton against the column — additional",
          description: `In addition to the platinum, you scan the area around the skeleton and catch the slightest glisten beneath a vine. Lifting it, you find a small ring near where the left hand would have been. It is warm to the touch.`,
          item: {
            name: "Ring of Daylight",
            description: `A plain band of pale metal, unremarkable in appearance. Warm regardless of the temperature around it.`,
            identification: `Must be identified before its use is known.`,
            effect: `Once per long rest, the wearer may activate the ring to completely illuminate whatever room or chamber they are in for up to one hour, or until they choose to end it. If used outdoors at night, it illuminates a radius of 150 feet in all directions.`,
            dmNote: `If the party uses this ring in Kahthriss's sunning chamber, the gradual floor-that-breathes reveal changes significantly. Full illumination means they see the coiled snake immediately rather than piecing it together from shifting shadows. This is not a problem — it is a different and possibly more alarming version of the same moment. Be ready for it.`,
          },
        },
      ],
    },

    exits: {
      brassDoorsNote: `The brass doors lead toward the priest quarters, kitchen, and dining areas. The embossed serpent head splitting at the seam is not decorative — it is a statement of what this place worshipped.`,
      openPassageNote: `The open passage leads south toward the prison cell, the preparation chamber, and eventually the sacrificial chamber. This is also the direction the rat went.`,
    },
  },
};
