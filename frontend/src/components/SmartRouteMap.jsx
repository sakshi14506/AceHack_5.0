import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

export default function SmartRouteMap({ places }) {

  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {

    if (!places || places.length === 0) return;

    const fetchCoordinates = async () => {

      const coords = [];

      for (let place of places) {

        try {

          const res = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${place}`
          );

          const data = await res.json();

          if (data.length > 0) {

            coords.push({
              name: place,
              lat: parseFloat(data[0].lat),
              lon: parseFloat(data[0].lon)
            });

          }

        } catch (err) {
          console.log(err);
        }

      }

      setCoordinates(coords);

    };

    fetchCoordinates();

  }, [places]);

  if (coordinates.length === 0)
    return <p className="text-gray-500">Loading route map...</p>;

  const positions = coordinates.map((c) => [c.lat, c.lon]);

  return (

    <div className="w-full h-[450px] rounded-xl overflow-hidden shadow">

      <MapContainer
        center={positions[0]}
        zoom={12}
        className="h-full w-full"
      >

        <TileLayer
          attribution="© OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {coordinates.map((place, index) => (

          <Marker
            key={index}
            position={[place.lat, place.lon]}
          >

            <Popup>{place.name}</Popup>

          </Marker>

        ))}

        <Polyline
          positions={positions}
          color="blue"
          weight={5}
        />

      </MapContainer>

    </div>

  );

}