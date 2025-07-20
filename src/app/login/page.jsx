'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
// Import your CSS file here - replace with your actual path
// import './login.css';
import '../../styles/Login.css'
import Link from 'next/link';
const LoginPage = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        // Email validation
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsLoading(true);
        
        try {
            // Replace this with your actual login logic
            console.log('Login attempt:', formData);
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Handle successful login here - replace '/dashboard' with your actual path
            router.push('/dashboard');
            
        } catch (error) {
            console.error('Login error:', error);
            setErrors({ general: 'Login failed. Please try again.' });
        } finally {
            setIsLoading(false);
        }
    };

    const handleForgotPassword = (e) => {
        e.preventDefault();
        // Add your forgot password navigation - replace '/forgot-password' with your actual path
        router.push('/forgot-password');
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        // Add your sign up navigation - replace '/signup' with your actual path
        router.push('/signup');
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <h1 className="login-title">Welcome Back</h1>
                    <p className="login-subtitle">Sign in to your account to continue</p>
                </div>

                {errors.general && (
                    <div className="error-message">
                        {errors.general}
                    </div>
                )}

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className={`form-input ${errors.email ? 'error' : ''}`}
                            placeholder="Enter your email address"
                            value={formData.email}
                            onChange={handleInputChange}
                            disabled={isLoading}
                        />
                        {errors.email && (
                            <span className="error-message">{errors.email}</span>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className={`form-input ${errors.password ? 'error' : ''}`}
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleInputChange}
                            disabled={isLoading}
                        />
                        {errors.password && (
                            <span className="error-message">{errors.password}</span>
                        )}
                    </div>

                    <div className="checkbox-group">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            name="rememberMe"
                            className="checkbox-input"
                            checked={formData.rememberMe}
                            onChange={handleInputChange}
                            disabled={isLoading}
                        />
                        <label htmlFor="rememberMe" className="checkbox-label">
                            Remember me
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="login-button"
                        disabled={isLoading}
                    >
                        {isLoading && <span className="loading-spinner"></span>}
                        {isLoading ? 'Signing In...' : 'Sign In'}
                    </button>
                </form>

                <div className="forgot-password">
                    <a href="#" onClick={handleForgotPassword}>
                        Forgot your password?
                    </a>
                </div>

                <div className="signup-link">
                    <p>
                        Don't have an account?{' '}
                        <Link href="../signup" onClick={handleSignUp}>
                            Sign up here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;