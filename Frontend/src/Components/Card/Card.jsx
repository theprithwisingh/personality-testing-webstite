import React from 'react';
import './Card.css';

const images = [
    { id: 1, src: 'https://picsum.photos/600/600', text: ' Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content lorem Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content lorem.' },
    { id: 2, src: 'https://picsum.photos/600/600', text: ' Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.' },
    { id: 3, src: 'https://picsum.photos/600/600', text: ' Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.' },
  ];

const Card = () => {
    return (
        <div className="image-hover-grid">
          {images.map((image) => (
            <div key={image.id} className="hover-image-container">
              <div className="hover-image" style={{ backgroundImage: `url(${image.src})` }}>
                <div className="hover-text">{image.text}</div>
              </div>
            </div>
          ))}
        </div>
      );
    };

export default Card;
