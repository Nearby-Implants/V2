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
        keywords: [...formData.seoInfo.keywords, newKeyword.trim()],
      });
      setNewKeyword('');
    }
  };

  const handleRemoveKeyword = (keyword: string) => {
    updateFormData('seoInfo', {
      ...formData.seoInfo,
      keywords: formData.seoInfo.keywords.filter((k) => k !== keyword),
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
          Optimize your profile for search engines.
        </p>
      </div>

      <div className="space-y-8">
        {/* Meta Title Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Meta Title</h3>
          <input
            type="text"
            value={formData.seoInfo.metaTitle || ''}
            onChange={(e) =>
              updateFormData('seoInfo', {
                ...formData.seoInfo,
                metaTitle: e.target.value,
              })
            }
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Enter meta title (max 60 characters)"
            maxLength={60}
          />
          <div className="text-sm text-muted-foreground">
            {formData.seoInfo.metaTitle?.length || 0}/60 characters
          </div>
        </div>

        {/* Meta Description Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Meta Description</h3>
          <textarea
            value={formData.seoInfo.metaDescription || ''}
            onChange={(e) =>
              updateFormData('seoInfo', {
                ...formData.seoInfo,
                metaDescription: e.target.value,
              })
            }
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Enter meta description (max 160 characters)"
            rows={3}
            maxLength={160}
          />
          <div className="text-sm text-muted-foreground">
            {formData.seoInfo.metaDescription?.length || 0}/160 characters
          </div>
        </div>

        {/* Keywords Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Keywords</h3>
          <div className="flex flex-wrap gap-2">
            {formData.seoInfo.keywords.map((keyword, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary/10 text-primary rounded-full flex items-center space-x-2"
              >
                <span>{keyword}</span>
                <button
                  onClick={() => handleRemoveKeyword(keyword)}
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

        {/* Social Media Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Social Media</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Facebook URL</label>
              <input
                type="url"
                value={formData.seoInfo.socialMedia.facebook || ''}
                onChange={(e) =>
                  updateFormData('seoInfo', {
                    ...formData.seoInfo,
                    socialMedia: {
                      ...formData.seoInfo.socialMedia,
                      facebook: e.target.value,
                    },
                  })
                }
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="https://facebook.com/your-page"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Instagram URL</label>
              <input
                type="url"
                value={formData.seoInfo.socialMedia.instagram || ''}
                onChange={(e) =>
                  updateFormData('seoInfo', {
                    ...formData.seoInfo,
                    socialMedia: {
                      ...formData.seoInfo.socialMedia,
                      instagram: e.target.value,
                    },
                  })
                }
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="https://instagram.com/your-profile"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">LinkedIn URL</label>
              <input
                type="url"
                value={formData.seoInfo.socialMedia.linkedin || ''}
                onChange={(e) =>
                  updateFormData('seoInfo', {
                    ...formData.seoInfo,
                    socialMedia: {
                      ...formData.seoInfo.socialMedia,
                      linkedin: e.target.value,
                    },
                  })
                }
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="https://linkedin.com/in/your-profile"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={previousStep}>
          Previous
        </Button>
        <Button onClick={nextStep}>Submit</Button>
      </div>
    </motion.div>
  );
} 