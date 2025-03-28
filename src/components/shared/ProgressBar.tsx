'use client';

import { motion } from 'framer-motion';
import { useForm } from '@/context/FormContext';

export function ProgressBar() {
  const { progress, currentStep } = useForm();

  return (
    <div className="w-full max-w-3xl mx-auto mb-8">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-primary">
          Step {currentStep} of 10
        </span>
        <span className="text-sm font-medium text-primary">
          {Math.round(progress)}%
        </span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </div>
    </div>
  );
} 