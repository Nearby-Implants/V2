'use client';

import { useForm } from '@/context/FormContext';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { animations } from '@/config/theme';

export function Step8Booking() {
  const { formData, updateFormData, nextStep, previousStep } = useForm();

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
          Configure your booking settings.
        </p>
      </div>

      <div className="space-y-8">
        {/* Online Booking Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Online Booking</h3>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={formData.bookingInfo.enableOnlineBooking}
              onChange={(e) =>
                updateFormData('bookingInfo', {
                  ...formData.bookingInfo,
                  enableOnlineBooking: e.target.checked,
                })
              }
              className="rounded border-gray-300 text-primary focus:ring-primary/20"
            />
            <span>Enable Online Booking</span>
          </label>
        </div>

        {/* Booking System Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Booking System</h3>
          <select
            value={formData.bookingInfo.bookingSystem || ''}
            onChange={(e) =>
              updateFormData('bookingInfo', {
                ...formData.bookingInfo,
                bookingSystem: e.target.value as 'calendly' | 'zocdoc' | 'inHouse' | null,
              })
            }
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="">Select a booking system</option>
            <option value="calendly">Calendly</option>
            <option value="zocdoc">ZocDoc</option>
            <option value="inHouse">In-House System</option>
          </select>
        </div>

        {/* Booking URL Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Booking URL</h3>
          <input
            type="url"
            value={formData.bookingInfo.bookingUrl || ''}
            onChange={(e) =>
              updateFormData('bookingInfo', {
                ...formData.bookingInfo,
                bookingUrl: e.target.value,
              })
            }
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Enter your booking URL"
          />
        </div>

        {/* Live Chat Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Live Chat</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">WhatsApp</label>
              <input
                type="tel"
                value={formData.bookingInfo.liveChat?.whatsapp || ''}
                onChange={(e) =>
                  updateFormData('bookingInfo', {
                    ...formData.bookingInfo,
                    liveChat: {
                      ...formData.bookingInfo.liveChat,
                      whatsapp: e.target.value,
                    },
                  })
                }
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Enter WhatsApp number"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Facebook Messenger</label>
              <input
                type="text"
                value={formData.bookingInfo.liveChat?.messenger || ''}
                onChange={(e) =>
                  updateFormData('bookingInfo', {
                    ...formData.bookingInfo,
                    liveChat: {
                      ...formData.bookingInfo.liveChat,
                      messenger: e.target.value,
                    },
                  })
                }
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Enter Messenger ID"
              />
            </div>
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