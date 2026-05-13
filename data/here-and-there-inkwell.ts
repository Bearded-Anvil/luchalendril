export const hereAndThereInkwell = {
  id: "here-and-there-inkwell",
  name: "Here & There / The Inkwell",
  tagline: "Maps of the Bay · Scrolls & Ink",
  street: "Dock Yard",
  city: "Beacon",
  image: "/here-and-there-inkwell.jpg",

  sceneDescription: `You open the door and step inside to the smell of paper. The floor is the same wide plank wood as the boardwalk outside, just dry. The walls are bare sealed boards — tar or clay, you're not certain. A single window on the right side of the room looks out over the grey water of White Bay.

The center of the room is dominated by a single large table, about four feet wide and eight feet long, with a massive map of the bay spread nearly edge to edge. Rocks and shallow points are marked across it in careful notation.

Along the left wall, wooden boxes are mounted in rows, each open at the top, filled with rolled scrolls tied shut with string. Signs above them read: Bay Rocks. Fishing Spots. Shallows. Shipwrecks. Wind Currents. On the back wall, a decorative sign reads "Here & There."

Against the right wall, three angled glass display cases stand side by side, their lids shut and locked. Through the glass, rows of tied scrolls lie in neat arrangement. A sign above the first reads Utility. Above the middle, Protection. Above the third, Offensive. On the back wall, a scroll-shaped sign reads "The Inkwell."

A long counter runs the full width of the back wall — split down the middle by an invisible line as clear as any wall. A young human man works the maps side on the left. A white-haired elf works the scrolls side on the right. Neither seems particularly interested in the other.`,

  mapsShop: {
    signName: "Here & There",
    owner: {
      name: "Bryan Valuth",
      race: "Human",
      age: "25",
      appearance: `A young human man in his mid-twenties with short dark brown hair and a pair of glasses he adjusts constantly. He wears a plain white long-sleeve shirt and keeps his sleeves rolled up while he works. He talks about measurements, depths, and wind patterns the way other people talk about the weather — casually and constantly. He is not unfriendly, just easily distracted by whatever calculation he's currently running in his head.`,
    },
    inventory: [
      {
        name: "Bay Rocks Map",
        description: `A detailed chart showing how to navigate around the rocks of White Bay. A note printed across the top reads: "Must follow directions from the dock for accuracy."`,
        effect: "Any skill checks to locate or avoid rocks while sailing White Bay are made with advantage when this map is in your possession.",
        cost: "5 gp",
      },
      {
        name: "Fish Hole Map",
        description: "A map with fishing hot spots marked and labeled by species type. Bryan updates it when new information comes in from the fishing crews.",
        effect: "Any skill checks made to catch fish in White Bay while using this map are made with advantage.",
        cost: "3 gp",
      },
      {
        name: "Map of the Shallows",
        description: `A map showing areas where the water is shallow enough to walk or where sandbars break the surface. A note across the top reads: "A great place for fishing, collecting rare shells, and sometimes even treasures."`,
        effect: "Any skill checks to find shallows within White Bay are made with advantage, even when the tide is in and they cannot be seen.",
        cost: "5 gp",
      },
      {
        name: "Shipwreck Locations",
        description: "A map marking coastal areas where shipwrecks are visible or reported. Bryan admits freely that some of the older marks are secondhand.",
        effect: "Any attempts to locate shipwrecks out of sight are made with advantage. Any skill checks to find treasure aboard a visible wreck are also made with advantage.",
        cost: "8 gp",
      },
      {
        name: "Wind Current Chart",
        description: "A detailed chart showing how the coastline, sandbars, and curvature of the bay affect wind and current flow.",
        effect: "Any sail-powered ship with this map can double its movement speed while in White Bay. If forced to dodge rocks while moving at that speed, the check is made with disadvantage.",
        cost: "10 gp",
      },
    ],
  },

  scrollsShop: {
    signName: "The Inkwell",
    owner: {
      name: "Sylas Penleaf",
      race: "Elf",
      age: "100",
      appearance: `A tall elven man with long white hair pulled back in a low ponytail and grey eyes that tend to settle just past whoever is talking to him. He wears a long black button-front shirt and moves with the easy quiet of someone who has spent decades doing careful, close work. He is not cold, but he is measured — he does not hurry conversation, does not offer small talk, and does not give discounts.`,
    },
    utility: [
      {
        name: "Scroll of the Open Portal",
        description: "Reading this scroll while focusing on any non-magical door or entrance blockage causes that passage to open. Boulders crumble. Locks release. Doors swing wide.",
        effect: "No effect on magical doors, locks, or barriers.",
        cost: "50 gp",
        stock: 3,
      },
      {
        name: "Scroll of Safe Slumber",
        description: "After a camp is set, this scroll is read from the center of it. Every part of the camp set up by the reader becomes completely invisible for 12 hours — including anyone inside and any smoke from a campfire.",
        effect: "Does not prevent creatures from accidentally walking into the camp. Choose campsites wisely.",
        cost: "100 gp",
        stock: 4,
      },
      {
        name: "Scroll of Merriment",
        description: "When read, every creature within a 30-foot radius begins hearing lively, cheerful music — whatever form of music would make that individual happiest. The magic reads the listener's own mind.",
        effect: "Each creature hears something entirely different. The scroll provides no mechanical benefit, only joy.",
        cost: "20 gp",
        stock: 6,
      },
      {
        name: "Scroll of Stairform",
        description: "Reading this scroll while focusing on a slope steep enough to require a skill check causes magical stairs up to 100 feet long to appear, matching whatever angle the slope already has.",
        effect: "Will not function on completely vertical surfaces. A slope is required.",
        cost: "75 gp",
        stock: 1,
      },
    ],
    protection: [
      {
        name: "Scroll of Thick Skin",
        description: "For one hour after reading, any critical hit against the reader is treated as a regular hit with regular damage.",
        effect: "Duration: 1 hour.",
        cost: "50 gp",
        stock: 4,
      },
      {
        name: "Scroll of Deflection",
        description: "For one hour after reading, the reader gains +3 to their armor value against both magical and non-magical attacks.",
        effect: "Duration: 1 hour.",
        cost: "65 gp",
        stock: 2,
      },
      {
        name: "Scroll of Dampening",
        description: "For one hour after reading, any damage the reader takes from magical spells or magical weapons is halved.",
        effect: "Has no effect on non-magical weapons or missiles. Duration: 1 hour.",
        cost: "60 gp",
        stock: 2,
      },
      {
        name: "Scroll of Confusion",
        description: "For one hour after reading, any creature attempting to strike the reader must do so at disadvantage — they cannot seem to fix their focus on the target.",
        effect: "Duration: 1 hour.",
        cost: "40 gp",
        stock: 3,
      },
    ],
    offensive: [
      {
        name: "Scroll of Wounding",
        description: "For one hour after reading, all attacks — ranged or melee — made by the reader count as magical and deal +1 damage.",
        effect: "Duration: 1 hour.",
        cost: "20 gp",
        stock: 10,
      },
      {
        name: "Scroll of Trueflight",
        description: "For one hour after reading, any ranged attacks made by the reader count as magical and are +1 to hit.",
        effect: "Duration: 1 hour.",
        cost: "40 gp",
        stock: 4,
      },
      {
        name: "Scroll of Forceful Strikes",
        description: "For one hour after reading, any time the reader wounds an enemy that creature must make a DC 15 Strength saving throw or be knocked 10 feet away and knocked prone.",
        effect: "Duration: 1 hour.",
        cost: "30 gp",
        stock: 3,
      },
      {
        name: "Scroll of Flamestrike",
        description: "For one hour after reading, all ranged and melee attacks made by the reader count as flaming and deal 1d4 additional fire damage.",
        effect: "Duration: 1 hour.",
        cost: "30 gp",
        stock: 5,
      },
      {
        name: "Scroll of Icestrike",
        description: "For one hour after reading, all ranged and melee attacks count as ice attacks, deal 1d4 additional cold damage, and halve the target's movement speed for 1 turn if they are wounded.",
        effect: "Duration: 1 hour.",
        cost: "40 gp",
        stock: 5,
      },
    ],
  },

  dmPrivate: {
    bryan: {
      fears: `Bryan fears that some of the things marked on his maps are shifting — rocks move, sandbars drift, currents change. His maps may one day be dangerously incorrect. He doesn't mind making new ones, but he fears that old maps already out in the world may cause accidents, and that someone might come back to hold him responsible.`,
      goals: `Bryan wants to map all of Luchalendril before he dies. The bay is only the beginning. He is not an adventurer and knows it — but his need for accurate firsthand maps is genuine, and it makes him useful to anyone who travels.`,
      questHook: `At the DM's discretion, Bryan will occasionally ask the party if they'd be willing to escort him to a specific location he needs to survey. He names the place, explains what he needs to measure, and offers a map from his stock as payment. Use this to introduce new locations organically.`,
      note: `If White Bay has not yet been unlocked for the players, Bryan's maps have no in-world use — but his quest hooks can still function on any available land. Don't retire him just because the bay isn't open yet.`,
    },
    sylas: {
      note: `Sylas studies enchanting but has found that scrolls are faster, safer, and considerably more profitable. He has not offered enchanting services to anyone. In time, for players who earn enough of his trust, this may change — enchantment quests and deeper access to Sylas's abilities are planned but not yet available. Do not hint at this unless the players have already built a relationship with him.`,
    },
  },
};
