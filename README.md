# BASILEUS Event Planner - Lab 13

A premium, full-featured Event Planner application built with React, featuring multi-page navigation, interactive modals, payment processing mockups, and a sophisticated royal gold design theme. Demonstrates advanced React concepts including state management, routing, form validation, and professional UI/UX patterns.

## 🎯 Lab Requirements Fulfilled

### Task 1: User Interactions & State Basics

-   ✅ **GuestForm Component**: Input fields for Name and Email with useState management
-   ✅ **Event Handling**: onChange for inputs, onClick for buttons
-   ✅ **Form Submission**: Logs form data and validates input
-   ✅ **GuestList Component**: Renders guests with Confirm button
-   ✅ **Props & Callbacks**: Parent-child communication via props

### Task 2: Deep Dive into State Updates & Batching

-   ✅ **RSVP Tracking**: Boolean rsvp field with toggle functionality
-   ✅ **Immutable Updates**: Proper state updates using spread operator
-   ✅ **RSVP Summary**: Displays total, confirmed, and unconfirmed guests
-   ✅ **State Batching Demo**: Multiple state updates demonstrating React's batching
-   ✅ **useEffect Hook**: Tracks state changes and demonstrates delayed updates

### Task 3: Working with Arrays & Final Touches

-   ✅ **Remove Guest**: Filter array to remove guests from the list
-   ✅ **Update Guest Info**: Edit mode for name/email changes
-   ✅ **Immutable Array Updates**: Uses map and filter for state updates
-   ✅ **Conditional Rendering**: Empty state message when no guests
-   ✅ **Styled Confirmed Guests**: Different visual treatment for confirmed guests

## 🎨 Design Features - BASILEUS Theme

Premium royal aesthetic with sophisticated visual elements:

-   **Royal Gold Color Scheme**: #D4AF37, #FFD700, #B8860B
-   **Dark Luxury Theme**: #0A0A0A, #050505, #1A1512 backgrounds
-   **Sharp Corners**: Border-radius: 0 for premium aesthetic
-   **Ethereal Glow**: Animated background with dynamic gold effects
-   **Typography**:
    -   Playfair Display (serif) for elegant headings
    -   Inter (sans-serif) for readable body text
-   **Crown Icon**: Royal branding throughout
-   **Material UI**: Enhanced UX with customized components
-   **Lucide React Icons**: Professional iconography (Crown, CreditCard, Lock, Users, Building2, etc.)
-   **Advanced Animations**:
    -   Fade-in effects with backdrop blur
    -   Slide animations for modals
    -   Hover glow transitions
    -   Loading spinners
    -   Success screen animations

## 🚀 Technologies Used

-   **React 18.2**: Core framework
-   **Vite**: Fast build tool and dev server
-   **Material UI**: Component library for enhanced UX
-   **Lucide React**: Modern icon library
-   **CSS3**: Custom styling with animations

## 📦 Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser to the URL shown (typically http://localhost:5173)

## 🎓 Key Concepts Demonstrated

### 1. State Management

-   useState for component-level state
-   State immutability principles
-   Updating objects and arrays in state

### 2. Event Handling

-   onClick events for buttons
-   onChange events for inputs
-   Form submission handling
-   Event callbacks via props

### 3. React Lifecycle

-   useEffect for side effects
-   Dependency array usage
-   Tracking state changes

### 4. Component Architecture

-   Reusable component design
-   Props drilling
-   Callback functions
-   Conditional rendering

### 5. React Rendering

-   Two-phase rendering process
-   State batching demonstration
-   Delayed state updates explanation

## 🎯 Features

### Multi-Page Navigation System

-   🎉 **Events Page**: Original guest management functionality
-   📈 **Growth Page**: Event analytics, metrics, and growth strategies
-   🤝 **Sponsors Page**: Partnership tiers and current sponsors with inquiry system
-   👥 **Community Page**: Community statistics, benefits, and testimonials
-   💎 **Membership Page**: Pricing tiers (Silver/Gold/Platinum) with payment integration
-   🔐 **Auth Page**: Full-page authentication with sign in/sign up

### Guest Management (Events Page)

-   ➕ **Add Guests**: Form with validation for name and email
-   ✏️ **Edit Guests**: In-place editing with save/cancel
-   🗑️ **Remove Guests**: Delete with confirmation dialog
-   ✓ **Confirm Guests**: Toggle confirmation status
-   📧 **RSVP Tracking**: Track RSVP responses
-   📊 **Live Statistics**: Real-time guest count updates

### Interactive Modals

-   💳 **Payment Modal**: 
    - 3-step payment flow (form → processing → success)
    - Card validation and formatting
    - Billing address collection
    - Simulated Stripe integration
-   📝 **Inquiry Modal**: 
    - Sponsor inquiry forms
    - Consultation scheduling
    - Company information collection
-   📋 **Application Modal**: 
    - Community membership applications
    - Multi-field forms with validation
    - Interest selection chips
    - Character count validation

### UI/UX Enhancements

-   🎨 **Premium Visual Design**: Gold theme with sharp corners
-   ✨ **Ethereal Background**: Animated glow effects
-   📱 **Fully Responsive**: Optimized for all screen sizes
-   🌈 **Status Indicators**: Visual badges for confirmed/RSVP'd guests
-   ⚡ **Smooth Animations**: Professional transitions throughout
-   🔒 **Form Validation**: Real-time error checking and feedback
-   🎭 **Modal Overlays**: Backdrop blur with centered positioning
-   ⏱️ **Loading States**: Animated spinners during processing

## 📝 Code Highlights

### State Batching Demo

```javascript
// Demonstrates React's automatic batching
setGuests((prevGuests) => [...prevGuests, newGuest]);
console.log("State immediately after:", guests.length); // Old value!
```

### useEffect for State Tracking

```javascript
useEffect(() => {
    console.log("State updated! Current guests:", guests);
}, [guests]);
```

### Immutable State Updates

```javascript
// Updating objects in array immutably
setGuests((prevGuests) =>
    prevGuests.map((guest) =>
        guest.id === id ? { ...guest, confirmed: !guest.confirmed } : guest
    )
);
```

## 🎓 Learning Outcomes

By completing this lab, you will understand:

1. ✅ How React handles user interactions
2. ✅ State management with useState hook
3. ✅ Why state updates are asynchronous
4. ✅ How React batches state updates
5. ✅ Proper patterns for updating objects and arrays
6. ✅ Component composition and props
7. ✅ Conditional rendering techniques
8. ✅ Side effects with useEffect
9. ✅ Creating responsive, animated UIs
10. ✅ Professional code organization

## 📂 Project Structure

```
event-planner/
├── public/
│   └── crown-favicon.svg          # Royal gold crown favicon
├── src/
│   ├── components/
│   │   ├── Header.jsx              # Navigation with BASILEUS branding
│   │   ├── Header.css
│   │   ├── GuestForm.jsx           # Guest input form
│   │   ├── GuestForm.css
│   │   ├── GuestList.jsx           # Guest list renderer
│   │   ├── GuestList.css
│   │   ├── GuestItem.jsx           # Individual guest card
│   │   ├── GuestItem.css
│   │   ├── RSVPSummary.jsx         # Statistics display
│   │   ├── RSVPSummary.css
│   │   ├── PaymentModal.jsx        # Payment processing modal
│   │   ├── PaymentModal.css
│   │   ├── InquiryModal.jsx        # Sponsor inquiry modal
│   │   ├── InquiryModal.css
│   │   ├── ApplicationModal.jsx    # Membership application modal
│   │   └── ApplicationModal.css
│   ├── pages/
│   │   ├── EventsPage.jsx          # Main guest management page
│   │   ├── EventsPage.css
│   │   ├── GrowthPage.jsx          # Analytics and metrics
│   │   ├── GrowthPage.css
│   │   ├── SponsorsPage.jsx        # Partnership information
│   │   ├── SponsorsPage.css
│   │   ├── CommunityPage.jsx       # Community benefits
│   │   ├── CommunityPage.css
│   │   ├── MembershipPage.jsx      # Pricing tiers
│   │   ├── MembershipPage.css
│   │   ├── AuthPage.jsx            # Authentication page
│   │   └── AuthPage.css
│   ├── App.jsx                     # Main app with routing
│   ├── App.css                     # Global app styles
│   ├── index.css                   # CSS variables & animations
│   └── main.jsx                    # React entry point
├── index.html                      # HTML with crown favicon
├── package.json
├── vite.config.js
├── LAB_DOCUMENTATION.md            # Detailed lab implementation docs
└── README.md
```

## 🎨 Color Palette - BASILEUS Theme

-   **Primary Gold**: #D4AF37
-   **Secondary Gold**: #FFD700
-   **Dark Gold**: #B8860B
-   **Light Gold**: #F4E5C3
-   **Background**: #0A0A0A
-   **Darker Background**: #050505
-   **Card Background**: #1A1512
-   **Light Text**: #E2E8F0
-   **Muted Text**: #A0AEC0
-   **White**: #FFFFFF
-   **Success Green**: #48BB78
-   **Error Red**: #F56565

## 📱 Browser Support

-   Chrome (latest)
-   Firefox (latest)
-   Safari (latest)
-   Edge (latest)

## 🎯 Lab Requirements

All Lab 13 requirements have been fully implemented:

**Part 1**: User interactions with useState, event handling, and component communication
**Part 2**: State updates with batching demonstrations and useEffect tracking
**Part 3**: Array manipulation (add, update, remove) with immutable patterns

See `LAB_DOCUMENTATION.md` for detailed implementation explanations.

## 👨‍💻 Development

Built as part of Web Engineering Lab 13, extended with premium features including multi-page navigation, authentication system, payment processing mockups, and professional modal interactions.

## 🚀 Live Demo

The application demonstrates:
- React state management best practices
- Immutable data updates
- Component composition and reusability
- Form validation and error handling
- Professional UI/UX design patterns
- Responsive layouts for all devices

---

**Note**: Check the browser console to see state update logs and batching demonstrations!
