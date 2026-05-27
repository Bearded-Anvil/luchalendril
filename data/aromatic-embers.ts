export const aromaticEmbers = {
  id: "aromatic-embers",
  name: "Aromatic Embers",
  image: "/aromatic-embers.jpg",
  tagline: "Fine Pipes, Tobaccos & Accessories.",
  path: "/beacon/home-hearth-district/aromatic-embers",

  signs: [
    `A flat carved wooden pipe mounted above the door — the smoke from the bowl has been shaped into letters: "Aromatic Embers."`,
    `"Fine Pipes, Tobaccos & Accessories" — smaller sign hung below the front window.`,
    `"A Good Pipe, A Fine Tobacco, and Good Company Make Life Worth Savouring." — posted inside, near the door.`,
    `"A Moment's Quiet Smoke Is A Moment Well Spent." — mounted above the workbench.`,
  ],

  sceneDescription: `When you open the door you are instantly surrounded with the amalgam of smells and aromas. Vanilla, maple, mint… somehow… a breeze? Hillsides? You can't explain it but somehow these aromas bring back memories of places you've been… people you've spoken to…

Leather chairs and a sofa, all deep browns with brass buttons, make up a sitting area for guests to come share a pipe while they tell their latest tales. Beyond the sitting area, on the left, is Todd's work bench. A mounted table vice, wood working tools, hand held drills, sand papers and more are either mounted on the wall above it or laying on the countertop.

Along the right wall, slightly angled forward for easier reach, are rows of large jars filled with tobaccos of different scents and flavors. The back wall is a tall set of shelves backed with green felt. The shelves display a wide variety of smoking pipes, hand carved, including long churchwardens and small stubby pipes as well. Boxes of cigars fill one shelf, angled so that their contents are visible.`,

  owner: {
    name: "Todd Smokestack",
    race: "Dwarf (Male) — Very old",
    appearance: `Shaggy white hair under his small plaid hat he wears atop his head. He has brown eyes and wears a gray overcoat with a white shirt underneath and green pants. He's getting old but he's still stout and carries himself with confidence.`,
    goals: `Todd has reached retirement and does this hobby for something to keep him busy. His goals are to spread this relaxing tradition to as many people as he can.`,
    dmPrivate: {
      background: `Todd has been in Beacon longer than anyone in the district can reliably remember. He was here before the current City Watch structure, before the Garden District was walled, before the road names were standardized. He has watched the city change around him and has opinions about all of it.`,
      whatHeKnows: `The sitting area has hosted a remarkable range of people over the decades. Merchants, guards, city officials, sailors passing through, people who needed somewhere warm and quiet and didn't want to explain themselves. Todd has heard things. He does not volunteer information, but if the party asks him about the city — its history, its people, its patterns — he will tell them what he knows with the candor of someone who no longer has anything to lose by honesty.`,
      theBlends: `Todd developed his magical blends over decades of experimentation. He will not explain exactly how. If asked, he says he found that the right material, dried and prepared correctly, carries a memory of what it was. He works with that. He has never written the recipes down. He does not intend to.`,
      hookNote: `If the party needs historical information about Beacon — something that happened years or decades ago, a family name, a building that used to be something else — Todd may know. He will not perform expertise. He will simply answer what he knows and say clearly when he doesn't.`,
    },
  },

  blendNote: `1 pinch = 1 use. Interruption: Taking damage that knocks you prone or moves your character interrupts the smoke. Dispel magic, used on smoke, ends the smoke immediately — no roll necessary.`,

  magicalBlends: [
    {
      name: "Muffleleaf Blend",
      cost: "5 gp per pinch",
      duration: "30 minutes (unless interrupted)",
      flavorText: `For some reason, when the smell of this blend reaches your nostrils, you can't help but think of a strong breeze cooling you while you stand atop a high bluff.`,
      effect: `When this blend is being puffed, the smoke that rings around the user and those within 5' of them hangs thick in the air and sound has a hard time punching through. Anyone outside the ring of smoke cannot hear the words spoken inside the 15' radius of smoke. Magical hearing spells and devices can penetrate.`,
    },
    {
      name: "Restwell Aromatic",
      cost: "10 gp per pinch",
      duration: "One long rest",
      flavorText: `As you begin to dream, you feel a warmth flow inside you. Comfort. And, suddenly, as if choosing from a store's inventory, you find yourself picking what you dream about this night.`,
      effect: `Restwell doesn't necessarily make one sleepy, but those who smell it during their slumber dream of peaceful dreams and sleep very well. If this aromatic is puffed during a long rest, everyone sleeping in the camp (or area) wake up with 5 temporary hit points. Cannot be stacked.`,
    },
    {
      name: "Dried Magebane",
      cost: "25 gp per pinch",
      duration: "30 minutes (unless interrupted)",
      flavorText: `Magebane isn't a pleasant smell. When burned, its lack of pleasantness is even less as it almost smells like sulfur and ash. Not one to be smoked for pleasure, most find the smell is worth the effect.`,
      effect: `A cloud of Magebane snakes through the user and allies within 10' of him. Magebane, being a poison that weakens arcane powers in casters, muffles incoming spells that pass through it. Any spell attacks hitting a friendly creature within the Dried Magebane halve their damage.`,
    },
    {
      name: "Clarity Blend",
      cost: "25 gp per pinch",
      duration: "15 minutes after use (takes 10 minutes to smoke)",
      flavorText: `Taken from a medicinal herb to help one calm their nerves as a sedative, Todd has found just the right amount to puff that will give the calming of the nerves without causing the user, or those around them, to sleep.`,
      effect: `After taking 10 min to smoke a pinch of Todd's Clarity Blend, the user and all party members within 10' of the user gain advantage on WIS saving throws.`,
    },
    {
      name: "Puff of Hilarity",
      cost: "40 gp per pinch",
      duration: "While being puffed (affects creatures within 10' of user)",
      flavorText: `A morbid way to die, many a traveler confused the berries of the Humor Bush for edible fruits. Their bodies were often found nearby with a smile still on their face.`,
      effect: `Todd's dried and crushed version of these berries has a different effect entirely. While this blend is being puffed, every creature within 10' of the user must pass a WIS saving throw of DC 14 or begin laughing. A new test must be taken at the end of each of their rounds. After a failed saving throw, the creature finds itself unable to keep from laughing (or whatever action that would be depending on the species). Creatures casting spells that require them to speak (verbal) cannot cast those spells on a failed save.`,
    },
    {
      name: "Todd's Illusionary Blend",
      cost: "30 gp per pinch",
      duration: "As long as the user puffs it (one pinch takes 20 minutes to burn through)",
      flavorText: `Todd spent a long time perfecting the illusionary blend, largely when he was younger and wanted to smoke his pipe without getting caught.`,
      effect: `So long as the user is puffing Todd's Illusionary Blend, the smoke from the pipe will affect a 20' radius centered on the pipe. This smoke has a magical way of replicating the looks of things around it, essentially forming a dome of illusion around the area that resembles its surroundings. Anyone attempting to see inside the 20' radius must pass a Perception check, DC 14, or miss it completely. Enemies and creatures can wander inside it on accident without any consequences (unless the ones inside are ready for them).`,
    },
  ],

  mundanePipes: [
    { name: "Clay Pipe", cost: "2 sp", description: "Simple. Functional. Breaks if dropped hard enough." },
    { name: "Briar Pipe", cost: "8 sp", description: "Standard working pipe. Good grain, clean draw, comfortable in the hand." },
    { name: "Cherry Wood Pipe", cost: "14 sp", description: "A slightly sweet wood that adds its own quiet note to the blend." },
    { name: "Carved Bone Pipe", cost: "22 sp", description: "Heavier than it looks. Runs cooler than briar." },
    { name: "Rosewood Long Pipe (Churchwarden)", cost: "2 gp", description: "A long-stemmed pipe for a long evening. Keeps the heat away from your face." },
  ],

  accessories: [
    { name: "Leather Tobacco Pouch", cost: "1 sp", description: "Keeps tobacco dry. Fits about two ounces." },
    { name: "Oilskin Pipe Wrap", cost: "4 sp", description: "Protects a pipe from impact in a pack or pocket." },
    { name: "Brass Tamper", cost: "3 sp", description: "For packing and clearing the bowl." },
    { name: "Pipe Stand, Simple", cost: "2 sp", description: "A turned wooden stand. Keeps the pipe upright between draws." },
    { name: "Pipe Cleaning Kit", cost: "5 sp", description: "Brushes, picks, and a cloth." },
  ],
};
