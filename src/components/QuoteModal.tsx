"use client";

import { useState, useEffect } from "react";
import { X, Check, MessageCircle, Sparkles, PhoneCall, Copy, CheckCheck } from "lucide-react";
import { BRAND } from "@/data/content";
import { useLenisScroll } from "@/components/SmoothScrollProvider";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSpace?: string;
  initialPiece?: string;
}

export default function QuoteModal({
  isOpen,
  onClose,
  initialSpace,
  initialPiece,
}: QuoteModalProps) {
  const { stopScroll, startScroll } = useLenisScroll();
  const [spaceType, setSpaceType] = useState(initialSpace || "Living Atelier (Living)");
  const [woodPreference, setWoodPreference] = useState("Solid Segun (Bangladeshi Teak)");
  const [dimensions, setDimensions] = useState(
    initialPiece ? `Inquiring about: ${initialPiece}` : ""
  );
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("Agrabad, Chattogram");
  const [submitted, setSubmitted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [prevProps, setPrevProps] = useState({ initialSpace, initialPiece, isOpen });
  if (
    isOpen &&
    (!prevProps.isOpen ||
      initialSpace !== prevProps.initialSpace ||
      initialPiece !== prevProps.initialPiece)
  ) {
    setPrevProps({ initialSpace, initialPiece, isOpen });
    if (initialSpace) setSpaceType(initialSpace);
    if (initialPiece) setDimensions(`Inquiring about: ${initialPiece}`);
  } else if (isOpen !== prevProps.isOpen) {
    setPrevProps({ initialSpace, initialPiece, isOpen });
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      stopScroll();
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      startScroll();
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, stopScroll, startScroll]);

  if (!isOpen) return null;

  const spaceOptions = [
    "Living Atelier (Living)",
    "Master Sanctuary (Bedroom)",
    "Grand Dining (Dining)",
    "Executive Suite (Office & Study)",
    "Full Architectural Commission",
  ];

  const woodOptions = [
    "Solid Segun (Bangladeshi Teak)",
    "Seasoned Chattogram Hardwood",
    "Sheesham (Rosewood)",
    "Reclaimed Monolithic Timber",
    "Open to Studio Recommendation",
  ];

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const textMessage = `*New Bespoke Furniture Quote Request — Heaven Furniture Mart*
Client: ${name || "Valued Client"}
Phone: ${phone || "Not provided"}
Location: ${area}
Space / Category: ${spaceType}
Hardwood Preference: ${woodPreference}
Architectural Notes / Specific Piece: ${dimensions || "In-person quote consultation requested"}
Showroom: Agrabad Access Road, Chattogram`;

    const encoded = encodeURIComponent(textMessage);
    window.open(`https://wa.me/${BRAND.phoneRaw}?text=${encoded}`, "_blank");
    setSubmitted(true);
  };

  const handleStandardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCopyPhone = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(BRAND.phoneDisplay).catch(() => {});
    }
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10"
    >
      {/* Dimmed Blur Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog Body */}
      <div
        data-lenis-prevent
        className="modal-accelerated relative w-full max-w-2xl bg-charcoal-deep text-ivory border border-charcoal-border shadow-2xl overflow-hidden z-10 my-auto max-h-[94vh] flex flex-col"
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-7 border-b border-charcoal-border flex items-start justify-between bg-charcoal-surface">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-champagne" />
              <p className="text-[10px] uppercase tracking-[0.28em] text-champagne font-medium">
                Bespoke Atelier Commission
              </p>
            </div>
            <h3 id="quote-modal-title" className="font-serif text-2xl sm:text-3xl text-ivory font-light">
              Request a Quote
            </h3>
            <p className="text-xs text-ivory/60 font-sans mt-0.5">
              Agrabad Flagship Studio · Chattogram
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-ivory/60 hover:text-champagne transition-colors duration-300 ease-luxury focus:outline-none cursor-pointer active:scale-95"
            aria-label="Close quote modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body Scroll Area */}
        <div
          data-lenis-prevent
          className="p-5 sm:p-8 overflow-y-auto space-y-6 flex-1 bg-charcoal-deep overscroll-contain"
        >
          {submitted ? (
            <div className="py-10 text-center flex flex-col items-center justify-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-champagne/20 border border-champagne flex items-center justify-center text-champagne">
                <Check className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-3xl text-ivory font-light">
                Quote Request Received
              </h4>
              <p className="text-sm text-ivory/70 max-w-md font-sans leading-relaxed">
                Thank you, {name || "Client"}. Our senior master joiners and spatial designers on Agrabad Access Road will review your architectural notes and connect with you shortly.
              </p>
              <div className="pt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a
                  href={`tel:${BRAND.phoneRaw}`}
                  className="px-6 py-3.5 bg-charcoal-surface border border-champagne/40 text-champagne text-xs uppercase tracking-widest hover:bg-champagne hover:text-charcoal-deep transition-colors flex items-center justify-center space-x-2"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call: {BRAND.phoneDisplay}</span>
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-3.5 bg-champagne text-charcoal-deep text-xs uppercase tracking-widest font-semibold hover:bg-champagne-hover transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleStandardSubmit} className="space-y-5 sm:space-y-6">
              {/* Step 1: Space Type */}
              {/* Step 1: Space Type */}
              <div>
                <label className="block text-xs uppercase tracking-[0.24em] text-champagne font-bold mb-2.5">
                  01. Select Space / Environment
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {spaceOptions.map((space) => {
                    const isSelected = spaceType === space;
                    return (
                      <button
                        type="button"
                        key={space}
                        onClick={() => setSpaceType(space)}
                        className={`p-3.5 text-xs sm:text-sm tracking-wide text-left border transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? "border-champagne bg-charcoal-surface text-ivory ring-1 ring-champagne font-semibold"
                            : "border-charcoal-border text-ivory/80 hover:border-ivory/50 bg-black/20"
                        }`}
                      >
                        {space}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Hardwood & Material Selection */}
              <div>
                <label className="block text-xs uppercase tracking-[0.24em] text-champagne font-bold mb-2.5">
                  02. Hardwood & Material Direction
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {woodOptions.map((wood) => {
                    const isSelected = woodPreference === wood;
                    return (
                      <button
                        type="button"
                        key={wood}
                        onClick={() => setWoodPreference(wood)}
                        className={`p-3.5 text-xs sm:text-sm tracking-wide text-left border transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? "border-champagne bg-charcoal-surface text-ivory ring-1 ring-champagne font-semibold"
                            : "border-charcoal-border text-ivory/80 hover:border-ivory/50 bg-black/20"
                        }`}
                      >
                        {wood}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Dimensions or Specific Piece */}
              <div>
                <label className="block text-xs uppercase tracking-[0.24em] text-champagne font-bold mb-2">
                  03. Approximate Dimensions / Architectural Notes
                </label>
                <textarea
                  value={dimensions}
                  onChange={(e) => setDimensions(e.target.value)}
                  placeholder="e.g. Living room wall is 14ft, looking for curved sectional in textured linen and solid Segun coffee table..."
                  rows={2}
                  className="w-full p-3.5 bg-black/30 border border-charcoal-border text-base sm:text-sm text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-champagne transition-colors font-sans"
                />
              </div>

              {/* Step 4: Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs uppercase tracking-[0.24em] text-champagne font-bold mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Tanvir Ahmed"
                    className="w-full p-3 bg-black/30 border border-charcoal-border text-base sm:text-sm text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-champagne transition-colors font-sans"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.24em] text-champagne font-bold mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+880 1..."
                    className="w-full p-3 bg-black/30 border border-charcoal-border text-base sm:text-sm text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-champagne transition-colors font-sans"
                  />
                </div>
              </div>

              {/* Neighborhood */}
              <div>
                <label className="block text-xs uppercase tracking-[0.24em] text-champagne font-bold mb-1.5">
                  Neighborhood / Location in Chattogram
                </label>
                <input
                  type="text"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  placeholder="e.g. Agrabad, Nasirabad Housing, Khulshi, Panchlaish..."
                  className="w-full p-3 bg-black/30 border border-charcoal-border text-base sm:text-sm text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-champagne transition-colors font-sans"
                />
              </div>

              {/* Submission Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleSubmitWhatsApp}
                  className="btn-luxury flex-1 py-4 px-5 bg-champagne hover:bg-champagne-hover text-charcoal-deep text-xs sm:text-sm uppercase tracking-[0.2em] font-bold flex items-center justify-center space-x-2 cursor-pointer shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>

                <button
                  type="submit"
                  className="btn-luxury py-4 px-5 border border-charcoal-border hover:border-champagne text-ivory text-xs sm:text-sm uppercase tracking-[0.2em] font-medium cursor-pointer"
                >
                  <span>Request Callback</span>
                </button>
              </div>

              {/* Direct Telephone Quick Copy */}
              <div className="flex flex-wrap items-center justify-between gap-1 text-[11px] text-ivory/50 pt-2 border-t border-charcoal-border/50">
                <span>Direct Showroom Contact:</span>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="text-champagne hover:underline flex items-center space-x-1 cursor-pointer py-0.5"
                >
                  {copiedPhone ? (
                    <>
                      <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>{BRAND.phoneDisplay}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
