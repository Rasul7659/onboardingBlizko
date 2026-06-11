"use client";

import Link from "next/link";

export default function DesktopHeader() {
  return (
    <header className="w-full bg-white border-b border-[#e2e5eb] shrink-0" style={{ height: 90 }}>
      <div
        className="h-full flex items-center gap-4 mx-auto"
        style={{ maxWidth: 1580, padding: "0 40px" }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0 mr-2">
          <div className="flex items-center justify-center rounded-xl bg-[#15252b]" style={{ width: 34, height: 34 }}>
            <span className="text-white text-[12px] font-bold leading-none">05</span>
          </div>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="#15252b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="3" y1="6" x2="21" y2="6" stroke="#15252b" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M16 10a4 4 0 01-8 0" stroke="#15252b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-[20px] font-semibold text-[#15252b]">Близко</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="#15252b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>

        {/* Каталог button */}
        <button
          className="shrink-0 flex items-center gap-2 rounded-2xl text-white font-medium"
          style={{ height: 58, padding: "0 20px", backgroundColor: "#00b0b8", fontSize: 16 }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect x="1" y="1" width="6" height="6" rx="1.5" fill="white"/>
            <rect x="11" y="1" width="6" height="6" rx="1.5" fill="white"/>
            <rect x="1" y="11" width="6" height="6" rx="1.5" fill="white"/>
            <rect x="11" y="11" width="6" height="6" rx="1.5" fill="white"/>
          </svg>
          Каталог
        </button>

        {/* Search bar */}
        <div
          className="flex-1 flex items-center rounded-2xl border-2 border-[#00b0b8]"
          style={{ height: 58, padding: "0 8px 0 20px" }}
        >
          <input
            className="flex-1 outline-none bg-transparent text-[16px] text-[#15252b] placeholder:text-black/30"
            placeholder="Урбеч из миндаля"
          />
          <button
            className="shrink-0 flex items-center justify-center rounded-xl bg-[#00b0b8]"
            style={{ width: 42, height: 42 }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="9" cy="9" r="6" stroke="white" strokeWidth="1.8"/>
              <path d="M14 14L18 18" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Nav icons */}
        <div className="flex items-center gap-6 shrink-0 ml-4">
          {[
            {
              label: "Заказы",
              badge: null,
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="3" stroke="#15252b" strokeWidth="1.5"/>
                  <path d="M8 10h8M8 14h5" stroke="#15252b" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              ),
            },
            {
              label: "Избранное",
              badge: 2,
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="#15252b" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
              ),
            },
            {
              label: "Уведомления",
              badge: 2,
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" stroke="#15252b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
            },
            {
              label: "Профиль",
              badge: null,
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="4" stroke="#15252b" strokeWidth="1.5"/>
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#15252b" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              ),
            },
          ].map(({ label, badge, icon }) => (
            <button key={label} className="flex flex-col items-center gap-1 relative cursor-pointer">
              <div className="relative">
                {icon}
                {badge && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#ff2c00] rounded-full flex items-center justify-center">
                    <span className="text-[10px] font-bold text-white leading-none">{badge}</span>
                  </div>
                )}
              </div>
              <span className="text-[12px] text-[#15252b]">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
