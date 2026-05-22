import Accordion from "@/components/Accordion";
import FadeInSection from "@/components/animation/FadeEffect";
import CommonHeading from "@/components/CommonHeading";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import { FAQ } from "@/contants/capabilities";
export default function AboutUs() {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <section className="container relative mt-14 sm:mt-16 md:mt-20 lg:mt-32 mb-14 sm:mb-16 md:mb-20 lg:mb-32">
        <span
          style={{
            background:
              "linear-gradient(215.67deg, rgba(2, 213, 232, 0.55) 18.02%, rgba(3, 50, 103, 0.55) 94.4%)",
          }}
          className="hidden lg:inline-block absolute size-[800px] -left-40 -bottom-10 rounded-full blur-[320px] -z-1"
        ></span>
        <FadeInSection
          initial={{ opacity: 0, y: -150 }}
          scrollTop={{ opacity: 1, y: 0 }}
          scrollBottom={{ opacity: 0, y: -150 }}
          margin="40px 0px -40px 0px"
          className="wrapper"
        >
          <CommonHeading title="FAQ" color="text-teal">
            Common questions from our clients
          </CommonHeading>
          <div className="mt-14">
            {FAQ.map((capability) => (
              <Accordion
                key={capability.id}
                title={capability.title}
                serial={"0" + capability.id}
              >
                <p className="font-montserrat">{capability.description}</p>
              </Accordion>
            ))}
          </div>
        </FadeInSection>
      </section>
    </main>
  );
}
