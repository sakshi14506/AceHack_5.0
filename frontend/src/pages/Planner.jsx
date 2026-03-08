import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import ParticlesBackground from "../components/ParticlesBackground";

const destinations = [
  "Bali", "Paris", "Dubai", "Tokyo", "Goa",
  "Manali", "Singapore", "Maldives", "London", "New York"
];

function Planner() {
  const navigate = useNavigate();

  const [destination, setDestination] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mood, setMood] = useState("");
  const [budget, setBudget] = useState("");
  const [days, setDays] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setDestination(value);

    if (value === "") {
      setSuggestions([]);
      return;
    }

    const filtered = destinations.filter((d) =>
      d.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filtered);
  };

  const generatePlan = () => {
    if (!destination) {
      alert("Enter destination");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/results", {
        state: { destination, mood, budget, days }
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 text-gray-900 relative p-6 overflow-hidden">

      <ParticlesBackground />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/70 backdrop-blur-xl border border-white/60 p-10 rounded-3xl max-w-xl w-full shadow-xl relative z-10"
      >

        <h1 className="text-3xl font-bold mb-2 text-gray-800">
          <Typewriter
            words={[
              "Plan your dream trip ✈️",
              "Discover hidden gems 🏝",
              "AI builds your itinerary 🤖"
            ]}
            loop
            cursor
          />
        </h1>

        <p className="text-gray-600 text-sm mb-8">
          Fill in details and let AI craft your perfect trip
        </p>

        {/* DESTINATION */}
        <div className="relative mb-4">
          <div className="flex items-center bg-white border border-gray-200 rounded-xl px-4 focus-within:border-purple-400 transition-all duration-300">
            <MapPin size={18} className="text-gray-400" />
            <input
              value={destination}
              onChange={handleChange}
              placeholder="Where do you want to go?"
              className="w-full p-3 bg-transparent outline-none placeholder-gray-400"
            />
          </div>

          {suggestions.length > 0 && (
            <div className="absolute bg-white w-full rounded-xl mt-2 shadow-lg overflow-hidden z-20">
              {suggestions.map((item, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setDestination(item);
                    setSuggestions([]);
                  }}
                  className="p-3 hover:bg-purple-50 cursor-pointer transition text-sm font-medium"
                >
                  📍 {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* MOOD */}
        <select
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          className="w-full p-3 mb-4 rounded-xl bg-white border border-gray-200 focus:border-purple-400 outline-none"
        >
          <option value="">Select Mood</option>
          <option>Adventure</option>
          <option>Relax</option>
          <option>Romantic</option>
          <option>Spiritual</option>
        </select>

        {/* BUDGET */}
        <select
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="w-full p-3 mb-4 rounded-xl bg-white border border-gray-200 focus:border-purple-400 outline-none"
        >
          <option value="">Select Budget</option>
          <option>Low</option>
          <option>Medium</option>
          <option>Luxury</option>
        </select>

        {/* DAYS */}
        <input
          value={days}
          onChange={(e) => setDays(e.target.value)}
          placeholder="Number of days"
          type="number"
          className="w-full p-3 mb-6 rounded-xl bg-white border border-gray-200 placeholder-gray-400 focus:border-purple-400 outline-none"
        />

        <button
          onClick={generatePlan}
          disabled={loading}
          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:scale-[1.02] hover:shadow-lg transition-all duration-300 font-semibold disabled:opacity-60"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              AI is planning your trip...
            </span>
          ) : (
            "Generate AI Plan ✨"
          )}
        </button>

      </motion.div>
    </div>
  );
}

export default Planner;