import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const NearbyAttractionsMap = ({ places }) => {

  const center = [places[0]?.lat || 26.9124, places[0]?.lon || 75.7873];

  return (

    <MapContainer
      center={center}
      zoom={13}
      style={{ height: "400px" }}
    >

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {places.map((place, index) => (

        <Marker key={index} position={[place.lat, place.lon]}>

          <Popup>{place.name}</Popup>

        </Marker>

      ))}

    </MapContainer>

  );

};

export default NearbyAttractionsMap;