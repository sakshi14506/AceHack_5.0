import { MapContainer, TileLayer, Polyline } from "react-leaflet";

const SmartRouteMap = ({ places }) => {

  const positions = places.map(p => [p.lat, p.lon]);

  return (

    <MapContainer
      center={positions[0]}
      zoom={13}
      style={{ height: "400px" }}
    >

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Polyline positions={positions} />

    </MapContainer>

  );

};

export default SmartRouteMap;