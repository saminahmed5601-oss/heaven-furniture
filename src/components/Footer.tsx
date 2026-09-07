"use client";

import Link from "next/link";
import Image from "next/image";
import { BRAND } from "@/data/content";
import { useLenisScroll } from "@/components/SmoothScrollProvider";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { scrollTo } = useLenisScroll();

  return (
    <footer className="w-full bg-charcoal-deep text-ivory/80 pt-20 pb-12 border-t border-charcoal-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-charcoal-border/70">
          {/* Brand Identity & Philosophy */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(0, { duration: 1.2 });
                }}
                className="inline-block focus:outline-none group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Image
                    src="/logo-mark-gold.svg"
                    alt="Heaven Furniture Mart Mark"
                    width={28}
                    height={27}
                    className="h-6 sm:h-7 w-auto shrink-0 object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="font-serif text-2xl sm:text-3xl tracking-[0.14em] sm:tracking-[0.18em] text-ivory group-hover:text-champagne transition-colors duration-300 ease-luxury font-light uppercase">
                    HEAVEN FURNITURE MART
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2 mb-4 text-[#C5A880]/90">
                  <span className="text-xs md:text-sm font-sans tracking-[0.2em] uppercase font-medium">DESIGNED. CRAFTED. CUSTOMIZED.</span>
                  <span className="text-[#C5A880]/50">•</span>
                  <span className="font-['Noto_Serif_Bengali'] text-xs md:text-sm tracking-wide">পরিকল্পিত · হস্তনির্মিত · আপনার পছন্দমতো</span>
                </div>
              </Link>

              <div className="mt-6 leading-relaxed">
                <span className="text-stone-400 text-xs uppercase tracking-widest block font-sans">
                  Flagship Studio & Atelier
                </span>
                <span className="text-stone-200 text-sm block mt-1 font-sans">
                  Agrabad Access Road (Opposite RAK Ceramics), Chattogram, Bangladesh
                </span>
                <span className="font-['Noto_Serif_Bengali'] block text-xs text-stone-400 mt-0.5">
                  আগ্রাবাদ এক্সেস রোড (আরএকে সিরামিকসের বিপরীতে), চট্টগ্রাম
                </span>
              </div>
            </div>
          </div>

          {/* Direct Contact */}
          <div className="md:col-span-4 space-y-4 text-base font-sans">
            <p className="text-xs uppercase tracking-[0.28em] text-champagne font-bold mb-3">
              Direct Inquiries
            </p>
            <div>
              <span className="text-ivory/60 block text-xs uppercase tracking-wider mb-1 font-medium">Telephone & WhatsApp</span>
              <a
                href={`tel:${BRAND.phoneRaw}`}
                className="link-luxury text-ivory hover:text-champagne font-semibold text-lg tracking-wider block"
              >
                {BRAND.phone}
              </a>
            </div>
            <div>
              <span className="text-ivory/60 block text-xs uppercase tracking-wider mb-1 font-medium">Email Consultation</span>
              <a
                href={`mailto:${BRAND.email}`}
                className="link-luxury text-ivory/90 hover:text-champagne underline decoration-charcoal-border text-[15px]"
              >
                {BRAND.email}
              </a>
            </div>
            <p className="text-ivory/80 text-sm pt-1">
              Hours: {BRAND.openingHours}
            </p>
          </div>

          {/* Social Channels */}
          <div className="md:col-span-3 space-y-3 text-base font-sans">
            <p className="text-xs uppercase tracking-[0.28em] text-champagne font-bold mb-3">
              Follow Atelier
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={BRAND.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory/90 hover:text-champagne transition-colors inline-flex items-center space-x-2.5 text-sm sm:text-base"
                >
                  <span className="w-2 h-2 bg-champagne rounded-full" />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href={BRAND.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory/90 hover:text-champagne transition-colors inline-flex items-center space-x-2.5 text-sm sm:text-base"
                >
                  <span className="w-2 h-2 bg-champagne rounded-full" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href={BRAND.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory/90 hover:text-champagne transition-colors inline-flex items-center space-x-2.5 text-sm sm:text-base"
                >
                  <span className="w-2 h-2 bg-champagne rounded-full" />
                  <span>YouTube</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Minimal Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-ivory/60 font-sans tracking-wide uppercase gap-3">
          <p>© {currentYear} Heaven Furniture Mart. All rights reserved.</p>
          <p className="text-ivory/50">
            Agrabad Access Road · Chattogram
          </p>
        </div>
      </div>
    </footer>
  );
}
