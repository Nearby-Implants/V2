'use client';

import { useForm } from '@/context/FormContext';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { animations } from '@/config/theme';
import { useState } from 'react';

export function Step6Credentials() {
  const { formData, updateFormData, nextStep, previousStep } = useForm();
  const [newCertification, setNewCertification] = useState({
    name: '',
    issuer: '',
    date: '',
  });

  const handleAddCertification = () => {
    if (newCertification.name.trim() && newCertification.issuer.trim()) {
      updateFormData('credentialsInfo', {
        ...formData.credentialsInfo,
        certifications: [...formData.credentialsInfo.certifications, newCertification],
      });
      setNewCertification({ name: '', issuer: '', date: '' });
    }
  };

  const handleRemoveCertification = (index: number) => {
    updateFormData('credentialsInfo', {
      ...formData.credentialsInfo,
      certifications: formData.credentialsInfo.certifications.filter((_, i) => i !== index),
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
        <h2 className="text-2xl font-bold text-primary">Credentials & Certifications</h2>
        <p className="text-muted-foreground">
          Add your professional credentials and certifications.
        </p>
      </div>

      <div className="space-y-8">
        {/* Education Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Education</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Dental School</label>
              <input
                type="text"
                value={formData.credentialsInfo.education.dentalSchool || ''}
                onChange={(e) =>
                  updateFormData('credentialsInfo', {
                    ...formData.credentialsInfo,
                    education: {
                      ...formData.credentialsInfo.education,
                      dentalSchool: e.target.value,
                    },
                  })
                }
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="School name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Graduation Year</label>
              <input
                type="number"
                min="1900"
                max={new Date().getFullYear()}
                value={formData.credentialsInfo.education.graduationYear || ''}
                onChange={(e) =>
                  updateFormData('credentialsInfo', {
                    ...formData.credentialsInfo,
                    education: {
                      ...formData.credentialsInfo.education,
                      graduationYear: Number(e.target.value),
                    },
                  })
                }
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Year"
              />
            </div>
          </div>
        </div>

        {/* Licenses Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Licenses</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">State License Number</label>
              <input
                type="text"
                value={formData.credentialsInfo.licenses.stateLicense || ''}
                onChange={(e) =>
                  updateFormData('credentialsInfo', {
                    ...formData.credentialsInfo,
                    licenses: {
                      ...formData.credentialsInfo.licenses,
                      stateLicense: e.target.value,
                    },
                  })
                }
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="License number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">DEA Registration Number</label>
              <input
                type="text"
                value={formData.credentialsInfo.licenses.deaRegistration || ''}
                onChange={(e) =>
                  updateFormData('credentialsInfo', {
                    ...formData.credentialsInfo,
                    licenses: {
                      ...formData.credentialsInfo.licenses,
                      deaRegistration: e.target.value,
                    },
                  })
                }
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="DEA number"
              />
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Certifications</h3>
          <div className="space-y-4">
            {formData.credentialsInfo.certifications.map((cert, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg space-y-2 relative"
              >
                <button
                  onClick={() => handleRemoveCertification(index)}
                  className="absolute top-2 right-2 text-muted-foreground hover:text-primary"
                >
                  ×
                </button>
                <div className="space-y-2">
                  <div className="font-medium">{cert.name}</div>
                  <div className="text-sm text-muted-foreground">
                    Issued by: {cert.issuer}
                  </div>
                  {cert.date && (
                    <div className="text-sm text-muted-foreground">
                      Date: {new Date(cert.date).toLocaleDateString()}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Add New Certification */}
          <div className="space-y-4 p-4 border rounded-lg">
            <h4 className="font-medium">Add New Certification</h4>
            <div className="space-y-4">
              <input
                type="text"
                value={newCertification.name}
                onChange={(e) =>
                  setNewCertification({ ...newCertification, name: e.target.value })
                }
                placeholder="Certification Name"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <input
                type="text"
                value={newCertification.issuer}
                onChange={(e) =>
                  setNewCertification({ ...newCertification, issuer: e.target.value })
                }
                placeholder="Issuing Organization"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <input
                type="date"
                value={newCertification.date}
                onChange={(e) =>
                  setNewCertification({ ...newCertification, date: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <Button onClick={handleAddCertification} variant="outline">
                Add Certification
              </Button>
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