import { useLocation, useNavigate } from "react-router-dom";
import ShareCard from "../components/ShareCard";

function Share() {
  const location = useLocation();
  const navigate = useNavigate();
  const trip = location.state;

  return (
    <div className="min-h-screen bg-gray-50 p-10">

      <div className="max-w-2xl mx-auto">

        <h1 className="text-3xl font-bold mb-8">Share Your Trip 🌍</h1>

        {trip ? (
          <div>
            <div className="bg-white rounded-2xl shadow p-8 mb-6">
              <h2 className="text-2xl font-semibold mb-2">{trip.destination}</h2>
              <p className="text-gray-500 mb-4">
                {trip.days} days • {trip.mood} mood
              </p>
              {trip.story && (
                <p className="text-gray-700 leading-relaxed">{trip.story}</p>
              )}
            </div>

            <ShareCard destination={trip.destination} />
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg mb-4">No trip to share yet</p>
            <button
              onClick={() => navigate("/planner")}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Plan a Trip First
            </button>
          </div>
        )}

      </div>

    </div>
  );
}

export default Share;