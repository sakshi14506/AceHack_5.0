import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-10">

      <div className="max-w-2xl mx-auto">

        <h1 className="text-3xl font-bold mb-8">My Profile 👤</h1>

        <div className="bg-white rounded-2xl shadow p-8">

          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              S
            </div>
            <div>
              <h2 className="text-xl font-semibold">Traveler</h2>
              <p className="text-gray-500">Exploring the world</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b">
              <span className="text-gray-600">Trips Planned</span>
              <span className="font-semibold">0</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b">
              <span className="text-gray-600">Favorite Mood</span>
              <span className="font-semibold">Adventure</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b">
              <span className="text-gray-600">Member Since</span>
              <span className="font-semibold">2026</span>
            </div>
          </div>

          <button
            onClick={() => navigate("/home")}
            className="mt-8 w-full bg-black text-white py-3 rounded-lg hover:opacity-90 transition"
          >
            Back to Home
          </button>

        </div>

      </div>

    </div>
  );
}

export default Profile;