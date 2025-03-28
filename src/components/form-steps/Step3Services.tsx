'use client';

import { useForm } from '@/context/FormContext';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { animations } from '@/config/theme';
import { useState } from 'react';

const commonSpecialties = [
  'Dental Implants',
  'Cosmetic Dentistry',
  'Orthodontics',
  'Endodontics',
  'Periodontics',
  'Oral Surgery',
  'Pediatric Dentistry',
  'Prosthodontics',
];

const commonTechnology = [
  '3D Imaging',
  'Digital Impressions',
  'CAD/CAM',
  'Laser Dentistry',
  'Intraoral Cameras',
  'Digital X-rays',
  'Sleep Apnea Treatment',
  'Invisalign',
];

export function Step3Services() {
  const { formData, updateFormData, nextStep, previousStep } = useForm();
  const [newSpecialty, setNewSpecialty] = useState('');
  const [newService, setNewService] = useState('');
  const [newTechnology, setNewTechnology] = useState('');

  const handleAddSpecialty = () => {
    if (newSpecialty.trim()) {
      updateFormData('servicesInfo', {
        ...formData.servicesInfo,
        specialties: [...formData.servicesInfo.specialties, newSpecialty.trim()],
      });
      setNewSpecialty('');
    }
  };

  const handleAddService = () => {
    if (newService.trim()) {
      updateFormData('servicesInfo', {
        ...formData.servicesInfo,
        additionalServices: [...formData.servicesInfo.additionalServices, newService.trim()],
      });
      setNewService('');
    }
  };

  const handleAddTechnology = () => {
    if (newTechnology.trim()) {
      updateFormData('servicesInfo', {
        ...formData.servicesInfo,
        technology: [...formData.servicesInfo.technology, newTechnology.trim()],
      });
      setNewTechnology('');
    }
  };

  const handleRemoveSpecialty = (specialty: string) => {
    updateFormData('servicesInfo', {
      ...formData.servicesInfo,
      specialties: formData.servicesInfo.specialties.filter((s) => s !== specialty),
    });
  };

  const handleRemoveService = (service: string) => {
    updateFormData('servicesInfo', {
      ...formData.servicesInfo,
      additionalServices: formData.servicesInfo.additionalServices.filter((s) => s !== service),
    });
  };

  const handleRemoveTechnology = (tech: string) => {
    updateFormData('servicesInfo', {
      ...formData.servicesInfo,
      technology: formData.servicesInfo.technology.filter((t) => t !== tech),
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
        <h2 className="text-2xl font-bold text-primary">Services & Technology</h2>
        <p className="text-muted-foreground">
          What services do you offer? Select your specialties and technology.
        </p>
      </div>

      <div className="space-y-8">
        {/* Specialties Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Specialties</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {commonSpecialties.map((specialty) => (
              <label key={specialty} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.servicesInfo.specialties.includes(specialty)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      updateFormData('servicesInfo', {
                        ...formData.servicesInfo,
                        specialties: [...formData.servicesInfo.specialties, specialty],
                      });
                    } else {
                      handleRemoveSpecialty(specialty);
                    }
                  }}
                  className="rounded border-gray-300 text-primary focus:ring-primary/20"
                />
                <span>{specialty}</span>
              </label>
            ))}
          </div>
          <div className="flex space-x-2">
            <input
              type="text"
              value={newSpecialty}
              onChange={(e) => setNewSpecialty(e.target.value)}
              placeholder="Add custom specialty"
              className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <Button onClick={handleAddSpecialty} variant="outline">
              Add
            </Button>
          </div>
        </div>

        {/* Additional Services Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Additional Services</h3>
          <div className="flex flex-wrap gap-2">
            {formData.servicesInfo.additionalServices.map((service) => (
              <span
                key={service}
                className="px-3 py-1 bg-primary/10 text-primary rounded-full flex items-center space-x-2"
              >
                <span>{service}</span>
                <button
                  onClick={() => handleRemoveService(service)}
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
              value={newService}
              onChange={(e) => setNewService(e.target.value)}
              placeholder="Add custom service"
              className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <Button onClick={handleAddService} variant="outline">
              Add
            </Button>
          </div>
        </div>

        {/* Technology Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Technology Used</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {commonTechnology.map((tech) => (
              <label key={tech} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.servicesInfo.technology.includes(tech)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      updateFormData('servicesInfo', {
                        ...formData.servicesInfo,
                        technology: [...formData.servicesInfo.technology, tech],
                      });
                    } else {
                      handleRemoveTechnology(tech);
                    }
                  }}
                  className="rounded border-gray-300 text-primary focus:ring-primary/20"
                />
                <span>{tech}</span>
              </label>
            ))}
          </div>
          <div className="flex space-x-2">
            <input
              type="text"
              value={newTechnology}
              onChange={(e) => setNewTechnology(e.target.value)}
              placeholder="Add custom technology"
              className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <Button onClick={handleAddTechnology} variant="outline">
              Add
            </Button>
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