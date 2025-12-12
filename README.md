# Event Planner App - Lab 13

A modern, interactive Event Planner application built with React, demonstrating core React concepts including state management, event handling, and component composition.

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

## 🎨 Design Features

Based on the provided UI reference, the app includes:

-   **Professional Design**: Turquoise (#4FD1C5) and dark theme color scheme
-   **Typography**:
    -   Playfair Display (serif) for headings
    -   Inter (sans-serif) for body text
-   **Material UI**: Enhanced UX with MUI components
-   **Lucide React Icons**: Professional iconography throughout
-   **Smooth Animations**:
    -   Fade-in effects
    -   Slide animations
    -   Hover transitions
    -   Scale effects
    -   Button feedback

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

### Guest Management

-   ➕ **Add Guests**: Form with validation for name and email
-   ✏️ **Edit Guests**: In-place editing with save/cancel
-   🗑️ **Remove Guests**: Delete with confirmation
-   ✓ **Confirm Guests**: Toggle confirmation status
-   📧 **RSVP Tracking**: Track RSVP responses

### UI/UX Enhancements

-   📊 **Live Statistics**: Real-time guest count updates
-   🎨 **Visual Feedback**: Animated state changes
-   📱 **Responsive Design**: Works on all screen sizes
-   🌈 **Status Badges**: Visual indicators for confirmed/RSVP'd guests
-   ⚡ **Smooth Animations**: Professional transitions and effects

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
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── GuestForm.jsx
│   │   ├── GuestForm.css
│   │   ├── GuestList.jsx
│   │   ├── GuestList.css
│   │   ├── GuestItem.jsx
│   │   ├── GuestItem.css
│   │   ├── RSVPSummary.jsx
│   │   └── RSVPSummary.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Color Palette

-   **Primary Turquoise**: #4FD1C5
-   **Secondary Turquoise**: #38B2AC
-   **Dark Background**: #1A202C
-   **Darker Background**: #0D1117
-   **Card Background**: #2D3748
-   **Light Text**: #E2E8F0
-   **Muted Text**: #A0AEC0
-   **Success**: #48BB78
-   **Warning**: #ED8936

## 📱 Browser Support

-   Chrome (latest)
-   Firefox (latest)
-   Safari (latest)
-   Edge (latest)

## 👨‍💻 Development

Built as part of Web Engineering Lab 13 to demonstrate React fundamentals and modern web development practices.

---

**Note**: Check the browser console to see state update logs and batching demonstrations!
