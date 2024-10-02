import React from 'react';
import './LandingPage.css';
import Screenshot from './bg-1.jpeg';

const LandingPage = () => {
  return (
    <div className="image-container">
      <img src={Screenshot} alt="Personality Test Banner" className="responsive-image" />
      <div className="text-content">
        <h1>Discover Your True Personality</h1>
        <p>Unlock the secrets to your unique strengths, behaviors, and preferences with our in-depth personality test.</p>
        <button className="test-button">Take the Free Test</button>
        <p> Unlock the best version of yourself. Take the test in under 10 minutes!</p>
      </div>
    </div>
  );
};

export default LandingPage;
