"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { BRAND } from "@/data/content";
import { useLenisScroll } from "@/components/SmoothScrollProvider";

interface NavbarProps {
  onRequestQuote?: (space?: string, piece?: string) => void;
}

export default function Navbar({ onRequestQuote }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollTo, stopScroll, startScroll } = useLenisScroll();

  useEffect(() => {
    let lastScrolled = false;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 20;
          if (isScrolled !== lastScrolled) {
            setScrolled(isScrolled);
            lastScrolled = isScrolled;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    const initialFrame = window.requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(initialFrame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent background scrolling while mobile navigation drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      stopScroll();
    } else {
      document.body.style.overflow = "";
      startScroll();
    }
    return () => {
      document.body.style.overflow = "";
      startScroll();
    };
  }, [mobileMenuOpen, stopScroll, startScroll]);

  // Dismiss mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Collections", href: "#collections" },
    { label: "Craft & Process", href: "#process" },
    { label: "Our Story", href: "#story" },
    { label: "Reviews", href: "#reviews" },
    { label: "Visit Studio", href: "#visit" },
  ];

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeMobileMenu();
    scrollTo(href, { duration: 1.2 });
    if (window.history.pushState) {
      window.history.pushState(null, "", href);
    }
  };

  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    closeMobileMenu();
    if (onRequestQuote) {
      onRequestQuote();
    } else {
      scrollTo("#consultation", { duration: 1.2 });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-luxury ${
          scrolled || mobileMenuOpen
            ? "bg-charcoal-deep/95 backdrop-blur-md border-b border-charcoal-border/80 py-3 sm:py-3.5 shadow-lg shadow-black/20"
            : "bg-linear-to-b from-black/80 via-black/40 to-transparent py-3 sm:py-5"
        }`}
      >
        <div className="flex items-center justify-between w-full px-6 lg:px-12 max-w-7xl mx-auto">
          {/* 1. LEFT SIDE: Brand Identity */}
          <div className="min-w-0 shrink-0 mr-4 lg:mr-8">
            <Link
              href="/"
              onClick={(e) => {
                e.preventDefault();
                closeMobileMenu();
                scrollTo(0, { duration: 1.2 });
              }}
              className="group flex items-center gap-3 focus:outline-none focus-visible:ring-1 focus-visible:ring-champagne transition-transform duration-300"
              aria-label="Heaven Furniture Mart - Back to top"
            >
              {/* Compact Standalone Brand Mark / Monogram */}
              <Image
                src="/logo-mark-gold.svg"
                alt="Heaven Furniture Mart Mark"
                width={28}
                height={27}
                className="h-7 sm:h-8 w-auto shrink-0 object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />

              {/* Primary Serif Wordmark */}
              <div className="flex flex-col items-start justify-center leading-none">
                <span className="font-serif tracking-[0.14em] sm:tracking-[0.18em] md:tracking-[0.2em] text-stone-100 text-[15px] sm:text-lg md:text-xl font-normal uppercase group-hover:text-champagne transition-colors duration-300 whitespace-nowrap leading-tight">
                  HEAVEN FURNITURE MART
                </span>
                <span className="font-sans text-[9px] sm:text-[10px] md:text-xs tracking-[0.2em] sm:tracking-[0.25em] text-[#C5A880]/90 font-medium uppercase mt-0.5 transition-colors duration-300 whitespace-nowrap">
                  AGRABAD · CHATTOGRAM
                </span>
              </div>
            </Link>
          </div>

          {/* 2. DESKTOP NAVIGATION (strictly visible on desktop `hidden md:flex`) */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-8 lg:gap-10 text-[12px] xl:text-[13px] tracking-[0.18em] xl:tracking-[0.2em] font-sans font-medium text-ivory/90 uppercase"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-1 transition-all duration-300 ease-luxury hover:text-champagne focus:outline-none focus-visible:text-champagne relative group whitespace-nowrap"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-champagne transition-all duration-300 ease-luxury group-hover:w-full" />
              </a>
            ))}

            {/* Understated Inquire link: "INQUIRE ↗" */}
            <button
              type="button"
              onClick={handleQuoteClick}
              className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 border border-stone-600/60 rounded-full text-xs uppercase tracking-widest font-medium text-stone-300 hover:text-[#C5A880] hover:border-[#C5A880] transition-all duration-200 cursor-pointer whitespace-nowrap focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C5A880] ml-2"
              aria-label="Inquire about bespoke furniture and design consultation"
            >
              <span>INQUIRE</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </nav>

            {/* 3. MOBILE NAVIGATION (strictly visible on mobile `flex md:hidden`) */}
            <div className="flex md:hidden items-center my-auto">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="relative z-50 p-2 min-h-11 min-w-11 text-ivory hover:text-champagne focus:outline-none focus-visible:ring-1 focus-visible:ring-champagne flex items-center justify-center cursor-pointer transition-transform duration-200 active:scale-90"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </header>

      {/* Mobile Navigation Drawer with Lenis Scroll Prevention */}
      <div
        data-lenis-prevent
        className={`fixed inset-0 z-40 bg-charcoal-deep/98 backdrop-blur-xl transition-all duration-300 ease-luxury md:hidden ${
          mobileMenuOpen
            ? "flex flex-col justify-between pt-24 sm:pt-28 pb-8 px-6 sm:px-8 overflow-y-auto overscroll-contain opacity-100 pointer-events-auto translate-y-0"
            : "hidden opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="flex flex-col space-y-5">
          <span className="text-[10px] tracking-[0.28em] text-champagne/80 uppercase font-sans font-medium">
            Navigation
          </span>
          <nav className="flex flex-col divide-y divide-charcoal-border">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMobileMenu}
                className="font-serif text-2xl text-ivory hover:text-champagne transition-colors duration-300 ease-luxury block py-3.5 active:scale-[0.99]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 flex flex-col gap-3">
            <button
              onClick={handleQuoteClick}
              className="group w-full py-3.5 text-center text-xs uppercase tracking-[0.25em] font-medium text-stone-200 border border-stone-600/60 rounded-full hover:border-[#C5A880] hover:text-[#C5A880] flex items-center justify-center space-x-1.5 cursor-pointer transition-all duration-200"
            >
              <span>INQUIRE</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <a
              href={BRAND.whatsappHeroUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="btn-luxury w-full py-3.5 text-center text-xs uppercase tracking-[0.2em] font-medium text-ivory border border-charcoal-border hover:border-champagne hover:text-champagne flex items-center justify-center space-x-2"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-current text-champagne"
                aria-hidden="true"
              >
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.05-1.07l-.29-.17-3.12.82.83-3.04-.19-.3a8.21 8.21 0 0 1-1.26-4.47c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.32-.02-.45s-.56-1.35-.77-1.85c-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29" />
              </svg>
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* Mobile Drawer Sub-footer */}
        <div className="border-t border-charcoal-border pt-4 text-xs text-ivory/60 space-y-1">
          <p className="text-champagne font-medium">Heaven Furniture Mart</p>
          <p className="text-[11px] text-ivory/50">Opposite of RAK Ceramics, Agrabad Access Road, Chattogram</p>
          <p className="text-[11px] text-ivory/70">{BRAND.phoneDisplay}</p>
        </div>
      </div>
    </>
  );
}
