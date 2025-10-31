"use client";
import { useState, useRef, useEffect } from "react";

interface Message {
  sender: "user" | "bot";
  text: string;
}

const suggestedQuestions = [
  "How do I join MuLearn?",
  "What is MuCoin?",
  "How to submit a project?",
  "What are the learning paths?",
];

const AskMulearn = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleAsk = async (text?: string) => {
    const messageText = text || query;
    if (!messageText.trim()) return;

    const userMessage: Message = { sender: "user", text: messageText };
    setMessages(prev => [...prev, userMessage]);
    setQuery("");
    setLoading(true);

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: messageText }),
      });

      const data = await res.json().catch(() => null);
      const botReply =
        data?.answer?.trim() || "Sorry, I couldn’t find an answer. Try rephrasing your question!";
      setMessages(prev => [...prev, { sender: "bot", text: botReply }]);
    } catch {
      setMessages(prev => [
        ...prev,
        { sender: "bot", text: "⚠️ Something went wrong while fetching your answer." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 font-sans">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="bg-purple-600 text-white rounded-full p-3 shadow-lg hover:scale-110 transition-transform duration-200"
        >
          🤖
        </button>
      ) : (
        <div className="bg-white w-72 sm:w-80 max-h-[500px] flex flex-col rounded-xl shadow-xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-purple-600 text-white flex items-center justify-between px-4 py-2">
            <h3 className="font-semibold text-md sm:text-lg">MUBot </h3>
            <button onClick={() => setOpen(false)} className="text-white hover:text-gray-200">
              ✕
            </button>
          </div>

          {/* Suggested Questions */}
          <div className="bg-gray-50 px-3 py-2 flex flex-wrap gap-1 border-b border-gray-200">
            {suggestedQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => handleAsk(q)}
                className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs hover:bg-purple-200 transition-colors"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Chat */}
          <div className="flex-1 p-3 flex flex-col gap-2 overflow-y-auto bg-gray-50 scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-gray-200">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[75%] p-2 rounded-lg text-sm break-words ${
                  m.sender === "user"
                    ? "self-end bg-purple-100 text-purple-900"
                    : "self-start bg-white text-gray-900 shadow-sm"
                }`}
                dangerouslySetInnerHTML={{ __html: (m.text || "").replace(/\n/g, "<br />") }}
              />
            ))}
            {loading && (
              <div className="self-start bg-white p-2 rounded-lg text-gray-800 shadow-sm animate-pulse text-sm">
                MUBot is typing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-2 border-t border-gray-200 flex gap-2 bg-gray-100">
            <input
              type="text"
              placeholder="Ask a question..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleAsk()}
              className="flex-1 rounded-full px-3 py-1.5 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            />
            <button
              onClick={() => handleAsk()}
              disabled={loading || !query.trim()}
              className="bg-purple-600 text-white px-3 py-1.5 rounded-full hover:bg-purple-700 disabled:opacity-50 transition-colors"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AskMulearn;
