"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Copy, CheckCheck, ArrowUpRight } from "lucide-react";
import { BRAND } from "@/data/content";
import { SHOWROOM_EXTERIOR } from "@/data/images";
import SafeImage from "@/components/SafeImage";
import ScrollReveal from "@/components/ScrollReveal";

export default function FlagshipShowroom() {
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(BRAND.phoneDisplay).catch(() => {});
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="visit" className="relative w-full bg-ivory py-20 sm:py-28 lg:py-32 border-t border-ivory-border">
      {/* Anchor compatibility for #showroom */}
      <div id="showroom" className="sr-only" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <ScrollReveal className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.28em] text-champagne-muted font-bold font-sans block mb-3">
            Flagship Showroom & Atelier
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-espresso font-light tracking-tight mb-4">
            Experience the Craft at Our Agrabad Atelier
          </h2>
          <p className="font-sans text-base sm:text-lg text-espresso-muted max-w-2xl leading-relaxed">
            Step into our Agrabad showroom to inspect the craftsmanship, feel the timber grain, and discuss your custom layout with our designers.
          </p>
          <p className="font-['Noto_Serif_Bengali'] text-base md:text-lg font-medium text-stone-800 tracking-normal mt-3 opacity-90">
            আগ্রাবাদ শোরুমে এসে এক কাপ চা খেতে খেতে আপনার স্বপ্নের ঘরের পরিকল্পনা করুন।
          </p>
        </ScrollReveal>

        {/* 2-Column Split: Operational Info (Left) + Visual Storefront Proof (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Card: Operational Info & Direct Communications */}
          <ScrollReveal className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-2xl bg-ivory-soft border border-ivory-border shadow-sm card-luxury">
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-champagne-muted font-bold font-sans mb-1">
                  Atelier & Showroom
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl text-espresso font-light">
                  Heaven Furniture Mart
                </h3>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-3.5">
                <MapPin className="w-5 h-5 text-champagne-muted mt-1 shrink-0" />
                <div>
                  <p className="font-sans text-sm sm:text-[15px] font-semibold text-espresso">
                    Physical Location
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-espresso-text mt-0.5 leading-relaxed">
                    Agrabad Access Road (Opposite RAK Ceramics)
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-espresso-text leading-relaxed">
                    Agrabad Commercial Area, Chattogram
                  </p>
                  <p className="font-sans text-xs text-espresso-muted leading-relaxed">
                    Near Lucky Plaza / Badamtali Mor
                  </p>
                  <span className="font-['Noto_Serif_Bengali'] text-stone-500 text-xs block mt-1">
                    আরএকে সিরামিকসের বিপরীতে, আগ্রাবাদ এক্সেস রোড, চট্টগ্রাম
                  </span>
                </div>
              </div>

              {/* Visiting Hours */}
              <div className="flex items-start space-x-3.5">
                <Clock className="w-5 h-5 text-champagne-muted mt-1 shrink-0" />
                <div>
                  <p className="font-sans text-sm sm:text-[15px] font-semibold text-espresso">
                    Visiting Hours
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-espresso-text mt-0.5">
                    {BRAND.openingHours}
                  </p>
                </div>
              </div>

              {/* Direct Phone with Quick Copy */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-ivory border border-ivory-border">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-champagne-muted shrink-0" />
                  <div>
                    <span className="text-[11px] text-espresso-muted block font-sans">Direct Telephone & WhatsApp</span>
                    <a
                      href={`tel:${BRAND.phoneRaw}`}
                      className="text-espresso font-bold text-sm sm:text-base tracking-wider hover:text-champagne-muted transition-colors"
                    >
                      {BRAND.phoneDisplay}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="text-xs font-sans text-espresso-muted hover:text-espresso flex items-center space-x-1 py-1 px-2.5 rounded border border-ivory-border hover:border-champagne/40 bg-ivory-soft cursor-pointer active:scale-95"
                  title="Copy telephone"
                >
                  {copied ? (
                    <>
                      <CheckCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-medium">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3.5">
                <Mail className="w-5 h-5 text-champagne-muted shrink-0" />
                <div>
                  <p className="font-sans text-sm font-semibold text-espresso">Email Inquiries</p>
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="font-sans text-xs sm:text-sm text-espresso-text hover:text-champagne-muted underline decoration-ivory-border"
                  >
                    {BRAND.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps External Direction Button */}
            <div className="pt-8 mt-6 border-t border-ivory-border/70">
              <a
                href={BRAND.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury w-full py-3.5 text-center text-xs uppercase tracking-[0.2em] font-bold text-charcoal-deep bg-champagne hover:bg-champagne-hover flex items-center justify-center space-x-2 shadow-sm cursor-pointer"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>

          {/* Right Card: Visual Exterior Storefront Photo with Verified Overlay */}
          <ScrollReveal delay={90} className="lg:col-span-7 flex flex-col justify-center">
            <div className="relative w-full aspect-4/3 sm:aspect-16/11 rounded-2xl overflow-hidden bg-charcoal-deep border border-ivory-border shadow-2xl group card-luxury">
              <SafeImage
                src={SHOWROOM_EXTERIOR.url}
                alt={SHOWROOM_EXTERIOR.alt}
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover group-hover:scale-104 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-charcoal-deep/70 via-transparent to-transparent opacity-80" />

              {/* Official Google Maps Card Overlay */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 bg-white border border-stone-200/90 shadow-xl rounded-2xl p-4 md:p-5 flex items-center justify-between gap-3">
                <div className="flex items-center space-x-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-full bg-stone-100/90 border border-stone-200/70 flex items-center justify-center shrink-0">
                    <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                        fill="#EA4335"
                      />
                      <circle cx="12" cy="9" r="2.8" fill="#FFFFFF" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-stone-900 font-semibold text-base leading-tight truncate">
                      Heaven Furniture Mart
                    </p>
                    <div className="flex flex-wrap items-center gap-1.5 mt-0.5 text-xs text-stone-600">
                      <span className="font-bold text-stone-900">4.8</span>
                      <div className="inline-flex items-center gap-0.5 text-[#FBBC04]" aria-label="4.8 out of 5 stars">
                        <span className="tracking-tight text-xs leading-none">★★★★</span>
                        <span className="relative inline-block text-stone-300 text-xs leading-none select-none">
                          <span className="absolute left-0 top-0 overflow-hidden w-4/5 text-[#FBBC04] leading-none select-none">
                            ★
                          </span>
                          ★
                        </span>
                      </div>
                      <span className="text-stone-500">(30)</span>
                      <span className="text-stone-300">•</span>
                      <span className="text-stone-500">Furniture store</span>
                    </div>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=Heaven+Furniture+Mart+Agrabad+Access+Road+Chattogram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1A73E8] font-medium text-xs md:text-sm hover:underline flex items-center gap-1 shrink-0 whitespace-nowrap"
                >
                  <span>VIEW MAP ↗</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
