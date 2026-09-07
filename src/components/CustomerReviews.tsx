"use client";

import Image from "next/image";
import { CUSTOMER_TESTIMONIALS } from "@/data/content";
import ScrollReveal from "@/components/ScrollReveal";

export default function CustomerReviews() {
  // Duplicate array for seamless infinite marquee loop
  const marqueeItems = [...CUSTOMER_TESTIMONIALS, ...CUSTOMER_TESTIMONIALS];

  return (
    <section
      id="reviews"
      className="relative w-full bg-ivory py-20 sm:py-28 lg:py-32 border-t border-ivory-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-12 sm:mb-16">
        {/* Section Header with Official Google Proof Badge */}
        <ScrollReveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 py-1.5 px-3.5 rounded-full bg-ivory-soft border border-champagne/40 text-xs text-espresso-text font-sans font-medium mb-4">
            <div className="flex items-center gap-0.5" aria-label="4.8 out of 5 stars">
              <span className="text-amber-500 tracking-tight text-sm leading-none">★★★★</span>
              <span className="relative inline-block text-stone-300 text-sm leading-none select-none">
                <span className="absolute left-0 top-0 overflow-hidden w-[80%] text-amber-500 leading-none select-none">
                  ★
                </span>
                ★
              </span>
              <span className="font-bold text-stone-900 ml-1.5">4.8</span>
            </div>
            <span className="text-stone-300">•</span>
            <span className="text-espresso font-semibold">Google Verified Reviews</span>
            <span className="text-stone-300">•</span>
            <span className="text-espresso-muted">30 Verified Ratings</span>
          </div>

          <span className="text-xs uppercase tracking-[0.28em] text-champagne-muted font-bold font-sans block mb-3">
            Customer Reviews
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-espresso font-light leading-tight tracking-tight mb-4">
            Homeowners across Bangladesh trust Heaven.
          </h2>
          <p className="font-sans text-base sm:text-lg text-espresso-muted max-w-xl">
            Real architectural commissions and feedback from discerning homeowners across Bangladesh.
          </p>
          <p className="font-['Noto_Serif_Bengali'] text-base md:text-lg font-medium text-stone-800 tracking-normal mt-2.5 opacity-90">
            দেশজুড়ে সন্তুষ্ট গ্রাহকদের অভিজ্ঞতা
          </p>
        </ScrollReveal>
      </div>

      {/* Infinite Horizontal Marquee Carousel */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Soft gradient fade masks on left and right edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-36 bg-linear-to-r from-ivory via-ivory/90 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-36 bg-linear-to-l from-ivory via-ivory/90 to-transparent z-10" />

        {/* Continuous Flow Marquee Track */}
        <div className="animate-marquee flex items-stretch hover:[animation-play-state:paused]">
          {marqueeItems.map((item, idx) => (
            <article
              key={idx}
              className="w-80 sm:w-92.5 shrink-0 bg-white border border-stone-200 shadow-xs rounded-2xl p-6 mx-3 flex flex-col justify-between hover:border-[#C5A880]/60 hover:shadow-md transition-all duration-300"
            >
              <div>
                {/* Header: Customer Profile Picture + Name + Rating */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-stone-200/80 shadow-xs bg-stone-100">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      width={44}
                      height={44}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-semibold text-stone-900 text-sm truncate">
                        {item.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <div className="flex items-center text-[#FBBC04] text-xs tracking-wider select-none">
                        ★★★★★
                      </div>
                      <span className="text-[11px] text-stone-400 font-sans">
                        • {item.badge || "Google Verified"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Body: Customer quote */}
                <p className="text-stone-700 font-serif text-[13.5px] sm:text-sm leading-relaxed font-normal">
                  “{item.review}”
                </p>
              </div>

              {/* Card Footer: Google verified badge & review context */}
              <div className="flex items-center justify-between border-t border-stone-100 pt-3.5 mt-4">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-stone-500 font-sans">
                  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  Google Review
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/80 font-sans">
                  <svg className="w-2.5 h-2.5 text-emerald-600" fill="currentColor" viewBox="0 0 12 12">
                    <path d="M10.28 2.28L3.989 8.575 1.72 6.305a.75.75 0 00-1.06 1.06l2.8 2.8a.75.75 0 001.06 0l6.82-6.82a.75.75 0 00-1.06-1.06z" />
                  </svg>
                  Authentic Client
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
