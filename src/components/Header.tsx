import React, { useState, useEffect } from 'react';
import { Phone, Clock, Menu, X, Navigation } from 'lucide-react';
import { Logo } from './Logo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BUSINESS_INFO, getBusinessStatus } from '../data/businessData';
import { createWhatsAppLink } from '../utils/whatsapp';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [status, setStatus] = useState(getBusinessStatus());
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Update status every minute
    const interval = setInterval(() => {
      setStatus(getBusinessStatus());
    }, 60000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Táxi Pet', href: '#taxi-pet' },
    { label: 'Adoção', href: '#adocao' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Dúvidas', href: '#faq' },
    { label: 'Agendamento', href: '#agendamento', highlight: true },
  ];

  return (
    <>
      {/* Main Sticky Header - Clean and unpolluted */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#FDFCF8]/95 backdrop-blur-md shadow-sm py-2.5 border-b border-[#E9E7E0]'
            : 'bg-[#FDFCF8] py-3.5 border-b border-[#E9E7E0]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo Brand - Clean: Logo + Pet Shop */}
          <a href="#" className="flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] rounded-2xl">
            <Logo size={scrolled ? 'sm' : 'md'} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-xl text-sm font-semibold transition-all ${
                  link.highlight
                    ? 'text-[#2D6A4F] bg-[#2D6A4F]/10 hover:bg-[#2D6A4F]/15 border border-[#2D6A4F]/20 font-bold'
                    : 'text-[#2D2D2D]/80 hover:text-[#2D6A4F] hover:bg-[#E9E7E0]/40'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions: Live Status Badge (mobile) + CTA Button */}
          <div className="flex items-center gap-2.5">
            {/* Live Status Pill */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9E7E0]/50 border border-[#E9E7E0] text-xs font-semibold text-[#2D2D2D]">
              <span
                className={`w-2 h-2 rounded-full ${
                  status.isOpen ? 'bg-[#2D6A4F] animate-pulse' : 'bg-[#F4A261]'
                }`}
              />
              <span>{status.isOpen ? 'Aberto' : 'Fechado'}</span>
            </div>

            {/* WhatsApp CTA Button with authentic WhatsApp logo */}
            <a
              id="header-cta-whatsapp"
              href={createWhatsAppLink('Olá! Vim pelo site do General Pet Shop e gostaria de tirar uma dúvida ou agendar um serviço.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1da850] shadow-sm shadow-black/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span className="hidden xs:inline sm:inline">WhatsApp</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-2xl text-[#2D2D2D] hover:bg-[#E9E7E0] focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="fixed inset-0 z-50 lg:hidden bg-black/60 backdrop-blur-sm flex flex-col justify-start"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-full max-w-sm bg-[#FDFCF8] p-6 shadow-2xl flex flex-col h-full overflow-y-auto ml-auto border-l border-[#E9E7E0]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#E9E7E0] mb-4">
              <Logo size="sm" />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-2xl text-[#2D2D2D] hover:bg-[#E9E7E0]"
                aria-label="Fechar menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Live status inside drawer */}
            <div className={`p-3 rounded-2xl mb-4 border ${status.badgeColor} flex items-center justify-between text-xs`}>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="font-semibold">{status.statusText}</span>
              </div>
              <span className="text-[11px] opacity-80">{status.nextOpenText}</span>
            </div>

            {/* Navigation links */}
            <div className="flex flex-col gap-1.5 mb-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-2xl text-base font-bold transition-colors flex items-center justify-between ${
                    link.highlight
                      ? 'bg-[#FFF9F0] text-[#2D6A4F] border-2 border-[#F4A261]/40'
                      : 'text-[#2D2D2D] hover:bg-[#E9E7E0]/60'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.highlight && (
                    <span className="text-xs bg-[#F4A261] text-white px-2.5 py-0.5 rounded-full font-bold">
                      Rápido
                    </span>
                  )}
                </a>
              ))}
            </div>

            {/* Quick Contact buttons inside mobile drawer */}
            <div className="mt-auto space-y-3 pt-4 border-t border-[#E9E7E0]">
              <a
                id="drawer-cta-whatsapp"
                href={createWhatsAppLink('Olá! Vim pelo site do General Pet Shop e gostaria de atendimento.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white" />
                <span>Conversar no WhatsApp</span>
              </a>

              <a
                id="drawer-cta-phone"
                href={BUSINESS_INFO.phone.telLink}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-white text-[#2D2D2D] font-bold text-sm hover:bg-[#E9E7E0] transition-colors border-2 border-[#E9E7E0]"
              >
                <Phone className="w-4 h-4 text-[#2D6A4F]" />
                <span>Ligar: {BUSINESS_INFO.phone.display}</span>
              </a>

              <a
                id="drawer-cta-maps"
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-2xl text-[#2D2D2D]/70 font-semibold text-xs hover:text-[#2D6A4F] transition-colors text-center"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Ver rota no Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

