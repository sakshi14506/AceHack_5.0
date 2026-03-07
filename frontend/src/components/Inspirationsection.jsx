const places = [
  {
    name: "Paris",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=600"
  },
  {
    name: "Bali",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600"
  },
  {
    name: "Jaipur",
    image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?q=80&w=600"
  },
  {
    name: "Maldives",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600"
  }
];

export default function InspirationSection() {
  return (
    <div className="grid md:grid-cols-4 gap-5">
      {places.map((place, index) => (
        <div
          key={index}
          className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <img
            src={place.image}
            alt={place.name}
            className="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            <div className="text-white text-xl font-bold drop-shadow-lg">
              {place.name}
            </div>
            <div className="text-white/70 text-xs mt-0.5">Explore →</div>
          </div>
        </div>
      ))}
    </div>
  );
}