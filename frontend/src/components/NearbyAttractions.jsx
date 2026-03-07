const attractions = [
  {
    name: "Local Market",
    img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=600",
    tag: "🛍 Shopping"
  },
  {
    name: "Historic Temple",
    img: "https://images.unsplash.com/photo-1524492449090-1c1d5f3b0b5f?q=80&w=600",
    tag: "🛕 Heritage"
  },
  {
    name: "Beach Sunset Point",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600",
    tag: "🌅 Nature"
  }
];

export default function NearbyAttractions() {
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {attractions.map((a, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
        >
          <div className="relative overflow-hidden">
            <img
              src={a.img}
              alt={a.name}
              className="h-44 w-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <span className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2.5 py-1 rounded-full text-xs font-medium">
              {a.tag}
            </span>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-gray-900">{a.name}</h3>
            <p className="text-gray-400 text-xs mt-1">Must visit attraction</p>
          </div>
        </div>
      ))}
    </div>
  );
}