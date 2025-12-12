import { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import Header from './components/Header';
import GuestForm from './components/GuestForm';
import GuestList from './components/GuestList';
import RSVPSummary from './components/RSVPSummary';
import EventsPage from './pages/EventsPage';
import GrowthPage from './pages/GrowthPage';
import SponsorsPage from './pages/SponsorsPage';
import CommunityPage from './pages/CommunityPage';
import MembershipPage from './pages/MembershipPage';
import AuthPage from './pages/AuthPage';
import './App.css';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#D4AF37',
    },
    secondary: {
      main: '#FFD700',
    },
    background: {
      default: '#0A0A0A',
      paper: '#1A1512',
    },
  },
  typography: {
    fontFamily: "'Inter', system-ui, sans-serif",
    h1: {
      fontFamily: "'Playfair Display', serif",
    },
    h2: {
      fontFamily: "'Playfair Display', serif",
    },
    h3: {
      fontFamily: "'Playfair Display', serif",
    },
  },
});

function App() {
  const [currentPage, setCurrentPage] = useState('events');
  const [guests, setGuests] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      confirmed: false,
      rsvp: false
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'mchen@example.com',
      confirmed: true,
      rsvp: true
    },
    {
      id: 3,
      name: 'Emily Davis',
      email: 'emily.d@example.com',
      confirmed: false,
      rsvp: true
    }
  ]);

  // Task 5: Demonstrate useEffect to track state changes
  // This demonstrates how state doesn't update immediately
  useEffect(() => {
    console.log('State updated! Current guests:', guests);
    console.log('Total guests:', guests.length);
  }, [guests]);

  // Task 1: Handle adding a new guest
  const handleAddGuest = (guestData) => {
    console.log('Adding guest:', guestData);
    
    const newGuest = {
      id: Date.now(),
      ...guestData,
      confirmed: false,
      rsvp: false
    };
    
    // Task 4: Multiple state updates (batched by React)
    setGuests(prevGuests => [...prevGuests, newGuest]);
    
    // This log shows state hasn't updated yet (demonstrates delayed update)
    console.log('State immediately after setGuests:', guests.length);
    console.log('Note: State hasn\'t updated yet - this is React\'s batching!');
  };

  // Task 2: Handle confirmation toggle
  const handleConfirmToggle = (id) => {
    // Task 3: Update object in state immutably
    setGuests(prevGuests =>
      prevGuests.map(guest =>
        guest.id === id
          ? { ...guest, confirmed: !guest.confirmed }
          : guest
      )
    );
  };

  // Task 3: Handle RSVP toggle
  const handleRSVPToggle = (id) => {
    console.log('Toggling RSVP for guest ID:', id);
    
    // Task 4: Demonstrate batching - multiple state updates
    setGuests(prevGuests =>
      prevGuests.map(guest =>
        guest.id === id
          ? { ...guest, rsvp: !guest.rsvp }
          : guest
      )
    );
    
    // This shows state immediately after update (still old value)
    console.log('Current state (before React processes update):', guests);
  };

  // Task 6: Remove guest
  const handleRemoveGuest = (id) => {
    // Filter array to remove guest
    setGuests(prevGuests => prevGuests.filter(guest => guest.id !== id));
  };

  // Task 7: Update guest info
  const handleUpdateGuest = (id, updatedData) => {
    // Update array immutably
    setGuests(prevGuests =>
      prevGuests.map(guest =>
        guest.id === id
          ? { ...guest, ...updatedData }
          : guest
      )
    );
  };

  // Navigation handler
  const handleNavigate = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render current page
  const renderPage = () => {
    switch (currentPage) {
      case 'events':
        return (
          <EventsPage
            guests={guests}
            onAddGuest={handleAddGuest}
            onConfirmToggle={handleConfirmToggle}
            onRSVPToggle={handleRSVPToggle}
            onRemoveGuest={handleRemoveGuest}
            onUpdateGuest={handleUpdateGuest}
            GuestForm={GuestForm}
            GuestList={GuestList}
            RSVPSummary={RSVPSummary}
          />
        );
      case 'growth':
        return <GrowthPage />;
      case 'sponsors':
        return <SponsorsPage />;
      case 'community':
        return <CommunityPage />;
      case 'membership':
        return <MembershipPage />;
      case 'auth':
        return <AuthPage onNavigate={handleNavigate} onSuccess={(user) => console.log('👤 User authenticated:', user)} />;
      default:
        return (
          <EventsPage
            guests={guests}
            onAddGuest={handleAddGuest}
            onConfirmToggle={handleConfirmToggle}
            onRSVPToggle={handleRSVPToggle}
            onRemoveGuest={handleRemoveGuest}
            onUpdateGuest={handleUpdateGuest}
            GuestForm={GuestForm}
            GuestList={GuestList}
            RSVPSummary={RSVPSummary}
          />
        );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Header currentPage={currentPage} onNavigate={handleNavigate} />
        
        <main className="main-content">
          <div className="container">
            {renderPage()}
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
