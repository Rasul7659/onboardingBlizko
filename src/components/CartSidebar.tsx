export default function CartSidebar() {
  return (
    <div
      className="shrink-0 flex flex-col bg-white"
      style={{ width: 380, height: "calc(100vh - 90px)", position: "sticky", top: 90 }}
    >
      {/* Address */}
      <div style={{ paddingTop: 24 }}>
        <button className="flex items-center" style={{ gap: 6 }}>
          <span style={{ fontSize: 24, fontWeight: 600, color: "#15252b", fontFamily: "Inter, system-ui, sans-serif" }}>
            Укажите адрес
          </span>
          <svg width="12" height="8" viewBox="0 0 12 7" fill="none">
            <path d="M1 1L6 6L11 1" stroke="#15252b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <p style={{ fontSize: 12, fontWeight: 400, color: "#000", fontFamily: "Inter, system-ui, sans-serif", marginTop: 6 }}>
          г.Махачкала
        </p>
      </div>

      {/* Mascot + empty text */}
      <div className="flex-1 flex flex-col items-center justify-center" style={{ gap: 12 }}>
        {/* Mascot placeholder — black cat with teal glasses emoji */}
        <div style={{ width: 120, height: 168, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 80 }}>
          🐱
        </div>
        <p style={{
          fontSize: 16, fontWeight: 400, color: "#15252b",
          fontFamily: "Inter, system-ui, sans-serif",
          textAlign: "center", lineHeight: "22px",
        }}>
          Ломтик ждет пока<br />вы добавите товары
        </p>
      </div>

      {/* Footer */}
      <div
        className="flex items-center justify-between shrink-0"
        style={{
          height: 54, padding: "0 16px",
          backgroundColor: "#f2f3f7",
          borderRadius: 16,
          margin: "0 0 0 0",
        }}
      >
        <span style={{ fontSize: 18, fontWeight: 500, color: "#15252b", fontFamily: "'PP Right Grotesk', 'Arial', system-ui, sans-serif" }}>
          Добавьте товар в корзину
        </span>
        <span style={{ fontSize: 18, fontWeight: 500, color: "#15252b", fontFamily: "'PP Right Grotesk', 'Arial', system-ui, sans-serif" }}>
          0 ₽
        </span>
      </div>
    </div>
  );
}
