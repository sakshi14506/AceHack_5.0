import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"

function Landing() {
  return (
    <div>

      <Navbar />

      <div className="flex flex-col items-center justify-center text-center mt-32 px-6">

        <h1 className="text-5xl font-bold mb-6">
          Plan Trips Based On Your Mood ✈️
        </h1>

        <p className="text-lg text-gray-600 max-w-xl mb-8">
          Our AI travel planner creates personalized trips with
          itinerary, outfit suggestions, and music playlists
          based on your destination and vibe.
        </p>

        <div className="flex gap-4">

          <Link to="/login">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
              Get Started
            </button>
          </Link>

          <Link to="/planner">
            <button className="border px-6 py-3 rounded-lg">
              Try Planner
            </button>
          </Link>

        </div>

      </div>

    </div>
  )
}

export default Landing