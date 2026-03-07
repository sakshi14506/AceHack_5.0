import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Sparkles, Calendar, Wallet } from "lucide-react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import ParticlesBackground from "../components/ParticlesBackground";

const destinations=[
 "Bali","Paris","Dubai","Tokyo","Goa",
 "Manali","Singapore","Maldives","London","New York"
];

function Planner(){

 const navigate=useNavigate();

 const [destination,setDestination]=useState("");
 const [suggestions,setSuggestions]=useState([]);
 const [loading,setLoading]=useState(false);
 const [mood,setMood]=useState("");
 const [budget,setBudget]=useState("");
 const [days,setDays]=useState("");

 const handleChange=(e)=>{

  const value=e.target.value;
  setDestination(value);

  if(value===""){
   setSuggestions([]);
   return;
  }

  const filtered=destinations.filter((d)=>
   d.toLowerCase().includes(value.toLowerCase())
  );

  setSuggestions(filtered);

 };

 const generatePlan=()=>{

  if(!destination){
   alert("Enter destination");
   return;
  }

  setLoading(true);

  setTimeout(()=>{

   setLoading(false);

   navigate("/results",{
    state:{
     destination,
     mood,
     budget,
     days
    }
   });

  },2000);

 };

 return(

  <div className="min-h-screen flex items-center justify-center bg-black text-white relative p-6">

   <ParticlesBackground/>

   <motion.div
    initial={{opacity:0,y:40}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.8}}
    className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-3xl max-w-xl w-full"
   >

    <h1 className="text-3xl font-bold mb-6">

     <Typewriter
      words={[
       "Plan your dream trip ✈️",
       "Discover hidden gems 🏝",
       "AI builds your itinerary 🤖"
      ]}
      loop
      cursor
     />

    </h1>

    {/* DESTINATION */}

    <div className="relative mb-4">

     <div className="flex items-center bg-white/10 rounded-xl px-3">

      <MapPin size={18}/>

      <input
       value={destination}
       onChange={handleChange}
       placeholder="Destination"
       className="w-full p-3 bg-transparent outline-none"
      />

     </div>

     {suggestions.length>0 &&(

      <div className="absolute bg-white text-black w-full rounded-xl mt-2">

       {suggestions.map((item,i)=>(
        <div
         key={i}
         onClick={()=>{
          setDestination(item);
          setSuggestions([]);
         }}
         className="p-3 hover:bg-gray-100 cursor-pointer"
        >
         {item}
        </div>
       ))}

      </div>

     )}

    </div>

    {/* MOOD */}

    <select
     value={mood}
     onChange={(e)=>setMood(e.target.value)}
     className="w-full p-3 mb-4 rounded-xl bg-white/10"
    >
     <option value="">Mood</option>
     <option>Adventure</option>
     <option>Relax</option>
     <option>Romantic</option>
     <option>Spiritual</option>
    </select>

    {/* BUDGET */}

    <select
     value={budget}
     onChange={(e)=>setBudget(e.target.value)}
     className="w-full p-3 mb-4 rounded-xl bg-white/10"
    >
     <option value="">Budget</option>
     <option>Low</option>
     <option>Medium</option>
     <option>Luxury</option>
    </select>

    {/* DAYS */}

    <input
     value={days}
     onChange={(e)=>setDays(e.target.value)}
     placeholder="Trip days"
     className="w-full p-3 mb-6 rounded-xl bg-white/10"
    />

    <button
     onClick={generatePlan}
     className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition"
    >
     Generate AI Plan
    </button>

    {loading && <p className="text-center mt-4">AI planning your trip...</p>}

   </motion.div>

  </div>

 );

}

export default Planner;