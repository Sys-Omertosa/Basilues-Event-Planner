import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { UserPlus } from 'lucide-react';
import './GuestForm.css';

// Task 1: Create GuestForm component with input fields and state management
function GuestForm({ onAddGuest }) {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  // Task 1: Handle input changes using onChange event
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Task 1: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim() || !formData.email.trim()) {
      alert('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Task 1: Log form data (as per lab requirements)
    console.log('Form submitted with data:', formData);
    
    // Pass data to parent component
    onAddGuest(formData);
    
    // Reset form
    setFormData({ name: '', email: '' });
  };

  return (
    <div className="guest-form-container">
      <form onSubmit={handleSubmit} className="guest-form">
        <Box className="form-fields">
          <TextField
            label="Guest Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            placeholder="Enter guest name"
            className="form-input"
            sx={{
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
              '& .MuiInputLabel-root': {
                color: '#9B8B7E',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#D4AF37',
              },
            }}
          />
          
          <TextField
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            placeholder="guest@example.com"
            className="form-input"
            sx={{
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
              '& .MuiInputLabel-root': {
                color: '#9B8B7E',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#D4AF37',
              },
            }}
          />
        </Box>

        <Button
          type="submit"
          variant="contained"
          fullWidth
          className="submit-button"
          startIcon={<UserPlus size={20} />}
          sx={{
            background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)',
            color: '#000',
            fontWeight: 600,
            padding: '0.875rem',
            fontSize: '0.9375rem',
            textTransform: 'none',
            borderRadius: '0',
            boxShadow: '0 4px 15px rgba(212, 175, 55, 0.4)',
            '&:hover': {
              background: 'linear-gradient(135deg, #FFD700 0%, #F4E5C3 100%)',
              boxShadow: '0 6px 20px rgba(212, 175, 55, 0.6)',
              transform: 'translateY(-2px)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          Add Guest
        </Button>
      </form>
    </div>
  );
}

export default GuestForm;
