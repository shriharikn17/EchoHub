import React from 'react';
import '../styles/SignUp.css'
export default function SignUp () {
  return (
    <div className="signup-container">
      <div className="signup-wrapper">
        <div className="signup-header">
          <h1 className="signup-title">Create Your Account</h1>
          <p className="signup-subtitle">Join the the community and start connecting today</p>
        </div>

        <div className="signup-form-container">
          <div className="signup-options">
            <button className="signup-social-button">
              <span className="signup-social-icon">G</span>
              Continue with Google
            </button>
            <button className="signup-social-button">
              <span className="signup-social-icon">X</span>
              Continue with X
            </button>
            <div className="signup-divider">
              <span className="signup-divider-text">or sign up with email</span>
            </div>
          </div>

          <div className="signup-form">
            <div className="form-group">
              <label htmlFor="fullName" className="form-label">Full Name</label>
              <input
                type="text"
                id="fullName"
                className="form-input"
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                id="username"
                className="form-input"
                placeholder="Choose a username"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="Create a password"
              />
              <p className="form-hint">Must be at least 8 characters with letters and numbers</p>
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                className="form-input"
                placeholder="Confirm your password"
              />
            </div>

            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="agreeTerms"
                className="form-checkbox"
              />
              <label htmlFor="agreeTerms" className="checkbox-label">
                I agree to the <a href="#" className="form-link">Terms of Service</a> and <a href="#" className="form-link">Privacy Policy</a>
              </label>
            </div>

            <button className="signup-button">
              Create Account
            </button>
          </div>

          <p className="signup-login-prompt">
            Already have an account? <a href="#" className="form-link">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

// export default SignUp;