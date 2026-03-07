import { motion } from "framer-motion";

const moods = [
  { name: "Chill", icon: "😎" },
  { name: "Adventure", icon: "🏔" },
  { name: "Romantic", icon: "❤️" },
  { name: "Party", icon: "🎉" },
  { name: "Food", icon: "🍕" }
];

function MoodSelector({ selectedMood, setSelectedMood }) {
  return (
    <div className="mt-6">
      <div className="flex flex-wrap gap-3">
        {moods.map((mood) => (
          <motion.button
            key={mood.name}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedMood(mood.name)}
            className={`px-5 py-2.5 rounded-full border text-sm font-medium transition-all duration-300 flex items-center gap-2
            ${
              selectedMood === mood.name
                ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-transparent shadow-md shadow-blue-500/25"
                : "bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:shadow-sm"
            }`}
          >
            <span>{mood.icon}</span>
            {mood.name}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default MoodSelector;