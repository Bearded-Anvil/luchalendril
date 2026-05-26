export const copperPotSteam = {
  id: "copper-pot-steam",
  name: "Copper Pot Steam",
  image: "/home-hearth-district.jpg",
  tagline: "Cleanse. Refresh. Renew.",
  path: "/beacon/home-hearth-district/copper-pot-steam",

  signs: [
    `A large copper sign hung from an iron bracket above the entrance — shaped like a broad cauldron kettle, with the words "Copper Pot Steam" raised in the copper itself. Orange and red paint beneath the kettle suggests fire.`,
    `"Public Bathhouse — Cleanse, Refresh, Renew" — board beside the entrance door.`,
  ],

  sceneDescription: `The entrance to the Copper Pot Steam is through a wide arched door set into old stone. The building is older than the ones around it. The stone is darker and heavier, and the arch above the door has seen real weathering.

Inside, the desk is immediately to the right. Behind it, a man sits on a stool with a ledger open and a small bell on the counter beside it. He looks up when you enter.

The air is different in here. Warmer. There's moisture in it — not unpleasant, just present. The smell is clean with something underneath it, something mineral. Past the desk, a corridor runs deeper into the building with dark wooden doors on both sides, each one identical, each one closed.

Somewhere deeper in, you can hear the low hiss of steam.

The man behind the desk has a card in front of him that lists the services and prices. He sets it forward for you without being asked.

"Common area's open now," he says. "Private rooms are available. Name and coin up front."`,

  owner: {
    name: "Darro Valt",
    race: "Dwarf (Male)",
    appearance: `Compact and methodical, with close-cut grey hair and a short beard kept very neat. He wears a plain grey apron over a dark shirt. His hands are always dry — a notable thing in a bathhouse — because he stays behind the desk. He does not run the baths personally. He manages the establishment.`,
    personality: `Professional and impersonal in the way of someone who runs a business that sees strangers every day. He is not cold, but he does not engage in small talk unless a guest initiates and maintains it. He runs the Copper Pot Steam with a kind of quiet authority — the attendants move efficiently, the rooms are always ready, nothing is ever out of place. He is proud of this, in a way he would not describe as pride.`,
    dmPrivate: {
      background: `Darro has owned the Copper Pot Steam for eleven years. He bought it from the family that built it and has changed very little — the bones are good, and good bones deserve respect. He has regulars he knows by name, regulars he knows by habit, and regulars he knows only by the day and time they appear.`,
      whatHeHears: `Private rooms at the Copper Pot Steam are private in the sense that the doors lock and the steam covers voices. People talk. Darro does not listen deliberately — he is always at his desk — but his attendants sometimes hear things, and the things they hear sometimes reach him. He keeps this information to himself. He would sell it if the price were right and the buyer were not someone his regulars would encounter.`,
      hookNote: `A notable figure in Beacon — someone the players would recognize — maintains a standing weekly booking for a private room. They always arrive alone. Darro will confirm the booking exists if asked correctly. He will not confirm the name without significant incentive.`,
    },
  },

  services: [
    {
      name: "Common Area Bath",
      cost: "3 cp",
      description: "Access to the shared bathing pool. Clean water, changed twice daily. One towel included. No time limit during open hours.",
    },
    {
      name: "Private Steam Room",
      cost: "1 sp / 30 minutes",
      description: "A private stone room with a small steam vent and a bench. Door locks from the inside. Clean towel provided. Additional time purchased at the desk.",
    },
    {
      name: "Full Treatment",
      cost: "3 sp",
      description: "Private room, lye soap, a coarse scrubbing cloth, a clean rinse, and a dry towel. Thirty minutes or longer at no extra charge, within reason.",
    },
    {
      name: "Soak Package",
      cost: "5 sp",
      description: "Private room, scented oils at the steam vent (three options available), two towels, and no time limit up to two hours. Popular for the end of a long day or the start of an important evening.",
    },
    {
      name: "Laundry Service",
      cost: "2 sp per bundle",
      description: "Clothing left at the desk is cleaned and dried while you bathe. Ready in approximately two hours.",
    },
  ],

  dmNotes: `The Copper Pot Steam is a place where people who do not otherwise interact with one another are briefly in the same building. Dock workers, merchants, minor city officials, Guild members — the common area puts them together without ceremony.

The private rooms are where conversations happen. The locked door and the noise of the steam vent create an effective privacy that people trust, sometimes more than they should. If the party needs to meet someone discreetly, or has reason to follow someone to a meeting, the Copper Pot Steam is a reasonable venue.

Darro's standing client with the weekly booking is someone the DM should determine based on the campaign. It should be someone the players have already encountered or heard of. The booking exists. The reason is yours to decide.

The laundry service is practical and worth mentioning if the party has been somewhere messy. Darro charges fairly and does not ask what caused the stains.`,
};
