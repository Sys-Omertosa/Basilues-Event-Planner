import React, { useState } from 'react';
import { X, CheckCircle, Send, Building2 } from 'lucide-react';
import './InquiryModal.css';

const InquiryModal = ({ show, onClose, type = 'inquiry' }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    interest: type === 'inquiry' ? 'sponsorship' : 'consultation',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!show) return null;

  const validateForm = () => {
    const newErrors = {};

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    if (!formData.contactName.trim()) {
      newErrors.contactName = 'Contact name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    console.log('📧 Inquiry Submission:', {
      type: type === 'inquiry' ? 'Sponsor Inquiry' : 'Consultation Request',
      timestamp: new Date().toISOString(),
      data: formData
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      setTimeout(() => {
        handleClose();
      }, 2500);
    }, 1500);
  };

  const handleClose = () => {
    setFormData({
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      interest: type === 'inquiry' ? 'sponsorship' : 'consultation',
      message: ''
    });
    setErrors({});
    setIsSubmitting(false);
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="inquiry-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose}>
          <X size={24} />
        </button>

        {isSuccess ? (
          <div className="success-screen">
            <CheckCircle size={64} className="success-icon" />
            <h2 className="success-title">
              {type === 'inquiry' ? 'Inquiry Sent!' : 'Consultation Requested!'}
            </h2>
            <p className="success-text">
              Thank you for your interest in BASILEUS
            </p>
            <p className="success-subtext">
              Our team will contact you within 24 hours
            </p>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <Building2 size={32} className="modal-icon" />
              <h2 className="modal-title">
                {type === 'inquiry' ? 'Sponsor Inquiry' : 'Schedule Consultation'}
              </h2>
              <p className="modal-subtitle">
                {type === 'inquiry' 
                  ? 'Partner with BASILEUS to elevate your brand'
                  : 'Let\'s discuss how we can collaborate'
                }
              </p>
            </div>

            <form onSubmit={handleSubmit} className="inquiry-form">
              <div className="form-group">
                <label className="form-label">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={`form-input ${errors.companyName ? 'error' : ''}`}
                  placeholder="Your Company"
                  disabled={isSubmitting}
                />
                {errors.companyName && <span className="error-text">{errors.companyName}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">Contact Name</label>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  className={`form-input ${errors.contactName ? 'error' : ''}`}
                  placeholder="John Doe"
                  disabled={isSubmitting}
                />
                {errors.contactName && <span className="error-text">{errors.contactName}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    placeholder="john@company.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Phone</label>
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

              <div className="form-group">
                <label className="form-label">Interest</label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="form-input"
                  disabled={isSubmitting}
                >
                  {type === 'inquiry' ? (
                    <>
                      <option value="sponsorship">Sponsorship Opportunities</option>
                      <option value="partnership">Strategic Partnership</option>
                      <option value="collaboration">Event Collaboration</option>
                      <option value="other">Other</option>
                    </>
                  ) : (
                    <>
                      <option value="consultation">General Consultation</option>
                      <option value="custom-package">Custom Package</option>
                      <option value="corporate-event">Corporate Event</option>
                      <option value="long-term">Long-term Partnership</option>
                    </>
                  )}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`form-textarea ${errors.message ? 'error' : ''}`}
                  placeholder="Tell us about your interests and goals..."
                  rows="5"
                  disabled={isSubmitting}
                />
                {errors.message && <span className="error-text">{errors.message}</span>}
              </div>

              <button 
                type="submit" 
                className="inquiry-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="btn-loading">
                    <div className="btn-spinner"></div>
                    Sending...
                  </span>
                ) : (
                  <>
                    <Send size={20} />
                    Send Inquiry
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

export default InquiryModal;
