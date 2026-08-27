import React from 'react';
import { Star, ShieldCheck, MapPin, Sparkles, Car, Stethoscope, Scissors, CheckCircle2, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO, getBusinessStatus } from '../data/businessData';
import { createWhatsAppLink } from '../utils/whatsapp';
import { WhatsAppIcon } from './WhatsAppIcon';
import heroPetImage from '../assets/images/regenerated_image_1787843792306.png';

export const Hero: React.FC = () => {
  const status = getBusinessStatus();

  return (
    <section className="relative overflow-hidden bg-[#2D6A4F] text-white pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Artistic Flair Circular Glow Elements from Design HTML */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#3A7E5F] rounded-full opacity-30 blur-2xl pointer-events-none" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[400px] h-[400px] bg-[#1B4332] rounded-full opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-[#F4A261]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & High Conversion CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Google Rating Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/20 text-xs font-semibold backdrop-blur-md shadow-sm">
              <div className="flex text-[#F4A261] gap-0.5">
                {BUSINESS_INFO.googleRating.starsArray.map((i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#F4A261] text-[#F4A261]" />
                ))}
              </div>
              <span className="text-[#F4A261] font-bold">{BUSINESS_INFO.googleRating.score} no Google</span>
              <span className="text-white/80">({BUSINESS_INFO.googleRating.reviewsCount}+ avaliações)</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black text-white leading-[1.1] tracking-tight">
                Cuidado Real para o seu melhor amigo em Cascavel.
              </h1>
              <p className="text-base sm:text-lg text-white/85 max-w-2xl font-normal leading-relaxed">
                Especialistas em estética pet e saúde veterinária com o carinho que seu pet merece no Parque São Paulo.
              </p>
            </div>

            {/* Fast Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full pt-1">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-white/90">
                <CheckCircle2 className="w-4 h-4 text-[#F4A261] flex-shrink-0" />
                <span>Zero sedativos • Manejo gentil e calmo</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-white/90">
                <CheckCircle2 className="w-4 h-4 text-[#F4A261] flex-shrink-0" />
                <span>Toalhas individuais esterilizadas</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-white/90">
                <CheckCircle2 className="w-4 h-4 text-[#F4A261] flex-shrink-0" />
                <span>Médica Veterinária dedicada no local</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-white/90">
                <CheckCircle2 className="w-4 h-4 text-[#F4A261] flex-shrink-0" />
                <span>Táxi Pet: buscamos e entregamos</span>
              </div>
            </div>

            {/* CTAs Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full pt-3">
              <a
                id="hero-cta-whatsapp-primary"
                href={createWhatsAppLink('Olá! Gostaria de agendar um horário para o meu pet no General Pet Shop!')}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base sm:text-lg font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1da850] shadow-lg shadow-black/15 transition-all transform hover:scale-[1.02] active:scale-[0.99] text-center"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white text-white group-hover:scale-110 transition-transform" />
                <span>AGENDAR AGORA NO WHATSAPP</span>
                <ArrowRight className="w-4 h-4 text-white ml-1 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                id="hero-cta-formulario-scroll"
                href="#agendamento"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all text-center"
              >
                <Sparkles className="w-4 h-4 text-[#F4A261]" />
                <span>Montar Pré-Agendamento</span>
              </a>
            </div>

            {/* Real Address & Hours pill */}
            <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white/90 text-sm w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div>
                <span className="block font-black uppercase tracking-[0.2em] text-[10px] opacity-75 text-[#F4A261]">
                  Localização
                </span>
                <span className="text-xs sm:text-sm font-medium">
                  R. Padre Anchieta, 245 - Parque São Paulo, Cascavel/PR
                </span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/20 border border-white/10 text-xs self-start sm:self-auto">
                <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-[#52B788] animate-pulse' : 'bg-[#F4A261]'}`} />
                <span className="font-semibold text-white/90">{status.statusText}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Card with Authentic Pet & Mascot Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Glow Border */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#F4A261] via-[#3A7E5F] to-[#2D6A4F] rounded-3xl blur-md opacity-40 group-hover:opacity-100 transition duration-1000" />

              {/* Main Photo Card */}
              <div className="relative rounded-3xl overflow-hidden bg-white border-2 border-white/20 shadow-2xl">
                
                {/* Hero Image marked with data-substituir="true" as requested */}
                <div className="relative aspect-[4/3] sm:aspect-[4/3] w-full overflow-hidden bg-slate-800">
                  <img
                    src={heroPetImage}
                    alt="Banho e cuidados especiais no General Pet Shop"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    data-substituir="true"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                  
                  {/* Floating Service Badge Top Right */}
                  <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-[#1B4332]/90 backdrop-blur-md border border-white/10 text-white text-[11px] font-bold flex items-center gap-1.5 shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 text-[#F4A261]" />
                    <span>Toalhas Esterilizadas</span>
                  </div>

                  {/* Veterinary Badge Bottom Left */}
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-2xl bg-[#1B4332]/95 backdrop-blur-md border border-white/15 text-white shadow-lg">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-[#2D6A4F] border border-white/20 flex items-center justify-center text-[#F4A261]">
                          <Stethoscope className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white flex items-center gap-1.5">
                            <span>Médica Veterinária no Local</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#52B788]" />
                          </div>
                          <p className="text-[11px] text-white/80">
                            Consultas, vacinas e cuidados preventivos
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Card Bar with Quick Services Icons */}
                <div className="p-4 bg-[#1B4332] border-t border-white/10 grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-1">
                    <Scissors className="w-4 h-4 text-[#F4A261]" />
                    <span className="text-[11px] font-semibold text-white/90">Banho & Tosa</span>
                  </div>
                  <div className="p-2 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-1">
                    <Car className="w-4 h-4 text-[#F4A261]" />
                    <span className="text-[11px] font-semibold text-white/90">Táxi Pet</span>
                  </div>
                  <div className="p-2 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-[#F4A261]" />
                    <span className="text-[11px] font-semibold text-white/90">Vacinação</span>
                  </div>
                </div>

              </div>

              {/* Floating Mascot Badge on Corner */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white text-[#2D2D2D] p-3 rounded-2xl shadow-xl border-2 border-[#E9E7E0] items-center gap-3 animate-float">
                <div className="w-11 h-11 rounded-xl bg-[#2D6A4F] p-1 flex items-center justify-center">
                  <span className="text-xl">🐶</span>
                </div>
                <div>
                  <p className="text-xs font-black text-[#2D2D2D] leading-tight">General Pet Shop</p>
                  <p className="text-[11px] text-[#2D6A4F] font-bold">Parque São Paulo • Cascavel</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
