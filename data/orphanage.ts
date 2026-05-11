export const orphanage = {
  id: "orphanage",
  name: "The Orphanage",
  city: "Beacon",
  image: "/orphanage.jpg",

  sceneDescription: `The inside opens up into what was once a large, open lobby. A dark wood front counter still stands near the right side of the room, a few mismatched lanterns lit on top for light. More lanterns hang on the walls — low enough for children to reach — and none of them match either. In the large open room, three fire pits burn: barely more than circles of stones with fires in the center. Rows of cement blocks surround most of the pit areas, acting as benches. Patrons — both men and women — sit around the fires. Metal coffee tins and small rotisserie frames rest near or over the flames. The back wall has several windows, most of them boarded over, a few boards missing here and there to let in shafts of gray light. On the far left wall, a hallway opens up leading down past many closed doors. Behind the counter, a door cuts through the right-hand wall, closed. From the outside, you guessed the building has at least three floors — and being an orphanage, they are most likely full of rooms.`,

  pipWelcome: `Pip extends a hand toward the lobby. "Welcome to your temporary home. You're welcome to our fires and some coffee, but you have to bring your own food. We do bring buckets of water in that you're welcome to fill your water skins with." He points to the hallway on the far left wall. "The rooms start there. There are stairs at the end of the hallways and two more floors. You can pick a room that'll fit you all, or two if you need." He turns back to you. "After 2 days we ask that you play again to keep your rooms. Fair enough?"`,

  dmNotes: {
    firstVisit: `Read Pip's welcome only on the party's first entrance. On subsequent visits, Pip greets them by name and waves them through without ceremony.`,
    rooms: `The rooms are all roughly the same — just small enough for a child's bed, a dresser, and a chamber pot. The original beds were taken when the orphanage closed. Each room has an improvised sleeping arrangement: some are piles of straw with a blanket, some are bedrolls on the floor, a few rooms have hammocks, and some are simply blankets with a pillow. The doors close securely and lock with a deadbolt from the inside. There is no way to lock a room from the outside — nothing to leave behind and feel safe about.`,
    returning: `After 2 days, Pip will find the party (or send Hap to find them at the intersection) and remind them it's time to play again. If they refuse or ignore it, Gorkrun will appear in the doorway of their room the next morning, arms crossed, saying nothing.`,
  },
};
