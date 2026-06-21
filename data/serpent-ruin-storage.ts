export const serpentRuinStorage = {
  id: "serpent-ruin-storage",
  name: "The Storage Room",
  image: "/serpent-shrine-storage.jpg",
  path: "/pine-loft/lonely-path-pines/the-ruins/dungeon/storage",

  sceneDescription: `Opening the door, you see a very dark chamber with no other windows or doors.

Lining the left wall are long wooden shelves, empty except for old rotten crate boards and scraps of paper and rope. The right wall is stacked with broken crates and piles of boards and something else — something shriveled and dried that might once have been vegetables. Or carcasses. It is too dark and too long gone to say with any certainty.`,

  dmNotes: {
    search: {
      title: "Searching the Room",
      dc: 14,
      skill: "Investigation",
      success: `On a success, the player finds a small pallet tucked beneath the lowest shelf — easy to miss in the dark. Resting on it are four common healing potions, still sealed. Whatever stored them here did not live long enough to use them.`,
      fail: `On a failure, they find nothing but rot and debris. The potions remain hidden.`,
    },

    rats: {
      title: "What Follows",
      description: `Whether they succeed or fail the investigation check, give the room a moment of silence — then let it begin.

A faint skittering rises from beneath the shelves. Then squeaking. A soft sound at first, then building — louder each second, layering on itself, the scratch of dozens of claws moving fast through something narrow and close. The sound is coming from a hole beneath the lowest shelf, and whatever is in that tunnel is not slowing down.

They have a round or two to decide what to do. If they move, they should feel the urgency. The sound is not distant anymore.`,

      dmNote: `If they do not leave, a new wave of giant rats pours out of the hole beneath the shelves — a separate population from the kitchen. Cap this encounter at 15 rats total. Use the same stats and wave scaling as the kitchen rats.

Closing the door ends it entirely. The rats cannot open it, and the hole leads back into whatever tunnels run beneath the dungeon — not into the dining hall. A party that leaves and pulls the door shut behind them has no further trouble from this room.

If they are still in the room when the first wave arrives, they are fighting in close quarters with the shelves at their backs and no easy exit.`,

      cap: 15,
    },

    potions: {
      title: "Common Healing Potion",
      description: `Restores 2d4 + 2 hit points when consumed. Action to drink, bonus action to administer to another creature.`,
      quantity: 4,
    },
  },
};
