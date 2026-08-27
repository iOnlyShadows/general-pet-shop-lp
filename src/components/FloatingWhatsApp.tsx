import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { createWhatsAppLink } from '../utils/whatsapp';
import { BUSINESS_INFO, getBusinessStatus } from '../data/businessData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const status = getBusinessStatus();

  useEffect(() => {
    // Show prompt after 3 seconds on page
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 sm:bottom-8 right-4 sm:right-6 z-50 flex flex-col items-end gap-2 pointer-events-none">
      
      {/* Speech Bubble / Tooltip */}
      {showTooltip && (
        <div className="pointer-events-auto max-w-[280px] sm:max-w-xs bg-white rounded-3xl p-4 shadow-2xl border-2 border-[#E9E7E0] text-[#2D2D2D] text-xs animate-float relative">
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-[#FAF7F0] text-[#2D2D2D] hover:bg-[#FAF7F0]/80 flex items-center justify-center border border-[#E9E7E0] shadow-sm text-[10px]"
            aria-label="Fechar mensagem"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-start gap-2.5">
            <div className="w-8 h-8 rounded-2xl bg-[#2D6A4F] text-white flex items-center justify-center flex-shrink-0 text-sm font-bold shadow-sm">
              🐶
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <p className="font-black text-[#2D2D2D] text-xs">General Pet Shop</p>
                <span className="text-[10px] text-[#2D6A4F] font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A4F] animate-pulse" />
                  Online
                </span>
              </div>
              <p className="text-[#2D2D2D]/75 text-[11px] leading-tight">
                Olá! Quer agendar um banho ou falar com a veterinária? Estou online no WhatsApp!
              </p>
              <a
                id="floating-tooltip-link"
                href={createWhatsAppLink('Olá! Vim pelo site do General Pet Shop e gostaria de atendimento!')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block pt-1 text-[#2D6A4F] font-black hover:underline text-[11px]"
              >
                Clique aqui para conversar →
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Floating WhatsApp Pulse Button */}
      <a
        id="floating-whatsapp-main-button"
        href={createWhatsAppLink('Olá! Gostaria de agendar um horário para meu pet no General Pet Shop!')}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto relative group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1da850] text-white shadow-2xl shadow-black/20 transition-all transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#2D6A4F]/40"
        aria-label="Abrir WhatsApp do General Pet Shop"
      >
        {/* Ripple effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ripple pointer-events-none" />

        <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 fill-white relative z-10" />

        {/* Online Status Badge on the button */}
        <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-[#F4A261] border-2 border-white shadow-xs z-20" />
      </a>

    </div>
  );
};

