export default function NearbyAIMap({ destination }) {

  const places = [
    { name: "Famous Restaurant", type: "Restaurant" },
    { name: "City Temple", type: "Temple" },
    { name: "Local Shopping Market", type: "Shopping" },
    { name: "Historic Monument", type: "Attraction" }
  ];

  return (
    <div style={{
      marginTop: "30px",
      padding: "20px",
      background: "#111",
      color: "white",
      borderRadius: "12px"
    }}>
      <h2>Nearby Attractions in {destination}</h2>

      {places.map((place, index) => (
        <div key={index} style={{
          padding: "10px",
          borderBottom: "1px solid #333"
        }}>
          <strong>{place.name}</strong> — {place.type}
        </div>
      ))}

    </div>
  );
}