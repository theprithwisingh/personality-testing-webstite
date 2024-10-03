import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Logos</h2>
      </div>

      {/* Center: Menu Links */}
      <ul className={isMobile ? "nav-links-mobile show-mobile-menu" : "nav-links"}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Right: Authentication Buttons */}
      <div className="auth-buttons">
        <ul className={isMobile ? "auth-links-mobile show-mobile-menu" : "auth-links"}>
          <li><a href="#login">Log In</a></li>
          <li><a href="#signup">Sign Up</a></li>
        </ul>
      </div>

      {/* Mobile Menu Icon */}
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
    </nav>
  );
};

export default Navbar;
