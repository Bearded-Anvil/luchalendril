export const copperPotSteam = {
  id: "copper-pot-steam",
  name: "Copper Pot Steam",
  image: "/copper-pot-steam.jpg",
  tagline: "Cleanse. Refresh. Renew.",
  path: "/beacon/home-hearth-district/copper-pot-steam",

  signs: [
    `A large copper sign hung from an iron bracket above the entrance — shaped like a broad cauldron kettle, with the words "Copper Pot Steam" raised in the copper itself. Orange and red paint beneath the kettle suggests fire.`,
    `"Cleanse. Refresh. Renew." — board beside the entrance door.`,
  ],

  sceneDescription: `As you enter the Copper Pot, you are instantly hit with a wet heat in the air. Inside, you hear the sound of many voices carrying on conversations and laughter. You're met at the door by a young lady with a clipboard and paper and a young man carrying an armload of towels. "Here for a bath?" she asks.`,

  owner: {
    name: "Maria Hadir",
    race: "Human (Female)",
    dmPrivate: {
      theOperation: `The Copper Pot is a bath house but, on a deeper level, it is a hub for gossip. Many of Maria's employees are trained to remember information and decipher what is worth knowing and what isn't. Even the private baths — especially the private baths — have hidden chambers where they can listen and take notes.`,
      forHire: `For a fee, Maria will subtly agree to listen out for information, but the topic she's listening for must be made clear to her. And the person she's listening out for must use the bath house. Someone living in the Garden District, for example, is more likely to have a home bath rather than using the Copper Pot.`,
    },
  },

  services: [
    {
      name: "Bath Access",
      cost: "5 sp",
      description: "Access to the bath house. Towel included.",
    },
    {
      name: "Private Bath",
      cost: "1 gp",
      description: "A private bath with oils and towels.",
    },
    {
      name: "Add Music",
      cost: "2 sp",
      description: "Added to a private bath booking.",
    },
  ],
};
