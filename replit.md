# Apurva Windows - Premium Window Solutions

## Overview

Apurva Windows is a premium window solutions website showcasing mosquito screens, invisible grills, and bird nets. The project is a modern, responsive website built with pure HTML, CSS, and JavaScript, featuring luxury design aesthetics with a navy blue (#001635) and gold color scheme. The site includes an intro animation, smooth scrolling navigation, product showcases, testimonials, and contact functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Pure HTML/CSS/JavaScript**: Static website with no framework dependencies
- **Single Page Application (SPA)**: All content on one page with smooth scrolling navigation
- **Responsive Design**: Mobile-first approach with hamburger menu and adaptive layouts
- **Component-based Structure**: Modular sections (hero, products, testimonials, contact)

### Design System
- **Typography**: Montserrat for headings, Open Sans for body text via Google Fonts
- **Color Scheme**: Luxury navy blue (#001635) primary with gold accents (#d4af37)
- **CSS Variables**: Centralized color and style management in :root
- **Animation System**: CSS transitions and JavaScript-driven intro animation

### Navigation System
- **Fixed Navigation**: Sticky navbar with scroll effects
- **Smooth Scrolling**: JavaScript-powered smooth scroll between sections
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Active States**: Dynamic highlighting of current section

### Interactive Features
- **Intro Animation**: 3-second brand logo animation on page load
- **Testimonial Slider**: JavaScript carousel for customer reviews
- **Video Carousels**: Product demonstration videos
- **Contact Form**: Client-side form handling and validation

### Performance Optimizations
- **Font Loading**: Preloaded Google Fonts with display=swap
- **Image Optimization**: WebP format for logos and images
- **CSS Organization**: Modular CSS with efficient selectors
- **Lazy Loading**: Deferred JavaScript execution until DOM ready

## External Dependencies

### CDN Resources
- **Google Fonts**: Montserrat and Open Sans font families
- **Font Awesome 6.0.0**: Icon library for UI elements

### Asset Management
- **Images**: WebP format logos stored in assets/images/
- **CSS**: Modular stylesheets in assets/css/
- **JavaScript**: Feature-specific modules for navigation, animations, and interactions

### Browser Compatibility
- **Modern Browsers**: ES6+ JavaScript features
- **CSS Grid/Flexbox**: Modern layout systems
- **Backdrop Filter**: Advanced CSS effects for navbar transparency