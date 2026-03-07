import { useLocation } from "react-router-dom";

import DestinationHero from "../components/DestinationHero.jsx";
import TripStory from "../components/TripStory.jsx";
import ItineraryTimeline from "../components/ItineraryTimeline.jsx";
import NearbyAttractionsMap from "../components/NearbyAttractionsMap.jsx";
import SmartRouteMap from "../components/SmartRouteMap.jsx";

const Results = () => {

  const location = useLocation();
  const trip = location.state;

  if (!trip) return <div>No trip data</div>;

  return (

    <div>

      <DestinationHero destination={trip.destination} />

      <TripStory story={trip.story} />

      <ItineraryTimeline itinerary={trip.itinerary} />

      <NearbyAttractionsMap places={trip.places} />

      <SmartRouteMap places={trip.places} />

    </div>

  );

};

export default Results;