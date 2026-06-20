import React, { useState, useRef } from "react";
import { Lock, ShieldCheck, ArrowRight } from "lucide-react";

const SITE_PASSWORD = "ik804";

export default function PasswordGate({ children }) {
  const [unlocked, setUnlocked] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.trim() === SITE_PASSWORD) {
      setUnlocked(true);
      return;
    }

    setError(true);
    setShake(true);
    setValue("");
    inputRef.current?.focus();
    setTimeout(() => setShake(false), 420);
  };

  if (unlocked) return children;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-[#070b16]">
      {/* Ambient background, echoing the site's hero gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1024] via-[#0d1530] to-[#050813]" />
        <div className="absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute -bottom-40 -right-24 h-[32rem] w-[32rem] rounded-full bg-indigo-500/15 blur-[130px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      {/* Card */}
      <div
        className={[
          "relative z-10 mx-4 w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-2xl shadow-[0_8px_60px_-10px_rgba(0,0,40,0.8)] sm:p-10",
          shake ? "animate-[shakeX_0.42s_ease-in-out]" : "",
        ].join(" ")}
      >
        <style>{`
          @keyframes shakeX {
            0%, 100% { transform: translateX(0); }
            20% { transform: translateX(-8px); }
            40% { transform: translateX(7px); }
            60% { transform: translateX(-5px); }
            80% { transform: translateX(3px); }
          }
        `}</style>

        {/* Badge, matching the hero pill style */}
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-white/80">
          <ShieldCheck size={14} className="text-blue-300" />
          Launching soon
        </div>

        <h1 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
          Jubilee Apparel is getting ready.
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-white/60 sm:text-base">
          We&apos;re putting the final touches on our new site. If you have
          access, enter the password below to preview it before we go live.
        </p>

        <form onSubmit={handleSubmit} className="mt-8">
          <label
            htmlFor="site-password"
            className="mb-2 block text-xs font-semibold uppercase tracking-widest text-white/40"
          >
            Access password
          </label>

          <div
            className={[
              "flex items-center gap-3 rounded-2xl border bg-white/5 px-4 py-3.5 transition",
              error
                ? "border-red-400/60 bg-red-500/5"
                : "border-white/15 focus-within:border-blue-400/60",
            ].join(" ")}
          >
            <Lock
              size={18}
              className={error ? "text-red-300" : "text-white/40"}
            />
            <input
              ref={inputRef}
              id="site-password"
              type="password"
              autoFocus
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                if (error) setError(false);
              }}
              placeholder="Enter password"
              className="w-full bg-transparent text-sm text-white placeholder-white/30 outline-none sm:text-base"
            />
          </div>

          {error && (
            <p className="mt-2 text-xs font-medium text-red-300">
              That password isn&apos;t right. Please try again.
            </p>
          )}

          <button
            type="submit"
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500 sm:text-base"
          >
            Enter site
            <ArrowRight size={16} />
          </button>
        </form>

        <p className="mt-7 text-center text-xs text-white/30">
          Jubilee Apparel Private Limited &middot; OEM Manufacturing
        </p>
      </div>
    </div>
  );
}
