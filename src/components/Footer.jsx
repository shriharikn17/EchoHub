import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
    return (
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3 className="footer-logo">TribeZone</h3>
              <p className="footer-tagline">Find your Tribe, Own your Zone.</p>
              <div className="footer-social">
                <a href="#" className="social-link" aria-label="Facebook">
                  <span className="social-icon"></span>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <span className="social-icon"></span>
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <span className="social-icon"></span>
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <span className="social-icon"></span>
                </a>
              </div>
            </div>
            
            <div className="footer-links">
              <h4 className="footer-title">Navigate</h4>
              <ul className="footer-menu">
                <li><a href="#">Home</a></li>
                
                <li><a href="#">Communities</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h4 className="footer-title">Legal</h4>
              <ul className="footer-menu">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookie Policy</a></li>
                <li><a href="#">Community Guidelines</a></li>
              </ul>
            </div>
            
            <div className="footer-newsletter">
              <h4 className="footer-title">Stay Updated</h4>
              <p className="footer-newsletter-text">Subscribe to our newsletter for updates and news</p>
              <div className="footer-subscribe">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="footer-input" 
                />
                <button className="footer-button">Subscribe</button>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p className="footer-copyright">© 2025 TribeZone. All rights reserved.</p>
            <p className="footer-credit">Made with ❤️ for communities worldwide</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
