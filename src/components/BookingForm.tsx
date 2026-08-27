import React, { useState } from 'react';
import { Calendar, Clock, Check, Send, Info } from 'lucide-react';
import confetti from 'canvas-confetti';
import { formatBookingMessage, createWhatsAppLink } from '../utils/whatsapp';
import { WhatsAppIcon } from './WhatsAppIcon';

export const BookingForm: React.FC = () => {
  // Service selection
  const [selectedService, setSelectedService] = useState('Banho e tosa');
  
  // Pet details
  const [petName, setPetName] = useState('');
  const [selectedSize, setSelectedSize] = useState('Porte pequeno');
  
  // Date and Time
  const [dateOption, setDateOption] = useState('Hoje');
  const [customDate, setCustomDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('09:00');
  
  // Extra notes
  const [notes, setNotes] = useState('');

  const serviceOptions = [
    'Banho e tosa',
    'Consulta veterinária',
    'Táxi pet + Banho',
    'Rações e produtos',
    'Apoio à Adoção',
    'Outro assunto',
  ];

  const sizeOptions = [
    'Porte pequeno (até 10kg)',
    'Porte médio (10kg a 20kg)',
    'Porte grande (+20kg)',
    'Felino / Gato',
  ];

  const dateOptions = ['Hoje', 'Amanhã', 'Sábado', 'Outra data'];

  const timeSlots = [
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
  ];

  // Generated WhatsApp message
  const generatedMessage = formatBookingMessage({
    service: selectedService,
    petName,
    petSize: selectedSize,
    dateOption,
    customDate,
    timeSlot: selectedTime,
    notes,
  });

  const whatsappUrl = createWhatsAppLink(generatedMessage);

  const handleLaunchWhatsApp = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
      });
    } catch {
      // ignore
    }
  };

  return (
    <section id="agendamento" className="py-16 sm:py-20 bg-[#FAF7F0]/60 border-t border-[#E9E7E0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Only "Agendamento" as requested */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl sm:text-4xl font-black text-[#2D2D2D] tracking-tight">
            Agendamento
          </h2>
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl shadow-black/5 border-2 border-[#E9E7E0]">
          
          <div className="space-y-8">

            {/* STEP 1: QUAL ATENDIMENTO */}
            <div className="space-y-3">
              <label className="block text-xs sm:text-sm font-black uppercase tracking-[0.15em] text-[#2D6A4F]">
                1 • Qual atendimento você precisa?
              </label>
              
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {serviceOptions.map((srv) => {
                  const isSelected = selectedService === srv;
                  return (
                    <button
                      key={srv}
                      type="button"
                      onClick={() => setSelectedService(srv)}
                      className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-150 text-left ${
                        isSelected
                          ? 'bg-[#F4A261] text-white border-2 border-[#F4A261] shadow-sm scale-[1.02]'
                          : 'bg-white hover:bg-[#FAF7F0] text-[#2D2D2D] border-2 border-[#E9E7E0] hover:border-[#2D6A4F]'
                      }`}
                    >
                      {srv}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 2: SOBRE O SEU PET */}
            <div className="space-y-3 pt-2 border-t border-[#E9E7E0]">
              <label className="block text-xs sm:text-sm font-black uppercase tracking-[0.15em] text-[#2D6A4F]">
                2 • Sobre o seu pet <span className="text-[#2D2D2D]/50 font-normal lowercase tracking-normal">(opcional)</span>
              </label>
              
              {/* Pet Name input */}
              <div>
                <input
                  id="booking-pet-name"
                  type="text"
                  placeholder="Nome do seu pet (ex: Thor, Mel, Pipoca)"
                  value={petName}
                  onChange={(e) => setPetName(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-2xl bg-[#FDFCF8] border-2 border-[#E9E7E0] text-sm text-[#2D2D2D] placeholder-[#2D2D2D]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] focus:border-[#2D6A4F] transition-all"
                />
              </div>

              {/* Size options */}
              <div className="flex flex-wrap gap-2 sm:gap-2.5 pt-1">
                {sizeOptions.map((size) => {
                  const isSelected = selectedSize === size;
                  return (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 border-2 ${
                        isSelected
                          ? 'bg-[#2D6A4F] text-white border-[#2D6A4F] shadow-sm'
                          : 'bg-white hover:bg-[#FAF7F0] text-[#2D2D2D] border-[#E9E7E0] hover:border-[#2D6A4F]'
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 3: QUE DIA FICA BOM */}
            <div className="space-y-4 pt-2 border-t border-[#E9E7E0]">
              <label className="block text-xs sm:text-sm font-black uppercase tracking-[0.15em] text-[#2D6A4F]">
                3 • Que dia e horário ficam bons para você?
              </label>
              
              {/* Day selection */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                {dateOptions.map((opt) => {
                  const isSelected = dateOption === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setDateOption(opt)}
                      className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-150 border-2 flex items-center gap-1.5 ${
                        isSelected
                          ? 'bg-[#F4A261] text-white border-[#F4A261] shadow-sm'
                          : 'bg-white hover:bg-[#FAF7F0] text-[#2D2D2D] border-[#E9E7E0] hover:border-[#2D6A4F]'
                      }`}
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>

              {/* If "Outra data" is selected */}
              {dateOption === 'Outra data' && (
                <div className="pt-2 max-w-xs">
                  <input
                    id="booking-custom-date"
                    type="date"
                    value={customDate}
                    onChange={(e) => setCustomDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FDFCF8] border-2 border-[#E9E7E0] text-sm text-[#2D2D2D] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                  />
                </div>
              )}

              {/* Time slots */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-black text-[#2D2D2D]/70 uppercase tracking-[0.15em] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#F4A261]" />
                  <span>Horários Sugeridos:</span>
                </div>
                
                <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-9 gap-1.5 sm:gap-2">
                  {timeSlots.map((slot) => {
                    const isSelected = selectedTime === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`py-2 px-2 rounded-xl text-xs font-bold text-center transition-all border-2 ${
                          isSelected
                            ? 'bg-[#2D6A4F] text-white border-[#2D6A4F] shadow-sm scale-105'
                            : 'bg-white hover:bg-[#FFF9F0] text-[#2D2D2D] border-[#E9E7E0] hover:border-[#2D6A4F]'
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
                
                <p className="text-[11px] text-[#2D2D2D]/60 italic pt-1 flex items-center gap-1">
                  <Info className="w-3.5 h-3.5 text-[#F4A261]" />
                  <span>Horário sujeito à confirmação final da equipe pelo WhatsApp.</span>
                </p>
              </div>
            </div>

            {/* MAIN CTA BUTTON - Direct WhatsApp redirection with pre-filled message */}
            <div className="pt-4 border-t border-[#E9E7E0]">
              <a
                id="booking-form-submit-whatsapp"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLaunchWhatsApp}
                className="w-full flex items-center justify-center gap-3 py-5 px-6 rounded-2xl text-base sm:text-lg font-black text-white bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1da850] shadow-xl shadow-[#25D366]/25 transition-all transform hover:scale-[1.01] active:scale-[0.99] text-center"
              >
                <WhatsAppIcon className="w-6 h-6 fill-white" />
                <span>AGENDAR NO WHATSAPP</span>
                <Send className="w-4 h-4 ml-1" />
              </a>
              
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1.5 pt-3 text-xs text-[#2D2D2D]/70 font-medium">
                <span className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-[#2D6A4F]" />
                  Resposta rápida
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-[#2D6A4F]" />
                  Sem compromisso
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-[#2D6A4F]" />
                  Confirmamos na hora
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

