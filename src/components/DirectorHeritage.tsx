"use client";

import { FOUNDER_PORTRAIT } from "@/data/images";
import { FOUNDER_SPOTLIGHT } from "@/data/content";
import SafeImage from "@/components/SafeImage";
import ScrollReveal from "@/components/ScrollReveal";
import WoodGrainTimeline from "@/components/WoodGrainTimeline";

export default function DirectorHeritage() {
  return (
    <section
      id="story"
      className="relative w-full bg-ivory py-20 sm:py-28 lg:py-32 border-t border-ivory-border"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-20 sm:space-y-28">
        {/* 1. Founder & Managing Director Spotlight */}
        <ScrollReveal className="bg-ivory-soft border border-ivory-border p-8 sm:p-14 lg:p-18 shadow-sm card-luxury rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Real MD Photo in High-Resolution Sharp Container */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-90 aspect-4/5 rounded-2xl overflow-hidden shadow-2xl border border-stone-200/40 bg-stone-100 relative group">
                <SafeImage
                  src={FOUNDER_PORTRAIT.url}
                  alt={FOUNDER_PORTRAIT.alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 360px, 360px"
                  className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-500"
                />
              </div>
              {/* Authentic Caption Below Image */}
              <p className="mt-3 text-center text-xs sm:text-sm font-serif italic text-stone-600">
                Abul Kalam Bhuiyan — Founder & Managing Director
              </p>
            </div>

            {/* Right: Authentic MD Quote & Pedigree Stats Ribbon */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-[0.28em] text-champagne-muted font-bold font-sans block mb-5">
                  FOUNDER & MANAGING DIRECTOR
                </span>

                {/* The MD Quote */}
                <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-espresso font-light italic leading-relaxed mb-8 border-l-2 border-champagne pl-6 sm:pl-8">
                  “{FOUNDER_SPOTLIGHT.quote}”
                </blockquote>

                <div className="mb-8 pl-6 sm:pl-8">
                  <p className="font-sans text-base uppercase tracking-[0.2em] font-bold text-espresso">
                    — {FOUNDER_SPOTLIGHT.author}
                  </p>
                  <p className="text-sm text-espresso-muted mt-0.5 font-sans font-medium">
                    {FOUNDER_SPOTLIGHT.role} · Heaven Furniture Mart
                  </p>
                </div>

                {/* Pedigree Stats Ribbon */}
                <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-ivory-border/80">
                  {FOUNDER_SPOTLIGHT.pedigree.map((stat, idx) => (
                    <div key={idx} className="text-center sm:text-left">
                      <p className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso font-light">
                        {stat.value}
                      </p>
                      <p className="font-sans text-xs sm:text-sm text-espresso-muted tracking-wide mt-1">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 2. Our Journey (Wood-Grain Timeline) */}
        <WoodGrainTimeline />
      </div>
    </section>
  );
}
