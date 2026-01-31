# Second House Goa - Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Installation & Local Testing
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
# http://localhost:3000
```

### Step 2: Customize Your Information
Update these files with your details:

**Reservation Form** (`/components/reservation.tsx`)
```javascript
// Find and update:
- Phone: +919876543210 → your WhatsApp number
- Email: hello@secondhousegoa.com → your email
- Links: Update URL patterns
```

**Footer** (`/components/footer.tsx`)
```javascript
// Update:
- Phone number
- Email address
- Hours of operation
- Address/Location
- Instagram/Facebook links
```

**Layout Schema** (`/app/layout.tsx`)
```javascript
// Update JSON-LD:
- telephone
- email
- address
- sameAs (social media URLs)
```

### Step 3: Deploy to Vercel
```bash
# Push to GitHub
git add .
git commit -m "Second House Goa Website"
git push origin main

# Then:
# 1. Go to vercel.com
# 2. Click "New Project"
# 3. Select your GitHub repo
# 4. Click "Deploy"
# 5. Add custom domain
```

---

## 📋 Essential Commands

### Development
```bash
npm run dev          # Start dev server (localhost:3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Build & Deploy
```bash
# Local build test
npm run build && npm run start

# Deploy to Vercel (using CLI)
npm install -g vercel
vercel
```

---

## 🔧 Configuration Files

### Must Update Before Deployment

#### 1. `/components/reservation.tsx`
- Lines: Search for `+919876543210` and `hello@secondhousegoa.com`
- Change to: Your actual phone and email

#### 2. `/components/footer.tsx`
- Lines: Update all contact information
- Hours: Update opening hours for your business
- Links: Update Instagram/Facebook URLs

#### 3. `/app/layout.tsx`
- Lines: 48-91 contain the JSON-LD schema
- Update: telephone, email, address, business hours

#### 4. `/app/sitemap.ts`
- Line: `const baseUrl = 'https://secondhousegoa.com'`
- Change to: Your actual domain

#### 5. `/next.config.mjs`
- Already configured for Vercel Blob images
- No changes needed unless using different image provider

---

## 🖼️ Images Overview

**Total Images**: 20
**All Used Once**: ✅
**Format**: PNG (served as WebP/AVIF)
**Source**: Vercel Blob Storage

### Image Sections
| Section | Images |
|---------|--------|
| Hero | 1 |
| Experience | 3 |
| Entrance | 1 |
| Culinary | 1 |
| Spaces | 4 |
| Bar Story | 4 |
| Team | 4 |
| Reservation | 1 |
| Footer | 1 |

See `/IMAGE_INDEX.md` for complete mapping.

---

## 📧 Email & WhatsApp Setup

### Option A: Using Resend (Email)
```bash
npm install resend
```
1. Go to https://resend.com
2. Sign up and get API key
3. Add to `.env.local`: `RESEND_API_KEY=your_key`
4. Update `/app/api/send-inquiry/route.ts` with Resend code

### Option B: Using SendGrid (Email)
```bash
npm install @sendgrid/mail
```
1. Go to https://sendgrid.com
2. Get API key
3. Add to `.env.local`: `SENDGRID_API_KEY=your_key`
4. Update route with SendGrid code

### Option C: Using Twilio (WhatsApp)
```bash
npm install twilio
```
1. Go to https://twilio.com
2. Get WhatsApp sandbox credentials
3. Add to `.env.local`:
   - `TWILIO_ACCOUNT_SID=your_sid`
   - `TWILIO_AUTH_TOKEN=your_token`
   - `TWILIO_WHATSAPP_NUMBER=your_number`

---

## 🌐 Domain & Hosting

### Recommended: Vercel
- Easiest deployment
- Automatic HTTPS
- Environment variables support
- CDN included
- Free tier available

### Steps:
1. Create Vercel account
2. Connect GitHub
3. Select repo
4. Click Deploy
5. Add custom domain in settings

---

## ✅ Pre-Launch Checklist

### Content
- [ ] All contact information updated
- [ ] Hours of operation correct
- [ ] Team bios updated (if needed)
- [ ] Menu items accurate
- [ ] Instagram/social links correct

### Technical
- [ ] Email service configured
- [ ] WhatsApp integration ready
- [ ] Domain configured
- [ ] SSL certificate active
- [ ] Analytics set up

### Testing
- [ ] Test form submission
- [ ] Check all images load
- [ ] Verify animations work
- [ ] Mobile responsiveness OK
- [ ] Links work correctly
- [ ] No console errors

### SEO
- [ ] Google Search Console set up
- [ ] Sitemap submitted
- [ ] Meta tags verified
- [ ] Schema validated
- [ ] Open Graph tags correct

---

## 🐛 Troubleshooting

### Images Not Loading
```bash
# Check image URLs in components
# Verify Vercel Blob domain in next.config.mjs
# Clear cache: rm -rf .next
npm run dev
```

### Form Not Submitting
```javascript
// Check:
// 1. API routes exist in /app/api
// 2. Email service credentials in .env.local
// 3. Browser console for errors
// 4. Network tab for failed requests
```

### Performance Issues
```bash
# Run Lighthouse audit
npm run build
npm run start
# Open DevTools → Lighthouse
```

### Build Failures
```bash
# Check for TypeScript errors
npx tsc --noEmit

# Clear node_modules
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📊 File Size & Performance

### Expected Metrics
- **HTML**: ~50 KB
- **CSS**: ~30 KB (minified)
- **JavaScript**: ~100 KB (minified)
- **Images**: ~3-4 MB (optimized)
- **Total**: ~3.5-4 MB
- **Page Load**: ~2-3 seconds (4G)

---

## 🔐 Environment Variables

Create `.env.local`:
```
# Email Service
EMAIL_SERVICE_KEY=your_key_here
# or
RESEND_API_KEY=your_key_here
# or
SENDGRID_API_KEY=your_key_here

# WhatsApp Service
TWILIO_ACCOUNT_SID=your_sid
TWILIO_AUTH_TOKEN=your_token
WHATSAPP_NUMBER=your_number

# Optional
NEXT_PUBLIC_GA_ID=your_ga_id
```

---

## 📚 Documentation

- **Full Guide**: `/WEBSITE_GUIDE.md`
- **Deployment**: `/DEPLOYMENT.md`
- **Image Mapping**: `/IMAGE_INDEX.md`
- **Build Summary**: `/BUILD_SUMMARY.md`

---

## 🆘 Getting Help

### Common Issues

**"Module not found"**
```bash
npm install
rm -rf node_modules
npm install
```

**"Port 3000 in use"**
```bash
npx kill-port 3000
npm run dev
```

**"Build fails"**
```bash
npm run build -- --debug
# Check output for specific errors
```

---

## 🎯 Quick Links

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Vercel**: https://vercel.com
- **TypeScript**: https://www.typescriptlang.org/docs

---

## 📞 Contact & Support

For issues:
1. Check `/WEBSITE_GUIDE.md`
2. Review `/DEPLOYMENT.md`
3. Check Next.js documentation
4. Review your configuration

---

**You're ready to launch!** 🚀

All files prepared, all images included, ready for deployment.
Update contact info, set up email/WhatsApp, and deploy to Vercel.

Good luck with Second House Goa! 🌟
