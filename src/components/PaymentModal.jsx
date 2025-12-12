import { useState } from 'react';
import { X, CheckCircle, CreditCard, Lock } from 'lucide-react';
import './PaymentModal.css';

function PaymentModal({ show, isOpen, onClose, plan, planDetails }) {
  const [step, setStep] = useState(1); // 1: Payment Info, 2: Processing, 3: Success
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    billingAddress: '',
    city: '',
    zipCode: ''
  });
  const [errors, setErrors] = useState({});

  const activePlan = plan || planDetails;

  if (!show && !isOpen) return null;

  const handleChange = (e) => {
    let { name, value } = e.target;
    
    // Format card number
    if (name === 'cardNumber') {
      value = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
      if (value.length > 19) value = value.slice(0, 19);
    }
    
    // Format expiry date
    if (name === 'expiryDate') {
      value = value.replace(/\D/g, '');
      if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4);
      }
      if (value.length > 5) value = value.slice(0, 5);
    }
    
    // Format CVV
    if (name === 'cvv') {
      value = value.replace(/\D/g, '').slice(0, 4);
    }
    
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.cardNumber || formData.cardNumber.replace(/\s/g, '').length < 13) {
      newErrors.cardNumber = 'Invalid card number';
    }
    
    if (!formData.cardName) {
      newErrors.cardName = 'Cardholder name is required';
    }
    
    if (!formData.expiryDate || !/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
      newErrors.expiryDate = 'Invalid expiry date (MM/YY)';
    }
    
    if (!formData.cvv || formData.cvv.length < 3) {
      newErrors.cvv = 'Invalid CVV';
    }
    
    if (!formData.billingAddress) {
      newErrors.billingAddress = 'Billing address is required';
    }
    
    if (!formData.city) {
      newErrors.city = 'City is required';
    }
    
    if (!formData.zipCode) {
      newErrors.zipCode = 'ZIP code is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setStep(2);
    
    // Simulate payment processing
    console.log('💳 Payment Processing:', {
      plan: planDetails,
      cardNumber: '****' + formData.cardNumber.slice(-4),
      amount: planDetails.price,
      timestamp: new Date().toISOString()
    });
    
    setTimeout(() => {
      setStep(3);
      setTimeout(() => {
        onSuccess(planDetails);
        onClose();
      }, 2000);
    }, 2500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="payment-modal" onClick={(e) => e.stopPropagation()}>
        {step !== 3 && (
          <button className="modal-close" onClick={onClose}>
            <X size={24} />
          </button>
        )}
        
        {step === 1 && (
          <>
            <div className="modal-header">
              <h2 className="modal-title">Complete Your Purchase</h2>
              <p className="modal-subtitle">
                Secure payment powered by Stripe
              </p>
            </div>

            {activePlan && (
              <div className="plan-summary">
                <div className="plan-summary-header">Order Summary</div>
                <div className="plan-summary-item">
                  <span>{activePlan.name}</span>
                  <span className="plan-price">{activePlan.price}{activePlan.period || ''}</span>
                </div>
                <div className="plan-summary-divider"></div>
                <div className="plan-summary-total">
                  <span>Total</span>
                  <span className="total-price">{activePlan.price}{activePlan.period || ''}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="payment-form">
              <div className="form-section">
                <h3 className="form-section-title">
                  <CreditCard size={20} />
                  Card Information
                </h3>
                
                <div className="form-group">
                  <label>Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    placeholder="1234 5678 9012 3456"
                    className={errors.cardNumber ? 'error' : ''}
                  />
                  {errors.cardNumber && <span className="error-text">{errors.cardNumber}</span>}
                </div>

                <div className="form-group">
                  <label>Cardholder Name</label>
                  <input
                    type="text"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={errors.cardName ? 'error' : ''}
                  />
                  {errors.cardName && <span className="error-text">{errors.cardName}</span>}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Expiry Date</label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleChange}
                      placeholder="MM/YY"
                      className={errors.expiryDate ? 'error' : ''}
                    />
                    {errors.expiryDate && <span className="error-text">{errors.expiryDate}</span>}
                  </div>

                  <div className="form-group">
                    <label>CVV</label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      placeholder="123"
                      className={errors.cvv ? 'error' : ''}
                    />
                    {errors.cvv && <span className="error-text">{errors.cvv}</span>}
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h3 className="form-section-title">
                  <Lock size={20} />
                  Billing Address
                </h3>
                
                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    name="billingAddress"
                    value={formData.billingAddress}
                    onChange={handleChange}
                    placeholder="123 Main Street"
                    className={errors.billingAddress ? 'error' : ''}
                  />
                  {errors.billingAddress && <span className="error-text">{errors.billingAddress}</span>}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="New York"
                      className={errors.city ? 'error' : ''}
                    />
                    {errors.city && <span className="error-text">{errors.city}</span>}
                  </div>

                  <div className="form-group">
                    <label>ZIP Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      placeholder="10001"
                      className={errors.zipCode ? 'error' : ''}
                    />
                    {errors.zipCode && <span className="error-text">{errors.zipCode}</span>}
                  </div>
                </div>
              </div>

              <button type="submit" className="payment-submit-btn">
                Complete Payment
              </button>

              <div className="security-note">
                <Lock size={16} />
                <span>Your payment information is encrypted and secure</span>
              </div>
            </form>
          </>
        )}

        {step === 2 && (
          <div className="processing-screen">
            <div className="processing-spinner"></div>
            <h3 className="processing-title">Processing Payment...</h3>
            <p className="processing-text">Please wait while we confirm your transaction</p>
          </div>
        )}

        {step === 3 && (
          <div className="success-screen">
            <div className="success-icon">
              <CheckCircle size={64} />
            </div>
            <h3 className="success-title">Payment Successful!</h3>
            <p className="success-text">
              Welcome to BASILEUS {planDetails?.name} Membership
            </p>
            <p className="success-subtext">
              A confirmation email has been sent to your inbox
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PaymentModal;
