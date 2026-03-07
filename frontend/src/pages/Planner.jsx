import { useState } from "react";
import MoodSelector from "../components/MoodSelector";
import MoodSuggestions from "../components/MoodSuggestions";
import { moodDestinations } from "../data/moodDestinations";
import { useNavigate } from "react-router-dom";

function Planner() {
  const [destination, setDestination] = useState("");
  const [selectedMood, setSelectedMood] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const navigate = useNavigate();

  const generateTrip = () => {
    if (selectedMood) {
      const results = moodDestinations[selectedMood];
      setSuggestions(results);
    }
  };

  const selectDestination = (city) => {
    setDestination(city);
    navigate("/results", { state: { destination: city } });
  };

  return (
    <div className="p-10 max-w-4xl mx-auto">

      <h1 className="text-3xl font-bold mb-6">
        Plan Your Journey
      </h1>

      {/* Destination Input */}

      <input
        type="text"
        placeholder="Enter destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        className="border p-3 w-full rounded-lg"
      />

      {/* Mood Selector */}

      <MoodSelector
        selectedMood={selectedMood}
        setSelectedMood={setSelectedMood}
      />

      {/* Generate Button */}

      <button
        onClick={generateTrip}
        className="mt-6 bg-black text-white px-6 py-3 rounded-lg"
      >
        Generate Trip
      </button>

      {/* Suggestions */}

      <MoodSuggestions
        suggestions={suggestions}
        onSelect={selectDestination}
      />

    </div>
  );
}

export default Planner;