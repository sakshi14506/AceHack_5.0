import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">SafarAI ✈️</h1>

      <div className="flex gap-6">
        <Link to="/home">Home</Link>
        <Link to="/planner">Planner</Link>
        <Link to="/share">Share</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
}

export default Navbar;