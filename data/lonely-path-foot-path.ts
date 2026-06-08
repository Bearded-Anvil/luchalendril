export const lonelyPathFootPath = {
  id: "lonely-path-foot-path",
  name: "The Foot Path South",
  image: "/lonely-pines-ruins.jpg",
  path: "/pine-loft/lonely-path-pines/midbend-tract/foot-path",

  sceneDescription: `Following the path isn't as easy as most paths are. It's there for a bit — and then it isn't. Sometimes you find yourself walking several feet, several minutes, and then realizing you're no longer on the trail. The trees are dense, and the tiny six-inch trail winds through them until you start to wonder if this is any more than a deer run.

It becomes obvious that the trail hasn't been used in a long time. Weeds on each side have started to grow over it, reclaiming whatever ground was ever cleared.

And then, just as you step around one final tree, you send a scattering of stones spilling over the edge of a sudden cliff. And there, a hundred and fifty feet below, lay the ruins of something. A city? A temple? It's hard to say. Vines, ferns, and greenery have overtaken nearly everything. Great columns stretch up through the growth, but they're all broken off shortly after clearing the canopy. Stone walls are still standing, but they've been toppled and fractured. You see stairs that climb in the distance — some going out of sight, some going nowhere.

The ruins stretch on for nearly half a mile before the forest swallows them again.`,

  dmNotes: {
    climbDown: {
      title: "The Climb Down",
      description: `Climbing down takes three checks if the party uses a rope. 150 feet — three separate STR or DEX checks, DC 13.

Failures should count as failing forward, not stopping the descent. Consider:
· A failed STR check: they fall a ways, catch the rope, and slam against the wall for 1d4 damage.
· They clip something and their coin purse falls — they'll have to find it below.
· A weapon catches and tumbles down ahead of them.

Let failure cost something without stopping the story.`,
    },
    climbUp: {
      title: "The Climb Up",
      description: `Three checks again, DC 15. 150 feet of rope is necessary to ascend.

Failures going up are harder:
· A foot slips — 1d4 damage and they lose their progress.
· Players below must make a DEX save or take 1d4 damage from dislodged rock.
· A failed check costs a point of exhaustion.

The climb up is meaningfully harder than the climb down. The party should know this before they descend.`,
    },
  },
};
