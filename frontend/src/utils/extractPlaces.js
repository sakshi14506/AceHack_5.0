export function extractPlaces(itinerary) {

  const types = ["restaurant", "temple", "shopping"];

  return itinerary.map((item, index) => ({

    name: item.title,

    type: types[index % types.length],

    coords: [
      28.6139 + index * 1.5,
      77.2090 + index * 1.5
    ]

  }));

}