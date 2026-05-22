export const hydrangeaWay = {
  id: "hydrangea-way",
  name: "Hydrangea Way",
  image: "/hydrangea-way.jpg",

  sceneDescription: `Hydrangea Way is a row of boutiques along a pretty little sidewalk, the same colorful cobblestone of the Garden District running before it. The storefronts are mostly glass — large windows designed to show what's inside rather than make you wonder. Between each shop, yellow-flowered vines climb the dividing walls all the way to the roofline.

On the sidewalk, ornate iron benches sit in front of several of the stores. The frames are worked into the shape of vines, iron rosebuds forged here and there along the metal — not painted, not gilded, just iron shaped into something beautiful. Wooden slats make up the seats and backrests.

Above each storefront, a dark reddish-wood sign with cream-colored lettering names the shop. Along the rooftop edges, rows of hydrangeas in every color line the rim — a reminder that the rooftop gardens are up there, just out of sight, and that someone tends them daily.

In the window of **The Finest Things Enchantments**, mannequins wear a mix of fine clothing and travel clothing. All of it is high quality. None of it announces itself as adventurer's gear.

In the window of **Finesse for Success**, several rapiers are displayed, their basket hilts detailed in silver and gold. Leather outfits on mannequins behind them — muted blues, reds, greens — all of the finest quality.

In the window of **Things You Didn't Know**, pedestals hold large books with leather straps, some with small locks. A hand-lettered sign in front of a separate stack reads: Rare Copies Only.

In the window of **Luxury Awaits**, a display of rolled carpets, an ivory bathtub, and a wine rack are arranged around a sign that reads: Make Your House a Home.`,

  dmNotes: `Hydrangea Way is where the Garden District shops. The residents here don't need anything — they want things, which is a different relationship with commerce entirely. These stores are not trying to draw in foot traffic. They don't need to. Their customers already know where they are.

Players who wander in from the street are not unwelcome. They're just quietly assessed. The prices inside will reflect where they are. Finesse for Success in particular is worth noting — the rapiers in the window are functional weapons of exceptional quality, not decorative pieces. A player who can afford them and carries one will be noticed differently by anyone paying attention inside the district.

The rooftop gardens above these shops are the beginning of the city walk. Access is from the far end of Hydrangea Way.`,

  locations: [
    {
      name: "The Finest Things Enchantments",
      description: "Fine clothing and quality travel wear. Nothing that openly says adventurer. Mannequins in the window.",
      status: "coming-soon",
      path: null,
    },
    {
      name: "Finesse for Success",
      description: "Rapiers with ornate basket hilts in silver and gold. Premium leather outfits in muted blues, reds, and greens.",
      status: "coming-soon",
      path: null,
    },
    {
      name: "Things You Didn't Know",
      description: "Books on pedestals. Leather straps, small locks. A sign in front of one stack reads: Rare Copies Only.",
      status: "coming-soon",
      path: null,
    },
    {
      name: "Luxury Awaits",
      description: "Carpets, an ivory bathtub, a wine rack. Make Your House a Home.",
      status: "coming-soon",
      path: null,
    },
  ],

  roads: [
    {
      name: "Garden District Entrance",
      direction: "Back",
      description: "Back to the welcome circle and the iron gate.",
      status: "live",
      path: "/beacon/garden-district",
    },
    {
      name: "Garden District Ring Road",
      direction: "Continues",
      description: "The ring road continues further into the district.",
      status: "coming-soon",
      path: null,
    },
  ],
};
