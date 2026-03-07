import { useLocation } from "react-router-dom";

import TripStory from "../components/TripStory";
import ItineraryTimeline from "../components/ItineraryTimeline";
import NearbyAttractionsMap from "../components/NearbyAttractionsMap";
import SmartRouteMap from "../components/SmartRouteMap";
import ShareCard from "../components/ShareCard";

function Results() {

  const location = useLocation();
  const data = location.state?.tripData;

  if (!data) {
    return (
      <div className="p-10 text-center text-xl">
        No trip data found. Please generate a trip first.
      </div>
    );
  }

  const { destination, mood, weather, itinerary, story } = data;

  const routeLocations = [
    { name: "Hawa Mahal", lat: 26.9239, lng: 75.8267 },
    { name: "City Palace", lat: 26.9255, lng: 75.8236 },
    { name: "Jantar Mantar", lat: 26.9248, lng: 75.8246 },
    { name: "Nahargarh Fort", lat: 26.9373, lng: 75.815 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <h1 className="text-4xl font-bold text-center mb-8">
        Your AI Travel Plan ✨
      </h1>

      {/* Summary */}
      <div className="bg-white p-6 rounded-xl shadow max-w-3xl mx-auto mb-8">

        <h2 className="text-2xl font-bold">
          Destination: {destination}
        </h2>

        <p className="text-gray-600">Mood: {mood}</p>

        {weather && (
          <p className="text-gray-600">
            Weather: {weather.temperature}°C, {weather.condition}
          </p>
        )}

      </div>

      {/* Story */}
      <div className="max-w-3xl mx-auto mb-10">
        <TripStory story={story} />
      </div>

      {/* Itinerary */}
      <div className="max-w-3xl mx-auto mb-10">

        <h2 className="text-2xl font-bold mb-4">
          Day-by-Day Itinerary
        </h2>

        <ItineraryTimeline itinerary={itinerary} />

      </div>

      {/* Nearby Map */}
      <div className="max-w-4xl mx-auto mb-10">

        <h2 className="text-2xl font-bold mb-4">
          Nearby Attractions
        </h2>

        <NearbyAttractionsMap destination={destination} />

      </div>

      {/* Route Map */}
      <div className="max-w-4xl mx-auto mb-10">

        <h2 className="text-2xl font-bold mb-4">
          Smart Travel Route
        </h2>

        <SmartRouteMap locations={routeLocations} />

      </div>

      {/* Share */}
      <div className="max-w-3xl mx-auto">

        <h2 className="text-2xl font-bold text-center mb-4">
          Share Your Trip
        </h2>

        <ShareCard
          destination={destination}
          mood={mood}
          story={story}
        />

      </div>

    </div>
  );
}

export default Results;