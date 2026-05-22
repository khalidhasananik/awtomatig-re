import FadeInSection from "../animation/FadeEffect";

const stats = [
  { value: "500M+", label: "investments raised by our clients" },
  { value: "x2", label: "avg projects per client — most come back" },
  { value: "5.0", label: "on Clutch — 40+ reviews" },
  { value: "98%", label: "client satisfaction rate" },
];

export default function StatsBar() {
  return (
    <section className="py-14 bg-dark-1 rounded-3xl mx-4 md:mx-10 lg:mx-16 my-10">
      <div className="container">
        <FadeInSection
          initial={{ opacity: 0, y: 30 }}
          scrollTop={{ opacity: 1, y: 0 }}
          scrollBottom={{ opacity: 0, y: 30 }}
          margin="40px 0px -40px 0px"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y-2 lg:divide-y-0 lg:divide-x divide-dark-2/20">
            {stats.map((stat, i) => (
              <div key={i} className="px-6 py-4 lg:px-10 lg:py-2">
                <div className="font-russo-one text-3xl md:text-4xl lg:text-5xl text-teal leading-tight">
                  {stat.value}
                </div>
                <div className="font-montserrat text-xs uppercase tracking-widest text-dark-white/40 mt-2 max-w-[180px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
