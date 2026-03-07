import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (

    <div className="max-w-6xl mx-auto p-10">

      {/* HERO SECTION */}

      <div className="bg-white shadow-lg rounded-2xl p-10 text-center mb-10">

        <h1 className="text-4xl font-bold mb-4">
          Welcome to Safarnama ✈️
        </h1>

        <p className="text-gray-600 mb-6">
          Your AI-powered travel companion. Discover destinations,
          generate itineraries, explore nearby places and plan
          unforgettable trips.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">

          <button
            onClick={() => navigate("/planner")}
            className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-90"
          >
            Plan a Trip
          </button>

          <button
            onClick={() => navigate("/ai-planner")}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:opacity-90"
          >
            Plan with AI 🤖
          </button>

          <button
            onClick={() => navigate("/explore")}
            className="bg-gray-200 px-6 py-3 rounded-lg hover:bg-gray-300"
          >
            Explore Destinations
          </button>

        </div>

      </div>


      {/* FEATURE CARDS */}

      <div className="grid md:grid-cols-3 gap-6">

        {/* AI Planner */}

        <div
          onClick={() => navigate("/ai-planner")}
          className="cursor-pointer bg-white shadow-md rounded-xl p-6 hover:shadow-lg"
        >

          <h3 className="text-xl font-semibold mb-2">
            AI Trip Planner 🤖
          </h3>

          <p className="text-gray-600">
            Chat with AI and generate personalized travel plans
            based on your mood, budget and preferences.
          </p>

        </div>


        {/* Smart Map */}

        <div
          onClick={() => navigate("/planner")}
          className="cursor-pointer bg-white shadow-md rounded-xl p-6 hover:shadow-lg"
        >

          <h3 className="text-xl font-semibold mb-2">
            Smart Travel Planner 🗺
          </h3>

          <p className="text-gray-600">
            Select destination and mood to generate a
            personalized itinerary with nearby places.
          </p>

        </div>


        {/* Explore */}

        <div
          onClick={() => navigate("/explore")}
          className="cursor-pointer bg-white shadow-md rounded-xl p-6 hover:shadow-lg"
        >

          <h3 className="text-xl font-semibold mb-2">
            Explore Destinations 🌍
          </h3>

          <p className="text-gray-600">
            Discover trending travel spots and get inspired
            for your next adventure.
          </p>

        </div>

      </div>

    </div>

  );

}

export default Home;