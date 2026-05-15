export const braversGazeBrewery = {
  id: "bravers-gaze-brewery",
  name: "Braver's Gaze Brewery",
  tagline: "Braver's Gaze Sees All. Judges None. Drinks Free.",
  image: "/bravers-gaze-brewery.jpg",

  sceneDescription: `The brewery opens into one enormous room — wide enough that your voice loses some of its confidence. On the right wall, corked ale barrels are stacked in a massive timber rack, floor to ceiling, each one branded on the side with the letters BGB. A rolling ladder leans against the rack and could reach the highest shelf if anyone were brave or foolish enough to climb it. On the left, a handful of tables sit in the lantern light for those who came to sit down before they drink standing up. Two thick support beams rise through the center of the room to an A-frame ceiling with open rafters, and from them hang two chandelier lanterns that throw warm, unsteady light across the brick floor. At the back, a wide open window looks through to the brewing room beyond — massive wooden vats, metal drums, and small fires glowing underneath. The smell of hops and roasting grain hangs in the air like it belongs there. A chalkboard near the barrel wall reads: "Braver's Gaze Sees All. Judges None. Drinks Free."`,

  owner: {
    name: "Garren Stoutmug",
    race: "Dwarf (Male)",
    appearance: `Red mohawk. Red beard. Built like a barrel himself — wide through the shoulders and rounder through the middle. He is loud in every sense of the word: loud voice, loud laugh, loud opinions. He almost always has a mug in his hand and rarely sets it down for long. As the day goes on, he gets progressively louder. By evening, he locks up the brewery, crosses the street, and spends the rest of the night at the Shipwreck Tavern — laughing, singing, and losing card games he insists he's winning.`,
  },

  freeSample: {
    trigger: `If Garren is present, he will offer newcomers a free sample of his ale. If accepted, he hands them a cup — barely larger than a shot glass.`,
    readAloud: `In your mouth, the liquid feels thick and sweet, almost like drinking a semi-sweet syrup. In your throat, it feels warm and causes a slight tingling — not painful, just tingling. And as you feel it hit and coat the walls of your stomach, a heat spreads through your belly that, while not quite painful, isn't quite comfortable either. The tingling works its way outward through your body until it reaches your very fingertips and the tips of your toes — and you suddenly realize that you're not in pain now, but you were before. The little, everyday aches and pains in your body cease. You become aware that you've been walking around with minor aches you'd grown so accustomed to that you forgot they existed. No more. You recognize every last one of them now because they're gone. You aren't drunk — the room isn't spinning — you just don't hurt.`,
    garrenDialogue: `Ah, how's that hit ya? I can see yer feelin' it. It'll only last a few minutes before yer back in reality. But if you drink a whole mug — a mug sized like ours on the wall o'er here — it'll last for hours. Oh yeah. And any more than that and ye'll be drunker than a dwarf on Winter's Peak.`,
    effect: `Stoutmug Ale does not heal HP. However, a full mug allows any painful status effect on the creature to be ignored for 8 hours. During this time: the creature has disadvantage on all DEX, INT, and WIS checks. When attempting to sprint or run, the creature must make a DEX saving throw, DC 12, or fall prone at the end of their regular move distance.`,
    dmNote: `The sample only lasts a few minutes — enough to feel the effect but not long enough to benefit from it mechanically. A full purchased mug (available here or at the Shipwreck Tavern across the street) grants the full 8-hour effect. Garren knows exactly what his ale does and is proud of it.`,
  },

  inventory: [
    {
      name: "Stoutmug Mug",
      cost: "50 gp",
      stock: "Unlimited",
      description: "A large wooden mug expertly carved with the face of Braver. Where Braver's eyes would be are two embedded blue gems. A metal rim rounds the lip where the drinker's mouth would touch.",
      effect: "At any establishment that sells Stoutmug ale, the carrier of this mug gets their first drink free.",
    },
    {
      name: "Evercold Flask",
      cost: "60 gp",
      stock: "5 in stock",
      stockCount: 5,
      description: "An enchanted flask with BGB engraved large on the front. Stoutmug insists his ale is best served cold — this is his answer to the problem.",
      effect: "Any liquid kept in this flask remains cold. Not frozen. Cold.",
    },
    {
      name: "Instant Stoutmug Ale",
      cost: "5 gp per use",
      stock: "10 in stock",
      stockCount: 10,
      description: "Stoutmug has somehow turned his ale into a powdered form. One packet added to a gallon of water produces a gallon of Stoutmug Ale.",
      effect: "Produces one gallon of Stoutmug Ale with the same properties as the draught on tap. Best results when added to boiling water, allowed to rest until a sweetness fills the air, then poured off cold.",
      quote: "Ya can throw it in some boilin' water. Let it sit a few minutes. Then, when a sweetness fills the air, pour it off into one of these Evercold Flasks and ye'll have yerself a fine stout drink.",
    },
  ],

  dmPrivate: {
    fears: `Garren fears he's hit the limit of what he can manage alone. He wants more — more space, more production, more coin — but he doesn't trust people. Every time he's considered bringing someone on, something in his gut told him no. He can't tell if the instinct is wisdom or paranoia, and that uncertainty frustrates him as much as the problem itself.`,
    goals: `Garren has his eye on the homes on either side of the brewery. If he could buy them out and knock through the walls, he could double his brewing capacity and finally keep up with demand from the Shipwreck Tavern. But he won't make an offer until he finds someone he trusts to manage the additional work. That person hasn't walked through the door yet.`,
    questHook: `The party may organically become candidates for Garren's trust — particularly if they prove useful, handle themselves well under pressure, or come recommended by someone he respects. He won't ask outright. He'll watch. If he decides they're worth it, he'll buy a round and start talking about the buildings next door.`,
    shipwreckNote: `Garren owns both the brewery and the Shipwreck Tavern across the street. All ale served at the Shipwreck Tavern comes from BGB stock. He supplies it himself and considers the tavern his other half — the brewery is work, the tavern is the reward for working. Players who want to find him in the evening should look across the street.`,
  },
};
