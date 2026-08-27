import React from 'react';
import { Star, CheckCircle, ExternalLink, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS, BUSINESS_INFO } from '../data/businessData';
import { createWhatsAppLink } from '../utils/whatsapp';
import { WhatsAppIcon } from './WhatsAppIcon';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-16 sm:py-24 bg-[#FAF7F0]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Google Badge */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9F0] border border-[#F4A261]/50 text-[#2D6A4F] text-[10px] font-black uppercase tracking-[0.2em]">
            <Star className="w-3.5 h-3.5 fill-[#F4A261] text-[#F4A261]" />
            <span>Avaliações Verificadas no Google</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#2D2D2D] tracking-tight">
            Quem ama o seu pet, confia no General
          </h2>

          <p className="text-sm sm:text-base text-[#2D2D2D]/75 leading-relaxed">
            Veja o que os tutores de cães e gatos em Cascavel dizem sobre nosso atendimento, carinho e dedicação.
          </p>

          {/* Big Google Rating Summary Card */}
          <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 p-4 sm:p-5 rounded-3xl bg-white border-2 border-[#E9E7E0] shadow-sm mt-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#FFF9F0] flex items-center justify-center border border-[#E9E7E0]">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
              </div>
              
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-2xl font-black text-[#2D2D2D]">{BUSINESS_INFO.googleRating.score}</span>
                  <div className="flex text-[#F4A261]">
                    {BUSINESS_INFO.googleRating.starsArray.map((i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F4A261] text-[#F4A261]" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-[#2D2D2D]/60 font-medium">
                  Excelente • Mais de {BUSINESS_INFO.googleRating.reviewsCount} avaliações no Google
                </p>
              </div>
            </div>

            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2D6A4F] hover:text-[#1B4332] bg-[#FFF9F0] px-3.5 py-2 rounded-xl border border-[#F4A261]/30 hover:border-[#2D6A4F] transition-colors"
            >
              <span>Ver no Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="p-6 sm:p-7 rounded-3xl bg-white border-2 border-[#E9E7E0] hover:border-[#2D6A4F] shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4 relative"
            >
              <div className="space-y-3">
                {/* Header with stars & date */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex text-[#F4A261] gap-0.5">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F4A261] text-[#F4A261]" />
                    ))}
                  </div>
                  <span className="text-xs text-[#2D2D2D]/50 font-medium">{review.dateText}</span>
                </div>

                {/* Service Tag */}
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FFF9F0] text-[#2D6A4F] text-[11px] font-bold border border-[#F4A261]/30">
                  <Sparkles className="w-3 h-3 text-[#F4A261]" />
                  <span>{review.serviceUsed}</span>
                </div>

                {/* Quote Content */}
                <p className="text-sm text-[#2D2D2D]/85 leading-relaxed italic">
                  "{review.content}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-[#E9E7E0] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatarUrl}
                    alt={review.author}
                    className="w-10 h-10 rounded-full object-cover border-2 border-[#2D6A4F]/40"
                    data-substituir="true"
                  />
                  <div>
                    <h4 className="text-sm font-black text-[#2D2D2D] leading-tight">
                      {review.author}
                    </h4>
                    <p className="text-xs text-[#2D2D2D]/60">
                      Tutor(a) do <span className="font-bold text-[#2D2D2D]">{review.petName}</span> ({review.petBreed})
                    </p>
                  </div>
                </div>

                {review.verified && (
                  <div className="flex items-center gap-1 text-[11px] text-[#2D6A4F] font-bold bg-[#2D6A4F]/10 px-2.5 py-1 rounded-xl">
                    <CheckCircle className="w-3.5 h-3.5 text-[#2D6A4F]" />
                    <span className="hidden sm:inline">Verificado</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA below reviews */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#2D2D2D]/75 mb-3 font-medium">
            Quer uma experiência assim para o seu pet?
          </p>
          <a
            id="reviews-cta-whatsapp"
            href={createWhatsAppLink('Olá! Li os depoimentos no site e quero agendar um horário com muito carinho para meu pet!')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-sm bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-md shadow-black/10 transition-all hover:scale-[1.02]"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white" />
            <span>Fazer Meu Agendamento no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
