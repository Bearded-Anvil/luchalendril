export const lonelyPathNorthernTract = {
  id: "lonely-path-northern-tract",
  name: "Lonely Path — Northern Tract",
  image: "/lonely-path-northern-tract.jpg",
  path: "/pine-loft/lonely-path-pines/northern-tract",
  day: "Day 1 of 3",

  sceneDescription: `The first hour is the hardest for the eyes. Coming from even the dim light of the forest entrance, it takes time to adjust to how little reaches the floor here. The pines are old and their canopy is thick — light arrives in slow columns when it arrives at all, otherwise diffused into a pale green glow that makes everything feel slightly unreal. The road is dirt, packed hard over many years of use, and still visible beneath a thin layer of pine needles shed from the branches above.

The quiet is specific. Wind moves high in the treetops — you can hear it — but almost none of it reaches the road. Sound is muffled in the way of places where the air doesn't move much. Your own footsteps seem louder than they should.

The road is real and it holds. Where it bends, the turns are gradual, worn into the landscape by years of the same feet choosing the same path. Whatever comes off the road is a different matter. The trees beyond the shoulder are close together and the undergrowth thickens fast. Fifty feet from the road in any direction and you would not be able to see it.`,

  dmNote: `The Northern Tract is the first full day of travel through the Lonely Path Pines. For most travelers, this section is uncomfortable but not actively dangerous — the road is clear, the forest doesn't press in on it, and a group that keeps moving and stays on the road will reach the halfway point without serious incident.

The discomfort is the point. The pines are not hospitable. They are indifferent, which is in some ways worse. Players who decide to leave the road should understand immediately that visibility drops to almost nothing within a few dozen feet and that tracking direction becomes genuinely difficult without a skilled navigator.

Planned encounters here should favor atmosphere over combat — something heard but not seen, tracks that don't match a known creature, a brief glimpse of movement in the dark between the trunks. Save the harder threats for the deeper sections.`,

  locations: [
    {
      name: "The Pale Run",
      description: "A cold, fast stream that crosses the road. The water is clear and the streambed is visible even where it runs deep.",
      path: "/pine-loft/lonely-path-pines/northern-tract/pale-run",
      status: "live",
    },
    {
      name: "The Fallen Elder",
      description: "A massive pine brought down by age and weight. The trunk is wide enough to walk across. The root system towers overhead where it was torn from the earth.",
      path: "/pine-loft/lonely-path-pines/northern-tract/fallen-elder",
      status: "live",
    },
    {
      name: "The Marked Tree",
      description: "A pine at the road's edge bearing carvings no one has been able to identify. They are old. Someone made them deliberately.",
      path: "/pine-loft/lonely-path-pines/northern-tract/marked-tree",
      status: "live",
    },
  ],

  roads: [
    {
      label: "Lonely Path Pines",
      direction: "North",
      description: "Back to the forest entrance and Pine Loft beyond.",
      path: "/pine-loft/lonely-path-pines",
      status: "live",
    },
    {
      label: "Lonely Path — Middle Tract",
      direction: "South",
      description: "The road continues deeper into the forest. Day 2.",
      path: "/pine-loft/lonely-path-pines/middle-tract",
      status: "coming-soon",
    },
  ],
};
