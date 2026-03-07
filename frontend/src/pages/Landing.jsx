import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  const bgImage =
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop";

  return (
    <div
      className="h-screen w-full bg-cover bg-center relative flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>

      {/* Content */}
      <div className="relative text-center px-6">

        {/* App Name */}
        <h1 className="text-6xl md:text-7xl font-bold mb-10 tracking-wide animate-fade">
          Safarnama
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl tracking-[10px] mb-3 opacity-90">
          TRAVEL
        </h2>

        <p className="text-sm mb-10 opacity-80">
          Take the first step towards your journey
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/login")}
          className="px-8 py-3 backdrop-blur-md bg-white/20 border border-white/40 rounded-full hover:bg-white hover:text-black transition duration-300 text-sm tracking-wide"
        >
          START EXPLORING
        </button>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce text-sm opacity-80">
          ↓
        </div>

      </div>
    </div>
  );
}

export default Landing;