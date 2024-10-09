// TestimonialCard.jsx
import React from 'react';
import './TestimonialsCard.css';

const TestimonialsCard = ({ img, name, text, bgColor, social }) => {
  return (
    <div className="testimonial-card">
      <p className="testimonial-quote">“</p>
      <p className="testimonial-text">{text}</p>
      <div className="testimonial-info" style={{ backgroundColor: bgColor }}>
        <img src={img} alt={name} className="testimonial-img" />
        <h4>{name}</h4>
        <div className="testimonial-social">
          <a href={social.twitter} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href={social.facebook} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
