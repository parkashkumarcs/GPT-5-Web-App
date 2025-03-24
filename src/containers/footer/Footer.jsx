import React from 'react';
import gptLogo from '../../assets/ChatGPT-Logo.png';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <img src={gptLogo} alt="GPT Logo" className="footer-logo" />
          <h1 className="txt__gradient-clr">
            Ready to Shape the Future Before Others?
          </h1>
          <button className="footer-button">Request Early Access</button>
        </div>

        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li>Blog</li>
              <li>Documentation</li>
              <li>API Reference</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>K12 182 DK</li>
              <li>info@payme.net</li>
              <li>0340-561118</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 GPT-5. All rights reserved | Designed by Parkash Kumar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
