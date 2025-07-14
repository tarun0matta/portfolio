# Tarun Matta - Portfolio

A modern, responsive portfolio website built with React, showcasing my expertise in AI/ML and web development. The site features a clean, minimalist design with smooth animations, interactive components, and a focus on user experience.åå

## Overview

This portfolio is designed to demonstrate both technical proficiency and design aesthetics. It implements modern web development practices including component-based architecture, responsive design principles, and performant animations.

## Features

### User Interface
- Modern, responsive design built with React and TailwindCSS
- Smooth page transitions and component animations using Framer Motion
- Dark theme with gradient accents for optimal viewing
- Mobile-first approach with hamburger menu for smaller screens

### Interactive Components
- Dynamic project cards with filtering capabilities
- Animated skill bars showing technology proficiency
- Timeline-based experience section with fade-in animations
- PDF resume preview with download functionality
- Fully functional contact form with validation

### Technical Implementation

#### State Management
- React hooks for local state management
- Custom hooks for scroll progress and animations
- Form validation with real-time error feedback

#### Animation System
- Framer Motion for page transitions
- Scroll-based animations for content sections
- Interactive hover effects on cards and buttons
- Progress bars with dynamic loading animations

#### Responsive Design
- Breakpoint-based layouts using Tailwind's responsive classes
- Mobile-first approach with progressive enhancement
- Flexible grid systems for project showcases
- Optimized typography and spacing across devices

## Tech Stack

### Core Technologies
- React 18 with Hooks
- Vite for build tooling
- TailwindCSS for styling
- Framer Motion for animations

### Additional Libraries
- React Router for navigation
- EmailJS for contact form functionality
- React Icons for UI elements

## Project Structure

```
my-portfolio/
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Navbar.jsx   # Navigation component
│   │   ├── Footer.jsx   # Footer component
│   │   └── ProjectCard.jsx # Project display component
│   ├── pages/          # Page components
│   │   ├── Home.jsx    # Landing page
│   │   ├── About.jsx   # About section
│   │   ├── Projects.jsx # Projects showcase
│   │   ├── Resume.jsx  # Resume section
│   │   └── Contact.jsx # Contact form
│   ├── assets/         # Static assets
│   └── App.jsx         # Main application component
├── public/             # Public assets
└── package.json        # Project dependencies
```

## Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/tarun0matta/portfolio.git
   cd portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Configure EmailJS
   Create a `.env` file in the root directory:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Start development server
   ```bash
   npm run dev
   ```

5. Build for production
   ```bash
   npm run build
   ```

## Responsive Design

The portfolio implements a responsive design system with the following breakpoints:
- Desktop (1200px and above)
  - Full navigation menu
  - Grid-based project layout
  - Enhanced animations
- Tablet (768px - 1199px)
  - Adapted grid layouts
  - Optimized spacing
- Mobile (320px - 767px)
  - Hamburger menu navigation
  - Single column layouts
  - Touch-friendly interactions

## Customization

### Styling
1. Colors and Theme
   - Edit theme colors in `tailwind.config.js`
   - Modify gradient values in component files
   - Adjust dark mode values in global CSS

2. Content
   - Update project data in `Projects.jsx`
   - Modify skill sets in `Home.jsx`
   - Edit experience details in component files

3. Components
   - Customize animation parameters in Framer Motion components
   - Adjust component layouts in respective files
   - Modify form validation rules in `Contact.jsx`

## Contact

- Email: sstmatta@gmail.com
- LinkedIn: [Tarun Matta](https://linkedin.com/in/sstmatta)
- GitHub: [@tarun0matta](https://github.com/tarun0matta)

## License

This project is open source and available under the [MIT License](LICENSE).
