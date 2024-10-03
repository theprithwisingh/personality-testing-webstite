import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h4>Products</h4>
                    <ul>
                        <li><a href="#premium">Premium Product</a></li>
                        <li><a href="#team">Team Assessments</a></li>
                        <li><a href="#specialized-tests">Specialized Tests</a></li>
                        <li><a href="#testimonials">Testimonials and Resume</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="#test">Personality Test</a></li>
                        <li><a href="#types">Personality Types</a></li>
                        <li><a href="#articles">Articles</a></li>
                        <li><a href="#framework">Our Framework</a></li>
                        <li><a href="#surveys">Surveys</a></li>
                        <li><a href="#community">Community</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Help</h4>
                    <ul>
                        <li><a href="#contact">Contact Us</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#language">Change Language</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Our Other Creations</h4>
                    <ul>
                        <li><a href="#leadership">Personalities Test</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>©2024 MindMatrix Analytica</p>
                <ul>
                    <li><a href="#terms">Terms & Conditions</a></li>
                    <li><a href="#privacy">Privacy Policy</a></li>
                </ul>
                <div className="social-icons">
                    <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
                    <a href="#twitter"><i className="fab fa-twitter"></i></a>
                    <a href="#instagram"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
