import { useState } from "react";
import { MapContainer, TileLayer, Marker, Polyline, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function SmartRouteMap({ places = [] }) {

  const [filter, setFilter] = useState("all");

  const filteredPlaces =
    filter === "all"
      ? places
      : places?.filter((p) => p.type === filter);

  const positions = filteredPlaces.map((p) => p.coords);

  return (

    <div>

      {/* FILTER BUTTONS */}

      <div className="flex gap-3 mb-4">

        <button
          onClick={() => setFilter("all")}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          All
        </button>

        <button
          onClick={() => setFilter("restaurant")}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          Restaurants
        </button>

        <button
          onClick={() => setFilter("temple")}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          Temples
        </button>

        <button
          onClick={() => setFilter("shopping")}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          Shopping
        </button>

      </div>

      <MapContainer
        center={filteredPlaces[0]?.coords || [28.6139, 77.2090]}
        zoom={5}
        className="h-80 w-full rounded-xl"
      >

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {filteredPlaces.map((p, i) => (

          <Marker key={i} position={p.coords}>

            <Popup>
              {p.name} ({p.type})
            </Popup>

          </Marker>

        ))}

        {positions.length > 1 && (
          <Polyline
            positions={positions}
            pathOptions={{ color: "blue", weight: 4 }}
          />
        )}

      </MapContainer>

    </div>
  );
}