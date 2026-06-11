import type { CategorySection as CategorySectionType } from "@/data/categories";
import CategoryCard from "./CategoryCard";

interface Props {
  section: CategorySectionType;
}

export default function CategorySection({ section }: Props) {
  const hasWide = section.cards.some((c) => c.wide);

  return (
    <div className="flex flex-col gap-2.5">
      <h2 className="text-[18px] leading-6 font-semibold text-black">
        {section.title}
      </h2>
      {hasWide ? (
        // Mixed layout: wide (2-col) + square (1-col) cards
        <div className="grid grid-cols-3 md:grid-cols-4 gap-2 auto-rows-[109px] md:auto-rows-[140px]">
          {section.cards.map((card) => (
            <CategoryCard key={card.label} {...card} />
          ))}
        </div>
      ) : (
        // Equal columns layout
        <div className="grid grid-cols-3 md:grid-cols-4 gap-2 auto-rows-[109px] md:auto-rows-[140px]">
          {section.cards.map((card) => (
            <CategoryCard key={card.label} {...card} />
          ))}
        </div>
      )}
    </div>
  );
}
