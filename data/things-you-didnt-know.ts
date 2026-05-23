export const thingsYouDidntKnow = {
  id: "things-you-didnt-know",
  name: "Things You Didn't Know",
  image: "/things-you-didnt-know.jpg",
  tagline: "Knowledge is Power. Magic is Power. Therefore, Knowledge is Magic.",
  path: "/beacon/garden-district/hydrangea-way/things-you-didnt-know",

  sceneDescription: `The store opens into something closer to a private library than a shop. The floor is dark wood, most of it covered by an olive green area rug that runs nearly wall to wall. Rows of shelves fill the room in every direction — books stacked and ordered, artifacts tucked between them, small framed illustrations hung wherever space allowed. Candles and hanging lanterns push the dark back without quite winning.

Near the front, a large wooden table holds perhaps ten books of different shapes and thicknesses. Most of them are bound with leather straps. Several have small locks with keys resting beside them. One has a lock with no key — a little folded card propped in front of it reading simply: No key. Two deep, padded armchairs sit close to the table like an open invitation. The kind of chairs that suggest sitting down and not hurrying.

On the wall to the left, a large sign reads:

Knowledge is Power.
Magic is Power.
Therefore,
Knowledge is Magic.

The old man standing behind the table turns at your entry. He is dressed entirely as you might imagine a wizard — tall blue hat, long blue robes, a staff of carved wood held loosely in one hand. A white beard falls to his chest. Glasses sit on his slightly hooked nose. He looks at you in the way of someone who has decided that most visitors are more interesting than they appear at first glance, and is willing to be proven right.`,

  signs: [
    `"Things You Didn't Know — Rare Copies Only"`,
    `"Knowledge is Power. Magic is Power. Therefore, Knowledge is Magic."`,
    `"No key." — (small folded card, propped against the locked book on the front table)`,
  ],

  owner: {
    name: "Richard Baylor",
    race: "Human (Male)",
    appearance: `Old, with long white hair and a white beard that falls to his chest. Glasses rest on his slightly hooked nose. He dresses entirely as a wizard — tall pointy blue hat, long blue robes — because he believes knowledge and magic are one and the same, and he intends to look the part. He carries a decorative staff he purchased from Whittled Things. It does nothing. He doesn't care.`,
    personality: `Richard does not perform eccentricity. He genuinely believes what the sign says. Knowledge is magic. He collects books of real importance and sells them only to people he judges to be serious about gaining it. Casual browsers he tolerates. Serious readers he lights up for. He will sometimes visit the theater and give speeches about history and heroics, then mention — somewhat too casually — that his shop carries the books behind the stories.`,
    dmPrivate: {
      fears: `Richard fears that books are no longer appreciated the way they deserve to be. Not just unused — actively dismissed. He has watched people walk past shelves of world history to ask him if he carries anything with pictures. He keeps collecting anyway. He believes the right reader always finds the right book eventually. He's just not always sure he'll live long enough to see it.`,
      questHook: `Any time a player finds a book that looks old, unusual, or significant, they can bring it to Richard. There is a good chance he will know what it is. He will appraise it fairly and buy it without haggling. He does not lowball serious finds. He wants the book in his collection more than he wants the coin.`,
    },
  },

  dmNote: `Players can read approximately one chapter per night. These are not books for pleasure. They are dense, factual histories. The information in each chapter should be given to the players on the nights they read — not summarized in advance. Let the world reveal itself one sitting at a time.`,

  inventory: [
    {
      name: "The Forming of Braver's Bowl",
      price: "50 gp",
      nights: 10,
      description: "A dense historical account of how Beacon came to exist — and what had to be destroyed for it to begin.",
      chapters: [
        {
          number: 1,
          text: "You learn that the bowl used to be flat land and that Beacon wasn't there before the land was changed. Rather, the land was flat and sparse and continued on to fill the White Bay before the Bowl was created.",
        },
        {
          number: 2,
          text: "Braver's Bowl wasn't formed naturally. Not a meteor. Not erosion. The chapter hints that a great evil was prevented by its creation. It seems as though this was common information at the time of the book's writing and it doesn't delve deeply into what evil was prevented.",
        },
        {
          number: 3,
          text: "There was a great argument between large factions of mages. Half of them wanted to use their power to banish or destroy the evil. The other half wanted to use their power to attempt to control it. In the end, the half that wanted to banish or destroy won the debates — and used their magic accordingly.",
        },
        {
          number: 4,
          text: "The mages who used their power to destroy the great evil went missing shortly after. The other half dispersed, unhappy with the decision. Some believe the mages who made a blast great enough to form Braver's Bowl destroyed themselves in the process.",
        },
        {
          number: 5,
          text: "News of the land that once filled the White Bay began reaching fishing and coastal towns. Rumors that the land wasn't destroyed and didn't sink into the ocean. Rather, these rumors suggested it was out there — floating in the ocean — though none of them knew what the island held.",
        },
        {
          number: 6,
          text: "News reached some of the dispersed mages and a few of them came to the northern side of Braver's Bowl to form a settlement overlooking the water. More a tent city at the top of the Bowl, where the mages began working on constructing a lighthouse.",
        },
        {
          number: 7,
          text: "As news of their lighthouse spread, the High King sent men to aid the mages — for a mysterious fog had filled the bay and was creeping up onto the land itself. The mages warned that evil could find its way inland using the fog as cover. They were building the lighthouse to hold the white fog in the bay by forming magical lenses to shine light through. The lenses were said to weaken the fog and keep it from spreading.",
        },
        {
          number: 8,
          text: "As more people came to help build and maintain the lighthouse, more settlements followed. The population climbed. Merchants and vendors began traveling there to make their sales. The lighthouse became a hub for trade. The community grew until a city slowly formed down in Braver's Bowl.",
        },
        {
          number: 9,
          text: "Seeing that this literal hole in the ground was turning into a serious trade point, the High King ordered docks built to ease traffic on the roads and a wall constructed around the settlements to keep the growing number of bandits from coming in. He also sent men to patrol the roads to protect the traveling merchants.",
        },
        {
          number: 10,
          text: "The High King realized that Beacon was becoming something real — a city rather than a settlement. With too much on his own plate, he ordered that a Magister be elected and put over Beacon, and that a Council of Eight be placed under him. The Magister took a vote with his council and chose to name the city Beacon — after the lighthouse that first drew attention to the crater and turned the site of a disaster into a city of trade and commerce.",
        },
      ],
    },
    {
      name: "The Six Heroes of Valpin",
      price: "35 gp",
      nights: 7,
      description: "The history of the six individuals whose names were folded into the name of a territory — and why they earned that honor.",
      chapters: [
        {
          number: 1,
          text: "The Valpin Territory used to be known as The Valley of Mountains, for its unusual abundance of both. After the great destruction wrought by the mages who chose to destroy the territory rather than let some great evil take hold, it was renamed in honor of six heroes who aided them. Their names were folded into the word Valpin itself.",
        },
        {
          number: 2,
          title: "Valadis — The Knight Who Knew No Fear",
          text: "The V in Valpin stands for Valadis. He was the first knight to break the orders barring people from the land due to the great evil. Knowing that people were still trapped inside the Valley of Mountains, he rode in to warn them — fully prepared to fight and die if necessary. He had no knowledge of the other heroes when he made this decision. And it was Valadis who convinced the others that dying might be a worthy sacrifice.",
        },
        {
          number: 3,
          title: "Altruis",
          text: "The A in Valpin stands for Altruis — a warrior, a duelist, and a man trained in the ways of magic. He heard the message of Valadis and joined him in the quest to free the people of the Valley of Mountains. He became the general of the militia that rose up to stand against the great evil's forces. His refusal to quit pushed those forces back into the part of the land later destroyed by the Circle of Mages. Altruis was slain in that final push.",
        },
        {
          number: 4,
          title: "Lydallia",
          text: "The L in Valpin. Lydallia was an elf and a great sorceress. Sleep visions had woken her too many times in a cold sweat for her to ignore them any longer. She came looking for the evil that tested her slumber. Rallied by Valadis, she joined the Six and faced the great evil head on, using her magic to quell the magical attacks thrown at her allies. At the end of this chapter, you read that her mind was finally broken by the psychic assault of the evil — and that she fell in the final push.",
        },
        {
          number: 5,
          title: "Praynar",
          text: "The P in Valpin. Praynar was the only knight who could withstand the psychic attacks of the great evil. During the years of conflict, he and Lydallia fell in love. But Praynar, being human, denied her hand — knowing the pain his eventual death would bring her. Upon Lydallia's death, Praynar refused to pull back. He followed the great evil, assaulting it again and again until retreat was no longer possible for it. The sundering caused by the Circle of Mages brought him to an end as well. He was never seen again.",
        },
        {
          number: 6,
          title: "Insin",
          text: "The I in Valpin. Insin was a halfling and a thief. When word came that a hero was needed to infiltrate the great evil's homeland, he heard it and answered. He was an expert in smuggling not only items but people. He managed to get himself and Nyddie behind enemy lines where no one else had found a way. Some say he slipped through underground cracks caused by the evil's magic. Others say he disguised them both as minions and walked through unnoticed. However he did it, he got Nyddie in — and was slain helping her escape.",
        },
        {
          number: 7,
          title: "Nyddie",
          text: "The N in Valpin. Nyddie was a gnome — a scholar, a linguist, and a historian. When the call came for someone to infiltrate behind enemy lines and find answers, she heard it clearly. There was just one problem: she had no way to get there. Insin was the answer. Somehow they got inside, and only she returned — bringing the sad news of Insin's end and information that proved vital in driving the great evil back into destruction. Nyddie was the only one of the Six to die of natural causes, nearly twenty years after the evil was banished into the depths of the ocean.",
        },
      ],
    },
    {
      name: "Red Monk, Blue Monk, Me Monk, You Monk",
      price: "5 gp",
      nights: 1,
      description: "A children's book. Illustrated. Genuinely funny.",
      chapters: [
        {
          number: 1,
          text: "A single chapter. The book explains, at a child's level, the different values held by the different monk factions across Luchalendril. Some monks feed the hungry. Some gather knowledge for great libraries. Some are nomadic, traveling to learn about all cultures. Some focus on law and order. The book barely mentions that monks can fight at all. The illustrations are brilliant and quietly hilarious.",
        },
      ],
    },
    {
      name: "The Love That Started The Hate",
      price: "25 gp",
      nights: 9,
      description: "A cautionary tale of cultural differences. The author holds no bias. They say so themselves, in the first paragraph.",
      chapters: [
        {
          number: 1,
          text: "After a brief disclosure in which the author asserts they hold no bias toward either side and believe all cultures have their place in Luchalendril, the story begins. Somewhere in the world there is a lake called Gillside Lake. It has three points of interest: a little fishing village on the south side, a little fishing village on the north side, and a small island in the middle.",
        },
        {
          number: 2,
          text: "Both villages discovered a sudden market for a very common fish known as the Bonehead Carp. Though the two villages had always maintained a cordial relationship, this obsession with Bonehead Carp quickly turned into a race, and then a feud. The end of this chapter raises a quiet question: was the Bonehead Carp called a Bonehead Carp before this incident — or because of it?",
        },
        {
          number: 3,
          text: "A young woman named Laysa, who has no interest in fishing, goes out one day with her father and sees the most beautiful wildflowers she has ever encountered growing on the little island. She begs him to take her there. Her father, a practical man focused on providing for his family, gently tells her no. Laysa cannot stop thinking about those flowers.",
        },
        {
          number: 4,
          text: "A young man named Cadrell is learning to fish to help support his family after his father suffered a boating accident. He has repaired his father's boat and plans to surprise him by taking it out and returning with a Bonehead Carp from deeper waters.",
        },
        {
          number: 5,
          text: "Laysa is from the south village. Cadrell is from the north village. Neither of them is especially obedient or adequately trained in boating. Laysa borrows her father's boat against his wishes and sets off for the island to pick the wildflowers. Cadrell takes out his imperfectly repaired boat, reaches deeper water, and begins to sink — forcing him to swim for the nearest land. The island.",
        },
        {
          number: 6,
          text: "The chapter does not go into detail about their first meeting. Or their future meetings. Only that there were many of them, all held in secret on the island over the course of nearly a year — while their villages edged closer and closer to open violence over a fish. All that was needed was one good reason to set them off.",
        },
        {
          number: 7,
          title: "The Reason",
          text: "Laysa's father, searching for his missing boat in a neighbor's vessel, spots it pushed into the tall grass on the island. Fearing bandits, he approaches carefully. And there he finds his daughter kissing a boy from the north village. Filled with rage, he draws his short bow and looses an arrow that comes nowhere near Cadrell. But it is enough to send the boy running.",
        },
        {
          number: 8,
          text: "Laysa's father locks her away and, when people ask why, lets pride make his decision. Rather than admit his temper or his near-act of violence against an innocent boy, he tells people he saw Cadrell trying to force himself on Laysa — and that she had sent a warning shot to run him off. Meanwhile, Cadrell flees home and tells his parents the south village attacked him without cause. He leaves out the part about Laysa entirely.",
        },
        {
          number: 9,
          text: "Rumors grew into nightmarish stories bearing no resemblance to the truth. Both fathers decided they would rather go to war than admit their children had done something foolish. So war they made. Both villages rallied, set sail, and met one another on the open water. Many were killed by sling and arrow and sank to the bottom. Those who didn't drown leapt out onto the island as if claiming the site of the original insult would decide the outcome. Most of the men from each village lay dead on the island when it was over. Both fathers among them. Cadrell and Laysa fled and were never seen again. Some believe they went in opposite directions and never found each other. Many believe they met and built a new life somewhere far from both villages. Neither has ever stepped forward to say.",
        },
      ],
    },
  ],
};
