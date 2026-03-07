import { useLocation } from "react-router-dom";
import TripStory from "../components/TripStory";
import ShareCard from "../components/ShareCard";

export default function Results() {

  const location = useLocation();

  const { destination, mood, budget } = location.state || {};

  const itinerary = [
    {
      day: "Day 1",
      title: "Arrival & Local Exploration",
      desc: "Check into your hotel, explore nearby markets and enjoy local cuisine."
    },
    {
      day: "Day 2",
      title: "Landmarks & Culture",
      desc: "Visit iconic landmarks, museums and discover hidden cafes."
    },
    {
      day: "Day 3",
      title: "Adventure & Sunset",
      desc: "Enjoy adventure activities and finish with a scenic sunset."
    }
  ];

  return (

    <div className="min-h-screen bg-gray-50">

      {/* HERO HEADER */}

      <div
        className="h-[40vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')"
        }}
      >

        <div className="bg-black/40 p-8 rounded-xl text-white text-center">

          <h1 className="text-4xl font-bold">
            Your Trip to {destination}
          </h1>

          <p className="mt-2 opacity-90">
            Mood: {mood} | Budget: {budget}
          </p>

        </div>

      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* ITINERARY */}

        <h2 className="text-3xl font-bold mb-6">
          AI Generated Itinerary
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">

          {itinerary.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
            >

              <h3 className="text-lg font-semibold mb-2">
                {item.day}
              </h3>

              <p className="font-medium mb-2">
                {item.title}
              </p>

              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

        {/* WEATHER */}

        <h2 className="text-3xl font-bold mb-6">
          Weather Forecast
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <div className="bg-white rounded-xl p-6 shadow text-center">
            ☀️
            <p className="font-semibold mt-2">Day 1</p>
            <p className="text-gray-600">28°C Sunny</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow text-center">
            ⛅
            <p className="font-semibold mt-2">Day 2</p>
            <p className="text-gray-600">26°C Cloudy</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow text-center">
            🌧
            <p className="font-semibold mt-2">Day 3</p>
            <p className="text-gray-600">24°C Light Rain</p>
          </div>

        </div>

        {/* OUTFIT SUGGESTIONS */}

        <h2 className="text-3xl font-bold mb-6">
          Outfit Suggestions
        </h2>

        <div className="bg-white rounded-xl shadow p-6 mb-12">

          <ul className="space-y-3 text-gray-700">

            <li>👕 Light cotton clothes for warm weather</li>

            <li>🧢 Hat & sunglasses for sunny afternoons</li>

            <li>👟 Comfortable walking shoes</li>

            <li>🧥 Light jacket for evenings</li>

          </ul>

        </div>

        {/* SPOTIFY PLAYLIST */}

        <h2 className="text-3xl font-bold mb-6">
          Travel Playlist
        </h2>

        <div className="bg-white rounded-xl shadow p-4 mb-12">

          <iframe
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4WYpdgoIcn6"
            width="100%"
            height="380"
            allow="encrypted-media"
            className="rounded-xl"
            title="Spotify Playlist"
          />

        </div>

        {/* AI TRAVEL STORY */}

        <TripStory destination={destination} mood={mood} />

        {/* SHARE CARD */}

        <ShareCard destination={destination} />

      </div>

    </div>

  );
}