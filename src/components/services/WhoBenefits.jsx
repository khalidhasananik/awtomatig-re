import FadeInSection from "../animation/FadeEffect";

const clients = [
  {
    num: "01",
    title: "Startups & Scaleups",
    desc: "Building your operational foundation from the ground up — structured systems that scale with your growth without adding unnecessary overhead.",
  },
  {
    num: "02",
    title: "B2B Companies",
    desc: "Dedicated to creating high-performing back-office and CRM systems designed to shorten sales cycles and drive consistent revenue growth.",
  },
  {
    num: "03",
    title: "E-commerce Businesses",
    desc: "Streamlining fulfillment workflows, inventory management, and customer support operations to reduce friction and maximize margins.",
  },
  {
    num: "04",
    title: "Professional Services",
    desc: "Helping agencies, consultancies, and service firms systematize delivery so quality stays high as client volume increases.",
  },
  {
    num: "05",
    title: "Tech Companies",
    desc: "Prioritizing operational clarity so your engineering teams can focus on product — not internal coordination or process debt.",
  },
  {
    num: "06",
    title: "Real Estate Businesses",
    desc: "Automating lead management, deal tracking, and administrative workflows so agents can focus on closing, not paperwork.",
  },
];

export default function WhoBenefits() {
  return (
    <section className="py-20 lg:py-32 bg-dark-1 rounded-[24px] md:rounded-[48px] mx-4 md:mx-10 lg:mx-16">
      <div className="container">
        <div className="wrapper">
          <FadeInSection
            initial={{ opacity: 0, y: 40 }}
            scrollTop={{ opacity: 1, y: 0 }}
            scrollBottom={{ opacity: 0, y: 40 }}
            margin="40px 0px -40px 0px"
          >
            <div className="text-center mb-14">
              <h5 className="font-montserrat uppercase text-sm tracking-widest text-teal mb-4">
                [ Tailored solutions for your business ]
              </h5>
              <h2 className="font-russo-one text-3xl sm:text-4xl lg:text-5xl max-w-2xl mx-auto leading-tight">
                Who benefits from our services?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {clients.map((client) => (
                <div
                  key={client.num}
                  className="p-8 border border-dark-2/20 bg-black/30 hover:bg-dark/60 hover:border-teal/30 transition-all duration-300 group rounded-xl cursor-default"
                >
                  <span className="font-russo-one text-dark-2/40 text-sm block mb-6 group-hover:text-teal/40 transition-colors">
                    {client.num}
                  </span>
                  <h3 className="font-inter font-bold text-lg mb-3 group-hover:text-teal transition-colors duration-300">
                    {client.title}
                  </h3>
                  <p className="text-dark-white/50 font-montserrat text-sm leading-relaxed">
                    {client.desc}
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
