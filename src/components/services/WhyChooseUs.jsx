import FadeInSection from "../animation/FadeEffect";

const benefits = [
  {
    icon: "⬡",
    title: "We start with reality, not templates",
    desc: "Before we touch a single tool, we deep-dive into how your team actually works — including the messy manual workarounds. Systems we build get adopted because they fit real behavior.",
  },
  {
    icon: "↑",
    title: "Scalable & independent systems",
    desc: "Every system we build is documented, clearly structured, and designed to outlive us. Your team operates with total confidence — no external dependency, no bottlenecks on our availability.",
  },
  {
    icon: "◈",
    title: "Cost-effective execution",
    desc: "Investing in structured operations today prevents costly breakdowns later. We eliminate redundant tools and manual overhead, delivering measurable ROI from day one.",
  },
  {
    icon: "⊕",
    title: "Mid-level and senior experts",
    desc: "Our team consists of specialists with deep vertical expertise — not generalists. Every engagement is led by people who've solved exactly your kind of problem before.",
  },
  {
    icon: "✦",
    title: "Proven trust, lasting results",
    desc: "We measure success by how your systems perform months after implementation, not just at launch. Our 98% client satisfaction rate reflects relationships built on sustained outcomes.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container">
        <div className="wrapper">
          <FadeInSection
            initial={{ opacity: 0, x: -60 }}
            scrollTop={{ opacity: 1, x: 0 }}
            scrollBottom={{ opacity: 0, x: -60 }}
            margin="40px 0px -40px 0px"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 lg:mb-20">
              <div>
                <h5 className="font-montserrat uppercase text-sm tracking-widest text-teal mb-4">
                  [ Benefits of working with us ]
                </h5>
                <h2 className="font-russo-one text-3xl sm:text-4xl lg:text-5xl leading-tight">
                  Why should you choose AWTOMATIG?
                </h2>
              </div>
              <div className="flex flex-col justify-end">
                <p className="font-montserrat text-dark-white/60 text-base lg:text-lg border-l-4 border-teal pl-6 leading-relaxed">
                  We deliver more than operational support. We deliver a
                  strategic foundation that scales with your ambition.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
              {benefits.map((b, i) => (
                <div key={i} className="group">
                  <div className="mb-5">
                    <span className="text-4xl text-teal font-mono leading-none select-none">
                      {b.icon}
                    </span>
                  </div>
                  <h3 className="font-inter font-bold text-lg mb-3 group-hover:text-teal transition-colors duration-300">
                    {b.title}
                  </h3>
                  <p className="text-dark-white/50 font-montserrat text-sm leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
