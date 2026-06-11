"use client";

import { useState, useRef, useEffect, useCallback } from "react";

// ─── Constants ───────────────────────────────────────────────────────────────

const SWIPE_THRESHOLD = 80;
const FLY_MS = 380;

// Card proportions derived from Figma (375px canvas, 16px side padding)
// front width = innerW, middle = front×(349/357), back = front×(340/357)
// height ≈ width × 0.681, top offsets ≈ innerW × (9/357) and (20/357)
const ASPECT = 243 / 357;
function buildDepths(vw: number) {
  const innerW = vw - 32; // 16px padding each side
  const fw = innerW;
  return [
    { width: Math.round(fw * (340 / 357)), height: Math.round(fw * (340 / 357) * ASPECT), top: 0 },
    { width: Math.round(fw * (349 / 357)), height: Math.round(fw * (349 / 357) * ASPECT), top: Math.round(fw * (9 / 357)) },
    { width: fw,                           height: Math.round(fw * ASPECT),                top: Math.round(fw * (20 / 357)) },
  ] as const;
}

type Phase = "idle" | "dragging" | "fly-left" | "fly-right";

// Fresh Figma asset URLs (valid ~7 days from 2026-06-10)
const IMG_LINE = "https://www.figma.com/api/mcp/asset/9b4714e8-4c4b-45bd-85a3-9947014ed59c";
const IMG_BLOB = "https://www.figma.com/api/mcp/asset/6472ae25-3efc-46a5-8a9f-7c4eb2eb5a88";

// ─── Card content components (no individual close buttons) ───────────────────

function TealCard() {
  return (
    <>
      {/* Dark pill decoration behind title */}
      <div style={{ position: "absolute", left: 115, top: 54, width: 160, height: 68, display: "flex", alignItems: "center" }}>
        <div style={{
          width: 156, height: 57,
          backgroundColor: "#15252b",
          borderRadius: 27,
          transform: "rotate(-3.93deg)",
        }} />
      </div>
      <p style={{
        position: "absolute", top: 68, left: "50%", transform: "translateX(-50%)",
        fontSize: 36, lineHeight: 1.1, color: "white", textAlign: "center", whiteSpace: "nowrap",
        fontFamily: "'PP Right Grotesk', 'Arial Black', system-ui, sans-serif", fontWeight: 500,
      }}>
        За 30 минут
      </p>
      <p style={{
        position: "absolute", top: 122, left: "50%", transform: "translateX(-50%)",
        fontSize: 16, lineHeight: "22px", color: "white", textAlign: "center", width: 300,
      }}>
        Собираем и везём пока вы занимаетесь своими делами
      </p>
    </>
  );
}

function PinkCard() {
  return (
    <>
      {/* Blob decoration */}
      <div style={{ position: "absolute", left: 55, top: 29, width: 333, height: 225, pointerEvents: "none" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={IMG_BLOB} alt="" style={{
          position: "absolute",
          top: "-7.71%", left: "-5.86%",
          width: "115.53%", height: "115.74%",
        }} />
      </div>
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 13,
        color: "white", textAlign: "center", width: 197,
      }}>
        <p style={{
          fontSize: 36, lineHeight: 1.1,
          fontFamily: "'PP Right Grotesk', 'Arial Black', system-ui, sans-serif", fontWeight: 500,
        }}>
          Первый раз?
        </p>
        <p style={{ fontSize: 16, lineHeight: "22px" }}>
          Доставим за 30 минут.<br />Бесплатно от 500 ₽
        </p>
      </div>
    </>
  );
}

function LemonCard() {
  return (
    <>
      {/* Line decoration */}
      <div style={{ position: "absolute", left: -15, top: 100, width: 371, height: 230, overflow: "hidden", pointerEvents: "none" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={IMG_LINE} alt="" style={{
          position: "absolute",
          top: "-3.92%", left: "-2.42%",
          width: "104.84%", height: "107.84%",
        }} />
      </div>
      <p style={{
        position: "absolute", top: 68, left: "50%", transform: "translateX(-50%)",
        fontSize: 36, lineHeight: 1.1, color: "#000", textAlign: "center", whiteSpace: "nowrap",
        fontFamily: "'PP Right Grotesk', 'Arial Black', system-ui, sans-serif", fontWeight: 500,
      }}>
        Магазин у двери
      </p>
      <p style={{
        position: "absolute", top: 122, left: "50%", transform: "translateX(-50%)",
        fontSize: 16, lineHeight: "22px", color: "#15252b", textAlign: "center", width: 300,
      }}>
        Продукты, снеки, бытовая химия – всё привезём за полчаса
      </p>
    </>
  );
}

// ─── Card data ────────────────────────────────────────────────────────────────

const ALL_CARDS = [
  { id: 0, bg: "#00b0b8", Content: TealCard  },
  { id: 1, bg: "#fb9c9c", Content: PinkCard  },
  { id: 2, bg: "#eff88c", Content: LemonCard },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getDepth(cardIdx: number, topIdx: number, total: number): 0 | 1 | 2 {
  const posFromFront = (cardIdx - topIdx + total) % total;
  return Math.max(0, (total - 1) - posFromFront) as 0 | 1 | 2;
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function PromoCarousel({ onClose }: { onClose?: () => void }) {
  const [vw, setVw] = useState(390);
  useEffect(() => {
    const update = () => setVw(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const DEPTHS = buildDepths(vw);

  const [cards] = useState(ALL_CARDS.map(c => c.id));
  const [topIdx, setTopIdx] = useState(0);
  const [phase, setPhase] = useState<Phase>("idle");
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [skipTransFor, setSkipTransFor] = useState<number | null>(null);

  const topIdxRef = useRef(0);
  const flyingRef = useRef(false);
  const startRef  = useRef({ x: 0, y: 0 });

  useEffect(() => { topIdxRef.current = topIdx; }, [topIdx]);

  const advance = useCallback((dir: "left" | "right" = "left") => {
    if (flyingRef.current) return;
    flyingRef.current = true;

    const capturedTopIdx = topIdxRef.current;

    setPhase(dir === "left" ? "fly-left" : "fly-right");

    setTimeout(() => {
      const capturedCards = [...cards];
      const frontCardId = capturedCards[capturedTopIdx];

      setSkipTransFor(frontCardId);
      setTopIdx(p => (p + 1) % 3);
      setPhase("idle");

      requestAnimationFrame(() => requestAnimationFrame(() => {
        setSkipTransFor(null);
        flyingRef.current = false;
      }));
    }, FLY_MS);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Auto-rotate every 3s when idle
  useEffect(() => {
    if (phase !== "idle") return;
    const t = setTimeout(() => advance("left"), 3000);
    return () => clearTimeout(t);
  }, [topIdx, phase, advance]);

  // Pointer handlers for the front card
  const onPointerDown = useCallback((e: React.PointerEvent) => {
    if (flyingRef.current) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    startRef.current = { x: e.clientX, y: e.clientY };
    setPhase("dragging");
    setDragOffset({ x: 0, y: 0 });
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (phase !== "dragging") return;
    setDragOffset({
      x: e.clientX - startRef.current.x,
      y: e.clientY - startRef.current.y,
    });
  }, [phase]);

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    if (phase !== "dragging") return;
    const dx = e.clientX - startRef.current.x;
    setDragOffset({ x: 0, y: 0 });
    if (Math.abs(dx) > SWIPE_THRESHOLD) {
      advance(dx < 0 ? "left" : "right");
    } else {
      setPhase("idle");
    }
  }, [phase, advance]);

  const effectiveTop = topIdx % cards.length;
  const frontDepth = 2;
  const containerHeight = DEPTHS[frontDepth].top + DEPTHS[frontDepth].height;

  const dragProgress = phase === "dragging"
    ? Math.min(Math.abs(dragOffset.x) / 120, 1)
    : 0;

  return (
    <div style={{ padding: "0 16px" }}>
      {/* overflow:hidden clips cards during swipe, borderRadius clips at rounded corners */}
      <div style={{
        borderRadius: 20,
        overflow: "hidden",
        position: "relative",
      }}>
        {/* Close button — top-right corner of gray block */}
        <button
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 41,
            height: 41,
            borderRadius: "0 20px 0 20px",
            backgroundColor: "#15252b",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 0,
            zIndex: 10,
          }}
          onClick={() => onClose?.()}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M1 1L9 9M9 1L1 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {/* Carousel container — cards center via left:50% translateX(-50%) */}
        <div style={{ position: "relative", height: containerHeight }}>
            {cards.map((cardId, stackPos) => {
              const cardDef = ALL_CARDS.find(c => c.id === cardId)!;
              const { bg, Content } = cardDef;

              const depth = getDepth(stackPos, effectiveTop, cards.length) as 0 | 1 | 2;
              const isFront = depth === frontDepth;
              const base = DEPTHS[depth];
              const skipTr = cardId === skipTransFor;

              let w = base.width, h = base.height, t = base.top;
              if (!isFront && dragProgress > 0) {
                const nextD = Math.min(depth + 1, 2) as 0 | 1 | 2;
                const next = DEPTHS[nextD];
                w = base.width  + (next.width  - base.width)  * dragProgress;
                h = base.height + (next.height - base.height) * dragProgress;
                t = base.top    + (next.top    - base.top)    * dragProgress;
              }

              let transform = "translateX(-50%)";
              let transition = skipTr
                ? "none"
                : "width 0.35s ease, height 0.35s ease, top 0.35s ease";

              if (isFront) {
                if (phase === "dragging") {
                  const rot = Math.max(-20, Math.min(20, dragOffset.x * 0.07));
                  const dy  = dragOffset.y * 0.12;
                  transform = `translateX(calc(-50% + ${dragOffset.x}px)) translateY(${dy}px) rotate(${rot}deg)`;
                  transition = "none";
                } else if (phase === "fly-left") {
                  transform = "translateX(calc(-50% - 650px)) rotate(-28deg)";
                  transition = `transform ${FLY_MS}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
                } else if (phase === "fly-right") {
                  transform = "translateX(calc(-50% + 650px)) rotate(28deg)";
                  transition = `transform ${FLY_MS}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
                } else {
                  transition = skipTr ? "none" : "width 0.35s ease, height 0.35s ease, top 0.35s ease";
                }
              }

              return (
                <div
                  key={cardId}
                  style={{
                    position: "absolute",
                    width: isFront ? DEPTHS[frontDepth].width : w,
                    height: isFront ? DEPTHS[frontDepth].height : h,
                    top: isFront ? DEPTHS[frontDepth].top : t,
                    left: "50%",
                    transform,
                    transition,
                    zIndex: depth + 1,
                    borderRadius: 20,
                    overflow: "hidden",
                    backgroundColor: bg,
                    cursor: isFront ? (phase === "dragging" ? "grabbing" : "grab") : "default",
                    touchAction: "none",
                    userSelect: "none",
                    willChange: isFront ? "transform" : "width, height, top",
                  }}
                  onPointerDown={isFront ? onPointerDown : undefined}
                  onPointerMove={isFront ? onPointerMove : undefined}
                  onPointerUp={isFront ? onPointerUp : undefined}
                  onPointerCancel={isFront ? onPointerUp : undefined}
                >
                  <Content />
                </div>
              );
            })}
          </div>
        </div>
    </div>
  );
}
