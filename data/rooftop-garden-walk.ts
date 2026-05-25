export const rooftopGardenWalk = {
  id: "rooftop-garden-walk",
  name: "Rooftop Garden Walk",
  image: "/rooftop-garden-walk.jpg",
  tagline: "Above it all.",
  path: "/beacon/garden-district/rooftop-garden-walk",

  sceneDescription: `The Rooftop Garden Walk is always beautiful. At night, it becomes something else entirely.

The path runs across the tops of several buildings and homes, crossing the alleys between them on little arched bridges, each one draped in rose vine arbors that arch overhead and brush your shoulders as you pass beneath them. On either side of the stepping stone walkway, row upon row of flowers stretch as far as the eye can follow — hydrangeas over Hydrangea Way, roses, tulips, daisies, and dozens more that have no names most people would know. The variety does not feel accidental. Someone decided all of this.

Dim magical lanterns mark the path at intervals, just bright enough that no one steps from the stones by mistake. They are not the main source of light. That comes from the fireflies — hundreds of them hovering low around the plants, each one casting a soft orange glow that catches the petals and the dew and turns the whole garden into something warm and moving and alive.

Off to one side, a fountain trickles quietly. A ring of stones forms the base, and at the center, a stone statue of a young woman holds a large vase tilted forward, pouring a steady stream of water that never stops and never empties. The sound of it carries just far enough to soften the silence.

At the end of the shops, a final bridge leads out onto the top of Beacon's outer wall. The gardens stop here and the stone opens wide. You can see out over the land — the roads below, the rooftops, and far off on the horizon, the distant mountains catching the last of the fading light. Or the first of the coming dawn, depending on when you've come.

The King's Guard stationed at the wall walk here are not the same men you'll find at the gate. They have been given one additional instruction: when someone reaches the wall and stops to look out, give them a short bow. Not a greeting. Not a dismissal. Just an acknowledgment that they made it here, and that what they're looking at is worth the walk.`,

  amphitheaterView: {
    image: "/primrose-amphitheater.jpg",
    description: `As you continue your walk across the top of the wall, you find yourself above and behind the PrimRose Amphitheater, the beautiful lighting and the smell of the hundreds of flowers wafting upward to enhance the experience.

To your right, you can see the seating area of the amphitheater and, behind that, both roadways through the Garden District arcing through the cottage-like homes. To your left, you are looking out over the walls of Beacon — the rolling green hills of The Valpin below, and the packed dirt road that snakes through and over them.

In the evening, the sun's light is just enough to catch the peaks of the mountains, far off on the horizon.

You feel an appreciation for whoever designed this walk, because as you pass the halfway point, it seems that every step has been laid out to leave the passerby in awe.`,
  },

  rooftopCrossing: {
    image: "/rose-vine-view.jpg",
    description: `As you reach the other side of the amphitheater, a King's Guard stands in the path ahead, preventing you from continuing further along the wall. A wooden staircase leads you up and to the right instead. The handrail is clean and smooth on top — but beneath, the railing is wrapped in flowers and greenery all the way up.

At the top of the stairs, you find yourself on the rooftop of The Drunken Giant. Tables are arranged across the roof, guests at most of them, enjoying their food and drink and the view out over the rolling hills of The Valpin. They hardly seem to notice you passing. You continue across the rooftop — the streets and the theater visible to your right — until you reach the far edge of the building.

Turning left, a two-level staircase runs down the side of the inn. At the bottom, a door opens inward. You step through it.`,
  },

  walkFinal: {
    image: "/rooftop-walk-hallway.jpg",
    description: `You are not inside the restaurant. Not exactly. Instead, you find yourself in a long, narrow hallway. The stone walls on either side are painted floor to ceiling with flowers — vivid oranges and reds, deep purples, soft pinks and blues — each one rendered with a care that makes the hallway feel less like a corridor and more like something you are meant to walk slowly through. Along the ceiling, a row of lanterns hangs barely three feet apart, each one glowing with a soft magical light that catches the color in the painted petals.

At the end of the hallway, a man stands behind a small half-counter. Bottles line the shelf behind him. A sign above reads: The Giant's Finest. He sets a mug on the counter and looks at you.

"Five silver," he says. "End of the walk."

Beyond him, a door opens back out onto Rose Vine View.`,
  },

  dmNotes: `The Rooftop Garden Walk is not a scripted encounter. It is an atmosphere. Let the players have it.

The fireflies are not magical — they are simply fireflies, drawn to the flowers in unusual numbers because the gardens are unusually well-kept. A player who investigates will find this out and may feel briefly foolish for expecting enchantment. That is the point. Sometimes things are just beautiful.

The fountain statue pours constantly because the basin beneath it is enchanted to return water to the vase through a channel hidden in the statue's back. A player who examines it closely can work this out. The enchantment is old — older than the district — and no one remembers who placed it.

The King's Guard bow is genuine. They were specifically chosen for this posting because they could be trusted to do it without irony. The residents of the Garden District noticed this detail and appreciated it. It costs nothing and it means something.

The walk connects Hydrangea Way at one end and Rose Vine View at the other, with the outer wall in between. It is the only place in Beacon where a person can stand above the city and see the mountains without climbing anything.`,

  connections: [
    {
      name: "Hydrangea Way",
      description: "The only entry point. A staircase at the far end of Hydrangea Way leads up to the start of the walk.",
      status: "live",
      path: "/beacon/garden-district/hydrangea-way",
    },
  ],
};
