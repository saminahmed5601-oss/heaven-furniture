"use client";

import React, { useState } from "react";
import { MILESTONES_JOURNEY } from "@/data/content";
import ScrollReveal from "@/components/ScrollReveal";

// Exact coordinate mappings for desktop organic wood-grain wave (viewBox 0 0 1000 240)
// Curve undulates with natural timber grain flow around y ≈ 150px
const DESKTOP_STATIONS = [
  { leftPercent: 8, topPercent: 62 },   // 2020: Founded (x=80, y=149)
  { leftPercent: 29, topPercent: 67 },  // 2021: Agrabad Showroom (x=290, y=161)
  { leftPercent: 50, topPercent: 57 },  // 2024–25: Furniture Fair (x=500, y=137)
  { leftPercent: 71, topPercent: 66 },  // 2025: Chamber of Commerce (x=710, y=158)
  { leftPercent: 92, topPercent: 60 },  // 2026: BFIOA Recognition (x=920, y=144)
] as const;

export default function WoodGrainTimeline() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const toggleMilestone = (idx: number) => {
    setActiveIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="w-full pt-16 sm:pt-24 pb-12 sm:pb-20 border-t border-stone-300/70">
      {/* Eyebrow & Section Heading with Generous Bottom Spacing */}
      <ScrollReveal className="max-w-3xl mb-14 md:mb-20">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-3 text-[#C5A880]">
          <span className="text-xs uppercase tracking-[0.25em] font-bold font-sans">
            OUR JOURNEY
          </span>
          <span className="hidden sm:inline text-[#C5A880]">•</span>
          <span className="font-['Noto_Serif_Bengali'] text-xs sm:text-sm font-medium tracking-normal whitespace-nowrap">
            একটি ছোট কারখানা থেকে আস্থার প্রতীক
          </span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-stone-900 font-normal tracking-tight leading-tight">
          From a workshop to a recognized name.
        </h2>
        <p className="font-sans text-sm sm:text-base text-stone-600 mt-3 max-w-xl leading-relaxed">
          Five defining milestones in bespoke craftsmanship, architectural commissions, and master woodworking pedigree.
        </p>
      </ScrollReveal>

      {/* ========================================================================= */}
      {/* DESKTOP TIMELINE: Prominent Wood-Grain Line with Large Serif Year Headlines */}
      {/* ========================================================================= */}
      <div className="hidden md:block relative w-full pt-4 pb-12 select-none">
        <div className="relative w-full h-60">
          {/* Enhanced Organic Wood-Grain SVG Path (2.5px width, rich brass contrast) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 240"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="grainGradPrimary" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C5A880" stopOpacity="0.6" />
                <stop offset="25%" stopColor="#B8956A" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#C5A880" stopOpacity="1" />
                <stop offset="75%" stopColor="#B8956A" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#C5A880" stopOpacity="0.6" />
              </linearGradient>

              {/* Ghost secondary grain line for authentic timber growth-ring depth */}
              <linearGradient id="grainGradSecondary" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C5A880" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#C5A880" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#C5A880" stopOpacity="0.15" />
              </linearGradient>
            </defs>

            {/* Ghost growth-ring companion path */}
            <path
              d="M 0 156 C 70 148, 170 146, 280 169 C 390 190, 420 142, 500 145 C 580 148, 640 168, 720 166 C 800 164, 860 148, 930 152 C 960 154, 985 153, 1000 152"
              fill="none"
              stroke="url(#grainGradSecondary)"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />

            {/* Primary substantial wood-grain timeline path */}
            <path
              d="M 0 150 C 70 142, 170 140, 280 161 C 390 182, 420 134, 500 137 C 580 140, 640 160, 720 158 C 800 156, 860 140, 930 144 C 960 146, 985 145, 1000 144"
              fill="none"
              stroke="url(#grainGradPrimary)"
              strokeWidth="2.5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* 5 Prominent Milestone Stations */}
          {MILESTONES_JOURNEY.map((item, idx) => {
            const station = DESKTOP_STATIONS[idx];
            const isHovered = activeIdx === idx;

            return (
              <div
                key={item.year}
                style={{
                  left: `${station.leftPercent}%`,
                  top: `${station.topPercent}%`,
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                onMouseEnter={() => setActiveIdx(idx)}
                onMouseLeave={() => setActiveIdx(null)}
                onFocus={() => setActiveIdx(idx)}
                onBlur={() => setActiveIdx(null)}
                tabIndex={0}
                role="button"
                aria-expanded={isHovered}
                aria-label={`${item.year}: ${item.title}`}
              >
                {/* 1. Large Proud Headline: Display Serif Year & Utilitarian Title */}
                <div
                  className="absolute bottom-full mb-4 flex flex-col items-center text-center left-1/2 -translate-x-1/2 transition-all duration-300 pointer-events-none w-28 sm:w-32"
                >
                  {/* Significant Year Number */}
                  <span
                    className={`font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight leading-none whitespace-nowrap transition-colors duration-300 ${
                      isHovered ? "text-[#A37E4A]" : "text-stone-900"
                    }`}
                  >
                    {item.year}
                  </span>

                  {/* Clean Short Title with controlled max width to wrap cleanly */}
                  <span
                    className={`font-sans text-[11px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] font-bold mt-2 max-w-25 md:max-w-30 text-center mx-auto leading-tight transition-colors duration-300 ${
                      isHovered ? "text-stone-900" : "text-stone-600"
                    }`}
                  >
                    {item.title}
                  </span>

                  {/* Subtle connecting vertical guide tick */}
                  <div
                    className={`w-px h-3 mt-1.5 transition-colors duration-300 ${
                      isHovered ? "bg-[#A37E4A]" : "bg-stone-300"
                    }`}
                  />
                </div>

                {/* 2. Substantial Stamped Concentric Wood Knot Marker (28px) */}
                <div className="relative flex items-center justify-center cursor-pointer group">
                  {/* Subtle Glow Aura on Hover */}
                  <div
                    className={`absolute -inset-2.5 rounded-full transition-opacity duration-300 pointer-events-none ${
                      isHovered ? "opacity-100 bg-[#C5A880]/25 blur-md" : "opacity-0"
                    }`}
                  />

                  {/* Outer Concentric Growth Ring */}
                  <div
                    className={`w-7 h-7 rounded-full border-2 bg-[#FBF9F5] flex items-center justify-center transition-all duration-300 ${
                      isHovered
                        ? "scale-115 border-[#946E3A] shadow-lg ring-4 ring-[#C5A880]/20"
                        : "border-[#C5A880] hover:border-[#946E3A] shadow-xs"
                    }`}
                  >
                    {/* Secondary Wood-Grain Ring */}
                    <div className="w-4 h-4 rounded-full border border-[#C5A880]/60 flex items-center justify-center">
                      {/* Center Heartwood Knot Core */}
                      <div
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          isHovered ? "bg-[#946E3A]" : "bg-[#C5A880]"
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* 3. On-Demand Architectural Tooltip Floating Below Knot */}
                {isHovered && (
                  <div
                    role="tooltip"
                    className={`absolute z-30 top-full mt-4 w-72 p-4 rounded-xl bg-charcoal-deep text-ivory border border-[#C5A880]/40 shadow-2xl transition-all duration-200 pointer-events-none animate-in fade-in-0 zoom-in-95 ${
                      idx === 0
                        ? "left-0"
                        : idx >= 3
                        ? "right-0"
                        : "left-1/2 -translate-x-1/2"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-white/10">
                      <span className="font-serif italic text-base text-[#C5A880] font-normal">
                        {item.year}
                      </span>
                      <span className="text-stone-500">•</span>
                      <span className="font-sans text-[11px] uppercase tracking-wider text-stone-200 font-semibold">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-xs text-stone-300 font-sans font-normal leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE TIMELINE: Generous Vertical Timeline with Large Serif Years        */}
      {/* ========================================================================= */}
      <div className="md:hidden relative w-full pl-2 pr-2 py-6">
        <div className="relative">
          {/* Vertical Organic Wood-Grain Path */}
          <div className="absolute left-4 top-3 bottom-6 w-5 pointer-events-none">
            <svg
              className="w-full h-full"
              viewBox="0 0 20 600"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="vGrainGradMobile" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#C5A880" stopOpacity="0.5" />
                  <stop offset="30%" stopColor="#B8956A" stopOpacity="1" />
                  <stop offset="70%" stopColor="#C5A880" stopOpacity="1" />
                  <stop offset="100%" stopColor="#C5A880" stopOpacity="0.5" />
                </linearGradient>
              </defs>
              <path
                d="M 10 0 C 5 120, 15 240, 8 360 C 4 480, 14 540, 10 600"
                fill="none"
                stroke="url(#vGrainGradMobile)"
                strokeWidth="2.5"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>

          {/* Vertical Milestone Stack with Generous Vertical Spacing */}
          <div className="space-y-10 relative">
            {MILESTONES_JOURNEY.map((item, idx) => {
              const isExpanded = activeIdx === idx;

              return (
                <div key={item.year} className="relative flex items-start">
                  {/* Stamped Knot Marker on Vertical Line */}
                  <div
                    onClick={() => toggleMilestone(idx)}
                    className="absolute left-4 -translate-x-1/2 top-1.5 cursor-pointer z-10"
                    role="button"
                    tabIndex={0}
                    aria-expanded={isExpanded}
                    aria-label={`Toggle ${item.year} details`}
                  >
                    <div
                      className={`w-7 h-7 rounded-full border-2 bg-[#FBF9F5] flex items-center justify-center transition-all duration-300 ${
                        isExpanded
                          ? "border-[#946E3A] scale-110 shadow-md ring-4 ring-[#C5A880]/20"
                          : "border-[#C5A880]"
                      }`}
                    >
                      <div className="w-4 h-4 rounded-full border border-[#C5A880]/60 flex items-center justify-center">
                        <div
                          className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                            isExpanded ? "bg-[#946E3A]" : "bg-[#C5A880]"
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content Block on the Right with Large Serif Year */}
                  <div className="pl-11 w-full">
                    <button
                      type="button"
                      onClick={() => toggleMilestone(idx)}
                      className="text-left w-full flex items-center justify-between group cursor-pointer focus:outline-none"
                    >
                      <div>
                        {/* Large Display Serif Year */}
                        <div
                          className={`font-serif text-3xl font-normal leading-tight transition-colors ${
                            isExpanded ? "text-[#A37E4A]" : "text-stone-900"
                          }`}
                        >
                          {item.year}
                        </div>
                        {/* Short Utilitarian Title */}
                        <div
                          className={`font-sans text-xs uppercase tracking-[0.2em] font-bold mt-0.5 transition-colors ${
                            isExpanded ? "text-stone-900" : "text-stone-600"
                          }`}
                        >
                          {item.title}
                        </div>
                      </div>

                      {/* Expand indicator pill */}
                      <span
                        className={`text-xs px-2.5 py-1 rounded-full border transition-all duration-200 font-sans font-medium ${
                          isExpanded
                            ? "bg-[#C5A880] text-charcoal-deep border-[#C5A880]"
                            : "bg-stone-100 text-stone-600 border-stone-200"
                        }`}
                        aria-hidden="true"
                      >
                        {isExpanded ? "Close" : "Details"}
                      </span>
                    </button>

                    {/* Expandable Detail Text */}
                    {isExpanded && (
                      <div className="mt-3 p-4 rounded-xl bg-ivory-soft border border-stone-200 shadow-xs text-xs sm:text-sm text-stone-700 leading-relaxed font-sans font-normal animate-in fade-in-0 duration-200">
                        {item.subtitle}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
