import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Compass, Map, Camera } from "lucide-react";

import SmartRouteMap from "../components/SmartRouteMap";
import NearbyAIMap from "../components/NearbyAIMap";
import OutfitSuggestions from "../components/OutfitSuggestions";
import WeatherOutfit from "../components/WeatherOutfit";
import MusicPlaylist from "../components/MusicPlaylist";
import PackingChecklist from "../components/PackingChecklist";

function Results() {

  const location = useLocation();
  const { destination, mood, budget, days } = location.state || {};

  const [itinerary, setItinerary] = useState([]);
  const [loading, setLoading] = useState(true);

  const gallery = [
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1506929562872-bb421503ef21",
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429"
  ];

  useEffect(() => {

    async function fetchTrip() {

      try {

        const response = await fetch("http://localhost:5001/api/generate-trip", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            destination,
            mood,
            budget,
            days
          })
        });

        const data = await response.json();

        setItinerary(data.itinerary || []);
        setLoading(false);

      } catch (error) {

        console.error("Error fetching trip:", error);
        setLoading(false);

      }

    }

    fetchTrip();

  }, []);

  return (

<div className="min-h-screen relative text-white overflow-hidden">

{/* Background Image */}

<div
className="absolute inset-0 bg-cover bg-center"
style={{
backgroundImage:
"url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')"
}}
/>

{/* Dark overlay */}

<div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

{/* Content */}

<div className="relative z-10 max-w-7xl mx-auto px-6 py-12">

{/* Header */}

<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.6}}
className="mb-16"
>

<h1 className="text-5xl font-bold flex items-center gap-3">
<MapPin className="text-yellow-400"/>
Trip to {destination}
</h1>

<p className="text-white/80 mt-3 text-lg">
Mood: <span className="text-yellow-300">{mood}</span>
&nbsp; | &nbsp;
Budget: <span className="text-green-300">{budget}</span>
&nbsp; | &nbsp;
Days: <span className="text-blue-300">{days}</span>
</p>

</motion.div>

{/* Gallery */}

<motion.div
initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
transition={{delay:0.2}}
className="mb-16"
>

<h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
<Camera className="text-pink-400"/>
Destination Gallery
</h2>

<div className="grid grid-cols-2 md:grid-cols-4 gap-5">

{gallery.map((img,i)=>(
<motion.img
key={i}
whileHover={{scale:1.05}}
src={img}
className="rounded-xl h-44 w-full object-cover shadow-xl border border-white/20"
/>
))}

</div>

</motion.div>

{/* Smart Route Map */}

<motion.div
initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
transition={{delay:0.3}}
className="mb-20"
>

<h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
<Map className="text-blue-400"/>
Smart Travel Route
</h2>

<div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl overflow-hidden">
<SmartRouteMap destination={destination}/>
</div>

</motion.div>

{/* AI Itinerary */}

<motion.div
initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
transition={{delay:0.4}}
className="mb-20"
>

<h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
<Compass className="text-orange-300"/>
Travel Timeline ({days} Days)
</h2>

{loading && (
<p className="text-white/70">Generating AI itinerary...</p>
)}

<div className="relative border-l border-orange-300/40 pl-8">

{itinerary.map((item,i)=>(

<motion.div
key={i}
initial={{opacity:0,x:-20}}
animate={{opacity:1,x:0}}
transition={{delay:i*0.15}}
className="mb-10"
>

<div className="absolute w-4 h-4 bg-orange-400 rounded-full -left-2 mt-1 shadow"/>

<div className="bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-xl shadow-xl">

<h3 className="text-lg font-semibold text-orange-200">
Day {item.day} — {item.title}
</h3>

<p className="text-white/80 text-sm mt-3">
Places: {item.places?.join(", ")}
</p>

<p className="text-white/80 text-sm mt-2">
Food: {item.food?.join(", ")}
</p>

<p className="text-orange-200 text-sm mt-2">
💡 {item.tips}
</p>

</div>

</motion.div>

))}

</div>

</motion.div>

{/* Outfit + Weather */}

<motion.div
initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
transition={{delay:0.5}}
className="grid md:grid-cols-2 gap-8 mb-20"
>

<OutfitSuggestions mood={mood}/>
<WeatherOutfit destination={destination}/>

</motion.div>

{/* Music + Packing */}

<motion.div
initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
transition={{delay:0.6}}
className="grid md:grid-cols-2 gap-8 mb-20"
>

<MusicPlaylist mood={mood} destination={destination}/>
<PackingChecklist/>

</motion.div>

{/* Nearby Places */}

<motion.div
initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
transition={{delay:0.7}}
>

<h2 className="text-2xl font-semibold mb-6">
Nearby Places to Explore
</h2>

<div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl overflow-hidden">
<NearbyAIMap destination={destination}/>
</div>

</motion.div>

</div>
</div>

  );
}

export default Results;