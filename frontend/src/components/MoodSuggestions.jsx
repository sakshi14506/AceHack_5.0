import { motion } from "framer-motion";

function MoodSuggestions({ suggestions, onSelect }) {
  if (!suggestions.length) return null;

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">
        Suggested Destinations
      </h2>

      <div className="grid md:grid-cols-3 gap-4">
        {suggestions.map((place, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            onClick={() => onSelect(place.city)}
            className="cursor-pointer p-4 bg-white shadow rounded-xl"
          >
            <h3 className="text-lg font-bold">
              {place.city}
            </h3>

            <p className="text-sm text-gray-500">
              {place.country}
            </p>

            <p className="text-sm mt-2">
              {place.vibe}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default MoodSuggestions;