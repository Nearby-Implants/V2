import { useForm } from '@/context/FormContext';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { animations } from '@/config/theme';
import Image from 'next/image';

export function Step10Preview() {
  const { formData, previousStep, submitForm } = useForm();

  const formatTime = (time: string) => {
    if (!time) return 'Closed';
    return new Date(`2000-01-01T${time}`).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
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
              <p className="mt-1">{formData.basicInfo.name}</p>
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
              <p className="mt-1">{formData.contactInfo.phone}</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Specialties</label>
              <div className="mt-1 flex flex-wrap gap-2">
                {formData.servicesInfo.specialties.map((specialty, index) => (
                  <span key={index} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Technologies</label>
              <div className="mt-1 flex flex-wrap gap-2">
                {formData.servicesInfo.technologies.map((tech, index) => (
                  <span key={index} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm">
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
              <label className="block text-sm font-medium text-muted-foreground">Price Range</label>
              <p className="mt-1">
                ${formData.pricingInfo.priceRange.min} - ${formData.pricingInfo.priceRange.max}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Insurance Accepted</label>
              <div className="mt-1 flex flex-wrap gap-2">
                {formData.pricingInfo.insuranceAccepted.map((insurance, index) => (
                  <span key={index} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {insurance}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Clinic Features */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Clinic Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Operating Hours</label>
              <div className="mt-1 space-y-1">
                {Object.entries(formData.clinicFeatures.operatingHours).map(([day, hours]) => (
                  <p key={day} className="text-sm">
                    {day.charAt(0).toUpperCase() + day.slice(1)}: {formatTime(hours.open)} - {formatTime(hours.close)}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Languages</label>
              <div className="mt-1 flex flex-wrap gap-2">
                {formData.clinicFeatures.languages.map((language, index) => (
                  <span key={index} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {language}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Amenities</label>
              <div className="mt-1 flex flex-wrap gap-2">
                {formData.clinicFeatures.amenities.map((amenity, index) => (
                  <span key={index} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {amenity}
                  </span>
                ))}
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
                {formData.seoInfo.keywords.map((keyword, index) => (
                  <span key={index} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={previousStep}>
          Previous
        </Button>
        <Button onClick={submitForm}>Submit Profile</Button>
      </div>
    </motion.div>
  );
} 