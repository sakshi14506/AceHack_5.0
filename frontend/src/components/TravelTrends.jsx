import { useNavigate } from "react-router-dom";

const trends = [
  "Bali",
  "Manali",
  "Dubai",
  "Thailand",
  "Goa",
  "Maldives",
  "Singapore",
  "Paris"
];

function TravelTrends() {

  const navigate = useNavigate();

  return (

    <div className="mt-16">

      <h2 className="text-2xl font-bold mb-6">
        🔥 Trending Travel Right Now
      </h2>

      <div className="flex flex-wrap gap-4">

        {trends.map((place,index)=>(

          <button
          key={index}
          onClick={()=>navigate("/planner",{state:{destination:place}})}
          className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-5 py-2 rounded-full shadow hover:scale-105 transition"
          >
            #{place}
          </button>

        ))}

      </div>

    </div>

  );
}

export default TravelTrends;