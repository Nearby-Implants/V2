import { useForm } from '@/context/FormContext';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { animations } from '@/config/theme';
import { useState } from 'react';

export function Step5Reviews() {
  const { formData, updateFormData, nextStep, previousStep } = useForm();
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    comment: '',
  });

  const handleAddReview = () => {
    if (newReview.name.trim() && newReview.comment.trim()) {
      updateFormData('reviewsInfo', {
        ...formData.reviewsInfo,
        testimonials: [...formData.reviewsInfo.testimonials, { ...newReview, date: new Date().toISOString() }],
      });
      setNewReview({ name: '', rating: 5, comment: '' });
    }
  };

  const handleRemoveReview = (index: number) => {
    updateFormData('reviewsInfo', {
      ...formData.reviewsInfo,
      testimonials: formData.reviewsInfo.testimonials.filter((_, i) => i !== index),
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
        <h2 className="text-2xl font-bold text-primary">Reviews & Testimonials</h2>
        <p className="text-muted-foreground">
          Add your patient reviews and testimonials to build trust.
        </p>
      </div>

      <div className="space-y-8">
        {/* Overall Rating Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Overall Rating</h3>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() =>
                    updateFormData('reviewsInfo', {
                      ...formData.reviewsInfo,
                      overallRating: star,
                    })
                  }
                  className="text-2xl focus:outline-none"
                >
                  {star <= formData.reviewsInfo.overallRating ? '★' : '☆'}
                </button>
              ))}
            </div>
            <span className="text-muted-foreground">
              ({formData.reviewsInfo.overallRating}/5)
            </span>
          </div>
        </div>

        {/* Review Count Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Total Reviews</h3>
          <input
            type="number"
            min="0"
            value={formData.reviewsInfo.totalReviews || ''}
            onChange={(e) =>
              updateFormData('reviewsInfo', {
                ...formData.reviewsInfo,
                totalReviews: Number(e.target.value),
              })
            }
            className="w-32 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Number of reviews"
          />
        </div>

        {/* Testimonials Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Testimonials</h3>
          <div className="space-y-4">
            {formData.reviewsInfo.testimonials.map((review, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg space-y-2 relative"
              >
                <button
                  onClick={() => handleRemoveReview(index)}
                  className="absolute top-2 right-2 text-muted-foreground hover:text-primary"
                >
                  ×
                </button>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{review.name}</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-yellow-400">
                        {star <= review.rating ? '★' : '☆'}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground">{review.comment}</p>
                <span className="text-sm text-muted-foreground">
                  {new Date(review.date).toLocaleDateString()}
                </span>
              </div>
            ))}
          </div>

          {/* Add New Testimonial */}
          <div className="space-y-4 p-4 border rounded-lg">
            <h4 className="font-medium">Add New Testimonial</h4>
            <div className="space-y-4">
              <input
                type="text"
                value={newReview.name}
                onChange={(e) =>
                  setNewReview({ ...newReview, name: e.target.value })
                }
                placeholder="Patient Name"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <div className="flex items-center space-x-2">
                <span className="text-muted-foreground">Rating:</span>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() =>
                      setNewReview({ ...newReview, rating: star })
                    }
                    className="text-2xl focus:outline-none"
                  >
                    {star <= newReview.rating ? '★' : '☆'}
                  </button>
                ))}
              </div>
              <textarea
                value={newReview.comment}
                onChange={(e) =>
                  setNewReview({ ...newReview, comment: e.target.value })
                }
                placeholder="Patient's testimonial"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                rows={3}
              />
              <Button onClick={handleAddReview} variant="outline">
                Add Testimonial
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