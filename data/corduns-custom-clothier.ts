export const cordunsCustomClothier = {
  id: "corduns-custom-clothier",
  name: "Cordun's Custom Clothier",
  tagline: "Fit for a King",
  image: "/corduns-clothier.jpg",

  sceneDescription: `Cordun's is white. The floors are white marble, the walls are white, the ceiling is white, the counter is white, and the mannequins standing in their places around the room are white. The lanterns are enchanted — no flame, no flicker, just a perfectly even, cold bright light that reaches every corner without shadow. In a room this controlled, the garments on the mannequins hit you harder for it: a floor-length red dress, a forest-green gown with gold trim, a deep navy suit with embroidered lapels, a purple robe with silver threading. They are not for sale. They are proof.

The counter in the center of the room is a square — eight feet by eight feet — and Xavien Cordun stands inside it, in the center, in white, holding a glass of red wine. The left side of the counter is tooled out for work: scissors, knives, measuring tapes, all arranged the way a surgeon arranges instruments. The right side is spools of thread — every color, standing upright on pegs, perfectly spaced, running the full length of the counter. Across the front, open design books show sketches of garments from Beacon and from other cities. On the face of the counter, in letters that assume you will do as they say:

Custom Orders Only. Allow 2 weeks for completion of commissions.`,

  owner: {
    name: "Xavien Cordun",
    race: "Elf (Female)",
    appearance: `Tall for an elf — six foot one. Long white hair worn loose. Blue eyes that take inventory of everyone who walks in and generally find the result wanting. She wears floor-length dresses that narrow close around her ankles, and she moves in them as if they were designed specifically for this room, which they were, because she made them. She almost never sets down her wine glass. Her family owns a vineyard outside of Beacon.`,
    personality: `Xavien is entirely confident in her own judgment — about fashion, about taste, and about the person standing across the counter from her. She will not pretend to have uncertainty she doesn't feel. She will not tell you your idea is good when she thinks it isn't. She will, however, make exactly what you want, because that is the job, and she is exceptional at the job. She simply won't compliment you while doing it.`,
  },

  commission: {
    headline: "Custom Orders Only",
    turnaround: "2 weeks for completion of commissions",
    pricing: "100 gp – 200 gp depending on complexity",
    pricingNote: "Simpler garments — a well-cut shirt, serviceable traveling clothes — fall toward the lower end. Detailed work with specific embroidery, layered materials, or complex cuts commands the higher rate. Xavien sets the price. Negotiation is not encouraged.",
    whatCanBeMade: [
      "Floor-length gowns and formal dresses",
      "Fine shirts, breeches, and tailored suits",
      "Personalized robes — academic, ceremonial, or traveling",
      "Cloaks and fitted outer garments",
      "Any garment in any color, cut, or material available in the shop",
    ],
    materials: `Wools for cold climates. Light silks and thin weaves for warm ones. Shiny fabrics, dull fabrics, hand-spun yarns. A spinning wheel stands in the corner for customers who want to see work in progress. The thread wall covers every color on the right side of the counter. Xavien selects the material for each commission after the consultation — she'll accept input, but she'll tell you if she disagrees.`,
    noEnchantments: `Xavien does not enchant her work. The garments are extraordinary in craft, not magic. If a customer asks about enchantments, she will look at them the way one looks at someone who has asked a question beneath acknowledgment.`,
  },

  dmPrivate: {
    personalityNotes: `Xavien is not cruel — she's indifferent in the way that only truly confident people manage. She doesn't dislike her customers; she just doesn't particularly rate them. Play her as politely dismissive. She won't insult anyone directly. She'll simply fail to be impressed by anything they say, and respond to all fashion suggestions with a pause that communicates everything she's chosen not to say aloud.`,
    measuringProcess: `When a commission is placed, Xavien will insist on taking measurements herself. Arms, legs, chest, shoulders, neck, inseam — the full process. Make it take a moment. Make it a little uncomfortable. She'll call out measurements aloud in a flat, professional voice while making notes in her book. If a player protests or seems embarrassed, she looks at them with complete incomprehension. "This is how clothing is made." She doesn't say it unkindly. She says it the way you'd explain water to someone confused about rain.`,
    pricingGuidance: `Charge toward the lower end (100 gp) for simple requests: a cloak in a specific color, a fine shirt, traveling clothes that fit properly. Charge toward the higher end (200 gp) for detailed descriptions: specific embroidery, layered pieces, garments that serve a character's specific look or identity. If a player describes exactly what their character looks like, this is exactly the kind of scene the shop exists for — let them have it.`,
    wineNote: `Her family owns a vineyard outside of Beacon. If anyone comments on the wine glass, she'll hold it up slightly and say the name of the vineyard as though it should be familiar. It probably isn't. She'll notice.`,
  },
};
