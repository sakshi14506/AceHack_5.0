import { motion } from "framer-motion";

function MoodSuggestions({ suggestions, onSelect }) {
  if (!suggestions.length) return null;

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4 text-gray-800">
        ✨ Suggested Destinations
      </h2>

      <div className="grid md:grid-cols-3 gap-4">
        {suggestions.map((place, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03, y: -3 }}
            onClick={() => onSelect(place.city)}
            className="cursor-pointer p-5 bg-white shadow-md rounded-2xl border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
          >
            <h3 className="text-lg font-bold text-gray-900">
              {place.city}
            </h3>
            <p className="text-sm text-gray-400 mt-0.5">
              {place.country}
            </p>
            <p className="text-sm mt-2 text-gray-600">
              {place.vibe}
            </p>
            <div className="mt-3 text-blue-500 text-xs font-medium">
              Plan trip →
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default MoodSuggestions;