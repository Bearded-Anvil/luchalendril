export const serpentSunningChamber = {
  id: "serpent-sunning-chamber",
  name: "The Sunning Chamber",
  image: "/serpent-sacrificial-chamber.jpg",
  path: "/pine-loft/lonely-path-pines/the-ruins/dungeon/sunning-chamber",

  sceneDescription: `The passage opens into a chamber so large it takes a moment to understand the scale of it.

The room is roughly one hundred and fifty feet across and nearly as wide. The ceiling rises close to a hundred feet above, and high in the vaulted stone, a set of large iron grates covers a hole that opens to the sky above. Dim light filters through in shifting columns, moving slowly as the clouds pass.

A ten-foot walkway runs the full perimeter of the room, the floor dropping sharply away from its inner edge to a lower pit some twenty feet below. Across the chamber, the walkway extends outward in a narrow platform — fifteen feet over the pit like a diving board, hanging in the open air. Behind it, mounted to the far wall, a ten-foot iron serpent head looms in the darkness. Its mouth is open. The fangs are steel — long, curved, and catching the thin light from the grates above.

But the floor of the pit is what stops you.

It is patterned. A dark stripe runs across the stone in long curves, spiraling inward toward the center of the pit, the pattern tightening as it nears the middle. Every other room in this place has been plain cut stone. This floor is different.

And as the light shifts through the grates above, the pattern shifts too — just barely, just at the edge of what you can make out from up here.`,

  dmNotes: {
    stealthCheck: {
      title: "Group Stealth Check — DC 18",
      description: `Call for a group stealth check the moment the party enters the room. DC 18. Kahthriss is ancient and his senses in his own lair are extraordinary. During the day, when light filters through the grates, he sleeps coiled in the pit below.

The pattern on the pit floor is Kahthriss. All sixty feet of him, coiled tight, scales black-striped against the stone. The spiral is his body.

If the group stealth check fails — if they speak aloud, light a torch, cast a spell with a verbal component, or make any significant noise — Kahthriss wakes. Let the floor move first. Then let them see the head rise.`,
      dmNote: `You do not have to tell them what the pattern is before they figure it out. The shifting light, the subtle movement, a player with high passive perception — let the reveal come naturally if it can. The moment they realize what they are looking at is one worth protecting.`,
    },

    kahthriss: {
      title: "Kahthriss",
      image: "/kahthriss.jpg",
      description: `Sixty feet long. Three feet in diameter at his widest. Ancient beyond reckoning — the priests who served him are bones now and he remains. His scales are black with faint banding that becomes visible only in close light. His eyes, when open, are a pale amber that catches torchlight from across the room.

He does not move quickly. He does not need to.`,

      stats: {
        size: "Gargantuan",
        type: "Beast",
        ac: { value: 17, note: "Natural Armor" },
        hp: { value: 180, note: "minimum — scale up for larger or more experienced parties" },
        speed: "40 ft., Swim 30 ft., Climb 20 ft.",
        STR: { score: 26, mod: "+8" },
        DEX: { score: 10, mod: "+0" },
        CON: { score: 22, mod: "+6" },
        INT: { score: 4, mod: "-3" },
        WIS: { score: 16, mod: "+3" },
        CHA: { score: 6, mod: "-2" },
        senses: "Blindsight 10 ft., Darkvision 60 ft., Tremorsense 30 ft. Passive Perception 13.",
        savingThrows: "STR +13, CON +11",
        challenge: "13 (recommended — adjust to party level)",
      },

      actions: [
        {
          name: "Multiattack",
          description: "Kahthriss makes two attacks: one Bite and one Constrict. He may replace one attack with Hypnotic Gaze.",
        },
        {
          name: "Bite",
          roll: "+13 to hit · Reach 15 ft. · One target",
          damage: "3d10 + 8 piercing",
          description: "The target must succeed on a DC 18 STR saving throw or be knocked prone.",
        },
        {
          name: "Constrict",
          roll: "+13 to hit · Reach 10 ft. · One target",
          damage: "2d8 + 8 bludgeoning",
          description: "The target is grappled (escape DC 18). While grappled, the target is restrained and takes 2d8 + 8 bludgeoning damage at the start of each of Kahthriss's turns. Kahthriss cannot constrict a different target while constricting one.",
        },
        {
          name: "Hypnotic Gaze",
          roll: "WIS saving throw DC 16 · 60 ft. · One target",
          damage: null,
          description: "On a failed save, the target is paralyzed until the end of its next turn. Kahthriss cannot use this ability if he cannot see the target.",
        },
      ],

      deathThroes: {
        title: "Death Throes",
        description: `When Kahthriss is reduced to 0 hit points, his body goes into violent convulsion. Every creature within 20 feet must succeed on a DC 16 DEX saving throw or take 4d10 bludgeoning damage.

This damage is non-lethal. Any creature reduced to 0 hit points by the death throes falls unconscious and is immediately stable — no death saving throws. They wake after a short rest, lying in the chamber with a sixty-foot dead snake surrounding them.`,
        dc: 16,
        save: "DEX",
        damage: "4d10 bludgeoning (non-lethal)",
        radius: "20 ft.",
      },
    },

    secretPassage: {
      title: "The Secret Passageway",
      dc: 14,
      trigger: "Investigation — only if players actively search the walls, or passive perception 14+",
      description: `A section of the wall near the chamber entrance shifts when pressure is applied to the correct brick. The seam is nearly invisible — the same rough-hewn stone as everything else, with no handle, no marking, no obvious feature.

Behind it, a narrow corridor. Wide enough for two people side by side. No wider.

Kahthriss cannot follow. The passage is built for human proportions, and his body will not fit. If the party retreats here during the encounter, he will press his head to the opening, hold there for a moment, and then withdraw — moving toward the preparation chamber on the surface route.`,
      connects: ["Sacrificial Preparation Chamber", "The Dining Hall"],
      dmNote: `Do not call for an Investigation check unprompted. Do not hint that the walls are worth searching. This passageway exists only for players who think to look. If no one searches — if they run, fight, or die without finding it — that is fine. The passage is a reward for curiosity, not a required escape route.

If Kahthriss is driven from the chamber, he moves through the dungeon toward the preparation chamber. Leave the party uncertain of where he went. He is somewhere in the dark. They will find him again, or he will find them.`,
    },

    loot: {
      title: "After the Fight",
      description: `There is no treasure chest, no hoard. Kahthriss was not a dragon. He did not collect.

What the party finds is the body. Sixty feet of it. The weight of centuries. The steel fangs on the wall are not decorative — they are real, and they can be removed. An antiques dealer or collector would pay well for them. A blacksmith could repurpose the steel.

The grates above are fixed in place but a strong enough party could pry them loose. From the pit floor, a player could climb the walls to the walkway level or use the body itself as a ramp.

Scattered around the chamber — tucked against the walls, half-buried under debris, still strapped to the bones of those who carried them — are the belongings of people who came here before the party did and did not leave.`,

      fromKahthriss: [
        {
          name: "Kahthriss's Scales",
          type: "Crafting Material",
          identification: null,
          description: `The body yields enough intact scales to craft a breastplate or a shield. The scales are dense, interlocked, and resistant to physical deformation — the same material that gave Kahthriss his AC in life.`,
          mechanics: `A skilled blacksmith or leatherworker (DC 15 Smith's Tools or Leatherworker's Tools) can shape the scales into armor or a shield over the course of a week. The finished piece has AC 14 + DEX modifier (breastplate) or +2 AC (shield), and the wearer has advantage on saving throws against being grappled or restrained.`,
          dmNote: `The scales are raw material, not a finished item. The party has to carry them out and find someone capable of working them. That is part of the reward — it takes effort to claim.`,
        },
      ],

      fromHunters: [
        {
          name: "Marked Crossbow",
          type: "Weapon (hand crossbow) · Requires identification",
          identification: `Must be identified before its ability is known. Appears to be a finely crafted hand crossbow with a carved serpent motif on the stock — clearly the weapon of a hunter who specialized in large prey.`,
          description: `Found near a skeleton on the walkway above the pit. The hunter made it to the ledge. That was as far as they got.`,
          mechanics: `As a bonus action, the bearer may mark a creature they can see. While the target is marked, the bearer always knows its direction and approximate distance, even through walls and obstacles, for 1 hour. Once per day. The crossbow functions as a standard hand crossbow (+2 to hit, 1d6 piercing, range 30/120 ft.) regardless of whether its ability has been identified.`,
          dmNote: null,
        },
        {
          name: "Boots of the Still Hunt",
          type: "Wondrous Item · Requires identification",
          identification: `Must be identified before their ability is known. Soft-soled leather boots, well-made, with reinforced ankles. A hunter's boots.`,
          description: `Still laced onto a pair of feet near the base of the stairs. Whatever wore the boots down here knew how to be quiet. It was not enough.`,
          mechanics: `While the wearer is not moving, they have advantage on Stealth checks. The moment they move, the advantage ends until they stop again. No charges, no attunement required.`,
          dmNote: null,
        },
        {
          name: "Hunter's Lantern",
          type: "Wondrous Item · Requires identification",
          identification: `Must be identified before its ability is known. Looks like a standard hooded lantern — brass, well-maintained, with an unusual smoked glass that seems to dim the light more than expected.`,
          description: `Hanging from a belt on a skeleton near the chamber entrance. The hunter brought light they could control. They still didn't see Kahthriss until it was too late.`,
          mechanics: `When lit, the lantern sheds light only visible to the bearer and any creatures they consciously designate as they light it. To anyone else, the flame appears extinguished — they see no light at all. The bearer may redesignate recipients by extinguishing and relighting the lantern. Burns standard oil.`,
          dmNote: `This is one of the most situationally useful items in the dungeon. A party that figures out what it does will find uses for it far beyond this location.`,
        },
      ],
    },
  },
};
