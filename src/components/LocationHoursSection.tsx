import React, { useState } from 'react';
import { MapPin, Clock, Phone, Navigation, Copy, CheckCheck, ExternalLink, Calendar } from 'lucide-react';
import { BUSINESS_INFO, WEEK_SCHEDULE, getBusinessStatus } from '../data/businessData';
import { createWhatsAppLink } from '../utils/whatsapp';
import { WhatsAppIcon } from './WhatsAppIcon';

export const LocationHoursSection: React.FC = () => {
  const status = getBusinessStatus();
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address.fullFormatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="localizacao" className="py-16 sm:py-24 bg-[#FFF9F0]/40 border-t border-[#E9E7E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9F0] border border-[#F4A261]/50 text-[#2D6A4F] text-[10px] font-black uppercase tracking-[0.2em]">
            <MapPin className="w-3.5 h-3.5 text-[#F4A261]" />
            <span>Fácil Acesso & Estacionamento</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#2D2D2D] tracking-tight">
            Venha nos Visitar no Parque São Paulo
          </h2>

          <p className="text-sm sm:text-base text-[#2D2D2D]/75">
            Localizado na R. Padre Anchieta, 245 em Cascavel/PR. Venha tomar um café conosco enquanto cuidamos do seu pet!
          </p>
        </div>

        {/* Two Column Layout: Map on left, Hours & Contacts on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Map Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-3xl overflow-hidden bg-stone-100 border-2 border-[#E9E7E0] shadow-md relative aspect-[4/3] sm:aspect-[16/11]">
              {/* Google Maps embed centered at Parque São Paulo, Cascavel PR */}
              <iframe
                title="Mapa de Localização - General Pet Shop Cascavel"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.5187766345437!2d-53.458296923838324!3d-24.98251297784869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f3d414a60c0429%3A0x6b77dbd93fa4f40a!2sR.%20Padre%20Anchieta%2C%20245%20-%20Parque%20S%C3%A3o%20Paulo%2C%20Cascavel%20-%20PR%2C%2085803-740!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                className="w-full h-full border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Overlay Badge on Map */}
              <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-2xl bg-[#1B4332]/95 backdrop-blur-md text-white border border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xl">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#2D6A4F] flex items-center justify-center text-white flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white leading-tight">General Pet Shop</p>
                    <p className="text-[11px] text-white/80">R. Padre Anchieta, 245 - Parque São Paulo</p>
                  </div>
                </div>

                <a
                  id="map-overlay-route-button"
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#F4A261] hover:bg-[#E76F51] text-white font-bold text-xs transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Traçar Rota</span>
                </a>
              </div>
            </div>

            {/* Address bar with copy action */}
            <div className="p-4 rounded-2xl bg-white border-2 border-[#E9E7E0] flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-[#2D6A4F] flex-shrink-0" />
                <div>
                  <p className="text-xs font-black text-[#2D2D2D]">Endereço Completo</p>
                  <p className="text-xs text-[#2D2D2D]/75">{BUSINESS_INFO.address.fullFormatted}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyAddress}
                className="flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-xl bg-[#FAF7F0] hover:bg-[#FAF7F0]/80 text-[#2D2D2D] border border-[#E9E7E0] transition-colors flex-shrink-0"
              >
                {copied ? (
                  <>
                    <CheckCheck className="w-3.5 h-3.5 text-[#2D6A4F]" />
                    <span>Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Hours & Contact Column */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Live Status Card */}
            <div className={`p-4 rounded-2xl border-2 ${status.isOpen ? 'bg-[#2D6A4F]/10 border-[#2D6A4F]/30 text-[#2D6A4F]' : 'bg-[#F4A261]/10 border-[#F4A261]/30 text-[#E76F51]'} flex items-center justify-between gap-3`}>
              <div className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 flex-shrink-0" />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em]">Status em Tempo Real</p>
                  <p className="text-sm font-black">{status.statusText}</p>
                </div>
              </div>
              <span className="text-xs font-bold">{status.nextOpenText}</span>
            </div>

            {/* Official Hours Table */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-[#E9E7E0] shadow-sm space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-[#E9E7E0]">
                <h3 className="text-sm sm:text-base font-black text-[#2D2D2D] flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#2D6A4F]" />
                  <span>Horários de Funcionamento</span>
                </h3>
                <span className="text-[11px] text-[#2D2D2D]/60 font-medium">Horário de Brasília</span>
              </div>

              <div className="space-y-1.5">
                {WEEK_SCHEDULE.map((item) => {
                  const isToday = status.dayOfWeek === item.dayIndex;
                  return (
                    <div
                      key={item.dayName}
                      className={`flex items-center justify-between py-2 px-3 rounded-xl text-xs sm:text-sm transition-colors ${
                        isToday
                          ? 'bg-[#FFF9F0] text-[#2D6A4F] font-black border border-[#F4A261]/40 shadow-xs'
                          : 'text-[#2D2D2D]/80 hover:bg-[#FAF7F0]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{item.dayName}</span>
                        {isToday && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#2D6A4F] text-white font-black uppercase">
                            Hoje
                          </span>
                        )}
                      </div>
                      <span className={item.isOpen ? 'text-[#2D2D2D]' : 'text-[#E76F51] font-bold'}>
                        {item.displayHours}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action Cards (Phone & WhatsApp) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <a
                id="location-cta-whatsapp"
                href={createWhatsAppLink('Olá! Gostaria de falar com o General Pet Shop.')}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center gap-3 transition-colors shadow-md shadow-black/10"
              >
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <WhatsAppIcon className="w-5 h-5 fill-white" />
                </div>
                <div>
                  <p className="text-[11px] text-white/80 font-medium">Atendimento Rápido</p>
                  <p className="text-sm font-bold">Chamar no WhatsApp</p>
                </div>
              </a>

              <a
                id="location-cta-phone"
                href={BUSINESS_INFO.phone.telLink}
                className="p-4 rounded-2xl bg-[#1B4332] hover:bg-[#2D6A4F] text-white flex items-center gap-3 transition-colors shadow-md shadow-black/20"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#F4A261]" />
                </div>
                <div>
                  <p className="text-[11px] text-white/70 font-medium">Ligue Diretamente</p>
                  <p className="text-sm font-bold">{BUSINESS_INFO.phone.display}</p>
                </div>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
