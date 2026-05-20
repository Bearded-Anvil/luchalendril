export const hattiswainPawn = {
  id: "hattiswain-pawn",
  name: "Hattiswain Pawn",
  image: "/hattiswain-pawn.jpg",

  sceneDescription: `Hattiswain Pawn looks, at first, like someone emptied several houses into one room and walked away. The space is large — wide and deep — with wooden plank floors and walls and an open ceiling that shows the beams above. From those beams hang lanterns, meat hooks, coils of rope, a carriage wheel, a birdcage, and things you can't quite name from here. More lanterns sit at random intervals on the shelves, no two matching, no obvious reason for where they've been placed.

The shelves themselves line every wall and fill most of the floor space in long rows, and they hold everything. Candlesticks and teapots and shoes and hats. Gloves and canteens. Stacked plates, figurines, jewelry piled loosely in open boxes. Baskets. Masks. Bear traps hanging from the edge of a shelf. A row of clay figures. A pair of animal tusks leaning against a wall. Children's toys on the same shelf as travel bags and worn leather purses. There are no prices marked on anything. Nothing is organized in any way that suggests it was meant to be found.

Taldo Hattiswain sits — or sprawls — among the clutter near the back, watching you with amber eyes, tail curling slowly around her.`,

  owner: {
    name: "Taldo Hattiswain",
    race: "Feyline (Female) — Half Human, Half Cat",
    appearance: `A beautiful female figure covered in fine fur the color of gray and orange, with small black spots across her shoulders and upper arms. Her face is entirely feline, and cat-shaped ears sit at the top of her head. Long black hair, human in texture, falls over her shoulders and drifts into her face. She wears leather armor — comfortable, versatile, worn. Six bead necklaces hang around her neck. Gold bands adorn both wrists. Her tail is thick-furred and tends to curl slowly around her waist when she's at rest, which is most of the time.`,
    personality: `She doesn't stand when you come in. She watches. If you pick something up and ask what it costs, she'll look at it — sometimes — and say a number. Five silver. One gold. She doesn't negotiate and she doesn't remember what she just charged someone else for the same thing.`,
  },

  inventory: [
    { name: "Brass candlestick, tall", cost: "5 sp" },
    { name: "Pair of iron candlesticks", cost: "8 cp" },
    { name: "Three-armed candelabra, dented", cost: "1 gp" },
    { name: "Painted ceramic candleholder", cost: "4 cp" },
    { name: "Set of four mismatched forks", cost: "5 cp" },
    { name: "Wooden serving spoon, carved handle", cost: "3 cp" },
    { name: "Silverish spoon (not silver)", cost: "2 cp" },
    { name: "Ladle, pewter", cost: "5 sp" },
    { name: "Pair of worn leather boots", cost: "5 sp" },
    { name: "Children's shoes, small pair", cost: "3 cp" },
    { name: "Ladies' heeled shoes, scuffed", cost: "8 cp" },
    { name: "Single wooden sandal", cost: "1 sp" },
    { name: "Cracked ceramic dinner plate", cost: "2 cp" },
    { name: "Set of three mismatched plates", cost: "5 sp" },
    { name: "Painted decorative plate", cost: "1 gp" },
    { name: "Tin plate, bent", cost: "5 cp" },
    { name: "Ceramic teapot, chipped lid", cost: "5 sp" },
    { name: "Brass teapot, tarnished", cost: "1 gp" },
    { name: "Small clay teapot, unglazed", cost: "3 cp" },
    { name: "Wool hat, wide brim", cost: "5 sp" },
    { name: "Tall riding hat, crushed on one side", cost: "8 cp" },
    { name: "Knit cap, stretched", cost: "2 cp" },
    { name: "Leather cap with a broken buckle", cost: "5 cp" },
    { name: "Canteen, cork stopper", cost: "5 sp" },
    { name: "Tin canteen, dented", cost: "3 cp" },
    { name: "Leather-wrapped flask", cost: "1 gp" },
    { name: "Pair of brown leather gloves", cost: "5 sp" },
    { name: "Single work glove", cost: "1 cp" },
    { name: "Fingerless gloves, wool", cost: "2 cp" },
    { name: "Ceramic figurine, robed figure", cost: "5 sp" },
    { name: "Painted wooden horse figurine", cost: "8 cp" },
    { name: "Small iron knight figurine", cost: "1 gp" },
    { name: "Cracked porcelain doll head", cost: "5 cp" },
    { name: "Tarnished silver brooch", cost: "5 sp" },
    { name: "Beaded necklace, broken clasp", cost: "3 cp" },
    { name: "Copper ring, plain", cost: "2 cp" },
    { name: "Earrings, mismatched pair", cost: "5 sp" },
    { name: "Braided leather bracelet", cost: "5 cp" },
    { name: "Wicker basket, large", cost: "5 sp" },
    { name: "Wicker basket, small with lid", cost: "3 cp" },
    { name: "Painted wooden mask", cost: "1 gp" },
    { name: "Plain cloth mask, frayed edges", cost: "5 cp" },
    { name: "Bear trap, rusted spring", cost: "1 gp" },
    { name: "Bear trap, functional", cost: "5 sp" },
    { name: "Wooden pull-toy horse", cost: "3 cp" },
    { name: "Stuffed cloth bear, one eye missing", cost: "2 cp" },
    { name: "Set of painted wooden blocks", cost: "5 cp" },
    { name: "Clay figure, humanoid, unpainted", cost: "2 cp" },
    { name: "Clay figure, painted animal", cost: "5 sp" },
    { name: "Set of three clay figures", cost: "8 cp" },
    { name: "Animal tusk, large", cost: "1 gp" },
    { name: "Animal tusk, small", cost: "5 sp" },
    { name: "Leather travel bag, worn straps", cost: "5 sp" },
    { name: "Canvas sack with drawstring", cost: "3 cp" },
    { name: "Beaded purse, embroidered", cost: "1 gp" },
    { name: "Coin purse, empty", cost: "5 cp" },
    { name: "Hanging oil lantern, no oil", cost: "5 sp" },
    { name: "Lantern, cracked glass panel", cost: "3 cp" },
    { name: "Coil of rope, frayed ends", cost: "5 sp" },
    { name: "Meat hook, iron", cost: "2 cp" },
    { name: "Small iron padlock, no key", cost: "1 gp" },
  ],

  magicItem: {
    playerVisible: `A pair of goggles with empty frames — no lenses in them at all. The leather straps are intact. Whatever they were made for, they're missing the part that matters.`,
    dmNote: `If anyone casts Detect Magic or uses an item that detects magic, the empty goggles will faint glow in response. Any attempt to identify what they do will fail — the magic they hold is incomplete.

To unlock their function, the goggles must be taken to a tinkerer and fitted with new glass. Once repaired, they grant the wearer vision in complete darkness as clearly as broad daylight. The catch: any source of light — even a single torch — becomes blinding when wearing them. They are only useful in total darkness. Bright conditions make them impossible to use.

Taldo does not know what they are. She'll price them at 5 sp if asked.`,
  },

  dmPrivate: {
    guild: `Taldo works with the Thieves' Guild. Hattiswain Pawn is a front. Most of what's on the shelves came from somewhere it wasn't supposed to leave. She doesn't keep records and she doesn't ask questions about what people bring in to sell.

She barely knows what's in her own shop. The pricing reflects this — she throws out a number without looking, and the number doesn't mean anything. Five silver. One gold. If you push back, she shrugs. She's not running a real shop and she knows it.`,
    runningTheShop: `Players can buy anything on the shelves at whatever price Taldo quotes. They can also sell things to her — she'll name a price for anything brought in, equally random, and the price will be low. She's useful as a place to offload gear without questions asked.

The goggles are the only thing here with mechanical weight. Don't draw attention to them. If the party has Detect Magic and uses it, let them find the goggles on their own.`,
  },
};
