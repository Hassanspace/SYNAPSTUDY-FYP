import React, { useState } from "react";
import { toast } from "react-toastify";

const ChatbotTab = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = async () => {
    if (!question.trim()) return toast.error("Please type a question!");
    
    // Simulate chatbot response (replace with real API)
    setAnswer("🤖 AI says: " + question.split("").reverse().join(""));
    setQuestion("");
    toast.success("Answer generated!");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-black">Chatbot</h1>
      <p className="text-gray-700 mb-4">Ask questions or get help from your AI assistant here.</p>

      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Type your question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-400 focus:ring-2 focus:ring-[#4CFF83] outline-none"
        />
        <button
          onClick={handleAsk}
          className="w-fit px-6 py-2 bg-gradient-to-r from-[#4CFF83] via-[#3AC2FF] to-[#6A4CFF] text-white rounded-xl shadow hover:opacity-90 transition"
        >
          Ask
        </button>
      </div>

      {answer && (
        <div className="mt-6 p-4 bg-gray-100 rounded-xl border border-gray-300 shadow">
          <p className="text-gray-800">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default ChatbotTab;
