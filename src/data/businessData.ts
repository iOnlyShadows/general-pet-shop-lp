import { ServiceItem, DaySchedule, TestimonialItem, FaqItem, GalleryItem } from '../types';

export const BUSINESS_INFO = {
  name: 'General Pet Shop',
  shortTagline: 'Cuidado de general, carinho de família',
  fullTagline: 'O pet shop de confiança da sua família no Parque São Paulo em Cascavel/PR',
  segment: 'Pet shop & Clínica Veterinária',
  address: {
    street: 'R. Padre Anchieta, 245',
    neighborhood: 'Parque São Paulo',
    city: 'Cascavel',
    state: 'PR',
    fullFormatted: 'R. Padre Anchieta, 245 - Parque São Paulo, Cascavel - PR',
    cep: '85803-000',
  },
  phone: {
    display: '(45) 9962-4623',
    telLink: 'tel:+554599624623',
    raw: '+55 45 9962-4623',
  },
  whatsapp: {
    baseUrl: 'https://wa.me/554530373103',
    numberFormatted: '(45) 3037-3103 / (45) 9962-4623',
  },
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=General%20Pet%20Shop%20R.%20Padre%20Anchieta%2C%20245%20-%20Parque%20S%C3%A3o%20Paulo%20Cascavel%20PR',
  instagramUrl: 'https://www.instagram.com/generalpetshop/',
  instagramHandle: '@generalpetshop',
  googleRating: {
    score: 4.9,
    reviewsCount: 128,
    starsArray: [1, 2, 3, 4, 5],
  },
};

export const WEEK_SCHEDULE: DaySchedule[] = [
  {
    dayName: 'Segunda-feira',
    shortDay: 'Seg',
    dayIndex: 1,
    morningHours: '08:00–12:00',
    afternoonHours: '13:00–18:00',
    displayHours: '08:00–12:00, 13:00–18:00',
    isOpen: true,
  },
  {
    dayName: 'Terça-feira',
    shortDay: 'Ter',
    dayIndex: 2,
    morningHours: '08:00–12:00',
    afternoonHours: '13:00–18:00',
    displayHours: '08:00–12:00, 13:00–18:00',
    isOpen: true,
  },
  {
    dayName: 'Quarta-feira',
    shortDay: 'Qua',
    dayIndex: 3,
    morningHours: '08:00–12:00',
    afternoonHours: '13:00–18:00',
    displayHours: '08:00–12:00, 13:00–18:00',
    isOpen: true,
  },
  {
    dayName: 'Quinta-feira',
    shortDay: 'Qui',
    dayIndex: 4,
    morningHours: '08:00–12:00',
    afternoonHours: '13:00–18:00',
    displayHours: '08:00–12:00, 13:00–18:00',
    isOpen: true,
  },
  {
    dayName: 'Sexta-feira',
    shortDay: 'Sex',
    dayIndex: 5,
    morningHours: '08:00–12:00',
    afternoonHours: '13:00–18:00',
    displayHours: '08:00–12:00, 13:00–18:00',
    isOpen: true,
  },
  {
    dayName: 'Sábado',
    shortDay: 'Sáb',
    dayIndex: 6,
    morningHours: '08:00–12:00',
    afternoonHours: undefined,
    displayHours: '08:00–12:00',
    isOpen: true,
  },
  {
    dayName: 'Domingo',
    shortDay: 'Dom',
    dayIndex: 0,
    displayHours: 'Fechado',
    isOpen: false,
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'banho-tosa',
    name: 'Banho & Tosa Especializada',
    shortDesc: 'Higiene completa, hidratação profunda e tosa com respeito e carinho.',
    fullDesc: 'Nosso centro estético pet conta com toalhas 100% esterilizadas e lacradas individualmente, água morna regulada, secadores silenciosos e cosméticos hipoalergênicos de linha profissional. Sem sedação e com todo o cuidado.',
    badge: 'Mais Solicitado',
    iconName: 'Sparkles',
    imageUrl: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=800&auto=format&fit=crop',
    highlights: [
      'Toalhas esterilizadas individuais e lacradas',
      'Tosa da raça, tosa higiênica e tosa bebê',
      'Cosméticos nobres & hidratação de pelos',
      'Secagem sem estresse e com proteção auricular',
    ],
    ctaText: 'Agendar Banho e Tosa',
    whatsappMessage: 'Olá, equipe do General Pet Shop! Gostaria de agendar um Banho e Tosa para o meu pet. Pode me passar os horários disponíveis?',
  },
  {
    id: 'medica-veterinaria',
    name: 'Médica Veterinária & Consultas',
    shortDesc: 'Atendimento clínico atencioso, vacinação ética e cuidados preventivos.',
    fullDesc: 'Consultório com Médica Veterinária dedicada para acompanhar a saúde preventiva, aplicar vacinas importadas, emitir atestados de saúde, avaliar alterações clínicas e orientar a melhor nutrição para seu cão ou gato.',
    badge: 'Saúde & Cuidado',
    iconName: 'Stethoscope',
    imageUrl: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=800&auto=format&fit=crop',
    highlights: [
      'Consultas clínicas gerais e preventivas',
      'Vacinação V8, V10, Antirrábica e Quádrupla felina',
      'Exames complementares e prescrições',
      'Acompanhamento de filhotes e idosos',
    ],
    ctaText: 'Agendar Consulta Veterinária',
    whatsappMessage: 'Olá! Gostaria de informações para agendar uma consulta com a Médica Veterinária no General Pet Shop.',
  },
  {
    id: 'taxi-pet',
    name: 'Táxi Pet com Busca & Entrega',
    shortDesc: 'Buscamos e levamos seu melhor amigo no conforto e com total segurança.',
    fullDesc: 'Sem tempo para levar seu pet para o banho ou consulta? Nosso Táxi Pet atende com caixas de transporte higienizadas, cintos de segurança adaptados, climatização e motorista treinado no manejo tranquilo de animais.',
    badge: 'Máxima Praticidade',
    iconName: 'Car',
    imageUrl: 'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?q=80&w=800&auto=format&fit=crop',
    highlights: [
      'Busca e entrega em seu endereço em Cascavel',
      'Veículo climatizado e com divisórias seguras',
      'Pontualidade e aviso em tempo real',
      'Ideal para tutores com rotina corrida',
    ],
    ctaText: 'Solicitar Táxi Pet',
    whatsappMessage: 'Olá! Quero solicitar o Táxi Pet do General Pet Shop para buscar meu pet em casa. Qual a disponibilidade?',
  },
  {
    id: 'racoes-farmacia',
    name: 'Rações Premium & Farmácia Pet',
    shortDesc: 'Nutrição de alta performance, medicamentos veterinários e petiscos.',
    fullDesc: 'As melhores marcas de ração Super Premium, Premium Especial e dietas terapêuticas. Além disso, dispomos de farmácia completa (antipulgas, carrapaticidas, vermífugos, suplementos) e brinquedos selecionados.',
    badge: 'Pronta Entrega',
    iconName: 'ShoppingBag',
    imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800&auto=format&fit=crop',
    highlights: [
      'Rações Super Premium, Grain Free e Medicamentosas',
      'Antipulgas e carrapatos (Simparic, Bravecto, NexGard)',
      'Petiscos naturais, ossinhos e bifinhos',
      'Acessórios, caminhas, guias e coleiras',
    ],
    ctaText: 'Consultar Rações e Produtos',
    whatsappMessage: 'Olá! Gostaria de consultar o valor e disponibilidade de rações e produtos pet no General Pet Shop.',
  },
  {
    id: 'adocao',
    name: 'Apoio à Adoção Responsável',
    shortDesc: 'Amor que transforma vidas: espaço e eventos de apoio a pets que buscam um lar.',
    fullDesc: 'No General Pet Shop apoiamos e divulgamos com muito carinho a adoção responsável de cães e gatos em Cascavel. Venha conhecer nossos aumigos que aguardam uma família cheia de amor.',
    badge: 'Causa do Bem',
    iconName: 'HeartHandshake',
    imageUrl: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=800&auto=format&fit=crop',
    highlights: [
      'Divulgação e conexão de animais para adoção',
      'Orientações completas para novos tutores',
      'Primeiro banho com carinho especial para o recém-adotado',
      'Incentivo à posse responsável e vacinação',
    ],
    ctaText: 'Saber Sobre Adoções',
    whatsappMessage: 'Olá! Gostaria de saber mais sobre pets disponíveis para adoção responsável no General Pet Shop.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    author: 'Mariana Sampaio',
    petName: 'Thor',
    petBreed: 'Golden Retriever',
    serviceUsed: 'Banho, Tosa e Táxi Pet',
    rating: 5,
    dateText: 'há 1 semana',
    content: 'O Thor sempre ficava ansioso em pet shops, mas no General ele volta calmo, cheiroso e super feliz! O serviço de Táxi Pet me salvou muito tempo. Nota 10 em pontualidade e carinho!',
    verified: true,
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop',
  },
  {
    id: '2',
    author: 'Carlos Eduardo Mendes',
    petName: 'Luna & Mel',
    petBreed: 'Shih Tzu & Maltês',
    serviceUsed: 'Tosa da Raça e Consulta',
    rating: 5,
    dateText: 'há 2 semanas',
    content: 'A tosa ficou perfeita, exatamente no padrão que pedi na tesoura. A Médica Veterinária foi muito atenciosa na consulta das vacinas anuais. Ambiente limpo e equipe impecável.',
    verified: true,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
  },
  {
    id: '3',
    author: 'Juliana Fagundes',
    petName: 'Pipoca',
    petBreed: 'Spitz Alemão',
    serviceUsed: 'Banho & Hidratação',
    rating: 5,
    dateText: 'há 3 semanas',
    content: 'Melhor banho de Cascavel! O pelo do Pipoca ficou sedoso por semanas. Me tranquiliza muito saber que usam toalhas esterilizadas individuais e não usam sedativos.',
    verified: true,
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop',
  },
  {
    id: '4',
    author: 'Renato Silveira',
    petName: 'Paçoca',
    petBreed: 'Vira-lata (SRD adotado)',
    serviceUsed: 'Adoção & Check-up',
    rating: 5,
    dateText: 'há 1 mês',
    content: 'Conheci o General pelo projeto de adoção e hoje faço tudo lá: ração, consultas e banho. O atendimento é acolhedor e dá para sentir o amor genuíno pelos animais.',
    verified: true,
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
  },
];

export const FAQS: FaqItem[] = [
  {
    category: 'banho-tosa',
    question: 'Como funciona o agendamento de Banho e Tosa?',
    answer: 'Você pode escolher o dia e horário preferido diretamente no nosso formulário interativo nesta página. Ao clicar em "Agendar no WhatsApp", sua mensagem pré-formatada será enviada para nossa equipe, que confirmará seu horário em poucos minutos!',
  },
  {
    category: 'banho-tosa',
    question: 'Vocês utilizam sedativos ou calmantes nos pets?',
    answer: 'NUNCA utilizamos nenhum tipo de sedativo. Nossos profissionais são treinados em técnicas de manejo positivo e acolhedor, respeitando o tempo e o limite de cada pet com paciência e carinho.',
  },
  {
    category: 'banho-tosa',
    question: 'As toalhas são higienizadas e individuais?',
    answer: 'Sim! Segurança biológica é prioridade absoluta. Utilizamos toalhas 100% esterilizadas e embaladas individualmente para cada animal, evitando qualquer risco de contaminação cruzada de fungos ou bactérias.',
  },
  {
    category: 'taxi-pet',
    question: 'Como funciona o Táxi Pet e quais bairros atende?',
    answer: 'Nosso Táxi Pet atende todo o Parque São Paulo e diversos bairros de Cascavel. Agendamos a retirada no seu endereço, transportamos seu pet em veículo seguro e climatizado, e levamos de volta quentinho e perfumado.',
  },
  {
    category: 'veterinaria',
    question: 'Preciso agendar com antecedência para a Médica Veterinária?',
    answer: 'Recomendamos o agendamento prévio via WhatsApp para garantir que a médica veterinária esteja disponível sem tempo de espera. Em casos de urgência dentro do horário de atendimento, entre em contato imediatamente pelo nosso WhatsApp.',
  },
  {
    category: 'geral',
    question: 'Quais são as formas de pagamento aceitas?',
    answer: 'Aceitamos PIX, cartões de crédito e débito das principais bandeiras, além de dinheiro em espécie. Para compras de rações e pacotes de banho, oferecemos opções de parcelamento.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Banho Relaxante e Carinhoso',
    category: 'Banho',
    imageUrl: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=800&auto=format&fit=crop',
    alt: 'Cãozinho tomando banho com espuma suave',
    needsReplacement: true,
  },
  {
    id: 'g2',
    title: 'Tosa Higiênica e Estética',
    category: 'Tosa',
    imageUrl: 'https://images.unsplash.com/photo-1527526029430-319f10814151?q=80&w=800&auto=format&fit=crop',
    alt: 'Profissional fazendo tosa delicada com tesoura',
    needsReplacement: true,
  },
  {
    id: 'g3',
    title: 'Consulta Médica Veterinária',
    category: 'Veterinária',
    imageUrl: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=800&auto=format&fit=crop',
    alt: 'Médica Veterinária examinando cachorro dócil',
    needsReplacement: true,
  },
  {
    id: 'g4',
    title: 'Táxi Pet Climatizado e Seguro',
    category: 'Táxi Pet',
    imageUrl: 'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?q=80&w=800&auto=format&fit=crop',
    alt: 'Cachorro feliz no banco do carro com cinto de segurança pet',
    needsReplacement: true,
  },
  {
    id: 'g5',
    title: 'Rações e Produtos Selecionados',
    category: 'Loja',
    imageUrl: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=800&auto=format&fit=crop',
    alt: 'Prateleiras de pet shop com produtos e rações',
    needsReplacement: true,
  },
  {
    id: 'g6',
    title: 'Apoio à Adoção de Filhotes',
    category: 'Adoção',
    imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=800&auto=format&fit=crop',
    alt: 'Filhote resgatado pronto para adoção responsável',
    needsReplacement: true,
  },
];

/**
 * Calculates current open/closed status in Cascavel/PR (America/Sao_Paulo timezone)
 */
export function getBusinessStatus() {
  const now = new Date();
  
  // Format to America/Sao_Paulo
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'America/Sao_Paulo',
    weekday: 'narrow',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  };
  
  const formatter = new Intl.DateTimeFormat('pt-BR', options);
  const parts = formatter.formatToParts(now);
  
  // We can calculate current hour and day of week in Brazil
  const brazilDateStr = now.toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' });
  const brazilDate = new Date(brazilDateStr);
  
  const dayOfWeek = brazilDate.getDay(); // 0 = Sunday, 1 = Monday, ... 6 = Saturday
  const currentMinutes = brazilDate.getHours() * 60 + brazilDate.getMinutes();
  
  const m8 = 8 * 60; // 08:00
  const m12 = 12 * 60; // 12:00
  const m13 = 13 * 60; // 13:00
  const m18 = 18 * 60; // 18:00
  
  let isOpen = false;
  let statusText = 'Fechado no momento';
  let nextOpenText = 'Abre amanhã às 08:00';
  let badgeColor = 'bg-amber-500/10 text-amber-700 border-amber-300';
  
  if (dayOfWeek >= 1 && dayOfWeek <= 5) {
    // Weekdays (Seg a Sex)
    if (currentMinutes >= m8 && currentMinutes < m12) {
      isOpen = true;
      statusText = 'Aberto agora (até 12:00)';
      nextOpenText = 'Fecha às 12:00 e reabre às 13:00';
      badgeColor = 'bg-emerald-500/10 text-emerald-700 border-emerald-300';
    } else if (currentMinutes >= m12 && currentMinutes < m13) {
      isOpen = false;
      statusText = 'Intervalo de almoço';
      nextOpenText = 'Reabre hoje às 13:00';
      badgeColor = 'bg-amber-500/10 text-amber-700 border-amber-300';
    } else if (currentMinutes >= m13 && currentMinutes < m18) {
      isOpen = true;
      statusText = 'Aberto agora (até 18:00)';
      nextOpenText = 'Fecha hoje às 18:00';
      badgeColor = 'bg-emerald-500/10 text-emerald-700 border-emerald-300';
    } else if (currentMinutes < m8) {
      isOpen = false;
      statusText = 'Fechado agora';
      nextOpenText = 'Abre hoje às 08:00';
    } else {
      isOpen = false;
      statusText = 'Fechado no momento';
      nextOpenText = dayOfWeek === 5 ? 'Abre amanhã (sábado) às 08:00' : 'Abre amanhã às 08:00';
    }
  } else if (dayOfWeek === 6) {
    // Saturday
    if (currentMinutes >= m8 && currentMinutes < m12) {
      isOpen = true;
      statusText = 'Aberto agora (sábado até 12:00)';
      nextOpenText = 'Fecha às 12:00';
      badgeColor = 'bg-emerald-500/10 text-emerald-700 border-emerald-300';
    } else {
      isOpen = false;
      statusText = 'Fechado agora';
      nextOpenText = 'Abre segunda-feira às 08:00';
    }
  } else {
    // Sunday
    isOpen = false;
    statusText = 'Fechado hoje (domingo)';
    nextOpenText = 'Abre segunda-feira às 08:00';
  }
  
  return {
    isOpen,
    statusText,
    nextOpenText,
    badgeColor,
    dayOfWeek,
  };
}
