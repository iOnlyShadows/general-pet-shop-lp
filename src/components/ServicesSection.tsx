import React, { useState } from 'react';
import { Sparkles, Stethoscope, Scissors, ShoppingBag, Car, HeartHandshake, Check, ArrowRight } from 'lucide-react';
import { SERVICES_LIST } from '../data/businessData';
import { createWhatsAppLink } from '../utils/whatsapp';
import { WhatsAppIcon } from './WhatsAppIcon';

export const ServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Stethoscope':
        return <Stethoscope className="w-5 h-5" />;
      case 'Car':
        return <Car className="w-5 h-5" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5" />;
      default:
        return <Scissors className="w-5 h-5" />;
    }
  };

  const filteredServices = activeTab === 'all' 
    ? SERVICES_LIST 
    : SERVICES_LIST.filter(s => s.id === activeTab);

  return (
    <section id="servicos" className="py-16 sm:py-24 bg-[#FDFCF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9F0] border border-[#F4A261]/50 text-[#2D6A4F] text-[10px] font-black uppercase tracking-[0.2em]">
            <Sparkles className="w-3.5 h-3.5 text-[#F4A261]" />
            <span>Estrutura Completa para Seu Pet</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black text-[#2D2D2D] tracking-tight">
            Nossos Serviços & Especialidades
          </h2>
          
          <p className="text-base text-[#2D2D2D]/75 leading-relaxed">
            Do banho relaxante com toalhas 100% esterilizadas ao atendimento da Médica Veterinária e transporte seguro com Táxi Pet no Parque São Paulo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_LIST.map((service) => {
            const isHighlight = service.id === 'banho-tosa' || service.id === 'medica-veterinaria';
            
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`group rounded-3xl overflow-hidden bg-white flex flex-col transition-all duration-300 hover:shadow-xl shadow-black/5 ${
                  isHighlight 
                    ? 'border-2 border-[#2D6A4F] shadow-lg shadow-black/5 ring-1 ring-[#2D6A4F]/20' 
                    : 'border-2 border-[#E9E7E0] hover:border-[#2D6A4F]'
                }`}
              >
                {/* Image Header with Badge */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                  <img
                    src={service.imageUrl}
                    alt={service.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    data-substituir="true"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  {service.badge && (
                    <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-[#1B4332]/90 backdrop-blur-md text-[#F4A261] text-[11px] font-bold border border-white/20 shadow-md">
                      {service.badge}
                    </div>
                  )}

                  {/* Icon floating */}
                  <div className="absolute bottom-3 left-4 w-10 h-10 rounded-2xl bg-[#2D6A4F] text-white flex items-center justify-center shadow-lg border border-white/20">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <h3 className="text-xl font-black text-[#2D2D2D] group-hover:text-[#2D6A4F] transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-[#2D2D2D]/75 leading-relaxed">
                      {service.fullDesc}
                    </p>

                    {/* Highlights List */}
                    <div className="pt-2 space-y-2">
                      {service.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#2D2D2D]/85 font-medium">
                          <Check className="w-4 h-4 text-[#2D6A4F] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button tailored to this service */}
                  <div className="pt-4 border-t border-[#E9E7E0]">
                    <a
                      id={`cta-service-${service.id}`}
                      href={createWhatsAppLink(service.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl text-sm font-bold text-white bg-[#2D6A4F] hover:bg-[#1B4332] active:bg-[#153427] shadow-sm transition-all duration-200 text-center hover:scale-[1.02]"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-white" />
                      <span>{service.ctaText}</span>
                      <ArrowRight className="w-4 h-4 ml-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Banner: Não encontrou o que procurava? */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#1B4332] text-white flex flex-col sm:flex-row items-center justify-between gap-6 border-2 border-[#2D6A4F]/40 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-black text-white">
              Precisa de um pacote mensal ou orçamento personalizado?
            </h4>
            <p className="text-xs sm:text-sm text-white/80">
              Fale direto com nossa equipe no WhatsApp para tirar dúvidas sobre raças, portes e valores.
            </p>
          </div>

          <a
            id="services-custom-budget-cta"
            href={createWhatsAppLink('Olá! Gostaria de um orçamento personalizado para o meu pet no General Pet Shop.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-bold text-sm bg-[#25D366] hover:bg-[#20bd5a] text-white transition-all shadow-md hover:scale-[1.02]"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white" />
            <span>Pedir Orçamento no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
