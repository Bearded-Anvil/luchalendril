export const mercysHandsHealing = {
  id: "mercys-hands-healing",
  name: "Mercy's Hands Healing",
  image: "/home-hearth-district.jpg",
  tagline: "Cure for Body, Mind and Soul.",
  path: "/beacon/home-hearth-district/mercys-hands-healing",

  signs: [
    `A large carved wooden sign above the door — two hands, palms outward, with "Mercy's Hands Healing" carved deeply into the palms.`,
    `"Cure for Body, Mind and Soul" — smaller plank below the main sign.`,
    `A green banner beneath the window: two open hands on dark fabric.`,
  ],

  sceneDescription: `The inside of Mercy's Hands Healing is warm and quiet. Not the kind of quiet that comes from emptiness — the kind that comes from deliberate effort. Low light from oil lamps on the walls, the smell of dried herbs and something faintly sweet underneath, the sound of nothing in particular.

The walls are lined with shelves — every shelf filled with jars, pouches, bundles of dried plant material tied with cord, small bottles stoppered with wax, labelled in a tight, careful hand. Behind the counter, a row of larger crocks stands at eye height, their contents obscured.

A wide wooden worktable runs along the back wall. A mortar sits beside a pestle. A folded cloth lies next to a small pair of shears. Everything is clean and in its place.

There is a door to the back room, slightly ajar. A sign on it reads: Please wait. I will be with you.

The woman who comes out shortly after is not what you expected, if you were expecting anything. She is older — mid-fifties, perhaps — broad through the shoulders, with short-cut grey hair and brown skin. Her hands are large and capable. She looks you over the way a tradesperson looks at a job before giving a quote.

"What are you here for," she says. Not a question, exactly. More like the beginning of a process.`,

  owner: {
    name: "Mercy Aldmore",
    race: "Human (Female)",
    appearance: `Mid-fifties. Broad-shouldered and unhurried. Short grey hair, brown skin, large capable hands. She wears a plain linen apron over dark clothing and moves efficiently through her shop without looking at her feet. Her face is calm without being warm — she is paying attention to you, but she is assessing, not greeting.`,
    personality: `Direct. Not unkind, but not interested in pleasantries before she understands what is needed. She has been doing this work for thirty years and has seen most things. She asks good questions. She listens to the answers. If you are not honest with her about your condition, she will notice.`,
    dmPrivate: {
      background: `Mercy trained in the city of her birth and came to Beacon in her late twenties, following a relationship that ended a year after she arrived. She stayed because she had built something. She has never regretted it.`,
      whatSheSees: `She sees injuries honestly. A player who walks in with a poorly tended wound, a broken rib they are walking through, or something magically inflicted will have these things noticed. She will say so, clearly, and ask how it happened. She does not require the truth. But she notes the evasion.`,
      limits: `Mercy has no magical ability. She cannot cure curses, magical diseases, or conditions that require divine or arcane intervention. She knows this and will say so without apology. She can set bones, close wounds, treat infection, and manage pain. She can also tell you when something is outside her skill and who in Beacon might have the ability to help.`,
      hookNote: `If the party returns to her more than once, she will begin to ask questions. Not prying ones — just the kind a person asks when they notice someone keeps getting hurt in interesting ways. She may eventually offer information if she decides the party is doing something worth helping.`,
    },
  },

  inventory: {
    salves: [
      {
        name: "Minor Wound Salve",
        cost: "8 sp",
        description: "Cleans a minor cut or abrasion and promotes sealing. Apply once, leave the cloth on.",
      },
      {
        name: "Standard Wound Salve",
        cost: "2 gp",
        description: "For deeper cuts and gashes. Applied with a clean cloth to the wound after cleaning. Reduces infection risk significantly.",
      },
      {
        name: "Deep Wound Salve",
        cost: "5 gp",
        description: "For serious wounds requiring closure. Mercy applies this herself and includes basic stitching as needed.",
      },
    ],
    tonics: [
      {
        name: "Fever Tonic",
        cost: "5 sp",
        description: "Brings a moderate fever down within a few hours. Bitter. Works.",
      },
      {
        name: "Breathing Ease",
        cost: "3 sp",
        description: "For chest congestion and difficult breathing from illness. Opens the airways. Not effective against magical causes.",
      },
      {
        name: "Sleep Draft",
        cost: "2 sp",
        description: "Induces calm, natural sleep. Used for pain management or simple insomnia. Fades cleanly by morning.",
      },
      {
        name: "Nerve Calmer",
        cost: "4 sp",
        description: "Reduces pain signals. Does not remove the cause of pain — it manages it. Mercy sells this only alongside an explanation of that distinction.",
      },
      {
        name: "Gut Settle",
        cost: "2 sp",
        description: "For nausea, cramping, or illness of the stomach. Unflavored. Effective.",
      },
    ],
    poultices: [
      {
        name: "Bone Knit Poultice",
        cost: "8 gp",
        description: "Applied over a splinted fracture, this dense paste accelerates the healing process noticeably. Must be kept in place and the limb must be immobilized. Mercy will not sell this without examining the break first.",
        dmNote: "Reduces natural bone healing time meaningfully. Does not work on magical damage or cursed injuries.",
      },
      {
        name: "Draw Poultice",
        cost: "3 gp",
        description: "Applied to an infected wound to draw out the infection. Works over six to twelve hours. The cloth will need to be changed.",
      },
    ],
    services: [
      {
        name: "Wound Assessment",
        cost: "Free with purchase. 2 sp otherwise.",
        description: "Mercy examines any wound and tells you what she sees. Honestly.",
      },
      {
        name: "Wound Treatment",
        cost: "5 sp – 2 gp depending on severity",
        description: "Cleaning, closure, and dressing as needed. Mercy will tell you the cost before she starts.",
      },
      {
        name: "Illness Examination",
        cost: "1 gp",
        description: "A thorough examination. Mercy will identify what she can and tell you what she cannot.",
      },
      {
        name: "Bone Setting",
        cost: "2 gp",
        description: "Before applying the Bone Knit Poultice, a break must be properly set. Mercy does this herself. It is not pleasant. She is efficient.",
      },
    ],
  },
};
