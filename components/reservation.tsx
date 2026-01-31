'use client'

import React from "react"

import Image from 'next/image'
import { useState } from 'react'
import { useInView } from '@/hooks/use-in-view'

export default function ReservationSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    partySize: '',
    eventType: 'dining',
    message: '',
  })
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Email submission
      const emailRes = await fetch('/api/send-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      // WhatsApp submission
      if (emailRes.ok) {
        await fetch('/api/send-whatsapp', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })
      }

      setStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        partySize: '',
        eventType: 'dining',
        message: '',
      })
      setTimeout(() => setStatus(''), 5000)
    } catch (error) {
      console.log('[v0] Error:', error)
      setStatus('error')
      setTimeout(() => setStatus(''), 5000)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="reserve"
      ref={ref}
      className="py-24 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div
            className="order-2 lg:order-1"
            style={{
              animation: inView ? 'slideInLeft 0.8s ease-out' : 'none',
            }}
          >
            <div className="relative overflow-hidden rounded-lg h-96 lg:min-h-[600px]">
              <Image
                src="/images/bartender-bunker-showcase.jpg"
                alt="Bartender's bunker - artisanal cocktail creations with premium spirits and craft tools"
                fill
                className="object-cover"
                quality={85}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Side - Form */}
          <div
            className="order-1 lg:order-2"
            style={{
              animation: inView ? 'slideInRight 0.8s ease-out' : 'none',
            }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary">
              Plan Your Experience
            </h2>
            <div className="w-16 h-1 bg-secondary mb-6"></div>
            <p className="text-lg text-muted-foreground mb-8">
              Join us for an unforgettable dining experience. Reserve your table or
              inquire about private events.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-sm bg-white text-primary placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-sm bg-white text-primary placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number (WhatsApp)"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-sm bg-white text-primary placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary transition"
                />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-sm bg-white text-primary focus:outline-none focus:ring-2 focus:ring-secondary transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="number"
                  name="partySize"
                  placeholder="Party Size"
                  min="1"
                  max="20"
                  value={formData.partySize}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-sm bg-white text-primary placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary transition"
                />
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-sm bg-white text-primary focus:outline-none focus:ring-2 focus:ring-secondary transition"
                >
                  <option value="dining">Dining Experience</option>
                  <option value="celebration">Celebration</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="private">Private Dining</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <textarea
                name="message"
                placeholder="Special Requests (optional)"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-border rounded-sm bg-white text-primary placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary transition resize-none"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-4 bg-secondary text-white font-semibold rounded-sm hover:bg-secondary/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Reserve Your Table'}
              </button>

              {status === 'success' && (
                <div className="p-4 bg-green-100 border border-green-300 text-green-800 rounded-sm animate-in fade-in">
                  Thank you! We'll contact you soon to confirm your reservation.
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 bg-red-100 border border-red-300 text-red-800 rounded-sm animate-in fade-in">
                  Something went wrong. Please try again or contact us directly.
                </div>
              )}
            </form>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Prefer to reach us directly?
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:hello@secondhousegoa.com"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-sm hover:bg-primary hover:text-white transition-colors"
                >
                  <span>📧</span> Email
                </a>
                <a
                  href="https://wa.me/919876543210"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-secondary text-secondary rounded-sm hover:bg-secondary hover:text-white transition-colors"
                >
                  <span>💬</span> WhatsApp
                </a>
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-sm hover:bg-primary hover:text-white transition-colors"
                >
                  <span>📞</span> Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
