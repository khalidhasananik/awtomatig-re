"use client";
import group_meeting from "@/assets/about/man-working.gif";
import Image from "next/image";

const stats = [
  { num: "4+", label: "Years", sub: "Operational since 2022" },
  { num: "10+", label: "Clients", sub: "eCommerce, SaaS & services" },
  { num: "95%+", label: "Retention", sub: "Long-term partnerships" },
  { num: "50k+", label: "Tasks", sub: "Ops, design & dev" },
];

export default function OurStory() {
  return (
    <section className="container mt-14 sm:mt-16 md:mt-20 lg:mt-32 relative overflow-visible">
      <div className="wrapper relative">

        {/* Watermark */}
        <div
          aria-hidden
          className="absolute -right-10 -top-10 font-russo-one select-none pointer-events-none leading-none"
          style={{ fontSize: "clamp(120px, 20vw, 280px)", opacity: 0.02, color: "#fff" }}
        >
          01
        </div>

        {/* Section label */}
        <div className="flex items-center gap-4 mb-12 sm:mb-16">
          <span
            className="font-montserrat text-[10px] tracking-[0.38em] uppercase whitespace-nowrap"
            style={{ color: "#3BEBFF" }}
          >
            01 — Our Story
          </span>
          <div
            className="flex-1 h-px"
            style={{
              background:
                "linear-gradient(to right, rgba(59,235,255,0.5), transparent)",
            }}
          />
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_460px] gap-12 xl:gap-20 items-center">

          {/* ── Left column ── */}
          <div>
            {/* Headline */}
            <h2 className="font-russo-one uppercase leading-none mb-10">
              <span
                className="block mb-1"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.75rem)",
                  color: "rgba(255,255,255,0.55)",
                  letterSpacing: "0.01em",
                }}
              >
                Building systems
              </span>
              <span
                className="block mb-1"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.75rem)",
                  color: "rgba(255,255,255,0.75)",
                  letterSpacing: "0.01em",
                }}
              >
                that turn growth
              </span>
              <span
                className="block"
                style={{
                  fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
                  color: "#3BEBFF",
                  textShadow: "0 0 80px rgba(59,235,255,0.3), 0 0 20px rgba(59,235,255,0.15)",
                  letterSpacing: "0.01em",
                }}
              >
                into legacy.
              </span>
            </h2>

            {/* Description */}
            <p
              className="font-inter text-base lg:text-lg leading-relaxed max-w-[440px] mb-14"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Empower your team with AI systems that learn, adapt and improve
              over time. Together, we&apos;ll pioneer the next generation.
            </p>

            {/* Stats strip */}
            <div
              className="grid grid-cols-2 sm:grid-cols-4"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
            >
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="group pt-6 pr-5 transition-all duration-300 cursor-default"
                  style={{
                    borderRight:
                      i < stats.length - 1
                        ? "1px solid rgba(255,255,255,0.08)"
                        : "none",
                  }}
                >
                  <div
                    className="font-sora font-black leading-none transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(59,235,255,0.6)]"
                    style={{
                      fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                      color: "#3BEBFF",
                    }}
                  >
                    {s.num}
                  </div>
                  <div className="font-russo-one text-white text-xs uppercase tracking-wider mt-2 mb-1">
                    {s.label}
                  </div>
                  <div
                    className="font-inter text-[11px] leading-snug"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                  >
                    {s.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right column — GIF frame ── */}
          <div className="relative mt-8 lg:mt-0 self-stretch flex items-center">

            {/* Ghost offset border */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                border: "1px solid rgba(59,235,255,0.2)",
                transform: "translate(12px, 12px)",
              }}
            />

            {/* Card */}
            <div
              className="relative w-full rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(255,255,255,0.07)",
                background:
                  "linear-gradient(145deg, rgba(2,213,232,0.07) 0%, transparent 50%)",
              }}
            >
              {/* Status bar */}
              <div
                className="flex items-center gap-3 px-5 py-3"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
              >
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ backgroundColor: "#3BEBFF", boxShadow: "0 0 6px #3BEBFF" }}
                />
                <span
                  className="font-montserrat text-[9px] tracking-[0.35em] uppercase"
                  style={{ color: "rgba(255,255,255,0.22)" }}
                >
                  System active
                </span>
                <div className="ml-auto flex gap-1.5">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: `rgba(59,235,255,${0.15 + i * 0.15})` }}
                    />
                  ))}
                </div>
              </div>

              {/* Corner L-brackets */}
              {[
                { pos: "top-[52px] left-3", t: true, l: true },
                { pos: "top-[52px] right-3", t: true, r: true },
                { pos: "bottom-3 left-3", b: true, l: true },
                { pos: "bottom-3 right-3", b: true, r: true },
              ].map(({ pos, t, b, l, r }, i) => (
                <div
                  key={i}
                  className={`absolute w-4 h-4 pointer-events-none ${pos}`}
                  style={{
                    borderTop: t ? "1.5px solid rgba(59,235,255,0.5)" : "none",
                    borderBottom: b ? "1.5px solid rgba(59,235,255,0.5)" : "none",
                    borderLeft: l ? "1.5px solid rgba(59,235,255,0.5)" : "none",
                    borderRight: r ? "1.5px solid rgba(59,235,255,0.5)" : "none",
                  }}
                />
              ))}

              <Image
                src={group_meeting}
                alt="team at work"
                height={556}
                width={460}
                className="w-full h-auto object-cover"
                unoptimized
              />

              {/* Scanlines */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.07) 3px, rgba(0,0,0,0.07) 4px)",
                }}
              />

              {/* Bottom glow */}
              <div
                className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(2,213,232,0.1), transparent)",
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
