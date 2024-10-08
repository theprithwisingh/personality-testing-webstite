import React from 'react';
import './Step.css'
const Step = () => {
  return (
    <div className="test-container">
      <div className="test-content">
        <div className="test-step">
        <img src="https://dummyimage.com/100x100/000/fff" alt="Test" className="personality-image" />
          <h3>Complete the Test</h3>
          <p>Be yourself and answer honestly to find out your personality type.</p>
        </div>
        <div className="test-step">
        <img src="https://dummyimage.com/100x100/000/fff" alt="Test" className="personality-image" />
          <h3>View Detailed Results</h3>
          <p>Learn how your personality type influences many areas of your life.</p>
        </div>
        <div className="test-step">
        <img src="https://dummyimage.com/100x100/000/fff" alt="Test" className="personality-image" />
          <h3>Unlock Your Potential</h3>
          <p>Grow into the person you want to be with your optional Premium Suite.</p>
        </div>
      </div>
    </div>
  );
};

export default Step;
