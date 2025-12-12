import { Users, CheckCircle2, Clock } from 'lucide-react';
import './RSVPSummary.css';

// Task 4: Display RSVP summary with total, confirmed, and unconfirmed counts
function RSVPSummary({ guests }) {
  const totalGuests = guests.length;
  const confirmedGuests = guests.filter(guest => guest.confirmed).length;
  const rsvpCount = guests.filter(guest => guest.rsvp).length;
  const pendingGuests = totalGuests - confirmedGuests;

  return (
    <div className="rsvp-summary">
      <h3 className="summary-title">
        <span className="section-label">[OUR SERVICES]</span>
        Event Statistics
      </h3>
      
      <div className="stats-grid">
        <div className="stat-card total">
          <div className="stat-icon">
            <Users size={28} />
          </div>
          <div className="stat-content">
            <div className="stat-value">{totalGuests}</div>
            <div className="stat-label">Total Guests</div>
          </div>
        </div>

        <div className="stat-card confirmed">
          <div className="stat-icon">
            <CheckCircle2 size={28} />
          </div>
          <div className="stat-content">
            <div className="stat-value">{confirmedGuests}</div>
            <div className="stat-label">Confirmed</div>
          </div>
        </div>

        <div className="stat-card pending">
          <div className="stat-icon">
            <Clock size={28} />
          </div>
          <div className="stat-content">
            <div className="stat-value">{pendingGuests}</div>
            <div className="stat-label">Pending</div>
          </div>
        </div>

        <div className="stat-card rsvp">
          <div className="stat-icon">
            <CheckCircle2 size={28} />
          </div>
          <div className="stat-content">
            <div className="stat-value">{rsvpCount}</div>
            <div className="stat-label">RSVP'd</div>
          </div>
        </div>
      </div>

      <div className="summary-footer">
        <p className="footer-text">
          Track your event attendance in real-time
        </p>
      </div>
    </div>
  );
}

export default RSVPSummary;
