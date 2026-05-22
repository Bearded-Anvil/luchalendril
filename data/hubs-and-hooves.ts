export const hubsAndHooves = {
  id: "hubs-and-hooves",
  name: "Offices of Hubs and Hooves",
  image: "/hubs-and-hooves-office.jpg",
  subtitle: "Satellite Office — East Main Street",

  sceneDescription: `The office is small — about the size of one of the stalls outside, which is probably not a coincidence. The floor and walls are light wooden boards, nailed in place, with no attempt at decoration beyond what's functional. A few small paintings of horses hang here and there, filling the space without adding much to it.

On the right, a fainting bench sits against the wall, its cushions upholstered in dull green and white stripes — a touch of softness in an otherwise plain room. On the left, a few wooden chairs face the front counter. The counter itself is the same light wood as everything else: no carving, no trim, nothing decorative. A small vase of yellow flowers sits at one end. At the other, a handwritten sign: No payments accepted in this office. Beside it, an oil lamp burns steadily. Two more oil lamps hang on the side walls — one on each side — keeping the room lit without making it feel warm.

Behind the counter, an elderly woman looks up from a large open ledger and smiles.`,

  sign: `"No payments accepted in this office."`,

  clerk: {
    name: "Missy Dunspade",
    race: "Human (Female)",
    age: "Elderly",
    appearance: `White hair pulled up into a bun. She wears glasses and has the kind of wrinkles that come from decades of smiling. She is dressed in a white button-up blouse and a black ankle-length skirt. She moves and speaks with considerably more energy than her age suggests — as though age is simply an inconvenience she hasn't gotten around to addressing.`,
    personality: `Missy is lively, cheerful, and completely unbothered by difficult customers. She has been doing this job long enough that almost nothing surprises her. She is warm with everyone, efficient with her ledger, and genuinely pleased to help — so long as you're not trying to pay her.`,
    dmNote: `Missy does not accept payments. That is not her job. Her job is the ledger: which horses go with which customer, which wagons are available, which routes have been booked. Payment happens outside — with the stable hands, or wherever the arrangement was made. She will explain this politely every time, no matter how many times it needs explaining.`,
  },

  stableBoy: {
    name: "Bedrick Dunspade",
    relation: "Missy's grandson",
    race: "Human (Male)",
    age: "~15",
    appearance: `Short black hair and a build that reads older than fifteen — the kind of strength that comes from loading hay bales and moving equipment every day. He wears a salmon-colored long-sleeve shirt with suspenders, gray pants, and black shoes.`,
    dmPrivate: {
      fears: `Bedrick's father was injured by a horse and can no longer work. Bedrick works every day to help support his family and carries that weight seriously. He doesn't talk about it easily — pride sets in hard — but it drives everything he does.`,
      goals: `He wants to learn everything about the horse, stable, and wagon trade. The plan — though he hasn't told anyone — is either to take over Hubs and Hooves one day, or leave Beacon and start its competition somewhere else. He doesn't know which yet. He just knows he's not stopping.`,
    },
  },
};
