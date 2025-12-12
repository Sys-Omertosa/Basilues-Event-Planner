import { useState } from 'react';
import { Users, MessageCircle, Heart, Calendar, Globe, Sparkles } from 'lucide-react';
import ApplicationModal from '../components/ApplicationModal';
import './CommunityPage.css';

function CommunityPage() {
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const communityStats = [
    { value: '15,000+', label: 'Active Members', icon: Users },
    { value: '500+', label: 'Monthly Events', icon: Calendar },
    { value: '50+', label: 'Global Chapters', icon: Globe },
    { value: '98%', label: 'Satisfaction Rate', icon: Heart }
  ];

  const benefits = [
    {
      title: 'Exclusive Networking',
      description: 'Connect with industry leaders, innovators, and like-minded professionals in intimate settings.',
      icon: Users
    },
    {
      title: 'Priority Access',
      description: 'Get first access to tickets, special events, and VIP experiences before the general public.',
      icon: Sparkles
    },
    {
      title: 'Community Forums',
      description: 'Engage in discussions, share insights, and collaborate on projects with fellow members.',
      icon: MessageCircle
    },
    {
      title: 'Member Events',
      description: 'Attend exclusive member-only gatherings, workshops, and social events throughout the year.',
      icon: Calendar
    }
  ];

  const testimonials = [
    {
      quote: "Joining BASILEUS has transformed my professional network. The quality of connections and events is unparalleled.",
      author: "Alexandra Chen",
      title: "CEO, TechVentures"
    },
    {
      quote: "The community here is genuine and supportive. Every event feels curated with purpose and excellence.",
      author: "Marcus Rodriguez",
      title: "Creative Director"
    },
    {
      quote: "Being part of this community has opened doors I never knew existed. Truly a game-changer.",
      author: "Sarah Thompson",
      title: "Entrepreneur"
    }
  ];

  return (
    <div className="community-page">
      <section className="page-hero">
        <div className="hero-badge">COMMUNITY</div>
        <h1 className="page-title">Join the Elite Circle</h1>
        <p className="page-subtitle">
          Become part of an exclusive community dedicated to excellence, innovation, and meaningful connections
        </p>
      </section>

      <section className="stats-section">
        <div className="stats-grid">
          {communityStats.map((stat, index) => (
            <div key={index} className="stat-item" style={{ animationDelay: `${index * 0.1}s` }}>
              <stat.icon size={36} className="stat-icon" />
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="benefits-section">
        <h2 className="section-title">
          <span className="section-label">[MEMBER BENEFITS]</span>
          What You'll Experience
        </h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="benefit-icon-wrapper">
                <benefit.icon size={32} />
              </div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials-section">
        <h2 className="section-title">
          <span className="section-label">[MEMBER VOICES]</span>
          Community Testimonials
        </h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="quote-mark">"</div>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="testimonial-author">
                <div className="author-name">{testimonial.author}</div>
                <div className="author-title">{testimonial.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="join-section">
        <div className="join-content">
          <Heart size={64} className="join-icon" />
          <h2 className="join-title">Ready to Join Our Community?</h2>
          <p className="join-text">
            Take the first step towards extraordinary connections and experiences. 
            Membership is by application only to ensure we maintain the highest standards.
          </p>
          <button 
            className="join-button"
            onClick={() => setShowApplicationModal(true)}
          >
            Apply for Membership
          </button>
          <div className="join-note">Limited spaces available • Reviewed within 48 hours</div>
        </div>
      </section>

      <ApplicationModal 
        show={showApplicationModal}
        onClose={() => setShowApplicationModal(false)}
      />
    </div>
  );
}

export default CommunityPage;
