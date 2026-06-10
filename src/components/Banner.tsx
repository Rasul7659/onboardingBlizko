"use client";

import { useState, useEffect } from "react";

const STORY_BG_COLORS = ["#2a1f1a", "#1a2a1f", "#1a1a2a"];

const stories = [
  { text: "Всё для вкусного завтрака",     bg: STORY_BG_COLORS[0] },
  { text: "Всё для вкусного ужина — в один клик", bg: STORY_BG_COLORS[1] },
  { text: "Салат на скорую руку",          bg: STORY_BG_COLORS[2] },
];

const WALLET_ICON = (
  <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.8368 1.22082C18.3689 1.08187 19.7619 1.72731 20.368 2.85754C21.3927 4.76844 21.59 5.25462 21.6483 6.96204C21.0461 6.44394 20.2912 6.07355 19.4481 5.91809C15.9301 5.26965 8.06931 5.2696 4.55161 5.91809C3.72684 6.07019 2.98704 6.42836 2.39146 6.92883C2.61104 5.87023 3.43686 4.90534 4.62388 4.38098C7.38538 3.16137 13.83 1.49372 16.8368 1.22082Z" fill="#15252B"/>
    <path d="M5.27011 7.0782C8.4487 6.52157 15.5516 6.52157 18.7302 7.0782C20.35 7.36192 21.6161 8.4704 21.94 9.88869C22.5758 12.6718 22.5758 15.5378 21.94 18.321C21.616 19.7392 20.35 20.8477 18.7302 21.1315C15.5516 21.6881 8.4487 21.6881 5.27011 21.1315C3.6503 20.8478 2.38432 19.7392 2.06029 18.321C1.42457 15.5378 1.42457 12.6718 2.06029 9.88869C2.38428 8.47038 3.65028 7.36189 5.27011 7.0782ZM17.5876 13.5882C16.7684 13.5882 16.1038 14.0954 16.1038 14.7205C16.104 15.3454 16.7685 15.8519 17.5876 15.8519H17.9916C18.8106 15.8519 19.4752 15.3454 19.4754 14.7205C19.4754 14.0954 18.8108 13.5882 17.9916 13.5882H17.5876Z" fill="#15252B"/>
  </svg>
);

function StoriesSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive(p => (p + 1) % stories.length);
    }, 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ display: "flex", gap: 5, alignItems: "center", flexShrink: 0 }}>
      <div style={{ width: 167, height: 234, borderRadius: 20, overflow: "hidden", position: "relative", flexShrink: 0 }}>
        <div style={{
          position: "absolute",
          top: 0, left: 0,
          width: "100%",
          height: `${stories.length * 100}%`,
          transform: `translateY(-${(active / stories.length) * 100}%)`,
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        }}>
          {stories.map((story, i) => (
            <div key={i} style={{
              width: "100%",
              height: `${100 / stories.length}%`,
              backgroundColor: story.bg,
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(180deg, rgba(21,37,43,0.6) 0%, rgba(21,37,43,0) 50%)",
                display: "flex", alignItems: "flex-start",
                padding: 10,
              }}>
                <p style={{
                  color: "white",
                  fontSize: 14,
                  lineHeight: "18px",
                  fontFamily: "'PP Right Grotesk', 'Arial Black', system-ui, sans-serif",
                  letterSpacing: "0.28px",
                }}>
                  {story.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination dots */}
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {stories.map((_, i) => (
          <div key={i} style={{
            width: 3, height: 3,
            borderRadius: "50%",
            backgroundColor: i === active ? "#15252b" : "rgba(0,0,0,0.16)",
            transition: "background-color 0.3s",
          }} />
        ))}
      </div>
    </div>
  );
}

export default function Banner() {
  return (
    <div style={{ padding: "0 16px 16px", display: "flex", gap: 8, alignItems: "center" }}>
      {/* Left column: two stacked cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8, height: 234, flex: 1 }}>
        {/* Top card: tips */}
        <div style={{
          flex: 1,
          backgroundColor: "#f2f3f7",
          borderRadius: 20,
          overflow: "hidden",
          position: "relative",
        }}>
          <p style={{
            position: "absolute", top: 12, left: 12, right: 12,
            fontSize: 12, lineHeight: "17px", fontWeight: 500, color: "#000",
          }}>
            Поддержите курьера чаевыми
          </p>
          <div style={{
            position: "absolute", top: 76, left: 12,
            backgroundColor: "#fa405a",
            borderRadius: 20,
            padding: "4px 6px",
          }}>
            <p style={{ fontSize: 12, lineHeight: "17px", fontWeight: 500, color: "white", whiteSpace: "nowrap" }}>
              NEW
            </p>
          </div>
          <div style={{ position: "absolute", bottom: 12, right: 12 }}>
            {WALLET_ICON}
          </div>
        </div>

        {/* Bottom card: yogurts */}
        <div style={{
          flex: 1,
          backgroundColor: "#d9ecff",
          borderRadius: 20,
          overflow: "hidden",
          position: "relative",
        }}>
          <p style={{
            position: "absolute", top: 12, left: 12,
            fontSize: 12, lineHeight: "17px", fontWeight: 500, color: "#000",
            whiteSpace: "nowrap",
          }}>
            Йогурты и десерты
          </p>
        </div>
      </div>

      {/* Right column: stories slider */}
      <StoriesSlider />
    </div>
  );
}
