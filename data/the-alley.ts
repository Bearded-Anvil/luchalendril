export const theAlley = {
  id: "the-alley",
  name: "The Back Road",
  city: "Beacon",
  image: "/orphan-street.jpg",

  sceneDescription: `Walking onto the back road, you feel as though you've left the city and entered a shell of it. The street lamps are there — lanterns hanging — but none are lit and they don't look like they've been lit in a long time. The storefronts are empty and mostly boarded up. Many of the signs are so faded and chipped you can't tell what they once were. Algae has grown over much of the once-beautiful cobblestone and along the walls of the buildings, giving everything a faint sheen of green. Most metal things carry rust. Piles of rubble, broken boards, papers, and wrappings are stacked against the walls. You notice one pile move — but you aren't sure if it's a homeless person or a very large rat beneath the garbage. Further down the road, you hear voices. One person gives a small cheer and another curses. As you make your way closer, you see a few adults on their knees or sitting on the ground, and across from them — children dressed similarly to Hap.`,

  dmApproach: `The adults and children are crouched around small pits dug barely a few inches into the ground between them. They're rolling dice. A woman, just after rolling, curses and sits back on her heels as the child across from her — around twelve years old — snatches up a couple of coins. The woman sighs, stands, brushes off her dress and says "I'll be back. Don't you give away all of the rooms." She gives your party a suspicious eye as she hurries past. Nearby, a man shouts "Yes!" — grabs his coins, jumps to his feet, picks up a travel bag, and says "Lead the way, good sir!" The boy jumps up and leads him into an old building behind the children, the walls a similar greenish colored brick.`,

  perceptionCheck: {
    dc10: `A score of 10 or higher notices the faded letters on the wall that spell out the word "Orphanage."`,
    dc15: `A score of 15 or higher also notices the shadow of a very large figure standing off to the side in the darkness — arms folded across a broad chest, watching over the children.`,
  },

  pipIntro: `As you near the pits, a young man — probably around fifteen — steps forward to meet you. He's wearing similar clothes to the other children, a little too small for him, but he's thin enough to pull it off. He nods in greeting. "Lookin' for a room? My name is Pip and you have to play the game to get the room. The game is simple enough." He points down to the pits and the children across from them. "You take six, six-sided dice, roll against my friends here and add up your results. Dice that are doubles get doubled. Dice that are triples get tripled. So if you roll two ones — add them to get 2, then double it to get 4. Then add the rest. Simple enough?" He holds up a hand as if he's heard the objection before. "Here's the catch. You have to put up 5 silver to try. If you win the roll, you keep your silver and get the room. If we win, we get the silver and you're free to try again. You don't get a room until you win. Simple enough?"`,

  dmGame: `Run the dice game using the roller below. Players put up 5 silver each attempt. They may try as many times as they want. They cannot receive a room until they win a roll. Once they win, Pip welcomes them and leads them inside.`,

  dmGorkrun: {
    name: "Gorkrun",
    description: `The large figure in the shadows is an Orc — older, large, and very strong. His name is Gorkrun. He lives with the children in the orphanage, receives his cut of the game's profits, and in return, he protects them from anyone who would cause trouble. He stays in the shadows, out of the picture, out of all negotiations. He never haggles or deals. The children feel safe enough to do all of the business themselves. Gorkrun only steps forward when violence or force is needed.`,
    dmNote: `Scale Gorkrun to the party's level — keeping him high enough to be a credible threat until they reach higher levels. He should feel like a seasoned guard, retired from long journeys and hard adventures. He is not hostile. He is watching.`,
  },
};
