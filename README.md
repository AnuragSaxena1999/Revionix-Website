# Revionix - Revenue Cycle Management Web Application

A modern React-based web application for revenue cycle management, inspired by R1RCM's business model.

## Features

- **Home Page**: Showcases the company's value proposition with hero section, features, and statistics
- **Services Page**: Displays comprehensive revenue cycle management services
- **Specialities Page**: Highlights different healthcare specialities supported
- **Contact Us Page**: Contact form and company information
- **Dashboard**: Revenue metrics, analytics, and quick actions

## Color Theme

- **Primary Blue**: `#1e3a8a` - Navy blue for headers and primary elements
- **Primary Orange**: `#f97316` - Vibrant orange for call-to-action buttons and accents
- **White**: `#ffffff` - Clean backgrounds
- Design inspired by the R-logo with blue, orange, and white color scheme

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## Project Structure

```
Revionix/
├── src/
│   ├── components/
│   │   ├── Layout.jsx       # Main layout with navigation
│   │   └── Layout.css
│   ├── pages/
│   │   ├── Home.jsx         # Home page
│   │   ├── Services.jsx     # Services page
│   │   ├── Specialities.jsx # Specialities page
│   │   ├── Contact.jsx     # Contact page
│   │   ├── Dashboard.jsx   # Dashboard page
│   │   └── Pages.css       # Shared page styles
│   ├── App.jsx              # Main app component with routing
│   ├── App.css
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── vite.config.js
└── package.json
```

## Technologies Used

- **React 18**: UI library
- **React Router DOM**: Client-side routing
- **Vite**: Build tool and development server
- **CSS3**: Styling with modern CSS features

## Pages Overview

### Home Page
- Hero section with call-to-action
- Key statistics display
- Feature highlights
- Call-to-action section

### Services Page
- Claims Management
- Revenue Analytics
- Denial Management
- Patient Engagement
- Coding & Documentation
- Provider Enrollment

### Specialities Page
- Hospital Systems
- Physician Practices
- Surgical Centers
- Mental Health
- Long-term Care
- Telehealth

### Contact Page
- Contact information
- Contact form
- Business hours
- Address details

### Dashboard
- Key revenue metrics
- Recent activity feed
- Revenue overview
- Quick action buttons

## Customization

You can easily customize:
- Colors in `src/index.css` (CSS variables)
- Content in page components
- Styling in corresponding CSS files
- Add new pages by creating components in `src/pages/`

## License

This project is created for demonstration purposes.

