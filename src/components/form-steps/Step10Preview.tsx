'use client';

import { useForm } from '@/context/FormContext';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { animations } from '@/config/theme';
import Image from 'next/image';
import { Testimonial, Certification } from '@/types/form.types';
import { toast } from 'react-hot-toast';

interface OperatingHours {
  open: string;
  close: string;
}

type OperatingHoursMap = {
  [key: string]: OperatingHours;
};

export function Step10Preview() {
  const { formData, previousStep, submitForm } = useForm();

  const formatTime = (time: string) => {
    if (!time) return 'Closed';
    return new Date(`2000-01-01T${time}`).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleSubmit = async () => {
    try {
      await submitForm();
      // You can add additional success handling here
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit form. Please try again.');
    }
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
        <h2 className="text-2xl font-bold text-primary">Preview Your Profile</h2>
        <p className="text-muted-foreground">
          Review all your information before submitting.
        </p>
      </div>

      <div className="space-y-8">
        {/* Basic Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Basic Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Clinic/Dentist Name</label>
              <p className="mt-1">{formData.basicInfo.clinicName}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Tagline</label>
              <p className="mt-1">{formData.basicInfo.tagline}</p>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-muted-foreground">Profile Photo</label>
              {formData.basicInfo.profilePhoto && (
                <div className="mt-1 relative w-32 h-32">
                  <Image
                    src={formData.basicInfo.profilePhoto}
                    alt="Profile"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              )}
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-muted-foreground">Cover Image</label>
              {formData.basicInfo.coverImage && (
                <div className="mt-1 relative w-full h-48">
                  <Image
                    src={formData.basicInfo.coverImage}
                    alt="Cover"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Phone</label>
              <p className="mt-1">{formData.contactInfo.phoneNumber}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Email</label>
              <p className="mt-1">{formData.contactInfo.email}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Website</label>
              <p className="mt-1">{formData.contactInfo.website}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Address</label>
              <p className="mt-1">{formData.contactInfo.address}</p>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Services</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Specialties</label>
              <div className="mt-1 flex flex-wrap gap-2">
                {formData.servicesInfo.specialties.map((specialty: string) => (
                  <span
                    key={specialty}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Additional Services</label>
              <div className="mt-1 flex flex-wrap gap-2">
                {formData.servicesInfo.additionalServices.map((service: string) => (
                  <span
                    key={service}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Technology</label>
              <div className="mt-1 flex flex-wrap gap-2">
                {formData.servicesInfo.technology.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Pricing</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Consultation Fee</label>
              <p className="mt-1">
                {formData.pricingInfo.consultationFee.type === 'free'
                  ? 'Free'
                  : `$${formData.pricingInfo.consultationFee.amount}`}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Insurance Accepted</label>
              <div className="mt-1 flex flex-wrap gap-2">
                {formData.pricingInfo.insuranceAccepted.map((insurance: string) => (
                  <span
                    key={insurance}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full"
                  >
                    {insurance}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Reviews</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Overall Rating</label>
              <p className="mt-1">{formData.reviewsInfo.overallRating}/5</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Total Reviews</label>
              <p className="mt-1">{formData.reviewsInfo.totalReviews}</p>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-muted-foreground">Testimonials</label>
            <div className="mt-1 space-y-4">
              {formData.reviewsInfo.testimonials.map((review: Testimonial, index: number) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{review.name}</p>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">
                          {i < review.rating ? '★' : '☆'}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="mt-2 text-muted-foreground">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Credentials */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Credentials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Education</label>
              <p className="mt-1">
                {formData.credentialsInfo.education.dentalSchool} ({formData.credentialsInfo.education.graduationYear})
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground">State License</label>
              <p className="mt-1">{formData.credentialsInfo.licenses.stateLicense}</p>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-muted-foreground">Certifications</label>
            <div className="mt-1 space-y-2">
              {formData.credentialsInfo.certifications.map((cert: Certification, index: number) => (
                <div key={index} className="p-3 border rounded-lg">
                  <p className="font-medium">{cert.name}</p>
                  <p className="text-sm text-muted-foreground">
                    Issued by: {cert.issuer}
                    {cert.date && ` • ${new Date(cert.date).toLocaleDateString()}`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Clinic Features */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Clinic Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Languages</label>
              <div className="mt-1 flex flex-wrap gap-2">
                {formData.clinicFeatures.languagesSpoken.map((language: string) => (
                  <span
                    key={language}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Amenities</label>
              <div className="mt-1 flex flex-wrap gap-2">
                {formData.clinicFeatures.parkingAndAccessibility.other?.map((amenity: string) => (
                  <span
                    key={amenity}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-muted-foreground">Operating Hours</label>
            <div className="mt-1 grid grid-cols-1 md:grid-cols-2 gap-4">
              {(Object.entries(formData.clinicFeatures.officeHours) as [string, OperatingHours][]).map(([day, hours]) => (
                <div key={day} className="flex justify-between items-center">
                  <span className="capitalize">{day}</span>
                  <span>
                    {hours.open ? formatTime(hours.open) : 'Closed'} -{' '}
                    {hours.close ? formatTime(hours.close) : 'Closed'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Booking Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Booking Platforms</label>
              <div className="mt-1 flex flex-wrap gap-2">
                {formData.bookingInfo.platforms.map((platform: string) => (
                  <span
                    key={platform}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Booking Policy</label>
              <p className="mt-1 whitespace-pre-wrap">{formData.bookingInfo.policy}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Cancellation Policy</label>
              <p className="mt-1 whitespace-pre-wrap">{formData.bookingInfo.cancellationPolicy}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Booking System</label>
              <div className="mt-1 flex flex-wrap gap-2">
                {formData.bookingInfo.bookingSystem && (
                  <span
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full"
                  >
                    {formData.bookingInfo.bookingSystem}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* SEO Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">SEO Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Meta Title</label>
              <p className="mt-1">{formData.seoInfo.metaTitle}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Meta Description</label>
              <p className="mt-1">{formData.seoInfo.metaDescription}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Keywords</label>
              <div className="mt-1 flex flex-wrap gap-2">
                {formData.seoInfo.keywords.map((keyword: string) => (
                  <span
                    key={keyword}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-4">
          <Button onClick={previousStep} variant="outline">
            Previous
          </Button>
          <Button onClick={handleSubmit}>Submit Profile</Button>
        </div>
      </div>
    </motion.div>
  );
} 