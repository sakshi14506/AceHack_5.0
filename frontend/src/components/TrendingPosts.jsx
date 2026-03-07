import { useNavigate } from "react-router-dom";

const destinations = [
  {
    name: "Bali",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  {
    name: "Paris",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
  },
  {
    name: "Dubai",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
  },
  {
    name: "Maldives",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
  },
];

function TopDestinations() {

  const navigate = useNavigate();

  return (
    <div className="mt-16">

      <h2 className="text-2xl font-bold mb-6">
        🌍 Top Destinations
      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        {destinations.map((d) => (

          <div
            key={d.name}
            onClick={() => navigate("/planner",{state:{destination:d.name}})}
            className="cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition"
          >

            <img
              src={d.image}
              alt={d.name}
              className="h-48 w-full object-cover"
            />

            <div className="p-4 font-semibold">
              {d.name}
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default TopDestinations;