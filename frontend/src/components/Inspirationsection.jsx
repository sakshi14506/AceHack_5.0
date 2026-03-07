const places = [

  {
    name: "Paris",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
  },

  {
    name: "Bali",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },

  {
    name: "Jaipur",
    image:
      "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a"
  },

  {
    name: "Maldives",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  }

];

export default function InspirationSection() {

  return (

    <div className="max-w-6xl mx-auto px-6 mt-16">

      <h2 className="text-3xl font-bold mb-8">
        Inspiration for your next trip
      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        {places.map((place, index) => (

          <div
            key={index}
            className="relative rounded-xl overflow-hidden group cursor-pointer"
          >

            <img
              src={place.image}
              className="h-60 w-full object-cover group-hover:scale-110 transition duration-300"
            />

            <div className="absolute bottom-4 left-4 text-white text-xl font-bold">

              {place.name}

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}