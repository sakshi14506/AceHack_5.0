import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import L from "leaflet";

export default function DestinationMap({ destination }) {

  const [position, setPosition] = useState([28.6139, 77.2090]); // default Delhi

  useEffect(() => {

    if (!destination) return;

    const fetchLocation = async () => {

      try {

        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${destination}`
        );

        const data = await response.json();

        if (data && data.length > 0) {

          const lat = parseFloat(data[0].lat);
          const lon = parseFloat(data[0].lon);

          setPosition([lat, lon]);

        }

      } catch (error) {
        console.error("Error fetching location:", error);
      }

    };

    fetchLocation();

  }, [destination]);

  return (

    <MapContainer
      center={position}
      zoom={10}
      style={{ height: "400px", width: "100%" }}
      className="rounded-xl shadow"
    >

      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position}>
        <Popup>{destination}</Popup>
      </Marker>

    </MapContainer>

  );
}