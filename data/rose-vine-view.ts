export const roseVineView = {
  id: "rose-vine-view",
  name: "Rose Vine View",
  image: "/rose-vine-view.jpg",
  tagline: "The other side of the Garden District.",
  path: "/beacon/garden-district/rose-vine-view",

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
