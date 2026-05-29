export const luxuryAwaits = {
  id: "luxury-awaits",
  name: "Luxury Awaits",
  image: "/luxury-awaits.jpg",
  tagline: "Make Your House a Home",
  path: "/beacon/garden-district/hydrangea-way/luxury-awaits",

  sceneDescription: `The inside of Luxury Awaits is arranged like a long, single-room home — no dividing walls, just one space that transitions from one kind of living to another as you move deeper into it.

At the entrance end, a fine chair sits with its back to you, facing a beautifully comfortable sofa. Between them, a dark wood coffee table with a glass-smooth top and edges carved in intricate detail — flowering vines running alongside small depictions of the woodworkers who made it, bent over their work. To the left, a fireplace burns without smoke in a bleached white brick surround, the fire quiet and steady despite the absence of any chimney above it. The mantle holds small golden trinkets and a handful of framed drawings — unfamiliar faces in elegant frames. A set of wrought iron fireplace tools stands in its holder beside it.

Beyond this, without any wall to mark the transition, a bedroom begins. A four-post bed sits against the right wall, silk awning stretched across the top, curtains tied delicately to each post. On the left, a writing desk — carved books worked into every inch of the trim — holds a neat stack of paper in one corner and a fountain pen with an inkwell beside it. A silver lantern sits atop the pigeon-hole hutch rising above the desk. Above the middle of the room, a chandelier holds dozens of candles, though the light at the tip of each one is enchanted rather than flame.

Further still, the bathroom. An ivory bathtub on claw-and-ball feet stands over a metal box where fire can be started beneath it. Across from it, a full-length mirror with ornate gold trim. A plush bath mat runs between the two. A white robe hangs on a hook beside the mirror. A small end table next to the tub holds a stack of plush towels in several colors.

Everything in this room is for sale.`,

  owner: {
    name: "Delikis Emberleaf",
    race: "Elf (Male)",
    appearance: `Long blonde hair, bright green eyes, and skin with a faint golden hue. He dresses in black button-up shirts tucked into black cloth breeches. He carries himself with an unnatural grace and elegance that most customers find quietly unsettling — not threatening, just a persistent reminder that they are somehow less. They shop here anyway. His products make the rich feel above the wealthy.`,
    personality: `Delikis does not perform warmth. He is attentive, precise, and genuinely knowledgeable about every item in his store. He will answer questions completely and without condescension — or at least without visible condescension. He simply exists at a level of refinement that most people have not encountered in person, and he is not going to adjust it for the sake of your comfort.`,
  },

  inventory: [
    {
      name: "Smokeless Fireplace",
      price: "4,000 gp",
      description: "A complete fireplace installation. Burns without a chimney. No smoke, no soot, exceptional heat for its size.",
      effect: "A hidden rune sits on the underside of a brick beneath the mantle. Rubbing it ignites the flames. Rubbing it again extinguishes them. The fire produces no smoke regardless of what burns in it.",
      dmNote: null,
    },
    {
      name: "Hot Coffee Table",
      price: "1,200 gp",
      description: "Cool to the touch, smooth, no visible enchantment. Looks and feels entirely ordinary.",
      effect: "Any beverage placed on the table while hotter than room temperature remains at that temperature for as long as it sits there. Cooler food or drink is unaffected and behaves normally.",
      dmNote: null,
    },
    {
      name: "Writer's Desk of Holding",
      price: "3,000 gp",
      description: "An ornate writer's desk with a carved hutch. A single door on the hutch opens into complete darkness.",
      effect: "The hutch contains its own pocket dimension. Anything that can fit through the door vanishes inside until wanted again. To retrieve an item, reach into the void and think of it — you will feel it and can pull it free. Comes with a never-ending ink pot that somehow never empties regardless of use.",
      dmNote: "No size limit beyond the door opening itself. 1,000 sheets of paper, an 8-foot spear — if it fits through the door, it will hold.",
    },
    {
      name: "The Longrest Bed",
      price: "3,000 gp",
      description: "A four-post bed with a silk awning and curtains tied to the posts. Looks and functions as a normal bed while the drapes are tied.",
      effect: "When all four drapes are untied and allowed to fall together, a spell of darkness is cast inside their enclosure. All sight and all outside light — magical or mundane — are blocked completely for as long as the drapes remain down.",
      dmNote: null,
    },
    {
      name: "Mirror of Vanity",
      price: "1,500 gp",
      description: "A full-length mirror with ornate gold trim. Steam cannot touch it — it never fogs over regardless of heat.",
      effect: "By speaking aloud how you wish to look, the mirror shows a reflection of you following your direction. Bigger, thinner, different in any way you describe. Nothing actually changes. But the mirror will show you exactly what you asked for.",
      dmNote: null,
    },
    {
      name: "Tub of Rejuvenation",
      price: "Ask owner",
      description: "An ivory bathtub on claw-and-ball feet, set over a metal box. A rune on the side starts a fire beneath the tub to heat the water. Pressing it again extinguishes it.",
      effect: "The ivory holds the water's temperature for 1 hour before allowing it to slowly cool. Any creature that spends a full hour bathing in this tub removes all points of exhaustion.",
      dmNote: "Price intentionally omitted from the display. Delikis will name it based on who is asking.",
    },
  ],
};
