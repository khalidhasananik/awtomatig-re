import Link from "next/link";
import FadeInSection from "../animation/FadeEffect";

export default function ServiceCTA() {
  return (
    <section className="py-10 lg:py-16">
      <div className="container">
        <div className="wrapper">
          <FadeInSection
            initial={{ opacity: 0, y: 40 }}
            scrollTop={{ opacity: 1, y: 0 }}
            scrollBottom={{ opacity: 0, y: 40 }}
            margin="40px 0px -40px 0px"
          >
            <div className="relative bg-dark-1 rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center overflow-hidden">
              {/* Teal glow blobs — hidden on mobile, blur filters are expensive */}
              <span className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-teal/5 blur-[80px] rounded-full pointer-events-none" />
              <span className="hidden md:block absolute bottom-0 left-1/4 w-[300px] h-[150px] bg-blue-light/5 blur-[60px] rounded-full pointer-events-none" />

              <h5 className="font-montserrat uppercase text-sm tracking-widest text-teal mb-5">
                [ Let&apos;s build something great ]
              </h5>
              <h2 className="font-russo-one text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 max-w-3xl mx-auto leading-tight">
                Ready to start your next project?
              </h2>
              <p className="font-montserrat text-dark-white/50 max-w-xl mx-auto mb-10 text-sm md:text-base leading-relaxed">
                Tell us about your business. We&apos;ll show you exactly how we&apos;d
                approach it — no pressure, no noise.
              </p>
              <Link href="/contact" className="glow-button font-inter inline-flex">
                Let&apos;s Build Together
                <span className="ml-2">→</span>
              </Link>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
