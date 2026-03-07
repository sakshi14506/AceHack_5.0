import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import NearbyAttractionsMap from "../components/NearbyAttractionsMap";
import TripStory from "../components/TripStory";

function Results() {

  const location = useLocation();
  const destination = location.state?.destination || "Unknown Destination";

  const [coords, setCoords] = useState(null);

  const itinerary = [
    {
      day: "Day 1",
      plan: "Arrival, explore local markets and try authentic local cuisine."
    },
    {
      day: "Day 2",
      plan: "Visit famous attractions, museums and scenic viewpoints."
    },
    {
      day: "Day 3",
      plan: "Relax in cafes, explore hidden streets and enjoy sunset spots."
    }
  ];

  const getDestinationImage = (destination) => {
    return `https://source.unsplash.com/1600x600/?${destination},travel`;
  };

  useEffect(() => {

    const fetchCoords = async () => {

      try {

        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${destination}`
        );

        const data = await res.json();

        if (data.length > 0) {

          setCoords({
            lat: parseFloat(data[0].lat),
            lon: parseFloat(data[0].lon)
          });

        }

      } catch (error) {

        console.error("Error fetching coordinates:", error);

      }

    };

    fetchCoords();

  }, [destination]);

  return (

    <div className="p-10 max-w-6xl mx-auto">

      {/* HERO SECTION */}

      <div className="relative mb-12">

        <img
          src={getDestinationImage(destination)}
          alt={destination}
          className="w-full h-[350px] object-cover rounded-2xl"
        />

        <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center">

          <div className="text-center text-white">

            <h1 className="text-5xl font-bold mb-2">
              {destination}
            </h1>

            <p className="text-lg">
              Your AI Generated Travel Plan
            </p>

          </div>

        </div>

      </div>


      {/* ITINERARY */}

      <div className="mb-12">

        <h2 className="text-2xl font-semibold mb-6">
          Suggested Itinerary
        </h2>

        <div className="space-y-4">

          {itinerary.map((item, index) => (

            <div
              key={index}
              className="p-6 backdrop-blur-lg bg-white/70 border border-white/40 rounded-2xl shadow-lg"
            >

              <h3 className="font-semibold text-lg">
                {item.day}
              </h3>

              <p className="text-gray-600">
                {item.plan}
              </p>

            </div>

          ))}

        </div>

      </div>


      {/* AI STORY */}

      <TripStory destination={destination} />


      {/* MAP */}

      {coords && (

        <NearbyAttractionsMap
          lat={coords.lat}
          lon={coords.lon}
        />

      )}

    </div>

  );

}

export default Results;