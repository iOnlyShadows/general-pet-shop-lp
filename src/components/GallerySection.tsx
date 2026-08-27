import React, { useState } from 'react';
import { Camera, Sparkles, MessageCircle, ExternalLink, Instagram } from 'lucide-react';
import { GALLERY_ITEMS, BUSINESS_INFO } from '../data/businessData';
import { createWhatsAppLink } from '../utils/whatsapp';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Banho', 'Tosa', 'Veterinária', 'Táxi Pet', 'Adoção'];

  const filteredItems = selectedCategory === 'Todos'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <section id="galeria" className="py-16 sm:py-20 bg-[#FDFCF8] border-t border-[#E9E7E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9F0] border border-[#F4A261]/50 text-[#2D6A4F] text-[10px] font-black uppercase tracking-[0.2em]">
            <Camera className="w-3.5 h-3.5 text-[#F4A261]" />
            <span>Nosso Dia a Dia</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#2D2D2D] tracking-tight">
            Momentos de Cuidado, Alegria e Amor
          </h2>

          <p className="text-sm sm:text-base text-[#2D2D2D]/75">
            Veja um pouco da rotina do General Pet Shop em Cascavel. Acompanhe também no nosso Instagram!
          </p>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all border-2 ${
                    isSelected
                      ? 'bg-[#2D6A4F] text-white border-[#2D6A4F] shadow-sm'
                      : 'bg-white text-[#2D2D2D]/80 border-[#E9E7E0] hover:bg-[#FAF7F0] hover:border-[#2D6A4F]/40'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-square bg-stone-100 shadow-sm border-2 border-[#E9E7E0]"
            >
              <img
                src={item.imageUrl}
                alt={item.alt}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                data-substituir="true"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <span className="text-[11px] font-bold text-[#F4A261] uppercase tracking-wider">
                  {item.category}
                </span>
                <p className="text-xs sm:text-sm font-black leading-tight">
                  {item.title}
                </p>
              </div>

              <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-xl bg-[#1B4332]/90 backdrop-blur-sm text-[10px] font-bold text-white border border-white/10">
                {item.category}
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Banner */}
        <div className="mt-10 p-6 rounded-3xl bg-white border-2 border-[#E9E7E0] flex flex-wrap items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#F4A261] via-[#E76F51] to-[#2D6A4F] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <Instagram className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-black text-[#2D2D2D]">Siga nosso Instagram oficial</p>
              <p className="text-xs text-[#2D2D2D]/60">{BUSINESS_INFO.instagramHandle} • Dicas, bastidores e novidades</p>
            </div>
          </div>

          <a
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-bold bg-[#2D6A4F] hover:bg-[#1B4332] text-white transition-all hover:scale-[1.02]"
          >
            <span>Ver perfil no Instagram</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
