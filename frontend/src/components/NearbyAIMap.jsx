import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";

const places = [
  { name: "Cafe Mocha", type: "cafe", lat: 28.6139, lng: 77.2090 },
  { name: "Royal Restaurant", type: "restaurant", lat: 28.6110, lng: 77.2150 },
  { name: "Hanuman Temple", type: "temple", lat: 28.6129, lng: 77.2295 },
  { name: "City Mall", type: "shopping", lat: 28.6100, lng: 77.2300 }
];

function NearbyAIMap() {

  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? places
      : places.filter((p) => p.type === filter);

  return (
    <div>

      <div className="flex gap-3 mb-4 flex-wrap">

        <button onClick={() => setFilter("all")} className="px-4 py-2 bg-gray-200 rounded">
          All
        </button>

        <button onClick={() => setFilter("restaurant")} className="px-4 py-2 bg-gray-200 rounded">
          Restaurants
        </button>

        <button onClick={() => setFilter("cafe")} className="px-4 py-2 bg-gray-200 rounded">
          Cafes
        </button>

        <button onClick={() => setFilter("temple")} className="px-4 py-2 bg-gray-200 rounded">
          Temples
        </button>

        <button onClick={() => setFilter("shopping")} className="px-4 py-2 bg-gray-200 rounded">
          Shopping
        </button>

      </div>

      <MapContainer
        center={[28.6139, 77.2090]}
        zoom={13}
        style={{ height: "400px", width: "100%" }}
      >

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {filtered.map((place, i) => (
          <Marker key={i} position={[place.lat, place.lng]}>
            <Popup>{place.name}</Popup>
          </Marker>
        ))}

      </MapContainer>

    </div>
  );
}

export default NearbyAIMap;