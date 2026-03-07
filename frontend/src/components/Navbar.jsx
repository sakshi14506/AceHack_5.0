import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { to: "/home", label: "Home", icon: "🏠" },
    { to: "/planner", label: "Plan Trip", icon: "🗺" },
    { to: "/ai-planner", label: "AI Planner", icon: "🤖" },
    { to: "/explore", label: "Explore", icon: "🌍" },
    { to: "/profile", label: "Profile", icon: "👤" }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white/80 backdrop-blur-xl border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">

        <Link to="/home" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-wide">
          Safarnama ✈️
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-1">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium px-4 py-2 rounded-xl transition-all duration-200 ${
                isActive(link.to)
                  ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md shadow-blue-500/25"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <span className="mr-1">{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-2xl p-2 hover:bg-gray-100 rounded-xl transition"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-xl animate-slideUp">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block px-6 py-3 text-sm font-medium transition ${
                isActive(link.to)
                  ? "bg-blue-50 text-blue-600 border-l-4 border-blue-500"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <span className="mr-2">{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;