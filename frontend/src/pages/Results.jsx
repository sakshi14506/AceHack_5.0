import { useLocation } from "react-router-dom";

import NearbyAIMap from "../components/NearbyAIMap";
import SmartRouteMap from "../components/SmartRouteMap";

function Results() {

  const location = useLocation();
  const { destination, mood, budget } = location.state || {};

  const itinerary = [
    {
      day: "Day 1",
      title: "Arrival & Exploration",
      description: "Explore markets and cafes."
    },
    {
      day: "Day 2",
      title: "Adventure",
      description: "Visit attractions and landmarks."
    },
    {
      day: "Day 3",
      title: "Hidden Gems",
      description: "Discover peaceful spots and shopping."
    }
  ];

  return (

    <div className="max-w-6xl mx-auto p-10">

      <h1 className="text-4xl font-bold mb-4">
        Trip to {destination}
      </h1>

      <p className="text-gray-600 mb-10">
        Mood: {mood} | Budget: {budget}
      </p>

      {/* SMART ROUTE */}

      <h2 className="text-2xl font-bold mb-4">
        Smart Travel Route
      </h2>

      <SmartRouteMap />

      {/* ITINERARY */}

      <h2 className="text-2xl font-bold mt-12 mb-4">
        Itinerary
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {itinerary.map((item, i) => (

          <div key={i} className="bg-white shadow rounded-xl p-6">

            <h3 className="font-semibold mb-2">
              {item.day}
            </h3>

            <p>{item.title}</p>

            <p className="text-gray-500 text-sm">
              {item.description}
            </p>

          </div>

        ))}

      </div>

      {/* NEARBY MAP */}

      <h2 className="text-2xl font-bold mt-12 mb-4">
        Nearby Places
      </h2>

      <NearbyAIMap />

    </div>
  );
}

export default Results;