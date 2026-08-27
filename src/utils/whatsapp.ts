/**
 * Helper to generate official WhatsApp link for General Pet Shop
 * Primary required link: https://wa.me/554599624623
 */

const BASE_WA_URL = 'https://wa.me/554599624623';

export function createWhatsAppLink(customMessage?: string): string {
  if (!customMessage || !customMessage.trim()) {
    return BASE_WA_URL;
  }
  const encoded = encodeURIComponent(customMessage.trim());
  return `${BASE_WA_URL}?text=${encoded}`;
}

export function formatBookingMessage(params: {
  service: string;
  petName?: string;
  petSize?: string;
  dateOption?: string;
  customDate?: string;
  timeSlot?: string;
  notes?: string;
}): string {
  const parts: string[] = [];
  
  parts.push('👋 *Olá, equipe do General Pet Shop!*');
  parts.push('Gostaria de solicitar um agendamento pelo site:');
  parts.push('');
  parts.push(`🐾 *Serviço:* ${params.service || 'Banho e Tosa'}`);
  
  if (params.petName && params.petName.trim()) {
    const sizeInfo = params.petSize ? ` (${params.petSize})` : '';
    parts.push(`🐶 *Pet:* ${params.petName.trim()}${sizeInfo}`);
  } else if (params.petSize) {
    parts.push(`🐶 *Porte do Pet:* ${params.petSize}`);
  }
  
  const dateStr = params.dateOption === 'Outra data' && params.customDate 
    ? params.customDate 
    : (params.dateOption || 'Hoje/Amanhã');
    
  parts.push(`📅 *Dia de preferência:* ${dateStr}`);
  
  if (params.timeSlot) {
    parts.push(`⏰ *Horário sugerido:* ${params.timeSlot}`);
  }
  
  if (params.notes && params.notes.trim()) {
    parts.push(`📝 *Observação:* ${params.notes.trim()}`);
  }
  
  parts.push('');
  parts.push('Vocês têm disponibilidade para confirmar esse horário? Obrigado(a)!');
  
  return parts.join('\n');
}
