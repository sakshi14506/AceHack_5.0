import outfits from "../data/outfits";

export default function OutfitSuggestions() {

  const suggestions = outfits.sunny;

  return (

    <div className="grid md:grid-cols-3 gap-6">

      {suggestions.map((item, index) => (

        <div
          key={index}
          className="bg-white rounded-xl shadow overflow-hidden hover:scale-105 transition"
        >

          <img
            src={item.image}
            className="h-48 w-full object-cover"
          />

          <div className="p-4 text-center font-semibold">
            {item.name}
          </div>

        </div>

      ))}

    </div>

  );
}