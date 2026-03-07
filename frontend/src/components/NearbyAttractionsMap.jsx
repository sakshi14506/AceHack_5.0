import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

function NearbyAttractionsMap({ lat = 26.9124, lng = 75.7873 }) {

  const [places, setPlaces] = useState([]);
  const [filter, setFilter] = useState("tourism");

  useEffect(() => {

    const fetchPlaces = async () => {

      let queryType = "";

      if (filter === "restaurants") {
        queryType = `node["amenity"="restaurant"](around:5000,${lat},${lng});`;
      }

      if (filter === "shopping") {
        queryType = `node["shop"](around:5000,${lat},${lng});`;
      }

      if (filter === "temples") {
        queryType = `node["amenity"="place_of_worship"](around:5000,${lat},${lng});`;
      }

      if (filter === "parks") {
        queryType = `node["leisure"="park"](around:5000,${lat},${lng});`;
      }

      if (filter === "tourism") {
        queryType = `node["tourism"](around:5000,${lat},${lng});`;
      }

      const query = `
      [out:json];
      (
        ${queryType}
      );
      out;
      `;

      const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;

      const res = await fetch(url);
      const data = await res.json();

      setPlaces(data.elements || []);

    };

    fetchPlaces();

  }, [filter]);

  return (

    <div>

      {/* Filters */}

      <div className="flex gap-4 mb-4">

        <button onClick={()=>setFilter("tourism")} className="bg-purple-600 px-4 py-2 rounded">
          Attractions
        </button>

        <button onClick={()=>setFilter("restaurants")} className="bg-purple-600 px-4 py-2 rounded">
          Restaurants
        </button>

        <button onClick={()=>setFilter("shopping")} className="bg-purple-600 px-4 py-2 rounded">
          Shopping
        </button>

        <button onClick={()=>setFilter("temples")} className="bg-purple-600 px-4 py-2 rounded">
          Temples
        </button>

        <button onClick={()=>setFilter("parks")} className="bg-purple-600 px-4 py-2 rounded">
          Parks
        </button>

      </div>

      {/* Map */}

      <div className="h-[500px] rounded-xl overflow-hidden">

        <MapContainer center={[lat,lng]} zoom={13} style={{height:"100%", width:"100%"}}>

          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {places.map((place,i)=>(
            <Marker key={i} position={[place.lat,place.lon]}>
              <Popup>
                {place.tags?.name || "Unnamed place"}
              </Popup>
            </Marker>
          ))}

        </MapContainer>

      </div>

    </div>

  );
}

export default NearbyAttractionsMap;