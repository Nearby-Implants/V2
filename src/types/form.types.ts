export type FormStep = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface BasicInfo {
  clinicName: string;
  tagline?: string;
  profilePhoto?: File;
  coverImage?: File;
}

export interface ContactInfo {
  phoneNumber: string;
  email: string;
  website?: string;
  address: string;
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export interface ServicesInfo {
  specialties: string[];
  additionalServices: string[];
  technology: string[];
}

export interface PricingInfo {
  consultationFee: {
    type: 'free' | 'paid';
    amount?: number;
  };
  priceRange: {
    min: number;
    max: number;
  };
  insuranceAccepted: string[];
  paymentPlans: {
    inHouse: boolean;
    careCredit: boolean;
  };
}

export interface ReviewsInfo {
  beforeAfterPhotos: File[];
  testimonials: {
    text: string;
    videoUrl?: string;
  }[];
  googleReviewsBadge?: string;
}

export interface CredentialsInfo {
  yearsInPractice: number;
  boardCertifications: string[];
  professionalMemberships: string[];
}

export interface ClinicFeatures {
  officeHours: {
    [key: string]: {
      open: string;
      close: string;
    };
  };
  emergencyServices: {
    available24_7: boolean;
    sameDayAppointments: boolean;
  };
  languagesSpoken: string[];
  parkingAndAccessibility: {
    freeParking: boolean;
    wheelchairAccess: boolean;
    other?: string[];
  };
}

export interface BookingInfo {
  enableOnlineBooking: boolean;
  bookingSystem: 'calendly' | 'zocdoc' | 'inHouse' | null;
  bookingUrl?: string;
  liveChat: {
    whatsapp?: string;
    messenger?: string;
  };
}

export interface SeoInfo {
  faqs: {
    question: string;
    answer: string;
  }[];
  metaTitle?: string;
  metaDescription?: string;
  schemaMarkup?: string;
}

export interface FormData {
  basicInfo: BasicInfo;
  contactInfo: ContactInfo;
  servicesInfo: ServicesInfo;
  pricingInfo: PricingInfo;
  reviewsInfo: ReviewsInfo;
  credentialsInfo: CredentialsInfo;
  clinicFeatures: ClinicFeatures;
  bookingInfo: BookingInfo;
  seoInfo: SeoInfo;
} 