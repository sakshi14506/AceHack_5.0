import { useLocation } from "react-router-dom";
import DestinationMap from "../components/DestinationMap";
import ItineraryTimeline from "../components/ItineraryTimeline";
import TripStory from "../components/TripStory";
import ShareCard from "../components/ShareCard";
import SmartRouteMap from "../components/SmartRouteMap";
import { extractPlaces } from "../utils/extractPlaces";

export default function Results() {

  const location = useLocation();
  const { destination, mood, budget } = location.state || {};

  const itinerary = [
    {
      day: "Day 1",
      title: "Arrival & Exploration",
      desc: "Check into hotel and explore local markets."
    },
    {
      day: "Day 2",
      title: "Landmarks & Culture",
      desc: "Visit famous attractions and cafes."
    },
    {
      day: "Day 3",
      title: "Adventure & Sunset",
      desc: "Enjoy adventure activities and scenic views."
    }
  ];

  const places = extractPlaces(itinerary);

  return (

    <div className="min-h-screen bg-gray-50">

      {/* HERO SECTION */}

      <div
        className="h-[40vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')"
        }}
      >

        <div className="bg-black/40 text-white px-8 py-6 rounded-xl">

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

        {/* SMART ROUTE MAP */}

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

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow text-center">
            ☀️ 28°C Sunny
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            ⛅ 26°C Cloudy
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            🌧 24°C Rain
          </div>

        </div>

        {/* OUTFIT */}

        <h2 className="text-3xl font-bold mt-16 mb-6">
          Outfit Suggestions
        </h2>

        <div className="bg-white p-6 rounded-xl shadow">

          <ul className="space-y-2">

            <li>👕 Light cotton clothes</li>
            <li>🧢 Hat & sunglasses</li>
            <li>👟 Comfortable walking shoes</li>

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

        {/* TRAVEL STORY */}

        <TripStory destination={destination} mood={mood} />

        {/* SHARE CARD */}

        <ShareCard destination={destination} />

      </div>

    </div>
  );
}