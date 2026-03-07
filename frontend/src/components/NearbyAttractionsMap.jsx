import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";

function NearbyAttractionsMap({ lat, lon }) {

  const [places, setPlaces] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {

    const fetchPlaces = async () => {

      let query = "";

      if (filter === "restaurants") {
        query = `[out:json]; node["amenity"="restaurant"](around:5000,${lat},${lon}); out;`;
      }

      else if (filter === "shopping") {
        query = `[out:json]; node["shop"](around:5000,${lat},${lon}); out;`;
      }

      else if (filter === "temples") {
        query = `[out:json]; node["amenity"="place_of_worship"](around:5000,${lat},${lon}); out;`;
      }

      else if (filter === "parks") {
        query = `[out:json]; node["leisure"="park"](around:5000,${lat},${lon}); out;`;
      }

      else {
        query = `[out:json];
        (
          node["tourism"](around:5000,${lat},${lon});
          node["amenity"="restaurant"](around:5000,${lat},${lon});
          node["shop"](around:5000,${lat},${lon});
          node["leisure"="park"](around:5000,${lat},${lon});
        );
        out;`;
      }

      const url =
        "https://overpass-api.de/api/interpreter?data=" +
        encodeURIComponent(query);

      const res = await fetch(url);
      const data = await res.json();

      setPlaces(data.elements.slice(0, 20));

    };

    fetchPlaces();

  }, [lat, lon, filter]);

  return (

    <div className="mt-12">

      <h2 className="text-2xl font-semibold mb-4">
        Nearby Places
      </h2>

      <div className="flex gap-3 mb-6 flex-wrap">

        {["all","restaurants","shopping","temples","parks"].map((f)=>(
          <button
            key={f}
            onClick={()=>setFilter(f)}
            className={`px-4 py-2 rounded-lg ${
              filter === f ? "bg-black text-white" : "bg-gray-200"
            }`}
          >
            {f}
          </button>
        ))}

      </div>

      <MapContainer
        center={[lat, lon]}
        zoom={13}
        style={{ height: "450px", width: "100%" }}
      >

        <TileLayer
          attribution="&copy; OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {places.map((place, index) => (

          <Marker key={index} position={[place.lat, place.lon]}>

            <Popup>

              <b>{place.tags?.name || "Location"}</b>

            </Popup>

          </Marker>

        ))}

      </MapContainer>

    </div>

  );

}

export default NearbyAttractionsMap;