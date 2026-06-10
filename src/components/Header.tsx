export default function Header() {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white">
      <div className="flex flex-col gap-0.5 flex-1 min-w-0 max-w-[309px]">
        <div className="flex items-center gap-0.5">
          <span className="text-[16px] leading-[22px] text-[#15252b] font-normal truncate">
            Указать адрес
          </span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0 ml-0.5">
            <path d="M4.5 3L7.5 6L4.5 9" stroke="#15252b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="text-[12px] leading-[16px] text-black/48 font-normal">
          с 9:00 до 22:00
        </span>
      </div>
      <button className="shrink-0 w-6 h-6 flex items-center justify-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 17H18C18.7956 17 19.5587 16.6839 20.1213 16.1213C20.6839 15.5587 21 14.7956 21 14V6C21 5.20435 20.6839 4.44129 20.1213 3.87868C19.5587 3.31607 18.7956 3 18 3H6C5.20435 3 4.44129 3.31607 3.87868 3.87868C3.31607 4.44129 3 5.20435 3 6V14C3 14.7956 3.31607 15.5587 3.87868 16.1213C4.44129 16.6839 5.20435 17 6 17H8V21L13 17Z" stroke="#15252B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}
