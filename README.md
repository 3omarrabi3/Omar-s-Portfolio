# Omar Rabea Shaban - AI Engineer Portfolio

A modern, responsive, and interactive portfolio website built for an AI Engineer and Data Science specialist.

## Technologies Used

- **React 19** (Vite)
- **Tailwind CSS 4** (Styling)
- **Framer Motion** (Animations)
- **Lucide React** (Icons)
- **HTML5 Canvas** (Particle Background)

## Features

- **Immersive Design**: Dark mode with deep tech blue and cyan accents, glassmorphism effects, and a custom particle background.
- **Smooth Animations**: Scroll-triggered animations using Framer Motion, typing effects, and hover micro-interactions.
- **Responsive Layout**: Mobile-first design that scales beautifully to tablets and large desktop screens.
- **Interactive Sections**: Tabbed skills view, timeline-based experience, and engaging project cards.

## Customization

### Colors
The color palette is defined in `src/index.css` using CSS variables:
- Primary: `#0d47a1`
- Secondary (Cyan): `#00bcd4`
- Background: `#050b14`

### Content
- **Hero**: Edit `src/components/Hero.tsx`
- **About**: Edit `src/components/About.tsx` (Replace the "ORS" placeholder with an actual image `<img>` tag)
- **Skills**: Edit `skillCategories` array in `src/components/Skills.tsx`
- **Experience**: Edit `experiences` array in `src/components/Experience.tsx`
- **Education**: Edit `education` array in `src/components/Education.tsx`
- **Certifications**: Edit `certifications` array in `src/components/Certifications.tsx`
- **Projects**: Edit `projects` array in `src/components/Projects.tsx`

### Assets Needed
To complete the portfolio, you should add the following assets:
1. A professional profile photo (circular) in the About section.
2. A PDF version of your CV to link to the "Download CV" button in the Hero section.
3. Actual links to your GitHub repositories and live demos in the Projects section.

## Deployment

This project is built with Vite and can be easily deployed to platforms like Vercel, Netlify, or GitHub Pages.

1. Build the project:
   ```bash
   npm run build
   ```
2. The output will be in the `dist` directory, which can be served by any static file server.
