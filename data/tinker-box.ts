export const tinkerBox = {
  id: "tinker-box",
  name: "The Tinker Box",
  image: "/tinker-box.jpg",
  tagline: "Mechanics and Repairs",
  path: "/beacon/southeast-beacon-street/tinker-box",

  sceneDescription: `The Tinker Box is a store up front and a workspace in the back, and the line between the two has long since blurred. The sales counter is also the workbench — dark wood, blue work cloths spread across the top, grease stains on most of it, and deep scars cut into the surface by hammers, blades, and things that probably shouldn't have been used indoors.

Behind the counter, the entire back wall is covered in leather tool belts stretched flat against the wood and packed end to end with screwdrivers, nut drivers, torque bits, saws, hammers of every weight, hand drills, vices, wrenches, vice grips, clamps, measuring devices, levels, corkscrews, and a number of tools that no one present could identify by name. Beside them hangs an apothecary rack built to hold vials — rows of them, each a different color and label.

The floor is stone, dirty from years of greasy boots crossing it without a second thought. Eight short chains hang from the ceiling, each suspending a bright blue lantern that casts the whole shop in a clean, sharp light. The shelves along both side walls are packed: hourglasses, clocks, mechanical lanterns, tripods, glowing objects, floating objects, telescopes, microscopes, goggles, magnifying glasses, and a great many things that don't have obvious names.

Somewhere behind all of it, a gnome is already watching you.`,

  signs: [
    `"Repairs Big or Small. If it's broke, I'll fix it. If it isn't... I'll figure out how it works!"`,
    `"No Refunds. Only Improvements!"`,
  ],

  owner: {
    name: "Skypipin Tallisworth",
    race: "Gnome (Male)",
    age: "Old",
    appearance: `Stands around two and a half feet tall with short white hair, a white mustache, and a pointed white tuft on his chin. His nose is round and prominent. He wears a headband fitted with a magnifying eyepiece that hangs over one eye — which makes that eye look enormous to anyone looking directly at him. His eyes are brown, nearly black. He wears a blue robe cut like a wizard's, though he has no arcane abilities whatsoever, and leather fingerless gloves to protect his hands while he works.`,
    personality: `Skypipin talks fast, thinks faster, and listens longer than you'd expect. He is genuinely delighted by problems he hasn't solved yet. He has little patience for people who dismiss mechanics in favor of magic, but he keeps that irritation polite — mostly. He is not arrogant. He simply believes, with complete sincerity, that any problem has a solution that doesn't require spell slots.`,
  },

  dmPrivate: {
    fears: `Tallisworth fears that magic will replace gadgetry. He believes mechanics and science can hold their own against the arcane and works diligently to produce evidence of that. He doesn't hate magic — he just doesn't think it can properly replace knowledge and skill. He has seen too many "simple enchantments" fail because no one understood the underlying mechanism. He understands the mechanism.`,
    goals: `Tallisworth is always looking for the next invention and how to make it work. He believes that anything the mind can think of can be created — and he intends to prove it, one build at a time.`,
    questHook: `Players are always welcome to come to Tallisworth with invention ideas. He always listens, and then immediately asks: "Well — how do we make it work?"

If the player has an idea, let them share it. Have Tallisworth get excited. Then tell them: "I think I can build this. But you'll have to come up with the cost of materials."

Charge gold based on how ambitious the idea is. A self-lighting lantern might cost 15 gold and take a few days. A sunlight-capturing beam weapon that deals fire damage could be 2,500 gold and take months — and make it fragile. Glass lenses. If they fall prone, take a hard hit, or fail a check at the wrong moment, a lens breaks. 75 gold to repair. Make it cost something if they want something ridiculous. But reward the creativity.`,
  },

  inventory: [
    {
      name: "Flash Sentry",
      price: "140 gp",
      stock: "5 in stock",
      description: "A flat disc with a small ball in its center. A tripwire attaches to either side and can be stretched across a path or doorway.",
      effect: "When triggered, the ball launches into the air and ignites in a blinding flash of white light. Creatures within 40 feet must succeed on a DEX saving throw (DC 14) or be blinded until the end of their next turn. On a success, no effect.",
      dmNote: "The flash is visible for nearly a mile at night and can serve as a long-range alert signal. Each sentry is single-use once triggered.",
    },
    {
      name: "Spring Loaded Camp",
      price: "250 gp",
      stock: "2 in stock",
      description: "Looks like an ordinary backpack. The interior is entirely taken up by the mechanism inside.",
      effect: "When placed on the ground and the ripcord is pulled, it springs into a tent large enough for 3, complete with bedrolls inside (wrinkled). A small rotisserie and coffee pot hang from the side. Using this item removes 1 hour from a long rest — no setup required. Two camps can support 8 party members (3 sleeping, 1 on watch per camp).",
      dmNote: null,
    },
    {
      name: "Timeshift Clock",
      price: "75 gp",
      stock: "1 in stock",
      description: "A clock built using magnets that link to the magnetic pull of the earth and sky. Small stones slide magnetically to the correct numbers.",
      effect: "So long as the clock can sit on the ground and its face can see the open sky, the holder always knows the accurate time.",
      dmNote: "It is up to the DM to tell players what time it is when they properly use this item.",
    },
    {
      name: "Spincord Communicator",
      price: "300 gp",
      stock: "2 in stock",
      description: "A shell-shaped device on the end of a very thin metal chain, with a handle on the opposite end. The chain is about 3 feet long.",
      effect: "When the owner spins the chain as fast as possible in front of them and speaks through it, their voice carries up to 300 feet. The message cannot be directed at a single target — anyone within 15 feet of the intended recipient will also hear it.",
      dmNote: "Players will struggle to use this in tight tunnels, while prone, or while hiding. The spinning radius alone makes it a commitment.",
    },
    {
      name: "Heat Trap Cloak",
      price: "100 gp",
      stock: "4 in stock",
      description: "A cloak with unusual material sewn throughout its lining.",
      effect: "After 1 hour in direct sunlight, the cloak holds warmth for 4 hours. While charged: resistance to cold damage, and advantage on skill checks and saving throws involving cold.",
      dmNote: null,
    },
    {
      name: "Sunlight Wood Burner",
      price: "50 gp",
      stock: "3 in stock",
      description: "A pen with no ink. A metal tip like a fountain pen, a glass handle, and an eyeball-sized glass ball on the back end.",
      effect: "In direct sunlight, the glass ball magnifies the light and heats the metal tip hot enough to burn text or images into wood.",
      dmNote: null,
    },
    {
      name: "Mixblend Glass Cutter",
      price: "45 gp",
      stock: "5 in stock",
      description: "A metal ring atop two strapped vials of reactive chemicals. Single use only.",
      effect: "Uncap the vials, invert the device — the chemicals mix, run down the ring, and reach an intense heat that melts through glass up to 4 inches thick. Cuts a human fist-sized hole in 1 minute before the ring itself melts. Requires an INT check (DC 10). On a failure, the user takes 1d4 fire damage and the cutter is wasted.",
      dmNote: null,
    },
    {
      name: "Magnetbind Net",
      price: "70 gp",
      stock: "3 in stock",
      description: "A tightly woven net with powerful magnets at each end. Must be retrieved to use again.",
      effect: "On a successful hit, the target must pass a DEX saving throw (DC 14) or be grappled. To escape: STR check (DC 14). If the target is wearing metal armor or carrying a metal weapon, both DCs increase to 16.",
      dmNote: null,
    },
    {
      name: "Solarcharge Shock Knife",
      price: "200 gp",
      stock: "3 in stock",
      description: "A knife with a mostly clear crystal on the butt of the handle. Copper coils and something spinning are visible inside the crystal.",
      effect: "After 1 hour in direct sunlight, the blade carries an electric charge. Thrown: deals knife damage + 1d8 lightning damage on hit. Stabbing: deals knife damage + 1d8 lightning damage to the target, and 1d4 lightning damage to the wielder. Must be retrieved and recharged before the shock effect works again.",
      dmNote: null,
    },
    {
      name: "Solarcharge Bolts and Arrows",
      price: "100 gp per bundle of 10",
      stock: "3 bundles of each in stock",
      description: "Crossbow bolts and arrows built with a small solar crystal on the back. A copper wire coils up the shaft into the metal tip.",
      effect: "After 1 hour in direct sunlight, each projectile deals an additional 1d6 lightning damage on a hit against a creature. Must be retrieved and recharged to use again.",
      dmNote: null,
    },
  ],
};
