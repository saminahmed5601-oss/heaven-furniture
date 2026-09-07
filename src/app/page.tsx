"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ManifestoPillars from "@/components/ManifestoPillars";
import CuratedSpaces from "@/components/CuratedSpaces";
import CraftsmanshipStory from "@/components/CraftsmanshipStory";
import DirectorHeritage from "@/components/DirectorHeritage";
import CustomerReviews from "@/components/CustomerReviews";
import FlagshipShowroom from "@/components/FlagshipShowroom";
import LeadConsultationForm from "@/components/LeadConsultationForm";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import QuoteModal from "@/components/QuoteModal";

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteSpace, setQuoteSpace] = useState<string | undefined>();
  const [quotePiece, setQuotePiece] = useState<string | undefined>();

  const handleOpenQuoteModal = (space?: string, piece?: string) => {
    setQuoteSpace(space);
    setQuotePiece(piece);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-ivory text-espresso selection:bg-champagne selection:text-charcoal-deep">
      {/* 1. Header Navigation */}
      <Navbar onRequestQuote={() => handleOpenQuoteModal()} />

      {/* Main Page Flow */}
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        {/* 2. Hero Campaign */}
        <Hero onRequestQuote={() => handleOpenQuoteModal()} />

        {/* 3. Brand Intro & 4 Trust Pillars */}
        <ManifestoPillars />

        {/* 4. Real Catalog Collections (#collections) */}
        <CuratedSpaces onRequestQuote={handleOpenQuoteModal} />

        {/* 5. Craftsmanship Process with CNC Video Loop (#process) */}
        <CraftsmanshipStory />

        {/* 6. Founder Spotlight & Milestone Journey (#story) */}
        <DirectorHeritage />

        {/* 7. Authentic Customer Reviews (#reviews) */}
        <CustomerReviews />

        {/* 8. Flagship Showroom & Physical Proof (#visit) */}
        <FlagshipShowroom />

        {/* 9. Final Lead Conversion Form (#consultation) */}
        <LeadConsultationForm />
      </main>

      {/* 10. Minimalist Studio Footer */}
      <Footer />

      {/* 11. Subtle Floating WhatsApp Action */}
      <FloatingWhatsApp />

      {/* 12. Bespoke Consultation Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialSpace={quoteSpace}
        initialPiece={quotePiece}
      />
    </div>
  );
}
