import React, { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { findReply } from "../data/chatbotFaq";

/* ================================
   SAFE NORMALIZER (IMPORTANT)
================================ */

function normalizeAnswer(answer) {
  if (!answer) return "";

  if (typeof answer === "string") return answer;

  if (typeof answer === "object") {
    return answer.neutral || answer.friendly || answer.formal || "";
  }

  return String(answer);
}

/* ================================
   MESSAGE BUBBLE (SAFE RENDER)
================================ */
function MessageBubble({ from, text, onContactClick }) {
  const safeText =
    typeof text === "string" ? text : normalizeAnswer(text);

  const hasContact = safeText.includes("[[CONTACT_LINK]]");
  const clean = safeText.replace("[[CONTACT_LINK]]", "").trim();

  return (
    <div
      className={[
        "max-w-[88%] rounded-2xl px-3 py-2 text-sm leading-5 whitespace-pre-line",
        from === "user"
          ? "ml-auto bg-brand-700 text-white"
          : "bg-white/10 text-white/90",
      ].join(" ")}
    >
      {clean}

      {hasContact && (
        <div className="mt-3">
          <button
            type="button"
            onClick={onContactClick}
            className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-xs font-semibold text-white hover:bg-white/15"
          >
            Go to Contact <ArrowRight size={14} />
          </button>
        </div>
      )}
    </div>
  );
}

/* ================================
   MAIN CHATBOT
================================ */
export default function Chatbot() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState(() => [
    {
      from: "bot",
      text:
        "Welcome to Jubilee Apparel \n How may we assist you?",
    },
  ]);

  const listRef = useRef(null);

  /* Auto scroll */
  useEffect(() => {
    if (!open) return;
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, open]);

  /* ================================
     SEND MESSAGE
  ================================= */
  const send = () => {
    const msg = input.trim();
    if (!msg) return;

    const reply = findReply(msg);

    setMessages((prev) => [
      ...prev,
      { from: "user", text: msg },
      { from: "bot", text: reply },
    ]);

    setInput("");
  };

  /* ================================
     CONTACT NAVIGATION
  ================================= */
  const goContact = () => {
    setOpen(false);
    setInput("");
    navigate("/contact");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {/* =========================
          CHAT WINDOW
      ========================= */}
      {open && (
        <div className="w-80 rounded-2xl bg-black/90 shadow-xl border border-white/10 overflow-hidden">

          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <div className="text-white font-semibold text-sm">
              Jubilee Assistant ✦
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div
            ref={listRef}
            className="h-72 overflow-y-auto px-4 py-3 space-y-3"
          >
            {messages.map((m, i) => (
              <MessageBubble
                key={i}
                from={m.from}
                text={m.text}
                onContactClick={goContact}
              />
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-white/10 p-3">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Type your question..."
                className="flex-1 rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-sm text-white outline-none"
              />
              <button
                onClick={send}
                className="bg-brand-700 hover:bg-brand-800 text-white px-3 py-2 rounded-xl"
              >
                <Send size={16} />
              </button>
            </div>

            {/* Quick actions */}
            <div className="flex gap-2 mt-2 flex-wrap">

             


            </div>
          </div>
        </div>
      )}

      {/* =========================
          LAUNCH BUTTON
      ========================= */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-brand-700 hover:bg-brand-800 text-white px-4 py-3 rounded-2xl flex items-center gap-2 shadow-lg"
      >
        <MessageCircle size={18} />
        Chat
      </button>
    </div>
  );
}
