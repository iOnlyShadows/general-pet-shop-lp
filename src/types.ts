export interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  badge?: string;
  iconName: string;
  imageUrl: string;
  highlights: string[];
  ctaText: string;
  whatsappMessage: string;
}

export interface DaySchedule {
  dayName: string;
  shortDay: string;
  dayIndex: number; // 0=Sunday, 1=Monday, ..., 6=Saturday
  morningHours?: string;
  afternoonHours?: string;
  displayHours: string;
  isOpen: boolean;
}

export interface TestimonialItem {
  id: string;
  author: string;
  petName: string;
  petBreed: string;
  serviceUsed: string;
  rating: number;
  dateText: string;
  content: string;
  verified: boolean;
  avatarUrl: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'banho-tosa' | 'veterinaria' | 'taxi-pet' | 'geral';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  alt: string;
  needsReplacement: boolean;
}

export interface BookingState {
  service: string;
  petName: string;
  petSize: string;
  petType: string;
  dateOption: string;
  customDate: string;
  timeSlot: string;
  notes: string;
}
