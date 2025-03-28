'use client';

import { useForm } from '@/context/FormContext';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { animations } from '@/config/theme';

export function Step2Contact() {
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
        <h2 className="text-2xl font-bold text-primary">Contact Information</h2>
        <p className="text-muted-foreground">
          How can patients reach you? Add your contact details and location.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="phoneNumber" className="text-sm font-medium">
            Phone Number
          </label>
          <input
            id="phoneNumber"
            type="tel"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
            value={formData.contactInfo.phoneNumber}
            onChange={(e) =>
              updateFormData('contactInfo', {
                ...formData.contactInfo,
                phoneNumber: e.target.value,
              })
            }
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
            value={formData.contactInfo.email}
            onChange={(e) =>
              updateFormData('contactInfo', {
                ...formData.contactInfo,
                email: e.target.value,
              })
            }
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="website" className="text-sm font-medium">
            Website URL
          </label>
          <input
            id="website"
            type="url"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
            value={formData.contactInfo.website}
            onChange={(e) =>
              updateFormData('contactInfo', {
                ...formData.contactInfo,
                website: e.target.value,
              })
            }
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="address" className="text-sm font-medium">
            Physical Address
          </label>
          <textarea
            id="address"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 min-h-[100px]"
            value={formData.contactInfo.address}
            onChange={(e) =>
              updateFormData('contactInfo', {
                ...formData.contactInfo,
                address: e.target.value,
              })
            }
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Social Media Links</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label htmlFor="facebook" className="text-sm font-medium">
                Facebook
              </label>
              <input
                id="facebook"
                type="url"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                value={formData.contactInfo.socialMedia?.facebook || ''}
                onChange={(e) =>
                  updateFormData('contactInfo', {
                    ...formData.contactInfo,
                    socialMedia: {
                      ...formData.contactInfo.socialMedia,
                      facebook: e.target.value,
                    },
                  })
                }
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="instagram" className="text-sm font-medium">
                Instagram
              </label>
              <input
                id="instagram"
                type="url"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                value={formData.contactInfo.socialMedia?.instagram || ''}
                onChange={(e) =>
                  updateFormData('contactInfo', {
                    ...formData.contactInfo,
                    socialMedia: {
                      ...formData.contactInfo.socialMedia,
                      instagram: e.target.value,
                    },
                  })
                }
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="linkedin" className="text-sm font-medium">
                LinkedIn
              </label>
              <input
                id="linkedin"
                type="url"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                value={formData.contactInfo.socialMedia?.linkedin || ''}
                onChange={(e) =>
                  updateFormData('contactInfo', {
                    ...formData.contactInfo,
                    socialMedia: {
                      ...formData.contactInfo.socialMedia,
                      linkedin: e.target.value,
                    },
                  })
                }
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