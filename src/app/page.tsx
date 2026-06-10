"use client";

import { useState } from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import PromoCarousel from "@/components/PromoCarousel";
import Banner from "@/components/Banner";
import NavTabs from "@/components/NavTabs";
import CategorySection from "@/components/CategorySection";
import Tabbar from "@/components/Tabbar";
import { categorySections } from "@/data/categories";

export default function Home() {
  const [showCarousel, setShowCarousel] = useState(true);

  return (
    <div className="min-h-screen flex justify-center bg-[#f2f3f7]">
      <div className="relative w-full max-w-[390px] bg-white min-h-screen flex flex-col">
        {/* Sticky header */}
        <div className="sticky top-0 z-40 bg-white">
          <Header />
          <SearchBar />
        </div>

        {/* Scrollable content */}
        <main className="flex-1 pb-[90px] overflow-x-hidden">
          {showCarousel ? (
            <PromoCarousel onClose={() => setShowCarousel(false)} />
          ) : (
            <Banner />
          )}
          <NavTabs />
          <div className="bg-white px-4 pt-4 pb-6 flex flex-col gap-5">
            {categorySections.map((section) => (
              <CategorySection key={section.title} section={section} />
            ))}
          </div>
        </main>

        <Tabbar />
      </div>
    </div>
  );
}
