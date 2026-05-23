import Plasma from "@/components/Plasma";
import FadeInSection from "@/components/animation/FadeEffect";
import MarqueHighlightText from "@/components/MarqueHighlightText";
import ExpertiseTabs from "@/components/services/ExpertiseTabs";
import GetInTouch from "@/components/services/GetInTouch";
import ServiceCTA from "@/components/services/ServiceCTA";
import Sponsor from "@/components/services/Sponsor";
import StatsBar from "@/components/services/StatsBar";
import WhoBenefits from "@/components/services/WhoBenefits";
import WhyChooseUs from "@/components/services/WhyChooseUs";
import Link from "next/link";

export default function Services() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="min-h-screen relative flex items-center overflow-hidden">
        <Plasma color="#02d5e8" speed={1} direction="forward" scale={1} opacity={1} mouseInteractive={false} />
        {/* Teal ambient glow */}
        <span className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[900px] h-[500px] bg-teal/5 blur-[120px] rounded-full pointer-events-none -z-0" />

        <div className="container relative z-10">
          <FadeInSection
            initial={{ opacity: 0, y: 40 }}
            scrollTop={{ opacity: 1, y: 0 }}
            scrollBottom={{ opacity: 0, y: 40 }}
            margin="40px 0px -40px 0px"
          >
            <div className="wrapper flex flex-col items-center text-center gap-5 pt-32 pb-24">
              <span className="font-montserrat text-xs uppercase tracking-widest text-teal border border-teal/30 px-5 py-2 rounded-full">
                Operational Services
              </span>

              <h1 className="font-russo-one text-4xl sm:text-5xl lg:text-6xl xl:text-7xl max-w-4xl leading-[1.1] mt-2">
                Better business through{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #02d5e8 0%, #44b6e9 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  smarter technology.
                </span>
              </h1>

              <p className="font-inter text-dark-white/60 max-w-2xl text-base sm:text-lg leading-relaxed mt-2">
                Using automation and human expertise, we optimize complex
                processes to deliver superior, data-driven results. We bridge
                the gap between outsourcing and digital transformation.
              </p>

              <div className="flex flex-wrap gap-4 justify-center mt-4">
                <Link href="/contact" className="glow-button font-inter">
                  Let&apos;s Talk
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <a
                  href="#our-services"
                  className="font-inter font-semibold text-sm uppercase tracking-wider border border-dark-2/40 px-7 py-4 rounded-full hover:border-teal/40 hover:text-teal transition-all duration-300"
                >
                  View Our Services
                </a>
              </div>

              {/* Investor trust strip */}
              <div className="mt-10 pt-8 border-t border-dark-2/20 w-full max-w-xl">
                <p className="font-montserrat text-xs uppercase tracking-widest text-dark-white/30 mb-4">
                  Designing products backed by top-tier investors
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 opacity-40">
                  <span className="font-russo-one text-sm">techstars_</span>
                  <span className="font-inter font-bold italic text-sm">
                    Y Combinator
                  </span>
                  <span className="font-russo-one text-sm">a16z</span>
                  <span className="font-montserrat font-bold text-xs tracking-widest">
                    AND MORE
                  </span>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── Stats ── */}
      <StatsBar />

      {/* ── Expertise Tabs ── */}
      <ExpertiseTabs />

      {/* ── Marquee ── */}
      <section className="mt-0 mb-20">
        <MarqueHighlightText
          marqueeText={[
            "/From growth pressure to structured momentum",
            "/From execution overload to scalable systems",
            "/From manual effort to intelligent flow",
          ]}
        />
      </section>

      {/* ── Who Benefits ── */}
      <WhoBenefits />

      {/* ── Why Choose Us ── */}
      <WhyChooseUs />

      {/* ── CTA ── */}
      <ServiceCTA />

      {/* ── Sponsor ── */}
      <section className="mt-14 sm:mt-16 md:mt-20 lg:mt-24">
        <Sponsor />
      </section>

      {/* ── Get In Touch ── */}
      <section className="my-14 sm:my-16 md:my-20 lg:my-32">
        <GetInTouch />
      </section>
    </main>
  );
}
