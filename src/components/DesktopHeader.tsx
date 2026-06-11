"use client";

import Link from "next/link";

// ─── SVG icon components with exact Figma paths ──────────────────────────────

const CatalogIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path
      fillRule="evenodd" clipRule="evenodd"
      d="M6.288 0.121C4.846-0.04 3.357-0.04 1.916 0.121 0.988 0.224 0.239 0.955 0.129 1.889c-0.172 1.474-0.172 2.963 0 4.437 0.109 0.935 0.859 1.665 1.786 1.769 1.441 0.161 2.931 0.161 4.372 0 0.927-0.104 1.677-0.834 1.786-1.769 0.172-1.474 0.172-2.963 0-4.437C7.964 0.955 7.215 0.224 6.288 0.121zM6.288 9.676C4.846 9.515 3.357 9.515 1.916 9.676 0.988 9.78 0.239 10.51 0.129 11.445c-0.172 1.474-0.172 2.963 0 4.437 0.109 0.935 0.859 1.665 1.786 1.769 1.441 0.161 2.931 0.161 4.372 0 0.927-0.104 1.677-0.834 1.786-1.769 0.172-1.474 0.172-2.963 0-4.437C7.964 10.51 7.215 9.78 6.288 9.676zM15.843 0.121C14.402-0.04 12.912-0.04 11.471 0.121 10.544 0.224 9.794 0.955 9.685 1.889c-0.172 1.474-0.172 2.963 0 4.437 0.109 0.935 0.859 1.665 1.786 1.769 1.441 0.161 2.931 0.161 4.372 0 0.927-0.104 1.677-0.834 1.786-1.769 0.172-1.474 0.172-2.963 0-4.437C17.52 0.955 16.77 0.224 15.843 0.121zM15.843 9.676C14.402 9.515 12.912 9.515 11.471 9.676 10.544 9.78 9.794 10.51 9.685 11.445c-0.172 1.474-0.172 2.963 0 4.437 0.109 0.935 0.859 1.665 1.786 1.769 1.441 0.161 2.931 0.161 4.372 0 0.927-0.104 1.677-0.834 1.786-1.769 0.172-1.474 0.172-2.963 0-4.437C17.52 10.51 16.77 9.78 15.843 9.676z"
      fill="white"
    />
  </svg>
);

const OrdersIcon = () => (
  <svg width="20" height="21" viewBox="0 0 20 21" fill="none">
    <path fillRule="evenodd" clipRule="evenodd"
      d="M9.271 0.612C9.271 0.265 8.985-0.015 8.639 0.001 7.685 0.042 6.733 0.128 5.785 0.258L4.222 0.473C3.605 0.557 3.073 0.945 2.803 1.506L1.361 4.502C0.943 5.37 1.634 6.361 2.593 6.268L7.011 5.841C7.362 5.807 7.713 5.779 8.064 5.757 8.735 5.715 9.271 5.169 9.271 4.498L9.271 0.612zM10.816 0.617C10.816 0.269 11.103-0.011 11.45 0.006 12.366 0.049 13.281 0.133 14.191 0.258L15.755 0.473C16.371 0.557 16.903 0.945 17.173 1.506L18.616 4.502C19.034 5.37 18.342 6.361 17.383 6.268L12.965 5.841C12.65 5.81 12.334 5.785 12.018 5.764 11.35 5.72 10.816 5.175 10.816 4.505L10.816 0.617zM0.155 11.111L0.213 10.542C0.36 9.075 1.524 7.916 2.992 7.775L7.086 7.382C9.052 7.193 11.032 7.193 12.998 7.382L17.092 7.775C18.56 7.916 19.723 9.075 19.871 10.542L19.928 11.111C20.136 13.169 20.136 15.242 19.928 17.3L19.871 17.869C19.723 19.336 18.56 20.495 17.092 20.636L12.998 21.029C11.032 21.218 9.052 21.218 7.086 21.029L2.992 20.636C1.524 20.495 0.36 19.336 0.213 17.869L0.155 17.3C-0.052 15.242-0.052 13.169 0.155 11.111zM5.236 18.223C5.758 18.223 6.181 17.808 6.181 17.296 6.181 16.784 5.758 16.369 5.236 16.369L3.726 16.369C3.204 16.369 2.781 16.784 2.781 17.296 2.781 17.808 3.204 18.223 3.726 18.223L5.236 18.223z"
      fill="#15252B"
    />
  </svg>
);

const HeartIcon = () => (
  <svg width="24" height="20" viewBox="0 0 24 20" fill="none">
    <path fillRule="evenodd" clipRule="evenodd"
      d="M11.232 19.939C8.781 19.572 5.854 17.565 3.488 14.349-0.169 9.378-1.1 3.4 1.41 0.998 3.79-1.28 8.41 0.476 12 4.903 15.59 0.476 20.21-1.28 22.59 0.998 25.1 3.4 24.169 9.378 20.512 14.349 18.146 17.565 15.219 19.572 12.768 19.939 12.52 19.981 12.264 20.001 12 20 11.736 20.001 11.48 19.981 11.232 19.939z"
      fill="#15252B"
    />
  </svg>
);

const BellIcon = () => (
  <svg width="21" height="24" viewBox="0 0 21 24" fill="none">
    <path
      d="M18.575 11.078C18.575 12.031 18.954 12.945 19.628 13.619L19.948 13.939C20.603 14.596 20.972 15.487 20.972 16.415L20.955 16.758C20.783 18.452 19.353 19.773 17.614 19.773L15.518 19.773C14.863 19.773 14.339 20.292 14.101 20.902C13.908 21.396 13.614 21.85 13.231 22.232C12.503 22.96 11.515 23.369 10.486 23.368C9.456 23.369 8.469 22.961 7.741 22.234C7.358 21.851 7.064 21.397 6.871 20.902C6.633 20.292 6.109 19.773 5.454 19.773L3.359 19.773C2.468 19.773 1.614 19.419 0.984 18.789 0.354 18.16 0 17.305 0 16.415L0.018 16.068C0.098 15.267 0.451 14.514 1.025 13.939L1.344 13.619C2.018 12.945 2.397 12.031 2.397 11.078L2.397 8.09C2.397 3.622 6.018 0 10.486 0 14.953 0 18.575 3.622 18.575 8.09L18.575 11.078z"
      fill="#15252B"
    />
  </svg>
);

const ProfileIcon = () => (
  <svg width="21" height="23" viewBox="0 0 21 23" fill="none">
    <path fillRule="evenodd" clipRule="evenodd"
      d="M4.403 6.266C4.403 2.805 7.133 0 10.5 0 13.867 0 16.597 2.805 16.597 6.266 16.597 9.727 13.867 12.532 10.5 12.532 7.133 12.532 4.403 9.727 4.403 6.266zM0 18.306C0 15.491 2.275 13.21 5.081 13.21L5.542 13.21C5.792 13.21 6.041 13.249 6.278 13.327L7.451 13.711C9.432 14.36 11.568 14.36 13.549 13.711L14.722 13.327C14.959 13.249 15.208 13.21 15.458 13.21L15.919 13.21C18.725 13.21 21 15.491 21 18.306L21 19.92C21 20.944 20.26 21.817 19.253 21.982 13.456 22.931 7.544 22.931 1.747 21.982 0.74 21.817 0 20.944 0 19.92L0 18.306z"
      fill="#15252B"
    />
  </svg>
);

const ChevronDown = () => (
  <svg width="9" height="6" viewBox="0 0 9 6" fill="none">
    <path d="M8.22 0.22C8.51-0.07 8.987-0.07 9.28 0.22 9.573 0.513 9.573 0.987 9.28 1.28L5.28 5.28C4.987 5.573 4.513 5.573 4.22 5.28L0.22 1.28C-0.073 0.987-0.073 0.513 0.22 0.22 0.513-0.073 0.987-0.073 1.28 0.22L4.75 3.689 8.22 0.22z"
      fill="#15252B"
    />
  </svg>
);

// ─── Badge ────────────────────────────────────────────────────────────────────

const Badge = ({ count }: { count: number }) => (
  <div
    className="absolute flex items-center justify-center"
    style={{
      top: -2, right: -2,
      minWidth: 16, height: 16,
      backgroundColor: "#ff2c00",
      borderRadius: 24,
      padding: "1px 4px 0",
    }}
  >
    <span style={{ fontSize: 10, fontWeight: 700, color: "white", lineHeight: 1 }}>{count}</span>
  </div>
);

// ─── Logo ─────────────────────────────────────────────────────────────────────

const Logo05 = () => (
  <div
    className="flex items-center justify-center rounded-xl shrink-0"
    style={{ width: 35, height: 35, backgroundColor: "#15252b" }}
  >
    <span style={{ fontSize: 13, fontWeight: 700, color: "white", lineHeight: 1 }}>05</span>
  </div>
);

const BagIcon = () => (
  <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
    <path
      d="M7 11L5 8H3M7 11H28M7 11L9 25C9 25.5523 9.44772 26 10 26H25C25.5523 26 26 25.5523 26 25L28 11M13 16V20M17 15V21M21 16V20"
      stroke="#15252b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    />
    <circle cx="7" cy="28" r="1.5" fill="#15252b"/>
    <circle cx="27" cy="28" r="1.5" fill="#15252b"/>
  </svg>
);

// ─── Main component ───────────────────────────────────────────────────────────

export default function DesktopHeader() {
  const NAV = [
    { label: "Заказы",       icon: <OrdersIcon  />, badge: 0 },
    { label: "Избранное",    icon: <HeartIcon   />, badge: 2 },
    { label: "Уведомления",  icon: <BellIcon    />, badge: 2 },
    { label: "Профиль",      icon: <ProfileIcon />, badge: 0 },
  ];

  return (
    <header
      className="w-full bg-white border-b border-[#e2e5eb] shrink-0 flex items-center"
      style={{ height: 90, padding: "0 170px" }}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center shrink-0" style={{ gap: 6, marginRight: 38 }}>
        <Logo05 />
        <BagIcon />
        <span
          style={{
            fontSize: 22, fontWeight: 600, color: "#15252b",
            fontFamily: "Inter, system-ui, sans-serif",
            letterSpacing: "-0.3px",
          }}
        >
          Близко
        </span>
        <ChevronDown />
      </Link>

      {/* Catalog + Search */}
      <div className="flex items-center flex-1" style={{ gap: 10, height: 58 }}>
        {/* Catalog button */}
        <button
          className="shrink-0 flex items-center justify-center"
          style={{
            height: 56, padding: "0 16px", gap: 8,
            backgroundColor: "#00b0b8",
            borderRadius: 16,
            border: "none",
            cursor: "pointer",
          }}
        >
          <CatalogIcon />
          <span style={{
            fontSize: 18, fontWeight: 500, color: "white",
            fontFamily: "'PP Right Grotesk', 'Arial', system-ui, sans-serif",
            letterSpacing: "0.36px",
            whiteSpace: "nowrap",
          }}>
            Каталог
          </span>
        </button>

        {/* Search bar — teal outer, white inner input, icon at right */}
        <div
          className="flex-1 flex items-center"
          style={{
            backgroundColor: "#00b0b8",
            border: "2px solid #00b0b8",
            borderRadius: 12,
            gap: 24,
            padding: "2px 24px 2px 2px",
          }}
        >
          {/* White inner input */}
          <div
            className="flex-1 flex items-center"
            style={{
              backgroundColor: "white",
              borderRadius: 10,
              padding: "10px 24px",
            }}
          >
            <input
              className="flex-1 outline-none bg-transparent"
              style={{
                fontSize: 16, color: "#838383",
                fontFamily: "Inter, system-ui, sans-serif",
              }}
              placeholder="Урбеч из миндаля"
            />
          </div>
          {/* Search icon 24×24 on teal background */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
            <circle cx="11" cy="11" r="6.5" stroke="white" strokeWidth="1.8"/>
            <path d="M16.5 16.5L21 21" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Nav icons */}
      <div className="flex items-center shrink-0" style={{ gap: 8, marginLeft: 40 }}>
        {NAV.map(({ label, icon, badge }) => (
          <button
            key={label}
            className="flex flex-col items-center"
            style={{ width: label === "Уведомления" ? 93 : label === "Избранное" ? 75 : 70, height: 56, gap: 4, border: "none", background: "none", cursor: "pointer", padding: 0 }}
          >
            <div className="relative flex items-center justify-center" style={{ width: 30, height: 30, marginTop: 1 }}>
              {icon}
              {badge > 0 && <Badge count={badge} />}
            </div>
            <span style={{ fontSize: 14, fontWeight: 400, color: "#15252b", fontFamily: "Inter, system-ui, sans-serif", lineHeight: "20px" }}>
              {label}
            </span>
          </button>
        ))}
      </div>
    </header>
  );
}
