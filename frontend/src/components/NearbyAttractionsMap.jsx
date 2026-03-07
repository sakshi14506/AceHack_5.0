import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";

function NearbyAttractionsMap({ lat, lon }) {

  const [places, setPlaces] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {

    const fetchPlaces = async () => {

      const query = `
      [out:json];
      node(around:5000,${lat},${lon});
      out;
      `;

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

          <Marker
            key={index}
            position={[place.lat, place.lon]}
          >

            <Popup>
              {place.tags?.name || "Location"}
            </Popup>

          </Marker>

        ))}

      </MapContainer>

    </div>

  );

}

export default NearbyAttractionsMap;