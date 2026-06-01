export const terrysTannery = {
  id: "terrys-tannery",
  name: "Terry's Tannery",
  street: "Pine Loft South",
  city: "Pine Loft",
  image: "/terrys-tannery.jpg",
  imageLarge: "/terrys-tannery.jpg",

  sceneDescription: `You smell it before you see it — a thick, heavy smell that isn't quite rot and isn't quite animal but is somewhere in between and not easy to ignore. Terry's Tannery sits open to the street, hides hanging from wooden frames in various stages of curing, pale and dark and everything between. A sign on the post reads Quality Leather — Built to Last. A simple flat table serves as Terry's workbench, a hide stretched across it as he drags a scraper across it with the patient focus of someone who has done this ten thousand times. Wooden frames lean against the front of the shop in clusters, a few large tanning barrels nearby with leather soaking inside. His tools are laid out in a simple row to his right. He looks up as you approach, nods, and sets the scraper down to give you his attention. He doesn't say anything yet — he just waits to hear what you need.`,

  owner: {
    name: "Terry Kresdon",
    race: "Human",
    age: "Late 30s",
    appearance: `Brown hair and a short beard, the kind of man who looks like he works outdoors regardless of where he is. A long gray shirt under a thick tanning apron, both stained with the evidence of his trade. A kind man, direct and practical. He doesn't dress up the work or apologize for the smell. He just does the job and does it well.`,
  },

  dmPrivate: {
    personality: `Terry is easy to talk to — not chatty, but genuinely warm when engaged. He'll answer questions honestly and offer an opinion if you ask for one. He's comfortable with silence and equally comfortable with conversation. He doesn't press for details about why you need something.`,
    desires: `Terry wants to make good leather and sell it to people who'll use it right. He takes quiet pride in the quality of his work and notices when something he made is still being used well months later by a returning traveler.`,
    fears: `Terry worries about the forest. Not in an anxious way — more in the practical way of someone who lives near it. He's heard things come out of the treeline at night. He's seen tracks. He keeps it to himself mostly but he thinks about it.`,
    questHooks: [
      {
        title: "The Hide He Won't Talk About",
        description: `On a shelf in the back of the shop, wrapped in cloth, is a hide Terry hasn't worked yet. He found it stretched across a frame outside his shop one morning — no note, no indication of who left it. The hide is from no animal he recognizes. He hasn't touched it. He hasn't thrown it away either.`,
      },
      {
        title: "Forest Knowledge",
        description: `Terry processes a lot of game that hunters bring in from the forest south of Pine Loft. He knows what lives out there better than most — and more importantly, he knows when the mix of what hunters are bringing in starts to change. Lately, they're bringing in less.`,
      },
    ],
    secretItems: [
      {
        name: "Custom Leather Work",
        description: `Terry can craft leather items to specification — straps, sheaths, custom pouches, bindings, or reinforced patches for armor. He'll ask a few questions, take measurements if needed, and have it ready in a day or two.`,
        price: "Varies — ask Terry",
        note: `He won't charge for something simple. Complex custom work takes time and materials.`,
      },
    ],
  },

  inventory: [
    {
      name: "Leather Strips (Bundle of 10)",
      description: "Cured leather strips in varying widths. Used for bindings, lashing, repairs, and basic crafting. A staple for anyone doing field work.",
      price: "4 cp",
    },
    {
      name: "Leather Sheet (Large)",
      description: "A full cured hide, ready to cut and work. Enough material to craft a small garment, a pack, or several pouches.",
      price: "8 sp",
    },
    {
      name: "Tanning Oil (Vial)",
      description: "Conditioning oil that softens and waterproofs leather. Apply to boots, armor, or leather gear to extend its life and keep it supple in wet conditions.",
      price: "3 cp",
      mechanical: "Treated leather gear resists water damage. At DM discretion, extends the life of leather armor and prevents penalties from prolonged wet conditions.",
    },
    {
      name: "Leather Cord (10 ft)",
      description: "Thin, strong braided leather cord. Used for lashing, snares, binding, and general utility. Stronger than rope of the same diameter.",
      price: "2 cp",
    },
    {
      name: "The Trapper's Pouch",
      description: "A well-constructed leather belt pouch, double-stitched and treated for water resistance. The clever part is inside: a false bottom sewn into the base creates a hidden second compartment just deep enough for folded documents, small coins, or a folded cloth. The seam is flush and the stitching matches — a DC 14 Investigation check to notice it isn't just a regular pouch.",
      price: "18 gp",
      mechanical: "Hidden inner compartment. DC 14 Investigation to detect. Water-resistant exterior. Holds standard pouch contents in the main compartment.",
    },
    {
      name: "The Steady Quiver",
      description: "A leather quiver reinforced along the spine and fitted with a soft-lined interior that keeps arrows from rattling. Carries 20 arrows. The padding reduces noise when moving — advantage on Stealth checks made while sneaking, provided the wearer is not in medium or heavy armor.",
      price: "22 gp",
      mechanical: "Holds 20 arrows. Advantage on Stealth checks while sneaking (light or no armor only). Arrows draw silently — no sound on retrieval.",
    },
  ],

  services: [
    {
      name: "Armor Repair (Leather)",
      description: "Re-stitching, patching, and conditioning for leather armor. Terry inspects the piece and quotes on-site. Most standard repairs done same day.",
      price: "5–20 sp depending on damage",
    },
    {
      name: "Hide Processing",
      description: "Bring Terry a raw hide from a hunt and he'll cure and finish it. Useful for crafters or anyone wanting to sell processed leather rather than raw skin.",
      price: "5 cp per hide",
    },
    {
      name: "Leather Conditioning",
      description: "Full treatment of leather armor or gear — cleaning, oiling, and sealing. Keeps the material in good condition and extends its useful life.",
      price: "3 sp",
      mechanical: "Treated armor or gear gains resistance to wear-based degradation at DM discretion. In campaigns tracking gear condition, this resets the item's wear clock.",
    },
    {
      name: "Sheath or Holster (Custom)",
      description: "A fitted leather sheath or holster made to a specific weapon. Terry will measure and build to fit. Takes one day.",
      price: "1–3 gp depending on size",
      mechanical: "A properly fitted sheath grants a +2 bonus to Sleight of Hand checks when concealing the weapon, as it draws and settles cleanly without adjustment.",
    },
  ],
};
