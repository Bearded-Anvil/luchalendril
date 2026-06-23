export const serpentSecretPassage = {
  id: "serpent-secret-passage",
  name: "The Secret Passageway",
  image: "/serpent-secret-passage.jpg",
  path: "/pine-loft/lonely-path-pines/the-ruins/dungeon/secret-passage",

  sceneDescription: `Stepping into the narrow passageway, you find yourself in a corridor barely wide enough for two people to stand side by side.

The walls here are rough-cut stone, mostly covered in a thin layer of green algae — though they feel dry to the touch. Spider webs fill the corners and drape across the ceiling, thick in places and almost invisible in others. Here and there on the floor, bits of fur and the small bones of giant rats lie where something left them.

The corridor stretches ahead in the dark, lit only by what light you carry with you.`,

  dmNotes: {
    navigation: {
      title: "Navigating the Passage",
      description: `This corridor connects the Sunning Chamber, the Sacrificial Preparation Chamber, and the Dining Hall. Depending on which entrance the party used, they will be moving in a different direction.

Use the dungeon map to guide them through any turns. The passage is not a straight line. Players should feel the disorientation of moving through tight stone with no clear sense of distance or direction.`,
    },

    spiders: {
      title: "The Giant Spiders",
      spiderImage: "/serpent-giant-spider.jpg",
      description: `The ceiling is missing in several sections throughout the passage. Giant spiders have claimed these gaps as their territory, building webs across the openings and dropping down onto prey that moves through below. They feed on the giant rats that wander the corridor and have been here long enough that the rats' bones have become part of the floor.

The spiders do not distinguish between rats and people. When something warm moves beneath a gap in the ceiling, they drop.

Scale the number of spiders and their hit points to your party's level. One spider per two players is a reasonable starting point for a moderate encounter.`,

      stats: {
        name: "Giant Spider",
        size: "Large",
        type: "Beast",
        ac: { value: 14, note: "Natural Armor" },
        hp: { value: "36 (8d10)", note: "Scale up or down to match party level" },
        speed: "30 ft., Climb 30 ft.",
        STR: { score: 14, mod: "+2" },
        DEX: { score: 16, mod: "+3" },
        CON: { score: 14, mod: "+2" },
        INT: { score: 2, mod: "-4" },
        WIS: { score: 11, mod: "+0" },
        CHA: { score: 4, mod: "-3" },
        skills: "Stealth +7",
        senses: "Blindsight 10 ft., Darkvision 60 ft. Passive Perception 10.",
        traits: [
          {
            name: "Spider Climb",
            description: "The spider can climb difficult surfaces including ceilings without an ability check.",
          },
          {
            name: "Web Sense",
            description: "While in contact with a web, the spider knows the exact location of any creature also in contact with that web.",
          },
          {
            name: "Web Walker",
            description: "The spider ignores movement restrictions caused by webbing.",
          },
          {
            name: "Ceiling Drop",
            description: "When a creature moves beneath a gap in the ceiling, the spider may drop as a reaction, landing adjacent to the target. If the target is unaware of the spider, the spider has advantage on its first attack roll.",
          },
        ],
      },

      actions: [
        {
          name: "Multiattack",
          description: "The spider makes two attacks: one Web Shot and one Bite. It may not use Web Shot against a target it is already restraining.",
        },
        {
          name: "Web Shot",
          type: "Ranged Weapon Attack",
          roll: "+5 to hit · Range 20 ft. · One target",
          damage: "No damage",
          description: `On a hit, the target is restrained by webbing. As an action, a restrained creature can make a DC 13 STR check to break free. Another creature adjacent to the restrained target may also use its action to attempt the same check on its behalf. The webbing can also be destroyed — it has AC 10 and 5 hit points, and is vulnerable to fire damage.`,
        },
        {
          name: "Bite",
          type: "Melee Weapon Attack",
          roll: "+5 to hit · Reach 5 ft. · One target",
          damage: "1d8 + 3 piercing",
          description: `On a hit, the target must make a DC 15 CON saving throw or become envenomed (see below).`,
        },
      ],

      envenomed: {
        title: "Envenomed (Condition)",
        description: `A creature that fails its saving throw against the spider's bite is envenomed. While envenomed:

— The creature takes 1d4 poison damage at the start of each of its turns.
— The creature's movement speed is halved.
— The creature has disadvantage on attack rolls.

At the end of each of the envenomed creature's turns, it may repeat the DC 15 CON saving throw. On a success, the condition ends. The condition also ends if the creature receives magical healing of any kind.

A spider must land a new successful bite to reapply the condition after it has been shaken off.`,
      },
    },
  },

  connects: [
    { name: "The Sunning Chamber", path: "/pine-loft/lonely-path-pines/the-ruins/dungeon/sunning-chamber" },
    { name: "Sacrificial Preparation Chamber", path: "/pine-loft/lonely-path-pines/the-ruins/dungeon/preparation-chamber" },
    { name: "The Dining Hall", path: "/pine-loft/lonely-path-pines/the-ruins/dungeon/dining-hall" },
  ],
};
