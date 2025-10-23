import React from "react";

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Alice",
      comment: "My kids love these toys! Great quality.",
      rating: 5,
    },
    {
      id: 2,
      name: "John",
      comment: "Fast delivery and excellent service.",
      rating: 4,
    },
    {
      id: 3,
      name: "Sophia",
      comment: "Bright and fun toys, highly recommend!",
      rating: 5,
    },
  ];
  return (
    <section className="py-12 bg-pink-50" data-aos="zoom-in-left"  data-aos-duration="3000">
      <h2 className="text-3xl font-bold text-center mb-8 text-pink-600">Customer Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4">"{review.comment}"</p>
            <div className="flex items-center justify-between">
              <span className="font-semibold">{review.name}</span>
              <span>{"⭐".repeat(review.rating)}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
