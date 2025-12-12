import GuestItem from './GuestItem';
import './GuestList.css';

// Task 2: Create GuestList component to render list of guests
function GuestList({ guests, onConfirmToggle, onRSVPToggle, onRemoveGuest, onUpdateGuest }) {
  // Task 8: Conditional rendering - show message if no guests
  if (guests.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state-content">
          <div className="empty-icon">🎉</div>
          <h3 className="empty-title">No Guests Yet</h3>
          <p className="empty-description">
            Start building your guest list by adding your first guest above
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="guest-list">
      {guests.map((guest, index) => (
        <GuestItem
          key={guest.id}
          guest={guest}
          index={index}
          onConfirmToggle={onConfirmToggle}
          onRSVPToggle={onRSVPToggle}
          onRemoveGuest={onRemoveGuest}
          onUpdateGuest={onUpdateGuest}
        />
      ))}
    </div>
  );
}

export default GuestList;
