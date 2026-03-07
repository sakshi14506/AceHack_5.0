import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function DestinationMap({ destination }) {

  const position = [28.6139, 77.2090];

  return (

    <MapContainer
      center={position}
      zoom={6}
      className="h-80 w-full rounded-xl"
    >

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position}>

        <Popup>
          {destination}
        </Popup>

      </Marker>

    </MapContainer>

  );
}