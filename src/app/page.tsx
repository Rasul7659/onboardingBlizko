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
    <div className="min-h-screen bg-white flex flex-col">

      {/* ── Desktop header (≥768px) ── */}
      <div className="hidden md:block">
        <DesktopHeader />
      </div>

      {/* ── Mobile header (< 768px) ── */}
      <div className="md:hidden sticky top-0 z-40 bg-white">
        <Header />
        <SearchBar />
      </div>

      {/* ── Desktop layout (≥768px) ── */}
      <div className="hidden md:flex flex-1" style={{ minHeight: 0 }}>
        {/* Main content */}
        <div className="flex-1 overflow-y-auto">
          <div className="mx-auto" style={{ maxWidth: 1580, padding: "18px 40px 40px" }}>

            {/* Carousel + Stories */}
            <div className="flex gap-4 mb-5">
              <div className="flex-1 min-w-0">
                <PromoCarousel desktop onClose={() => setShowCarousel(false)} />
              </div>
              <StoriesPanel />
            </div>

            {/* Product sections */}
            <NavTabs />
            <div className="bg-white flex flex-col gap-5 pt-4">
              {categorySections.map((section) => (
                <CategorySection key={section.title} section={section} />
              ))}
            </div>
          </div>
        </div>

        {/* Cart sidebar */}
        <CartSidebar />
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
