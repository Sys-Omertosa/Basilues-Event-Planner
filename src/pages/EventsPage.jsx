import { Calendar, TrendingUp, Users, Award, ArrowRight } from 'lucide-react';
import './EventsPage.css';

function EventsPage({ guests, onAddGuest, onConfirmToggle, onRSVPToggle, onRemoveGuest, onUpdateGuest, GuestForm, GuestList, RSVPSummary }) {
  return (
    <div className="events-page">
      <section className="hero-section">
        <h1 className="hero-title">BASILEUS</h1>
        <p className="hero-subtitle">
          Transform events into unforgettable experiences that captivate guests and
          leave a lasting impression
        </p>
      </section>

      <div className="content-grid">
        <div className="form-section">
          <h2 className="section-title">
            <span className="section-label">[ADD GUEST]</span>
            Add New Guest
          </h2>
          <GuestForm onAddGuest={onAddGuest} />
        </div>

        <div className="summary-section">
          <RSVPSummary guests={guests} />
        </div>
      </div>

      <div className="guests-section">
        <h2 className="section-title">
          <span className="section-label">[GUEST LIST]</span>
          Upcoming Guests
        </h2>
        <GuestList
          guests={guests}
          onConfirmToggle={onConfirmToggle}
          onRSVPToggle={onRSVPToggle}
          onRemoveGuest={onRemoveGuest}
          onUpdateGuest={onUpdateGuest}
        />
      </div>

      <section className="features-section">
        <h2 className="section-title">
          <span className="section-label">[WHAT WE OFFER]</span>
          Event Excellence
        </h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <Calendar size={32} />
            </div>
            <h3 className="feature-title">Event Planning</h3>
            <p className="feature-description">
              Comprehensive event management from conception to execution with meticulous attention to detail
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <Users size={32} />
            </div>
            <h3 className="feature-title">Guest Management</h3>
            <p className="feature-description">
              Advanced RSVP tracking and guest communication systems for seamless coordination
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <Award size={32} />
            </div>
            <h3 className="feature-title">Premium Service</h3>
            <p className="feature-description">
              White-glove service ensuring every aspect exceeds expectations and creates lasting memories
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <TrendingUp size={32} />
            </div>
            <h3 className="feature-title">Analytics & Insights</h3>
            <p className="feature-description">
              Real-time event metrics and post-event analysis to optimize future gatherings
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EventsPage;
