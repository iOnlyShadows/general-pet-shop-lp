import React from 'react';
import { MessageCircle, Phone, Calendar, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { createWhatsAppLink } from '../utils/whatsapp';

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FDFCF8]/95 backdrop-blur-md border-t-2 border-[#E9E7E0] p-2.5 px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
      <div className="flex items-center gap-2">
        
        {/* Quick Phone button */}
        <a
          id="mobile-sticky-phone"
          href={BUSINESS_INFO.phone.telLink}
          className="flex-1 flex flex-col items-center justify-center py-2 px-2 rounded-2xl bg-white text-[#2D2D2D] border-2 border-[#E9E7E0] text-center active:bg-[#FAF7F0] transition-colors"
        >
          <Phone className="w-4 h-4 text-[#2D6A4F] mb-0.5" />
          <span className="text-[10px] font-bold">Ligar</span>
        </a>

        {/* Quick Schedule scroll button */}
        <a
          id="mobile-sticky-schedule"
          href="#agendamento"
          className="flex-1 flex flex-col items-center justify-center py-2 px-2 rounded-2xl bg-[#FFF9F0] text-[#2D6A4F] border-2 border-[#F4A261]/40 text-center active:bg-[#FFF9F0]/70 transition-colors"
        >
          <Calendar className="w-4 h-4 text-[#F4A261] mb-0.5" />
          <span className="text-[10px] font-black">Agendar</span>
        </a>

        {/* Big WhatsApp CTA */}
        <a
          id="mobile-sticky-whatsapp"
          href={createWhatsAppLink('Olá! Vim pelo site do General Pet Shop e gostaria de agendar um horário.')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[2.5] flex items-center justify-center gap-1.5 py-3 px-3 rounded-2xl bg-[#2D6A4F] active:bg-[#1B4332] text-white font-black text-xs shadow-lg shadow-[#2D6A4F]/25 transition-all text-center"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>Chamar no Whats</span>
        </a>

      </div>
    </div>
  );
};
