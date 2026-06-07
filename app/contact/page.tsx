"use client";

import React, { useState } from "react";
import Link from "next/link";

const TOKEN = "8893373347:AAHcVY6Zq8M8ueIjv9nvD7KrpqX6RFa-ODQ";
const CHAT_ID = "6549887492";

const branches = [
  {
    num: "01",
    name: "Chilonzor filiali",
    address: "Chilonzor ko'chasi, 14-uy",
    hours: "08:00 – 22:00",
    phone: "+998 71 200 10 01",
    tag: "Asosiy filial",
  },
  {
    num: "02",
    name: "Yunusobod filiali",
    address: "Amir Temur shoh ko'chasi, 108",
    hours: "08:00 – 22:00",
    phone: "+998 71 200 10 02",
    tag: "Barista maktabi",
  },
  {
    num: "03",
    name: "Roasting Lab",
    address: "Sergeli tumani, Sanoat ko'chasi, 7",
    hours: "09:00 – 18:00",
    phone: "+998 71 200 10 03",
    tag: "Qovurish zavodi",
  },
];

const socials = [
  {
    label: "Instagram",
    handle: "@dailyandcup",
    href: "https://www.instagram.com/",
  },
  {
    label: "Telegram",
    handle: "t.me/dailyandcup",
    href: "https://web.telegram.org/dailycupsupport/",
  },
  {
    label: "Facebook",
    handle: "Daily & Cup",
    href: "https://www.facebook.com/",
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const text =
      `📩 Yangi xabar!\n\n` +
      `👤 Ism: ${form.name}\n` +
      `📞 Telefon: ${form.phone || "Ko'rsatilmagan"}\n` +
      `💬 Xabar: ${form.message}`;

    try {
      await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text }),
      });
      setSent(true);
    } catch (err) {
      console.error("Telegram bot xatosi:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white font-sans">
      {/* ── PAGE HERO ─────────────────────────────── */}
      <div
        className="relative px-10 pt-20 pb-20 overflow-hidden border-b border-[#FFD700]/15
        bg-[radial-gradient(ellipse_at_65%_45%,rgba(255,215,0,0.05)_0%,transparent_60%)]"
      >
        <div
          className="absolute inset-0 pointer-events-none
          bg-[radial-gradient(circle_at_10%_85%,rgba(255,215,0,0.03)_0%,transparent_40%)]"
        />

        <div className="relative z-10 max-w-2xl">
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
              Bog'lanish
            </span>
          </div>

          <h1
            className="font-serif font-black leading-[0.95] tracking-tight
            text-[clamp(48px,6vw,82px)] text-white mb-7"
          >
            Biz bilan{" "}
            <em
              className="not-italic text-[#FFD700]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: "1.08em",
              }}
            >
              gaplashing
            </em>
          </h1>
          <p className="text-[15px] leading-[1.8] text-white/45 font-light max-w-lg">
            Savolingiz bormi? Buyurtma berishni xohlaysizmi? Yoki shunchaki
            tanishmoqchimisiz — har qanday sabab bilan yozing.
          </p>
        </div>

        <div
          className="absolute right-10 bottom-4 font-serif font-black
          text-[140px] leading-none text-[#FFD700] opacity-[0.035] select-none tracking-tight"
        >
          hello
        </div>
      </div>

      {/* ── MAIN GRID ─────────────────────────────── */}
      <section
        className="px-10 py-24 grid grid-cols-2 gap-20
        border-b border-white/[0.05]"
      >
        {/* LEFT — FORM */}
        <div>
          <div
            className="flex items-center gap-3 text-[10px] tracking-[0.22em] uppercase
            text-[#FFD700] opacity-80 mb-10"
          >
            Xabar yuboring
            <span className="block w-12 h-px bg-[#FFD700] opacity-40" />
          </div>

          {sent ? (
            <div className="pt-10">
              <div className="w-14 h-14 border border-[#FFD700]/30 flex items-center justify-center mb-8">
                <svg
                  className="w-6 h-6 stroke-[#FFD700] fill-none"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-[28px] text-white tracking-[-0.3px] mb-3">
                Xabaringiz yuborildi
              </h3>
              <p className="text-[14px] leading-[1.8] text-white/45 font-light">
                Tez orada siz bilan bog'lanamiz. Odatda 24 soat ichida javob
                beramiz.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-0">
              {/* name */}
              <div className="group border-t border-[#FFD700]/10 py-7 relative">
                <label className="block text-[10px] tracking-[0.2em] uppercase text-white/30 mb-3">
                  Ismingiz
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Masalan, Diyor"
                  className="w-full bg-transparent text-[16px] text-white placeholder-white/20
                  outline-none border-none font-light"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-px bg-[#FFD700]/10
                  group-focus-within:bg-[#FFD700]/40 transition-colors duration-300"
                />
              </div>

              {/* phone */}
              <div className="group border-t border-[#FFD700]/10 py-7 relative">
                <label className="block text-[10px] tracking-[0.2em] uppercase text-white/30 mb-3">
                  Telefon
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+998 90 000 00 00"
                  className="w-full bg-transparent text-[16px] text-white placeholder-white/20
                  outline-none border-none font-light"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-px bg-[#FFD700]/10
                  group-focus-within:bg-[#FFD700]/40 transition-colors duration-300"
                />
              </div>

              {/* message */}
              <div className="group border-t border-[#FFD700]/10 py-7 relative">
                <label className="block text-[10px] tracking-[0.2em] uppercase text-white/30 mb-3">
                  Xabar
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Nima haqida gaplashmoqchisiz?"
                  className="w-full bg-transparent text-[16px] text-white placeholder-white/20
                  outline-none border-none font-light resize-none leading-[1.75]"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-px bg-[#FFD700]/10
                  group-focus-within:bg-[#FFD700]/40 transition-colors duration-300"
                />
              </div>

              <div className="border-t border-[#FFD700]/10 pt-8">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#FFD700] text-[#0a0a0a] text-[12px] font-medium
                  tracking-[0.12em] uppercase px-9 py-4
                  transition-all duration-200 hover:opacity-85 hover:-translate-y-px
                  disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Yuborilmoqda..." : "Yuborish"}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* RIGHT — INFO */}
        <div className="flex flex-col gap-14">
          <div>
            <div
              className="flex items-center gap-3 text-[10px] tracking-[0.22em] uppercase
              text-[#FFD700] opacity-80 mb-8"
            >
              Umumiy
              <span className="block w-12 h-px bg-[#FFD700] opacity-40" />
            </div>
            <div className="flex flex-col gap-0">
              <div className="py-5 border-t border-[#FFD700]/10 flex justify-between items-start">
                <span className="text-[12px] tracking-[0.1em] uppercase text-white/30">
                  Bosh ofis
                </span>
                <span className="text-[14px] text-white/70 font-light text-right">
                  info@dailyandcup.uz
                </span>
              </div>
              <div className="py-5 border-t border-[#FFD700]/10 flex justify-between items-start">
                <span className="text-[12px] tracking-[0.1em] uppercase text-white/30">
                  Buyurtma
                </span>
                <span className="text-[14px] text-white/70 font-light text-right">
                  order@dailyandcup.uz
                </span>
              </div>
              <div className="py-5 border-t border-[#FFD700]/10 flex justify-between items-start">
                <span className="text-[12px] tracking-[0.1em] uppercase text-white/30">
                  Hamkorlik
                </span>
                <span className="text-[14px] text-white/70 font-light text-right">
                  partner@dailyandcup.uz
                </span>
              </div>
              <div className="py-5 border-t border-b border-[#FFD700]/10 flex justify-between items-start">
                <span className="text-[12px] tracking-[0.1em] uppercase text-white/30">
                  Ish vaqti
                </span>
                <span className="text-[14px] text-white/70 font-light text-right">
                  Har kuni 08:00 – 22:00
                </span>
              </div>
            </div>
          </div>

          <div>
            <div
              className="flex items-center gap-3 text-[10px] tracking-[0.22em] uppercase
              text-[#FFD700] opacity-80 mb-8"
            >
              Ijtimoiy tarmoqlar
              <span className="block w-12 h-px bg-[#FFD700] opacity-40" />
            </div>
            <div className="flex flex-col gap-0">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="group py-5 border-t border-[#FFD700]/10 last:border-b
                  flex justify-between items-center transition-colors duration-200
                  hover:border-[#FFD700]/25"
                >
                  <span className="text-[12px] tracking-[0.1em] uppercase text-white/30 group-hover:text-white/60 transition-colors duration-200">
                    {s.label}
                  </span>
                  <span className="flex items-center gap-2 text-[14px] text-white/60 font-light group-hover:text-[#FFD700] transition-colors duration-200">
                    {s.handle}
                    <svg
                      className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M3 13L13 3M13 3H6M13 3v7" />
                    </svg>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BRANCHES ──────────────────────────────── */}
      <section className="px-10 py-24 border-b border-white/[0.05]">
        <div
          className="flex items-center gap-3 text-[10px] tracking-[0.22em] uppercase
          text-[#FFD700] opacity-80 mb-14"
        >
          Filiallarimiz
          <span className="block w-12 h-px bg-[#FFD700] opacity-40" />
        </div>

        <div className="grid grid-cols-3 gap-px bg-[#FFD700]/10">
          {branches.map((b) => (
            <div
              key={b.num}
              className="group bg-[#0a0a0a] p-10 relative overflow-hidden
              hover:bg-[rgba(255,215,0,0.015)] transition-colors duration-300"
            >
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100
                transition-opacity duration-300
                bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,215,0,0.05)_0%,transparent_60%)]"
              />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-7">
                  <span
                    className="font-serif text-[13px] tracking-[0.15em] text-[#FFD700]/50"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {b.num}
                  </span>
                  <span
                    className="text-[9px] tracking-[0.15em] uppercase text-[#FFD700]/40
                    border border-[#FFD700]/20 px-2 py-1"
                  >
                    {b.tag}
                  </span>
                </div>

                <h3
                  className="font-serif font-bold text-[20px] text-white tracking-[-0.3px] mb-6
                  group-hover:text-[#FFD700] transition-colors duration-300"
                >
                  {b.name}
                </h3>

                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-4 h-4 stroke-[#FFD700]/40 fill-none shrink-0 mt-0.5"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <span className="text-[13px] text-white/45 font-light leading-[1.6]">
                      {b.address}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-4 h-4 stroke-[#FFD700]/40 fill-none shrink-0"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    <span className="text-[13px] text-white/45 font-light">
                      {b.hours}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-4 h-4 stroke-[#FFD700]/40 fill-none shrink-0"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.64A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    <span className="text-[13px] text-white/45 font-light">
                      {b.phone}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────── */}
      <div
        className="text-center px-10 py-28
        bg-[radial-gradient(ellipse_at_50%_100%,rgba(255,215,0,0.06)_0%,transparent_60%)]
        border-t border-[#FFD700]/15"
      >
        <div
          className="flex items-center justify-center gap-3 text-[10px] tracking-[0.22em]
          uppercase text-[#FFD700] opacity-70 mb-7"
        >
          <span className="block w-8 h-px bg-[#FFD700] opacity-50" />
          Bizni toping
          <span className="block w-8 h-px bg-[#FFD700] opacity-50" />
        </div>
        <h2
          className="font-serif font-black text-[clamp(38px,5vw,64px)] leading-[1.0]
          tracking-tight text-white mb-6"
        >
          Eng yaxshi finjon —{" "}
          <em
            className="not-italic text-[#FFD700]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
            }}
          >
            siz bilan
          </em>
        </h2>
        <p className="text-white/45 text-[15px] mb-11 font-light max-w-sm mx-auto leading-[1.7]">
          Har kuni ertalab 08:00 dan sizni kutib turamiz.
        </p>
        <div className="flex items-center justify-center gap-5">
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
            className="group flex items-center gap-2 text-white/45 text-[12px]
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
    </div>
  );
}
