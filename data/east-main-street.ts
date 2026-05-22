export const eastMainStreet = {
  id: "east-main-street",
  name: "East Main Street",
  image: "/east-main-street.jpg",

  sceneDescription: `East Main Street doesn't have much to sell. What it has is a way out.

Standing at Temple Square, the road runs wide and straight — the same broad cobblestone as the rest of Beacon, wide enough for two wagons to pass without either driver flinching. It runs all the way to the outer defensive wall, which stands a solid twenty feet of large gray stone mortared tight, blunt and serious in the way walls meant to keep things out tend to be.

The gate is cut through the center of the wall — arched stone, about twelve feet high and fifteen feet deep through the wall itself. At the far end, the bottom of a raised portcullis hangs above the exit, its teeth visible against the open countryside beyond. Guards in silver armor and brown leather walk the ramparts above. They carry crossbows and wear swords. They are watching the road in both directions.

Two flags fly above the gate, one from each side of the wall. On the left, the face of Braver — the same image as the temple behind you. On the right, the lighthouse.

On the left side of the street, close against the interior of the wall, sits Hubs and Hooves — stables with ten stalls, most of them occupied. Hay bales are stacked against the interior wall beside a pitchfork. Troughs of vegetables, large barrels of water, brushes, blankets. The smell of hay and horse is strong here. Beside the stables, two wagons and a black carriage sit without horses. One wagon is covered, canvas stretched over its frame. The other is open-topped. The carriage is fine, well-kept, and empty. A small wooden building sits next to them — a little porch, a sign above the door: Offices of Hubs and Hooves.

On the right side of the road, three peach trees grow from well-tended garden beds, their branches heavy. Iron benches sit between each pair of trees — the kind of bench that exists for someone waiting on a wagon that isn't ready yet, or a traveler who needs a few minutes before stepping back out into the world.`,

  hubsAndHooves: {
    stables: {
      description: `Ten stalls, most occupied. Hay bales stacked against the wall, pitchfork leaning against them. Troughs of vegetables, water barrels, brushes, and blankets. The sign across the top of the structure reads: Hubs and Hooves.`,
      capacity: "10 horses",
    },
    vehicles: [
      { type: "Covered Wagon", description: "Canvas stretched over a wooden frame. Ready for long travel." },
      { type: "Open Wagon", description: "Flat-bed, no cover. Good for cargo." },
      { type: "Black Carriage", description: "A fine, well-maintained carriage. No horse currently attached." },
    ],
    office: {
      description: "A small wooden building with a little wooden porch — the kind of thing you'd see at an old posting station. The sign above the door reads: Offices of Hubs and Hooves.",
      status: "live",
      path: "/beacon/east-main-street/hubs-and-hooves",
    },
  },

  dmNotes: `East Main Street is where Beacon ends and the road begins. Players leaving the city for the first time will pass through here. The guards on the wall are attentive but not aggressive — they watch who comes and goes, and they take note of anyone moving with unusual haste or carrying anything that looks wrong. They don't stop ordinary travelers.

The flags above the gate — Braver's face and the lighthouse — are the last things visible from outside the city. From a distance, the lighthouse flag catches more light.

Hubs and Hooves is the practical option for players who need transport and couldn't get what they wanted from Centaur Hooves and Hubs on Northeast Beacon Street. The two operations are separate businesses and do not coordinate pricing. Players may find one has availability when the other doesn't.

The peach trees on the right are maintained by the city. The fruit is available to anyone who wants it. No one enforces this — it's just understood.`,

  roads: [
    {
      name: "Temple Square",
      direction: "West",
      description: "Back to the roundabout at Braver's Temple.",
      status: "live",
      path: "/beacon/temple-square",
    },
    {
      name: "East Gate — Outside Beacon",
      direction: "East",
      description: "Through the wall and out onto the open road.",
      status: "coming-soon",
      path: null,
    },
  ],
};
