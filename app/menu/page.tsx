"use client";

import React, { useState } from "react";
import Link from "next/link";

const categories = [
  "Barchasi",
  "Espresso",
  "Filter",
  "Cold",
  "Non-Coffee",
  "Taomlar",
];

const menuData = [
  // Espresso
  {
    id: 1,
    category: "Espresso",
    name: "Espresso",
    desc: "Sof, kuchli — italyancha klassik. 30ml sof ekstraktsiya.",
    price: 18000,
    tag: "Classic",
  },
  {
    id: 2,
    category: "Espresso",
    name: "Doppio",
    desc: "Ikki shot espresso, intensiv aroma va to'liq tanli ta'm.",
    price: 22000,
    tag: null,
  },
  {
    id: 3,
    category: "Espresso",
    name: "Cappuccino",
    desc: "Yumshoq sut ko'pigi bilan to'ldirilgan, latte art bezagida.",
    price: 24000,
    tag: "Bestseller",
  },
  {
    id: 4,
    category: "Espresso",
    name: "Flat White",
    desc: "Australiyacha uslub — kuchli espresso, nozik mikroko'pik sut.",
    price: 26000,
    tag: null,
  },
  {
    id: 5,
    category: "Espresso",
    name: "Cortado",
    desc: "Teng miqdorda espresso va bug'langan sut — balansli, to'g'ri.",
    price: 22000,
    tag: null,
  },
  {
    id: 6,
    category: "Espresso",
    name: "Latte",
    desc: "Mayin sut va espresso uyg'unligi, latte art bilan bezatilgan.",
    price: 28000,
    tag: null,
  },

  // Filter
  {
    id: 7,
    category: "Filter",
    name: "Pour Over",
    desc: "Sekin qurilgan, to'liq aromatli — Hario V60 da tayyorlangan.",
    price: 28000,
    tag: "Chef's pick",
  },
  {
    id: 8,
    category: "Filter",
    name: "Aeropress",
    desc: "Yumshoq, past kislotali — sayohat uslubidagi klassik.",
    price: 24000,
    tag: null,
  },
  {
    id: 9,
    category: "Filter",
    name: "Chemex",
    desc: "Shisha idishda tayyorlangan, kristal toza va nozik ta'm.",
    price: 30000,
    tag: null,
  },
  {
    id: 10,
    category: "Filter",
    name: "French Press",
    desc: "To'liq tanli, boy — klassik immersion usulida.",
    price: 22000,
    tag: null,
  },

  // Cold
  {
    id: 11,
    category: "Cold",
    name: "Cold Brew",
    desc: "18 soat sovuq infuziya — yumshoq, tabiiy shirin ta'm.",
    price: 30000,
    tag: "Seasonal",
  },
  {
    id: 12,
    category: "Cold",
    name: "Iced Latte",
    desc: "Muzli latte — issiq kunlar uchun mukammal tanlov.",
    price: 28000,
    tag: null,
  },
  {
    id: 13,
    category: "Cold",
    name: "Shakerato",
    desc: "Italyancha sovuq espresso cocktail — shaker bilan ko'piklangan.",
    price: 26000,
    tag: null,
  },

  // Non-Coffee
  {
    id: 14,
    category: "Non-Coffee",
    name: "Matcha Latte",
    desc: "Yapon siremony matcha, bug'langan sut bilan.",
    price: 28000,
    tag: null,
  },
  {
    id: 15,
    category: "Non-Coffee",
    name: "Chai Latte",
    desc: "Hind ziravorlari — darçin, kardamon, zanjabil, qaranfil.",
    price: 24000,
    tag: null,
  },
  {
    id: 16,
    category: "Non-Coffee",
    name: "Hot Chocolate",
    desc: "Belgiya shokoladi, qaymoq ko'pigi bilan.",
    price: 26000,
    tag: null,
  },

  // Taomlar
  {
    id: 17,
    category: "Taomlar",
    name: "Croissant",
    desc: "Frantsuzcha ko'p qavatli xamir — tashqi tomonidan qizg'ish, ichida yumshoq.",
    price: 22000,
    tag: null,
  },
  {
    id: 18,
    category: "Taomlar",
    name: "Avokado Toast",
    desc: "Tuxum, avokado, limon va mikroyashillik bilan bezatilgan.",
    price: 48000,
    tag: "New",
  },
  {
    id: 19,
    category: "Taomlar",
    name: "Cheesecake",
    desc: "New York uslubidagi klassik pishloqli tort, meva sous bilan.",
    price: 38000,
    tag: null,
  },
];

const tagColors: Record<string, string> = {
  Classic: "border-white/20 text-white/40",
  Bestseller: "border-[#FFD700]/40 text-[#FFD700]",
  "Chef's pick": "border-[#FFD700]/40 text-[#FFD700]",
  Seasonal: "border-white/20 text-white/40",
  New: "border-[#FFD700]/40 text-[#FFD700]",
};

function formatPrice(p: number) {
  return p.toLocaleString("uz-UZ");
}

function Menu() {
  const [active, setActive] = useState("Barchasi");

  const filtered =
    active === "Barchasi"
      ? menuData
      : menuData.filter((item) => item.category === active);

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white font-sans">
      {/* ── PAGE HERO ─────────────────────────────── */}
      <div
        className="relative px-10 pt-20 pb-16 overflow-hidden
        border-b border-[#FFD700]/15
        bg-[radial-gradient(ellipse_at_70%_50%,rgba(255,215,0,0.05)_0%,transparent_60%)]"
      >
        <div
          className="absolute inset-0 pointer-events-none
          bg-[radial-gradient(circle_at_10%_90%,rgba(255,215,0,0.03)_0%,transparent_40%)]"
        />

        <div className="relative z-10 max-w-xl">
          {/* breadcrumb */}
          <div className="flex items-center gap-3 mb-7">
            <Link
              href="/"
              className="text-[11px] tracking-[0.18em] uppercase text-white/30
              hover:text-white/60 transition-colors duration-200"
            >
              Bosh sahifa
            </Link>
            <span className="text-white/15 text-xs">—</span>
            <span className="text-[11px] tracking-[0.18em] uppercase text-[#FFD700] opacity-80">
              Menyu
            </span>
          </div>

          <h1
            className="font-serif font-black leading-[0.95] tracking-tight
            text-[clamp(48px,6vw,80px)] text-white mb-6"
          >
            Bizning{" "}
            <em
              className="not-italic text-[#FFD700]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: "1.08em",
              }}
            >
              Menyu
            </em>
          </h1>
          <p className="text-[15px] leading-[1.75] text-white/45 font-light max-w-md">
            Har bir ichimlik va taom — sifat, kasbkorlik va sevgining
            uyg'unligidan tug'iladi.
          </p>
        </div>

        {/* decorative num */}
        <div
          className="absolute right-10 bottom-8 font-serif font-black
          text-[120px] leading-none tracking-tight text-[#FFD700] opacity-[0.04] select-none"
        >
          {filtered.length}
        </div>
      </div>

      {/* ── FILTER TABS ───────────────────────────── */}
      <div
        className="sticky top-0 z-50 px-10 border-b border-white/[0.06]
        bg-[rgba(10,10,10,0.92)] backdrop-blur-md"
      >
        <div className="flex gap-0 overflow-x-auto scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative px-6 py-5 text-[11px] tracking-[0.18em] uppercase
                font-medium whitespace-nowrap transition-colors duration-200
                ${
                  active === cat
                    ? "text-[#FFD700]"
                    : "text-white/35 hover:text-white/70"
                }`}
            >
              {cat}
              {active === cat && (
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#FFD700]" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── GRID ──────────────────────────────────── */}
      <div className="px-10 py-16">
        {/* category label */}
        {active !== "Barchasi" && (
          <div
            className="flex items-center gap-3 text-[10px] tracking-[0.22em] uppercase
            text-[#FFD700] opacity-80 mb-10"
          >
            {active}
            <span className="block w-12 h-px bg-[#FFD700] opacity-40" />
            <span className="text-white/25">{filtered.length} ta</span>
          </div>
        )}

        {/* grouped render */}
        {active === "Barchasi" ? (
          categories
            .filter((c) => c !== "Barchasi")
            .map((cat) => {
              const items = menuData.filter((i) => i.category === cat);
              return (
                <div key={cat} className="mb-16 last:mb-0">
                  <div
                    className="flex items-center gap-3 text-[10px] tracking-[0.22em] uppercase
                    text-[#FFD700] opacity-80 mb-8"
                  >
                    {cat}
                    <span className="block w-12 h-px bg-[#FFD700] opacity-40" />
                  </div>
                  <MenuGrid items={items} />
                </div>
              );
            })
        ) : (
          <MenuGrid items={filtered} />
        )}
      </div>

      {/* ── ORIGIN BANNER ─────────────────────────── */}
      <div
        className="mx-10 mb-16 border border-[#FFD700]/15 p-10
        bg-[radial-gradient(ellipse_at_0%_50%,rgba(255,215,0,0.04)_0%,transparent_50%)]
        flex items-center justify-between gap-10"
      >
        <div className="max-w-lg">
          <div className="text-[10px] tracking-[0.22em] uppercase text-[#FFD700] opacity-70 mb-4">
            Manbalarimiz
          </div>
          <h3 className="font-serif font-black text-[28px] text-white tracking-tight leading-tight mb-3">
            Single Origin · Specialty Grade
          </h3>
          <p className="text-[14px] text-white/45 leading-[1.75] font-light">
            Barcha loviyalarimiz Efiopiya, Kolumbiya va Braziliyaning
            sertifikatlangan fermalaridan keltiriladi. SCA (Specialty Coffee
            Association) standartlari bo'yicha 85+ ball.
          </p>
        </div>
        <div className="flex gap-8 shrink-0">
          {[
            ["85+", "SCA Ball"],
            ["3", "Mamlakat"],
            ["100%", "Arabica"],
          ].map(([num, label]) => (
            <div key={label} className="text-center">
              <div className="font-serif font-black text-[36px] text-[#FFD700] leading-none tracking-tight">
                {num}
              </div>
              <div className="text-[10px] tracking-[0.15em] uppercase text-white/30 mt-1.5">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── MENU GRID COMPONENT ────────────────────────── */
function MenuGrid({ items }: { items: typeof menuData }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#FFD700]/10">
      {items.map((item) => (
        <div
          key={item.id}
          className="group bg-[#0a0a0a] p-8 relative overflow-hidden
            hover:bg-[rgba(255,215,0,0.015)] transition-colors duration-300 cursor-default"
        >
          {/* hover glow */}
          <div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100
            transition-opacity duration-300
            bg-[radial-gradient(ellipse_at_50%_100%,rgba(255,215,0,0.04)_0%,transparent_60%)]"
          />

          <div className="relative z-10 flex flex-col h-full">
            {/* top row */}
            <div className="flex items-start justify-between gap-3 mb-5">
              <div
                className="w-9 h-9 border border-[#FFD700]/15 flex items-center justify-center
                shrink-0 transition-colors duration-300 group-hover:border-[#FFD700]/35"
              >
                <svg
                  className="w-4 h-4 stroke-[#FFD700] fill-none opacity-60"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3" />
                </svg>
              </div>
              {item.tag && (
                <span
                  className={`text-[9px] tracking-[0.18em] uppercase border px-2 py-1 ${tagColors[item.tag] ?? "border-white/20 text-white/40"}`}
                >
                  {item.tag}
                </span>
              )}
            </div>

            {/* name */}
            <div className="font-serif font-bold text-[20px] text-white tracking-[-0.3px] mb-2">
              {item.name}
            </div>

            {/* desc */}
            <p className="text-[13px] leading-[1.7] text-white/45 font-light flex-1 mb-6">
              {item.desc}
            </p>

            {/* price + divider */}
            <div className="flex items-end justify-between border-t border-white/[0.06] pt-5">
              <div
                className="text-[#FFD700] text-[22px] tracking-[-0.5px]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                }}
              >
                {formatPrice(item.price)}
                <span
                  className="text-[13px] text-white/25 ml-1.5 font-light"
                  style={{ fontFamily: "inherit" }}
                >
                  so'm
                </span>
              </div>
              <div className="text-[10px] tracking-[0.15em] uppercase text-white/20">
                {item.category}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Menu;
