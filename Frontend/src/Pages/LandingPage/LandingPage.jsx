import React from 'react';
import './LandingPage.css';
import Screenshot from './bg-1.jpeg';

const LandingPage = () => {
  return (
    <div className="image-container">
      <img src={Screenshot} alt="Personality Test Banner" className="responsive-image" />
      <div className="text-content">
        <h1>It's so incredible to finally be understood.</h1>
        <p>Only 10 minutes to get a "freakishly accurate" description of who you are and why you do things the way you do.</p>
        <button className="cta-button">Take the Test</button>
      </div>
    </div>
  );
};

export default LandingPage;
