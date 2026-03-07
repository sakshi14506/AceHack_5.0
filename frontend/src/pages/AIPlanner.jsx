import { useState } from "react";
import Navbar from "../components/Navbar";

function AIPlanner() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    { type: "bot", text: "Hey! 👋 I'm your AI Travel Assistant. Tell me where you want to go, your mood, and budget — I'll create a perfect plan for you!" }
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;

    const userMsg = { type: "user", text: message };

    const responses = [
      "Great choice! 🌟 You should consider visiting Manali for mountains and scenic views. I recommend a 3-day trip with trekking on Day 1, Solang Valley on Day 2, and local food exploration on Day 3!",
      "That sounds amazing! 🏖 For a beach vacation, try Goa — the sunsets at Baga Beach are unreal. Budget ₹15,000-25,000 for a 4-day trip with water sports, nightlife, and beach hopping!",
      "Perfect! ✈️ I'd suggest Paris for a romantic getaway. Visit the Eiffel Tower at sunset, explore Montmartre, and enjoy authentic French cafes. Budget around ₹1,50,000 for 5 days!",
      "Interesting! 🗺 Based on your preferences, Dubai would be ideal. Desert safari, Burj Khalifa, and the Gold Souk are must-visits. Budget: ₹60,000-80,000 for 4 days!"
    ];

    const botMsg = {
      type: "bot",
      text: responses[Math.floor(Math.random() * responses.length)]
    };

    setChat([...chat, userMsg, botMsg]);
    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 py-10">

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            AI Trip Planner 🤖
          </h1>
          <p className="text-gray-500">Chat with AI to plan your perfect trip</p>
        </div>

        {/* Chat Area */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">

          <div className="h-[450px] overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-gray-50 to-white">
            {chat.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"} animate-fadeIn`}
              >
                <div
                  className={`max-w-[80%] px-5 py-3 rounded-2xl text-sm leading-relaxed ${
                    msg.type === "user"
                      ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-br-md shadow-md shadow-blue-500/20"
                      : "bg-white text-gray-700 border border-gray-100 rounded-bl-md shadow-sm"
                  }`}
                >
                  {msg.type === "bot" && <span className="text-xs text-gray-400 block mb-1">🤖 AI Assistant</span>}
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-100 p-4 bg-white">
            <div className="flex gap-3">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 border border-gray-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-sm"
                placeholder="Ask AI to plan your trip... (e.g. 'Plan a 3-day Bali trip for ₹50k')"
              />

              <button
                onClick={sendMessage}
                className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 text-sm font-medium"
              >
                Send ✨
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default AIPlanner;