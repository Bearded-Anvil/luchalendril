export const travelersNest = {
  id: "travelers-nest",
  name: "The Traveler's Nest",
  tagline: "Long Term Housing For Rent",
  street: "Southwest Beacon Street",
  city: "Beacon",
  image: "/travelers-nest.jpg",

  sceneDescription: `As you push through the doors of the Traveler's Nest, you are pleasantly surprised by what looks like an indoor flower garden. Little round tables with metal frames and metal mesh tops dot the room — about eight of them across the wide lobby floor, surrounded by decorative metal mesh chairs. Silver decorative lanterns keep the room bright alongside large open windows that allow sunlight to pour through. The floor is white tile. The walls are white-painted cob. Between the windows, mounted planters hang high up the walls and ivy cascades down in curtains between them.

The front counter is very light wood — nearly white, slightly sandstone — centered against the back wall. On either side, tall rectangular lanterns glow softly with paper-walled panels that cast more of a warm haze than direct light. Behind the counter, a set of silver metal shelves displays large glass jars filled with pastries, nuts, breads, seeds, and snacks. To the left of the counter, a closed door. To the right, a staircase leading up.`,

  owner: {
    name: "Iylea Windsong",
    race: "Elf",
    age: "Looks young",
    appearance: `A young-looking elven woman with black hair and fair skin. She carries herself with the ease of someone who has never needed to hurry. Polite and professional in every exchange — the kind of host who remembers your name after one visit and your preferences after two. She genuinely believes the customer is almost always right, and she has the wealth to act on it: refunds, free nights, and personal adjustments are extended without making anyone feel small for asking.`,
  },

  dmPrivate: {
    goals: `Iylea feels set for life. She is married to a young elven man who helps manage the enterprise, and together they have accumulated more money than either knows what to do with. She is ready to retire — fully and without guilt — and let the Traveler's Nest locations fund that retirement without her daily presence.`,
    note: `Iylea will negotiate. If players push back on pricing or express dissatisfaction, she will offer discounts, free nights, or upgrades rather than lose a customer. This is a business habit she has not yet let go of, even as she edges toward retirement. She is not a pushover — she simply values reputation over a few gold.`,
  },

  merchandise: [
    {
      name: "Traveler's Restful Coffee",
      description: "A pre-ground coffee ready to pour over with boiling water. Sold in a glass jar stamped with Iylea's signature TN crest.",
      effect: "A cup is enough to remove one level of exhaustion.",
      cost: "1 gp per serving",
    },
    {
      name: "The Mental Rest Tea",
      description: "A jar of tea leaves — partially ground, partially intact. A special blend known only to Iylea and her husband, brought in from her home territory.",
      effect: "Drinking a cup grants advantage on saves against emotional effects until the next long rest. This includes fear, rage, panic, and magical laughter.",
      cost: "5 gp per serving",
    },
    {
      name: "The Warm Traveler Hot Chocolate",
      description: "A blend of beans and dried leaves that dissolve in hot water or milk. Rich, full, and deeply warming. Sold in the Nest's standard glass jar.",
      effect: "Grants resistance to environmental cold (non-magical) until the next long rest.",
      cost: "1 gp per serving",
    },
    {
      name: "Mind's Nest Elixir",
      description: "Made from crushed and strained mushrooms shipped in through White Bay from Iylea's home territory. Best served hot, directly off a fire.",
      effect: "Grants advantage on WIS and INT checks and saving throws until the next long rest.",
      cost: "4 gp per serving",
    },
    {
      name: "Travel's End Snacks",
      description: "Muffins, pastries, dried seeds, nuts. Things to eat and simply enjoy for no other reason than pleasure. The jar is the same stamped glass as the rest.",
      effect: null,
      cost: "2 sp per serving",
    },
  ],

  rooms: {
    description: "The Traveler's Nest rents by the month only. There are no nightly rates, no short stays, and no exceptions.",
    cost: "100 gp per month",
    note: "Whether you stay the full month or not, the rate is the same.",
    dmNote: `The rooms here are lavish. Six rooms per floor across four floors — all of them large. Each room has two thick, comfortable beds with extra pillows stored in the walk-in closets. A fireplace with a fur rug and bundled firewood sits ready. Every room has a window looking out over the street and a small balcony with flower planters along the railing, well-kept and blooming. On arrival, each room already contains a large Traveler's Nest jar filled with snacks: an assortment of candies, pastries, dried vegetables, and mixed nuts.`,
  },
};
