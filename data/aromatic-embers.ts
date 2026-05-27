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

  sceneDescription: `When you open the door, you are instantly surrounded by the amalgam of smells and aromas. Vanilla. Maple. Mint. And somehow — a breeze? Hillsides? You can't explain it, but these aromas bring back memories. Places you've been. People you've spoken to.

Leather chairs and a sofa, all deep brown with brass buttons, make up a sitting area just inside the door. A low table sits at the center, a lantern burning quietly on it alongside a pipe stand and a small ashtray. This is not a waiting area. People come here to stay for a while.

To the left, beyond the sitting area, is a workbench — mounted table vice, woodworking tools, hand drills, sandpapers. Everything either hung on the wall above it or laid flat on the counter. It is a working bench, not a display.

Along the right wall, rows of large glass jars lean slightly forward — angled for reach. Each jar holds a different blend. The labels are written in an old hand: Vanilla Cream, Maple Leaf, Wintergreen, Cherry Wood, Black Shadow, Nightcap. Dozens more.

The back wall is a tall set of shelves lined with green felt. Pipes fill every tier — hand carved, including long churchwardens that lean at an angle and small stubby pipes set upright. One shelf holds boxes of cigars, angled so their contents are visible through the lids.

Behind the counter, an old man holds a pipe loosely in one hand and watches you look around. He does not rush you.`,

  owner: {
    name: "Todd Smokestack",
    race: "Dwarf (Male) — Very old",
    appearance: `Shaggy white hair spills out from beneath a small plaid cap worn atop his head. Brown eyes, warm and alert. A thick white beard, untrimmed but not unkempt. He wears a grey overcoat over a white shirt and green pants, and carries himself with the quiet confidence of someone who has earned the right to move slowly. He is getting old. He is still stout.`,
    personality: `Todd is at ease in a way that most people never quite reach. He has done what he set out to do in life and now does this — which is less a business than a calling. He will talk to anyone who wants to talk, and he will sit quietly with anyone who doesn't. He is not trying to sell you anything. He is trying to share something. There is a difference, and you feel it the moment you walk in.`,
    goals: `Todd has reached the end of what most people mean when they say "a life." His goal now is simple: to spread the tradition of the pipe and the blend to as many people as he can. He believes, sincerely, that a good smoke shared in good company is one of the genuinely civilizing acts available to a person. He is not wrong.`,
    dmPrivate: {
      background: `Todd has been in Beacon longer than anyone in the district can reliably remember. He was here before the current City Watch structure, before the Garden District was walled, before the road names were standardized. He has watched the city change around him and has opinions about all of it.`,
      whatHeKnows: `The sitting area has hosted a remarkable range of people over the decades. Merchants, guards, city officials, sailors passing through, people who needed somewhere warm and quiet and didn't want to explain themselves. Todd has heard things. He does not volunteer information, but if the party asks him about the city — its history, its people, its patterns — he will tell them what he knows with the candor of someone who no longer has anything to lose by honesty.`,
      theBlends: `Todd developed his magical blends over decades of experimentation. He will not explain exactly how. If asked, he says he found that the right material, dried and prepared correctly, carries a memory of what it was. He works with that. He has never written the recipes down. He does not intend to.`,
      hookNote: `If the party needs historical information about Beacon — something that happened years or decades ago, a family name, a building that used to be something else — Todd may know. He will not perform expertise. He will simply answer what he knows and say clearly when he doesn't.`,
    },
  },

  blendNote: `1 pinch = 1 use. Interruption: Taking damage that knocks you prone or moves your character interrupts the smoke. Dispel magic, used on smoke, ends it immediately — no roll necessary.`,

  magicalBlends: [
    {
      name: "Muffleleaf Blend",
      cost: "5 gp per pinch",
      duration: "30 minutes (unless interrupted)",
      flavorText: `For some reason, when the smell of this blend reaches your nostrils, you can't help but think of a strong breeze cooling you while you stand atop a high bluff.`,
      effect: `When this blend is being puffed, the smoke rings around the user and those within 5' hang thick in the air — sound has a hard time punching through. Anyone outside the ring of smoke cannot hear words spoken inside the 15' radius. Magical hearing spells and devices can penetrate.`,
    },
    {
      name: "Restwell Aromatic",
      cost: "10 gp per pinch",
      duration: "One long rest",
      flavorText: `As you begin to dream, you feel a warmth flow inside you. Comfort. And, suddenly, as if choosing from a store's inventory, you find yourself picking what you dream about this night.`,
      effect: `Restwell doesn't make one sleepy, but those who smell it during their slumber dream of peaceful things and sleep very well. If puffed during a long rest, everyone sleeping in the camp or area wakes up with 5 temporary hit points. Cannot be stacked.`,
    },
    {
      name: "Dried Magebane",
      cost: "25 gp per pinch",
      duration: "30 minutes (unless interrupted)",
      flavorText: `Magebane isn't a pleasant smell. When burned, it's even less pleasant — close to sulfur and ash. Not one to be smoked for pleasure. Most find the smell worth the effect.`,
      effect: `A cloud of Magebane snakes through the user and allies within 10'. Magebane is a poison that weakens arcane powers in casters, muffling incoming spells that pass through it. Any spell attacks hitting a friendly creature within the Dried Magebane cloud deal half damage.`,
    },
    {
      name: "Clarity Blend",
      cost: "25 gp per pinch",
      duration: "15 minutes after use (takes 10 minutes to smoke)",
      flavorText: `Taken from a medicinal herb used to calm the nerves. Todd has found just the right amount to puff that gives the calming effect without causing anyone around him to sleep.`,
      effect: `After taking 10 minutes to smoke a pinch of Clarity Blend, the user and all party members within 10' gain advantage on WIS saving throws for 15 minutes.`,
    },
    {
      name: "Puff of Hilarity",
      cost: "40 gp per pinch",
      duration: "While being puffed",
      flavorText: `A morbid way to die — many a traveler confused the berries of the Humor Bush for edible fruits. Their bodies were often found nearby with a smile still on their face. Todd's dried and crushed version has a different effect entirely.`,
      effect: `While this blend is being puffed, every creature within 10' of the user must pass a WIS saving throw (DC 14) or begin laughing. A new save must be taken at the end of each of their rounds. On a failed save, the creature cannot stop laughing — or whatever the equivalent is for their species. Creatures casting spells with a verbal component cannot cast those spells on a failed save.`,
    },
    {
      name: "Todd's Illusionary Blend",
      cost: "30 gp per pinch",
      duration: "As long as the user puffs it (one pinch burns for 20 minutes)",
      flavorText: `Todd spent a long time perfecting this blend — largely when he was younger and wanted to smoke his pipe without getting caught.`,
      effect: `The smoke from the pipe affects a 20' radius centered on the pipe. The smoke magically replicates the appearance of its surroundings, forming a dome of illusion around the area. Anyone attempting to see inside must pass a Perception check (DC 14) or miss it completely. Enemies can wander inside accidentally without consequence — unless those inside are ready for them.`,
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
