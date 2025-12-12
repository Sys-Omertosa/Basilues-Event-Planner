import { useState } from 'react';
import { Crown, Check, Star } from 'lucide-react';
import PaymentModal from '../components/PaymentModal';
import './MembershipPage.css';

function MembershipPage() {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const membershipTiers = [
    {
      name: 'Silver',
      price: '$299',
      period: '/month',
      features: [
        'Access to community forums',
        '2 event tickets per month',
        'Monthly newsletter',
        'Member directory access',
        'Networking opportunities'
      ],
      icon: Star
    },
    {
      name: 'Gold',
      price: '$599',
      period: '/month',
      featured: true,
      features: [
        'All Silver benefits',
        '5 event tickets per month',
        'Priority event registration',
        'Exclusive workshops',
        'Quarterly member dinners',
        'Personal concierge service'
      ],
      icon: Crown
    },
    {
      name: 'Platinum',
      price: '$1,299',
      period: '/month',
      features: [
        'All Gold benefits',
        'Unlimited event access',
        'VIP seating at all events',
        'Private event hosting',
        'One-on-one consultations',
        'Annual retreat invitation',
        'Custom partnership opportunities'
      ],
      icon: Crown
    }
  ];

  return (
    <div className="membership-page">
      <section className="page-hero">
        <div className="hero-badge">EXCLUSIVE MEMBERSHIP</div>
        <h1 className="page-title">Elevate Your Experience</h1>
        <p className="page-subtitle">
          Choose the membership tier that aligns with your aspirations and unlock a world of premium benefits
        </p>
      </section>

      <section className="membership-tiers">
        <div className="tiers-container">
          {membershipTiers.map((tier, index) => (
            <div 
              key={index} 
              className={`membership-card ${tier.featured ? 'featured' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {tier.featured && <div className="featured-badge">MOST POPULAR</div>}
              
              <div className="tier-header">
                <tier.icon size={48} className="tier-icon" />
                <h3 className="tier-name">{tier.name}</h3>
                <div className="tier-pricing">
                  <span className="tier-price">{tier.price}</span>
                  <span className="tier-period">{tier.period}</span>
                </div>
              </div>

              <ul className="tier-features">
                {tier.features.map((feature, i) => (
                  <li key={i} className="feature-item">
                    <Check size={20} className="feature-check" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className="tier-select-button"
                onClick={() => {
                  setSelectedPlan({
                    name: `${tier.name} Membership`,
                    price: tier.price,
                    period: tier.period
                  });
                  setShowPaymentModal(true);
                }}
              >
                Select {tier.name}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="application-process">
        <h2 className="section-title">
          <span className="section-label">[HOW IT WORKS]</span>
          Membership Application
        </h2>
        <div className="process-steps">
          <div className="step-card">
            <div className="step-number">01</div>
            <h3 className="step-title">Submit Application</h3>
            <p className="step-description">
              Fill out our comprehensive membership application form with your details and preferences.
            </p>
          </div>
          <div className="step-card">
            <div className="step-number">02</div>
            <h3 className="step-title">Review Process</h3>
            <p className="step-description">
              Our team carefully reviews each application to ensure alignment with our community values.
            </p>
          </div>
          <div className="step-card">
            <div className="step-number">03</div>
            <h3 className="step-title">Welcome Aboard</h3>
            <p className="step-description">
              Upon approval, receive your welcome package and gain immediate access to all member benefits.
            </p>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <h2 className="section-title">
          <span className="section-label">[QUESTIONS]</span>
          Frequently Asked
        </h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3 className="faq-question">Can I upgrade my membership tier?</h3>
            <p className="faq-answer">
              Yes, you can upgrade your membership at any time. The difference will be prorated for the current billing cycle.
            </p>
          </div>
          <div className="faq-item">
            <h3 className="faq-question">Is there a contract commitment?</h3>
            <p className="faq-answer">
              No long-term contracts required. All memberships are month-to-month and can be cancelled with 30 days notice.
            </p>
          </div>
          <div className="faq-item">
            <h3 className="faq-question">What if I can't attend events?</h3>
            <p className="faq-answer">
              Event tickets can be transferred to guests or rolled over to the next month (terms apply per tier).
            </p>
          </div>
          <div className="faq-item">
            <h3 className="faq-question">Are there additional fees?</h3>
            <p className="faq-answer">
              Your membership fee covers all listed benefits. Special workshops or retreats may have separate fees.
            </p>
          </div>
        </div>
      </section>

      <PaymentModal 
        show={showPaymentModal}
        onClose={() => {
          setShowPaymentModal(false);
          setSelectedPlan(null);
        }}
        plan={selectedPlan}
      />
    </div>
  );
}

export default MembershipPage;
