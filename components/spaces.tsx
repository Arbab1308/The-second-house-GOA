'use client'

import Image from 'next/image'
import { useInView } from '@/hooks/use-in-view'

export default function SpacesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const spaces = [
    {
      src: '/images/portuguese-tiles-bathroom.jpg',
      title: 'Portuguese Heritage',
      description: 'Hand-painted Portuguese tiles frame intimate dining moments with lush garden views.',
    },
    {
      src: '/images/yellow-lanterns-dining.jpg',
      title: 'Ambient Elegance',
      description: 'Warm lighting, rattan ceilings, and thoughtful design create the perfect evening atmosphere.',
    },
    {
      src: '/images/bar-counter-overhead.jpg',
      title: 'Bar Craftsmanship',
      description: 'A showcase of premium spirits and artisanal bartending excellence, beautifully displayed.',
    },
    {
      src: '/images/night-dining-view.jpg',
      title: 'Culinary Theater',
      description: 'Open kitchen design celebrates the craft and passion behind every dish.',
    },
  ]

  return (
    <section
      id="spaces"
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
            Our Spaces
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every corner thoughtfully designed for unforgettable moments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {spaces.map((space, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg"
              style={{
                animation: inView
                  ? `fadeInUp 0.8s ease-out ${index * 0.15}s both`
                  : 'none',
              }}
            >
              <div className="relative overflow-hidden h-80 md:h-96">
                <Image
                  src={space.src || "/placeholder.svg"}
                  alt={space.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  quality={85}
                />
              </div>
              <div className="bg-white p-6">
                <h3 className="text-xl font-serif font-bold text-primary mb-2">
                  {space.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {space.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
