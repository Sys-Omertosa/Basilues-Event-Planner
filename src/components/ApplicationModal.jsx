import React, { useState } from 'react';
import { X, CheckCircle, Send, Users } from 'lucide-react';
import './ApplicationModal.css';

const ApplicationModal = ({ show, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    profession: '',
    organization: '',
    interests: [],
    experience: '',
    whyJoin: '',
    linkedin: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const interestOptions = [
    'Networking',
    'Professional Development',
    'Event Planning',
    'Public Speaking',
    'Leadership',
    'Entrepreneurship',
    'Technology',
    'Arts & Culture'
  ];

  if (!show) return null;

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.profession.trim()) {
      newErrors.profession = 'Profession is required';
    }

    if (formData.interests.length === 0) {
      newErrors.interests = 'Select at least one interest';
    }

    if (!formData.whyJoin.trim()) {
      newErrors.whyJoin = 'This field is required';
    } else if (formData.whyJoin.trim().length < 50) {
      newErrors.whyJoin = 'Please provide at least 50 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
    if (errors.interests) {
      setErrors(prev => ({ ...prev, interests: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    console.log('📝 Membership Application:', {
      timestamp: new Date().toISOString(),
      applicant: formData.fullName,
      data: formData
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      setTimeout(() => {
        handleClose();
      }, 3000);
    }, 2000);
  };

  const handleClose = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      profession: '',
      organization: '',
      interests: [],
      experience: '',
      whyJoin: '',
      linkedin: ''
    });
    setErrors({});
    setIsSubmitting(false);
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="application-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose}>
          <X size={24} />
        </button>

        {isSuccess ? (
          <div className="success-screen">
            <CheckCircle size={64} className="success-icon" />
            <h2 className="success-title">Application Submitted!</h2>
            <p className="success-text">
              Welcome to the BASILEUS Community
            </p>
            <p className="success-subtext">
              We'll review your application and get back to you within 3-5 business days
            </p>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <Users size={32} className="modal-icon" />
              <h2 className="modal-title">Membership Application</h2>
              <p className="modal-subtitle">
                Join an exclusive community of innovators and leaders
              </p>
            </div>

            <form onSubmit={handleSubmit} className="application-form">
              <div className="form-section">
                <h3 className="section-title">Personal Information</h3>
                
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`form-input ${errors.fullName ? 'error' : ''}`}
                    placeholder="John Doe"
                    disabled={isSubmitting}
                  />
                  {errors.fullName && <span className="error-text">{errors.fullName}</span>}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      placeholder="john@example.com"
                      disabled={isSubmitting}
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`form-input ${errors.phone ? 'error' : ''}`}
                      placeholder="+1 (555) 123-4567"
                      disabled={isSubmitting}
                    />
                    {errors.phone && <span className="error-text">{errors.phone}</span>}
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h3 className="section-title">Professional Background</h3>
                
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Profession *</label>
                    <input
                      type="text"
                      name="profession"
                      value={formData.profession}
                      onChange={handleChange}
                      className={`form-input ${errors.profession ? 'error' : ''}`}
                      placeholder="Software Engineer"
                      disabled={isSubmitting}
                    />
                    {errors.profession && <span className="error-text">{errors.profession}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label">Organization</label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Company Name"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">LinkedIn Profile (Optional)</label>
                  <input
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="https://linkedin.com/in/johndoe"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="form-section">
                <h3 className="section-title">Interests & Experience</h3>
                
                <div className="form-group">
                  <label className="form-label">Areas of Interest *</label>
                  <div className="interest-grid">
                    {interestOptions.map(interest => (
                      <button
                        key={interest}
                        type="button"
                        className={`interest-chip ${formData.interests.includes(interest) ? 'active' : ''}`}
                        onClick={() => handleInterestToggle(interest)}
                        disabled={isSubmitting}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                  {errors.interests && <span className="error-text">{errors.interests}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Relevant Experience (Optional)</label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Tell us about your experience in community involvement, leadership, or event participation..."
                    rows="4"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Why do you want to join BASILEUS? * (min. 50 characters)
                  </label>
                  <textarea
                    name="whyJoin"
                    value={formData.whyJoin}
                    onChange={handleChange}
                    className={`form-textarea ${errors.whyJoin ? 'error' : ''}`}
                    placeholder="Share your motivations and what you hope to contribute to the community..."
                    rows="5"
                    disabled={isSubmitting}
                  />
                  <div className="char-count">
                    {formData.whyJoin.length} / 50 characters
                  </div>
                  {errors.whyJoin && <span className="error-text">{errors.whyJoin}</span>}
                </div>
              </div>

              <button 
                type="submit" 
                className="application-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="btn-loading">
                    <div className="btn-spinner"></div>
                    Submitting Application...
                  </span>
                ) : (
                  <>
                    <Send size={20} />
                    Submit Application
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ApplicationModal;
