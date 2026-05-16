export const lighthouseInn = {
  id: "lighthouse-inn",
  name: "Lighthouse Inn",
  tagline: "Good Rest. Safe Harbor. New Day.",
  image: "/lighthouse-inn.jpg",

  sceneDescription: `The lobby of the Lighthouse Inn looks like someone took the Dock Yard boardwalk and put a roof on it. Dark wood slats cover the floor, and the first three feet of every wall is the same shiplap you'd find on the docks. Above that, the walls are painted white, and the ceiling — finished, not the open rafters you find most places in Beacon — is white as well. The front counter is a lighter wood with a pastel green countertop, and to its left, a wrought iron spiral staircase curls upward the way you'd expect to find in a lighthouse. To the right, a five-foot model of a lighthouse stands against the wall, a warm yellow-orange light shining from its top and cutting straight across the room.

And through all of it — the floor, the light, the space between your feet and the counter — drifts a thin white fog, kept knee-height by some easy enchantment that never quite fades. It moves when you walk through it. It settles when you stop. The rooms down the hall wait behind it, quiet, lit softly, and still.`,

  owner: {
    name: "Vyncel Finrise",
    race: "Half-Elf (Male)",
    appearance: `Blonde hair cut close. A blonde beard that narrows to a clean spike at his chest. Blue eyes that watch the door with the practiced calm of someone who has checked in a very wide range of people and stopped being surprised by any of them. He carries himself like a man who is good at a job he didn't originally plan to have and has quietly made peace with that.`,
    note: `The Lighthouse Inn is funded and operated by the City of Beacon. Vyncel works for the city — he does not own the inn.`,
  },

  rooms: [
    {
      name: "Single Room",
      cost: "2 SP / night",
      tier: "standard",
      included: [
        "One bed",
        "Small table and chair",
        "Chest of drawers",
        "Chamber pot behind a folding privacy wall",
      ],
      dmNote: `A common room. Clean and functional. The kind of place you sleep without complaint and don't remember fondly.`,
    },
    {
      name: "Double Bed Room",
      cost: "5 SP / night",
      tier: "standard",
      included: [
        "Two beds",
        "Table with two chairs",
        "Two chamber pots behind folding privacy walls",
        "Chest of drawers",
      ],
      dmNote: `Same layout as the single room, scaled for two. Good for a pair traveling together who aren't ready to spring for the suite.`,
    },
    {
      name: "Suite",
      cost: "2 GP / night",
      tier: "suite",
      included: [
        "Large single bed",
        "Spacious room with full table and chairs",
        "Fireplace",
        "Bath service included",
        "Small balcony overlooking Central Bowl Street",
        "Voucher for one free meal at Roundabout Way",
      ],
      dmNote: `The suite balcony faces Central Bowl Street and offers a clear view of the median and the road toward Braver's Temple. Tactically, it's an excellent observation point. The Roundabout Way voucher is for the restaurant located next to Braver's Temple — that location is not yet open but the voucher is valid when it does.`,
    },
  ],

  longStays: `Long stays are welcome and Vyncel will negotiate a rate for guests staying a week or more. He keeps a short ledger of repeat guests and has been known to hold a room without a deposit for someone he recognizes.`,

  dmPrivate: {
    goals: `Vyncel took the job running the Lighthouse Inn because he wanted to learn the trade. He's been here long enough that he knows everything about running an inn and nothing about affording one. The gap between "learning" and "doing it for himself" is money, and the City of Beacon pays him well enough to stay but not well enough to leave. He's not bitter about it — he's honest about it, which is a different thing.`,
    cityNote: `The Lighthouse Inn is government property. Vyncel reports to the City of Beacon, not to a private owner. This means the inn is stable, well-maintained, and will not close — but it also means Vyncel has no authority over the inn's future and can't make major changes without city approval. If the party ever needs to deal with the city government through a low-stakes entry point, Vyncel is a reasonable first contact.`,
    roundaboutWayNote: `Roundabout Way is the restaurant located next to Braver's Temple at the top of Central Bowl Street. It does not yet exist as a playable location. Suite guests receive a voucher for one free meal there. When the location is built, honor outstanding vouchers — Vyncel issues them in good faith.`,
    suiteBalcony: `The suite balcony overlooks Central Bowl Street. Any guest in the suite who uses it as a vantage point has a clear view of the median, the street in both directions, and the front of Braver's Temple at the far end of the road. Useful for surveillance, ambush setup, or simply watching for someone to pass below.`,
  },
};
