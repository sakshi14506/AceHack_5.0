import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Sparkles, Calendar, Wallet } from "lucide-react";

const destinations = [
  "Bali",
  "Paris",
  "Dubai",
  "Tokyo",
  "Goa",
  "Manali",
  "Singapore",
  "Maldives",
  "London",
  "New York",
  "Bangkok",
  "Barcelona",
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
      alert("Please enter a destination");
      return;
    }

    setLoading(true);

    setTimeout(() => {

      setLoading(false);

      navigate("/results", {
        state: {
          destination,
          mood,
          budget,
          days
        }
      });

    }, 2000);

  };

  const heroImage =
    destination !== ""
      ? `https://source.unsplash.com/1600x900/?${destination},travel`
      : "https://images.unsplash.com/photo-1501785888041-af3ef285b470";

  return (

    <div
      className="min-h-screen bg-cover bg-center relative text-white flex items-center justify-center p-8"
      style={{ backgroundImage: `url(${heroImage})` }}
    >

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-6xl w-full grid md:grid-cols-2 gap-10">

        {/* LEFT PANEL */}

        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-3xl shadow-2xl">

          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Sparkles className="text-yellow-400" />
            AI Trip Planner
          </h2>

          {/* DESTINATION */}

          <div className="relative mb-4">

            <div className="flex items-center bg-white/20 rounded-xl px-3 border border-white/30">

              <MapPin size={18} />

              <input
                value={destination}
                onChange={handleChange}
                placeholder="Search destination..."
                className="w-full p-3 bg-transparent outline-none"
              />

            </div>

            {suggestions.length > 0 && (

              <div className="absolute bg-white text-black w-full mt-2 rounded-xl shadow-lg overflow-hidden">

                {suggestions.map((item, i) => (

                  <div
                    key={i}
                    onClick={() => {
                      setDestination(item);
                      setSuggestions([]);
                    }}
                    className="p-3 cursor-pointer hover:bg-gray-100"
                  >
                    {item}
                  </div>

                ))}

              </div>

            )}

          </div>

          {/* MOOD */}

          <div className="flex items-center bg-white/20 rounded-xl px-3 border border-white/30 mb-4">

            <Sparkles size={18} />

            <select
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              className="w-full p-3 bg-transparent outline-none"
            >
              <option value="">Travel Mood</option>
              <option>Adventure</option>
              <option>Relax</option>
              <option>Romantic</option>
              <option>Spiritual</option>
            </select>

          </div>

          {/* BUDGET */}

          <div className="flex items-center bg-white/20 rounded-xl px-3 border border-white/30 mb-4">

            <Wallet size={18} />

            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full p-3 bg-transparent outline-none"
            >
              <option value="">Budget</option>
              <option>Low</option>
              <option>Medium</option>
              <option>Luxury</option>
            </select>

          </div>

          {/* DAYS */}

          <div className="flex items-center bg-white/20 rounded-xl px-3 border border-white/30 mb-6">

            <Calendar size={18} />

            <input
              value={days}
              onChange={(e) => setDays(e.target.value)}
              placeholder="Trip duration (days)"
              className="w-full p-3 bg-transparent outline-none"
            />

          </div>

          {/* BUTTON */}

          <button
            onClick={generatePlan}
            className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition"
          >
            Generate AI Plan ✨
          </button>

        </div>

        {/* RIGHT PANEL */}

        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-3xl shadow-2xl">

          <h2 className="text-2xl font-bold mb-6">
            AI Travel Result
          </h2>

          {loading ? (

            <div className="flex flex-col items-center justify-center mt-16 space-y-4">

              <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>

              <p className="text-lg">
                AI is planning your trip...
              </p>

            </div>

          ) : (

            <div className="space-y-4">

              <div className="p-4 bg-white/10 rounded-xl">
                📍 Top Attractions
              </div>

              <div className="p-4 bg-white/10 rounded-xl">
                🗓 Day-wise Itinerary
              </div>

              <div className="p-4 bg-white/10 rounded-xl">
                🌦 Weather Insights
              </div>

              <div className="p-4 bg-white/10 rounded-xl">
                👕 Outfit Suggestions
              </div>

              <div className="p-4 bg-white/10 rounded-xl">
                🎧 Travel Playlist
              </div>

            </div>

          )}

        </div>

      </div>

    </div>

  );

}

export default Planner;