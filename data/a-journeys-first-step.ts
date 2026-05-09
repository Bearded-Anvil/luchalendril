export const aJourneysFirstStep = {
  id: "a-journeys-first-step",
  name: "A Journey's First Step",
  tagline: "If you're buyin' from me, you're either headin' somewhere dangerous… or comin' back from it.",
  street: "South Main Street",
  city: "Beacon",
  image: "/a-journeys-first-step.jpg",

  sceneDescription: `As you step up to the booth, you notice that the back end of the table has wooden, spoked wheels. The front has table legs attached to it. And you realize that this is a converted load cart used for carrying heavy loads. It isn't a pretty table — no cloth or runners. Just a wooden top, scarred and beaten but very durable and functional. An old wooden A-frame ladder stands in the back with blankets and bedrolls through the rungs and draped over the center lock. A rack along the back wall holds small cages, snare traps, and bear and wolf traps with spring-loaded jaws. Fishing poles are propped in one corner, made from bamboo and well-sanded tree limbs. A light brown tarp — an old tent, cut and repurposed — stretches over the table and forms the side and back walls. Hanging from one tent pole are backpacks and hip packs. From the other hang coils of rope, grappling hooks, and pitons. Across the front of the cart: dried meats and vegetables, a couple exposed to show what they are, the rest wrapped and tied for travel.`,

  owner: {
    name: "Barl Lorgrun",
    race: "Human",
    age: "Older — built like a man who worked his whole life",
    appearance: `An older, very large man. Heavily muscled and around six and a half feet tall. His skin is deeply tanned and leathery from years of travel and hard work. One eye squints permanently — whether from habit or injury, you cannot tell. He has a thick gray beard, not terribly long but dense and curled. His teeth are yellowed but mostly there.`,
  },

  dmPrivate: {
    history: `Barl grew up as a lumberjack and hated it. While it built his strength, he longed for something beyond felling trees. He began traveling with the log haulers to see more of the world — helping unload and sell large timbers. The road taught him hunting, cooking, camp-making, and survival. Finally, as age caught up to him, he settled in Beacon. His knowledge of the road became his trade.`,
    fears: `Barl finds himself yearning for the road — though he wonders if he's capable anymore. Beacon, though he calls it home, feels more and more like a cage… like one of the traps he currently sells.`,
    goals: `Barl loves to live vicariously through his customers. When someone buys his wares, he always asks where they're going — and always ends by asking them to come back and tell him how it went. He means it. Every time.`,
    questHooks: [
      {
        title: "The Hidden Thing",
        description: `If any of the players naturally return to share a story with Barl, he will listen intently and enjoy every word. And then he will share a tale of his own — a tale of an item he found in a ruin while hiking, and of where he hid it when he could no longer carry it. No longer young enough to enjoy the adventure of retrieving it, he offers to share the location with one condition: a promise that when it is found, you come back and tell him the story.`,
        dmNote: `This quest will be updated as the world expands. Until a direct location is established, Barl keeps his secret location to himself — but tells the players that he will consider sharing it later.`,
      },
    ],
  },

  inventory: [
    {
      mundane: {
        name: "Traveler's Blanket",
        description: "A thick wool blanket with stitched leather corners. Warm enough for cold nights and durable enough for rough roads.",
        price: "8 gp",
      },
      enchanted: {
        name: "Wayfarer's Rest Blanket",
        description: "A dark green blanket stitched with tiny silver thread runes. Always maintains a comfortable sleeping temperature regardless of weather conditions.",
        effect: "A creature completing a long rest beneath the blanket gains advantage on one skill check of their choice during the following day. May only benefit from this effect once per long rest.",
        price: "180 gp",
      },
    },
    {
      mundane: {
        name: "Dried Trail Meat Bundle (3)",
        description: "Salted strips of venison, boar, and smoked river fish. Keeps for weeks without spoiling.",
        price: "5 sp",
      },
      enchanted: {
        name: "Hearthfire Seasoned Rations (3)",
        description: "The meat carries a faint scent of pepper, cedar smoke, and strange herbs.",
        effect: "When eaten during a short or long rest, gain 10 temporary hit points lasting until the next long rest. A creature may only benefit once per day. Additional portions cause stomach cramps and nausea, negating the effect.",
        price: "22 gp",
      },
    },
    {
      mundane: {
        name: "Fishing Pole",
        description: "A polished bamboo rod with gut line and a carved bone hook. Reliable and lightweight.",
        price: "1 gp",
      },
      enchanted: {
        name: "Buzzbait Pole",
        description: "A flexible pole etched with tiny insect carvings. When the hook rests in water, the line vibrates subtly — like trapped insects.",
        effect: "Gain +1 to Survival checks made to catch fish using this pole.",
        price: "65 gp",
      },
    },
    {
      mundane: {
        name: "Hooded Lantern",
        description: "A sturdy iron lantern with thick glass panes.",
        price: "7 sp",
      },
      enchanted: {
        name: "Whisperlight Lantern",
        description: "A brass lantern with a twisting decorative knob shaped like a crescent moon. The light may be adjusted from full brightness, to dim amber glow, to barely visible emberlight. Never brighter than a normal lantern.",
        effect: "Useful for stealthy camps, night watches, and reading maps without revealing your position.",
        price: "48 gp",
      },
    },
    {
      mundane: {
        name: "Bedroll",
        description: "A simple but durable canvas bedroll.",
        price: "1 gp",
      },
      enchanted: {
        name: "Mosscloak Bedroll",
        description: "A mottled green-and-brown sleeping roll smelling faintly of pine and wet leaves.",
        effect: "While occupied, the bedroll subtly shifts color and texture to match nearby terrain. Creatures attempting to spot the sleeper suffer disadvantage on Perception checks at a distance. Does not function while moving.",
        price: "140 gp",
      },
    },
    {
      mundane: {
        name: "Flint & Tinder Kit",
        description: "Steel striker, flint shard, char cloth, and dry tinder wrapped in oilskin.",
        price: "5 sp",
      },
      enchanted: {
        name: "Emberkeeper's Fire Kit",
        description: "A blackened steel striker warm to the touch. Produces sparks even in rain or strong wind.",
        effect: "Advantage on checks made to start fires in poor weather.",
        price: "24 gp",
      },
    },
    {
      mundane: {
        name: "Traveler's Rope (50 ft.)",
        description: "Heavy woven hemp rope.",
        price: "1 gp",
      },
      enchanted: {
        name: "Climber's Recall Rope",
        description: "A gray rope woven with thin silver fibers.",
        effect: "Once per day, the rope may slither slowly back toward its owner when commanded. Moves roughly as fast as a crawling snake. Cannot support weight while retracting.",
        price: "110 gp",
      },
    },
    {
      mundane: {
        name: "Grappling Hook",
        description: "Forged iron hook with four sharpened prongs.",
        price: "2 gp",
      },
      enchanted: {
        name: "Surecatch Hook",
        description: "The inner prongs twitch faintly when thrown.",
        effect: "Once per short rest, gain advantage on an Athletics check made to secure or throw the hook.",
        price: "75 gp",
      },
    },
    {
      mundane: {
        name: "Traveler's Backpack",
        description: "A rugged leather pack with multiple tied compartments.",
        price: "2 gp",
      },
      enchanted: {
        name: "Mulepack Rucksack",
        description: "An enchanted backpack reinforced with strange flexible bark. Items stored within feel lighter to the wearer.",
        effect: "Reduces carried weight by up to 15 lbs for encumbrance calculations.",
        price: "260 gp",
      },
    },
    {
      mundane: {
        name: "Hunting Trap",
        description: "Heavy iron spring trap for wolves, boars, or worse.",
        price: "5 gp",
      },
      enchanted: {
        name: "Snapjaw Hunter's Trap",
        description: "The metal teeth are engraved with tiny directional arrows.",
        effect: "When triggered, emits a loud metallic SNAP audible up to 300 feet away. The trap chain anchors itself firmly into nearby ground or roots. Useful for tracking captured creatures.",
        price: "95 gp",
      },
    },
    {
      mundane: {
        name: "Hip Pack",
        description: "A small leather side pouch for quick-access supplies.",
        price: "8 sp",
      },
      enchanted: {
        name: "Smuggler's Hip Pack",
        description: "The inside appears slightly deeper than the outside.",
        effect: "Can hold roughly twice what its size suggests, though never more than 20 lbs.",
        price: "210 gp",
      },
    },
    {
      mundane: {
        name: "Traveler's Tent",
        description: "A patched canvas two-person tent. Clearly repaired dozens of times.",
        price: "4 gp",
      },
      enchanted: {
        name: "Quietwind Tent",
        description: "A dull green tent with weighted corner tassels. Wind passing across the tent becomes strangely muffled.",
        effect: "Reduces sound escaping the tent. Advantage on Stealth checks made to remain unnoticed while resting inside during poor weather or nighttime.",
        price: "320 gp",
      },
    },
  ],
};
