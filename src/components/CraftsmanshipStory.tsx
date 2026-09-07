"use client";

import { CNC_PROCESS_VIDEO } from "@/data/images";
import { PROCESS_PHASES } from "@/data/content";
import ScrollReveal from "@/components/ScrollReveal";
import { Compass, Box, Hammer, Truck } from "lucide-react";

export default function CraftsmanshipStory() {
  const phaseIcons = [Compass, Box, Hammer, Truck];

  return (
    <section id="process" className="relative w-full bg-ivory py-20 sm:py-28 lg:py-32 border-t border-ivory-border">
      {/* Anchor compatibility */}
      <div id="craftsmanship" className="sr-only" />
      <div id="bespoke" className="sr-only" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <ScrollReveal className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.28em] text-champagne-muted font-bold font-sans block mb-3">
            Bespoke Craftsmanship Workflow
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-espresso font-light leading-[1.06] tracking-tight mb-5">
            From Concept Sketch
            <br />
            <span className="italic font-normal text-champagne-muted">
              to Final Installation.
            </span>
          </h2>

          <p className="font-serif text-xl sm:text-2xl text-espresso italic font-normal max-w-2xl leading-relaxed">
            Every piece begins with premium wood, shaped with precision joinery and hand-finished by master artisans.
          </p>
          <p className="font-['Noto_Serif_Bengali'] text-base md:text-lg font-medium text-stone-800 tracking-normal mt-2.5 opacity-90">
            চট্টগ্রামের ঐতিহ্যবাহী সেগুন কাঠের কারুকাজ
          </p>
        </ScrollReveal>

        {/* 2-Column Split: Autoplaying CNC Video Loop (Left) + 4 Process Phases (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Clean, Silent, Auto-looping CNC Video */}
          <div className="lg:col-span-6">
            <ScrollReveal>
              <div className="relative w-full aspect-4/5 sm:aspect-square lg:aspect-4/5 rounded-2xl overflow-hidden bg-charcoal-deep border border-ivory-border shadow-2xl group">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover object-center"
                  aria-label="High-precision CNC machine carving authentic timber relief at Heaven Furniture Mart workshop"
                >
                  <source src="/assets/craftmanship/cnc-carving.mp4" type="video/mp4" />
                  <source src={CNC_PROCESS_VIDEO.url} type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-linear-to-t from-charcoal-deep/85 via-transparent to-transparent opacity-80 pointer-events-none" />

                {/* Floating Atelier Technical Overlay */}
                <div className="absolute bottom-5 left-5 right-5 p-5 rounded-xl bg-charcoal-deep/90 backdrop-blur-md border border-charcoal-border/80 text-ivory">
                  <div className="flex items-center space-x-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] uppercase tracking-[0.24em] text-champagne font-sans font-bold">
                      In-House Workshop Video
                    </span>
                  </div>
                  <p className="font-serif text-lg text-ivory font-light leading-snug">
                    Precision CNC relief carving meets generational hand joinery on Agrabad Access Road
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: 4 Clean Process Phases */}
          <div className="lg:col-span-6 flex flex-col space-y-5">
            {PROCESS_PHASES.map((phase, idx) => {
              const Icon = phaseIcons[idx] || Hammer;
              return (
                <ScrollReveal key={phase.phase} delay={idx * 80}>
                  <div className="card-luxury flex items-start space-x-4 sm:space-x-5 p-6 sm:p-7 rounded-xl bg-ivory-soft border border-ivory-border hover:border-champagne/60 hover:shadow-lg transition-all duration-300">
                    <div className="w-11 h-11 rounded-lg bg-champagne/15 border border-champagne/30 text-champagne-muted flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-champagne-muted" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center space-x-2.5 mb-1.5">
                        <span className="text-xs uppercase tracking-[0.22em] text-champagne-muted font-bold font-sans">
                          Phase {phase.phase}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl sm:text-2xl text-espresso font-normal mb-2">
                        {phase.title}
                      </h3>
                      <p className="font-sans text-sm sm:text-[15px] text-espresso-text leading-relaxed font-normal">
                        {phase.detail}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
