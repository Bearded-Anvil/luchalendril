export const roseVineView = {
  id: "rose-vine-view",
  name: "Rose Vine View",
  image: "/rose-vine-view.jpg",
  tagline: "The other side of the Garden District.",
  path: "/beacon/garden-district/rose-vine-view",

  sceneDescription: `Rose Vine View follows the right branch of the Garden District ring road, curving gently through the same cottage homes as the other side — slate roofs, flowering vines on the walls, oil lamps at the doors. The road is the same colorful cobblestone. The quiet is the same deliberate quiet.

What changes at the far end of the street is the building.

The Drunken Giant takes up the corner where Rose Vine View bends toward the amphitheater. Two stories of stone and dark timber, flowers climbing every surface that will hold them, blue banners hanging on either side of the entrance. A carved wooden sign with a giant's face worked into the frame reads the name above a wide arched doorway. On the left of the building, a wooden staircase rises along the outer wall up to the rooftop terrace — where, if the evening is clear, you can see The Valpin spread out below and the mountains sitting on the horizon behind it. A small sign to the right of the entrance reads: Garden Walk Access.

The building is the reason most people come to this side of the district. The street itself is the reason they remember the walk.`,

  locations: [
    {
      name: "The Drunken Giant",
      description: "Two doors. Two experiences. Tavern on the left, fine dining on the right. The rooftop connects to the Garden Walk above.",
      status: "live",
      path: "/beacon/garden-district/rose-vine-view/the-drunken-giant",
    },
  ],

  roads: [
    {
      name: "PrimRose Amphitheater",
      direction: "Far end",
      description: "Where Rose Vine View meets Hydrangea Way at the amphitheater.",
      status: "live",
      path: "/beacon/garden-district/primrose-amphitheater",
    },
    {
      name: "Garden District Entrance",
      direction: "Back",
      description: "Back to the welcome circle and the iron gate.",
      status: "live",
      path: "/beacon/garden-district",
    },
  ],
};
