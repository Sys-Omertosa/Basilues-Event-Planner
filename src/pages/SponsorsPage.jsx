import { useState } from 'react';
import { Award, Star, Crown, TrendingUp, Building2, Handshake } from 'lucide-react';
import PaymentModal from '../components/PaymentModal';
import InquiryModal from '../components/InquiryModal';
import './SponsorsPage.css';

function SponsorsPage() {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [inquiryType, setInquiryType] = useState('inquiry');
  const [selectedPlan, setSelectedPlan] = useState(null);
  const sponsorTiers = [
    {
      tier: 'Royal Patron',
      icon: Crown,
      benefits: [
        'Exclusive branding at all major events',
        'VIP access to private gatherings',
        'Featured in all marketing materials',
        'Dedicated account management',
        'Custom partnership packages'
      ],
      price: 'Custom'
    },
    {
      tier: 'Premium Partner',
      icon: Award,
      benefits: [
        'Logo placement at select events',
        'Priority event invitations',
        'Quarterly partnership reviews',
        'Social media recognition',
        'Networking opportunities'
      ],
      price: '$50,000/year'
    },
    {
      tier: 'Elite Supporter',
      icon: Star,
      benefits: [
        'Brand visibility at events',
        'Event access passes',
        'Newsletter features',
        'Community recognition',
        'Annual partnership report'
      ],
      price: '$25,000/year'
    }
  ];

  const currentSponsors = [
    { name: 'Prestige Hotels International', category: 'Hospitality', logo: Building2 },
    { name: 'Elite Catering Group', category: 'Food & Beverage', logo: Award },
    { name: 'Luxury Productions', category: 'Entertainment', logo: Star },
    { name: 'Royal Tech Solutions', category: 'Technology', logo: TrendingUp }
  ];

  return (
    <div className="sponsors-page">
      <section className="page-hero">
        <div className="hero-badge">SPONSORSHIP OPPORTUNITIES</div>
        <h1 className="page-title">Partner With Excellence</h1>
        <p className="page-subtitle">
          Join an elite network of brands that share our commitment to creating extraordinary experiences
        </p>
      </section>

      <section className="tiers-section">
        <h2 className="section-title">
          <span className="section-label">[PARTNERSHIP TIERS]</span>
          Sponsorship Packages
        </h2>
        <div className="tiers-grid">
          {sponsorTiers.map((tier, index) => (
            <div key={index} className="tier-card" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="tier-icon-wrapper">
                <tier.icon size={48} />
              </div>
              <h3 className="tier-name">{tier.tier}</h3>
              <div className="tier-price">{tier.price}</div>
              <ul className="tier-benefits">
                {tier.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
              <button 
                className="tier-button"
                onClick={() => {
                  setInquiryType('inquiry');
                  setShowInquiryModal(true);
                }}
              >
                Inquire Now
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="current-sponsors-section">
        <h2 className="section-title">
          <span className="section-label">[OUR PARTNERS]</span>
          Distinguished Sponsors
        </h2>
        <div className="sponsors-grid">
          {currentSponsors.map((sponsor, index) => (
            <div key={index} className="sponsor-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="sponsor-logo">
                <sponsor.logo size={48} />
              </div>
              <h3 className="sponsor-name">{sponsor.name}</h3>
              <div className="sponsor-category">{sponsor.category}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <Handshake size={64} className="cta-icon" />
          <h2 className="cta-title">Ready to Elevate Your Brand?</h2>
          <p className="cta-text">
            Partner with BASILEUS and gain access to exclusive networking opportunities, 
            premium brand exposure, and a community of distinguished professionals.
          </p>
          <button 
            className="cta-main-button"
            onClick={() => {
              setInquiryType('consultation');
              setShowInquiryModal(true);
            }}
          >
            Schedule a Consultation
          </button>
        </div>
      </section>

      <InquiryModal 
        show={showInquiryModal}
        onClose={() => setShowInquiryModal(false)}
        type={inquiryType}
      />
    </div>
  );
}

export default SponsorsPage;
