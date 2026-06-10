export default function SearchBar() {
  return (
    <div className="bg-white px-4 pt-2.5 pb-4">
      <div className="flex items-center gap-1.5 bg-[#f2f3f7] rounded-2xl h-12 px-3">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
          <circle cx="10.5" cy="10.5" r="5.5" stroke="rgba(0,0,0,0.48)" strokeWidth="1.5"/>
          <path d="M14.5 14.5L19 19" stroke="rgba(0,0,0,0.48)" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <span className="flex-1 text-[14px] leading-5 text-black/48 font-normal">
          Найти продукты
        </span>
      </div>
    </div>
  );
}
