export const mercysHandsHealing = {
  id: "mercys-hands-healing",
  name: "Mercy's Hand Healing",
  image: "/mercys-hand-healing.jpg",
  tagline: "Mercy's Hand Healing",
  path: "/beacon/home-hearth-district/mercys-hands-healing",

  signs: [
    `A large carved wooden sign above the door — "Mercy's Hand Healing" with a hand below it, palms outward.`,
  ],

  sceneDescription: `When you enter Mercy's Hand you see shelves to your immediate right. Most of the shelves are full of books on healing and herbal remedies. The other shelves have different parts of bones and bone joints, a study and demonstration place for Blessing to help patients understand ailments.

The left wall has a bath tub, large enough for two people. Along the wall, beside the bathtub, are bottles of oils and salts for adding to the bath. Behind the tub, all the way down the left wall, are beds — beds with holes for faces to go in when laying face down. This is where Blessing does adjustments and massages to help with pains and aches.

Along the right hand wall are chairs and several tools and medical devices for working with wounded knees and elbows, necks and spines.`,

  owner: {
    name: "Blessing Hyruff",
    race: "Fawn (Female)",
    appearance: `Light brown fur, deep green hair down to her shoulder blades. Blue eyes that barely seem to glow. Her antlers are short, barely peeking through the tops of her hair. She wears a fitted green dress and a rust orange apron with the Mercy's Hand logo on it.`,
    dmPrivate: {
      fear: `Blessing once had a dream where her healing abilities were strongly needed yet she wasn't nearly capable enough to help all of those in need from whatever disaster had befallen Beacon. Feel free to invent her dream to match whatever disaster or story you're putting in your campaign.`,
      goals: `Blessing is always looking to improve her trade. She's always looking for new ways to heal including herbal, homeopathic and magical spells and potions. Whatever she thinks is coming, she wants to be ready.`,
    },
  },

  services: [
    {
      name: "Poison Nullification",
      cost: "2 sp / 1 gp",
      description: "2 sp for non-deadly poisons. 1 gp for deadly poison removals.",
    },
    {
      name: "Burn Treatments",
      cost: "5 gp",
      description: "If a creature has a burn wound causing pain or recurring damage, Blessing can heal it.",
    },
    {
      name: "Magical Ailments — Lesser",
      cost: "15 gp",
      description: "Anything that can be healed by a lesser spell of restoration.",
    },
    {
      name: "Magical Ailments — Greater",
      cost: "45 gp",
      description: "Anything needing a greater spell of restoration.",
    },
    {
      name: "Broken Bones",
      cost: "20 gp",
      description: "If a creature has a broken bone that needs to be set and mended, Blessing can do this service.",
    },
  ],

  hpHealing: [
    {
      amount: "25% of max health",
      cost: "20 gp",
      note: "",
    },
    {
      amount: "50% of max health",
      cost: "35 gp",
      note: "",
    },
    {
      amount: "75% of max health",
      cost: "60 gp",
      note: "Takes 30 minutes if greater than 100 hp.",
    },
    {
      amount: "100% of max health",
      cost: "85 gp",
      note: "Takes 1 hour if greater than 100 hp.",
    },
  ],
};
