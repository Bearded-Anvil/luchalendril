export const lateNightCrossings = {
  id: "late-night-crossings",
  name: "Late Night Crossings",
  street: "Pine Loft North",
  city: "Pine Loft",
  image: "/late-night-crossings.jpg",
  imageLarge: "/late-night-crossings.jpg",

  sceneDescription: `The smell of food and ale meets you at the door — woodsmoke, something roasting, and the low warm hum of people at rest. The room opens wide, maybe fifty feet across, round tables scattered across the floor with clusters of travelers and locals leaned over drinks and plates. Lanterns hang low over each table and wall sconces push warm light into the corners. Across the room, centered against the far wall, stands the bar — a wide, heavy counter with a row of empty mugs lined along the right side. Behind it, several ale kegs sit on a back shelf, taps turned out. The woman behind the bar watches you come in. She is stout and unhurried, blonde braid over one shoulder, white apron over brown and gray. She doesn't smile yet, but she doesn't not smile either. To her left, a stairwell climbs to the second floor, where an open walkway runs the length of the room above, a wooden rail keeping it honest. Five doors face the walkway and a hallway continues beyond — more rooms back there, it seems. To the right of the bar, a corkboard hangs on the wall with a carved header reading: Help Wanted. It is empty.`,

  owner: {
    name: "Tarva Keepfire",
    race: "Dwarf",
    age: "Middle Aged",
    appearance: `Around 5' tall and sturdily built, Tarva carries herself like someone who has never once wondered whether she could handle a situation. Blonde hair kept in a warrior's braid over one shoulder. Simple clothes — browns and grays — and a white apron worn like a uniform. Nice enough to her patrons. Stout enough that she doesn't feel like she has to be.`,
  },

  dmPrivate: {
    personality: `Tarva is direct, fair, and completely unimpressed by bravado. She'll serve anyone who keeps their hands to themselves and pay for what they order. She reads a room effortlessly — she's been watching people drink for twenty years and can tell when something is about to happen before it does. She doesn't threaten. She acts.`,
    desires: `Late Night Crossings is known up and down the southern road as the one place you can drink without worrying about a knife in your ribs. Tarva built that reputation herself and intends to keep it. That's not a goal so much as a point of personal honor.`,
    fears: `Tarva doesn't scare easily, but she knows that Pine Loft's quiet days won't last forever. As Beacon grows, more travelers come through — and not all of them are good people. She watches the road carefully and keeps her crossbow within reach at all times.`,
    questHooks: [
      {
        title: "The Help Wanted Board",
        description: `The board to the right of the bar is empty now — but it doesn't have to be. This is one of the cleanest quest hook delivery systems in Pine Loft. Slip a notice onto the board, read it aloud to your players as if they're reading it themselves, and let curiosity do the rest. You'll be notified when the locals have jobs ready to post.`,
      },
      {
        title: "The Back Hallway",
        description: `The hallway past the five visible doors is never fully explained to guests. Tarva doesn't bring it up. If asked, she says it leads to storage. Whether that's entirely true is up to you.`,
      },
    ],
    secretItems: [
      {
        name: "The Back Room",
        description: `For the right kind of traveler — someone who needs a conversation that doesn't happen at a table — Tarva can arrange a private room downstairs. No windows. No interruptions. She charges for the privacy, not the room.`,
        price: "5 gp",
        note: `Only offered if someone makes it clear they need it. Tarva doesn't advertise.`,
      },
    ],
  },

  menu: {
    hotMeals: [
      {
        name: "Fire-Roasted Chicken",
        description: "Half a bird, roasted over open flame. Served with a heel of bread and whatever root vegetables came in that morning.",
        price: "8 cp",
      },
      {
        name: "Hearth Stew",
        description: "A thick stew of whatever meat and vegetables are available — always hot, always filling. Served in a bread bowl.",
        price: "5 cp",
      },
      {
        name: "Pork Ribs (Half Rack)",
        description: "Slow-cooked over coals, rubbed with salt and dried herbs. Served with pickled onions and a chunk of dark bread.",
        price: "12 cp",
      },
      {
        name: "Roasted River Fish",
        description: "Whole fish, coals-roasted with herbs and wrapped in leaves. Caught fresh from the creek east of town.",
        price: "6 cp",
      },
      {
        name: "Venison Plate",
        description: "Sliced venison over a bed of roasted root vegetables, drizzled with pan drippings. When available.",
        price: "14 cp",
      },
      {
        name: "Grilled Sausage and Onions",
        description: "Two links of smoked sausage grilled with caramelized onions. Served with mustard and bread.",
        price: "6 cp",
      },
    ],
    breakfast: [
      {
        name: "Morning Oats",
        description: "Thick-cooked oatmeal with dried fruit and a drizzle of honey. Simple and filling.",
        price: "3 cp",
      },
      {
        name: "Eggs and Salt Pork",
        description: "Two eggs fried in a cast iron pan, served with thick-cut salt pork and a biscuit.",
        price: "5 cp",
      },
      {
        name: "Bread, Butter and Jam",
        description: "Fresh bread from Dora's Bakery, served warm with butter and whatever jam she made that week.",
        price: "2 cp",
      },
      {
        name: "Traveler's Plate",
        description: "A little of everything — oats, eggs, sausage, and bread. For those heading back out on the road.",
        price: "8 cp",
      },
    ],
    drinks: [
      { name: "House Ale", price: "4 cp" },
      { name: "Dark Stout", price: "5 cp" },
      { name: "Cider (Local)", price: "4 cp" },
      { name: "Watered Wine", price: "6 cp" },
      { name: "Hot Tea", price: "2 cp" },
      { name: "Water", price: "1 cp" },
    ],
    rooms: [
      {
        name: "Single Room",
        description: "A clean bed, a window, and a lock on the door. Nothing fancy. Everything you need.",
        price: "5 sp / night",
      },
      {
        name: "Double Room",
        description: "Two beds. Good for traveling companions or a party looking to save coin. Same clean standard.",
        price: "8 sp / night",
      },
    ],
  },
};
