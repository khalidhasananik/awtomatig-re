"use client";
import Link from "next/link";
import { useState } from "react";
import { servicesData } from "@/contants/services";

export default function ExpertiseTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  const switchTab = (index) => {
    if (index === activeIndex) return;
    setVisible(false);
    setTimeout(() => {
      setActiveIndex(index);
      setVisible(true);
    }, 180);
  };

  const active = servicesData[activeIndex];

  return (
    <section className="py-20 lg:py-32" id="our-services">
      <div className="container">
        <div className="wrapper">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-14">
            <div>
              <h5 className="font-montserrat uppercase text-sm tracking-widest text-teal">
                [ What we do best ]
              </h5>
              <h2 className="font-russo-one text-3xl sm:text-4xl lg:text-5xl mt-4 text-white">
                Our Expertise
              </h2>
            </div>
            <p className="text-dark-white/60 max-w-sm font-montserrat text-sm lg:text-base">
              We blend strategic execution with cutting-edge technology to
              deliver operational systems that set the standard.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] xl:grid-cols-[340px_1fr] gap-4 lg:gap-8">
            {/* Tab list */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-hide">
              {servicesData.map((service, i) => (
                <button
                  key={service.id}
                  onClick={() => switchTab(i)}
                  className={`flex-shrink-0 text-left px-5 py-4 rounded-xl border transition-all duration-300 ${
                    i === activeIndex
                      ? "bg-dark border-teal/50 shadow-[0_0_24px_rgba(2,213,232,0.12)]"
                      : "border-dark-2/20 bg-dark-1/40 hover:border-dark-2/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-montserrat text-xs font-bold transition-colors ${
                        i === activeIndex ? "text-teal" : "text-dark-2"
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <span
                      className={`font-inter font-semibold text-sm transition-colors ${
                        i === activeIndex ? "text-white" : "text-dark-white/50"
                      }`}
                    >
                      {service.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Tab content panel */}
            <div
              className="bg-dark-1 border border-dark-2/20 p-7 md:p-10 rounded-xl flex flex-col justify-between min-h-[420px]"
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 0.18s ease-in-out",
              }}
            >
              <div>
                <div className="flex justify-between items-start mb-6 gap-4">
                  <div>
                    <span className="font-montserrat text-xs uppercase tracking-widest text-teal/70">
                      {active.tagline}
                    </span>
                    <h3 className="font-russo-one text-2xl md:text-3xl mt-2 text-white">
                      {active.title}
                    </h3>
                  </div>
                  <span className="font-russo-one text-5xl md:text-6xl text-teal/8 select-none leading-none hidden sm:block">
                    0{activeIndex + 1}
                  </span>
                </div>

                <p className="font-montserrat text-dark-white/60 text-sm md:text-base mb-10 max-w-2xl leading-relaxed">
                  {active.summary}
                </p>

                <ul className="space-y-3">
                  {active.features.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-dark-white/80 font-inter text-sm"
                    >
                      <span className="text-teal mt-0.5 flex-shrink-0 font-bold">
                        ✓
                      </span>
                      <span>{f.heading}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={`/services/${active.slug}`}
                className="inline-flex items-center gap-2 text-teal font-bold font-inter hover:underline mt-10 group w-fit"
              >
                Learn more about this service
                <span className="group-hover:translate-x-1 transition-transform inline-block">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
