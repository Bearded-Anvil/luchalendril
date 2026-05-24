export const gardenDistrict = {
  id: "garden-district",
  name: "The Garden District",
  image: "/garden-district-entrance.jpg",
  tagline: "Where everything is just better.",

  sceneDescription: `The gate opens and the first thing you notice is the road.

It is the same cobblestone as everywhere else in Beacon — the same cut, the same size — but these stones have not been worn down the same way. They are clean. And they are not all the same color. Reds, blues, yellows, sandstone, orange — the whole circle ahead of you is laid in mixed stone that catches the light differently in every direction. It looks, for just a moment, like something magical. It isn't. It's just maintained.

The road enters a wide circular clearing — like a roundabout, but with nothing in the center. Just open, colorful cobblestone, wide enough to feel deliberate. On the far side of the circle, directly across from the gate, stands a sign. It is enormous — twenty feet across and ten feet tall — set into a bed of hydrangeas in every color, the mulch beneath them dark and fresh, the grass border trimmed to an even line before a small curb drops to the cobblestone. The sign reads:

Welcome To
The Garden District
Where everything is just better.

The first line is small. The second is large, flowing script that spans the full width of the sign. The third is smaller, almost cursive, and slightly smug.

Two roads leave the circle — one from the left side of the sign, one from the right. Both run through homes that look like something out of a painting: slate shingle roofs, flowering vines climbing the exterior walls, oil lamps burning beside front doors. Mostly single-story, a few with a second floor. The road on the left bends gradually to the right. The road on the right bends gradually to the left. From here, it looks like they meet somewhere in the distance.

And behind all of it — far back, barely there above the rooflines — the silhouette of distant mountains catches the last of the sunlight.`,

  dmNotes: `This is the moment the contrast lands. The party has walked through Northwest Beacon Street's unmaintained puddles, past the City Watch posting notice and the wanted sign nailed to a post, past the idle cranes of the Warehouse District. And now they are here.

The sign's tagline — "Where everything is just better" — is accurate and slightly insufferable. That is intentional. The people who live here paid for that sign. They believe it.

The ring road loops the entire interior of the district. Both branches from this entrance eventually reconnect on the far side. Homes branch off at intervals along both sides. The attractions — the rooftop walk, the outdoor restaurant, the guest house — sit further in along the ring.

Players who enter without an escort will attract quiet attention. No one will stop them immediately. But the King's Guard inside the walls will take note, and a resident will eventually approach to ask, politely and without warmth, whether they require assistance finding their host.`,

  roads: [
    {
      name: "Northeast Beacon Street",
      direction: "Back through the gate",
      description: "The iron gate behind you. Northeast Beacon Street and the rest of Beacon.",
      status: "live",
      path: "/beacon/northeast-beacon-street",
    },
    {
      name: "Hydrangea Way",
      direction: "Left",
      description: "A row of boutiques along a pretty sidewalk. The finest shopping in Beacon.",
      status: "live",
      path: "/beacon/garden-district/hydrangea-way",
    },
    {
      name: "Rooftop Garden Walk",
      direction: "Above Hydrangea Way",
      description: "Accessible from the far end of Hydrangea Way. Flowers, fireflies, and a view of the mountains from the outer wall.",
      status: "live",
      path: "/beacon/garden-district/rooftop-garden-walk",
    },
    {
      name: "Garden District Ring Road — East",
      direction: "Right",
      description: "The ring road heading right through the homes. Bends gradually left.",
      status: "coming-soon",
      path: null,
    },
  ],
};
