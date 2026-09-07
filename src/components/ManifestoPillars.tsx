import { MANIFESTO_PILLARS } from "@/data/content";
import ScrollReveal from "@/components/ScrollReveal";

export default function ManifestoPillars() {
  return (
    <section id="philosophy" className="relative w-full bg-ivory py-20 sm:py-28 lg:py-32 border-b border-ivory-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Brand Intro Statement */}
        <ScrollReveal className="max-w-4xl mb-14 sm:mb-18">
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-espresso font-light leading-[1.06] tracking-tight mb-7">
            Not made for everyone.
            <br />
            <span className="italic font-normal text-champagne-muted">
              Made for you.
            </span>
          </h2>

          <p className="font-serif text-2xl sm:text-3xl text-espresso italic font-normal max-w-3xl leading-relaxed">
            Every piece is designed around the people, spatial volume, and architectural rituals it belongs to.
          </p>
          <p className="font-['Noto_Serif_Bengali'] text-lg md:text-xl font-medium text-stone-800 tracking-normal mt-3 mb-5 opacity-90">
            ঘর মানেই আপনজন, আসবাব মানেই ভালোবাসা।
          </p>

          <p className="text-base sm:text-lg text-espresso-text font-sans font-normal max-w-2xl leading-relaxed">
            Heaven Furniture Mart creates bespoke commissions tailored to your exact room proportions, handcrafted in our Chattogram atelier from cured indigenous hardwoods and generational joinery.
          </p>
        </ScrollReveal>

        {/* Why Heaven: 4 Editorial Trust Pillars with Clean Hairline Border Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-ivory-border bg-ivory-border gap-px">
          {MANIFESTO_PILLARS.map((pillar, idx) => (
            <ScrollReveal
              key={pillar.title}
              delay={idx * 60}
              className="group p-8 sm:p-9 flex flex-col justify-between bg-ivory-soft hover:bg-ivory card-luxury min-h-65"
            >
              <div>
                {/* Clean Gold Hairline Accent */}
                <div className="w-8 h-0.5 bg-champagne-muted/60 group-hover:w-12 group-hover:bg-champagne transition-all duration-300 ease-luxury mb-5" />

                {/* Locked Title Container */}
                <div className="min-h-18 sm:min-h-20 lg:min-h-22 flex flex-col justify-start">
                  <h3 className="font-serif text-2xl sm:text-3xl text-espresso font-normal leading-snug group-hover:text-champagne-muted transition-colors duration-300 ease-luxury">
                    {pillar.title}
                  </h3>
                </div>

                {/* Aligned Bangla Subtitle Container */}
                <div className="min-h-6 flex items-center mt-1.5 mb-3">
                  {"subtitle" in pillar && pillar.subtitle && (
                    <span className="font-['Noto_Serif_Bengali'] text-sm font-medium text-[#967244] tracking-wide block">
                      {pillar.subtitle}
                    </span>
                  )}
                </div>

                {/* Pinned Horizontal Divider Line */}
                <div className="w-full border-t border-ivory-border/80 mb-5" />
              </div>

              {/* Detail - Comfortably Readable */}
              <p className="text-[15px] sm:text-base text-espresso-text font-sans leading-relaxed">
                {pillar.detail}
              </p>
            </ScrollReveal>
          ))}
        </div>

        {/* Subtle Local Market Reassurance */}
        <div className="mt-8 pt-6 border-t border-ivory-border flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm font-sans text-espresso-text">
          <div className="flex items-center space-x-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
            <span className="font-semibold text-espresso">Flexible Payment:</span>
            <span>Milestone-based installments for bespoke commissions</span>
          </div>
          <div className="flex items-center space-x-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
            <span className="font-semibold text-espresso">Logistics:</span>
            <span>Direct white-glove delivery across Chattogram & Dhaka</span>
          </div>
        </div>
      </div>
    </section>
  );
}
