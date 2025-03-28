'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from '@/context/FormContext';
import { Step1Basic } from './Step1Basic';
import { Step2Contact } from './Step2Contact';
import { Step3Services } from './Step3Services';
import { Step4Pricing } from './Step4Pricing';
import { Step6Credentials } from './Step6Credentials';
import { Step7ClinicFeatures } from './Step7ClinicFeatures';
import { Step8Booking } from './Step8Booking';
import { Step9SEO } from './Step9SEO';
import { Step10Preview } from './Step10Preview';

const formSteps = {
  1: Step1Basic,
  2: Step2Contact,
  3: Step3Services,
  4: Step4Pricing,
  5: undefined,
  6: Step6Credentials,
  7: Step7ClinicFeatures,
  8: Step8Booking,
  9: Step9SEO,
  10: Step10Preview,
} as const;

export function FormStepWrapper() {
  const { currentStep } = useForm();
  const CurrentStepComponent = formSteps[currentStep as keyof typeof formSteps];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        {CurrentStepComponent && <CurrentStepComponent />}
      </motion.div>
    </AnimatePresence>
  );
} 