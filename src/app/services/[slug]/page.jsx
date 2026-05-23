import BackgroundAnimation from "@/components/BackgroundAnimation";
import FadeInSection from "@/components/animation/FadeEffect";
import GetInTouch from "@/components/services/GetInTouch";
import { servicesData } from "@/contants/services";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | AWTOMATIG`,
    description: service.summary,
  };
}

export default async function ServiceSubPage({ params }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) notFound();

  const serviceIndex = servicesData.findIndex((s) => s.slug === slug);

  return (
    <main>
      {/* ── Hero ── */}
      <section className="min-h-screen relative flex items-center overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-full">
          <BackgroundAnimation className="min-h-screen" />
        </div>

        {/* Teal ambient glow */}
        <span className="absolute top-0 left-1/3 w-full max-w-[700px] h-[500px] bg-teal/6 blur-[130px] rounded-full pointer-events-none" />

        {/* Large background number — barely visible anchor */}
        <span
          className="absolute right-0 top-1/2 -translate-y-1/2 font-russo-one select-none pointer-events-none leading-none hidden lg:block"
          style={{
            fontSize: "clamp(200px, 25vw, 380px)",
            color: "rgba(2, 213, 232, 0.03)",
            lineHeight: 1,
          }}
        >
          0{serviceIndex + 1}
        </span>

        <div className="container relative z-10">
          <div className="wrapper pt-32 pb-20">
            {/* Breadcrumb */}
            <div className="hero-animate-1 flex items-center gap-2 font-montserrat text-xs uppercase tracking-widest text-dark-white/30 mb-8">
              <Link href="/services" className="hover:text-teal transition-colors">
                Services
              </Link>
              <span>/</span>
              <span className="text-teal/70">{service.tagline}</span>
            </div>

            <div className="max-w-3xl">
              <span className="hero-animate-1 font-montserrat text-xs uppercase tracking-widest text-teal border border-teal/30 px-4 py-1.5 rounded-full inline-block mb-6">
                {service.tagline}
              </span>

              <h1 className="hero-animate-2 font-russo-one text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] mb-6">
                {service.title}
              </h1>

              <p className="hero-animate-3 font-inter text-dark-white/60 text-base sm:text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl">
                {service.heroDesc}
              </p>

              <div className="hero-animate-4 flex flex-wrap gap-4">
                <Link href="/contact" className="glow-button font-inter">
                  Get Started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
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
                <Link
                  href="/services"
                  className="font-inter font-semibold text-sm uppercase tracking-wider border border-dark-2/40 px-7 py-4 rounded-full hover:border-teal/40 hover:text-teal transition-all duration-300"
                >
                  ← All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Feature Cards ── */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="wrapper">
            <FadeInSection
              initial={{ opacity: 0, y: 40 }}
              scrollTop={{ opacity: 1, y: 0 }}
              scrollBottom={{ opacity: 0, y: 40 }}
              margin="40px 0px -40px 0px"
            >
              <div className="mb-12">
                <h5 className="font-montserrat uppercase text-xs tracking-widest text-teal mb-4">
                  [ What&apos;s included ]
                </h5>
                <h2 className="font-russo-one text-3xl sm:text-4xl lg:text-5xl max-w-xl leading-tight">
                  What we deliver
                </h2>
              </div>

              {/* Gradient border card container */}
              <div
                className="rounded-2xl p-px"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(2,213,232,0.6) 0%, rgba(68,182,233,0.2) 50%, rgba(2,213,232,0.05) 100%)",
                }}
              >
                <div className="bg-dark rounded-2xl p-1.5">
                  <div className="bg-white text-black rounded-xl px-5 pt-5 pb-8">
                    <div className="flex items-center gap-3 pb-5 mb-5 border-b border-dark-2/10">
                      <span className="font-russo-one text-base">{service.tagline}</span>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      {service.features.map((feature, i) => (
                        <div
                          key={i}
                          className="border border-dark-2/20 p-5 rounded-xl hover:border-transparent hover:bg-dark-2/10 transition-all duration-300 cursor-default min-h-[260px] flex flex-col"
                        >
                          <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center mb-4 flex-shrink-0">
                            <span className="font-russo-one text-xs text-teal">
                              0{i + 1}
                            </span>
                          </div>
                          <h3 className="font-inter font-bold text-sm mb-3 leading-snug">
                            {feature.heading}
                          </h3>
                          <p className="font-montserrat text-xs text-dark-2 leading-relaxed flex-1">
                            {feature.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-20 lg:py-28 bg-dark-1 rounded-[32px] mx-4 md:mx-10 lg:mx-16">
        <div className="container">
          <div className="wrapper">
            <FadeInSection
              initial={{ opacity: 0, y: 40 }}
              scrollTop={{ opacity: 1, y: 0 }}
              scrollBottom={{ opacity: 0, y: 40 }}
              margin="40px 0px -40px 0px"
            >
              <div className="mb-14">
                <h5 className="font-montserrat uppercase text-xs tracking-widest text-teal mb-4">
                  [ How it works ]
                </h5>
                <h2 className="font-russo-one text-3xl sm:text-4xl lg:text-5xl max-w-xl leading-tight">
                  Our process
                </h2>
              </div>

              {/* Steps grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
                {service.process.map((item, i) => (
                  <div
                    key={i}
                    className="relative flex flex-col gap-4 p-6 rounded-xl border border-dark-2/20 bg-black/30 hover:border-teal/30 hover:bg-dark/50 transition-all duration-300 group"
                  >
                    {/* Step number */}
                    <div className="flex items-center gap-3">
                      <span className="font-russo-one text-3xl text-teal leading-none">
                        {item.step}
                      </span>
                      {/* Connector line (desktop only, not on last item) */}
                      {i < service.process.length - 1 && (
                        <div className="hidden lg:block absolute top-[38px] left-[calc(100%+8px)] right-0 h-px bg-gradient-to-r from-teal/30 to-transparent w-[calc(100%-16px)] pointer-events-none" />
                      )}
                    </div>

                    <h3 className="font-inter font-bold text-base group-hover:text-teal transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="font-montserrat text-dark-white/50 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ── Related Services ── */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="wrapper">
            <FadeInSection
              initial={{ opacity: 0, y: 30 }}
              scrollTop={{ opacity: 1, y: 0 }}
              scrollBottom={{ opacity: 0, y: 30 }}
              margin="40px 0px -40px 0px"
            >
              <div className="mb-10">
                <h5 className="font-montserrat uppercase text-xs tracking-widest text-teal mb-4">
                  [ Explore more ]
                </h5>
                <h2 className="font-russo-one text-2xl sm:text-3xl">
                  Other services
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {servicesData
                  .filter((s) => s.slug !== slug)
                  .slice(0, 4)
                  .map((s, i) => (
                    <Link
                      key={s.id}
                      href={`/services/${s.slug}`}
                      className="group p-5 rounded-xl border border-dark-2/20 bg-dark-1/40 hover:border-teal/40 hover:bg-dark/60 transition-all duration-300"
                    >
                      <span className="font-montserrat text-xs text-teal/60 uppercase tracking-widest block mb-3">
                        0{i + 1 <= serviceIndex ? i + 1 : i + 2}
                      </span>
                      <h3 className="font-inter font-semibold text-sm group-hover:text-teal transition-colors mb-2">
                        {s.title}
                      </h3>
                      <span className="text-teal text-xs font-inter group-hover:translate-x-1 transition-transform inline-block">
                        →
                      </span>
                    </Link>
                  ))}
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ── Get In Touch ── */}
      <section className="my-14 sm:my-16 md:my-20 lg:my-24">
        <GetInTouch />
      </section>
    </main>
  );
}
