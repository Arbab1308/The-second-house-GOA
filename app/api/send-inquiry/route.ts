import { NextRequest, NextResponse } from 'next/server'

const RESEND_API_KEY = process.env.RESEND_API_KEY
const RESTAURANT_EMAIL = process.env.RESTAURANT_EMAIL || 'hello@secondhousegoa.com'

export async function POST(request: NextRequest) {
  try {
    const {
      name,
      email,
      phone,
      date,
      partySize,
      eventType,
      message,
    } = await request.json()

    // Validate inputs
    if (!name || !email || !phone || !date || !partySize) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Format the inquiry message
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a1a1a; border-bottom: 3px solid #c75a3c; padding-bottom: 10px;">
          New Reservation Request
        </h2>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Guest Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
          <p><strong>Requested Date:</strong> ${new Date(date).toLocaleDateString()}</p>
          <p><strong>Party Size:</strong> ${partySize} guests</p>
          <p><strong>Event Type:</strong> ${eventType}</p>
        </div>

        ${message ? `
          <div style="background-color: #f0f8ff; padding: 15px; border-left: 4px solid #7a9b8f; margin: 20px 0;">
            <p><strong>Special Requests:</strong></p>
            <p>${message}</p>
          </div>
        ` : ''}

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ccc; color: #666; font-size: 12px;">
          <p>Please contact the guest to confirm their reservation.</p>
          <p>This email was sent from Second House Goa website reservation form.</p>
        </div>
      </div>
    `

    // Send email via Resend
    if (RESEND_API_KEY) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'Second House Goa <noreply@secondhousegoa.com>',
          to: RESTAURANT_EMAIL,
          replyTo: email,
          subject: `New Reservation Request from ${name}`,
          html: emailHtml,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        console.error('[v0] Resend Email Error:', errorData)
        throw new Error(`Resend error: ${response.statusText}`)
      }

      console.log('[v0] Email sent successfully via Resend')
    } else {
      console.warn('[v0] Resend API key not configured, logging email only')
      console.log('[v0] Email Inquiry (Demo):', {
        to: RESTAURANT_EMAIL,
        from: email,
        subject: `New Reservation: ${name}`,
        body: emailHtml,
      })
    }

    // Send confirmation email to guest
    if (RESEND_API_KEY) {
      const confirmationHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1a;">Thank You for Your Interest!</h2>
          <p>Dear ${name},</p>
          
          <p>We've received your reservation request for <strong>Second House Goa</strong>.</p>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Reservation Details:</strong></p>
            <p>Date: ${new Date(date).toLocaleDateString()}</p>
            <p>Party Size: ${partySize} guests</p>
            <p>Event Type: ${eventType}</p>
          </div>

          <p>Our team will contact you shortly to confirm your reservation.</p>
          
          <p style="margin-top: 30px;">
            Best regards,<br>
            <strong>Second House Goa</strong><br>
            <a href="https://secondhousegoa.com">Visit Our Website</a>
          </p>
        </div>
      `

      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'Second House Goa <hello@secondhousegoa.com>',
          to: email,
          subject: 'Reservation Request Received - Second House Goa',
          html: confirmationHtml,
        }),
      }).catch((err) => console.warn('[v0] Failed to send confirmation email:', err))
    }

    return NextResponse.json(
      { success: true, message: 'Inquiry sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Email Error:', error)
    return NextResponse.json(
      { error: 'Failed to send inquiry' },
      { status: 500 }
    )
  }
}
