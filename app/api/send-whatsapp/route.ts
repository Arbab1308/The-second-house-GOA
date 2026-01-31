import { NextRequest, NextResponse } from 'next/server'

const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN
const TWILIO_WHATSAPP_FROM = process.env.TWILIO_WHATSAPP_FROM || 'whatsapp:+14155238886' // Twilio sandbox number
const RESTAURANT_WHATSAPP = process.env.RESTAURANT_WHATSAPP_NUMBER || 'whatsapp:+919876543210' // Your WhatsApp number

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

    // Format WhatsApp message
    const whatsappMessageText =
      `*New Reservation Request - Second House Goa*\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Date: ${new Date(date).toLocaleDateString()}\n` +
      `Party Size: ${partySize} guests\n` +
      `Event Type: ${eventType}\n\n` +
      `${message ? `Special Requests: ${message}\n\n` : ''}` +
      `Please confirm this reservation.`

    // Send via Twilio WhatsApp API
    if (TWILIO_ACCOUNT_SID && TWILIO_AUTH_TOKEN) {
      const auth = Buffer.from(
        `${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`
      ).toString('base64')

      const response = await fetch(
        `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`,
        {
          method: 'POST',
          headers: {
            Authorization: `Basic ${auth}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            From: TWILIO_WHATSAPP_FROM,
            To: RESTAURANT_WHATSAPP,
            Body: whatsappMessageText,
          }).toString(),
        }
      )

      if (!response.ok) {
        const errorData = await response.json()
        console.error('[v0] Twilio WhatsApp Error:', errorData)
        throw new Error(`Twilio error: ${response.statusText}`)
      }

      console.log('[v0] WhatsApp message sent successfully via Twilio')
    } else {
      console.warn('[v0] Twilio credentials not configured, logging message only')
      console.log('[v0] WhatsApp Message (Demo):', whatsappMessageText)
    }

    return NextResponse.json(
      { success: true, message: 'WhatsApp notification sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] WhatsApp Error:', error)
    return NextResponse.json(
      { error: 'Failed to send WhatsApp message' },
      { status: 500 }
    )
  }
}
