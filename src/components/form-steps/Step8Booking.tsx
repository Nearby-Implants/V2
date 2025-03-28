'use client';

import { useForm } from '@/context/FormContext';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { animations } from '@/config/theme';
import { useState } from 'react';

export function Step8Booking() {
  const { formData, updateFormData, nextStep, previousStep } = useForm();
  const [newBookingPlatform, setNewBookingPlatform] = useState('');

  const handleAddBookingPlatform = () => {
    if (newBookingPlatform.trim()) {
      updateFormData('bookingInfo', {
        ...formData.bookingInfo,
        platforms: [...formData.bookingInfo.platforms, newBookingPlatform.trim()],
      });
      setNewBookingPlatform('');
    }
  };

  const handleRemoveBookingPlatform = (platform: string) => {
    updateFormData('bookingInfo', {
      ...formData.bookingInfo,
      platforms: formData.bookingInfo.platforms.filter((p) => p !== platform),
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
        <h2 className="text-2xl font-bold text-primary">Booking Information</h2>
        <p className="text-muted-foreground">
          Configure your booking settings and platforms.
        </p>
      </div>

      <div className="space-y-8">
        {/* Booking Platforms Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Booking Platforms</h3>
          <div className="flex flex-wrap gap-2">
            {formData.bookingInfo.platforms.map((platform, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary/10 text-primary rounded-full flex items-center space-x-2"
              >
                <span>{platform}</span>
                <button
                  onClick={() => handleRemoveBookingPlatform(platform)}
                  className="text-primary hover:text-primary/80"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
          <div className="flex space-x-2">
            <input
              type="text"
              value={newBookingPlatform}
              onChange={(e) => setNewBookingPlatform(e.target.value)}
              className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="Add booking platform"
            />
            <Button onClick={handleAddBookingPlatform}>Add</Button>
          </div>
        </div>

        {/* Booking Policy Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Booking Policy</h3>
          <textarea
            value={formData.bookingInfo.policy || ''}
            onChange={(e) =>
              updateFormData('bookingInfo', {
                ...formData.bookingInfo,
                policy: e.target.value,
              })
            }
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Enter your booking policy"
            rows={4}
          />
        </div>

        {/* Cancellation Policy Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Cancellation Policy</h3>
          <textarea
            value={formData.bookingInfo.cancellationPolicy || ''}
            onChange={(e) =>
              updateFormData('bookingInfo', {
                ...formData.bookingInfo,
                cancellationPolicy: e.target.value,
              })
            }
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Enter your cancellation policy"
            rows={4}
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-4">
          <Button onClick={previousStep} variant="outline">
            Previous
          </Button>
          <Button onClick={nextStep}>Next</Button>
        </div>
      </div>
    </motion.div>
  );
} 