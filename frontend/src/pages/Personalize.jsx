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

  const moods = [
    { label: "Adventure", icon: "🏔" },
    { label: "Relax", icon: "🌴" },
    { label: "Romantic", icon: "❤️" },
    { label: "Spiritual", icon: "🛕" },
  ];

  const interestsList = [
    "🍕 Food",
    "🥾 Trekking",
    "🎶 Nightlife",
    "📸 Photography",
    "🛍 Shopping",
    "🏖 Beaches",
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
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative p-6"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-indigo-900/50"></div>

      {/* card */}
      <div className="relative backdrop-blur-2xl bg-white/8 border border-white/15
      shadow-2xl p-10 rounded-3xl w-[540px] text-white animate-fade">

        {/* Step Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-xs text-white/50 mb-2 uppercase tracking-wider">
            <span>Step 1</span>
            <span>Step 3</span>
          </div>
          <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-blue-400 to-indigo-400 h-1.5 rounded-full w-1/3 transition-all duration-500"></div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-2 text-center">
          Personalize Your Journey ✈️
        </h2>

        <p className="text-center text-white/50 mb-8 text-sm">
          Tell Safarnama your preferences and we'll craft your perfect trip
        </p>

        {/* BASIC INFO */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <input
            placeholder="Name"
            className="p-3 rounded-xl bg-white/10 border border-white/15
            focus:ring-2 focus:ring-indigo-400 focus:bg-white/15 outline-none placeholder-white/40 transition-all duration-300"
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
          <input
            placeholder="Age"
            type="number"
            className="p-3 rounded-xl bg-white/10 border border-white/15
            focus:ring-2 focus:ring-indigo-400 focus:bg-white/15 outline-none placeholder-white/40 transition-all duration-300"
            onChange={(e) =>
              setFormData({ ...formData, age: e.target.value })
            }
          />
          <input
            placeholder="City"
            className="p-3 rounded-xl bg-white/10 border border-white/15 col-span-2
            focus:ring-2 focus:ring-indigo-400 focus:bg-white/15 outline-none placeholder-white/40 transition-all duration-300"
            onChange={(e) =>
              setFormData({ ...formData, city: e.target.value })
            }
          />
        </div>

        {/* GENDER */}
        <select
          className="w-full p-3 mb-5 rounded-xl bg-white/10 border border-white/15
          focus:ring-2 focus:ring-indigo-400 outline-none text-white/80 transition-all duration-300"
          onChange={(e) =>
            setFormData({ ...formData, gender: e.target.value })
          }
        >
          <option value="" className="text-gray-900">Select Gender</option>
          <option className="text-gray-900">Male</option>
          <option className="text-gray-900">Female</option>
          <option className="text-gray-900">Other</option>
        </select>

        {/* MOOD */}
        <h3 className="mb-3 font-medium text-sm uppercase tracking-wider text-white/60">Your Travel Mood</h3>

        <div className="grid grid-cols-2 gap-3 mb-5">
          {moods.map((mood) => (
            <button
              key={mood.label}
              onClick={() =>
                setFormData({ ...formData, mood: mood.label })
              }
              className={`p-3.5 rounded-xl border transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium
              ${
                formData.mood === mood.label
                  ? "bg-white text-black scale-105 shadow-lg shadow-white/20 border-transparent"
                  : "border-white/15 hover:bg-white/15 hover:border-white/30"
              }`}
            >
              <span className="text-lg">{mood.icon}</span>
              <span>{mood.label}</span>
            </button>
          ))}
        </div>

        {/* INTERESTS */}
        <h3 className="mb-3 font-medium text-sm uppercase tracking-wider text-white/60">Your Interests</h3>

        <div className="flex flex-wrap gap-2 mb-5">
          {interestsList.map((interest) => (
            <button
              key={interest}
              onClick={() => toggleInterest(interest)}
              className={`px-4 py-2 rounded-full border text-sm transition-all duration-300
              ${
                formData.interests.includes(interest)
                  ? "bg-white text-black shadow-md border-transparent"
                  : "border-white/20 hover:bg-white/15"
              }`}
            >
              {interest}
            </button>
          ))}
        </div>

        {/* BUDGET */}
        <select
          className="w-full p-3 mb-3 rounded-xl bg-white/10 border border-white/15
          focus:ring-2 focus:ring-indigo-400 outline-none text-white/80 transition-all duration-300"
          onChange={(e) =>
            setFormData({ ...formData, budget: e.target.value })
          }
        >
          <option value="" className="text-gray-900">Budget</option>
          <option className="text-gray-900">Low</option>
          <option className="text-gray-900">Medium</option>
          <option className="text-gray-900">Luxury</option>
        </select>

        {/* WEATHER */}
        <select
          className="w-full p-3 mb-8 rounded-xl bg-white/10 border border-white/15
          focus:ring-2 focus:ring-indigo-400 outline-none text-white/80 transition-all duration-300"
          onChange={(e) =>
            setFormData({ ...formData, weather: e.target.value })
          }
        >
          <option value="" className="text-gray-900">Preferred Weather</option>
          <option className="text-gray-900">Cold ❄️</option>
          <option className="text-gray-900">Warm ☀️</option>
          <option className="text-gray-900">Snow ⛄</option>
          <option className="text-gray-900">Beach 🌊</option>
        </select>

        {/* BUTTON */}
        <button
          onClick={() => navigate("/home")}
          className="w-full py-3.5 rounded-xl font-semibold text-black
          bg-gradient-to-r from-white to-gray-100
          hover:scale-[1.02] hover:shadow-xl hover:shadow-white/20 transition-all duration-300"
        >
          Continue →
        </button>

      </div>
    </div>
  );
}

export default Personalize;