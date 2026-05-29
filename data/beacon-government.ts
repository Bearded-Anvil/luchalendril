export const beaconGovernment = {
  id: "beacon-government",
  name: "The Government of Beacon",

  overview: `Beacon is governed by the Grand Magister of Law, who holds authority over the city and its surrounding territory. Beneath him sit nine Council members, each responsible for a specific domain of city life. The Council brings matters to the Magister, who sets the order of business based on what he deems most pressing. Each issue is put to a vote among the nine. In the event of a tie, the Grand Magister casts the deciding vote.

The system is designed to distribute the work of governing while concentrating final authority in a single office. In practice, it means that nothing significant in Beacon moves without either the Council's agreement or the Magister's thumb on the scale.`,

  dmNote: `The government of Beacon is a political body, which means it is a body of competing interests wearing the costume of cooperation. Each council member has their own agenda beneath their official responsibilities. The Magister has his own agenda beneath all of them. The party will encounter this structure whenever they need something the city controls — permits, access, protection, or simply to be left alone.

Understanding who wants what, and who owes whom, is the key to navigating Beacon's politics. The council does not operate as a unified front. It operates as nine individuals who have agreed to sit in the same room.`,

  grandMagister: {
    name: "Durrago Le'Tarn",
    title: "Grand Magister of Law",
    status: "live",
    path: "/beacon/government/grand-magister",
  },

  council: [
    { seat: "Roadways & Streets", name: "Christopher Pallo", status: "live", path: "/beacon/government/council/streets-and-roadways" },
    { seat: "City Watch", name: "Dario Dulch", status: "live", path: "/beacon/government/council/city-watch" },
    { seat: "The White Bay", name: "Grorin Darkmane", status: "live", path: "/beacon/government/council/white-bay" },
    { seat: "Foreign Trade", name: "Delilah Stormcrow", status: "live", path: "/beacon/government/council/foreign-trade" },
    { seat: "Treasury", name: "Gilly Roundtree", status: "live", path: "/beacon/government/council/treasury" },
    { seat: "Housing & Construction", name: "", status: "coming-soon", path: null },
    { seat: "Food & Markets", name: "", status: "coming-soon", path: null },
    { seat: "Magic & Arcane Affairs", name: "", status: "coming-soon", path: null },
    { seat: "Docks & Labor", name: "", status: "coming-soon", path: null },
  ],
};
