export const braversTemple = {
  id: "bravers-temple",
  name: "Braver's Temple",
  image: "/bravers-temple.jpg",

  sceneDescription: `The floor inside Braver's Temple is white tile, unmarked and clean in the way that suggests it is cleaned often. Four giant columns rise from the floor to the ceiling, marble-veined and pale, and the walls between them are marble as well — smooth and without ornament except for the tapestries. Six of them hang at intervals around the room, each one floor-to-ceiling and depicting something that took years to complete. A stone podium near the center holds a large open book. The pages are filled in a hand that is deliberate and unhurried.

At the far end of the room, a low raised platform with rows of wooden chairs faces the podium — plain chairs, without cushion or ceremony. A long table near the right wall holds food. It is not elaborate: bread, fruit, simple things. Three monks in cobalt blue robes move quietly around it, setting and clearing without looking up. Cobalt blue carpets trimmed in gold run from the entrance to the platform, and from each of the three interior doors.

The tower above is not accessible from the main floor. The door to it is unmarked.`,

  tapestries: [
    {
      label: "I",
      title: "The First Flame",
      description: `A figure stands alone at the center of absolute darkness. One hand is raised, and from it — a single point of flame. Around the edges of the tapestry, the darkness curls back as if pushed. There are no other figures. The flame is everything.`,
      dmNote: `This is the creation moment — Braver's first act. The darkness is not evil; it is absence. This tapestry is always hung nearest the entrance. It is the first thing you see when you walk in.`,
    },
    {
      label: "II",
      title: "The Giving of Names",
      description: `A crowd — so many figures they blur at the edges — stretches across the full width of the tapestry. Each face is distinct. In the center, the same figure from the first tapestry stands with arms open, not as a ruler but as someone returning from a long journey. The faces in the crowd are not reverent. Some are laughing. Some are crying. Some are looking at each other instead of the figure.`,
      dmNote: `Braver's followers interpret this tapestry differently depending on their temperament. The optimistic read it as joy. The scholarly read it as the moment consciousness was distributed — when each soul was given its own interior life. The pessimistic quietly note that some figures aren't paying attention at all.`,
    },
    {
      label: "III",
      title: "The First Death",
      description: `A single figure lies on dark ground. Around them, others kneel. The flame — visible in a corner of the tapestry — is smaller here, and slightly dimmer. The kneeling figures do not look afraid. They look as though they are waiting for something they know will come.`,
      dmNote: `This tapestry is considered the most important in the temple by the monks, though they rarely explain why to visitors. Braver did not create death — but Braver witnessed it first, and chose not to prevent it. The monks will discuss this if asked directly, but only if the conversation is sincere.`,
    },
    {
      label: "IV",
      title: "The Long Road",
      description: `A road — impossibly long, winding through mountains, valleys, a city at one edge, open sea at another — rendered in extraordinary detail. Hundreds of figures travel it. Some are far ahead. Some have only just begun. A few are sitting at the side, resting. No figure appears twice. No two are moving in exactly the same direction.`,
      dmNote: `The tapestry has no destination shown. The road simply continues off the edge of the fabric. Pilgrims who stop to study it for long periods sometimes report finding figures that seem to resemble themselves or people they know. This is either a feature of the weaving or something else. The monks do not comment on it.`,
    },
    {
      label: "V",
      title: "The City on the Shore",
      description: `A coastal city — not Beacon, but something older and larger — built on white stone cliffs above a deep blue sea. At the city's center, a tower. From the tower, light. The city itself is full: ships in the harbor, figures in the streets, lights in every window. At the bottom edge of the tapestry, barely visible, a small boat is putting out from shore into open water.`,
      dmNote: `No one has identified the city with certainty. Scholars who have come to study the tapestries have suggested three or four possible historical locations, none of which have satisfied the monks. The small boat at the bottom is often missed on first viewing. Father Undoubted considers it the most important detail in the tapestry.`,
    },
    {
      label: "VI",
      title: "The Unfinished",
      description: `Most of the tapestry is complete. A vast scene — suggested sky, suggested land, figures at the edges moving toward a center that is not yet there. The central section is bare thread. Not damaged or worn — the weave is intact, but the image stops before it resolves. What is being depicted is unclear. What it is waiting for is unclear.`,
      dmNote: `This tapestry was hung by the original monks who built the temple. According to the records in the podium book, it arrived fully finished except for the center — which was never completed by the original weaver, who died before the work was done. The monks have kept it as-is. No one has been permitted to finish it. Father Undoubted has written in the temple records: "It is not ours to complete."`,
    },
  ],

  services: [
    {
      name: "General Wisdom",
      playerDescription: `The monks will sit with you. There is no fee. You may ask questions, describe a problem, or say nothing at all. A monk will listen and, when you are finished, offer what they can.`,
      dmNote: `General Wisdom is exactly what it sounds like: a monk sits with the party and listens. They will not lie. They will not offer false comfort. They know a fair amount about the world — local history, Beacon's layout, lore about Braver and the other powers — but they are not oracles. If they don't know something, they'll say so. Use this as a low-key information-sharing moment. The monk assigned will usually be Brother Hotence unless Father Undoubted has taken a specific interest in the party.`,
    },
    {
      name: "Light Healing",
      playerDescription: `Minor wounds can be treated here. Monks trained in Braver's practice may lay hands on the injured. There is no fee, though a donation to the food table is considered good form.`,
      dmNote: `Light Healing covers small wounds, stabilization, and removing the effects of 1 level of exhaustion. It does not restore hit points in combat, cannot remove curses, and cannot treat magical afflictions beyond stabilization. If the party arrives badly hurt, Hotence will do what he can and say honestly when they need more than the temple offers.`,
    },
    {
      name: "Curse Removal",
      playerDescription: `"If something has been placed on you that should not be there, come and speak with us." The monks do not advertise this service. They offer it when it seems warranted.`,
      dmNote: `Curse Removal is real but limited. The monks can remove curses of Common or Uncommon rarity (DMG classification). Rare curses require Father Undoubted personally, who will want to understand how the curse was acquired before agreeing to remove it. This is not refusal — it is due diligence. For plot-important curses, you may decide Father Undoubted needs more time, more information, or assistance the party can provide. There is no fee, but Father Undoubted may ask something of the party in return — not as payment, but as participation.`,
    },
    {
      name: "Information",
      playerDescription: `The podium book contains records going back to the temple's founding. If you are searching for something — a name, a lineage, an event — a monk can look.`,
      dmNote: `The records in the podium book are extensive and legitimate. The monks have recorded births, deaths, notable arrivals in Beacon, significant weather events, and anything else that seemed worth keeping. Lineage research, historical dates, notable residents — it's all in there if it happened in or near Beacon in the last several hundred years. For information outside that scope, the monks may know of other sources. Use this as a research mechanic: if the party is trying to trace something historical and you want to reward careful investigation, this is the tool.`,
    },
  ],

  monks: {
    fatherUndoubted: {
      name: "Father Undoubted",
      role: "Head of the Temple",
      race: "Human (Male)",
      appearance: `Old in the way that certain people get — the kind of old that doesn't look fragile, just very far along. White hair, cut short and neat. Moves slowly through the main hall on the rare occasions he comes down from the tower. He does not idle. When he appears, it is because he intends to be somewhere specific, and he gets there.`,
      dmNote: `Father Undoubted lives at the top of the tower. He does not come down often, and when he does, it means something. He is not cold or unfriendly — he is simply not interested in performing warmth he doesn't feel. If he sits with the party, they should understand they have his full attention, which is not a small thing. He knows more than he says and will occasionally mention something he shouldn't know without explaining how he knows it. Don't overuse him. He is more powerful as a rare appearance than as a recurring presence.`,
    },
    brotherHotence: {
      name: "Brother Hotence",
      role: "Second in Command",
      race: "Human (Male)",
      appearance: `Young — mid-twenties at most, probably younger than he looks. Blonde hair kept short, gray eyes that sit quietly in his face. He dresses in the same cobalt blue as the other monks, but there is something about the way he stands that suggests he has been singled out. He runs the day-to-day temple operations and is the monk the party will interact with most.`,
      dmNote: `Hotence is capable, genuine, and slightly uncertain in the way of someone who has been given more responsibility than their age warrants. He is loyal to Father Undoubted without being blind to the man's opacity. If the party spends time with him, he will be honest about what he knows and honest about what he doesn't. He is a good source for gentle exposition — he can explain Braver's history, temple customs, and the services offered without it feeling like an info dump, because he actually cares about getting it right.`,
    },
  },
};
