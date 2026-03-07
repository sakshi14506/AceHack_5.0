import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  const bgImage =
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop";

  return (
    <div
      className="h-screen w-full bg-cover bg-center relative flex items-center justify-center text-white overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 text-6xl animate-float opacity-20">✈️</div>
      <div className="absolute bottom-32 right-16 text-5xl animate-float opacity-20" style={{ animationDelay: '1s' }}>🌍</div>
      <div className="absolute top-40 right-20 text-4xl animate-float opacity-15" style={{ animationDelay: '2s' }}>🏝</div>

      {/* Content */}
      <div className="relative text-center px-6 animate-fade">

        {/* Badge */}
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm tracking-wide">
          ✨ AI-Powered Travel Companion
        </div>

        {/* App Name */}
        <h1 className="text-7xl md:text-8xl font-bold mb-4 tracking-tight">
          <span className="gradient-text">Safarnama</span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl tracking-[8px] mb-3 opacity-90 uppercase font-light">
          Travel
        </h2>

        <p className="text-base mb-10 opacity-70 max-w-md mx-auto leading-relaxed">
          Discover destinations, craft perfect itineraries with AI, and plan journeys you'll never forget.
        </p>

        {/* CTA Button */}
        <button
          onClick={() => navigate("/login")}
          className="px-10 py-3.5 backdrop-blur-md bg-white/15 border border-white/30 rounded-full hover:bg-white hover:text-black transition-all duration-500 text-sm tracking-widest uppercase font-medium shadow-lg hover:shadow-xl hover:scale-105"
        >
          Start Exploring
        </button>

        {/* Stats */}
        <div className="flex justify-center gap-10 mt-14 text-sm opacity-70">
          <div>
            <div className="text-2xl font-bold">50+</div>
            <div>Destinations</div>
          </div>
          <div>
            <div className="text-2xl font-bold">AI</div>
            <div>Powered</div>
          </div>
          <div>
            <div className="text-2xl font-bold">∞</div>
            <div>Adventures</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 animate-bounce text-sm opacity-60">
          ↓
        </div>

      </div>
    </div>
  );
}

export default Landing;