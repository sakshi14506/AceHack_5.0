import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Planner() {

  const [destination, setDestination] = useState("");
  const [mood, setMood] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const generateTrip = async () => {

    if (!destination || !mood) {
      alert("Please enter destination and mood");
      return;
    }

    try {

      setLoading(true);

      const res = await fetch("http://localhost:5001/api/ai-trip", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          destination,
          mood
        })
      });

      const result = await res.json();

      navigate("/results", {
        state: { tripData: result }
      });

    } catch (error) {

      console.error(error);
      alert("Error generating trip");

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-[400px]">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Plan Your Trip ✈️
        </h1>

        <input
          type="text"
          placeholder="Enter destination"
          className="w-full border p-3 rounded-lg mb-4"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />

        <select
          className="w-full border p-3 rounded-lg mb-4"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
        >
          <option value="">Select mood</option>
          <option value="Adventure">Adventure</option>
          <option value="Relaxed">Relaxed</option>
          <option value="Romantic">Romantic</option>
          <option value="Spiritual">Spiritual</option>
          <option value="Party">Party</option>
        </select>

        <button
          onClick={generateTrip}
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
        >
          {loading ? "Generating..." : "Generate AI Trip"}
        </button>

      </div>

    </div>
  );
}

export default Planner;