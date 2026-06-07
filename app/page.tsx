import React from "react";
import Link from "next/link";

const menuItems = [
  {
    num: "01",
    title: "Espresso",
    desc: "Sof, kuchli, boylik — italyancha klassik usulda tayyorlangan.",
    price: "18 000",
  },
  {
    num: "02",
    title: "Cappuccino",
    desc: "Yumshoq sut ko'pigi bilan to'ldirilgan, latte artiga bezatilgan.",
    price: "22 000",
  },
  {
    num: "03",
    title: "Pour Over",
    desc: "Sekin qurilgan, to'liq aromatli — specialty qahva sevuvchilar uchun.",
    price: "26 000",
  },
];

const testimonials = [
  {
    text: "Toshkentda bunday sifatli qahva topish qiyin. Daily & Cup har safar kutganimdan ham yaxshiroq bo'ladi.",
    author: "Aziza T.",
    role: "Doimiy mehmon",
  },
  {
    text: "Atmosfera, musiqa, qahva — hamma narsa mukammal. Mening sevimli ishchi joyim aynan shu.",
    author: "Jasur M.",
    role: "Dizayner",
  },
];

const hours = [
  { day: "Dushanba – Juma", time: "08:00 – 22:00" },
  { day: "Shanba", time: "09:00 – 23:00" },
  { day: "Yakshanba", time: "10:00 – 21:00" },
];

const marqueeWords = [
  "Espresso",
  "Cappuccino",
  "Pour Over",
  "Cold Brew",
  "Flat White",
  "Latte Art",
  "Single Origin",
  "Specialty Coffee",
];

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans">
      {/* ── HERO ─────────────────────────────────────── */}
      <section
        className="relative min-h-[88vh] flex items-center px-10 overflow-hidden
        bg-[radial-gradient(ellipse_at_60%_40%,rgba(255,215,0,0.04)_0%,transparent_65%)]"
      >
        {/* subtle second radial */}
        <div
          className="absolute inset-0 pointer-events-none
          bg-[radial-gradient(circle_at_20%_80%,rgba(255,215,0,0.03)_0%,transparent_40%)]"
        />

        {/* text block */}
        <div className="relative z-10 max-w-2xl">
          {/* eyebrow */}
          <div className="flex items-center gap-3 mb-7">
            <span className="block w-8 h-px bg-[#FFD700] opacity-60" />
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#FFD700] font-normal">
              Toshkent shahrida
            </span>
          </div>

          {/* headline */}
          <h1
            className="font-serif font-black leading-[0.95] tracking-tight
            text-[clamp(52px,7vw,90px)] text-white mb-8"
          >
            Har bir
            <br />
            qahva
            <br />
            <em
              className="not-italic text-[#FFD700] font-bold"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.1em",
              }}
            >
              san'atdir
            </em>
          </h1>

          {/* desc */}
          <p className="text-[16px] leading-[1.75] text-white/50 max-w-[460px] mb-11 font-light">
            Biz faqat qahva qilmaymiz — biz her ertalabni marosimga
            aylantiramiz. Eng nozik donalardan, sevgi bilan demlangan.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-6">
            <Link
              href="/menu"
              className="bg-[#FFD700] text-[#0a0a0a] text-[12px] font-medium
                tracking-[0.12em] uppercase px-9 py-4
                transition-all duration-200 hover:opacity-85 hover:-translate-y-px"
            >
              Menyuni ko'rish
            </Link>
            <Link
              href="/about"
              className="group flex items-center gap-2 text-white/50 text-[12px]
                tracking-[0.1em] uppercase transition-colors duration-200 hover:text-white"
            >
              Biz haqimizda
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>
        </div>

        {/* floating stat */}
        <div
          className="absolute right-20 bottom-[15%] border border-[#FFD700]/15
          bg-[rgba(255,215,0,0.03)] px-7 py-6 backdrop-blur-sm"
        >
          <div className="font-serif font-black text-5xl text-[#FFD700] leading-none tracking-tight">
            12+
          </div>
          <div className="text-[10px] tracking-[0.18em] uppercase text-white/30 mt-1.5">
            Yillik tajriba
          </div>
        </div>
      </section>

      {/* ── MARQUEE ─────────────────────────────────── */}
      <div className="border-y border-white/[0.06] bg-white/[0.02] overflow-hidden py-3.5">
        <div className="flex whitespace-nowrap animate-[marquee_22s_linear_infinite]">
          {[...marqueeWords, ...marqueeWords].map((word, i) => (
            <React.Fragment key={i}>
              <span className="text-[11px] tracking-[0.2em] uppercase text-white/20 px-7">
                {word}
              </span>
              <span className="text-[#FFD700] opacity-60 px-1">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ── ABOUT ───────────────────────────────────── */}
      <section className="px-10 py-24">
        <div className="grid grid-cols-2 gap-20 items-center">
          {/* visual placeholder */}
          <div
            className="relative aspect-[3/4] border border-[#FFD700]/15 flex items-end p-7
            bg-[repeating-linear-gradient(0deg,transparent,transparent_39px,rgba(255,215,0,0.04)_39px,rgba(255,215,0,0.04)_40px),repeating-linear-gradient(90deg,transparent,transparent_39px,rgba(255,215,0,0.04)_39px,rgba(255,215,0,0.04)_40px)]"
          >
            {/* corner icon */}
            <div
              className="absolute top-7 right-7 w-14 h-14 border border-[#FFD700]/15
              flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 stroke-[#FFD700] fill-none opacity-70"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3" />
              </svg>
            </div>
            <div
              className="text-[11px] tracking-[0.08em] text-[#FFD700] border border-[#FFD700]/15
              px-4 py-2.5 bg-[rgba(10,10,10,0.7)] backdrop-blur-sm"
            >
              Est. 2012 · Toshkent
            </div>
          </div>

          {/* text */}
          <div>
            <div
              className="flex items-center gap-3 text-[10px] tracking-[0.22em] uppercase
              text-[#FFD700] opacity-80 mb-5"
            >
              Bizning hikoya
              <span className="block w-12 h-px bg-[#FFD700] opacity-40" />
            </div>

            <h2
              className="font-serif font-black leading-[1.05] tracking-tight
              text-[clamp(36px,4vw,54px)] text-white mb-5"
            >
              Bir finjon{" "}
              <em
                className="not-italic text-[#FFD700]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 700,
                }}
              >
                qahvadan
              </em>{" "}
              boshlanadi
            </h2>

            <div className="w-10 h-px bg-[#FFD700] opacity-50 my-7" />

            <p className="text-[15px] leading-[1.8] text-white/50 mb-4 font-light">
              Daily & Cup 2012-yilda tug'ildi — oddiy bir orzudan: Toshkent
              markazida haqiqiy specialty qahva tayyorlanadigan joy yaratish.
              O'n ikki yil ichida biz yuz minglab mehmonlarga xizmat qildik.
            </p>
            <p className="text-[15px] leading-[1.8] text-white/50 font-light">
              Har bir loviya Efiopiya, Kolumbiya va Braziliyaning eng yaxshi
              fermerlaridan keladi. Qovurishdan tortib, dmlashgacha — har bir
              bosqich usta qo'llar bilan bajariladi.
            </p>
          </div>
        </div>
      </section>

      {/* ── MENU ────────────────────────────────────── */}
      <section className="px-10 pb-24">
        <div
          className="flex items-center gap-3 text-[10px] tracking-[0.22em] uppercase
          text-[#FFD700] opacity-80 mb-10"
        >
          Bizning ichimliklar
          <span className="block w-12 h-px bg-[#FFD700] opacity-40" />
        </div>

        <div className="grid grid-cols-3 gap-px bg-[#FFD700]/15">
          {menuItems.map((item) => (
            <div
              key={item.num}
              className="group bg-[#0a0a0a] p-10 relative overflow-hidden cursor-pointer
                hover:bg-[rgba(255,215,0,0.02)] transition-colors duration-300"
            >
              {/* hover radial */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100
                transition-opacity duration-300
                bg-[radial-gradient(ellipse_at_50%_100%,rgba(255,215,0,0.05)_0%,transparent_60%)]"
              />

              <span
                className="block text-[13px] tracking-[0.15em] text-[#FFD700] opacity-60
                mb-6 font-normal"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {item.num}
              </span>

              <div
                className="w-11 h-11 border border-[#FFD700]/15 flex items-center
                justify-center mb-5 transition-colors duration-300 group-hover:border-[#FFD700]/40"
              >
                <svg
                  className="w-5 h-5 stroke-[#FFD700] fill-none opacity-70"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3" />
                </svg>
              </div>

              <div className="font-serif font-bold text-[22px] text-white mb-3 tracking-[-0.3px]">
                {item.title}
              </div>
              <div className="text-[13px] leading-[1.7] text-white/50 mb-5 font-light">
                {item.desc}
              </div>
              <div
                className="text-[#FFD700] text-[26px] tracking-[-0.5px]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                }}
              >
                {item.price}{" "}
                <small
                  className="text-sm text-white/20 ml-1 font-light"
                  style={{ fontFamily: "inherit" }}
                >
                  so'm
                </small>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────── */}
      <div className="border-y border-white/[0.06] bg-white/[0.02]">
        <div className="grid grid-cols-2 gap-px bg-white/[0.06]">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[#0a0a0a] px-10 py-12">
              <span
                className="block leading-none text-[#FFD700] opacity-25 -mt-4 mb-0"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 72,
                }}
              >
                "
              </span>
              <p
                className="text-[20px] leading-[1.6] text-white/70 mb-7 italic"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {t.text}
              </p>
              <div className="text-[11px] tracking-[0.15em] uppercase text-white/30">
                {t.author} · {t.role}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── HOURS ────────────────────────────────────── */}
      <section className="px-10 py-24">
        <div
          className="flex items-center gap-3 text-[10px] tracking-[0.22em] uppercase
          text-[#FFD700] opacity-80 mb-10"
        >
          Ish vaqtimiz
          <span className="block w-12 h-px bg-[#FFD700] opacity-40" />
        </div>

        <div className="grid grid-cols-3 border border-[#FFD700]/15">
          {hours.map((h, i) => (
            <div
              key={i}
              className={`p-8 ${i < hours.length - 1 ? "border-r border-[#FFD700]/15" : ""}`}
            >
              <div className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-2.5">
                {h.day}
              </div>
              <div className="font-serif font-bold text-[22px] text-white tracking-[-0.5px]">
                {h.time}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <div
        className="text-center px-10 py-28 border-t border-[#FFD700]/15
        bg-[radial-gradient(ellipse_at_50%_100%,rgba(255,215,0,0.06)_0%,transparent_60%)]"
      >
        <h2
          className="font-serif font-black leading-[1.05] tracking-tight
          text-[clamp(40px,5vw,68px)] text-white mb-6"
        >
          Bugun biz bilan{" "}
          <em
            className="not-italic text-[#FFD700]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
            }}
          >
            uchrashing
          </em>
        </h2>
        <p className="text-white/50 text-[16px] mb-11 font-light">
          Har bir mehmonimiz uchun alohida joy, alohida finjon.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#FFD700] text-[#0a0a0a] text-[12px] font-medium
            tracking-[0.12em] uppercase px-9 py-4
            transition-all duration-200 hover:opacity-85 hover:-translate-y-px"
        >
          Manzilimiz
        </Link>
      </div>
    </div>
  );
}
