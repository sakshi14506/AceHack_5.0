import { useLocation, useNavigate } from "react-router-dom";
import DestinationMap from "../components/DestinationMap";
import ItineraryTimeline from "../components/ItineraryTimeline";
import TripStory from "../components/TripStory";
import ShareCard from "../components/ShareCard";
import SmartRouteMap from "../components/SmartRouteMap";
import WeatherCard from "../components/WeatherCard";
import NearbyAttractions from "../components/NearbyAttractions";
import AIChat from "../components/AIChat";
import { extractPlaces } from "../utils/extractPlaces";
import { generateItinerary } from "../utils/generateItinerary";
import Navbar from "../components/Navbar";

export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state || {};

  const destination = state.destination || "Unknown";
  const mood = state.mood || "Adventure";
  const budget = state.budget || "Medium";

  const itinerary = generateItinerary(mood);
  const places = extractPlaces(itinerary);

  const heroImage =
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">

      <Navbar />

      {/* HERO */}
      <div
        className="h-[45vh] bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

        <div className="relative bg-black/30 backdrop-blur-sm text-white px-10 py-8 rounded-2xl text-center border border-white/10">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Your Trip to {destination}
          </h1>
          <div className="flex items-center justify-center gap-4 mt-3">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">🎭 {mood}</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">💰 {budget}</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Section: Itinerary */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">
            🗓 AI Generated Itinerary
          </h2>
          <p className="text-gray-500 mb-8">Personalized day-by-day plan based on your mood</p>
          <ItineraryTimeline itinerary={itinerary} />
        </section>

        {/* Section: Smart Route Map */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">
            🛤 Smart Route Map
          </h2>
          <p className="text-gray-500 mb-6">Optimized path through your destinations</p>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <SmartRouteMap places={places} />
          </div>
        </section>

        {/* Section: Explore Destination */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">
            📍 Explore Destination
          </h2>
          <p className="text-gray-500 mb-6">Interactive map of {destination}</p>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <DestinationMap destination={destination} />
          </div>
        </section>

        {/* Section: Nearby Attractions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">
            🏛 Nearby Attractions
          </h2>
          <p className="text-gray-500 mb-6">Popular spots around {destination}</p>
          <NearbyAttractions />
        </section>

        {/* Section: Weather */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">
            🌤 Weather
          </h2>
          <p className="text-gray-500 mb-6">Current weather conditions</p>
          <WeatherCard destination={destination} />
        </section>

        {/* Section: Travel Playlist */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">
            🎵 Travel Playlist
          </h2>
          <p className="text-gray-500 mb-6">Music for your journey</p>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4WYpdgoIcn6"
              width="100%"
              height="380"
              className="rounded-2xl"
              allow="encrypted-media"
            />
          </div>
        </section>

        {/* Section: Trip Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">
            📖 AI Trip Story
          </h2>
          <p className="text-gray-500 mb-6">A poetic narrative about your trip</p>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <TripStory destination={destination} mood={mood} />
          </div>
        </section>

        {/* Section: Share */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">
            🔗 Share Your Trip
          </h2>
          <p className="text-gray-500 mb-6">Download and share your plan</p>
          <ShareCard destination={destination} />
        </section>

        {/* Section: AI Chat */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">
            💬 AI Travel Assistant
          </h2>
          <p className="text-gray-500 mb-6">Ask anything about your trip</p>
          <AIChat />
        </section>

      </div>
    </div>
  );
}