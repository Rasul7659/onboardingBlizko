import type { CategoryCard as CategoryCardType } from "@/data/categories";
import Image from "next/image";

interface Props extends CategoryCardType {
  className?: string;
}

export default function CategoryCard({ label, image, bg, wide, className }: Props) {
  return (
    <button
      className={`relative overflow-hidden rounded-[20px] h-[109px] p-3 flex flex-col items-start ${
        wide ? "col-span-2" : "col-span-1"
      } ${className ?? ""}`}
      style={{ backgroundColor: bg }}
    >
      <Image
        src={image}
        alt={label}
        fill
        className="object-cover rounded-[20px]"
        unoptimized
      />
      <span className="relative z-10 text-[12px] leading-[17px] font-medium text-black line-clamp-2 max-w-[85px]">
        {label}
      </span>
    </button>
  );
}
