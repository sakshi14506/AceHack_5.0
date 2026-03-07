import { useNavigate } from "react-router-dom";

function AIAssistantCard(){

const navigate = useNavigate()

return(

<div className="mt-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-3xl p-10 shadow-xl">

<h2 className="text-3xl font-bold mb-4">
🤖 Meet Your AI Travel Assistant
</h2>

<p className="text-blue-100 mb-6 max-w-xl">

Tell Safarnama your mood, budget and travel style.
Our AI will generate a complete itinerary with
hidden spots, food places, and smart routes.

</p>

<button
onClick={()=>navigate("/ai-planner")}
className="bg-white text-indigo-700 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
>
Start Planning with AI
</button>

</div>

)

}

export default AIAssistantCard