"use client";

import { useState } from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import PromoCarousel from "@/components/PromoCarousel";
import Banner from "@/components/Banner";
import NavTabs from "@/components/NavTabs";
import CategorySection from "@/components/CategorySection";
import Tabbar from "@/components/Tabbar";
import DesktopHeader from "@/components/DesktopHeader";
import CartSidebar from "@/components/CartSidebar";
import StoriesPanel from "@/components/StoriesPanel";
import { categorySections } from "@/data/categories";

export default function Home() {
  const [showCarousel, setShowCarousel] = useState(true);

  return (
    <div className="h-screen md:overflow-hidden bg-white flex flex-col">

      {/* ── Desktop header (≥768px) — sticky ── */}
      <div className="hidden md:block sticky top-0 z-50">
        <DesktopHeader />
      </div>

      {/* ── Mobile header (<768px) ── */}
      <div className="md:hidden sticky top-0 z-40 bg-white">
        <Header />
        <SearchBar />
      </div>

      {/* ── Desktop layout (≥768px) ── */}
      <div className="hidden md:flex flex-1 overflow-y-auto" style={{ minHeight: 0 }}>
        <div
          className="flex flex-1 mx-auto w-full"
          style={{ padding: "18px 170px 40px", gap: 50 }}
        >
          {/* Main column: carousel+stories + products */}
          <div className="flex-1 min-w-0 flex flex-col" style={{ gap: 20 }}>

            {/* Carousel + Stories */}
            <div className="flex" style={{ gap: 16 }}>
              {/* Carousel takes remaining width after 358px stories */}
              <div className="flex-1 min-w-0">
                <PromoCarousel desktop onClose={() => setShowCarousel(false)} />
              </div>
              <StoriesPanel />
            </div>

            {/* Nav tabs + products */}
            <NavTabs />
            <div className="flex flex-col" style={{ gap: 20 }}>
              {categorySections.map((section) => (
                <CategorySection key={section.title} section={section} />
              ))}
            </div>
          </div>

          {/* Cart sidebar — sticky, 380px */}
          <CartSidebar />
        </div>
      </div>

      {/* ── Mobile layout (<768px) ── */}
      <main className="md:hidden flex-1 pb-[90px] overflow-x-hidden">
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

      {/* ── Mobile tabbar (<768px) ── */}
      <div className="md:hidden">
        <Tabbar />
      </div>
    </div>
  );
}
