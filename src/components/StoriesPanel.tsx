"use client";

import { useState } from "react";

const STORIES = [
  { title: "Всё для вкусного завтрака",  bg: "linear-gradient(160deg,#1a0f05 0%,#3d1f0a 50%,#1a0f05 100%)" },
  { title: "Свежие овощи и фрукты",       bg: "linear-gradient(160deg,#0a1f0a 0%,#1a3d0a 50%,#0a1f0a 100%)" },
  { title: "Доставка за 30 минут",        bg: "linear-gradient(160deg,#05101f 0%,#0a2040 50%,#05101f 100%)" },
];

export default function StoriesPanel() {
  const [idx, setIdx] = useState(0);
  const story = STORIES[idx];

  return (
    <div
      className="shrink-0 rounded-[20px] overflow-hidden flex flex-col relative"
      style={{ width: 358, height: 500, background: story.bg }}
    >
      {/* Overlay */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(0,0,0,0.55) 0%,rgba(0,0,0,0.1) 50%,rgba(0,0,0,0.35) 100%)" }} />

      {/* Title */}
      <div className="absolute top-6 left-6 right-16">
        <h2 className="text-white font-semibold leading-snug" style={{ fontSize: 28 }}>
          {story.title}
        </h2>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-6 flex gap-1.5">
        {STORIES.map((_, i) => (
          <div
            key={i}
            className="rounded-full transition-all"
            style={{ width: i === idx ? 20 : 6, height: 6, backgroundColor: "rgba(255,255,255," + (i === idx ? "1" : "0.4") + ")" }}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <div className="absolute right-4 bottom-6 flex flex-col gap-2">
        <button
          className="flex items-center justify-center rounded-full bg-white/90"
          style={{ width: 40, height: 40 }}
          onClick={() => setIdx((idx - 1 + STORIES.length) % STORIES.length)}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M12 10L8 6l-4 4" stroke="#15252b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          className="flex items-center justify-center rounded-full bg-white/90"
          style={{ width: 40, height: 40 }}
          onClick={() => setIdx((idx + 1) % STORIES.length)}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="#15252b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
