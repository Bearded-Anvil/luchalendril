export const northMainStreetIntersection = {
  id: "north-main-street-intersection",
  name: "North Main Street Intersection",
  image: "/north-main-street-intersection.jpg",

  sceneDescription: `At the base of North Main Street, the road opens into a wide intersection and splits left and right. Hattiswain Pawn sits directly ahead, facing back down the street — its sign shaped like a half-open trunk, lantern lit above the door. Apple trees from the street's edges carry into the corners of the intersection, and the benches continue to either side. The tower of Braver's Temple is visible to the left, the stone dog at the top facing east. To the right and left, the road continues in both directions along the curve of the city.`,

  encounter: {
    trigger: "18 or higher on a D20",
    description: `Four City Watch guards are moving through the intersection at a deliberate pace, clearing the street ahead of them. Two walk point, halberds level, calling out: "Clear the road — stand aside." Two more follow behind, flanking a figure in deep red robes who walks without acknowledging anyone. The mage's face is not visible. They are heading north up North Main Street toward the lighthouse, and the guards are not slowing down.`,
    formation: "2 guards ahead of the mage, 2 behind. The mage does not interact with anyone.",
    guardStats: {
      name: "City Watch Guard",
      ac: "16 (chain shirt, shield)",
      hp: "11 (2d8 + 2)",
      speed: "30 ft",
      str: "13 (+1)",
      dex: "12 (+1)",
      con: "12 (+1)",
      int: "10 (+0)",
      wis: "11 (+0)",
      cha: "10 (+0)",
      skills: "Perception +2",
      languages: "Common",
      challenge: "1/8 (25 XP)",
      actions: [
        {
          name: "Spear",
          description: "+3 to hit, reach 5 ft or range 20/60 ft. Hit: 1d6+1 piercing, or 1d8+1 piercing if used two-handed.",
        },
      ],
      note: "These are working guards. They are not heroes. They are well-trained men doing a job they take seriously, and they will not hesitate to follow through on a threat.",
    },
    dmNote: `If the players do not clear the road when the guards call for it, the guards will stop. The two in front will step toward the party. One will say, clearly and without raising his voice: "Last warning. Clear the road or you'll be escorted to the Watch." The mage continues walking without pausing.

If the players still do not move, the guards attempt to arrest them — non-lethally if possible, by force if not. The mage does not stop, does not look back, and does not speak.

The identity of the mage is for the DM to determine. This encounter is designed to signal that there are people in Beacon who move through it as if the rules don't apply to them — and that the Watch enforces that reality without knowing why.`,
  },

  roads: [
    {
      name: "North Main Street",
      direction: "North",
      description: "The apple tree boulevard heading up to Beacon's northern gate and the lighthouse road.",
      status: "live",
      path: "/beacon/north-main-street",
    },
    {
      name: "Northeast Beacon Street",
      direction: "East",
      description: "Curves east and south back toward Temple Square, passing the Garden District gate and the City Watch.",
      status: "live",
      path: "/beacon/northeast-beacon-street",
    },
    {
      name: "Northwest Beacon Street",
      direction: "West",
      description: "Curves west toward the Warehouse District at the northern end of the Dock Yard.",
      status: "coming-soon",
      path: null,
    },
  ],
};
