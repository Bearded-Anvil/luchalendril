export const warehouseDistrict = {
  id: "warehouse-district",
  name: "The Warehouse District",
  subtitle: "Authorized Personnel Only Beyond This Point",
  location: "Dock Yard — Northern End",
  city: "Beacon",
  image: "/warehouse-district.jpg",

  // ── FIRST VISIT ENCOUNTER ────────────────────────────────────────────────────
  // Play this the first time the party heads toward the Warehouse District.
  // The gnome does not linger. He waves, says his piece, and moves on.
  // ────────────────────────────────────────────────────────────────────────────
  firstVisitEncounter: {
    setup: `As the party walks toward the Warehouse District and the crowd begins to thin behind them, a hunched elderly gnome male using a cane waves to get their attention.`,
    dialogue: `"Pardon me — you may know exactly where you're going. But if you're new here, I'd steer clear of that area. It's not heavily used anymore and a lot of... well... uncivilized people use it to host their activities. If you know what I mean."`,
    note: `He does not wait for a response. He continues on his way. He is not available for follow-up questions.`,
  },

  sceneDescription: `The northern end of the Dock Yard grows quieter the further you walk. The crowd falls away. The lanterns thin out. The cobblestones are wet and dark and there is no one selling anything here.

What opens up before you is the Warehouse District — a place that once moved cargo, people, and purpose in volume. Now it sits mostly still. Elevated platforms roughly five feet off the ground run along one side, built for wagons to pull alongside and be unloaded by the simple pulley-and-lever cranes still standing above them. A few crates and kegs remain on top of the platforms. A chair. A table missing one leg. Things left behind when the work stopped coming.

Behind the platforms are the pull-through stations — large two-story buildings that open at both ends with wide sliding double doors, roads running straight through them. Inside, cranes and shelf-lifts allowed wagons to drive in loaded and pull out empty. The doors are closed now, or nearly closed, hanging at angles that suggest the hinges have been left to do what they will.

Along the sides of the pull-through buildings are the old warehouses. Two floors. All of them chained and padlocked. Crates are stacked against their outer walls — some broken open, some rotted to nothing, their contents long gone or ruined. The wood of the warehouses has gone grey and soft in places where the weather has had years to work on it.

Past all of this, the cliff face of Braver's Bowl rises behind the district and disappears upward into the grey sky. And high above — almost directly overhead from here — Beacon's Lighthouse stands at the rim. Its warm yellow light sweeps the fog over the bay, cutting a slow corridor of visibility through the white.`,

  dmNotes: {
    realityOfThePlace: `The Warehouse District is not dangerous the way a dark alleyway is dangerous — no one is waiting to rob travelers. It is dangerous the way an unwatched place is dangerous. It's used precisely because no one official is watching. Shady meetings happen here. Illegal deliveries come in after dark. Handshakes are made over things that wouldn't survive daylight scrutiny.`,
    traffickingRumor: `There are persistent rumors in Beacon that kidnapped individuals are sometimes moved through the Warehouse District — loaded into ships through the back docks quietly enough that the main boardwalk never sees it. The city is aware of these rumors. They have not assigned guards here. The official position is that the district sees too little regular use to justify a permanent patrol. The real reason is less comfortable than that.`,
    cityComplicity: `Whether the governing bodies of Beacon are simply negligent or actively turning a blind eye in exchange for something is left to the DM to decide. The infrastructure for both interpretations is already in place.`,
  },

  // ── FUTURE DEVELOPMENT NOTE ──────────────────────────────────────────────────
  // The Warehouse District is the natural home for Beacon's underworld content.
  // When building the Thieves' Guild, criminal NPCs, or trafficking quest lines,
  // return here. Specific sub-locations (warehouses, floating storage sheds,
  // crane platforms, pull-through stations) are ready to be built out as named,
  // clickable locations whenever the content exists to fill them.
  // ────────────────────────────────────────────────────────────────────────────
  futureNote: `Sub-locations (individual warehouses, the floating storage sheds, the crane platforms, the pull-through stations) are planned but empty. Do not add them to the page until content exists to fill them. Empty clickable rooms create the wrong kind of mystery.`,

  roads: [
    {
      name: "Northwest Beacon Street",
      direction: "East",
      description: "Back toward the city. The cranes are visible from the street.",
      status: "live",
      path: "/beacon/northwest-beacon-street",
    },
    {
      name: "The Dock Yard",
      direction: "South",
      description: "The main boardwalk and working waterfront of Beacon.",
      status: "live",
      path: "/beacon/dock-yard",
    },
  ],
};
