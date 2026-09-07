"use client";

import { ArrowRight, MapPin, Sparkles, ShieldCheck } from "lucide-react";
import { HERO_IMAGE } from "@/data/images";
import { BRAND, HERO_PILLS } from "@/data/content";
import SafeImage from "@/components/SafeImage";
import ScrollReveal from "@/components/ScrollReveal";
import { useLenisScroll } from "@/components/SmoothScrollProvider";

interface HeroProps {
  onRequestQuote?: () => void;
}

export default function Hero({ onRequestQuote }: HeroProps) {
  const { scrollTo } = useLenisScroll();

  const handleConsultationClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onRequestQuote) {
      onRequestQuote();
    } else {
      scrollTo("#consultation", { duration: 1.2 });
    }
  };

  const handleReviewsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollTo("#reviews", { duration: 1.2 });
  };

  return (
    <section className="relative w-full min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-charcoal-deep text-ivory">
      {/* Background Architectural Photography with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <SafeImage
          src={HERO_IMAGE.url}
          alt={HERO_IMAGE.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_55%] lg:object-[62%_48%]"
        />
        {/* Multi-Layer Cinematic Overlays for Supreme Readability */}
        <div className="absolute inset-0 bg-linear-to-r from-charcoal-deep/98 via-charcoal-deep/85 to-charcoal-deep/40 lg:to-charcoal-deep/25" />
        <div className="absolute inset-0 bg-linear-to-t from-charcoal-deep via-transparent to-black/50" />
      </div>

      {/* Main Campaign Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-32 sm:pt-40 lg:pt-44 pb-14 sm:pb-16 flex-1 flex flex-col justify-center">
        <ScrollReveal className="max-w-2xl lg:max-w-3xl">
          {/* Eyebrow Brand Identity */}
          <div className="mb-5 sm:mb-7">
            <div className="inline-flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-4 pb-2 border-b border-champagne/30">
              <span className="text-xs sm:text-sm uppercase tracking-[0.28em] text-champagne font-semibold font-sans">
                HEAVEN FURNITURE MART
              </span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-champagne/60" />
              <span className="text-xs sm:text-sm uppercase tracking-[0.22em] text-ivory/90 font-sans font-light">
                Bespoke Furniture & Interior Styling
              </span>
            </div>
          </div>

          {/* Campaign Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-ivory font-light leading-[1.05] tracking-tight mb-5">
            Furniture,
            <br />
            <span className="italic font-normal text-champagne-light">
              Crafted Around You.
            </span>
          </h1>

          {/* Hero Bilingual Tagline (Prominent & Calligraphic) */}
          <div className="flex flex-wrap items-center gap-2.5 md:gap-3 my-4 text-[#C5A880]/90">
            <span className="text-sm md:text-base font-sans tracking-wide font-light">
              Designed. Crafted. Customized.
            </span>
            <span className="text-sm hidden sm:inline">•</span>
            <span className="font-['Noto_Serif_Bengali'] text-base md:text-lg tracking-wide">
              পরিকল্পিত · হস্তনির্মিত · আপনার পছন্দমতো
            </span>
          </div>

          {/* Subhead */}
          <p className="text-lg sm:text-xl text-ivory/90 font-sans font-light max-w-2xl leading-relaxed mb-8">
            Luxury bespoke furniture shaped to your exact proportions and architectural space. Handcrafted in Chattogram, commissioned for life.
          </p>

          {/* Dominant Conversion CTAs */}
          <div className="flex flex-col sm:flex-row sm:items-center space-y-3.5 sm:space-y-0 sm:space-x-5 mb-4">
            {/* Primary CTA */}
            <button
              onClick={handleConsultationClick}
              className="btn-luxury group inline-flex items-center justify-center px-8 sm:px-9 py-4 bg-champagne hover:bg-champagne-hover text-charcoal-deep text-xs sm:text-sm uppercase tracking-[0.22em] font-bold shadow-xl shadow-black/40 cursor-pointer"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 ml-3 transition-transform duration-300 ease-luxury group-hover:translate-x-1.5" />
            </button>

            {/* Secondary WhatsApp CTA */}
            <a
              href={BRAND.whatsappHeroUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury inline-flex items-center justify-center px-7 sm:px-8 py-4 border border-ivory/40 hover:border-champagne text-ivory hover:text-champagne text-xs sm:text-sm uppercase tracking-[0.2em] font-medium group font-sans backdrop-blur-md cursor-pointer"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 mr-2.5 fill-current text-champagne group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              >
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.05-1.07l-.29-.17-3.12.82.83-3.04-.19-.3a8.21 8.21 0 0 1-1.26-4.47c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.32-.02-.45s-.56-1.35-.77-1.85c-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29" />
              </svg>
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Hero Micro-Trust Badge Directly Beneath CTAs */}
          <a
            href="#reviews"
            onClick={handleReviewsClick}
            className="inline-flex flex-wrap items-center gap-2 mt-4 mb-7 text-xs tracking-wide text-stone-300 hover:text-white transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-0.5 text-sm" aria-label="4.8 out of 5 stars">
              <span className="text-[#C5A880] tracking-tight leading-none">★★★★</span>
              <span className="relative inline-block text-white/30 leading-none select-none">
                <span className="absolute left-0 top-0 overflow-hidden w-4/5 text-[#C5A880] leading-none select-none">
                  ★
                </span>
                ★
              </span>
            </div>
            <span className="font-semibold text-white">4.8 / 5.0</span>
            <span className="text-stone-400 group-hover:text-stone-300">(30 Verified Google Reviews)</span>
            <span className="text-stone-500">•</span>
            <span className="text-stone-300 group-hover:text-white">Agrabad, Chattogram</span>
          </a>

          {/* Trust Checklist Pills */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 text-xs sm:text-[13px] text-ivory/80 font-sans">
            {HERO_PILLS.map((pill, idx) => (
              <span
                key={idx}
                className="py-1 px-3 rounded bg-charcoal-deep/70 border border-charcoal-border/70 backdrop-blur-sm"
              >
                {pill}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Pinned Bottom Trust Bar */}
      <div className="relative z-10 w-full border-t border-charcoal-border/80 bg-charcoal-deep/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-3.5 sm:py-4.5 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-6 items-center text-[11px] sm:text-xs font-sans text-ivory/80 tracking-[0.16em] sm:tracking-[0.2em] uppercase">
          <div className="flex items-center justify-center sm:justify-start space-x-2.5">
            <MapPin className="w-3.5 h-3.5 text-champagne shrink-0" />
            <span className="leading-tight">Agrabad Flagship Showroom</span>
          </div>

          <div className="flex items-center justify-center space-x-2.5">
            <Sparkles className="w-3.5 h-3.5 text-champagne shrink-0" />
            <span className="leading-tight">100% In-House Craftsmanship</span>
          </div>

          <div className="flex items-center justify-center sm:justify-end space-x-2.5">
            <ShieldCheck className="w-3.5 h-3.5 text-champagne shrink-0" />
            <span className="leading-tight">White-Glove Installation</span>
          </div>
        </div>
      </div>
    </section>
  );
}
