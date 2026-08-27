import React from 'react';
import { Phone, MapPin, Instagram, Heart, Clock, ArrowUp, Star } from 'lucide-react';
import { Logo } from './Logo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BUSINESS_INFO, WEEK_SCHEDULE } from '../data/businessData';
import { createWhatsAppLink } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1B4332] text-white/70 text-xs pt-16 pb-24 sm:pb-16 border-t-2 border-[#143527]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/15">
          
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white/10 p-3 rounded-2xl inline-block border border-white/15">
              <Logo size="md" />
            </div>
            
            <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-sm">
              Cuidado com padrão de excelência e carinho de família. Seu pet shop completo no Parque São Paulo em Cascavel/PR.
            </p>

            <div className="flex items-center gap-2 text-[#F4A261] text-xs pt-1">
              <div className="flex">
                {BUSINESS_INFO.googleRating.starsArray.map((i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#F4A261] text-[#F4A261]" />
                ))}
              </div>
              <span className="font-black text-white">{BUSINESS_INFO.googleRating.score} de 5</span>
              <span className="text-white/60">({BUSINESS_INFO.googleRating.reviewsCount}+ avaliações no Google)</span>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-2xl bg-white/10 hover:bg-[#F4A261] text-white flex items-center justify-center border border-white/15 transition-all hover:scale-105"
                aria-label="Instagram General Pet Shop"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={createWhatsAppLink('Olá! Gostaria de falar com o General Pet Shop.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-2xl bg-white/10 hover:bg-[#25D366] text-white flex items-center justify-center border border-white/15 transition-all hover:scale-105"
                aria-label="WhatsApp General Pet Shop"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
              </a>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-2xl bg-white/10 hover:bg-[#F4A261] text-white flex items-center justify-center border border-white/15 transition-all hover:scale-105"
                aria-label="Google Maps General Pet Shop"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Serviços Rápidos */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider">
              Nossos Serviços
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#servicos" className="hover:text-[#F4A261] transition-colors">
                  🛁 Banho & Hidratação Profunda
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#F4A261] transition-colors">
                  ✂️ Tosa Higiênica, Tesoura e Raça
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#F4A261] transition-colors">
                  🥼 Consultas com Médica Veterinária
                </a>
              </li>
              <li>
                <a href="#taxi-pet" className="hover:text-[#F4A261] transition-colors">
                  🚖 Táxi Pet com Busca em Casa
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#F4A261] transition-colors">
                  🐶 Rações Super Premium & Farmácia
                </a>
              </li>
              <li>
                <a href="#adocao" className="hover:text-[#F4A261] transition-colors">
                  🐾 Apoio à Adoção Responsável
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Horários */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#F4A261]" />
              <span>Horário de Atendimento</span>
            </h4>
            <div className="space-y-1 text-[11px] leading-relaxed">
              <p className="text-white font-bold">Segunda a Sexta-feira:</p>
              <p className="text-white/70 pl-2">08:00 às 12:00 | 13:00 às 18:00</p>
              
              <p className="text-white font-bold pt-1">Sábado:</p>
              <p className="text-white/70 pl-2">08:00 às 12:00</p>

              <p className="text-white font-bold pt-1">Domingo:</p>
              <p className="text-[#F4A261] pl-2 font-bold">Fechado</p>
            </div>
          </div>

          {/* Col 4: Contato & Endereço */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider">
              Onde Estamos
            </h4>
            <div className="space-y-2 text-xs">
              <p className="text-white/80">
                {BUSINESS_INFO.address.street}
                <br />
                {BUSINESS_INFO.address.neighborhood}
                <br />
                {BUSINESS_INFO.address.city}/{BUSINESS_INFO.address.state}
              </p>

              <p className="pt-1">
                <a href={BUSINESS_INFO.phone.telLink} className="text-[#F4A261] font-bold hover:underline block">
                  {BUSINESS_INFO.phone.display}
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright and credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-white/50">
          <div>
            <p>© {new Date().getFullYear()} General Pet Shop. Todos os direitos reservados.</p>
            <p className="pt-0.5">Parque São Paulo — Cascavel/PR • Feito com dedicação para a saúde e beleza do seu pet.</p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-white/80 hover:text-white px-4 py-2 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 transition-all"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
