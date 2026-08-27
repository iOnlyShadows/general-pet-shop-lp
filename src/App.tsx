import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TaxiPetSection } from './components/TaxiPetSection';
import { AdoptionSection } from './components/AdoptionSection';
import { ReviewsSection } from './components/ReviewsSection';
import { GallerySection } from './components/GallerySection';
import { LocationHoursSection } from './components/LocationHoursSection';
import { FaqSection } from './components/FaqSection';
import { BookingForm } from './components/BookingForm';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#2D2D2D] flex flex-col selection:bg-[#F4A261]/30 selection:text-[#1B4332] font-sans antialiased">
      {/* Header & Sticky Nav */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero with live status, rating and quick action */}
        <Hero />

        {/* 2. Real Services & Specialty Cards */}
        <ServicesSection />

        {/* 3. Real Differentials (Toalhas esterilizadas, zero sedativos, médica veterinária) */}
        <WhyChooseUs />

        {/* 4. Special Táxi Pet section */}
        <TaxiPetSection />

        {/* 5. Special Apoio à Adoção section */}
        <AdoptionSection />

        {/* 6. Google Reviews & Testimonials */}
        <ReviewsSection />

        {/* 7. Daily Gallery with category filter */}
        <GallerySection />

        {/* 8. Location, Real Hours & Interactive Map */}
        <LocationHoursSection />

        {/* 9. Frequently Asked Questions */}
        <FaqSection />

        {/* 10. Agendamento / Atendimento Section at the end of the page */}
        <BookingForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Smart WhatsApp Widget */}
      <FloatingWhatsApp />
    </div>
  );
}

