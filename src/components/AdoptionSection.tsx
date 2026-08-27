import React from 'react';
import { Heart, Sparkles, CheckCircle2, ShieldCheck, Home } from 'lucide-react';
import { createWhatsAppLink } from '../utils/whatsapp';
import { WhatsAppIcon } from './WhatsAppIcon';

export const AdoptionSection: React.FC = () => {
  return (
    <section id="adocao" className="py-16 sm:py-20 bg-[#FDFCF8] border-b border-[#E9E7E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-12 rounded-3xl bg-[#2D6A4F] text-white relative overflow-hidden shadow-2xl border-2 border-[#3A7E5F]/50">
          {/* Background effects */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#3A7E5F] rounded-full opacity-40 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1B4332] rounded-full opacity-50 blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[#F4A261] text-[10px] font-black uppercase tracking-[0.2em] backdrop-blur-md">
                <Heart className="w-3.5 h-3.5 fill-[#F4A261]" />
                <span>Espaço de Apoio à Adoção Responsável</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
                Adotar é um ato de amor. Venha encontrar seu novo melhor amigo!
              </h2>

              <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                No General Pet Shop temos o compromisso com a causa animal. Apoiamos feirinhas, divulgamos pets resgatados que aguardam um lar amoroso e orientamos tutores em cada etapa da adoção.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-[#F4A261] flex-shrink-0" />
                  <span>Orientações veterinárias completas</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-[#F4A261] flex-shrink-0" />
                  <span>Primeiro banho com carinho especial</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-[#F4A261] flex-shrink-0" />
                  <span>Apoio à vacinação e vermifugação</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-[#F4A261] flex-shrink-0" />
                  <span>Dicas nutricionais para filhotes e adultos</span>
                </div>
              </div>

              <div className="pt-3">
                <a
                  id="adocao-cta-whatsapp"
                  href={createWhatsAppLink('Olá! Gostaria de saber mais sobre os pets disponíveis para adoção responsável no General Pet Shop.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-sm bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-black/15 transition-all hover:scale-[1.02]"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Quero Conhecer Pets para Adoção</span>
                </a>
              </div>

            </div>

            {/* Right Photo Preview */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 aspect-[4/3] bg-stone-900">
                <img
                  src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=800&auto=format&fit=crop"
                  alt="Cãozinho dócil resgatado pronto para adoção responsável"
                  className="w-full h-full object-cover object-center"
                  data-substituir="true"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-2xl bg-[#1B4332]/90 backdrop-blur-md text-xs text-white border border-white/10">
                  <div className="flex items-center gap-2">
                    <Home className="w-4 h-4 text-[#F4A261]" />
                    <span className="font-bold text-[#F4A261]">Lar Doce Lar:</span>
                  </div>
                  <p className="text-[11px] text-white/80 pt-0.5">
                    Transforme a história de um animalzinho e receba amor incondicional todos os dias.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
