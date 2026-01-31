'use client'

import Image from 'next/image'
import { useInView } from '@/hooks/use-in-view'

export default function ExperienceSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const images = [
    {
      src: '/images/bunty-bartender.jpg',
      alt: 'Bunty - Head Bartender crafting signature cocktails with precision',
      title: 'Craft & Artistry',
    },
    {
      src: '/images/dining-area-plants.jpg',
      alt: 'Intimate dining space with lush plants and ambient lighting',
      title: 'Intimate Moments',
    },
    {
      src: '/images/yellow-lanterns-dining.jpg',
      alt: 'Fine dining ambiance with elegant setup and golden lantern lights',
      title: 'Fine Dining',
    },
  ]

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-16"
          style={{
            animation: inView ? 'fadeInUp 0.8s ease-out' : 'none',
          }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary">
            The Experience
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover a space where culinary excellence meets unparalleled ambiance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg"
              style={{
                animation: inView
                  ? `fadeInUp 0.8s ease-out ${index * 0.2}s both`
                  : 'none',
              }}
            >
              <div className="relative overflow-hidden h-80 md:h-96">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  quality={85}
                />
              </div>
              <div className="bg-white p-6">
                <h3 className="text-xl font-serif font-bold text-primary">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
