import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Profile() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">

      <Navbar />

      <div className="max-w-2xl mx-auto px-6 py-10">

        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Profile 👤</h1>

        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">

          {/* Avatar + Name */}
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-blue-500/25">
              S
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Traveler</h2>
              <p className="text-gray-400 text-sm">Exploring the world, one trip at a time ✈️</p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">0</div>
              <div className="text-xs text-gray-500 mt-1">Trips</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">🏔</div>
              <div className="text-xs text-gray-500 mt-1">Adventure</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-green-600">2026</div>
              <div className="text-xs text-gray-500 mt-1">Joined</div>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-0 bg-gray-50 rounded-xl overflow-hidden">
            <div className="flex justify-between items-center py-4 px-5 border-b border-gray-100">
              <span className="text-gray-500 text-sm">Trips Planned</span>
              <span className="font-semibold text-gray-900">0</span>
            </div>
            <div className="flex justify-between items-center py-4 px-5 border-b border-gray-100">
              <span className="text-gray-500 text-sm">Favorite Mood</span>
              <span className="font-semibold text-gray-900">Adventure</span>
            </div>
            <div className="flex justify-between items-center py-4 px-5">
              <span className="text-gray-500 text-sm">Member Since</span>
              <span className="font-semibold text-gray-900">2026</span>
            </div>
          </div>

          <button
            onClick={() => navigate("/home")}
            className="mt-8 w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-3 rounded-xl font-medium hover:shadow-lg hover:scale-[1.01] transition-all duration-300"
          >
            ← Back to Home
          </button>

        </div>
      </div>
    </div>
  );
}

export default Profile;