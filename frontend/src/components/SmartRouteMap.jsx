import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";

const route = [
  [28.6139, 77.2090],
  [28.6129, 77.2295],
  [28.6100, 77.2300],
  [28.6110, 77.2150]
];

function SmartRouteMap() {

  return (

    <MapContainer
      center={[28.6139, 77.2090]}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {route.map((pos, i) => (
        <Marker key={i} position={pos} />
      ))}

      <Polyline positions={route} color="blue" />

    </MapContainer>

  );
}

export default SmartRouteMap;