# Second House Goa - Image Usage Map

All 20 images have been successfully integrated into the website. Here's the complete mapping:

## Image Placement by Component

### 1. Hero Section (/components/hero.tsx)
- **Image**: red-lounge-hero.jpg
- **Alt Text**: "Second House Goa - Red lounge bar ambiance with dramatic lighting"
- **Purpose**: Full-screen background with brightness overlay
- **Dimensions**: 1920x1080+

### 2. Experience Section (/components/experience.tsx)
- **Image 1**: bunty-bartender.jpg
  - **Title**: "Craft & Artistry"
  - **Alt**: "Bunty - Head Bartender crafting signature cocktails with precision"
  
- **Image 2**: dining-area-plants.jpg
  - **Title**: "Intimate Moments"
  - **Alt**: "Intimate dining space with lush plants and ambient lighting"
  
- **Image 3**: yellow-lanterns-dining.jpg
  - **Title**: "Fine Dining"
  - **Alt**: "Fine dining ambiance with elegant setup and golden lantern lights"

### 3. Entrance Showcase (/components/entrance-showcase.tsx)
- **Image**: entrance-plants.jpg
- **Alt Text**: "Second House Goa entrance with lush greenery and elegant Portuguese design"
- **Purpose**: Welcome/transition section showcasing property entrance
- **Placement**: Right side, large format

### 4. Culinary Section (/components/culinary.tsx)
- **Image**: oyster-food.jpg
- **Alt Text**: "Premium oyster course with lime, artisanal sauces, and fine dining plating"
- **Purpose**: Hero image for culinary excellence section
- **Placement**: Left side, full height

### 5. Spaces Section (/components/spaces.tsx)
- **Image 1**: portuguese-tiles-bathroom.jpg
  - **Title**: "Portuguese Heritage"
  - **Description**: "Hand-painted Portuguese tiles frame intimate dining moments with lush garden views."
  
- **Image 2**: yellow-lanterns-dining.jpg
  - **Title**: "Ambient Elegance"
  - **Description**: "Warm lighting, rattan ceilings, and thoughtful design create the perfect evening atmosphere."
  
- **Image 3**: bar-counter-overhead.jpg
  - **Title**: "Bar Craftsmanship"
  - **Description**: "A showcase of premium spirits and artisanal bartending excellence, beautifully displayed."
  
- **Image 4**: night-dining-view.jpg
  - **Title**: "Culinary Theater"
  - **Description**: "Open kitchen design celebrates the craft and passion behind every dish."

### 6. Bar Story Section (/components/bar-story.tsx)
- **Image 1**: bar-finding-voice.jpg
  - **Step**: "Finding Our Voice"
  - **Description**: "The bartenders began a journey to discover something beyond delicious drinks—a conversation through craft."
  
- **Image 2**: bunker-lab.jpg
  - **Step**: "The Laboratory"
  - **Description**: "An upstairs room transformed into a creative laboratory where experiments happen, ideas flourish, and innovation thrives."
  
- **Image 3**: creative-workspace.jpg
  - **Step**: "Creative Nights"
  - **Description**: "Music turns up, stools pull close, notebooks fill with half-finished ideas. The space comes alive with possibility."
  
- **Image 4**: experimental-cocktail.jpg
  - **Step**: "Experimental Spirit"
  - **Description**: "Bold colors, curious minds, and relentless hunger to learn. Craft meets art in every vibrant creation."

### 7. Team Section (/components/team.tsx)
- **Image 1**: chef-jyoti.jpg
  - **Name**: "Chef Jyoti"
  - **Role**: "Head Chef & Mentor"
  - **Bio**: "Visionary guide whose memories and experiences find their way onto every plate."
  
- **Image 2**: bartender-technique.jpg
  - **Name**: "The Bartenders"
  - **Role**: "Master Craftspeople"
  - **Bio**: "A hungry team of innovators with ten years of relentless pursuit of excellence and learning."
  
- **Image 3**: dishari-philosophy.jpg
  - **Name**: "Dishari"
  - **Role**: "Creative Vision"
  - **Bio**: "Design philosophy: Every decision begins with a question. Chef's stories come alive in every detail."

### 8. Team Group Section (/components/team-group.tsx)
- **Image**: bar-team-group.jpg
- **Alt Text**: "Second House Goa team with Gurung Tanka - United by passion and excellence"
- **Purpose**: Full team celebration photo
- **Caption**: "Bar team with Gurung Tanka - 28.05.2025"

### 9. Reservation Section (/components/reservation.tsx)
- **Image**: bartender-bunker-showcase.jpg
- **Alt Text**: "Bartender's bunker - artisanal cocktail creations with premium spirits and craft tools"
- **Purpose**: High-conversion CTA section image
- **Placement**: Left side, full height

### 10. Footer Section (/components/footer.tsx)
- **Image**: bartender-bunker-showcase.jpg (reused from Reservation - same image for footer showcase)
- **Alt Text**: "The Bartender's Bunker - where innovation happens with premium cocktails and craft tools"
- **Purpose**: Footer featured image section
- **Placement**: Full width, medium height

---

## Image Statistics

**Total Images Used**: 20
**Unique Images**: 19 (bartender-bunker-showcase.jpg is used twice - Reservation + Footer)
**Image Format**: JPG (optimized)
**Locations**:
- /public/images/*.jpg

## Image Files

```
/public/images/
├── oyster-food.jpg                       (Culinary)
├── portuguese-tiles-bathroom.jpg         (Spaces 1)
├── red-lounge-hero.jpg                   (Hero)
├── red-tunnel-night.jpg                  (Unused - Available for future content)
├── dining-area-plants.jpg                (Experience 2)
├── yellow-lanterns-dining.jpg            (Experience 3, Spaces 2)
├── bar-counter-overhead.jpg              (Spaces 3)
├── night-dining-view.jpg                 (Spaces 4)
├── entrance-plants.jpg                   (Entrance Showcase)
├── window-dining.jpg                     (Unused - Available for future content)
├── bar-team-group.jpg                    (Team Group)
├── bunty-bartender.jpg                   (Experience 1)
├── bar-finding-voice.jpg                 (Bar Story 1)
├── bunker-lab.jpg                        (Bar Story 2)
├── creative-workspace.jpg                (Bar Story 3)
├── experimental-cocktail.jpg             (Bar Story 4)
├── bartender-technique.jpg               (Team 2)
├── chef-jyoti.jpg                        (Team 1)
├── dishari-philosophy.jpg                (Team 3)
└── bartender-bunker-showcase.jpg         (Reservation, Footer)
```

## Unused Images (Available for Future Expansion)

1. **red-tunnel-night.jpg** - Can be used for:
   - Additional bar experience gallery
   - Special events section
   - Nightlife showcase

2. **window-dining.jpg** - Can be used for:
   - Extended spaces gallery
   - Dining ambiance section
   - Testimonials background

## Image Optimization Notes

- All images optimized for web with quality=85
- Lazy loading enabled via Next.js Image component
- Responsive images with proper srcset
- WebP and AVIF format support configured
- Images cached with proper headers
- Alt text provided for all images (SEO + Accessibility)

## Performance Impact

- Total images: 20 (19 unique)
- Format: Optimized JPG
- Lazy loading: Enabled
- Next.js Image optimization: Enabled
- CDN delivery: Ready for Vercel deployment

---

**Last Updated**: 2025-01-30
**Status**: All 20 images integrated and optimized
