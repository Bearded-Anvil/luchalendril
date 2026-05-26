export const homeHearthDistrict = {
  id: "home-hearth-district",
  name: "Home Hearth District",
  image: "/home-hearth-district.jpg",
  tagline: "Middle-class Beacon. The part that keeps everything else running.",
  path: "/beacon/home-hearth-district",

  sceneDescription: `The gate opens onto cobblestone — the same cut and size as Beacon Street, but these stones have not been ground down the same way. The mortar between them is still holding. The road is swept.

The homes that line both sides of the street are timber-frame with plaster and cob — practical and well-kept, not grand. Window boxes with herbs, front stoops with a chair or two, oil lamps mounted beside doors already lit for the evening. These are not the homes of the wealthy. They are the homes of people who keep their homes.

Street peddlers move through on foot — small carts pushed like wheelbarrows, piled with vegetables and wrapped goods, one man calling out prices without much conviction. Stationary booths dot the widened entrance circle, canvas roofs pinned back on one side, sellers watching the foot traffic without urgency.

At the center of the entrance, the street splits. Two roads angle away from each other — one left, one right — branching through the district like a hand opening. Between them, side by side in the wedge they form, stand two businesses.

To your left: a timber-frame building marked by a large carved sign mounted above the door — two wooden hands, palms facing outward, as if patting the air. The words Mercy's Hands Healing are carved deeply and intricately into the palms. Beneath it, on a smaller plank: Cure for Body, Mind and Soul. A green banner hangs below a window — two open hands on dark fabric.

To your right: an arched stone building, older than everything around it. A large copper sign hangs from an iron bracket — shaped like a broad cauldron kettle, with orange and red paint beneath it suggesting fire. The words Copper Pot Steam are raised in the copper itself. Below, on a board beside the door: Public Bathhouse — Cleanse, Refresh, Renew.

In the wedge between the two branching roads, the two center buildings sit shoulder to shoulder.

The left one has a flat, carved wooden pipe mounted above the door. The smoke rising from the bowl of the pipe has been shaped — the curls of it form letters. Aromatic Embers. A smaller sign hangs below the window: Fine Pipes, Tobaccos & Accessories.

The right one is almost entirely overtaken by vines — green and living, growing directly out of the mortar between the stones. But they are not wild. They have been grown, coaxed, and trained into shape. The letters they form on the face of the building read: Raysha's Recipe Works. Near the door, a painted board: Magical Components, Herbs, Oils, Essences & More.`,

  dmNotes: `The Home Hearth District is Beacon's working middle class. Not the Garden District. No one here expects to be served — they expect fair payment for fair work. The district runs deep beyond this entrance, through homes and smaller businesses, guild halls, a community well, and storage buildings. Most of it is unremarkable. That is the point. People here live here.

The four businesses at the entrance are a kind of first impression. Healing, tobacco, magical components, and a bathhouse. These are the things a working neighborhood needs and can afford. Each of them has been on this corner for years. None of them are going anywhere.

The two roads that branch from the entrance divide the district. Players who explore deeper will find it quieter, more residential, less inclined toward visitors. Residents will notice unfamiliar faces but are unlikely to confront anyone unless there is a clear reason.

The peddlers at the entrance are worth a short scene if the party pauses. They know the neighborhood and will talk, though not about anything they don't already know publicly.`,

  locations: [
    {
      name: "Mercy's Hands Healing",
      description: "A healer's shop with carved hand signs and a reputation built over decades. Salves, tonics, and Mercy herself.",
      status: "live",
      path: "/beacon/home-hearth-district/mercys-hands-healing",
    },
    {
      name: "Aromatic Embers",
      description: "Pipes, tobaccos, and accessories. The owner takes his craft more seriously than anyone expects.",
      status: "live",
      path: "/beacon/home-hearth-district/aromatic-embers",
    },
    {
      name: "Raysha's Recipe Works",
      description: "Magical components — herbs, oils, essences, and raw materials. Raysha doesn't ask what you're making.",
      status: "live",
      path: "/beacon/home-hearth-district/rayshas-recipe-works",
    },
    {
      name: "Copper Pot Steam",
      description: "A public bathhouse. Common area or private steam rooms. No frills. Clean.",
      status: "live",
      path: "/beacon/home-hearth-district/copper-pot-steam",
    },
  ],

  roads: [
    {
      name: "Southeast Beacon Street",
      direction: "Back to the gate",
      status: "live",
      path: "/beacon/southeast-beacon-street",
    },
    {
      name: "District Interior — Left",
      direction: "Left road",
      status: "coming-soon",
      path: null,
    },
    {
      name: "District Interior — Right",
      direction: "Right road",
      status: "coming-soon",
      path: null,
    },
  ],
};
