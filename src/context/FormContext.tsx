'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { FormData, FormStep } from '@/types/form.types';
import toast from 'react-hot-toast';

interface FormContextType {
  currentStep: FormStep;
  formData: FormData;
  progress: number;
  setCurrentStep: (step: FormStep) => void;
  updateFormData: <K extends keyof FormData>(section: K, data: FormData[K]) => void;
  nextStep: () => void;
  previousStep: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  submitForm: () => Promise<void>;
}

const initialFormData: FormData = {
  basicInfo: {
    clinicName: '',
    tagline: '',
  },
  contactInfo: {
    phoneNumber: '',
    email: '',
    address: '',
  },
  servicesInfo: {
    specialties: [],
    additionalServices: [],
    technology: [],
  },
  pricingInfo: {
    consultationFee: {
      type: 'free',
    },
    priceRange: {
      min: 0,
      max: 0,
    },
    insuranceAccepted: [],
    paymentPlans: {
      inHouse: false,
      careCredit: false,
    },
  },
  reviewsInfo: {
    beforeAfterPhotos: [],
    testimonials: [],
  },
  credentialsInfo: {
    yearsInPractice: 0,
    boardCertifications: [],
    professionalMemberships: [],
  },
  clinicFeatures: {
    officeHours: {},
    emergencyServices: {
      available24_7: false,
      sameDayAppointments: false,
    },
    languagesSpoken: [],
    parkingAndAccessibility: {
      freeParking: false,
      wheelchairAccess: false,
    },
  },
  bookingInfo: {
    enableOnlineBooking: false,
    bookingSystem: null,
    liveChat: {},
  },
  seoInfo: {
    faqs: [],
  },
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [currentStep, setCurrentStep] = useState<FormStep>(1);
  const [formData, setFormData] = useState<FormData>(() => {
    // Try to load saved form data from localStorage
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem('formData');
      return savedData ? JSON.parse(savedData) : initialFormData;
    }
    return initialFormData;
  });

  // Calculate progress percentage
  const progress = (currentStep / 10) * 100;

  // Auto-save form data to localStorage
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const updateFormData = <K extends keyof FormData>(
    section: K,
    data: FormData[K]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [section]: data,
    }));
  };

  const nextStep = () => {
    if (currentStep < 10) {
      setCurrentStep((prev) => (prev + 1) as FormStep);
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as FormStep);
    }
  };

  const submitForm = async () => {
    try {
      // Validate required fields
      if (!formData.basicInfo.clinicName) {
        throw new Error('Clinic name is required');
      }
      if (!formData.contactInfo.email) {
        throw new Error('Email is required');
      }
      if (!formData.contactInfo.phoneNumber) {
        throw new Error('Phone number is required');
      }

      // Show loading toast
      const loadingToast = toast.loading('Submitting form...');

      // Here you would typically make an API call to submit the form
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Clear form data from localStorage after successful submission
      localStorage.removeItem('formData');
      
      // Dismiss loading toast and show success
      toast.dismiss(loadingToast);
      toast.success('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(error instanceof Error ? error.message : 'Error submitting form');
      throw error;
    }
  };

  const value = {
    currentStep,
    formData,
    progress,
    setCurrentStep,
    updateFormData,
    nextStep,
    previousStep,
    isFirstStep: currentStep === 1,
    isLastStep: currentStep === 10,
    submitForm,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

export function useForm() {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
} 