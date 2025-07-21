import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
    return (
      <div className="ft-section">
        <div className="ft-container">
          <div className="ft-modern">
            <div className="ft-brand">
              <h3 className="ft-logo">TribeZone</h3>
              <p className="ft-tagline">Find your Tribe, Own your Zone.</p>
              <div className="ft-social">
                <a href="https://youtube.com" className="ft-social-link" aria-label="Youtube">
                  <img src='/resources/icons8-youtube-50.png'  className="ft-social-icon"></img>
                </a>
                <a href="https://x.com" className="ft-social-link" aria-label="Twitter">
                  <img  src='/resources/icons8-x-50.png'className="ft-social-icon"></img>
                </a>
                <a href="https://www.instagram.com/" className="ft-social-link" aria-label="Instagram">
                  <img  src='/resources/icons8-instagram-50.png' className="ft-social-icon"></img>
                </a>
                <a href="http://linkedin.com/" className="ft-social-link" aria-label="LinkedIn">
                  <img src='/resources/icons8-linkedin-50.png' className="ft-social-icon"></img>
                </a>
              </div>
            </div>
            <div className="ft-links">
              <h4 className="ft-title">Legal</h4>
              <ul className="ft-menu">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookie Policy</a></li>
                <li><a href="#">Community Guidelines</a></li>
              </ul>
            </div>
          </div>
          <div className="ft-bottom">
            <p className="ft-copyright">© 2025 TribeZone. All rights reserved.</p>
            <p className="ft-credit">Made  for tribes worldwide</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
