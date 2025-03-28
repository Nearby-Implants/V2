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
    return new Date(`1970-01-01T${time}`).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  const handleSubmit = async () => {
    try {
      await submitForm();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit form. Please try again.');
    }
  };

  return (
    <motion.div
      initial={animations.fadeIn.initial}
      animate={animations.fadeIn.animate}
      exit={animations.fadeIn.exit}
      className="space-y-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Basic Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Basic Information</h3>
          <div>
            <label className="block text-sm font-medium text-muted-foreground">Clinic/Dentist Name</label>
            <p className="mt-1">{formData.basicInfo.clinicName}</p>
          </div>
          {formData.basicInfo.tagline && (
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Tagline</label>
              <p className="mt-1">{formData.basicInfo.tagline}</p>
            </div>
          )}
          {formData.basicInfo.profilePhoto && (
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Profile Photo</label>
              <div className="mt-1 relative w-32 h-32">
                <Image
                  src={URL.createObjectURL(formData.basicInfo.profilePhoto)}
                  alt="Profile"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          )}
          {formData.basicInfo.coverImage && (
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Cover Image</label>
              <div className="mt-1 relative w-full h-48">
                <Image
                  src={URL.createObjectURL(formData.basicInfo.coverImage)}
                  alt="Cover"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          )}
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Contact Information</h3>
          <div>
            <label className="block text-sm font-medium text-muted-foreground">Phone</label>
            <p className="mt-1">{formData.contactInfo.phoneNumber}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-muted-foreground">Email</label>
            <p className="mt-1">{formData.contactInfo.email}</p>
          </div>
          {formData.contactInfo.website && (
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Website</label>
              <p className="mt-1">{formData.contactInfo.website}</p>
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-muted-foreground">Address</label>
            <p className="mt-1">{formData.contactInfo.address}</p>
          </div>
          {formData.contactInfo.socialMedia && (
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Social Media</label>
              <div className="mt-1 flex flex-wrap gap-2">
                {formData.contactInfo.socialMedia.facebook && (
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">Facebook</span>
                )}
                {formData.contactInfo.socialMedia.instagram && (
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">Instagram</span>
                )}
                {formData.contactInfo.socialMedia.linkedin && (
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">LinkedIn</span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Services</h3>
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

        {/* Pricing */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Pricing</h3>
          <div>
            <label className="block text-sm font-medium text-muted-foreground">Consultation Fee</label>
            <p className="mt-1">
              {formData.pricingInfo.consultationFee.type === 'free'
                ? 'Free'
                : `$${formData.pricingInfo.consultationFee.amount}`}
            </p>
          </div>
          {formData.pricingInfo.priceRange && (
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Price Range</label>
              <p className="mt-1">
                ${formData.pricingInfo.priceRange.min} - ${formData.pricingInfo.priceRange.max}
              </p>
            </div>
          )}
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
          {formData.pricingInfo.paymentPlans && (
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Payment Plans</label>
              <div className="mt-1 flex flex-wrap gap-2">
                {formData.pricingInfo.paymentPlans.inHouse && (
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">In-House Financing</span>
                )}
                {formData.pricingInfo.paymentPlans.careCredit && (
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">CareCredit</span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Reviews */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Reviews</h3>
          {formData.reviewsInfo.overallRating && (
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Overall Rating</label>
              <p className="mt-1">{formData.reviewsInfo.overallRating ?? 0}/5</p>
            </div>
          )}
          {formData.reviewsInfo.totalReviews && (
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Total Reviews</label>
              <p className="mt-1">{formData.reviewsInfo.totalReviews}</p>
            </div>
          )}
          {formData.reviewsInfo.beforeAfterPhotos && formData.reviewsInfo.beforeAfterPhotos.length > 0 && (
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Before & After Photos</label>
              <div className="mt-1 grid grid-cols-2 gap-4">
                {formData.reviewsInfo.beforeAfterPhotos.map((photo: File, index: number) => (
                  <div key={index} className="relative w-full h-48">
                    <Image
                      src={URL.createObjectURL(photo)}
                      alt={`Before/After ${index + 1}`}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          {formData.reviewsInfo.testimonials && formData.reviewsInfo.testimonials.length > 0 && (
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Testimonials</label>
              <div className="mt-1 space-y-4">
                {formData.reviewsInfo.testimonials.map((review: Testimonial, index: number) => (
                  <div key={index} className="p-4 bg-muted rounded-lg">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{review.name}</span>
                      <span className="text-yellow-500">★</span>
                      <span>{review.rating}/5</span>
                    </div>
                    <p className="mt-2">{review.comment}</p>
                    {review.date && (
                      <p className="mt-2 text-sm text-muted-foreground">{review.date}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Credentials */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Credentials</h3>
          {formData.credentialsInfo.education?.dentalSchool && (
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Education</label>
              <p className="mt-1">
                {formData.credentialsInfo.education.dentalSchool}
                {formData.credentialsInfo.education.graduationYear && 
                  ` (${formData.credentialsInfo.education.graduationYear})`}
              </p>
            </div>
          )}
          {formData.credentialsInfo.licenses?.stateLicense && (
            <div>
              <label className="block text-sm font-medium text-muted-foreground">State License</label>
              <p className="mt-1">{formData.credentialsInfo.licenses.stateLicense}</p>
            </div>
          )}
          {formData.credentialsInfo.certifications && formData.credentialsInfo.certifications.length > 0 && (
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Certifications</label>
              <div className="mt-1 space-y-2">
                {formData.credentialsInfo.certifications.map((cert: Certification, index: number) => (
                  <div key={index} className="p-3 bg-muted rounded-lg">
                    <p className="font-medium">{cert.name}</p>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    {cert.date && (
                      <p className="text-sm text-muted-foreground">{cert.date}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Clinic Features */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Clinic Features</h3>
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
          {formData.clinicFeatures.emergencyServices && (
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Emergency Services</label>
              <div className="mt-1 space-y-2">
                <p>24/7 Available: {formData.clinicFeatures.emergencyServices.available24_7 ? 'Yes' : 'No'}</p>
                <p>Same Day Appointments: {formData.clinicFeatures.emergencyServices.sameDayAppointments ? 'Yes' : 'No'}</p>
              </div>
            </div>
          )}
          {formData.clinicFeatures.parkingAndAccessibility && (
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Parking & Accessibility</label>
              <div className="mt-1 space-y-2">
                <p>Free Parking: {formData.clinicFeatures.parkingAndAccessibility.freeParking ? 'Yes' : 'No'}</p>
                <p>Wheelchair Access: {formData.clinicFeatures.parkingAndAccessibility.wheelchairAccess ? 'Yes' : 'No'}</p>
                {formData.clinicFeatures.parkingAndAccessibility.other && formData.clinicFeatures.parkingAndAccessibility.other.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {formData.clinicFeatures.parkingAndAccessibility.other.map((amenity: string) => (
                      <span
                        key={amenity}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
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

        {/* Booking */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Booking</h3>
          {formData.bookingInfo.bookingSystem && (
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Booking System</label>
              <p className="mt-1">{formData.bookingInfo.bookingSystem}</p>
            </div>
          )}
          {formData.bookingInfo.liveChat && (
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Live Chat</label>
              <div className="mt-1 space-y-2">
                {formData.bookingInfo.liveChat.whatsapp && (
                  <p>WhatsApp: {formData.bookingInfo.liveChat.whatsapp}</p>
                )}
                {formData.bookingInfo.liveChat.messenger && (
                  <p>Messenger: {formData.bookingInfo.liveChat.messenger}</p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* SEO */}
        {formData.seoInfo && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">SEO Information</h3>
            {formData.seoInfo.metaTitle && (
              <div>
                <label className="block text-sm font-medium text-muted-foreground">Meta Title</label>
                <p className="mt-1">{formData.seoInfo.metaTitle}</p>
              </div>
            )}
            {formData.seoInfo.metaDescription && (
              <div>
                <label className="block text-sm font-medium text-muted-foreground">Meta Description</label>
                <p className="mt-1">{formData.seoInfo.metaDescription}</p>
              </div>
            )}
            {formData.seoInfo.keywords && formData.seoInfo.keywords.length > 0 && (
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
            )}
          </div>
        )}
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={previousStep}>
          Previous
        </Button>
        <Button onClick={handleSubmit}>Submit Profile</Button>
      </div>
    </motion.div>
  );
} 