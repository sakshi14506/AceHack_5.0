import { useLocation } from "react-router-dom";
import DestinationMap from "../components/DestinationMap";
import SmartRouteMap from "../components/SmartRouteMap";
import NearbyAIMap from "../components/NearbyAIMap";
import ItineraryTimeline from "../components/ItineraryTimeline";
import TripStory from "../components/TripStory";
import ShareCard from "../components/ShareCard";

export default function Results() {

  const location = useLocation();

  const destination = location.state?.destination || "Goa";
  const mood = location.state?.mood || "Relax";
  const budget = location.state?.budget || "Medium";

  const itinerary = [
    {
      day: "Day 1",
      title: "Arrival & City Exploration"
    },
    {
      day: "Day 2",
      title: "Top Attractions Tour"
    },
    {
      day: "Day 3",
      title: "Shopping & Local Food"
    }
  ];

  return (
    <div style={{ padding: "40px", color: "white" }}>

      <h1>Your Trip to {destination}</h1>
      <p>Mood: {mood}</p>
      <p>Budget: {budget}</p>

      <DestinationMap destination={destination} />

      <SmartRouteMap destination={destination} />

      <NearbyAIMap destination={destination} />

      <ItineraryTimeline itinerary={itinerary} />

      <TripStory destination={destination} mood={mood} />

      <ShareCard destination={destination} />

    </div>
  );
}