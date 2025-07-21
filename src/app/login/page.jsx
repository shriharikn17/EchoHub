'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../../styles/Login.css';
import Link from 'next/link';
import { signIn, resetPassword } from '../../lib/authService';
import { auth } from '../../firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const LoginPage = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [showReset, setShowReset] = useState(false);
    const [resetEmail, setResetEmail] = useState('');
    const [resetMessage, setResetMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
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
            await signIn(formData.email, formData.password);
            router.push('/dashboard');
        } catch (error) {
            setErrors({ general: error.message || 'Login failed. Please try again.' });
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        setIsLoading(true);
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
            router.push('/dashboard');
        } catch (error) {
            setErrors({ general: error.message || 'Google login failed. Please try again.' });
        } finally {
            setIsLoading(false);
        }
    };

    const handleForgotPassword = (e) => {
        e.preventDefault();
        setShowReset(true);
        setResetMessage('');
    };

    const handleResetEmailChange = (e) => {
        setResetEmail(e.target.value);
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setResetMessage('');
        if (!resetEmail) {
            setResetMessage('Please enter your email address.');
            return;
        }
        try {
            await resetPassword(resetEmail);
            setResetMessage('Password reset email sent! Check your inbox.');
        } catch (error) {
            setResetMessage(error.message || 'Failed to send reset email.');
        }
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        router.push('/signup');
    };

    return (
        <div className="lgn-container">
            <div className="lgn-card">
                <div className="lgn-header">
                    <h1 className="lgn-title">Welcome Back</h1>
                    <p className="lgn-subtitle">Sign in to your account to continue</p>
                </div>
                {errors.general && (
                    <div className="lgn-error-message">
                        {errors.general}
                    </div>
                )}
                <form className="lgn-form" onSubmit={handleSubmit}>
                    <div className="lgn-form-group">
                        <label htmlFor="email" className="lgn-form-label">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className={`lgn-form-input ${errors.email ? 'error' : ''}`}
                            placeholder="Enter your email address"
                            value={formData.email}
                            onChange={handleInputChange}
                            disabled={isLoading}
                        />
                        {errors.email && (
                            <span className="lgn-error-message">{errors.email}</span>
                        )}
                    </div>
                    <div className="lgn-form-group">
                        <label htmlFor="password" className="lgn-form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className={`lgn-form-input ${errors.password ? 'error' : ''}`}
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleInputChange}
                            disabled={isLoading}
                        />
                        {errors.password && (
                            <span className="lgn-error-message">{errors.password}</span>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="lgn-button"
                        disabled={isLoading}
                    >
                        {isLoading && <span className="lgn-loading-spinner"></span>}
                        {isLoading ? 'Signing In...' : 'Sign In'}
                    </button>
                </form>
                <button
                    className="lgn-button google-login"
                    onClick={handleGoogleSignIn}
                    disabled={isLoading}
                    style={{ marginTop: '1rem', background: '#fff', color: '#333', border: '1px solid #ccc' }}
                >
                    {isLoading ? 'Signing In...' : 'Sign in with Google'}
                </button>
                <div className="lgn-forgot-password">
                    <a href="#" onClick={handleForgotPassword}>
                        Forgot your password?
                    </a>
                </div>
                {showReset && (
                    <form className="lgn-reset-form" onSubmit={handleResetPassword} style={{ marginTop: '1rem' }}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={resetEmail}
                            onChange={handleResetEmailChange}
                            className="lgn-form-input"
                        />
                        <button type="submit" className="lgn-button" style={{ marginTop: '0.5rem' }}>
                            Send Reset Email
                        </button>
                        {resetMessage && <div className="lgn-error-message">{resetMessage}</div>}
                    </form>
                )}
                <div className="lgn-signup-link">
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