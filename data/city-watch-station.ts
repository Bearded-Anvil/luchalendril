export const cityWatchStation = {
  id: "city-watch-station",
  name: "City Watch Station",
  subtitle: "Welcome to Beacon — Information and Help Station",
  location: "Dock Yard",
  city: "Beacon",
  image: "/city-watch-station.jpg",

  sceneDescription: `As you approach the City Watch and Information Station, you see two human men sitting on stools behind the counter, carrying on light conversation as they watch the crowd on the docks. Their booth is plain — definitely not designed to be eye-catching, and there doesn't seem to be anything for sale. A large map of Beacon adorns the back wall behind them. When you get near, both of the city watch make eye contact and one of them says:`,

  guardGreeting: `"If you've just arrived, welcome! What can we do for you?"`,

  guardStats: {
    STR: { score: 12, mod: "+1" },
    DEX: { score: 10, mod: "—" },
    CON: { score: 12, mod: "+1" },
    WIS: { score: 10, mod: "—" },
    INT: { score: 10, mod: "—" },
    CHA: { score: 8, mod: "−1" },
    AC: 13,
    HP: 25,
    dmNote: `These stats represent the average City Watch guard in Beacon. They are not highly trained soldiers or adventurers. They are citizens who passed a basic physical and conduct screening to ensure they could handle situations involving regular citizens. They will act decisively in a fistfight or to remove someone from the docks. They are not equipped or trained to handle a serious threat from an armed adventuring party.`,
  },

  // ── CITY DIRECTORY ──────────────────────────────────────────────────────────
  // This section grows as Beacon is built.
  // Update it whenever a new district, street, or named location is added.
  // The guards should always be able to answer basic "where do I find X" questions.
  // ────────────────────────────────────────────────────────────────────────────
  cityDirectory: {
    updateNote: `Keep this directory current as Beacon grows. Any district, road, or named location added to the site should have an entry here so the guards can reference it.`,
    categories: [
      {
        label: "Housing",
        entries: [
          {
            name: "Hibernations",
            description: "Inn at the Main Street Intersection. Rooms by the night. Food and drink available.",
            location: "Main Street Intersection",
          },
          {
            name: "The Traveler's Nest",
            description: "Long-term housing only. Lavish rooms. 100 gp per month minimum — no shorter stays accepted.",
            location: "Southwest Beacon Street",
          },
        ],
      },
      {
        label: "Food & Drink",
        entries: [
          {
            name: "Saltwater Loaves",
            description: "Bakery and saltwater taffy on the Dock Yard boardwalk. Best smell on the docks.",
            location: "Dock Yard",
          },
          {
            name: "Hibernations",
            description: "The inn also serves food and drink. Open to non-guests.",
            location: "Main Street Intersection",
          },
        ],
      },
      {
        label: "Shopping — Dock Yard",
        entries: [
          {
            name: "Here & There / The Inkwell",
            description: "Bay maps and cartography on one side. Utility, protection, and offensive scrolls on the other. One building.",
            location: "Dock Yard",
          },
          {
            name: "The Hook",
            description: "Fresh and smoked fish, fishing supplies, and weapon venoms.",
            location: "Dock Yard",
          },
          {
            name: "Reel Works",
            description: "Deep sea fishing equipment. Harpoons, crossbows, weighted nets, and Shorntusk's custom gear.",
            location: "Dock Yard",
          },
        ],
      },
      {
        label: "Shopping — South Main Street",
        entries: [
          {
            name: "Splitting Hairs",
            description: "Bladed weapons. Torgin Ironspout's stall.",
            location: "South Main Street",
          },
          {
            name: "A Journey's First Step",
            description: "Travel and survival gear, mundane and enchanted.",
            location: "South Main Street",
          },
          {
            name: "The Calloused Hand",
            description: "Herbal remedies and natural healing supplies.",
            location: "South Main Street",
          },
          {
            name: "Nature's Hands",
            description: "Natural goods and botanical supplies.",
            location: "South Main Street",
          },
          {
            name: "Risk & Reward",
            description: "Gambling and games of chance.",
            location: "South Main Street",
          },
          {
            name: "Roddik's Ranged Goods",
            description: "Bows, crossbows, and ranged ammunition.",
            location: "South Main Street",
          },
          {
            name: "Whittled Things",
            description: "Carved wood goods and small crafts.",
            location: "South Main Street",
          },
          {
            name: "Lyrics & Laughter",
            description: "Musical instruments and performance supplies.",
            location: "South Main Street",
          },
          {
            name: "Kellik's Pride",
            description: "Armor and protective gear.",
            location: "South Main Street",
          },
        ],
      },
      {
        label: "Shopping — Southwest Beacon Street",
        entries: [
          {
            name: "Iron's End Forge",
            description: "Custom smithing. Drogga Fireheart's forge. No items for sale — bring your own weapon or armor.",
            location: "Southwest Beacon Street",
          },
          {
            name: "The Traveler's Nest",
            description: "Consumables and long-term housing. Iylea Windsong's establishment.",
            location: "Southwest Beacon Street",
          },
        ],
      },
      {
        label: "Temple",
        entries: [
          {
            name: "Braver's Temple",
            description: "Follow Central Bowl Road from the docks straight to the center of the city. The temple tower is visible from most of Beacon.",
            location: "Central Bowl Road — coming soon",
          },
        ],
      },
    ],
  },
};
