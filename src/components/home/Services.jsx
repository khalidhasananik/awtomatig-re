import FadeInSection from "../animation/FadeEffect";
import CommonHeading from "../CommonHeading";

const whyData = [
  {
    id: 1,
    title: "We start with how things actually work",
    desc: 'Most problems don\'t come from bad tools; they come from systems that don\'t match reality. Before suggesting solutions, we deep-dive into your team\'s existing habits, including the "messy" manual workarounds. By respecting real-world behavior first, we ensure the new technology we build actually gets adopted and delivers results.',
  },
  {
    id: 2,
    title: "We simplify, then accelerate",
    desc: "Speed feels productive until it creates noise. With more tools and choices available every day, our focus is removing unnecessary complexity first. We strip away redundant decisions and friction points to create a lean foundation. Only then do we apply automation, ensuring clarity always comes before velocity for sustainable growth.",
  },
  {
    id: 3,
    title: "We build independent systems",
    desc: "A truly high-performance system should outlive the people who built it—including us. We focus on documentation, clear structures, and intuitive design so your team can operate with total confidence. By removing the need for constant external support, we turn independence into a feature that reduces risk and maximizes long-term efficiency.",
  },
  {
    id: 4,
    title: "We value lasting results",
    desc: "Success is measured by how your systems perform months after implementation. We track real-world impact and ROI, ensuring every workflow directly supports your bottom line. By building with scalability and reliability in mind, we turn your operational infrastructure into a competitive advantage that remains effective as your traffic and business grow.",
  },
];

export default function Services() {
  return (
    <div className="container">
      <FadeInSection
        initial={{ opacity: 0, y: 40 }}
        scrollTop={{ opacity: 1, y: 0 }}
        scrollBottom={{ opacity: 0, y: 40 }}
        margin="40px 0px -40px 0px"
      >
        <div className="wrapper mt-20 mb-14 text-center sm:text-left relative z-10">
          <CommonHeading title="Why teams stay">
            Because the work feels different
          </CommonHeading>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 mt-16 md:mt-20">
            {whyData.map((item, index) => (
              <div
                key={item.id}
                className="group border-t border-white/15 pt-8 pb-10 pr-0 xl:pr-10 hover:border-teal transition-colors duration-300"
              >
                <span className="text-teal font-mono text-xs tracking-[0.2em] font-medium mb-5 block">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-semibold font-inter text-white text-[15px] leading-snug mb-5 group-hover:text-teal transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-montserrat font-light text-sm text-white/55 leading-relaxed text-justify sm:text-left">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}
