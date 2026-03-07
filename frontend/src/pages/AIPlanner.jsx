import { useState } from "react";

function AIPlanner() {

  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = () => {

    if (!message.trim()) return;

    const userMsg = { type: "user", text: message };

    const botMsg = {
      type: "bot",
      text: "Great idea! You should consider visiting Manali for mountains and scenic views."
    };

    setChat([...chat, userMsg, botMsg]);
    setMessage("");

  };

  return (

    <div className="max-w-3xl mx-auto p-10">

      <h1 className="text-3xl font-bold mb-6">
        AI Trip Planner 🤖
      </h1>

      <div className="bg-white p-6 rounded-xl shadow h-[400px] overflow-y-auto mb-6">

        {chat.map((msg, index) => (

          <div
            key={index}
            className={`mb-4 ${
              msg.type === "user" ? "text-right" : "text-left"
            }`}
          >

            <span
              className={`inline-block px-4 py-2 rounded-lg ${
                msg.type === "user"
                  ? "bg-black text-white"
                  : "bg-gray-200"
              }`}
            >
              {msg.text}
            </span>

          </div>

        ))}

      </div>

      <div className="flex gap-3">

        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 border p-3 rounded-lg"
          placeholder="Ask AI to plan your trip..."
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