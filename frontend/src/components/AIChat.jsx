import { useState } from "react";

export default function AIChat() {

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {

    if (!input) return;

    const newMessages = [
      ...messages,
      { role: "user", text: input },
      {
        role: "ai",
        text: "Try visiting local cafes, sunset viewpoints, and street markets!"
      }
    ];

    setMessages(newMessages);
    setInput("");

  };

  return (

    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="font-bold mb-4">
        AI Travel Assistant
      </h2>

      <div className="h-40 overflow-y-auto mb-3 text-sm">

        {messages.map((m, i) => (
          <p key={i}>
            <b>{m.role === "user" ? "You:" : "AI:"}</b> {m.text}
          </p>
        ))}

      </div>

      <div className="flex gap-2">

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask travel tips..."
          className="flex-1 border p-2 rounded"
        />

        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 rounded"
        >
          Send
        </button>

      </div>

    </div>

  );
}