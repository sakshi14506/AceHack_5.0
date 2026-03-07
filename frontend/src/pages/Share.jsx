import { useLocation, useNavigate } from "react-router-dom";
import ShareCard from "../components/ShareCard";
import Navbar from "../components/Navbar";

function Share() {
  const location = useLocation();
  const navigate = useNavigate();
  const trip = location.state;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">

      <Navbar />

      <div className="max-w-2xl mx-auto px-6 py-10">

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Share Your Trip 🌍</h1>

        {trip ? (
          <div className="animate-fade">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{trip.destination}</h2>
              <div className="flex gap-3 mb-4">
                {trip.days && <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">📅 {trip.days} days</span>}
                {trip.mood && <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm">🎭 {trip.mood}</span>}
              </div>
              {trip.story && (
                <p className="text-gray-600 leading-relaxed border-t border-gray-100 pt-4">{trip.story}</p>
              )}
            </div>

            <ShareCard destination={trip.destination} />
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="text-6xl mb-4">🧳</div>
            <p className="text-gray-400 text-lg mb-2">No trip to share yet</p>
            <p className="text-gray-300 text-sm mb-6">Plan a trip first and come back to share it!</p>
            <button
              onClick={() => navigate("/planner")}
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-3 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 font-medium"
            >
              Plan a Trip ✈️
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default Share;