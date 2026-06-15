export const serpentPriestLockedRooms = {
  id: "serpent-priest-locked-rooms",
  name: "The Locked Rooms",
  image: "/serpent-priest-bedroom.jpg",
  path: "/pine-loft/lonely-path-pines/the-ruins/dungeon/priest-quarters/locked-rooms",

  sceneDescription: `You push the wooden door open and — surprisingly — it swings open quietly.

Inside, an old rotting bed sits in one corner, the sheets pulled up but crumbling around the edges onto the stone floor. A wooden chest of drawers rests against the wall across from it. A single round table sits next to the door with a single chair.

The room is dark, dingy, and smells of rot.`,

  dmNotes: {
    overview: `Both locked rooms look identical to the open ones at first. The difference is in the details — and only in the details. Don't announce that this room has something to find. Let the players search.`,

    drawers: {
      trigger: "If they search the chest of drawers",
      read: `You slide the drawers open and find tattered pieces of cloth piled in some and nothing in the others. You can piece together that these were once some sort of white robes.`,
      dmNote: `Same as the open rooms. White robes. The priests who locked these doors dressed the same as the ones who didn't.`,
    },

    room1: {
      title: "First Locked Room — The Sickle",
      trigger: "If they search around the bed and look back toward the dresser",
      read: `As you glance back toward the dresser from beside the bed, something catches the light. Tucked behind the dresser, nearly invisible in the dark — a blade. When you pull it free, you find a ceremonial hand sickle, small gemstones embedded along the handle, the metal still sharp despite its age.`,
      item: {
        name: "Ceremonial Hand Sickle",
        description: `A small curved blade — the size and shape of a dagger — with a handle inlaid with small gemstones set in tarnished metal. It was never meant for fighting. It was meant to be seen.`,
        mechanics: `Functions as a dagger. No magical properties.`,
        value: {
          weaponShop: `150 gold at any reputable weapon shop.`,
          antiquesDealer: `350 gold if they find an antiques dealer. DM's discretion on availability.`,
        },
        dmNote: `The sickle's value is in knowing where to sell it. A player who tries to use it as a sidearm is technically correct but missing the point. A player who holds onto it and asks around is eventually rewarded.`,
      },
    },

    room2: {
      title: "Second Locked Room — The Lockbox",
      trigger: "If they examine the room carefully",
      read: `The room is laid out just like the others — except the bed isn't quite in the corner. There's a gap, just enough to notice if you're looking.`,
      bedSearch: {
        trigger: "If they slide the bed away from the wall",
        read: `Tucked into the corner behind the bed, almost completely hidden by the angle of the wall, is a small lockbox.`,
      },
      lockbox: {
        dc: 18,
        trapCheck: {
          detectDC: 14,
          disarmDC: 15,
          dmNote: `The box is trapped. If they check for traps before opening, DC 14 to detect it. DC 15 to disarm it. If they open the box without checking — or fail to detect it — the trap fires.`,
        },
        trap: {
          trigger: "If opened without detecting or disarming",
          read: `As you lift the lid, you hear a sharp CLACK — and a small dart launches forward.`,
          dexSave: {
            dc: 16,
            damage: `1d6 piercing`,
            onHit: `You feel venom burning into the wound.`,
            conSave: {
              dc: 14,
              damage: `1d6 poison`,
            },
          },
        },
        openRead: `Inside the box, you see a diamond — clear, uncut, the size of a thumbnail — and beneath it, a golden circlet, finely worked, small enough to sit at the brow.`,
        contents: [
          {
            name: "Diamond",
            description: `An uncut diamond, thumbnail-sized, clear and flawless.`,
            value: `500 gold`,
            magic: false,
          },
          {
            name: "Circlet of Tongues",
            description: `A finely worked golden circlet, light enough to wear easily. No markings, no inscription. Warm to the touch.`,
            identification: `Must be identified before its use is known.`,
            effect: `Once worn and attuned, the wearer can speak any language they choose — fluently, accent-free, as if it were their native tongue.`,
            limitation: `The circlet grants the ability to speak. It does not grant the ability to understand. The wearer can address anyone in their language perfectly. Whatever is said in return remains as foreign as it ever was.`,
            dmNote: `The limitation is the item. Make sure identification reveals both halves — the speaking and the not-understanding — so the DM doesn't forget to enforce it. The moment a player confidently addresses someone in an unknown language and then stares blankly at the response is exactly what this item is for.`,
            magic: true,
          },
        ],
      },
    },
  },
};
