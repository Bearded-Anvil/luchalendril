export const pineTempleChase = {
  id: "pine-temple-chase",
  name: "Pine Temple Chase",
  image: "/pine-temple-map.jpg",
  path: "/pine-loft/lonely-path-pines/the-ruins/temple-chase",

  trigger: {
    dm: `This sequence can begin anywhere in the ruins that the party alerts Howlers — not just after killing a group. A failed stealth check, a loud spell, a noisy action on any platform can trigger the swarm. Use the chase whenever the Howlers have a reason to come in force. The narration below assumes the party has just fought and won; adjust the opening line to fit where they actually are when it starts.

The topside ruins have been picked over for a very long time. There is nothing of value up here — no treasure, no loot, nothing hidden in the stonework. The platforms exist to be crossed, stealthed through, and survived. Any player who searches will find only old stone, Howler scat, and the same silence that has been here for centuries.`,
    narration: `As you stand over the fallen Howlers, you hear something in the distance. Something like thunder — but different somehow. And while you look to see what's making the racket, you begin to see the trees sway as if under a great weight.

Then, as the sound draws nearer, you're able to make out that it isn't just one sound. It's dozens. Maybe scores.

The trees seem to erupt as teams of Howlers come swinging and leaping through the pines, teeth bared, barbed tails whipping. On they come in a hurry, forcing you deeper into the ruins unless you choose to stand and face them.`,
  },

  phases: [
    {
      id: "initial-run",
      title: "The Run Begins",
      narration: `Looking around, you see only one viable path that doesn't lead you straight into the Howlers. A flat stone bridge leading to another high platform some thirty feet away. As you run, you glance back and see the Howlers gaining on you — not slowed at all when they run out of tree.

Reaching the second platform, you spot another bridge continuing away from the creatures — an arched stone bridge leading over to another platform. But as you near it, you see that the peak of the arch has collapsed. An eight to ten foot gap in the stone. Below, a thirty foot drop into stone rubble and broken pine. On the other side: another platform, a pile of rubble from a fallen column lying near the bridge.`,
      dm: null,
      check: null,
    },
    {
      id: "leap",
      title: "Check One — The Leap",
      narration: null,
      dm: `A good moment for fail-forward. Use a DC scale rather than a single pass/fail.`,
      check: {
        stat: "DEX or STR",
        results: [
          {
            range: "15+",
            label: "Perfect Landing",
            narration: `You get a running start and leap across the gap, sliding to a stop on the other side without so much as a stumble.`,
            damage: null,
            points: 0,
          },
          {
            range: "13–14",
            label: "Rough Landing",
            narration: `You run and leap — but even as you jump, you feel that your footing was off. You barely reach the other side but topple into a roll, taking 1d4 bludgeoning damage as you hit the stones.`,
            damage: "1d4 bludgeoning",
            points: 0,
          },
          {
            range: "8–12",
            label: "Chest Slam",
            narration: `As you reach the ledge and leap, the slightest grit slips beneath your foot, stealing momentum from your jump. Time seems to slow as you realize you're not going to make it — and then OOF, you slam chest first into the broken edge on the other side, taking 1d6 bludgeoning damage, clinging on with your arms and chin, feet dangling beneath you.`,
            damage: "1d6 bludgeoning",
            points: 0,
          },
          {
            range: "1–7",
            label: "Hanging by Fingertips",
            narration: `You leap — but you've completely misgauged the distance. You hit hard against the far ledge, chest and jaw slamming into the stone, taking 1d8 damage. In the impact, you hear the familiar jingle of coin as 1d20 gold pieces fall from your purse into the forest below. As your daze clears, you find yourself hanging by your fingertips.`,
            damage: "1d8 bludgeoning + 1d20 gold lost",
            points: 1,
          },
        ],
        dmNotes: [
          `For any player hanging by fingertips: allow STR checks, DC 10, to pull themselves up. If they fail, don't make them fall — they hold on but can't get up until a friend helps.`,
          `If any player fails forward here and must be pulled up, mark one failure point.`,
        ],
      },
    },
    {
      id: "run-2",
      title: "Run Part 2 — The Rubble Platform",
      narration: `On this new platform, you scramble up atop the pile of stone rubble. Behind you, the closest Howlers have reached the ruins — some darting down into the trees below the platforms, others pursuing directly behind you. Directly to your south, another flat stone bridge leads to another platform.`,
      dm: null,
      check: null,
    },
    {
      id: "hole",
      title: "Check Two — The Hole",
      narration: `Reaching the next platform, you find that what used to be a stone floor is now a huge black hole — the floor having fallen in long ago. Looking down, you think you can make out stonework fifty or sixty feet below, but you can't be sure. What you can be sure of is that this hole leads deeper than the ground — into some form of underground cave or tunnel network.`,
      dm: `Players must shuffle around the remaining ledge. If any player chooses to jump or fly down into the hole, refer to the dungeon room labeled "Collapsed Room" — that is where they will land.`,
      check: {
        stat: "DEX",
        dc: 12,
        results: [
          {
            range: "12+",
            label: "Clean Crossing",
            narration: `The stonework holds and your footing is true. As carefully as you can with haste, you reach the next bridge on the far side.`,
            damage: null,
            points: 0,
          },
          {
            range: "9–11",
            label: "Near Miss",
            narration: `You're doing well — and then you feel a brick roll under your foot and come free. For a moment your stomach lurches as you nearly go over. But you don't. You stand still, a bit nervous to move, until the familiar barking howl behind you reminds you that you don't have seconds to spare. Carefully, you finish shuffling along the ledge.`,
            damage: null,
            points: 1,
          },
          {
            range: "2–8",
            label: "Too Slow",
            narration: `Your nerves fail you. You find it hard to trust the thin brick remaining around the hole. Howlers calling behind you, you begin to pick and choose your steps — but you can feel that it's taking far too long. Your careful choices get you to the next bridge, but you can't help feeling that precious time was lost.`,
            damage: null,
            points: 2,
          },
          {
            range: "Natural 1",
            label: "Into the Dark",
            narration: `You shift your weight, testing the bricks before committing — then you move. VROOSH. A roll of bricks tumbling into the darkness below pulls you along with them, and you fall freely until — OOF — you jolt to a halt, arms and legs dangling in open air, panic rising in your throat. Then you realize you're hanging by your belt, your pack, your purse — something — from the ledge above.`,
            damage: null,
            points: 3,
          },
        ],
        dmNotes: [
          `A natural 1 requires a teammate to pull the player back up — a spell or rope can substitute if available.`,
          `Tally points: 9–11 = 1 point. 2–8 = 2 points. Natural 1 = 3 points. These points will determine how many rounds the party has inside the temple before Howlers arrive.`,
        ],
      },
    },
    {
      id: "run-3",
      title: "Run Part 3 — The Long Bridge",
      narration: `You start running the long bridge, the sound of Howlers all around you now.`,
      dm: `Ask the players for the order in which they travel. Who is leading? Who is trailing? Who is in the middle? This matters for what comes next.

Around the halfway point, furry hands grab the side of the bridge and a Howler climbs up in front of the lead runner. As they slow to prepare, another swings up from below to stand behind the last. The party is now sandwiched between two Howlers on an open bridge — with more behind them.

One combat round. Both Howlers must be dealt with — or the party is forced to fight their way through with Howlers closing from behind.`,
      check: null,
      howlerReminder: true,
    },
    {
      id: "rope-bridge",
      title: "Check Three — The Rope Bridge",
      narration: `Reaching the stairs, you turn and climb to the top — another platform, another bridge. But this one is not stone. Spanning the gap between you and the next platform is a rope bridge with old wooden planks. Below, more than fifty feet down to the tangle of pines and forest floor. And now: Howlers.`,
      dm: `Allow players to choose what ability score they want to use — but they must explain how their character uses it. Ask each one: "How do you approach this bridge using your character's strengths?"

Examples to prompt if needed:
· DEX — "Moving quickly, barely touching the planks."
· STR — "Holding the rope handrails tight. Even if a plank breaks, I've got the rope."
· WIS or INT — "Carefully choosing my steps, examining planks before I commit."

If they cross one at a time: DC 10.
If they all go at once without specifying: the bridge sways from uncoordinated steps. DC 13.`,
      check: {
        stat: "Player's choice — must be justified",
        results: [
          {
            range: "DC+",
            label: "Clean Crossing",
            narration: `The bridge sways gently as you cross, but whether by skill or keen eye, you make it to the next platform.`,
            damage: null,
            points: 0,
          },
          {
            range: "1–5 below DC",
            label: "Plank Gives Way",
            narration: `You're picking your way carefully across, avoiding the most obvious weak spots, when — SNAP — a plank breaks and your foot goes through. You find yourself suddenly on all fours, looking down into the forest below. But you catch your breath and regain your footing.`,
            damage: null,
            points: 1,
          },
          {
            range: "6 below DC to Natural 1",
            label: "Leg Through",
            narration: `You start across, stepping over missing planks, doing your best — when a sudden howl from behind makes you misstep. SNAP. A plank splinters and your leg goes through all the way to the thigh. You wince as splinters stab into you, dealing 1d6 piercing damage. Now you need to get free.`,
            damage: "1d6 piercing — STR DC 12 to break free (DC 10 with ally assist)",
            points: 2,
          },
        ],
        dmNotes: [
          `Points: all fours = 1 point. Splinter damage and stuck = 2 points.`,
          `If the players cut the rope bridge at any point, note it — the next narration block will reference Howlers following across it.`,
        ],
      },
    },
    {
      id: "run-4",
      title: "Run Part 4 — The Column",
      narration: `Gasping and winded, you make it to the next platform — more stairs — another ten feet up, and you find yet another platform with another stone bridge spanning a gap to yet another platform. From here, you can see that you're getting close to something — a house, a building, still standing, up one more flight of stairs.

You hurry across the last stone bridge and find that a massive column has fallen across the floor, blocking the path. Its smooth, rounded form stands nearly eight feet tall. Other than a few cracks and some debris on the ground beside it, you don't see much in the way of help for climbing.`,
      dm: `If the players did not cut the rope bridge: read the following before the check.`,
      bridgeFollowup: `A sudden rattle below causes you to look down — and you see Howlers hurrying across the swinging rope bridge, one of them suddenly bursting through a plank and falling helplessly to the forest below.`,
      check: {
        stat: "STR or DEX",
        dc: 12,
        results: [
          {
            range: "12+",
            label: "Up and Over",
            narration: `Stepping off a large stone beside the column, you leap up and find a handhold in a crack running along its side. With little effort, you hoist yourself to the top and drop down the other side.`,
            damage: null,
            points: 0,
          },
          {
            range: "6–11",
            label: "Slip and Retry",
            narration: `Your first attempt almost reaches the top — but your foot loses purchase and you drop back to the ground. You try again.`,
            damage: null,
            points: 0,
          },
          {
            range: "2–5",
            label: "Finger Pop",
            narration: `You leap and grab the crack and start to pull — but just as you begin to hoist yourself, a foot slips and you fall back, one of your fingers popping loudly as it twists in the crack. You take 1d6 bludgeoning damage as you hit the ground.`,
            damage: "1d6 bludgeoning",
            points: 0,
          },
          {
            range: "Natural 1",
            label: "Made It — Barely",
            narration: `With a mighty leap and a grab, you catch the crack, push off with your feet, and scramble up — you're going to make it. But just as you reach the top, grit shifts beneath your foot and you crash down hard on top of the column, taking 1d4 bludgeoning damage, before toppling off the far side into a pile of stone debris for 1d6 more. Looking up from the ground, winded and bleeding — you've made it over.`,
            damage: "1d4 bludgeoning (on top) + 1d6 bludgeoning (landing)",
            points: 0,
          },
        ],
        dmNotes: [
          `The column check has no point value — by this point the party is nearly at safety and the consequences are purely physical, not time-based.`,
        ],
      },
    },
    {
      id: "final-run",
      title: "Final Run — The Temple",
      narration: `You scramble up the last flight of stairs and find yourself facing what appears to be an old temple. A keep. A stronghold. You can't be certain. The walls are maroon stone, finely shaped, large enough to have stood the tests of time. Above the door, a stone-carved wooden mask — large eye holes, a painted straight line for a mouth.

Before you stand two doors. One hangs open, barely held by a single hinge. The other is shut, a large stone propped against it.

Looking around, you see treetops below you and trees still climbing past your platform. At your best guess, you are seventy to eighty feet above the ground. And Howlers are scrambling up platform walls and trees alike, quickly closing in on your position.`,
      dm: `If they go inside, read the room description below. Tally all accumulated points now — this determines how many rounds they have before Howlers reach the doorway.`,
      check: null,
    },
  ],

  templeRoom: {
    narration: `You squeeze through the partially open door and find yourself in a small room — stone floor, stone walls, and what appears to be a shrine or altar directly ahead. A gap in the ceiling lets a beam of light fall down, illuminating the space.

The room is roughly twenty feet deep and fifteen feet wide. The walls are plain stonework. But the wall directly across from the doors holds something else entirely. A serpent's head protrudes from the wall, stone eyes looking directly at you, mouth wide open — metal fangs, steel, crafted into the stone, reflecting the light from above. On either side of the serpent's head, an extinguished torch sits mounted in a metal bracket.`,
    dm: `Count up all points from the run. This is the tally that determines how long they have.`,
  },

  pointsTable: [
    { points: "0", rounds: 10 },
    { points: "1–2", rounds: 8 },
    { points: "3–4", rounds: 5 },
    { points: "5–6", rounds: 3 },
    { points: "7+", rounds: 1 },
  ],

  bottleneck: {
    dm: `Once Howlers arrive, only one can fit through the doorway at a time. One player at a time defends the entrance while the others work the puzzle. Players rotate as needed. The door is the only way in — the Howlers cannot flank.`,
  },

  puzzle: {
    title: "The Serpent Puzzle",
    phases: [
      {
        dc: 10,
        stat: "Perception or Investigation",
        narration: `Examining the room further, you find faint traces of engraving in the wall beneath the serpent's head — its body, scaled and symmetrical, running down the wall. Following it, the scales shift at one point into a knot that somewhat resembles a hand. The body continues, spreading across the floor.`,
        dm: null,
      },
      {
        dc: 8,
        stat: "Perception or Investigation",
        narration: `Following the body about three feet along the floor, you find another knot of scales.`,
        dmReveal: `On a pass: as they study the knot, their eyes lose focus for a moment — and they see the outline of a human foot in the scales. Then their vision clears, and they see only a knot of scales again.`,
        dm: null,
      },
      {
        dc: 8,
        stat: "Perception or Investigation",
        narration: `Continuing further down the body, you find one last knot of scales in the engraved floor.`,
        dmReveal: `On a pass: again, their eyes blur for just a moment — and they see another hand form in the scales before their vision returns to normal.`,
        dm: null,
      },
    ],
    dmNotes: [
      `If the players light the torches, the knots of scales will shimmer in the flickering light — making the shapes easier to see.`,
      `The solution: all three knots must be touched simultaneously. One player cannot reach all three alone — the hand knots and foot knot are too spread apart. Two players can manage it, one covering a hand knot and a foot, the other covering the second hand knot. Three players can each take one. Any combination works as long as all three points of contact are made at the same time.`,
    ],
    solve: {
      narration: `As you touch all three knots, you hear a sudden THUD — as if something heavy fell behind the shrine. At first, nothing happens. And then the serpent moves. So subtly at first that you think your eyes must be playing a trick on you.

But then you see it. The mouth is slowly closing. The steel teeth enter small holes in the lower jaw. The mouth closes all the way — and then the serpent head slides backwards into the wall until it is completely out of sight.

KACHOOM. A loud noise, like a great gear engaging. The room shakes as if in an earthquake — and then it shifts. At first you aren't sure what's moving, but then you see the doorway getting higher off the floor. The large circle of stone in the middle of the room — the one your party is standing on — begins to descend. Dust and pebbles fall from above, clattering at your feet.

Down and down the floor goes. Before long, the barking of the Howlers is muffled and fades as you slide deeper and deeper underground. In the darkness, you can't tell exactly how far you've descended — but you feel certain you've passed the forest floor by now. And still, you descend.

Finally, after what became a concerning amount of time, the floor thuds to a stop. You all stumble before regaining your footing. And there, against one wall, way down here in the ancient earth — is a very old iron door.`,
    },
  },

  elevatorReturn: {
    dm: `The platform can be raised again the same way it was lowered. Touching all three knots simultaneously from below — one hand on each hand knot, a foot on the foot knot, any combination of players — activates the mechanism in reverse. The serpent head will extend back out from the wall, the mouth will open, and the platform will rise. The party can use this to return to the surface at any time.`,
  },

  ironDoor: {
    dm: `The door is locked with a three-hole padlock. Three separate lockpicking checks are required unless magical options are available. Players may keep the padlock once removed — it will not have a key.`,
    locks: [
      { position: "Top lock", dc: 12 },
      { position: "Middle lock", dc: 13 },
      { position: "Bottom lock", dc: 15 },
    ],
  },
};
