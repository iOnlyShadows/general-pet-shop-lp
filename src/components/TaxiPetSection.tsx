import React from 'react';
import { Car, Clock, ShieldCheck, MapPin, Phone, Sparkles, CheckCircle2 } from 'lucide-react';
import { createWhatsAppLink } from '../utils/whatsapp';
import { BUSINESS_INFO } from '../data/businessData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const TaxiPetSection: React.FC = () => {
  return (
    <section id="taxi-pet" className="py-16 sm:py-24 bg-[#FFF9F0]/50 border-y border-[#E9E7E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Image with Taxi Pet badge */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-[#E9E7E0] bg-white">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?q=80&w=800&auto=format&fit=crop"
                  alt="Táxi pet com cãozinho seguro e feliz no transporte"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  data-substituir="true"
                />
                
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#F4A261] text-white text-xs font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                  <Car className="w-4 h-4" />
                  <span>Táxi Pet Cascavel</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#1B4332]/95 backdrop-blur-md text-white border border-white/15">
                  <p className="text-xs font-bold text-[#F4A261]">
                    🚖 Coleta e entrega programada
                  </p>
                  <p className="text-[11px] text-white/80 pt-0.5">
                    Seu pet é transportado com cinto adaptado e caixa individual higienizada.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Value points */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9F0] border border-[#F4A261]/50 text-[#2D6A4F] text-[10px] font-black uppercase tracking-[0.2em]">
              <Car className="w-3.5 h-3.5 text-[#F4A261]" />
              <span>Conforto & Praticidade para sua rotina</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[#2D2D2D] tracking-tight">
              Sem tempo para trazer seu pet? Nosso <span className="text-[#2D6A4F]">Táxi Pet</span> busca e entrega na sua porta!
            </h2>

            <p className="text-sm sm:text-base text-[#2D2D2D]/75 leading-relaxed">
              Você não precisa alterar sua rotina de trabalho ou compromissos. O Táxi Pet do General Pet Shop combina o horário de retirada, cuida do banho, tosa ou consulta, e devolve seu filho de quatro patas cheiroso e feliz.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border-2 border-[#E9E7E0] shadow-sm">
                <div className="w-8 h-8 rounded-xl bg-[#2D6A4F] text-white flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                  1
                </div>
                <div>
                  <h4 className="text-sm font-black text-[#2D2D2D]">Agendamento Fácil no WhatsApp</h4>
                  <p className="text-xs text-[#2D2D2D]/75">Envie seu endereço e escolha o horário que deseja a busca.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border-2 border-[#E9E7E0] shadow-sm">
                <div className="w-8 h-8 rounded-xl bg-[#2D6A4F] text-white flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                  2
                </div>
                <div>
                  <h4 className="text-sm font-black text-[#2D2D2D]">Transporte Climatizado & Seguro</h4>
                  <p className="text-xs text-[#2D2D2D]/75">Veículo adaptado com ventilação, higiene e motorista carinhoso.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border-2 border-[#E9E7E0] shadow-sm">
                <div className="w-8 h-8 rounded-xl bg-[#2D6A4F] text-white flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                  3
                </div>
                <div>
                  <h4 className="text-sm font-black text-[#2D2D2D]">Retorno Pontual e Perfumado</h4>
                  <p className="text-xs text-[#2D2D2D]/75">Avisamos quando estivermos a caminho para a devolução.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                id="taxipet-cta-whatsapp"
                href={createWhatsAppLink('Olá! Gostaria de agendar o serviço de Táxi Pet do General Pet Shop para buscar meu pet.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-bold text-sm bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-black/10 transition-all text-center hover:scale-[1.02]"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Solicitar Táxi Pet no WhatsApp</span>
              </a>

              <a
                id="taxipet-cta-phone"
                href={BUSINESS_INFO.phone.telLink}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl font-bold text-xs text-[#2D2D2D] bg-white hover:bg-[#FAF7F0] border-2 border-[#E9E7E0] transition-all text-center"
              >
                <Phone className="w-3.5 h-3.5 text-[#2D6A4F]" />
                <span>Ligar: {BUSINESS_INFO.phone.display}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
