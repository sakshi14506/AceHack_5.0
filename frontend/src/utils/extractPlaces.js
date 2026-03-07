export function extractPlaces(itinerary) {

  if (!itinerary) return [];

  const places = itinerary.map((item) => item.title);

  return places;

}