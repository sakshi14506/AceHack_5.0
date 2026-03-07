import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-4 text-white z-50">
      <h1 className="text-xl font-bold">Safarnama</h1>

      <div className="flex gap-6">
        <Link to="/home" className="hover:text-gray-300">Home</Link>
        <Link to="/plan" className="hover:text-gray-300">Plan Trip</Link>
        <Link to="/destinations" className="hover:text-gray-300">Destinations</Link>
        <Link to="/ai-planner" className="hover:text-gray-300">AI Planner</Link>
        <Link to="/profile" className="hover:text-gray-300">Profile</Link>
        <Link to="/notifications" className="hover:text-gray-300">Notifications</Link>
      </div>
    </nav>
  );
}

export default Navbar;