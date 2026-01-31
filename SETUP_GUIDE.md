# Second House Goa Website - Setup & Deployment Guide

## Prerequisites
- Node.js 18+ 
- npm or yarn
- Vercel account (optional, for deployment)
- Twilio account (WhatsApp integration) ✓ Already configured
- Resend account (Email integration) - Sign up at resend.com

---

## Step 1: Environment Variables Setup

Create a `.env.local` file in the project root with the following:

```bash
# Twilio WhatsApp (Already configured)
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_WHATSAPP_FROM=whatsapp:+14155238886
RESTAURANT_WHATSAPP_NUMBER=whatsapp:+919876543210

# Email Service - Resend (Get API key from https://resend.com)
RESEND_API_KEY=your_resend_api_key_here

# Restaurant Contact Info (Update with your details)
RESTAURANT_EMAIL=hello@secondhousegoa.com
RESTAURANT_PHONE=+919876543210
RESTAURANT_ADDRESS=Goa, India
```

### Getting Resend API Key
1. Visit https://resend.com
2. Sign up with your email
3. Go to API Keys section
4. Create new API key
5. Copy and paste into `.env.local`

---

## Step 2: Install Dependencies

```bash
npm install
# or
yarn install
```

---

## Step 3: Test Locally

```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000` and test:
- All sections load correctly
- Images display properly
- Scroll animations work
- Form submission works (will log to console)
- Navigation links work

---

## Step 4: Test Form Submission

### Test Email & WhatsApp Integration
1. Navigate to reservation section
2. Fill out the form:
   - Name: Test Guest
   - Email: your-email@test.com
   - Phone: +919876543210
   - Date: Tomorrow's date
   - Party Size: 4
   - Event Type: Private Dining
   - Special Requests: Test message

3. Click "Reserve Table"
4. Check browser console for logs:
   - Email sent confirmation
   - WhatsApp sent confirmation
   - Success message displays

### Production Testing
Once deployed to Vercel:
- Form will send real emails via Resend
- Form will send real WhatsApp messages via Twilio
- Check both email and WhatsApp for test messages

---

## Step 5: Deployment to Vercel

### Option A: Via Vercel Dashboard
1. Connect GitHub repository to Vercel
2. Go to Project Settings → Environment Variables
3. Add all environment variables from `.env.local`
4. Click Deploy

### Option B: Via Vercel CLI
```bash
npm install -g vercel
vercel env add TWILIO_ACCOUNT_SID
vercel env add TWILIO_AUTH_TOKEN
vercel env add TWILIO_WHATSAPP_FROM
vercel env add RESTAURANT_WHATSAPP_NUMBER
vercel env add RESEND_API_KEY
vercel env add RESTAURANT_EMAIL
vercel deploy
```

---

## Step 6: Post-Deployment Verification

After deploying to Vercel:

1. **Check Live Website**
   - Visit your Vercel domain
   - Verify all images load
   - Test all animations
   - Check responsive design on mobile

2. **Test Form Submission**
   - Fill and submit reservation form
   - Check your email for guest confirmation
   - Check WhatsApp for restaurant notification
   - Verify message formatting

3. **Monitor Performance**
   - Check Core Web Vitals in Vercel Analytics
   - Monitor API response times
   - Check error logs

4. **SEO Verification**
   - Test with Google Search Console
   - Verify meta tags in page source
   - Check sitemap.xml is accessible
   - Test Open Graph preview

---

## Twilio WhatsApp Setup Details

### Current Configuration
- **Account SID**: your_twilio_account_sid
- **Auth Token**: your_twilio_auth_token
- **From Number**: +14155238886 (Twilio Sandbox)
- **To Number**: +919876543210 (Your restaurant number)

### How It Works
1. Guest fills reservation form
2. Form submits to `/api/send-whatsapp`
3. API authenticates with Twilio using credentials
4. Message sent to restaurant's WhatsApp
5. Restaurant receives notification with all details

### Testing Twilio
```bash
# No need to test separately - integrated in form submission
# Messages appear in Twilio Console under Messages section
```

---

## Email Integration Details (Resend)

### Current Configuration
- **API Endpoint**: https://api.resend.com/emails
- **From Email**: noreply@secondhousegoa.com
- **Restaurant Email**: hello@secondhousegoa.com (update as needed)

### How It Works
1. Guest fills reservation form
2. Form submits to `/api/send-inquiry`
3. API sends two emails:
   - **To Restaurant**: Full reservation details
   - **To Guest**: Confirmation that request received
4. Both emails include formatted HTML
5. Reply-to: Guest's email address

### Email Templates
- Guest confirmation email (auto-generated)
- Restaurant notification email (auto-generated)
- Both include all reservation details
- Both include links back to website

---

## Troubleshooting

### Images Not Loading
- Check `/public/images/` directory has all 20 images
- Verify image filenames match component imports
- Check browser Network tab for 404 errors

### Form Not Submitting
- Check browser console for errors
- Verify environment variables are set
- Check API routes are accessible: `/api/send-inquiry`, `/api/send-whatsapp`
- Check CORS settings if applicable

### Emails Not Sending
- Verify `RESEND_API_KEY` is set and valid
- Check Resend dashboard for API key status
- Look for error logs in Vercel

### WhatsApp Not Sending
- Verify Twilio credentials are correct
- Check WhatsApp format: `whatsapp:+919876543210`
- Verify phone numbers include country code
- Check Twilio Console for message logs

### Animations Not Working
- Check browser DevTools for JavaScript errors
- Verify scroll animations trigger with useInView hook
- Test on latest browser version
- Check CSS animations in globals.css

---

## Monitoring & Maintenance

### Daily Checks
- Monitor form submissions in email/WhatsApp
- Check for any error logs in Vercel

### Weekly Checks
- Review Vercel analytics
- Check image load times
- Monitor API response times

### Monthly Checks
- Review SEO metrics in Google Console
- Check website speed with Lighthouse
- Test all features on multiple devices

---

## Contact & Support

### For Issues
1. Check TESTING_CHECKLIST.md for common issues
2. Review Vercel logs for errors
3. Test locally with `npm run dev`
4. Check API route console logs

### Important URLs
- Live Website: https://secondhousegoa.com (after deployment)
- Vercel Dashboard: https://vercel.com/dashboard
- Twilio Console: https://www.twilio.com/console
- Resend Dashboard: https://resend.com/dashboard
- Google Search Console: https://search.google.com/search-console

---

## Security Notes

### API Keys Protection
- Never commit `.env.local` to Git (already in .gitignore)
- Keep credentials secret
- Rotate keys regularly
- Use Vercel's environment variable encryption

### CORS & Validation
- Form validates all inputs server-side
- API checks for required fields
- Twilio authenticates with SID & Token
- Resend authenticates with API key

### HTTPS
- All API calls over HTTPS
- Sensitive data encrypted
- WhatsApp/Email in transit encrypted
- Form submission secure

---

## Next Steps

1. ✓ Get Resend API key
2. ✓ Add to `.env.local`
3. ✓ Test locally with `npm run dev`
4. ✓ Deploy to Vercel
5. ✓ Test live submission
6. ✓ Monitor performance

**You're all set!** 🚀
