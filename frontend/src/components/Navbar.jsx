import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const links = [
    { to: "/home", label: "Home" },
    { to: "/planner", label: "Plan Trip" },
    { to: "/ai-planner", label: "AI Planner" },
    { to: "/explore", label: "Explore" },
    { to: "/profile", label: "Profile" }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">

        <Link to="/home" className="text-xl font-bold text-gray-900 tracking-wide">
          Safarnama ✈️
        </Link>

        <div className="flex gap-6">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition ${
                isActive(link.to)
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;