import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PlannerSearch() {

  const navigate = useNavigate();

  const [destination, setDestination] = useState("");
  const [mood, setMood] = useState("");
  const [budget, setBudget] = useState("");

  const handleSearch = () => {

    navigate("/results", {
      state: { destination, mood, budget }
    });

  };

  return (

    <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8">

      <div className="grid md:grid-cols-4 gap-6">

        {/* Destination */}

        <div>

          <label className="text-sm text-gray-500">
            Destination
          </label>

          <input
            type="text"
            placeholder="Where to?"
            className="w-full border-b p-2 outline-none"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />

        </div>

        {/* Mood */}

        <div>

          <label className="text-sm text-gray-500">
            Travel Mood
          </label>

          <select
            className="w-full border-b p-2 outline-none"
            onChange={(e) => setMood(e.target.value)}
          >

            <option>Adventure</option>
            <option>Relax</option>
            <option>Romantic</option>
            <option>Party</option>

          </select>

        </div>

        {/* Budget */}

        <div>

          <label className="text-sm text-gray-500">
            Budget
          </label>

          <select
            className="w-full border-b p-2 outline-none"
            onChange={(e) => setBudget(e.target.value)}
          >

            <option>Budget</option>
            <option>Standard</option>
            <option>Luxury</option>

          </select>

        </div>

        {/* Button */}

        <div className="flex items-end">

          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white w-full py-3 rounded-lg hover:bg-blue-700 transition"
          >

            Generate Trip

          </button>

        </div>

      </div>

    </div>

  );
}