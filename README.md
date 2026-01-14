# C4 — Cortext Cloud Computing Corporation

Production-ready AI and automation on Google Cloud.

## Tech Stack

- React 18 + TypeScript
- Vite 5.4
- Framer Motion 12.26.1 (scroll animations)
- Tailwind CSS 3.4
- React Router 6.30
- Embla Carousel 8.6
- shadcn-ui components

## Development

```bash
npm install
npm run dev
```

Open http://localhost:8080

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── animations/   # Scroll effects and animations
│   ├── common/       # Reusable UI components
│   ├── graphics/     # Visual elements
│   ├── layout/       # PageLayout, Header, Footer
│   ├── sections/     # Homepage sections
│   └── ui/           # shadcn-ui components
├── pages/            # All routes
├── data/             # Content (services, solutions, industries)
├── hooks/            # Custom hooks
└── lib/              # Utilities
```

## Features

- **Horizontal Scroll Sections**: Vertical scroll mapped to horizontal card movement
- **SVG Animations**: Animated connection lines and progress indicators
- **Sticky Scroll Effects**: Scroll-linked animations throughout
- **Multi-page Routing**: React Router with lazy loading
- **Performance Optimized**: 90+ Lighthouse score target

## Performance

Target metrics:
- Lighthouse Performance: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1
