'use client';

import React, { useState } from 'react';
import '../../styles/SignUp.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signUp } from '../../lib/authService';
import { auth } from '../../firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export default function SignUp() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [generalError, setGeneralError] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    setGeneralError('');
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.username.trim()) newErrors.username = 'Username is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to the terms';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    setGeneralError('');
    try {
      await signUp(formData.email, formData.password);
      router.push('/dashboard');
    } catch (error) {
      setGeneralError(error.message || 'Signup failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setIsLoading(true);
    setGeneralError('');
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push('/dashboard');
    } catch (error) {
      setGeneralError(error.message || 'Google signup failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-wrapper">
        <div className="signup-header">
          <h1 className="signup-title">Create Your Account</h1>
          <p className="signup-subtitle">Join the the community and start connecting today</p>
        </div>
        <div className="signup-form-container">
          <div className="signup-options">
            <button className="signup-social-button" onClick={handleGoogleSignUp} disabled={isLoading}>
              <span className="signup-social-icon">
                <svg width="20" height="20" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M24 9.5c3.54 0 6.7 1.22 9.19 3.23l6.85-6.85C35.82 2.36 30.28 0 24 0 14.82 0 6.71 5.48 2.69 13.44l7.98 6.2C12.13 13.13 17.62 9.5 24 9.5z"/><path fill="#34A853" d="M46.1 24.55c0-1.64-.15-3.22-.42-4.74H24v9.01h12.42c-.54 2.9-2.18 5.36-4.65 7.04l7.18 5.59C43.98 37.13 46.1 31.3 46.1 24.55z"/><path fill="#FBBC05" d="M10.67 28.65c-1.01-2.97-1.01-6.18 0-9.15l-7.98-6.2C.64 17.1 0 20.47 0 24c0 3.53.64 6.9 1.77 10.05l7.98-6.2z"/><path fill="#EA4335" d="M24 48c6.28 0 11.56-2.08 15.41-5.66l-7.18-5.59c-2.01 1.35-4.59 2.15-8.23 2.15-6.38 0-11.87-3.63-14.33-8.89l-7.98 6.2C6.71 42.52 14.82 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></g></svg>
              </span>
              {isLoading ? 'Signing up...' : 'Continue with Google'}
            </button>
            <div className="signup-divider">
              <span className="signup-divider-text">or sign up with email</span>
            </div>
          </div>
          <form className="signup-form" onSubmit={handleSubmit} autoComplete="off">
            <div className="form-group">
              <label htmlFor="fullName" className="form-label">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="form-input"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleInputChange}
                disabled={isLoading}
                style={{ width: '100%' }}
              />
              {errors.fullName && <span className="error-message">{errors.fullName}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className="form-input"
                placeholder="Choose a username"
                value={formData.username}
                onChange={handleInputChange}
                disabled={isLoading}
                style={{ width: '100%' }}
              />
              {errors.username && <span className="error-message">{errors.username}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                disabled={isLoading}
                style={{ width: '100%' }}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-input"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleInputChange}
                disabled={isLoading}
                style={{ width: '100%' }}
              />
              <p className="form-hint">Must be at least 8 characters with letters and numbers</p>
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="form-input"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                disabled={isLoading}
                style={{ width: '100%' }}
              />
              {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
            </div>
            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                className="form-checkbox"
                checked={formData.agreeTerms}
                onChange={handleInputChange}
                disabled={isLoading}
              />
              <label htmlFor="agreeTerms" className="checkbox-label">
                I agree to the <a href="#" className="form-link">Terms of Service</a> and <a href="#" className="form-link">Privacy Policy</a>
              </label>
              {errors.agreeTerms && <span className="error-message">{errors.agreeTerms}</span>}
            </div>
            {generalError && <div className="error-message">{generalError}</div>}
            <button className="signup-button" type="submit" disabled={isLoading} style={{ width: '100%' }}>
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>
          <p className="signup-login-prompt">
            Already have an account? <Link href="../login" className="form-link">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

