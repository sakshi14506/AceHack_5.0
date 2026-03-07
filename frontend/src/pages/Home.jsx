import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Navbar from "../components/Navbar";
import InspirationSection from "../components/Inspirationsection";
import MoodSelector from "../components/MoodSelector";
import MoodSuggestions from "../components/MoodSuggestions";

import TopDestinations from "../components/TopDestinations";
import TrendingPosts from "../components/TrendingPosts";
import TravelPackages from "../components/TravelPackages";
import AIChatBubble from "../components/AIChatBubble";
import WorldMapBackground from "../components/WorldMapBackground";

import { moodDestinations } from "../data/moodDestinations";

function Home() {

  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState("");

  const suggestions = selectedMood
    ? moodDestinations[selectedMood] || []
    : [];

  const handleDestinationSelect = (city) => {
    navigate("/planner", { state: { destination: city } });
  };

  return (

    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white relative">

      <Navbar />

      {/* WORLD MAP BACKGROUND */}

      <WorldMapBackground />

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">

        {/* HERO SECTION */}

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl rounded-3xl p-12 text-center mb-16">

          <h1 className="text-5xl font-bold mb-4">
            Safarnama ✈️
          </h1>

          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            Your AI-powered travel companion. Discover destinations,
            generate itineraries, explore hidden gems and plan
            unforgettable journeys.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">

            <button
              onClick={() => navigate("/planner")}
              className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:scale-105 transition shadow-md"
            >
              Plan a Trip
            </button>

            <button
              onClick={() => navigate("/ai-planner")}
              className="bg-black text-white px-6 py-3 rounded-xl hover:scale-105 transition shadow-md"
            >
              Plan with AI 🤖
            </button>

            <button
              onClick={() => navigate("/explore")}
              className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:scale-105 transition shadow-md"
            >
              Explore Destinations 🌍
            </button>

          </div>

        </div>

        {/* MOOD SELECTOR */}

        <div className="mb-16">

          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            How are you feeling today?
          </h2>

          <MoodSelector
            selectedMood={selectedMood}
            setSelectedMood={setSelectedMood}
          />

          <MoodSuggestions
            suggestions={suggestions}
            onSelect={handleDestinationSelect}
          />

        </div>

        {/* TOP DESTINATIONS */}

        <TopDestinations />

        {/* TRENDING TRAVEL POSTS */}

        <TrendingPosts />

        {/* TRAVEL PACKAGES */}

        <TravelPackages />

        {/* INSPIRATION */}

        <div className="mt-16">

          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Travel Inspiration
          </h2>

          <InspirationSection />

        </div>

      </div>

      {/* FLOATING PLAN BUTTON */}

      <button
        onClick={() => navigate("/planner")}
        className="fixed bottom-6 left-6 bg-black text-white px-6 py-3 rounded-full shadow-xl hover:scale-105 transition"
      >
        Plan My Trip ✈️
      </button>

      {/* AI CHAT BUBBLE */}

      <AIChatBubble />

    </div>

  );
}

export default Home;