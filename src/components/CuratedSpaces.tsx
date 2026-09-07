"use client";

import { CURATED_ENVIRONMENTS } from "@/data/images";
import SafeImage from "@/components/SafeImage";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowUpRight } from "lucide-react";
import { useLenisScroll } from "@/components/SmoothScrollProvider";

interface CuratedSpacesProps {
  onRequestQuote?: (space?: string, piece?: string) => void;
}

export default function CuratedSpaces({ onRequestQuote }: CuratedSpacesProps) {
  const { scrollTo } = useLenisScroll();

  const handleCustomizeClick = (title: string, subtitle: string) => {
    scrollTo("#consultation", { duration: 1.2 });
    if (onRequestQuote) {
      onRequestQuote(title, subtitle);
    }
  };

  return (
    <section id="collections" className="relative w-full bg-ivory py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-ivory-border">
          <div>
            <span className="text-xs uppercase tracking-[0.28em] text-champagne-muted font-bold font-sans block mb-3">
              Real Catalog Collections
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-espresso font-light tracking-tight">
              Furniture That Belongs to the Architecture.
            </h2>
            <p className="font-serif text-xl sm:text-2xl text-champagne-muted italic mt-3 font-normal max-w-xl">
              Authentic custom creations hand-carved in seasoned Chittagong teak and tailored to your room dimensions.
            </p>
            <p className="font-['Noto_Serif_Bengali'] text-base md:text-lg font-medium text-stone-800 tracking-normal mt-2.5 opacity-90">
              চট্টগ্রামের খাঁটি সেগুন কাঠের আভিজাত্য—যা শুধু ঘর সাজায় না, টিকে থাকে প্রজন্মের পর প্রজন্ম।
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {CURATED_ENVIRONMENTS.map((space, idx) => {
            return (
              <ScrollReveal key={space.id} delay={idx * 75} className="h-full">
                <article className="card-luxury group relative flex flex-col justify-between h-full overflow-hidden bg-ivory-soft border border-ivory-border hover:border-champagne/60 hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-1">
                  {/* Image Frame with Strict Aspect Ratio (CLS = 0) */}
                  <div className="aspect-16/10 overflow-hidden rounded-t-lg relative w-full bg-charcoal-deep">
                    <SafeImage
                      src={space.image}
                      alt={space.alt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 ease-luxury"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-charcoal-deep/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="py-1 px-3 text-[11px] uppercase tracking-wider font-sans font-semibold text-charcoal-deep bg-champagne/90 rounded-full shadow-sm">
                        {space.featuredTag}
                      </span>
                    </div>
                  </div>

                  {/* Description & Specs Container */}
                  <div className="p-7 sm:p-9 flex flex-col justify-between flex-1 bg-ivory-soft">
                    {/* Upper Container (flex-1) wrapping title, room type, description, specs */}
                    <div className="flex-1 flex flex-col">
                      {/* Category & Dimensions Row */}
                      <div className="flex items-center justify-between gap-4 mb-3">
                        <span className="text-xs uppercase tracking-[0.28em] text-champagne-muted font-bold font-sans">
                          {space.categoryName}
                        </span>
                        <span className="text-xs font-sans text-espresso-muted tracking-wide font-medium">
                          {space.dimensions}
                        </span>
                      </div>

                      {/* Environment Title */}
                      <h3 className="font-serif text-3xl sm:text-4xl text-espresso font-light mb-3 transition-colors duration-300">
                        {space.title}
                      </h3>

                      {/* Subtitle */}
                      <p className="text-base sm:text-[17px] text-espresso-text font-sans font-normal leading-relaxed mb-4">
                        {space.subtitle}
                      </p>

                      {/* Materials Specification */}
                      <p className="text-sm sm:text-[15px] text-espresso-text/80 font-sans leading-relaxed mb-6">
                        <strong className="font-semibold text-espresso">Crafted From: </strong>
                        {space.materials}
                      </p>
                    </div>

                    {/* Single Primary Action CTA Anchored to Bottom Edge */}
                    <div className="mt-auto pt-4 border-t border-stone-200/60">
                      <button
                        onClick={() => handleCustomizeClick(space.title, space.subtitle)}
                        className="btn-luxury w-full py-3 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2 bg-champagne hover:bg-champagne-hover text-charcoal-deep text-xs uppercase shadow-sm cursor-pointer transition-all duration-300"
                      >
                        <span>Request a Quote</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
