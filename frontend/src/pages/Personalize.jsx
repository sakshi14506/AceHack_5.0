import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Personalize() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    city: "",
    gender: "",
    mood: "",
    budget: "",
    weather: "",
    interests: [],
  });

  const moods = ["🏔 Adventure", "🌴 Relax", "❤️ Romantic", "🛕 Spiritual"];
  const interestsList = [
    "Food",
    "Trekking",
    "Nightlife",
    "Photography",
    "Shopping",
    "Beaches",
  ];

  const toggleInterest = (interest) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const bg =
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2070&auto=format&fit=crop";

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center text-white relative p-6"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 p-10 rounded-3xl w-[500px]">

        <h2 className="text-3xl font-semibold mb-8 text-center">
          Tell Us About You ✈️
        </h2>

        {/* BASIC INFO */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <input
            placeholder="Name"
            className="p-3 rounded-lg bg-white/20 border border-white/30"
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />

          <input
            placeholder="Age"
            className="p-3 rounded-lg bg-white/20 border border-white/30"
            onChange={(e) =>
              setFormData({ ...formData, age: e.target.value })
            }
          />

          <input
            placeholder="City"
            className="p-3 rounded-lg bg-white/20 border border-white/30 col-span-2"
            onChange={(e) =>
              setFormData({ ...formData, city: e.target.value })
            }
          />
        </div>

        {/* GENDER */}
        <select
          className="w-full p-3 mb-6 rounded-lg bg-white/20 border border-white/30"
          onChange={(e) =>
            setFormData({ ...formData, gender: e.target.value })
          }
        >
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        {/* MOOD */}
        <h3 className="mb-3 font-medium">Your Travel Mood</h3>

        <div className="grid grid-cols-2 gap-3 mb-6">
          {moods.map((mood) => (
            <button
              key={mood}
              onClick={() =>
                setFormData({ ...formData, mood })
              }
              className={`p-3 rounded-lg border ${
                formData.mood === mood
                  ? "bg-white text-black"
                  : "border-white/30"
              }`}
            >
              {mood}
            </button>
          ))}
        </div>

        {/* INTERESTS */}
        <h3 className="mb-3 font-medium">Your Interests</h3>

        <div className="flex flex-wrap gap-3 mb-6">
          {interestsList.map((interest) => (
            <button
              key={interest}
              onClick={() => toggleInterest(interest)}
              className={`px-4 py-2 rounded-full border ${
                formData.interests.includes(interest)
                  ? "bg-white text-black"
                  : "border-white/30"
              }`}
            >
              {interest}
            </button>
          ))}
        </div>

        {/* BUDGET */}
        <select
          className="w-full p-3 mb-4 rounded-lg bg-white/20 border border-white/30"
          onChange={(e) =>
            setFormData({ ...formData, budget: e.target.value })
          }
        >
          <option value="">Budget</option>
          <option>Low</option>
          <option>Medium</option>
          <option>Luxury</option>
        </select>

        {/* WEATHER */}
        <select
          className="w-full p-3 mb-8 rounded-lg bg-white/20 border border-white/30"
          onChange={(e) =>
            setFormData({ ...formData, weather: e.target.value })
          }
        >
          <option value="">Preferred Weather</option>
          <option>Cold ❄️</option>
          <option>Warm ☀️</option>
          <option>Snow ⛄</option>
          <option>Beach 🌊</option>
        </select>

        {/* CONTINUE */}
        <button
          onClick={() => navigate("/home")}
          className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default Personalize;