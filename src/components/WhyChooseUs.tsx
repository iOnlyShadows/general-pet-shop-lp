import React from 'react';
import { ShieldCheck, Heart, Sparkles, Car, Stethoscope, Award, CheckCircle2 } from 'lucide-react';
import { createWhatsAppLink } from '../utils/whatsapp';
import { WhatsAppIcon } from './WhatsAppIcon';

export const WhyChooseUs: React.FC = () => {
  const differentials = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#F4A261]" />,
      title: 'Toalhas 100% Esterilizadas',
      description: 'Cada pet recebe uma toalha esterilizada individualmente e lacrada. Nada de toalhas compartilhadas ou risco de contaminação por fungos e bactérias.',
    },
    {
      icon: <Heart className="w-6 h-6 text-[#F4A261]" />,
      title: 'Manejo Gentil Sem Sedação',
      description: 'Respeito absoluto ao tempo e temperamento do seu cão ou gato. Banho calmo, carinhoso e focado no bem-estar.',
    },
    {
      icon: <Stethoscope className="w-6 h-6 text-[#F4A261]" />,
      title: 'Médica Veterinária no Local',
      description: 'Profissional dedicada para consultas, vacinas importadas e acompanhamento contínuo da saúde do seu amigo.',
    },
    {
      icon: <Car className="w-6 h-6 text-[#F4A261]" />,
      title: 'Táxi Pet Prático & Pontual',
      description: 'Buscamos e entregamos no conforto da sua residência no Parque São Paulo e bairros de Cascavel, com caixa e cinto pet seguro.',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#F4A261]" />,
      title: 'Cosméticos Nobres & Hidratação',
      description: 'Shampoos hipoalergênicos, condicionadores e hidratações profundas que deixam a pelagem macia, perfumada e saudável.',
    },
    {
      icon: <Award className="w-6 h-6 text-[#F4A261]" />,
      title: 'Padrão Rigoroso de Excelência',
      description: 'Higiene rigorosa nas baias e tesouras, pontualidade no atendimento e dedicação sincera de quem ama o que faz.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#1B4332] text-white relative overflow-hidden">
      {/* Artistic Flair circular glow background */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#3A7E5F] rounded-full opacity-30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#2D6A4F] rounded-full opacity-40 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[#F4A261] text-[10px] font-black uppercase tracking-[0.2em] backdrop-blur-md">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#F4A261]" />
            <span>Por que escolher o General Pet Shop?</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Diferenciais que garantem a segurança do seu melhor amigo
          </h2>
          
          <p className="text-sm sm:text-base text-white/80 leading-relaxed">
            Aqui seu pet não é apenas mais um atendimento. Cuidamos com carinho individual, higiene máxima e responsabilidade profissional.
          </p>
        </div>

        {/* Grid of Differentials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="p-6 sm:p-7 rounded-3xl bg-[#2D6A4F]/60 border-2 border-[#3A7E5F]/50 hover:border-[#F4A261] hover:bg-[#2D6A4F]/80 transition-all duration-200 group flex flex-col justify-between backdrop-blur-sm"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/15 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-black text-white group-hover:text-[#F4A261] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick CTA strip */}
        <div className="mt-12 text-center">
          <a
            id="differentials-cta-whatsapp"
            href={createWhatsAppLink('Olá! Gostaria de saber mais sobre os serviços e agendar um horário no General Pet Shop!')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-sm sm:text-base bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl shadow-black/20 transition-all hover:scale-[1.02]"
          >
            <WhatsAppIcon className="w-5 h-5 fill-white text-white" />
            <span>Falar com Nossa Equipe no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
