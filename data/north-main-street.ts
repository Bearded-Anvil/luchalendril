export const northMainStreet = {
  id: "north-main-street",
  name: "North Main Street",
  image: "/north-main-street.jpg",

  sceneDescription: `North Main Street begins at the tunnel through Beacon's northern wall — wide and smooth-cobbled in brown, black, and reddish stone, built for traffic that never quite materialized. It is less worn than South Main Street. Less used. The main purpose of this road is to move people toward the lighthouse, and most of the people who use it know exactly where they're going.

On either side of the road, a wide grass verge runs the full length of the street from the wall down to the intersection below. Ten apple trees grow on each side, evenly spaced, and between each pair of trees sits a bench — decorative iron frames with wood slat seats, the kind of thing that was put here to be sat on. Lantern posts mark the edge of the road at intervals, and blue-and-gold banners hang from them. The trees are heavy with fruit.

At the far end, where the road meets the intersection and splits in both directions, Hattiswain Pawn faces back up the street, its sign shaped like a half-open trunk. Behind and to the left, far away, the tower of Braver's Temple rises above the roofline — the stone dog at the top facing east.`,

  dmNotes: `North Main Street is quiet. It doesn't have the foot traffic of Central Bowl Street or the tension of Northeast Beacon Street. Most people who come through here are heading to or from the lighthouse, and they move with purpose.

The apple trees are maintained by the city. Locals help themselves to fallen apples freely. The benches get occasional use from people resting on the way out of the city gate. There is no watch presence on this street specifically — the City Watch handles anything that spills in from the intersection, and the gate guards handle the wall end.`,

  roads: [
    {
      name: "North Main Street Intersection",
      direction: "South",
      description: "Where the street meets the city. Hattiswain Pawn is here.",
      status: "coming-soon",
      path: null,
    },
    {
      name: "North Gate — Toward the Lighthouse",
      direction: "North",
      description: "Through Beacon's northern wall. The road continues up Braver's Bowl toward the lighthouse.",
      status: "coming-soon",
      path: null,
    },
  ],
};
