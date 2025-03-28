import { useForm } from '@/context/FormContext';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { animations } from '@/config/theme';
import { useState } from 'react';

const commonAmenities = [
  'Free WiFi',
  'TV in Waiting Room',
  'Comfortable Seating',
  'Refreshments',
  'Children\'s Play Area',
  'Wheelchair Accessible',
  'Parking Available',
  'Public Transportation Access',
];

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
  const [newAmenity, setNewAmenity] = useState('');
  const [newLanguage, setNewLanguage] = useState('');

  const handleAddAmenity = () => {
    if (newAmenity.trim()) {
      updateFormData('clinicFeatures', {
        ...formData.clinicFeatures,
        amenities: [...formData.clinicFeatures.amenities, newAmenity.trim()],
      });
      setNewAmenity('');
    }
  };

  const handleAddLanguage = () => {
    if (newLanguage.trim()) {
      updateFormData('clinicFeatures', {
        ...formData.clinicFeatures,
        languages: [...formData.clinicFeatures.languages, newLanguage.trim()],
      });
      setNewLanguage('');
    }
  };

  const handleRemoveAmenity = (amenity: string) => {
    updateFormData('clinicFeatures', {
      ...formData.clinicFeatures,
      amenities: formData.clinicFeatures.amenities.filter((a) => a !== amenity),
    });
  };

  const handleRemoveLanguage = (language: string) => {
    updateFormData('clinicFeatures', {
      ...formData.clinicFeatures,
      languages: formData.clinicFeatures.languages.filter((l) => l !== language),
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
                    value={formData.clinicFeatures.operatingHours[day.toLowerCase()].open || ''}
                    onChange={(e) =>
                      updateFormData('clinicFeatures', {
                        ...formData.clinicFeatures,
                        operatingHours: {
                          ...formData.clinicFeatures.operatingHours,
                          [day.toLowerCase()]: {
                            ...formData.clinicFeatures.operatingHours[day.toLowerCase()],
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
                    value={formData.clinicFeatures.operatingHours[day.toLowerCase()].close || ''}
                    onChange={(e) =>
                      updateFormData('clinicFeatures', {
                        ...formData.clinicFeatures,
                        operatingHours: {
                          ...formData.clinicFeatures.operatingHours,
                          [day.toLowerCase()]: {
                            ...formData.clinicFeatures.operatingHours[day.toLowerCase()],
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {commonLanguages.map((language) => (
              <label key={language} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.clinicFeatures.languages.includes(language)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      handleAddLanguage(language);
                    } else {
                      handleRemoveLanguage(language);
                    }
                  }}
                  className="rounded border-gray-300 text-primary focus:ring-primary/20"
                />
                <span>{language}</span>
              </label>
            ))}
          </div>
          <div className="flex space-x-2">
            <input
              type="text"
              value={newLanguage}
              onChange={(e) => setNewLanguage(e.target.value)}
              placeholder="Add custom language"
              className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <Button onClick={handleAddLanguage} variant="outline">
              Add
            </Button>
          </div>
        </div>

        {/* Amenities Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Amenities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {commonAmenities.map((amenity) => (
              <label key={amenity} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.clinicFeatures.amenities.includes(amenity)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      handleAddAmenity(amenity);
                    } else {
                      handleRemoveAmenity(amenity);
                    }
                  }}
                  className="rounded border-gray-300 text-primary focus:ring-primary/20"
                />
                <span>{amenity}</span>
              </label>
            ))}
          </div>
          <div className="flex space-x-2">
            <input
              type="text"
              value={newAmenity}
              onChange={(e) => setNewAmenity(e.target.value)}
              placeholder="Add custom amenity"
              className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <Button onClick={handleAddAmenity} variant="outline">
              Add
            </Button>
          </div>
        </div>

        {/* Accessibility Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Accessibility</h3>
          <div className="space-y-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.clinicFeatures.accessibility.wheelchairAccessible}
                onChange={(e) =>
                  updateFormData('clinicFeatures', {
                    ...formData.clinicFeatures,
                    accessibility: {
                      ...formData.clinicFeatures.accessibility,
                      wheelchairAccessible: e.target.checked,
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
                checked={formData.clinicFeatures.accessibility.elevator}
                onChange={(e) =>
                  updateFormData('clinicFeatures', {
                    ...formData.clinicFeatures,
                    accessibility: {
                      ...formData.clinicFeatures.accessibility,
                      elevator: e.target.checked,
                    },
                  })
                }
                className="rounded border-gray-300 text-primary focus:ring-primary/20"
              />
              <span>Elevator Available</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.clinicFeatures.accessibility.parking}
                onChange={(e) =>
                  updateFormData('clinicFeatures', {
                    ...formData.clinicFeatures,
                    accessibility: {
                      ...formData.clinicFeatures.accessibility,
                      parking: e.target.checked,
                    },
                  })
                }
                className="rounded border-gray-300 text-primary focus:ring-primary/20"
              />
              <span>Handicap Parking Available</span>
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