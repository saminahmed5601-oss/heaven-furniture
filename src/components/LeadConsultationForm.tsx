"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { BRAND } from "@/data/content";
import ScrollReveal from "@/components/ScrollReveal";

export default function LeadConsultationForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [roomType, setRoomType] = useState("Living Room");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    // Construct pre-filled WhatsApp message for direct conversion
    const message = encodeURIComponent(
      `Hello Heaven Furniture Mart!\n\n*Consultation & Pricing Request*\n• Name: ${name}\n• Phone: ${phone}\n• Room / Collection: ${roomType}\n• Details / Dimensions: ${details || "Standard proportions"}`
    );
    const waUrl = `https://wa.me/8801960481983?text=${message}`;

    setSubmitted(true);
    // Optional: open WhatsApp in new tab after 800ms
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 800);
  };

  return (
    <section
      id="consultation"
      className="relative w-full bg-charcoal-deep text-ivory py-24 sm:py-32 lg:py-36 overflow-hidden border-t border-charcoal-border"
    >
      {/* Warm Ambient Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-champagne/10 via-transparent to-transparent opacity-60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center flex flex-col items-center mb-12 sm:mb-16">
          <div className="w-12 h-px bg-champagne mb-6" />
          <span className="text-xs uppercase tracking-[0.28em] text-champagne font-bold font-sans block mb-3">
            Complimentary Consultation
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-ivory font-light leading-[1.06] tracking-tight mb-5">
            Let&apos;s Design Something
            <br />
            <span className="italic font-normal text-champagne-light">
              That&apos;s Truly Yours.
            </span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-ivory/80 max-w-2xl leading-relaxed">
            Tell us about your room or piece. We&apos;ll handle the design, 3D proportion draft, and final finish — starting with a free consultation.
          </p>
        </ScrollReveal>

        {/* Lead Capture Form Card */}
        <ScrollReveal className="bg-charcoal-surface/90 border border-charcoal-border p-8 sm:p-12 rounded-2xl shadow-2xl backdrop-blur-md">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-3xl text-ivory font-light">
                Consultation Request Received
              </h3>
              <p className="font-sans text-sm sm:text-base text-ivory/80 max-w-md mx-auto leading-relaxed">
                Thank you, {name}. Our senior spatial design team on Agrabad Access Road has received your request and is opening WhatsApp to confirm your appointment.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-sans uppercase tracking-[0.2em] text-champagne hover:underline cursor-pointer"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="lead-name" className="block text-xs uppercase tracking-[0.2em] font-sans font-semibold text-ivory/90 mb-2">
                    Full Name <span className="text-champagne">*</span>
                  </label>
                  <input
                    id="lead-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Tariq Rahman"
                    className="w-full px-4 py-3.5 rounded-lg bg-charcoal-deep border border-charcoal-border text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-champagne text-sm font-sans transition-colors"
                  />
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label htmlFor="lead-phone" className="block text-xs uppercase tracking-[0.2em] font-sans font-semibold text-ivory/90 mb-2">
                    Phone Number / WhatsApp <span className="text-champagne">*</span>
                  </label>
                  <input
                    id="lead-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+880 1..."
                    className="w-full px-4 py-3.5 rounded-lg bg-charcoal-deep border border-charcoal-border text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-champagne text-sm font-sans transition-colors"
                  />
                </div>
              </div>

              {/* Room / Collection Type Dropdown */}
              <div>
                <label htmlFor="lead-room" className="block text-xs uppercase tracking-[0.2em] font-sans font-semibold text-ivory/90 mb-2">
                  Room / Collection Type
                </label>
                <select
                  id="lead-room"
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-lg bg-charcoal-deep border border-charcoal-border text-ivory focus:outline-none focus:border-champagne text-sm font-sans transition-colors cursor-pointer"
                >
                  <option value="Living Room">Living Room (Royal Carved Sofa & Coffee Table)</option>
                  <option value="Bedroom">Bedroom (Custom Bed, Wardrobe & Vanity)</option>
                  <option value="Dining Room">Dining Room (Teak Dining Table & Chairs)</option>
                  <option value="Executive Office">Executive Office (Presidential Desk & Credenza)</option>
                  <option value="Full Bespoke Home">Full Bespoke Home Interior</option>
                </select>
              </div>

              {/* Project Details / Dimensions */}
              <div>
                <label htmlFor="lead-details" className="block text-xs uppercase tracking-[0.2em] font-sans font-semibold text-ivory/90 mb-2">
                  Project Details / Dimensions (Optional)
                </label>
                <textarea
                  id="lead-details"
                  rows={3}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Tell us about your room dimensions, preferred timber (Segun teak / cured hardwood), or design inspiration..."
                  className="w-full px-4 py-3.5 rounded-lg bg-charcoal-deep border border-charcoal-border text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-champagne text-sm font-sans transition-colors resize-none"
                />
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                className="btn-luxury w-full py-4 bg-champagne hover:bg-champagne-hover text-charcoal-deep text-xs sm:text-sm uppercase tracking-[0.22em] font-bold flex items-center justify-center space-x-2 rounded shadow-xl cursor-pointer"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* Fallback Direct WhatsApp Channel */}
          <div className="mt-8 pt-6 border-t border-charcoal-border/70 text-center">
            <p className="text-xs sm:text-sm text-ivory/70 font-sans">
              Prefer an immediate response?{" "}
              <a
                href={BRAND.whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-champagne hover:underline font-semibold inline-flex items-center space-x-1"
              >
                <span>WhatsApp Us</span>
                <span>↗</span>
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
