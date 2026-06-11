export default function CartSidebar() {
  return (
    <div
      className="hidden xl:flex flex-col bg-white border-l border-[#e2e5eb] shrink-0"
      style={{ width: 380, height: "calc(100vh - 90px)", position: "sticky", top: 90 }}
    >
      {/* Address */}
      <div className="px-6 pt-5 pb-4 border-b border-[#e2e5eb]">
        <button className="flex items-center gap-1.5">
          <span className="text-[17px] font-medium text-[#15252b]">Укажите адрес</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 5l4 4 4-4" stroke="#15252b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <span className="text-[14px] text-black/40 mt-0.5 block">г.Махачкала</span>
      </div>

      {/* Empty state */}
      <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6">
        {/* Mascot — cat emoji placeholder */}
        <div className="text-[72px] leading-none select-none" style={{ filter: "grayscale(0)" }}>🐱</div>
        <p className="text-[14px] text-center leading-[20px] text-[#15252b]">
          Ломтик ждет пока<br />вы добавите товары
        </p>
      </div>

      {/* Cart footer */}
      <div
        className="flex items-center justify-between px-6 bg-white border-t border-[#e2e5eb]"
        style={{ height: 54 }}
      >
        <span className="text-[14px] text-black/40">Добавьте товар в корзину</span>
        <span className="text-[15px] font-semibold text-[#15252b]">0 ₽</span>
      </div>
    </div>
  );
}
