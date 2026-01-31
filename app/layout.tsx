import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Second House Goa - Premium Restaurant Bar & Café | Book Your Experience',
  description: 'Discover Second House Goa, the ultimate destination for fine dining, artisanal cocktails, and unforgettable celebrations. Located in Goa with stunning ambiance, innovative cuisine, and world-class bartending. Reserve your table or private event today.',
  generator: 'v0.app',
  keywords: ['Second House Goa', 'restaurant Goa', 'bar Goa', 'fine dining Goa', 'cocktails Goa', 'private events Goa', 'celebrations', 'premium venue'],
  authors: [{ name: 'Second House Goa' }],
  openGraph: {
    title: 'Second House Goa - Premium Restaurant Bar & Café',
    description: 'Experience luxury dining, craft cocktails, and unforgettable moments in Goa',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const restaurantSchema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    'name': 'Second House Goa',
    'url': 'https://secondhousegoa.com',
    'image':
      '/images/image.png',
    'description':
      'Premium restaurant bar and café in Goa featuring fine dining, artisanal cocktails, and unforgettable celebrations',
    'telephone': '+919876543210',
    'email': 'hello@secondhousegoa.com',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Goa',
      'addressCountry': 'IN',
    },
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Tuesday', 'Wednesday', 'Thursday'],
        'opens': '18:00',
        'closes': '23:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Friday', 'Saturday'],
        'opens': '18:00',
        'closes': '00:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': 'Sunday',
        'opens': '18:00',
        'closes': '23:00',
      },
    ],
    'priceRange': '$$$',
    'servesCuisine': ['Contemporary', 'International', 'Cocktails'],
    'sameAs': [
      'https://instagram.com/thesecondhousegoa',
      'https://facebook.com/secondhousegoa',
    ],
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
