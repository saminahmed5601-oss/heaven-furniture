import { ArrowRight, MessageCircle } from "lucide-react";
import { BRAND } from "@/data/content";
import ScrollReveal from "@/components/ScrollReveal";

interface FinalCTAProps {
  onRequestQuote: () => void;
}

export default function FinalCTA({ onRequestQuote }: FinalCTAProps) {
  return (
    <section className="relative w-full bg-charcoal-deep text-ivory py-28 sm:py-36 overflow-hidden border-t border-charcoal-border">
      {/* Subtle Warm Atmospheric Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-champagne/10 via-transparent to-transparent opacity-60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center">
        <ScrollReveal className="flex flex-col items-center">
          {/* Subtle Decorative Line */}
          <div className="w-12 h-px bg-champagne mb-8" />

          {/* Headline */}
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-ivory font-light leading-[1.06] tracking-tight mb-6">
            Your space deserves something
            <br />
            made for it.
          </h2>

          {/* Supporting Copy - Comfortably Readable */}
          <p className="font-sans text-lg sm:text-xl md:text-2xl text-ivory/90 max-w-2xl leading-relaxed mb-10 font-light">
            Tell us about your space and let&apos;s create something made for you.
          </p>

          {/* Dual Conversion Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            {/* Dominant Primary Action */}
            <button
              onClick={onRequestQuote}
              className="btn-luxury w-full sm:w-auto inline-flex items-center justify-center px-10 sm:px-12 py-4 sm:py-4.5 min-h-12 bg-champagne hover:bg-champagne-hover text-charcoal-deep text-xs sm:text-sm uppercase tracking-[0.22em] font-bold shadow-2xl shadow-black/50 cursor-pointer"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 ml-3 transition-transform duration-300 ease-luxury group-hover:translate-x-1.5" />
            </button>

            {/* Secondary Action */}
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury w-full sm:w-auto inline-flex items-center justify-center px-9 sm:px-10 py-4 sm:py-4.5 min-h-12 border border-ivory/40 hover:border-champagne hover:text-champagne text-ivory text-xs sm:text-sm uppercase tracking-[0.2em] font-medium bg-charcoal-surface/70 backdrop-blur-md cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 mr-3 text-champagne group-hover:scale-110 transition-transform duration-300 ease-luxury" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Reassurance */}
          <p className="mt-8 text-xs sm:text-sm text-ivory/70 font-sans tracking-wide">
            Complimentary spatial consultation · Custom joinery crafted in Chattogram
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
