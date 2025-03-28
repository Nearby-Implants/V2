'use client';

import { FormProvider } from '@/context/FormContext';
import { ProgressBar } from '@/components/shared/ProgressBar';
import { FormStepWrapper } from '@/components/form-steps/FormStepWrapper';
import { useTheme } from '@/context/ThemeContext';
import { Button } from '@/components/ui/button';

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-primary">
            Nearby Implants
          </h1>
          <Button onClick={toggleTheme} variant="outline">
            {theme === 'light' ? '🌙' : '☀️'} {theme}
          </Button>
        </div>

        <FormProvider>
          <ProgressBar />
          <FormStepWrapper />
        </FormProvider>
      </div>
    </main>
  );
}
