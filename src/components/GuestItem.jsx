import { useState } from 'react';
import { Button, IconButton, TextField } from '@mui/material';
import { CheckCircle2, Circle, Mail, Trash2, Edit2, Save, X } from 'lucide-react';
import './GuestItem.css';

// Task 2 & 7: Individual guest item with confirm button and edit mode
function GuestItem({ guest, index, onConfirmToggle, onRSVPToggle, onRemoveGuest, onUpdateGuest }) {
  // Task 7: Add edit mode state
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: guest.name,
    email: guest.email
  });

  // Task 2: Handle confirmation toggle using callback prop
  const handleConfirm = () => {
    console.log('Confirming guest:', guest.id);
    onConfirmToggle(guest.id);
  };

  // Task 3: Handle RSVP toggle
  const handleRSVP = () => {
    console.log('Toggling RSVP for guest:', guest.id);
    onRSVPToggle(guest.id);
  };

  // Task 6: Handle remove guest
  const handleRemove = () => {
    if (window.confirm(`Remove ${guest.name} from the guest list?`)) {
      onRemoveGuest(guest.id);
    }
  };

  // Task 7: Handle edit mode
  const handleEdit = () => {
    setIsEditing(true);
    setEditData({
      name: guest.name,
      email: guest.email
    });
  };

  // Task 7: Handle save changes
  const handleSave = () => {
    if (!editData.name.trim() || !editData.email.trim()) {
      alert('Please fill in all fields');
      return;
    }
    
    onUpdateGuest(guest.id, editData);
    setIsEditing(false);
  };

  // Task 7: Handle cancel edit
  const handleCancel = () => {
    setIsEditing(false);
    setEditData({
      name: guest.name,
      email: guest.email
    });
  };

  // Handle edit input changes
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div 
      className={`guest-item ${guest.confirmed ? 'confirmed' : ''} ${guest.rsvp ? 'rsvp' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Task 8: Style confirmed guests differently */}
      <div className="guest-header">
        <div className="guest-status">
          {guest.confirmed && (
            <div className="status-badge confirmed-badge">
              <CheckCircle2 size={14} />
              <span>Confirmed</span>
            </div>
          )}
          {guest.rsvp && (
            <div className="status-badge rsvp-badge">
              <CheckCircle2 size={14} />
              <span>RSVP'd</span>
            </div>
          )}
        </div>
        
        {!isEditing && (
          <div className="guest-actions">
            <IconButton
              size="small"
              onClick={handleEdit}
              className="action-button edit-button"
              sx={{ color: '#D4AF37' }}
            >
              <Edit2 size={16} />
            </IconButton>
            <IconButton
              size="small"
              onClick={handleRemove}
              className="action-button remove-button"
              sx={{ color: '#ED8936' }}
            >
              <Trash2 size={16} />
            </IconButton>
          </div>
        )}
      </div>

      <div className="guest-content">
        {isEditing ? (
          // Task 7: Edit mode
          <div className="edit-mode">
            <TextField
              name="name"
              value={editData.name}
              onChange={handleEditChange}
              fullWidth
              size="small"
              placeholder="Guest name"
              sx={{
                marginBottom: '0.75rem',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgba(212, 175, 55, 0.3)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(212, 175, 55, 0.5)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#D4AF37',
                  },
                },
              }}
            />
            <TextField
              name="email"
              value={editData.email}
              onChange={handleEditChange}
              fullWidth
              size="small"
              type="email"
              placeholder="Email address"
              sx={{
                marginBottom: '1rem',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgba(212, 175, 55, 0.3)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(212, 175, 55, 0.5)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#D4AF37',
                  },
                },
              }}
            />
            <div className="edit-actions">
              <Button
                size="small"
                onClick={handleSave}
                startIcon={<Save size={16} />}
                sx={{
                  background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)',
                  color: '#000',
                  fontWeight: 600,
                  '&:hover': {
                    background: 'linear-gradient(135deg, #FFD700 0%, #F4E5C3 100%)',
                  },
                }}
              >
                Save
              </Button>
              <Button
                size="small"
                onClick={handleCancel}
                startIcon={<X size={16} />}
                sx={{
                  color: '#A0AEC0',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  },
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          // Normal display mode
          <>
            <h4 className="guest-name">{guest.name}</h4>
            <div className="guest-email">
              <Mail size={16} />
              <span>{guest.email}</span>
            </div>
          </>
        )}
      </div>

      {!isEditing && (
        <div className="guest-footer">
          <Button
            variant="outlined"
            size="small"
            onClick={handleRSVP}
            startIcon={guest.rsvp ? <CheckCircle2 size={16} /> : <Circle size={16} />}
            className={`rsvp-button ${guest.rsvp ? 'active' : ''}`}
            sx={{
              borderColor: guest.rsvp ? '#D4AF37' : 'rgba(212, 175, 55, 0.3)',
              color: guest.rsvp ? '#D4AF37' : '#9B8B7E',
              '&:hover': {
                borderColor: '#D4AF37',
                backgroundColor: 'rgba(212, 175, 55, 0.1)',
              },
            }}
          >
            RSVP
          </Button>
          
          <Button
            variant="contained"
            size="small"
            onClick={handleConfirm}
            className={`confirm-button ${guest.confirmed ? 'confirmed' : ''}`}
            sx={{
              background: guest.confirmed 
                ? 'linear-gradient(135deg, #48BB78 0%, #38A169 100%)'
                : 'linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)',
              color: guest.confirmed ? '#1A202C' : '#000',
              fontWeight: 600,
              '&:hover': {
                background: guest.confirmed
                  ? 'linear-gradient(135deg, #38A169 0%, #2F855A 100%)'
                  : 'linear-gradient(135deg, #FFD700 0%, #F4E5C3 100%)',
              },
            }}
          >
            {guest.confirmed ? 'Confirmed' : 'Confirm'}
          </Button>
        </div>
      )}
    </div>
  );
}

export default GuestItem;
