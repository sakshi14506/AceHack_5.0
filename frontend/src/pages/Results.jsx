import { useLocation } from "react-router-dom";
import DestinationMap from "../components/DestinationMap";
import ItineraryTimeline from "../components/ItineraryTimeline";
import TripStory from "../components/TripStory";
import ShareCard from "../components/ShareCard";
import SmartRouteMap from "../components/SmartRouteMap";
import WeatherCard from "../components/WeatherCard";
import { extractPlaces } from "../utils/extractPlaces";
import { generateItinerary } from "../utils/generateItinerary";

export default function Results() {

  const location = useLocation();
  const state = location.state || {};

  const destination = state.destination || "Unknown";
  const mood = state.mood || "Adventure";
  const budget = state.budget || "Medium";

  const itinerary = generateItinerary(mood);

  const places = extractPlaces(itinerary);

  const heroImage =
    `https://source.unsplash.com/1600x900/?${destination},travel`;

  return (

    <div className="min-h-screen bg-gray-50">

      {/* HERO SECTION */}

      <div
        className="h-[45vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >

        <div className="bg-black/50 text-white px-10 py-6 rounded-xl">

          <h1 className="text-4xl font-bold">
            Your Trip to {destination}
          </h1>

          <p className="mt-2">
            Mood: {mood} | Budget: {budget}
          </p>

        </div>

      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* ITINERARY */}

        <h2 className="text-3xl font-bold mb-8">
          AI Generated Itinerary
        </h2>

        <ItineraryTimeline itinerary={itinerary} />

        {/* ROUTE MAP */}

        <h2 className="text-3xl font-bold mt-16 mb-6">
          Smart Route Map 🗺️
        </h2>

        <SmartRouteMap places={places} />

        {/* DESTINATION MAP */}

        <h2 className="text-3xl font-bold mt-16 mb-6">
          Explore Destination
        </h2>

        <DestinationMap destination={destination} />

        {/* WEATHER */}

        <h2 className="text-3xl font-bold mt-16 mb-6">
          Weather Forecast
        </h2>

        <WeatherCard destination={destination} />

        {/* OUTFIT SUGGESTIONS */}

        <h2 className="text-3xl font-bold mt-16 mb-6">
          Outfit Suggestions
        </h2>

        <div className="bg-white p-6 rounded-xl shadow">

          <ul className="space-y-2">

            <li>👕 Light breathable clothes</li>
            <li>🧢 Hat & sunglasses</li>
            <li>👟 Comfortable walking shoes</li>
            <li>🧴 Sunscreen & travel essentials</li>

          </ul>

        </div>

        {/* PLAYLIST */}

        <h2 className="text-3xl font-bold mt-16 mb-6">
          Travel Playlist
        </h2>

        <iframe
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4WYpdgoIcn6"
          width="100%"
          height="380"
          className="rounded-xl"
        />

        {/* TRIP STORY */}

        <div className="mt-16">

          <TripStory
            destination={destination}
            mood={mood}
          />

        </div>

        {/* SHARE CARD */}

        <div className="mt-10">

          <ShareCard destination={destination} />

        </div>

      </div>

    </div>

  );
}