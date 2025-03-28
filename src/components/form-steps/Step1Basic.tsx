'use client';

import { useForm } from '@/context/FormContext';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { animations } from '@/config/theme';
import { useCallback, useState } from 'react';
import Image from 'next/image';

export function Step1Basic() {
  const { formData, updateFormData, nextStep } = useForm();
  const [profilePhotoPreview, setProfilePhotoPreview] = useState<string | null>(null);
  const [coverImagePreview, setCoverImagePreview] = useState<string | null>(null);

  const handleProfilePhotoChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      updateFormData('basicInfo', {
        ...formData.basicInfo,
        profilePhoto: file,
      });
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, [formData.basicInfo, updateFormData]);

  const handleCoverImageChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      updateFormData('basicInfo', {
        ...formData.basicInfo,
        coverImage: file,
      });
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, [formData.basicInfo, updateFormData]);

  return (
    <motion.div
      className="w-full max-w-3xl mx-auto space-y-8"
      variants={animations.fadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-primary">Basic Information</h2>
        <p className="text-muted-foreground">
          Let's start with the basic details about your dental practice.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="clinicName" className="text-sm font-medium">
            Clinic/Dentist Name *
          </label>
          <input
            id="clinicName"
            type="text"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
            value={formData.basicInfo.clinicName}
            onChange={(e) =>
              updateFormData('basicInfo', {
                ...formData.basicInfo,
                clinicName: e.target.value,
              })
            }
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="tagline" className="text-sm font-medium">
            Tagline/Slogan
          </label>
          <input
            id="tagline"
            type="text"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
            value={formData.basicInfo.tagline}
            onChange={(e) =>
              updateFormData('basicInfo', {
                ...formData.basicInfo,
                tagline: e.target.value,
              })
            }
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Profile Photo / Clinic Logo *</label>
          <div className="flex items-center space-x-4">
            <div className="relative w-32 h-32 border-2 border-dashed rounded-lg overflow-hidden">
              {profilePhotoPreview ? (
                <Image
                  src={profilePhotoPreview}
                  alt="Profile preview"
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  No image
                </div>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePhotoChange}
              className="hidden"
              id="profilePhoto"
              required
            />
            <label
              htmlFor="profilePhoto"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md cursor-pointer hover:bg-primary/90 transition-colors"
            >
              Upload Photo
            </label>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Cover Image</label>
          <div className="flex items-center space-x-4">
            <div className="relative w-full h-48 border-2 border-dashed rounded-lg overflow-hidden">
              {coverImagePreview ? (
                <Image
                  src={coverImagePreview}
                  alt="Cover preview"
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  No image
                </div>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleCoverImageChange}
              className="hidden"
              id="coverImage"
            />
            <label
              htmlFor="coverImage"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md cursor-pointer hover:bg-primary/90 transition-colors"
            >
              Upload Cover
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button onClick={nextStep}>Next Step</Button>
      </div>
    </motion.div>
  );
} 