import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
    return (
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-modern">
            <div className="footer-brand">
              <h3 className="footer-logo">TribeZone</h3>
              <p className="footer-tagline">Find your Tribe, Own your Zone.</p>
              <div className="footer-social">
                <a href="https://youtube.com" className="social-link" aria-label="Youtube">
                  <img src='/resources/icons8-youtube-50.png'  className="social-icon"></img>
                </a>
                <a href="https://x.com" className="social-link" aria-label="Twitter">
                  <img  src='/resources/icons8-x-50.png'className="social-icon"></img>
                </a>
                <a href="https://www.instagram.com/" className="social-link" aria-label="Instagram">
                  <img  src='/resources/icons8-instagram-50.png' className="social-icon"></img>
                </a>
                <a href="http://linkedin.com/" className="social-link" aria-label="LinkedIn">
                  <img src='/resources/icons8-linkedin-50.png' className="social-icon"></img>
                </a>
              </div>
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
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">© 2025 TribeZone. All rights reserved.</p>
            <p className="footer-credit">Made  for tribes worldwide</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
