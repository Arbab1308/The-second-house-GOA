'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-primary"
      style={{ animation: isLoaded ? 'fadeIn 1.2s ease-out' : 'none' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/red-lounge-hero.jpg"
          alt="Second House Goa - Red lounge bar ambiance with dramatic lighting"
          fill
          className="object-cover brightness-50"
          priority
          quality={85}
          sizes="100vw"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center text-white max-w-2xl px-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <h1
          className="text-5xl md:text-7xl font-serif font-bold mb-6 text-balance"
          style={{
            animation: isLoaded ? 'fadeInUp 0.8s ease-out 0.3s both' : 'none',
          }}
        >
          Second House
        </h1>
        <p
          className="text-lg md:text-2xl font-light mb-8 text-balance text-secondary/90"
          style={{
            animation: isLoaded ? 'fadeInUp 0.8s ease-out 0.5s both' : 'none',
          }}
        >
          Where Every Moment Becomes a Memory
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{
            animation: isLoaded ? 'fadeInUp 0.8s ease-out 0.7s both' : 'none',
          }}
        >
          <Link
            href="#reserve"
            className="px-8 py-4 bg-secondary text-white rounded-sm font-semibold hover:bg-secondary/90 transition-colors duration-300 text-lg hover:scale-105 transform"
          >
            Reserve Your Experience
          </Link>
          <Link
            href="#experience"
            className="px-8 py-4 border-2 border-white text-white rounded-sm font-semibold hover:bg-white/10 transition-colors duration-300 text-lg"
          >
            Explore
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        style={{ animation: 'fadeIn 1s ease-out 1.5s both' }}
      >
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white text-sm font-light">Scroll to Discover</span>
          <svg
            className="w-6 h-6 text-secondary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
