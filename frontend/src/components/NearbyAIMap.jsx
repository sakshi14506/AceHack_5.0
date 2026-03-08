export default function NearbyAIMap({ destination }) {

  const places = [
    {
      name: "Baga Beach",
      type: "Beach",
      rating: "4.6",
      distance: "2.1 km",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      icon: "🏖️"
    },
    {
      name: "Anjuna Flea Market",
      type: "Shopping",
      rating: "4.4",
      distance: "3.5 km",
      img: "https://images.unsplash.com/photo-1555529771-122e5d9f2341",
      icon: "🛍️"
    },
    {
      name: "Fort Aguada",
      type: "Historic",
      rating: "4.5",
      distance: "4.2 km",
      img: "https://images.unsplash.com/photo-1585587929070-9a1c5cbb4f9f",
      icon: "🏛️"
    },
    {
      name: "Beachside Cafe",
      type: "Restaurant",
      rating: "4.7",
      distance: "1.8 km",
      img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
      icon: "🍽️"
    }
  ];

  return (

    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl p-6">

      <h3 className="text-xl font-semibold text-white mb-6">
        📍 Nearby Attractions in {destination}
      </h3>

      <div className="grid md:grid-cols-2 gap-5">

        {places.map((place, i) => (

          <div
            key={i}
            className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:scale-[1.02] transition cursor-pointer"
          >

            <img
              src={place.img}
              alt={place.name}
              className="h-32 w-full object-cover"
            />

            <div className="p-4">

              <h4 className="text-white font-semibold flex items-center gap-2">
                {place.icon} {place.name}
              </h4>

              <p className="text-sm text-white/70 mt-1">
                {place.type}
              </p>

              <div className="flex justify-between mt-3 text-sm text-white/70">

                <span>⭐ {place.rating}</span>

                <span>📍 {place.distance}</span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}