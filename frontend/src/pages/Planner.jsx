import PlannerSearch from "../components/PlannerSearch";
import InspirationSection from "../components/InspirationSection";

export default function Planner() {

  return (

    <div className="min-h-screen bg-gray-50">

      {/* HERO */}

      <div
        className="h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')"
        }}
      >

        <div className="text-center text-white">

          <h1 className="text-5xl font-bold mb-4">
            Plan Your Perfect Trip
          </h1>

          <p className="text-lg opacity-90">
            AI-powered travel planning in seconds
          </p>

        </div>

      </div>

      {/* SEARCH CARD */}

      <div className="-mt-24 px-6">

        <PlannerSearch />

      </div>

      {/* INSPIRATION */}

      <InspirationSection />

    </div>

  );
}