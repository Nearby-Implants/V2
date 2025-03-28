import { useForm } from '@/context/FormContext';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { animations } from '@/config/theme';
import { useState } from 'react';

const commonInsuranceProviders = [
  'Delta Dental',
  'Cigna',
  'Aetna',
  'UnitedHealthcare',
  'Humana',
  'MetLife',
  'Blue Cross Blue Shield',
  'Guardian',
];

export function Step4Pricing() {
  const { formData, updateFormData, nextStep, previousStep } = useForm();
  const [newInsurance, setNewInsurance] = useState('');

  const handleAddInsurance = () => {
    if (newInsurance.trim()) {
      updateFormData('pricingInfo', {
        ...formData.pricingInfo,
        insuranceAccepted: [...formData.pricingInfo.insuranceAccepted, newInsurance.trim()],
      });
      setNewInsurance('');
    }
  };

  const handleRemoveInsurance = (insurance: string) => {
    updateFormData('pricingInfo', {
      ...formData.pricingInfo,
      insuranceAccepted: formData.pricingInfo.insuranceAccepted.filter((i) => i !== insurance),
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
        <h2 className="text-2xl font-bold text-primary">Pricing & Payment Options</h2>
        <p className="text-muted-foreground">
          Set your pricing structure and payment options.
        </p>
      </div>

      <div className="space-y-8">
        {/* Consultation Fee Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Consultation Fee</h3>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                checked={formData.pricingInfo.consultationFee.type === 'free'}
                onChange={() =>
                  updateFormData('pricingInfo', {
                    ...formData.pricingInfo,
                    consultationFee: { type: 'free' },
                  })
                }
                className="text-primary focus:ring-primary/20"
              />
              <span>Free</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                checked={formData.pricingInfo.consultationFee.type === 'paid'}
                onChange={() =>
                  updateFormData('pricingInfo', {
                    ...formData.pricingInfo,
                    consultationFee: { type: 'paid' },
                  })
                }
                className="text-primary focus:ring-primary/20"
              />
              <span>Paid</span>
            </label>
          </div>
          {formData.pricingInfo.consultationFee.type === 'paid' && (
            <div className="flex items-center space-x-2">
              <span className="text-muted-foreground">$</span>
              <input
                type="number"
                min="0"
                value={formData.pricingInfo.consultationFee.amount || ''}
                onChange={(e) =>
                  updateFormData('pricingInfo', {
                    ...formData.pricingInfo,
                    consultationFee: {
                      type: 'paid',
                      amount: Number(e.target.value),
                    },
                  })
                }
                className="w-32 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Amount"
              />
            </div>
          )}
        </div>

        {/* Price Range Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Price Range for Key Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Minimum Price</label>
              <div className="flex items-center space-x-2">
                <span className="text-muted-foreground">$</span>
                <input
                  type="number"
                  min="0"
                  value={formData.pricingInfo.priceRange.min || ''}
                  onChange={(e) =>
                    updateFormData('pricingInfo', {
                      ...formData.pricingInfo,
                      priceRange: {
                        ...formData.pricingInfo.priceRange,
                        min: Number(e.target.value),
                      },
                    })
                  }
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Min"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Maximum Price</label>
              <div className="flex items-center space-x-2">
                <span className="text-muted-foreground">$</span>
                <input
                  type="number"
                  min="0"
                  value={formData.pricingInfo.priceRange.max || ''}
                  onChange={(e) =>
                    updateFormData('pricingInfo', {
                      ...formData.pricingInfo,
                      priceRange: {
                        ...formData.pricingInfo.priceRange,
                        max: Number(e.target.value),
                      },
                    })
                  }
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Max"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Insurance Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Insurance Accepted</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {commonInsuranceProviders.map((insurance) => (
              <label key={insurance} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.pricingInfo.insuranceAccepted.includes(insurance)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      updateFormData('pricingInfo', {
                        ...formData.pricingInfo,
                        insuranceAccepted: [...formData.pricingInfo.insuranceAccepted, insurance],
                      });
                    } else {
                      handleRemoveInsurance(insurance);
                    }
                  }}
                  className="rounded border-gray-300 text-primary focus:ring-primary/20"
                />
                <span>{insurance}</span>
              </label>
            ))}
          </div>
          <div className="flex space-x-2">
            <input
              type="text"
              value={newInsurance}
              onChange={(e) => setNewInsurance(e.target.value)}
              placeholder="Add custom insurance provider"
              className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <Button onClick={handleAddInsurance} variant="outline">
              Add
            </Button>
          </div>
        </div>

        {/* Payment Plans Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Payment Plans</h3>
          <div className="space-y-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.pricingInfo.paymentPlans.inHouse}
                onChange={(e) =>
                  updateFormData('pricingInfo', {
                    ...formData.pricingInfo,
                    paymentPlans: {
                      ...formData.pricingInfo.paymentPlans,
                      inHouse: e.target.checked,
                    },
                  })
                }
                className="rounded border-gray-300 text-primary focus:ring-primary/20"
              />
              <span>In-House Financing</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.pricingInfo.paymentPlans.careCredit}
                onChange={(e) =>
                  updateFormData('pricingInfo', {
                    ...formData.pricingInfo,
                    paymentPlans: {
                      ...formData.pricingInfo.paymentPlans,
                      careCredit: e.target.checked,
                    },
                  })
                }
                className="rounded border-gray-300 text-primary focus:ring-primary/20"
              />
              <span>CareCredit</span>
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