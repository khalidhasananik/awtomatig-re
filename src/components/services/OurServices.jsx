"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import CommonHeading from "../CommonHeading";
import { servicesData } from "@/contants/services";

const servicesCard = servicesData.map((s) => ({
  id: s.id,
  headding: s.tagline,
  box1: s.features[0],
  box2: s.features[1],
  box3: s.features[2],
}));
gsap.registerPlugin(ScrollTrigger);

export default function OurService() {
  const sectionRef = useRef(null);
  const sidebarRef = useRef(null);
  const boxesRef = useRef(null);

  const handleClick = (value) => {
    const section = document.getElementById(value);
    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const sidebar = sidebarRef.current;
      const boxes = boxesRef.current;

      if (!section || !sidebar || !boxes) return;

      const mm = gsap.matchMedia();

      const getFinalEnd = () => {
        const endValue = boxes.scrollHeight - section.offsetHeight;
        return Math.max(endValue, 0);
      };

      mm.add("(min-width: 1024px)", () => {
        const finalEnd = getFinalEnd();

        // PIN SIDEBAR
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: finalEnd,
          pin: sidebar,
          pinSpacing: false,
          scrub: true,

          onUpdate: (self) => {
            if (self.scroll() > section.offsetHeight + 300) {
              sidebar.classList.add("hidden");
            } else {
              sidebar.classList.remove("hidden");
            }
          },
        });

        // SCROLL CONTENT
        gsap.to(boxes, {
          y: -finalEnd,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: finalEnd,
            scrub: true,
          },
        });
      });

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="container" ref={sectionRef}>
      <div className="wrapper mb-14  text-center sm:text-left relative z-10">
        <CommonHeading title="OUR SERVICES">
          Transform your operational DNA with tech-enabled BPO services.
        </CommonHeading>

        <div className="grid lg:grid-cols-[280px_1fr] lg:gap-8 xl:grid-cols-[300px_1fr  xl:gap-20 mt-0 xl:mt-20 overflow-hidden">
          <aside ref={sidebarRef} className="relative">
            <span className="absolute top-0 size-[400px]  bg-[linear-gradient(215.67deg,rgba(2,213,232,0.55)_18.02%,rgba(3,50,103,0.55)_94.4%)] rounded-full block  blur-[150px]"></span>
            <ul className="font-bold space-y-3 mt-12 transition-all duration-500 relative z-10">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <button
                    className="py-3 border-b w-full text-left"
                    onClick={() => handleClick("chatbot-" + service.id)}
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div ref={boxesRef}>
            {servicesCard.map((cardData) => (
              <div
                key={cardData.id}
                className="mb-20"
                id={"chatbot-" + cardData.id}
              >
                {/* <div>
                  <h1 className="font-extrabold text-2xl">
                    Custom AI Chatbots
                  </h1>
                  <p className="font-medium mt-5">
                    Deploy intelligent conversational agents that understand
                    context, learn from interactions, and provide personalized
                    responses to enhance customer experience and support.
                  </p>
                </div> */}
                <div>
                  <div
                    className="bg-linear-90 from-teal to-white rounded-2xl p-1.5  mt-10 shadow-[-4px_10px_33.9px_0px_#FFFFFF87] ]
"
                  >
                    <div className="bg-white text-black px-4 pt-4 pb-8  rounded-xl">
                      <h1 className="font-russo-one text-xl pb-4">
                        {cardData.headding}
                      </h1>
                      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                        <div className="border border-dark-3 p-4 rounded-xl group hover:bg-dark-2/30 hover:border-transparent group-active:bg-dark-3 transition-colors duration-300 cursor-pointer h-[286px]">
                          <h2 className="font-bold font-inter mt-2">
                            {cardData.box1.heading}
                          </h2>
                          <p className="mt-2 text-sm  font-montserrat text-justify">
                            {cardData.box1.desc}
                          </p>
                        </div>
                        <div className="border  p-4 rounded-xl group hover:bg-dark-2/30 hover:border-transparent transition-colors duration-300 cursor-pointer h-[286px]">
                          <h2 className="font-bold font-inter mt-2">
                            {cardData.box2.heading}
                          </h2>
                          <p className="mt-2 text-sm  font-montserrat text-justify">
                            {cardData.box2.desc}
                          </p>
                        </div>
                        <div className="border border-dark-3 p-4 rounded-xl group hover:bg-dark-2/30 hover:border-transparent transition-colors duration-300 cursor-pointer h-[286px]">
                          <h2 className="font-bold font-inter mt-2">
                            {cardData.box3.heading}
                          </h2>
                          <p className="mt-2 text-sm  font-montserrat text-justify">
                            {cardData.box3.desc}
                          </p>
                        </div>
                      </div>

                      {/* <div className="flex justify-between gap-6 mt-8">
                        <button className="border w-full rounded-lg py-2 font-semibold capitalize">
                          close
                        </button>
                        <button className="border w-full rounded-lg py-2 font-semibold capitalize bg-dark-2 text-white">
                          submit
                        </button>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
