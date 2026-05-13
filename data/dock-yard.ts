export const dockYard = {
  id: "dock-yard",
  name: "Dock Yard",
  city: "Beacon",
  image: "/dock-yard.jpg",

  sceneDescription: `Southwest Beacon Street suddenly opens up into a wide boardwalk overlooking White Bay to the west of Braver's Bowl. The cobblestone road stops abruptly and is replaced with row upon row of wooden slats stretching out in both directions for the better part of three-quarters of a mile. Docks and rolling fog fill the view in front of you. Along the eastern side, shops, rental posts, bakeries, and information booths line the walk shoulder to shoulder.

In the far distance, standing tall atop the northern edge of Braver's Bowl, Beacon's Lighthouse rises against the grey sky. Its magically enhanced, warm yellow beam sweeps slowly out over the bay — and even from this distance and angle, you can see that where that light touches the thick white fog, it clears. Not entirely, but enough. A narrow corridor of open air traces the beam's path across the water.

The edge of the boardwalk is lined with thick yellow ship rope, looped in wide swooping arcs through holes in wooden posts. The only breaks in that rope are where the docks cut through — dozens of them, scores of them, stretching out into the fog until they vanish completely. At the ends of each dock, barely visible through the grey, faint orange lantern light marks the anchor points. A light so ships can find their way in.`,

  dmNotes: `The Dock Yard is the commercial and working heart of White Bay. Fishing crews move through constantly. Cargo gets loaded and unloaded from ships you can hear but not always see. The fog never fully lifts — the lighthouse manages it, not eliminates it. Use the fog deliberately. It hides arrivals, covers departures, and gives smugglers, navigators, and desperate people reasons to be here at odd hours.`,

  atmosphere: `Smell: salt, fish, wet wood, and something faintly smoky — probably Saltwater Loaves baking taffy. Sound: gulls, rope creaking, water slapping the pilings, and occasionally the deep horn of a ship somewhere out in the fog.`,

  locations: [
    {
      name: "Here & There / The Inkwell",
      description: "One building, two shops. Bay maps and cartography on the left. Utility, protection, and offensive scrolls on the right.",
      status: "live",
      path: "/beacon/dock-yard/here-and-there",
    },
    {
      name: "White Bay Navigators",
      description: "Ship captains for hire. Safe passage through the fog — for a price.",
      status: "live",
      path: "/beacon/dock-yard/white-bay-navigators",
    },
    {
      name: "The Hook",
      description: "Fresh catch fish market. Packaged and ready to travel.",
      status: "coming-soon",
      path: "/beacon/dock-yard/the-hook",
    },
    {
      name: "Saltwater Loaves",
      description: "Bakery and specialty saltwater taffy shop. The smell reaches you before the sign does.",
      status: "coming-soon",
      path: "/beacon/dock-yard/saltwater-loaves",
    },
    {
      name: "Reel Works",
      description: "Deep sea fishing equipment. Rods, reels, nets, harpoons, and spears.",
      status: "coming-soon",
      path: "/beacon/dock-yard/reel-works",
    },
  ],
};
