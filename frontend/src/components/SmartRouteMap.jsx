import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

const SmartRouteMap = ({ locations }) => {
  const center = locations.length
    ? [locations[0].lat, locations[0].lng]
    : [28.6139, 77.2090];

  useEffect(() => {
    const map = L.map("route-map");

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap",
    }).addTo(map);

    const waypoints = locations.map((loc) =>
      L.latLng(loc.lat, loc.lng)
    );

    L.Routing.control({
      waypoints: waypoints,
      routeWhileDragging: false,
      addWaypoints: false,
    }).addTo(map);

    map.setView(center, 10);

    return () => {
      map.remove();
    };
  }, [locations]);

  return (
    <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-xl">
      <div id="route-map" className="w-full h-full"></div>
    </div>
  );
};

export default SmartRouteMap;