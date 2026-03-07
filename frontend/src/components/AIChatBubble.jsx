import { useNavigate } from "react-router-dom";

function AIChatBubble(){

  const navigate = useNavigate()

  return(

    <div
      onClick={()=>navigate("/ai-planner")}
      className="fixed bottom-6 right-6 bg-blue-600 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-xl cursor-pointer hover:scale-110 transition"
    >
      🤖
    </div>

  )
}

export default AIChatBubble