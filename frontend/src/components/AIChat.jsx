import { useState } from "react";

export default function AIChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { role: "user", text: input },
      {
        role: "ai",
        text: "Try visiting local cafes, sunset viewpoints, and street markets! These are the hidden gems that make a trip truly memorable. 🌅"
      }
    ];

    setMessages(newMessages);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">

      <div className="h-48 overflow-y-auto mb-4 space-y-3">
        {messages.length === 0 && (
          <p className="text-gray-300 text-sm text-center py-8">Ask me anything about your trip! ✨</p>
        )}
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
              m.role === "user"
                ? "bg-blue-500 text-white rounded-br-md"
                : "bg-gray-50 text-gray-700 border border-gray-100 rounded-bl-md"
            }`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask travel tips..."
          className="flex-1 border border-gray-200 px-4 py-2.5 rounded-xl text-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all"
        />

        <button
          onClick={sendMessage}
          className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:shadow-md transition-all"
        >
          Send
        </button>
      </div>
    </div>
  );
}