"use client";
import PixelBlast from "@/components/animation/PixelBlast";
import BlogTimeline from "@/components/home/BlogTimeline";
import FutureChanges from "@/components/home/FutureChanges";
import Hero from "@/components/home/Hero";
import Impact from "@/components/home/Impact";
import KeepFlyingMarquee from "@/components/home/KeepFlyingMarquee";
import OurCapabilities from "@/components/home/OurCapabilities";
import OurProccess from "@/components/home/OurProccess";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import WhyUs from "@/components/home/WhyUs";
import MarqueHighlightText from "@/components/MarqueHighlightText";
import Sponsor from "@/components/services/Sponsor";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div
        className="relative h-screen"
        onPointerDown={(e) => {
          const canvas = e.currentTarget.querySelector('canvas');
          if (canvas && e.target !== canvas) {
            canvas.dispatchEvent(new PointerEvent('pointerdown', {
              clientX: e.clientX,
              clientY: e.clientY,
              bubbles: false,
              cancelable: true,
              pointerId: e.pointerId,
              pointerType: e.pointerType,
            }));
          }
        }}
      >
        <PixelBlast
          variant="square"
          pixelSize={4}
          color="#02d5e8"
          patternScale={2}
          patternDensity={0.5}
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={2}
          edgeFade={0.25}
          transparent
        />
        <div className="absolute inset-0 flex flex-col">
          <Hero />
        </div>
      </div>

      <section className="mt-14 sm:mt-16 md:mt-20 lg:mt-32">
        <WhyUs />
      </section>
      <section className="mt-14 sm:mt-16 md:mt-20 lg:mt-32">
          <MarqueHighlightText
            marqueeText={[
              "/From growth pressure to structured momentum",
              "/From execution overload to scalable systems",
              "/From manual effort to intelligent flow",
            ]}
          />
      </section>
      <section className="mt-14 sm:mt-16 md:mt-20 lg:mt-32">
        <Services />
      </section>
      <section className="mt-14 sm:mt-16 md:mt-20 lg:mt-32">
        <OurProccess />
      </section>
      <section className="mt-14 sm:mt-16 md:mt-20 lg:mt-32">
        <Impact />
      </section>
      <section className="mt-14 sm:mt-16 md:mt-20 lg:mt-32">
        <KeepFlyingMarquee />
      </section>
      <section className="mt-14 sm:mt-16 md:mt-20 lg:mt-32">
        <FutureChanges />
      </section>
      <section className="mt-14 sm:mt-16 md:mt-20 lg:mt-32">
        <OurCapabilities />
      </section>
      <section className="mt-14 sm:mt-16 md:mt-20 lg:mt-32">
        <Testimonials />
      </section>
      <section className="mt-14 sm:mt-16 md:mt-20 lg:mt-32">
        <BlogTimeline />
      </section>

      <section className="my-14 sm:my-16 md:my-20 lg:my-32">
        <Sponsor />
      </section>
    </main>
  );
}
