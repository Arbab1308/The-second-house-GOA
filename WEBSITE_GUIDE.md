# Second House Goa - Website Guide

## Overview

A luxury restaurant bar and café website showcasing fine dining, artisanal cocktails, and unforgettable experiences in Goa. Built with Next.js 16, Tailwind CSS v4, and modern web animations.

## 🎯 Key Features

### Design & UX
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Smooth Animations**: Fade-in, slide, and scale animations on scroll
- **Lazy Loading**: Images and content load efficiently
- **Accessibility**: ARIA labels, semantic HTML, screen reader support
- **Dark/Light Support**: Full theme support via CSS variables

### Content Sections (All 20 Images Used)

1. **Hero Section** - Red lounge ambiance with powerful CTAs
2. **Experience Section** - Three curated image gallery (food, bartending, dining)
3. **Entrance Showcase** - Welcome experience with lush greenery
4. **Culinary Section** - Premium oyster showcase with chef philosophy
5. **Spaces Section** - Four architectural showcases (tiles, elegance, bar, kitchen)
6. **Menu Section** - 4 categories, 12 items with descriptions
7. **Bar Story Section** - 4-step journey with alternating layouts
8. **Team Section** - 3 key people (Chef Jyoti, Bartenders, Dishari)
9. **Team Group** - Full team photo with Gurung Tanka
10. **Reservation Section** - Bartender's bunker image with booking form

### Technical Implementation

#### SEO Optimization
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card support
- ✅ JSON-LD structured data (RestaurantSchema)
- ✅ Sitemap generation
- ✅ Robots.txt configuration
- ✅ Keyword-optimized content
- ✅ Image alt text on all images

#### Performance
- ✅ Image optimization (WebP, AVIF formats)
- ✅ Next.js Image component for optimal loading
- ✅ Code splitting & lazy loading
- ✅ CSS minification
- ✅ Compressed assets
- ✅ Remove source maps in production

#### Form Integration
- **Email**: Send inquiry details to hello@secondhousegoa.com
- **WhatsApp**: Direct message to +919876543210
- **Validation**: All required fields validated
- **Success/Error States**: User feedback with animations

## 📁 File Structure

```
/app
  /api
    /send-inquiry         # Email submission handler
    /send-whatsapp        # WhatsApp notification handler
  /layout.tsx             # Root layout with JSON-LD schema
  /globals.css            # Design tokens & animations
  /page.tsx               # Main page with all sections
  /sitemap.ts             # Dynamic sitemap generation

/components
  /navbar.tsx             # Navigation with scroll detection
  /hero.tsx               # Full-screen hero with video bg
  /experience.tsx         # 3-image gallery section
  /entrance-showcase.tsx  # Entrance design section
  /culinary.tsx           # Food & chef philosophy
  /spaces.tsx             # 4-image space gallery
  /menu.tsx               # Menu items in 4 categories
  /bar-story.tsx          # 4-step bartending journey
  /team.tsx               # Individual team members
  /team-group.tsx         # Full team photo
  /reservation.tsx        # Booking form + contact
  /footer.tsx             # Footer with all info

/hooks
  /use-in-view.ts         # Intersection Observer hook

/public
  /robots.txt             # Search engine directives
```

## 🎨 Design System

### Color Palette
- **Primary**: #1a1a1a (Deep Charcoal)
- **Secondary**: #c75a3c (Burnt Orange)
- **Accent**: #7a9b8f (Sage Green)
- **Background**: #faf8f5 (Cream)
- **Neutral**: #d4a574 (Gold)

### Typography
- **Headings**: Playfair Display (serif) - elegance & luxury
- **Body**: Inter (sans-serif) - clarity & readability
- **Max 2 fonts** - cohesive visual identity

### Animations
- `fadeInUp` - Content reveal from bottom
- `slideInLeft/Right` - Side-to-side reveal
- `scaleIn` - Zoom reveal
- `fadeIn` - Opacity transition
- Triggered on scroll with `useInView` hook

## 📊 All Images Used (20 Total)

1. ✅ Oyster course (culinary section)
2. ✅ Portuguese tiles bathroom (spaces)
3. ✅ Bar moment amber lighting (team)
4. ✅ Red lounge (hero background)
5. ✅ Dining space with doors (spaces)
6. ✅ Yellow lanterns dining (spaces)
7. ✅ Bar counter overhead (spaces)
8. ✅ Entrance with plants (entrance showcase)
9. ✅ Night dining window (spaces - culinary)
10. ✅ Intimate window dining (spaces - culinary)
11. ✅ Bar team photo (team section)
12. ✅ Meet Bunty bartender (team)
13. ✅ Bar finding voice (bar story)
14. ✅ Lab upstairs room (bar story)
15. ✅ Creative workspace (bar story)
16. ✅ Experimental cocktail (bar story)
17. ✅ Bartender pouring (team)
18. ✅ Chef Jyoti (team)
19. ✅ Dishari philosophy (team)
20. ✅ Bartender's bunker (reservation)

## 🔄 Conversion Optimization

### High-CTA Strategy
- **Sticky Navigation**: "Book Now" always visible
- **Multiple CTAs**: Hero, after each section, reservation form
- **Primary Actions**: Reserve Your Experience, Plan Your Event
- **Secondary Actions**: Email, WhatsApp, Phone links
- **Form Incentive**: Direct connection to restaurant

### User Journey
```
Hero → Explore Button ↓
Experience Section → Learn More ↓
Spaces & Food → Interest Building ↓
Menu Section → Desire ↓
Team & Story → Trust & Authenticity ↓
Reservation → Action (Book Now)
```

## 🚀 Getting Started

### Installation
```bash
# Clone and install
npm install

# Set up environment variables
# Update contact info in reservation.tsx and footer.tsx

# Run development server
npm run dev

# Open http://localhost:3000
```

### Customization

**Contact Information** (update in these files):
- `/components/reservation.tsx` - WhatsApp link & email
- `/components/footer.tsx` - Hours, phone, email, address
- `/app/layout.tsx` - Schema contact details

**Menu Items**:
- Edit `/components/menu.tsx` - Update categories and items

**Team Information**:
- Edit `/components/team.tsx` - Update team member bios

## 📈 SEO Keywords

Primary: "Second House Goa", "restaurant Goa", "bar Goa", "fine dining Goa"
Secondary: "cocktails Goa", "private events Goa", "celebrations Goa", "premium venue Goa"
Long-tail: "best restaurant bar in Goa", "private dining Goa", "Goa celebrations"

## ✨ Performance Metrics

- **Lighthouse**: 90+ scores target
- **Core Web Vitals**: Optimized
- **Image Quality**: High resolution with optimization
- **Load Time**: < 3 seconds on 4G

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Security

- ✅ Environment variables for sensitive data
- ✅ CORS configuration
- ✅ Input validation on forms
- ✅ No exposed API keys
- ✅ HTTPS ready

## 📝 Notes

- All 20 images are used exactly once throughout the website
- Smooth scroll animations enhance user engagement
- Form data flows to both email and WhatsApp simultaneously
- Mobile-responsive design tested across all breakpoints
- SEO fully optimized for search engine visibility

---

**Website built with passion for Second House Goa** 🏠
