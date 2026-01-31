'use client'

import Image from 'next/image'
import { useInView } from '@/hooks/use-in-view'

export default function TeamGroupSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section
      ref={ref}
      className="py-12 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-12"
          style={{
            animation: inView ? 'fadeInUp 0.8s ease-out' : 'none',
          }}
        >
          <p className="text-lg text-muted-foreground italic">
            Our passionate team united by one mission: creating unforgettable experiences
          </p>
        </div>

        <div
          className="relative overflow-hidden rounded-lg h-96 md:min-h-[400px] md:aspect-video"
          style={{
            animation: inView ? 'scaleIn 0.8s ease-out 0.2s both' : 'none',
          }}
        >
          <Image
            src="/images/bar-team-group.jpg"
            alt="Second House Goa team with Gurung Tanka - United by passion and excellence"
            fill
            className="object-cover"
            quality={85}
            sizes="(max-width: 768px) 100vw, 80vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>

        <div
          className="text-center mt-12"
          style={{
            animation: inView ? 'fadeInUp 0.8s ease-out 0.3s both' : 'none',
          }}
        >
          <p className="text-center text-muted-foreground italic">
            Bar team with Gurung Tanka - 28.05.2025
          </p>
        </div>
      </div>
    </section>
  )
}
