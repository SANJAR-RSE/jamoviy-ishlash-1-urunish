import React from "react";
import Link from "next/link";

const timeline = [
  {
    year: "2012",
    title: "Birinchi finjon",
    desc: "Toshkent markazida kichik bir do'kon ochildi. 4 ta stol, bitta La Marzocco mashinasi va cheksiz ishtiyoq.",
  },
  {
    year: "2015",
    title: "Specialty yo'li",
    desc: "SCA sertifikati olindi. Efiopiya va Kolumbiyadan to'g'ridan-to'g'ri import boshlandi.",
  },
  {
    year: "2018",
    title: "Ikkinchi filial",
    desc: "Yunusobod tumanida ikkinchi Daily & Cup ochildi. Barista maktabi ishga tushirildi.",
  },
  {
    year: "2021",
    title: "Roasting Lab",
    desc: "O'z qovurish laboratoriyamiz ochildi. Har hafta yangi batch — to'liq nazorat, to'liq sifat.",
  },
  {
    year: "2024",
    title: "Bugun",
    desc: "3 ta filial, 40+ xodim, 100 000+ mamnun mehmon. Va har ertalab bitta maqsad — eng yaxshi finjon.",
  },
];

const team = [
  {
    name: "Dilnoza Yusupova",
    role: "Founder & Head Roaster",
    bio: "SCA Q-Grader sertifikati. Milano va Oslodan ta'lim olgan. Qahvani kimyo sifatida ko'radi.",
    initial: "D",
  },
  {
    name: "Bobur Toshmatov",
    role: "Head Barista",
    bio: "Uzbekistan Barista Championship 2022 g'olibi. Latte art va espresso ekstraksiyasi bo'yicha mutaxassis.",
    initial: "B",
  },
  {
    name: "Malika Rahimova",
    role: "Coffee Educator",
    bio: "Barista maktabi rahbari. 500+ talabani o'qitgan. Specialty qahva madaniyatini tarqatish uning missiyasi.",
    initial: "M",
  },
];

const values = [
  {
    num: "01",
    title: "Sifat — murosasiz",
    desc: "85+ SCA ball — bu bizning minimal standarti, maksimal emas. Har bir batch tekshiriladi, har bir finjon nazorat qilinadi.",
  },
  {
    num: "02",
    title: "Shaffoflik",
    desc: "Qaysi fermadan, qaysi yil hosili, qanday qovurilgan — barchasini bilasiz. Yashirin narsa yo'q.",
  },
  {
    num: "03",
    title: "Jamoa — oila",
    desc: "Baristarimiz xodim emas, sherik. Ularning o'sishi bizning o'sishimiz.",
  },
  {
    num: "04",
    title: "Muhit — muhim",
    desc: "Barcha qadoqlamamiz qayta ishlatiladi. Qahva qoldiqlari o'g'it sifatida ishlatiladi.",
  },
];

const stats = [
  { num: "12+", label: "Yillik tajriba" },
  { num: "3", label: "Filial" },
  { num: "40+", label: "Jamoamiz" },
  { num: "100K+", label: "Mehmon" },
];

export default function About() {
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
              Biz haqimizda
            </span>
          </div>

          <h1
            className="font-serif font-black leading-[0.95] tracking-tight
            text-[clamp(48px,6vw,82px)] text-white mb-7"
          >
            Bir finjondan <br />
            <em
              className="not-italic text-[#FFD700]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: "1.08em",
              }}
            >
              kattaroq narsa
            </em>
          </h1>
          <p className="text-[15px] leading-[1.8] text-white/45 font-light max-w-lg">
            Daily & Cup — bu shunchaki qahvaxona emas. Bu Toshkentda specialty
            qahva madaniyatini yaratish, o'rgatish va yoyishga bag'ishlangan
            harakat.
          </p>
        </div>

        {/* big decorative year */}
        <div
          className="absolute right-10 bottom-4 font-serif font-black
          text-[160px] leading-none text-[#FFD700] opacity-[0.035] select-none tracking-tight"
        >
          2012
        </div>
      </div>

      {/* ── STATS ─────────────────────────────────── */}
      <div className="grid grid-cols-4 gap-px bg-[#FFD700]/10 border-b border-[#FFD700]/10">
        {stats.map((s) => (
          <div key={s.label} className="bg-[#0a0a0a] px-10 py-10 text-center">
            <div
              className="font-serif font-black text-[48px] text-[#FFD700] leading-none
              tracking-tight mb-2"
            >
              {s.num}
            </div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-white/30">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* ── STORY ─────────────────────────────────── */}
      <section
        className="px-10 py-24 grid grid-cols-2 gap-20 items-center
        border-b border-white/[0.05]"
      >
        {/* text */}
        <div>
          <div
            className="flex items-center gap-3 text-[10px] tracking-[0.22em] uppercase
            text-[#FFD700] opacity-80 mb-6"
          >
            Hikoyamiz
            <span className="block w-12 h-px bg-[#FFD700] opacity-40" />
          </div>
          <h2
            className="font-serif font-black text-[clamp(32px,3.5vw,48px)] leading-[1.05]
            tracking-tight text-white mb-6"
          >
            Oddiy orzudan{" "}
            <em
              className="not-italic text-[#FFD700]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
              }}
            >
              harakatga
            </em>
          </h2>
          <div className="w-10 h-px bg-[#FFD700] opacity-50 mb-7" />
          <p className="text-[15px] leading-[1.85] text-white/50 font-light mb-4">
            2012-yil. Dilnoza Yusupova Milanoda barista kursini tugatib,
            Toshkentga qaytdi. Qo'lida bitta orzusi bor edi: Toshkentliklar ham
            haqiqiy specialty qahvani tatib ko'rishi kerak.
          </p>
          <p className="text-[15px] leading-[1.85] text-white/50 font-light mb-4">
            Birinchi yil oson bo'lmadi. Ko'pchilik "oddiy qora qahva" ni afzal
            ko'rardi. Lekin har bir yangi mehmon — bu yana bir odamning
            dunyoqarashi o'zgarishi edi.
          </p>
          <p className="text-[15px] leading-[1.85] text-white/50 font-light">
            Bugun 3 ta filial, o'z Roasting Lab va Barista maktabimiz bor. Ammo
            asosiy narsa o'zgarmadi: har bir finjon — bu sifatga bo'lgan
            sadoqatimizning isboti.
          </p>
        </div>

        {/* visual grid */}
        <div className="grid grid-cols-2 gap-3">
          <div
            className="aspect-[3/4] border border-[#FFD700]/12 col-span-1
            bg-[repeating-linear-gradient(135deg,transparent,transparent_19px,rgba(255,215,0,0.03)_19px,rgba(255,215,0,0.03)_20px)]
            flex items-end p-5"
          >
            <div
              className="text-[10px] tracking-[0.12em] uppercase text-[#FFD700]/50 border
              border-[#FFD700]/15 px-3 py-2"
            >
              Roasting Lab
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div
              className="aspect-square border border-[#FFD700]/12
              bg-[radial-gradient(ellipse_at_50%_50%,rgba(255,215,0,0.05)_0%,transparent_70%)]
              flex items-center justify-center"
            >
              <svg
                className="w-8 h-8 stroke-[#FFD700] fill-none opacity-30"
                strokeWidth="1"
                viewBox="0 0 24 24"
              >
                <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3" />
              </svg>
            </div>
            <div
              className="flex-1 border border-[#FFD700]/12
              bg-[repeating-linear-gradient(45deg,transparent,transparent_9px,rgba(255,215,0,0.03)_9px,rgba(255,215,0,0.03)_10px)]
              flex items-end p-4"
            >
              <div
                className="text-[10px] tracking-[0.12em] uppercase text-[#FFD700]/50 border
                border-[#FFD700]/15 px-3 py-2"
              >
                Est. 2012
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ──────────────────────────────── */}
      <section className="px-10 py-24 border-b border-white/[0.05]">
        <div
          className="flex items-center gap-3 text-[10px] tracking-[0.22em] uppercase
          text-[#FFD700] opacity-80 mb-14"
        >
          Tarix
          <span className="block w-12 h-px bg-[#FFD700] opacity-40" />
        </div>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-[72px] top-0 bottom-0 w-px bg-[#FFD700]/10" />

          <div className="flex flex-col gap-0">
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className="group flex gap-12 pb-12 last:pb-0 relative"
              >
                {/* year */}
                <div className="w-[72px] shrink-0 relative flex flex-col items-end pr-8 pt-0.5">
                  <span
                    className="font-serif font-black text-[18px] text-[#FFD700]/50
                    group-hover:text-[#FFD700] transition-colors duration-300 leading-none"
                  >
                    {item.year}
                  </span>
                  {/* dot */}
                  <div
                    className="absolute right-[-5px] top-[5px] w-2.5 h-2.5 rounded-full
                    border border-[#FFD700]/30 bg-[#0a0a0a]
                    group-hover:border-[#FFD700] group-hover:bg-[#FFD700]/20
                    transition-all duration-300"
                  />
                </div>

                {/* content */}
                <div className="flex-1 pt-0">
                  <div
                    className="font-serif font-bold text-[20px] text-white tracking-[-0.3px] mb-2
                    group-hover:text-[#FFD700] transition-colors duration-300"
                  >
                    {item.title}
                  </div>
                  <p className="text-[14px] leading-[1.75] text-white/45 font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ────────────────────────────────── */}
      <section className="px-10 py-24 border-b border-white/[0.05]">
        <div
          className="flex items-center gap-3 text-[10px] tracking-[0.22em] uppercase
          text-[#FFD700] opacity-80 mb-14"
        >
          Qadriyatlarimiz
          <span className="block w-12 h-px bg-[#FFD700] opacity-40" />
        </div>

        <div className="grid grid-cols-2 gap-px bg-[#FFD700]/10">
          {values.map((v) => (
            <div
              key={v.num}
              className="group bg-[#0a0a0a] p-10 relative overflow-hidden
                hover:bg-[rgba(255,215,0,0.015)] transition-colors duration-300"
            >
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100
                transition-opacity duration-300
                bg-[radial-gradient(ellipse_at_0%_100%,rgba(255,215,0,0.04)_0%,transparent_55%)]"
              />
              <div className="relative z-10">
                <span
                  className="block font-serif text-[13px] tracking-[0.15em] text-[#FFD700]/50 mb-5"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {v.num}
                </span>
                <h3
                  className="font-serif font-bold text-[22px] text-white tracking-[-0.3px] mb-3
                  group-hover:text-[#FFD700] transition-colors duration-300"
                >
                  {v.title}
                </h3>
                <p className="text-[14px] leading-[1.75] text-white/45 font-light">
                  {v.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TEAM ──────────────────────────────────── */}
      <section className="px-10 py-24 border-b border-white/[0.05]">
        <div
          className="flex items-center gap-3 text-[10px] tracking-[0.22em] uppercase
          text-[#FFD700] opacity-80 mb-14"
        >
          Jamoamiz
          <span className="block w-12 h-px bg-[#FFD700] opacity-40" />
        </div>

        <div className="grid grid-cols-3 gap-px bg-[#FFD700]/10">
          {team.map((person) => (
            <div
              key={person.name}
              className="group bg-[#0a0a0a] p-10 relative overflow-hidden
                hover:bg-[rgba(255,215,0,0.015)] transition-colors duration-300"
            >
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100
                transition-opacity duration-300
                bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,215,0,0.05)_0%,transparent_60%)]"
              />
              <div className="relative z-10">
                {/* avatar */}
                <div
                  className="w-14 h-14 border border-[#FFD700]/20 flex items-center justify-center
                  mb-7 group-hover:border-[#FFD700]/50 transition-colors duration-300"
                >
                  <span
                    className="font-serif font-black text-[22px] text-[#FFD700]/60
                    group-hover:text-[#FFD700] transition-colors duration-300"
                  >
                    {person.initial}
                  </span>
                </div>
                <div className="font-serif font-bold text-[20px] text-white tracking-[-0.3px] mb-1">
                  {person.name}
                </div>
                <div className="text-[10px] tracking-[0.15em] uppercase text-[#FFD700]/60 mb-5">
                  {person.role}
                </div>
                <p className="text-[13px] leading-[1.75] text-white/40 font-light">
                  {person.bio}
                </p>
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
        <p className="text-white/45 text-[15px] mb-11 font-light max-w-sm mx-auto leading-[1.7]">
          Har bir mehmonimiz uchun alohida joy, alohida finjon.
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
            href="/contact"
            className="group flex items-center gap-2 text-white/45 text-[12px]
              tracking-[0.1em] uppercase transition-colors duration-200 hover:text-white"
          >
            Bog'lanish
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
