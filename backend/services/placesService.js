import axios from "axios";

export const getNearbyPlaces = async (destination) => {

  const query = `
[out:json];
area["name"="${destination}"]->.searchArea;
(
node["tourism"](area.searchArea);
node["amenity"="restaurant"](area.searchArea);
);
out center 15;
`;

  try {

    const response = await axios.post(
      "https://overpass-api.de/api/interpreter",
      query
    );

    return response.data.elements.map(place => ({
      name: place.tags?.name || "Unknown",
      lat: place.lat,
      lon: place.lon
    }));

  } catch (error) {

    console.log("OSM error:", error.message);
    return [];

  }

};