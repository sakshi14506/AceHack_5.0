import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const destinations = [
  { name: "Bali", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600", tag: "🏖 Beach" },
  { name: "Paris", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=600", tag: "🗼 Culture" },
  { name: "Jaipur", image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?q=80&w=600", tag: "🏰 Heritage" },
  { name: "Manali", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=600", tag: "🏔 Mountains" },
  { name: "Dubai", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600", tag: "✨ Luxury" },
  { name: "Maldives", image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=600", tag: "🌊 Island" },
];

export default function Explore() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">

      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Explore Destinations 🌍
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Discover breathtaking places around the world and start planning your next adventure
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {destinations.map((place, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              onClick={() => navigate("/planner", { state: { destination: place.name } })}
              className="cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="h-56 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium">
                  {place.tag}
                </span>
              </div>

              <div className="p-5">
                <h2 className="text-xl font-bold text-gray-900">{place.name}</h2>
                <p className="text-gray-400 text-sm mt-1">
                  Discover amazing experiences
                </p>
                <div className="mt-3 text-blue-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Plan a trip →
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}