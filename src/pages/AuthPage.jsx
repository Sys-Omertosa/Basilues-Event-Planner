import React, { useState } from 'react';
import { Crown, Mail, Lock, User, CheckCircle, ArrowRight } from 'lucide-react';
import './AuthPage.css';

const AuthPage = ({ onSuccess, onNavigate }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (isSignUp) {
      if (!formData.name) {
        newErrors.name = 'Name is required';
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    console.log('🔐 Auth Request:', {
      action: isSignUp ? 'Sign Up' : 'Sign In',
      email: formData.email,
      name: formData.name,
      timestamp: new Date().toISOString()
    });
    
    setTimeout(() => {
      setIsSubmitting(false);
      if (onSuccess) {
        onSuccess({
          name: formData.name || formData.email.split('@')[0],
          email: formData.email
        });
      }
      onNavigate('membership');
    }, 1500);
  };

  const handleGoogleAuth = () => {
    setIsSubmitting(true);
    
    // Simulate Google OAuth
    console.log('🔐 Google OAuth Request:', {
      provider: 'Google',
      timestamp: new Date().toISOString()
    });
    
    setTimeout(() => {
      setIsSubmitting(false);
      if (onSuccess) {
        onSuccess({
          name: 'Demo User',
          email: 'demo@basileus.com',
          provider: 'google'
        });
      }
      onNavigate('membership');
    }, 1500);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-left">
          <div className="auth-brand">
            <Crown size={48} className="brand-icon" />
            <h1 className="brand-title">BASILEUS</h1>
            <p className="brand-tagline">Join the Elite Community</p>
          </div>

          <div className="auth-features">
            <div className="feature-item">
              <div className="feature-icon">
                <CheckCircle size={24} />
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Exclusive Events</h3>
                <p className="feature-description">
                  Access premium networking events and VIP experiences
                </p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <CheckCircle size={24} />
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Elite Network</h3>
                <p className="feature-description">
                  Connect with distinguished professionals and industry leaders
                </p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <CheckCircle size={24} />
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Premium Benefits</h3>
                <p className="feature-description">
                  Enjoy exclusive perks, priority access, and personalized service
                </p>
              </div>
            </div>
          </div>

          <div className="auth-stats">
            <div className="stat-item">
              <div className="stat-value">15,000+</div>
              <div className="stat-label">Members</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">500+</div>
              <div className="stat-label">Events/Month</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">50+</div>
              <div className="stat-label">Locations</div>
            </div>
          </div>
        </div>

        <div className="auth-right">
          <div className="auth-card">
            <div className="auth-header">
              <h2 className="auth-title">
                {isSignUp ? 'Create Your Account' : 'Welcome Back'}
              </h2>
              <p className="auth-subtitle">
                {isSignUp 
                  ? 'Start your journey with BASILEUS' 
                  : 'Sign in to access your account'}
              </p>
            </div>

            <button 
              className="google-auth-btn" 
              onClick={handleGoogleAuth}
              disabled={isSubmitting}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M19.6 10.227c0-.709-.064-1.39-.182-2.045H10v3.868h5.382a4.6 4.6 0 01-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.35z" fill="#4285F4"/>
                <path d="M10 20c2.7 0 4.964-.895 6.618-2.423l-3.232-2.509c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.595-4.123H1.064v2.59A9.996 9.996 0 0010 20z" fill="#34A853"/>
                <path d="M4.405 11.9c-.2-.6-.314-1.24-.314-1.9 0-.66.114-1.3.314-1.9V5.51H1.064A9.996 9.996 0 000 10c0 1.614.386 3.14 1.064 4.49l3.34-2.59z" fill="#FBBC05"/>
                <path d="M10 3.977c1.468 0 2.786.505 3.823 1.496l2.868-2.868C14.959.99 12.695 0 10 0 6.09 0 2.71 2.24 1.064 5.51l3.34 2.59C5.19 5.736 7.395 3.977 10 3.977z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>

            <div className="divider">
              <span>OR</span>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
              {isSignUp && (
                <div className="form-group">
                  <label className="form-label">
                    <User size={16} />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    disabled={isSubmitting}
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>
              )}

              <div className="form-group">
                <label className="form-label">
                  <Mail size={16} />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  disabled={isSubmitting}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">
                  <Lock size={16} />
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className={`form-input ${errors.password ? 'error' : ''}`}
                  disabled={isSubmitting}
                />
                {errors.password && <span className="error-text">{errors.password}</span>}
              </div>

              {isSignUp && (
                <div className="form-group">
                  <label className="form-label">
                    <Lock size={16} />
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
                    disabled={isSubmitting}
                  />
                  {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
                </div>
              )}

              {!isSignUp && (
                <div className="form-footer">
                  <a href="#" className="forgot-link">Forgot password?</a>
                </div>
              )}

              <button type="submit" className="auth-submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="btn-loading">
                    <div className="btn-spinner"></div>
                    Processing...
                  </span>
                ) : (
                  <>
                    {isSignUp ? 'Create Account' : 'Sign In'}
                    <ArrowRight size={20} />
                  </>
                )}
              </button>
            </form>

            <div className="auth-switch">
              {isSignUp ? (
                <>
                  Already have an account?{' '}
                  <button 
                    type="button" 
                    className="switch-btn"
                    onClick={() => setIsSignUp(false)}
                  >
                    Sign In
                  </button>
                </>
              ) : (
                <>
                  Don't have an account?{' '}
                  <button 
                    type="button" 
                    className="switch-btn"
                    onClick={() => setIsSignUp(true)}
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
