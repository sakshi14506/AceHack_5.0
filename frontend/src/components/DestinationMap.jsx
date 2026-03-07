import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";

export default function DestinationMap({ destination }) {

  const [position, setPosition] = useState([28.6139, 77.2090]);

  useEffect(() => {

    if (!destination) return;

    const fetchLocation = async () => {

      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${destination}`
      );

      const data = await res.json();

      if (data.length > 0) {
        setPosition([data[0].lat, data[0].lon]);
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