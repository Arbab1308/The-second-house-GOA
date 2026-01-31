'use client'

import Image from 'next/image'
import { useInView } from '@/hooks/use-in-view'

export default function EntranceShowcase() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section
      ref={ref}
      className="py-24 bg-gradient-to-b from-white to-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            style={{
              animation: inView ? 'slideInLeft 0.8s ease-out' : 'none',
            }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">
              Welcome to Second House
            </h2>
            <div className="w-16 h-1 bg-secondary mb-6"></div>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              As you step through our doors, you enter a world where design meets purpose.
              Lush greenery frames the entrance, setting the tone for an experience that celebrates
              nature, craft, and human connection.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              Every detail—from the Portuguese tiles to the warm lighting—has been thoughtfully
              curated to create moments that linger long after you leave.
            </p>
            <ul className="space-y-4">
              {[
                'Thoughtfully curated design in every corner',
                'A space that celebrates nature and craftsmanship',
                'Where memories are made and stories are told',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-secondary text-xl flex-shrink-0">✓</span>
                  <span className="text-base text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div
            className="relative overflow-hidden rounded-lg h-96 lg:min-h-[500px]"
            style={{
              animation: inView ? 'slideInRight 0.8s ease-out' : 'none',
            }}
          >
            <Image
              src="/images/entrance-plants.jpg"
              alt="Second House Goa entrance with lush greenery and elegant Portuguese design"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              quality={85}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
