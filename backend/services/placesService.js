import axios from "axios";

export const getNearbyPlaces = async (destination) => {

  const url = "https://overpass-api.de/api/interpreter";

  const query = `
[out:json];
area["name"="${destination}"]->.searchArea;
(
node["tourism"](area.searchArea);
node["amenity"="restaurant"](area.searchArea);
node["shop"](area.searchArea);
);
out center 20;
`;

  try {

    const response = await axios.post(url, query);

    return response.data.elements.map(place => ({
      name: place.tags?.name || "Unknown Place",
      lat: place.lat,
      lon: place.lon,
      type:
        place.tags?.tourism ||
        place.tags?.amenity ||
        place.tags?.shop ||
        "place"
    }));

  } catch (error) {

    console.log("OSM API error:", error.message);

    return [];

  }

};