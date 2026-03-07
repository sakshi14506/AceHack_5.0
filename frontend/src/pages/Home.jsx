import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const destinations = [
    {
      name: "Paris",
      img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    },
    {
      name: "Bali",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      name: "Dubai",
      img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    },
    {
      name: "Tokyo",
      img: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c",
    },
  ];

  const features = [
    { title: "AI Trip Planner", icon: "🧠", path: "/planner" },
    { title: "Weather Outfit", icon: "🌦", path: "/planner" },
    { title: "Travel Playlist", icon: "🎧", path: "/planner" },
    { title: "Share Journey", icon: "📸", path: "/share" },
  ];

  const deals = [
    {
      title: "Beach Escapes",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      title: "Mountain Adventures",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    {
      title: "City Breaks",
      img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">

      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-10 rounded-3xl mb-10">

        <h1 className="text-4xl font-bold mb-3">
          Plan Your Next Trip with AI ✈️
        </h1>

        <p className="mb-6 opacity-90">
          Generate personalized travel plans instantly
        </p>

        <button
          onClick={() => navigate("/planner")}
          className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
        >
          Start Planning
        </button>

      </div>

      {/* POPULAR DESTINATIONS */}
      <h2 className="text-2xl font-semibold mb-6">
        Popular Destinations
      </h2>

      <div className="grid md:grid-cols-4 gap-6 mb-12">

        {destinations.map((d, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition"
          >
            <img src={d.img} className="h-40 w-full object-cover" />
            <div className="p-3 font-semibold">{d.name}</div>
          </div>
        ))}

      </div>

      {/* AI FEATURES */}
      <h2 className="text-2xl font-semibold mb-6">
        AI Travel Tools
      </h2>

      <div className="grid md:grid-cols-4 gap-6 mb-12">

        {features.map((f, i) => (
          <div
            key={i}
            onClick={() => navigate(f.path)}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-xl cursor-pointer text-center"
          >
            <div className="text-3xl mb-3">{f.icon}</div>
            <div className="font-semibold">{f.title}</div>
          </div>
        ))}

      </div>

      {/* TRAVEL INSPIRATION */}
      <h2 className="text-2xl font-semibold mb-6">
        Travel Inspiration
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {deals.map((d, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition"
          >
            <img src={d.img} className="h-52 w-full object-cover" />
            <div className="p-4 font-semibold">{d.title}</div>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Home;