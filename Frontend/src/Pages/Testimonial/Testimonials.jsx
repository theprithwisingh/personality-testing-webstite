// Testimonials.jsx
import React from 'react';
import TestimonialsCard from '../../Components/TestimonalsCard/TestimonialsCard';
import './Testimonials.css'

const testimonialsData = [

  {
    name: 'Lance Jarvis',
    role: 'Customer',
    img: 'https://dummyimage.com/100x100/000/fff',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat, sapien vitae congue fringilla.',
    bgColor: '#43a047',
    social: {
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com',
    },
  },

  {
    name: 'Lance Jarvis',
    role: 'Customer',
    img: 'https://dummyimage.com/100x100/000/fff',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat, sapien vitae congue fringilla.',
    bgColor: '#43a047',
    social: {
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Lance Jarvis',
    role: 'Customer',
    img: 'https://dummyimage.com/100x100/000/fff',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat, sapien vitae congue fringilla.',
    bgColor: '#43a047',
    social: {
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Ericka Lynda',
    role: 'Customer',
    img: 'https://dummyimage.com/100x100/000/fff',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat, sapien vitae congue fringilla.',
    bgColor: '#7e57c2',
    social: {
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    name: 'Neil Wilford',
    role: 'Customer',
    img: 'https://dummyimage.com/100x100/000/fff',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat, sapien vitae congue fringilla.',
    bgColor: '#1e88e5',
    social: {
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com',
    },
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h2>Customer reviews</h2>
      <p>What our customers are saying.</p>
      <div className="testimonials-grid">
        {testimonialsData.map((testimonial, index) => (
          <TestimonialsCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
