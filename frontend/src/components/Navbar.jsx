import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow">

      <h1 className="text-2xl font-bold text-blue-600">
        AI Travel Planner
      </h1>

      <div className="space-x-4">

        <Link to="/login">
          <button className="px-4 py-2 border rounded-lg">
            Login
          </button>
        </Link>

        <Link to="/planner">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Plan Trip
          </button>
        </Link>

      </div>

    </nav>
  )
}

export default Navbar