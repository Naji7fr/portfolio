# Portfolio Website

A modern, responsive portfolio website built with React, React Router, and React Bootstrap.

## Features

- **Home Page**: Showcases recent projects, education, and work experience
- **Contact Page**: Contact form with React Toastify notifications
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Custom Bootstrap Styling**: SCSS-based customization of Bootstrap variables
- **React Router**: Client-side navigation between pages
- **Component Library Integration**: Uses React Toastify for enhanced UX

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **React Bootstrap** - Bootstrap components for React
- **Bootstrap SCSS** - Custom styling with SCSS variables
- **React Toastify** - Toast notifications for user feedback
- **React Router Bootstrap** - Integration between React Router and Bootstrap Nav components

## Project Structure

```
fro/
├── src/
│   ├── Pages/
│   │   ├── Home.jsx       # Home page with portfolio content
│   │   └── Contact.jsx    # Contact page with form
│   ├── App.jsx            # Root layout with navigation
│   ├── App.scss           # Component-specific styles
│   ├── main.jsx           # App entry point with router config
│   └── index.scss         # Bootstrap customization and global styles
├── public/
├── package.json
└── vite.config.js
```

## Installation

1. Clone or download the project
2. Install dependencies:
   ```bash
   npm install
   ```

## Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173/`

## Build

Create a production build:
```bash
npm run build
```

## Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Customization

### Bootstrap Variables

Bootstrap variables can be customized in `src/index.scss`. Current customizations include:

- **Colors**: Custom primary, secondary, and other theme colors
- **Typography**: Custom font family and heading weights
- **Border Radius**: Rounded corners for cards and buttons
- **Shadows**: Subtle box shadows for depth
- **Borders**: Minimal border widths for clean appearance

### Adding New Pages

1. Create a new component in `src/Pages/`
2. Import it in `src/main.jsx`
3. Add a route to the router configuration
4. Add a navigation link in `src/App.jsx`

## Assignment Requirements Met

✅ React app created with Vite (JavaScript)  
✅ Bootstrap installed via npm  
✅ Bootstrap SCSS imported in `src/index.scss`  
✅ `index.scss` imported in `src/main.jsx`  
✅ React Router implemented in `src/main.jsx`  
✅ Two routes added (Home and Contact)  
✅ `src/App.jsx` used as root/layout component with `<Outlet />`  
✅ Both pages created matching the expected outcome  
✅ Responsive design works on all devices  
✅ Navigation links work with React Router (using react-router-bootstrap)  
✅ React Bootstrap components used throughout  
✅ Less than 20 lines of custom CSS written (most styling via Bootstrap variables)  
✅ Additional component library added (React Toastify for notifications)  

## Component Library: React Toastify

React Toastify was added to enhance the user experience with toast notifications. It's implemented in the Contact page to provide visual feedback when the form is submitted.

**Benefits:**
- Non-intrusive notifications
- Customizable appearance and positioning
- Easy to use API
- Improves user feedback and engagement

## License

This project is for educational purposes as part of a web development course.
