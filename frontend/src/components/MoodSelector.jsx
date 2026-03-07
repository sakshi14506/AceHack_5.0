import { motion } from "framer-motion";

const moods = ["Chill", "Adventure", "Romantic", "Party", "Food"];

function MoodSelector({ selectedMood, setSelectedMood }) {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-3">Select Your Mood</h2>

      <div className="flex flex-wrap gap-3">
        {moods.map((mood) => (
          <motion.button
            key={mood}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedMood(mood)}
            className={`px-4 py-2 rounded-full border transition
            ${
              selectedMood === mood
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            {mood}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default MoodSelector;