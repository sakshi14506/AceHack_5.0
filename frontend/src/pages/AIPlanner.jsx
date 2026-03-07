import { useState } from "react";

function AIPlanner() {

  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const generateResponse = (msg) => {

    const responses = [
      {
        destination: "Manali",
        text: "Perfect choice! A romantic mountain getaway in Manali with scenic views and cozy cafes."
      },
      {
        destination: "Rishikesh",
        text: "Great adventure choice! Rishikesh offers river rafting, yoga retreats and beautiful Ganga views."
      },
      {
        destination: "Goa",
        text: "For relaxation and beaches, Goa is perfect with sunsets, cafes and vibrant nightlife."
      }
    ];

    return responses[Math.floor(Math.random() * responses.length)];
  };

  const sendMessage = () => {

    if (!message.trim()) return;

    const userMsg = {
      type: "user",
      text: message
    };

    const aiResponse = generateResponse(message);

    const botMsg = {
      type: "bot",
      text: aiResponse.text,
      destination: aiResponse.destination
    };

    setChat([...chat, userMsg, botMsg]);
    setMessage("");

  };

  return (

    <div className="max-w-3xl mx-auto p-10">

      <h1 className="text-3xl font-bold mb-6">
        AI Trip Planner 🤖
      </h1>

      {/* CHAT WINDOW */}

      <div className="bg-white rounded-xl shadow p-6 h-[400px] overflow-y-auto mb-6">

        {chat.map((msg, index) => (

          <div
            key={index}
            className={`mb-4 ${
              msg.type === "user" ? "text-right" : "text-left"
            }`}
          >

            <div
              className={`inline-block px-4 py-2 rounded-lg ${
                msg.type === "user"
                  ? "bg-black text-white"
                  : "bg-gray-200"
              }`}
            >
              {msg.text}
            </div>

          </div>

        ))}

      </div>

      {/* INPUT */}

      <div className="flex gap-3">

        <input
          type="text"
          placeholder="Ask AI to plan your trip..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 border p-3 rounded-lg"
        />

        <button
          onClick={sendMessage}
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Send
        </button>

      </div>

    </div>

  );

}

export default AIPlanner;