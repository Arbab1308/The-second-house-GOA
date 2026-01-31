# Second House Goa - Deployment Guide

## Pre-Deployment Checklist

### Essential Updates Required
Before deploying, update these contact details:

#### 1. Reservation Form & Footer
**File**: `/components/reservation.tsx` and `/components/footer.tsx`

```javascript
// Update these values:
- Phone: +919876543210 → Your actual WhatsApp number
- Email: hello@secondhousegoa.com → Your email
- Hours: Update opening hours
- Address: Update Goa address
```

#### 2. API Routes
**Files**: `/app/api/send-inquiry/route.ts` and `/app/api/send-whatsapp/route.ts`

```javascript
// Add your email service integration:
// - Resend
// - SendGrid
// - Nodemailer
// - Custom email service

// Add WhatsApp Business API:
// - Twilio
// - WhatsApp Business API
// - Custom integration
```

#### 3. Meta Data
**File**: `/app/layout.tsx`

Update JSON-LD schema with actual phone, email, and address.

#### 4. Sitemap
**File**: `/app/sitemap.ts`

Update `baseUrl` from placeholder to actual domain:
```typescript
const baseUrl = 'https://yourdomain.com'
```

## Deployment Steps

### Option 1: Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial Second House Goa website"
git push origin main
```

2. **Create Vercel Project**
- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Select your GitHub repository
- Click "Deploy"

3. **Environment Variables** (if needed)
```
EMAIL_SERVICE_KEY=your_key_here
WHATSAPP_API_KEY=your_key_here
```

4. **Domain Setup**
- Add your custom domain in Vercel settings
- Configure DNS records
- Enable automatic HTTPS

### Option 2: Deploy to Other Platforms

#### Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

#### Self-Hosted (Docker)
```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

```bash
docker build -t second-house .
docker run -p 3000:3000 second-house
```

## Post-Deployment

### 1. Test Everything
- [ ] Hero section loads properly
- [ ] All images display correctly
- [ ] Navigation scrolls smoothly
- [ ] Forms submit without errors
- [ ] Reservation form sends emails
- [ ] WhatsApp integration works
- [ ] Mobile responsiveness works
- [ ] All animations play smoothly

### 2. SEO Verification
```bash
# Check sitemap
https://yourdomain.com/sitemap.xml

# Check robots.txt
https://yourdomain.com/robots.txt

# Verify in Google Search Console
1. Add property in GSC
2. Submit sitemap
3. Monitor crawl stats
4. Check coverage
```

### 3. Analytics Setup
```javascript
// Add Google Analytics to /app/layout.tsx
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### 4. Email Integration Examples

#### Using Resend
```javascript
// Install: npm install resend

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  const { name, email, phone, date, partySize, eventType, message } = await request.json()

  const result = await resend.emails.send({
    from: 'noreply@secondhousegoa.com',
    to: 'hello@secondhousegoa.com',
    subject: `New Reservation: ${name}`,
    html: `
      <h2>New Reservation Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Party Size:</strong> ${partySize}</p>
      <p><strong>Event Type:</strong> ${eventType}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  })

  return NextResponse.json(result)
}
```

#### Using Twilio for WhatsApp
```javascript
// Install: npm install twilio

import twilio from 'twilio'

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)

export async function POST(request: NextRequest) {
  const { name, phone, date, partySize, eventType } = await request.json()

  const message = await client.messages.create({
    from: 'whatsapp:+1234567890', // Your Twilio WhatsApp number
    to: `whatsapp:${phone}`,
    body: `Reservation confirmed: ${name}, ${partySize} guests, ${date}, ${eventType}`
  })

  return NextResponse.json({ success: true })
}
```

### 5. Performance Optimization

#### Caching Headers
```javascript
// Add to next.config.mjs
headers: async () => [
  {
    source: '/images/:path*',
    headers: [
      { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
    ],
  },
  {
    source: '/:path*',
    headers: [
      { key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=3600' },
    ],
  },
]
```

#### Image Optimization
- All images served through Next.js Image component
- Automatic WebP/AVIF conversion
- Responsive images with srcset
- Lazy loading enabled

### 6. Monitor & Maintain

#### Weekly Tasks
- [ ] Check form submissions
- [ ] Monitor error logs
- [ ] Verify images load correctly
- [ ] Test all CTAs

#### Monthly Tasks
- [ ] Review SEO rankings
- [ ] Check Google Analytics
- [ ] Update menu if needed
- [ ] Monitor performance metrics

#### Quarterly Tasks
- [ ] Update testimonials/reviews
- [ ] Refresh team photos
- [ ] Review and optimize CTAs
- [ ] Check competitor sites

## Troubleshooting

### Images Not Loading
- Verify Vercel Blob domain in `next.config.mjs`
- Check image URLs are correct
- Clear Next.js cache: `rm -rf .next`

### Form Not Submitting
- Check API routes exist
- Verify email service credentials
- Check CORS settings
- Monitor browser console for errors

### Slow Performance
- Run Lighthouse audit
- Check image sizes
- Enable caching headers
- Optimize JavaScript bundles

### SEO Issues
- Verify robots.txt exists
- Check sitemap.xml format
- Test with Google Search Console
- Check for 404 errors

## Support & Contact

For deployment issues:
1. Check error logs in Vercel/hosting dashboard
2. Review console errors in browser DevTools
3. Test locally: `npm run dev`
4. Check Next.js documentation

---

**Deploy with confidence!** 🚀
