"use client";
import Plasma from "@/components/Plasma";

export default function AboutHero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <style>{`
        @keyframes ah-up {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ah-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes ah-line {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes ah-bob {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(7px); }
        }
        .ah-meta   { animation: ah-in  0.7s ease both 0.15s; }
        .ah-name   { animation: ah-up  0.9s cubic-bezier(0.16,1,0.3,1) both 0.35s; }
        .ah-rule   { animation: ah-line 0.9s cubic-bezier(0.16,1,0.3,1) both 0.85s; transform-origin: left; }
        .ah-col1   { animation: ah-up  0.7s ease both 1.05s; }
        .ah-col2   { animation: ah-up  0.7s ease both 1.2s; }
        .ah-scroll { animation: ah-in  0.7s ease both 1.45s; }
        .ah-bob    { animation: ah-bob 2s ease-in-out infinite 2s; }
      `}</style>

      <Plasma color="#02d5e8" speed={1} direction="forward" scale={1} opacity={1} mouseInteractive={false} />

      {/* Layered overlays for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(160deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.65) 100%)",
        }}
      />
      {/* Bottom fade so next section doesn't hard-cut */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to top, #000 0%, transparent 100%)" }}
      />

      {/* Content */}
      <div className="relative z-10 container min-h-screen flex flex-col justify-center">
        <div className="wrapper py-36 relative">

          {/* ── Meta row ── */}
          <div className="ah-meta flex items-center justify-between mb-10 sm:mb-14">
            <div className="flex items-center gap-3">
              <span
                className="inline-block w-5 h-px"
                style={{ background: "#3BEBFF" }}
              />
              <span
                className="font-montserrat text-[10px] tracking-[0.42em] uppercase"
                style={{ color: "#3BEBFF" }}
              >
                About us
              </span>
            </div>
            <span className="font-montserrat text-[10px] tracking-[0.32em] uppercase text-white/25 hidden sm:block">
              Est. 2022
            </span>
          </div>

          {/* ── Name block ── */}
          <div className="ah-name relative">
            {/* Ghost outline offset behind the main text */}
            <div
              aria-hidden
              className="absolute font-russo-one uppercase leading-[0.88] select-none pointer-events-none text-transparent"
              style={{
                fontSize: "clamp(3.2rem, 13vw, 11rem)",
                WebkitTextStroke: "1px rgba(59,235,255,0.07)",
                top: "6px",
                left: "6px",
              }}
            >
              AWTOMATIG
            </div>

            <h1
              className="font-russo-one uppercase text-white leading-[0.88] relative"
              style={{ fontSize: "clamp(3.2rem, 13vw, 11rem)" }}
            >
              AWTOMATIG
              <span
                style={{
                  color: "#3BEBFF",
                  textShadow: "0 0 50px rgba(59,235,255,0.5)",
                  marginLeft: "0.06em",
                }}
              >
                .
              </span>
            </h1>
          </div>

          {/* ── Divider ── */}
          <div
            className="ah-rule h-px mt-10 mb-10 sm:mt-12 sm:mb-12"
            style={{ background: "rgba(255,255,255,0.12)" }}
          />

          {/* ── Description columns ── */}
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-14 max-w-4xl">
            <p
              className="ah-col1 font-inter text-base lg:text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              We help businesses scale operations, technology, and
              execution — without the chaos of building everything in-house.
            </p>
            <div className="ah-col2">
              <p
                className="font-inter text-base lg:text-lg leading-relaxed"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                Your partner in sustainable, high-growth digital transformation.
              </p>
              {/* Small tag row */}
              <div className="flex flex-wrap gap-2 mt-5">
                {["Operations", "Technology", "Execution"].map((tag) => (
                  <span
                    key={tag}
                    className="font-montserrat text-[10px] tracking-[0.25em] uppercase px-3 py-1.5 rounded-full"
                    style={{
                      border: "1px solid rgba(59,235,255,0.2)",
                      color: "rgba(59,235,255,0.55)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Scroll indicator ── */}
          <div className="ah-scroll absolute -bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span
              className="font-montserrat text-[9px] tracking-[0.45em] uppercase"
              style={{ color: "rgba(255,255,255,0.2)" }}
            >
              Scroll
            </span>
            <div className="ah-bob flex flex-col items-center gap-1.5">
              <div
                className="w-px h-10"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(59,235,255,0.4), transparent)",
                }}
              />
              <div
                className="w-1 h-1 rounded-full"
                style={{ background: "rgba(59,235,255,0.35)" }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
