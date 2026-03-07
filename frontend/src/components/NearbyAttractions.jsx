const attractions = [
  {
    name: "Local Market",
    img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b"
  },
  {
    name: "Historic Temple",
    img: "https://images.unsplash.com/photo-1524492449090-1c1d5f3b0b5f"
  },
  {
    name: "Beach Sunset Point",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  }
];

export default function NearbyAttractions() {

  return (

    <div className="grid md:grid-cols-3 gap-6">

      {attractions.map((a, i) => (

        <div
          key={i}
          className="bg-white/70 backdrop-blur-lg rounded-xl shadow hover:scale-105 transition overflow-hidden"
        >

          <img
            src={a.img}
            alt={a.name}
            className="h-40 w-full object-cover"
          />

          <div className="p-4 font-semibold">
            {a.name}
          </div>

        </div>

      ))}

    </div>

  );

}