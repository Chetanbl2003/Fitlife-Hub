import React from "react";
import "../styles/Testimonials.css";

const testimonials = [
  {
    name: "Aarav Sharma",
    review: "This gym has changed my life! The trainers are fantastic, and the environment is super motivating.",
  },
  {
    name: "Priya Kapoor",
    review: "I love the group classes and the personal trainer sessions. Highly recommended!",
  },
  {
    name: "Rahul Mehta",
    review: "The best gym with top-class facilities. Membership is totally worth it!",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h1 className="testimonials-heading">What Our Members Say</h1>

      <div className="testimonial-cards">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-text">"{testimonial.review}"</p>
            <h3 className="testimonial-name">- {testimonial.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
