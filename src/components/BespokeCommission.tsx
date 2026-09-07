"use client";

import { useState } from "react";
import { ArrowRight, Compass, Box, Hammer, Truck, MessageCircle } from "lucide-react";
import { BESPOKE_WORKFLOW, BRAND } from "@/data/content";
import { JOINERY_CLOSEUP } from "@/data/images";
import SafeImage from "@/components/SafeImage";
import ScrollReveal from "@/components/ScrollReveal";

interface BespokeCommissionProps {
  onRequestQuote: (space?: string, piece?: string) => void;
}

export default function BespokeCommission({ onRequestQuote }: BespokeCommissionProps) {
  const [activeStep, setActiveStep] = useState(0);

  const icons = [Compass, Box, Hammer, Truck];

  return (
    <section
      id="bespoke"
      className="relative w-full bg-charcoal-deep text-ivory py-20 sm:py-28 lg:py-32 overflow-hidden border-t border-charcoal-border"
    >
      {/* Anchor compatibility for #consultation */}
      <div id="consultation" className="sr-only" />

      {/* Warm Ambient Radial Accents */}
      <div className="absolute top-1/4 -right-28 w-96 h-96 bg-champagne/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-28 w-80 h-80 bg-charcoal-surface/60 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <ScrollReveal className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-ivory font-light leading-[1.05] tracking-tight mb-5">
            Your Space.
            <br />
            Your Proportions.
            <br />
            <span className="italic font-normal text-champagne-light">
              Your Piece.
            </span>
          </h2>

          <p className="font-serif text-2xl sm:text-3xl text-ivory/90 italic font-normal max-w-xl leading-relaxed">
            From architectural plans to hand-rubbed timber finishes, we craft around your lifestyle rituals.
          </p>
        </ScrollReveal>

        {/* 2-Column Split: 4-Step Process Timeline + High-Res Woodworking Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Progressive Timeline Column (7 Cols) */}
          <ScrollReveal className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-4">
              {BESPOKE_WORKFLOW.map((item, idx) => {
                const isActive = activeStep === idx;
                const Icon = icons[idx];
                return (
                  <div
                    key={item.step}
                    onClick={() => setActiveStep(idx)}
                    className={`cursor-pointer group p-6 sm:p-7 transition-all duration-300 ease-luxury border-l-2 select-none active:scale-[0.99] ${
                      isActive
                        ? "border-champagne bg-charcoal-surface shadow-2xl ring-1 ring-champagne/25"
                        : "border-charcoal-border hover:border-ivory/50 bg-charcoal-surface/50"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2.5">
                      <div className="flex items-center space-x-3.5">
                        <Icon
                          className={`w-5 h-5 transition-colors duration-300 ease-luxury shrink-0 ${
                            isActive ? "text-champagne" : "text-ivory/50 group-hover:text-champagne"
                          }`}
                        />
                        <h3
                          className={`text-base sm:text-lg uppercase tracking-[0.2em] font-sans font-bold transition-colors duration-300 ease-luxury ${
                            isActive ? "text-champagne" : "text-ivory group-hover:text-champagne-light"
                          }`}
                        >
                          0{idx + 1} — {item.title}
                        </h3>
                      </div>
                      <span className="text-sm text-champagne-light/95 font-sans font-medium pl-8 sm:pl-0">
                        {item.subtitle}
                      </span>
                    </div>

                    <p className="text-[15px] sm:text-base text-ivory/90 font-sans leading-relaxed pl-8 sm:pl-8">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Workflow Conversion Actions */}
            <div className="pt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                onClick={() =>
                  onRequestQuote("Bespoke Commission", `Phase: ${BESPOKE_WORKFLOW[activeStep].title}`)
                }
                className="btn-luxury px-8 sm:px-9 py-4 bg-champagne hover:bg-champagne-hover text-charcoal-deep text-xs sm:text-sm uppercase tracking-[0.22em] font-bold shadow-xl shadow-black/40 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury px-7 sm:px-8 py-4 border border-ivory/40 hover:border-champagne text-ivory hover:text-champagne text-xs sm:text-sm uppercase tracking-[0.2em] font-medium group font-sans backdrop-blur-md flex items-center justify-center space-x-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-champagne group-hover:scale-110 transition-transform duration-300 ease-luxury" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </ScrollReveal>

          {/* High-Res Artisan Woodworking Image Column (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-4/5 overflow-hidden border border-charcoal-border shadow-2xl bg-charcoal-surface">
              <SafeImage
                src={JOINERY_CLOSEUP.url}
                alt={JOINERY_CLOSEUP.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-104"
              />
              <div className="absolute inset-0 bg-linear-to-t from-charcoal-deep/95 via-transparent to-transparent" />

              {/* Architectural Annotation Card */}
              <div className="absolute bottom-5 left-5 right-5 p-6 bg-charcoal-deep/95 backdrop-blur-md border border-charcoal-border">
                <p className="text-xs uppercase tracking-[0.24em] text-champagne font-sans font-semibold mb-2">
                  Seasoned Segun Teak · Mortise & Tenon
                </p>
                <p className="font-serif text-base sm:text-lg text-ivory font-light italic leading-relaxed">
                  Crafted by master joiners on Agrabad Access Road with organic hand-rubbed oil finishes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
