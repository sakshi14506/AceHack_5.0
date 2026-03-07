import attractions from "../data/attractions";

export default function NearbyAttractions({ destination }) {

  const places = attractions[destination] || [];

  return (

    <div className="grid md:grid-cols-3 gap-6">

      {places.map((place, index) => (

        <div
          key={index}
          className="bg-white rounded-xl shadow overflow-hidden hover:scale-105 transition"
        >

          <img
            src={place.image}
            className="h-48 w-full object-cover"
          />

          <div className="p-4 text-center font-semibold">
            {place.name}
          </div>

        </div>

      ))}

    </div>

  );

}