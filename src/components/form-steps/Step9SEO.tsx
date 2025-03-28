'use client';

import { useForm } from '@/context/FormContext';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { animations } from '@/config/theme';
import { useState } from 'react';

export function Step9SEO() {
  const { formData, updateFormData, nextStep, previousStep } = useForm();
  const [newKeyword, setNewKeyword] = useState('');

  const handleAddKeyword = () => {
    if (newKeyword.trim()) {
      updateFormData('seoInfo', {
        ...formData.seoInfo,
        keywords: [...(formData.seoInfo?.keywords || []), newKeyword.trim()],
      });
      setNewKeyword('');
    }
  };

  const handleRemoveKeyword = (index: number) => {
    updateFormData('seoInfo', {
      ...formData.seoInfo,
      keywords: (formData.seoInfo?.keywords || []).filter((_, i) => i !== index),
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
        <h2 className="text-2xl font-bold text-primary">SEO Information</h2>
        <p className="text-muted-foreground">
          Optimize your clinic's search engine visibility.
        </p>
      </div>

      <div className="space-y-8">
        {/* Meta Title Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Meta Title</h3>
          <input
            type="text"
            value={formData.seoInfo?.metaTitle || ''}
            onChange={(e) =>
              updateFormData('seoInfo', {
                ...formData.seoInfo,
                metaTitle: e.target.value,
              })
            }
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Enter meta title"
          />
        </div>

        {/* Meta Description Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Meta Description</h3>
          <textarea
            value={formData.seoInfo?.metaDescription || ''}
            onChange={(e) =>
              updateFormData('seoInfo', {
                ...formData.seoInfo,
                metaDescription: e.target.value,
              })
            }
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Enter meta description"
            rows={4}
          />
        </div>

        {/* Keywords Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Keywords</h3>
          <div className="flex flex-wrap gap-2">
            {(formData.seoInfo?.keywords || []).map((keyword, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full"
              >
                <span>{keyword}</span>
                <button
                  onClick={() => handleRemoveKeyword(index)}
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
              value={newKeyword}
              onChange={(e) => setNewKeyword(e.target.value)}
              placeholder="Add keyword"
              className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <Button onClick={handleAddKeyword} variant="outline">
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