export function generateItinerary(mood) {

  if (mood === "Adventure") {

    return [
      { day: "Day 1", title: "Mountain Trek", desc: "Start with a scenic trek." },
      { day: "Day 2", title: "Water Sports", desc: "Try rafting or surfing." },
      { day: "Day 3", title: "Sunset Hike", desc: "End with a sunset viewpoint." }
    ];

  }

  if (mood === "Relax") {

    return [
      { day: "Day 1", title: "Beach Walk", desc: "Relax by the sea." },
      { day: "Day 2", title: "Spa Day", desc: "Enjoy a calming spa session." },
      { day: "Day 3", title: "Cafe Hopping", desc: "Visit cozy cafes." }
    ];

  }

  return [

    { day: "Day 1", title: "City Walk", desc: "Explore local streets." },
    { day: "Day 2", title: "Museums", desc: "Visit cultural landmarks." },
    { day: "Day 3", title: "Local Food", desc: "Taste authentic cuisine." }

  ];

}