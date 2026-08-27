import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { FAQS } from '../data/businessData';
import { createWhatsAppLink } from '../utils/whatsapp';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FDFCF8] border-t border-[#E9E7E0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9F0] border border-[#F4A261]/50 text-[#2D6A4F] text-[10px] font-black uppercase tracking-[0.2em]">
            <HelpCircle className="w-3.5 h-3.5 text-[#F4A261]" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#2D2D2D] tracking-tight">
            Perguntas Frequentes
          </h2>

          <p className="text-sm sm:text-base text-[#2D2D2D]/75">
            Respostas claras sobre banho e tosa, horários, vacinas e cuidados com seu pet no General Pet Shop.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl bg-white border-2 overflow-hidden transition-all duration-200 ${
                  isOpen ? 'border-[#2D6A4F] shadow-sm' : 'border-[#E9E7E0] hover:border-[#2D6A4F]/40'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 font-black text-sm sm:text-base text-[#2D2D2D] hover:text-[#2D6A4F] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{faq.question}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                    isOpen ? 'bg-[#2D6A4F] text-white' : 'bg-[#FAF7F0] text-[#2D2D2D]/60'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-white" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#2D2D2D]/80 leading-relaxed border-t border-[#E9E7E0] bg-[#FFF9F0]/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt for more questions */}
        <div className="mt-10 p-6 rounded-3xl bg-[#FFF9F0] border-2 border-[#F4A261]/40 text-center space-y-3">
          <p className="text-sm font-black text-[#2D2D2D]">
            Ainda tem alguma dúvida sobre seu pet ou serviço?
          </p>
          <p className="text-xs text-[#2D2D2D]/75">
            Nossa equipe está pronta para te atender com toda paciência no WhatsApp.
          </p>
          <div className="pt-1">
            <a
              id="faq-cta-whatsapp"
              href={createWhatsAppLink('Olá! Tenho uma dúvida que não encontrei no site do General Pet Shop.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all shadow-md shadow-black/10 hover:scale-[1.02]"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Tirar Dúvida no WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
