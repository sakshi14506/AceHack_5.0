import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Navbar from "../components/Navbar";
import WorldMapBackground from "../components/WorldMapBackground";

import MoodSelector from "../components/MoodSelector";
import MoodSuggestions from "../components/MoodSuggestions";

import TravelTrends from "../components/TravelTrends";
import TopDestinations from "../components/TopDestinations";
import LuxuryDestinations from "../components/LuxuryDestinations";
import TrendingPosts from "../components/TrendingPosts";
import TravelPackages from "../components/TravelPackages";
import AIAssistantCard from "../components/AIAssistantCard";

import InspirationSection from "../components/Inspirationsection";
import AIChatBubble from "../components/AIChatBubble";

import { moodDestinations } from "../data/moodDestinations";

function Home() {

  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState("");

  const suggestions =
    selectedMood ? moodDestinations[selectedMood] || [] : [];

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

        <div className="relative mb-20">

          {/* Glow background */}
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-[700px] h-[400px] bg-blue-400 blur-[120px] opacity-30 rounded-full"></div>

          <div className="relative backdrop-blur-lg bg-white/60 border border-white/40 shadow-2xl rounded-3xl p-12 text-center">

            <h1 className="text-5xl font-bold mb-4 text-gray-900">
              Safarnama ✈️
            </h1>

            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
              Your AI-powered travel companion. Discover destinations,
              generate itineraries, explore hidden gems and plan
              unforgettable journeys.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">

              <button
                onClick={() => navigate("/planner")}
                className="bg-black text-white px-6 py-3 rounded-xl hover:scale-105 transition shadow-lg"
              >
                Plan a Trip
              </button>

              <button
                onClick={() => navigate("/ai-planner")}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:scale-105 transition shadow-lg"
              >
                Plan with AI 🤖
              </button>

              <button
                onClick={() => navigate("/explore")}
                className="bg-gray-200 px-6 py-3 rounded-xl hover:bg-gray-300 transition"
              >
                Explore Destinations 🌍
              </button>

            </div>

          </div>

        </div>


        {/* MOOD BASED TRAVEL */}

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


        {/* TRENDING TRAVEL */}

        <TravelTrends />


        {/* TOP DESTINATIONS */}

        <TopDestinations />


        {/* LUXURY DESTINATIONS */}

        <LuxuryDestinations />


        {/* COMMUNITY TRAVEL POSTS */}

        <TrendingPosts />


        {/* TRAVEL PACKAGES */}

        <TravelPackages />


        {/* AI ASSISTANT PROMO */}

        <AIAssistantCard />


        {/* TRAVEL INSPIRATION */}

        <div className="mt-20">

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