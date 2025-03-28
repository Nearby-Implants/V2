'use client';

import { useForm } from '@/context/FormContext';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { animations } from '@/config/theme';
import { useState } from 'react';

const commonLanguages = [
  'English',
  'Spanish',
  'French',
  'German',
  'Chinese',
  'Japanese',
  'Korean',
  'Russian',
];

export function Step7ClinicFeatures() {
  const { formData, updateFormData, nextStep, previousStep } = useForm();
  const [newLanguage, setNewLanguage] = useState('');

  const handleAddLanguage = () => {
    if (newLanguage.trim()) {
      updateFormData('clinicFeatures', {
        ...formData.clinicFeatures,
        languagesSpoken: [...formData.clinicFeatures.languagesSpoken, newLanguage.trim()],
      });
      setNewLanguage('');
    }
  };

  const handleRemoveLanguage = (index: number) => {
    updateFormData('clinicFeatures', {
      ...formData.clinicFeatures,
      languagesSpoken: formData.clinicFeatures.languagesSpoken.filter((_, i) => i !== index),
    });
  };

  return (
    <motion.div
      className="w-full max-w-3xl mx-auto space-y-8"
      variants={animations.fadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-primary">Clinic Features</h2>
        <p className="text-muted-foreground">
          Describe your clinic's features and amenities.
        </p>
      </div>

      <div className="space-y-8">
        {/* Operating Hours Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Operating Hours</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
              <div key={day} className="space-y-2">
                <label className="block text-sm font-medium">{day}</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="time"
                    value={formData.clinicFeatures.officeHours[day.toLowerCase()]?.open || ''}
                    onChange={(e) =>
                      updateFormData('clinicFeatures', {
                        ...formData.clinicFeatures,
                        officeHours: {
                          ...formData.clinicFeatures.officeHours,
                          [day.toLowerCase()]: {
                            ...formData.clinicFeatures.officeHours[day.toLowerCase()],
                            open: e.target.value,
                          },
                        },
                      })
                    }
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <span className="text-muted-foreground">to</span>
                  <input
                    type="time"
                    value={formData.clinicFeatures.officeHours[day.toLowerCase()]?.close || ''}
                    onChange={(e) =>
                      updateFormData('clinicFeatures', {
                        ...formData.clinicFeatures,
                        officeHours: {
                          ...formData.clinicFeatures.officeHours,
                          [day.toLowerCase()]: {
                            ...formData.clinicFeatures.officeHours[day.toLowerCase()],
                            close: e.target.value,
                          },
                        },
                      })
                    }
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Languages Spoken</h3>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {formData.clinicFeatures.languagesSpoken.map((language, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full"
                >
                  <span>{language}</span>
                  <button
                    onClick={() => handleRemoveLanguage(index)}
                    className="text-primary hover:text-primary/80"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            <div className="flex space-x-2">
              <input
                type="text"
                value={newLanguage}
                onChange={(e) => setNewLanguage(e.target.value)}
                placeholder="Add language"
                className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <Button onClick={handleAddLanguage} variant="outline">
                Add
              </Button>
            </div>
          </div>
        </div>

        {/* Accessibility Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Accessibility</h3>
          <div className="space-y-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.clinicFeatures.parkingAndAccessibility?.wheelchairAccess || false}
                onChange={(e) =>
                  updateFormData('clinicFeatures', {
                    ...formData.clinicFeatures,
                    parkingAndAccessibility: {
                      wheelchairAccess: e.target.checked,
                      freeParking: formData.clinicFeatures.parkingAndAccessibility?.freeParking || false,
                    },
                  })
                }
                className="rounded border-gray-300 text-primary focus:ring-primary/20"
              />
              <span>Wheelchair Accessible</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.clinicFeatures.parkingAndAccessibility?.freeParking || false}
                onChange={(e) =>
                  updateFormData('clinicFeatures', {
                    ...formData.clinicFeatures,
                    parkingAndAccessibility: {
                      freeParking: e.target.checked,
                      wheelchairAccess: formData.clinicFeatures.parkingAndAccessibility?.wheelchairAccess || false,
                    },
                  })
                }
                className="rounded border-gray-300 text-primary focus:ring-primary/20"
              />
              <span>Free Parking Available</span>
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={previousStep}>
          Previous
        </Button>
        <Button onClick={nextStep}>Next Step</Button>
      </div>
    </motion.div>
  );
} 