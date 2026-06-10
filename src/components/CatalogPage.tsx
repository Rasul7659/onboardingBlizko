"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Tabbar from "./Tabbar";

// ─── Icons ──────────────────────────────────────────────────────────────────

const BackIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M15 18L9 12L15 6" stroke="#15252B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PlusIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M0 12C0 5.37258 5.37258 0 12 0H20C26.6274 0 32 5.37258 32 12V20C32 26.6274 26.6274 32 20 32H12C5.37258 32 0 26.6274 0 20V12Z" fill="white"/>
    <path d="M16 8.25C16.4142 8.25 16.75 8.58579 16.75 9V15.25H23C23.4142 15.25 23.75 15.5858 23.75 16C23.75 16.4142 23.4142 16.75 23 16.75H16.75V23C16.75 23.4142 16.4142 23.75 16 23.75C15.5858 23.75 15.25 23.4142 15.25 23V16.75H9C8.58579 16.75 8.25 16.4142 8.25 16C8.25 15.5858 8.58579 15.25 9 15.25H15.25V9C15.25 8.58579 15.5858 8.25 16 8.25Z" fill="#15252B"/>
  </svg>
);

// ─── Types ───────────────────────────────────────────────────────────────────

interface Product {
  name: string;
  volume: string;
  price: number;
  oldPrice: number | null;
  badges: string[];
  bg: string;
}

// ─── Mock data ────────────────────────────────────────────────────────────────

const SECTIONS: { title: string; products: Product[] }[] = [
  {
    title: "Кефир",
    products: [
      { name: "Кефир 2,5% Новая деревня", volume: "900 мл", price: 119, oldPrice: 203, badges: ["близко", "новинка"], bg: "#dff0e8" },
      { name: "Кефир 3,2% Простоквашино", volume: "930 мл", price: 89, oldPrice: null, badges: ["близко"], bg: "#dde8f4" },
      { name: "Кефир 1% Домик в деревне", volume: "950 мл", price: 79, oldPrice: null, badges: [], bg: "#f4dde0" },
    ],
  },
  {
    title: "Молоко",
    products: [
      { name: "Молоко 3,2% Простоквашино", volume: "1 л", price: 89, oldPrice: null, badges: ["близко"], bg: "#f4f0dd" },
      { name: "Молоко 2,5% Домик в деревне", volume: "1 л", price: 95, oldPrice: 120, badges: [], bg: "#ddf0f4" },
      { name: "Молоко отборное 3,4% ВкусВилл", volume: "1 л", price: 129, oldPrice: null, badges: ["новинка"], bg: "#ecddf4" },
    ],
  },
  {
    title: "Сметана",
    products: [
      { name: "Сметана 15% Простоквашино", volume: "300 г", price: 69, oldPrice: null, badges: ["близко"], bg: "#fdf0d8" },
      { name: "Сметана 20% Домик в деревне", volume: "315 г", price: 85, oldPrice: 99, badges: [], bg: "#e8f4e0" },
      { name: "Сметана 25% ВкусВилл", volume: "200 г", price: 79, oldPrice: null, badges: [], bg: "#f4e0e8" },
    ],
  },
];

const TAGS = ["Молоко", "Масло, маргарин", "Сливки", "Сметана", "Творог", "Йогурты"];

// ─── ProductCard ──────────────────────────────────────────────────────────────

function ProductCard({ product }: { product: Product }) {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col gap-1.5">
      {/* Image area */}
      <div className="rounded-2xl overflow-hidden relative" style={{ height: 114, backgroundColor: "#f8f9fa" }}>
        <div className="absolute inset-0 rounded-2xl opacity-70" style={{ backgroundColor: product.bg }} />

        {/* Badges */}
        <div className="absolute left-1.5 flex flex-col gap-px" style={{ bottom: 6 }}>
          {product.badges.includes("близко") && (
            <div className="bg-[#00b0b8] border border-white rounded-full px-1 flex items-center justify-center" style={{ height: 18 }}>
              <span className="text-[11px] leading-none text-white">близко</span>
            </div>
          )}
          {product.badges.includes("новинка") && (
            <div className="bg-[#fa405a] border border-white rounded-full px-1 flex items-center justify-center" style={{ height: 18 }}>
              <span className="text-[11px] leading-none text-white">новинка</span>
            </div>
          )}
        </div>

        {/* Add / counter button */}
        <div className="absolute bottom-1.5 right-1.5">
          {count === 0 ? (
            <button onClick={() => setCount(1)}>
              <PlusIcon />
            </button>
          ) : (
            <div className="bg-[#15252b] rounded-xl flex items-center justify-between px-1" style={{ height: 32, minWidth: 80 }}>
              <button
                className="w-6 h-6 flex items-center justify-center text-white text-lg"
                onClick={() => setCount(Math.max(0, count - 1))}
              >
                −
              </button>
              <span className="text-[14px] font-medium text-white">{count}</span>
              <button
                className="w-6 h-6 flex items-center justify-center text-white text-lg"
                onClick={() => setCount(count + 1)}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-0.5">
        <div className="flex items-baseline gap-1 flex-wrap">
          <span className="text-[14px] font-medium leading-[18px] text-[#ff2c00]">{product.price} ₽</span>
          {product.oldPrice && (
            <span className="text-[12px] leading-4 text-black/48 line-through">{product.oldPrice} ₽</span>
          )}
        </div>
        <p className="text-[12px] leading-4 text-[#15252b] line-clamp-2">{product.name}</p>
        <span className="text-[12px] font-medium leading-4 text-black/26">{product.volume}</span>
      </div>
    </div>
  );
}

// ─── CatalogPage ──────────────────────────────────────────────────────────────

export default function CatalogPage() {
  const [activeTag, setActiveTag] = useState(0);

  return (
    <div className="min-h-screen flex justify-center bg-[#f2f3f7]">
      <div className="relative w-full max-w-[390px] bg-white min-h-screen flex flex-col">

        {/* Sticky header */}
        <div className="sticky top-0 z-40 bg-white">
          <Header />
          <SearchBar />

          {/* Category nav bar */}
          <div className="flex items-center justify-between px-4 bg-white border-b border-[#e2e5eb]" style={{ height: 44 }}>
            <Link href="/" className="flex items-center justify-center w-8 h-8 shrink-0">
              <BackIcon />
            </Link>
            <span className="text-[18px] font-medium text-[#15252b] truncate mx-2">Молочный прилавок</span>
            <div className="w-8 h-8 shrink-0" />
          </div>

          {/* Filter tags */}
          <div className="flex gap-1.5 px-4 py-3 overflow-x-auto scrollbar-hide bg-white">
            {TAGS.map((tag, i) => (
              <button
                key={tag}
                onClick={() => setActiveTag(i)}
                className="shrink-0 h-8 px-3 rounded-full border text-[14px] leading-none transition-colors"
                style={{
                  backgroundColor: activeTag === i ? "#15252b" : "white",
                  color: activeTag === i ? "white" : "#15252b",
                  borderColor: activeTag === i ? "#15252b" : "#e2e5eb",
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable product list */}
        <main className="flex-1 pb-[90px] overflow-x-hidden">
          {SECTIONS.map((section, si) => (
            <div key={section.title}>
              {si > 0 && <div className="h-px bg-[#f2f3f7] mx-4" />}
              <div className="px-4 pt-4 pb-5 flex flex-col gap-3">
                <h3 className="text-[18px] font-medium text-[#15252b]">{section.title}</h3>
                <div className="grid grid-cols-3 gap-2">
                  {section.products.map(p => (
                    <ProductCard key={p.name} product={p} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </main>

        <Tabbar />
      </div>
    </div>
  );
}
