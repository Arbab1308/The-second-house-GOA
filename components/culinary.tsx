'use client'

import Image from 'next/image'
import { useInView } from '@/hooks/use-in-view'

export default function CulinarySection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section
      id="culinary"
      ref={ref}
      className="py-24 bg-primary text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div
            className="order-2 md:order-1"
            style={{
              animation: inView ? 'slideInLeft 0.8s ease-out' : 'none',
            }}
          >
            <div className="relative overflow-hidden rounded-lg h-96 md:min-h-[500px]">
              <Image
                src="/images/oyster-food.jpg"
                alt="Premium oyster course with lime, artisanal sauces, and fine dining plating"
                fill
                className="object-cover"
                quality={85}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content Side */}
          <div
            className="order-1 md:order-2"
            style={{
              animation: inView ? 'slideInRight 0.8s ease-out' : 'none',
            }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Culinary Excellence
            </h2>
            <div className="w-16 h-1 bg-secondary mb-6"></div>
            <p className="text-lg leading-relaxed mb-6 text-gray-100">
              Each plate tells a story. Our culinary team crafts dishes that celebrate
              premium ingredients, innovative techniques, and unforgettable flavors.
            </p>
            <p className="text-lg leading-relaxed text-gray-100">
              From fresh oysters to signature preparations, we invite you to explore
              a world where tradition meets creativity.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                'Seasonal menu with premium ingredients',
                'Chef-curated specialty dishes',
                'Sustainable sourcing practices',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-secondary text-xl">✓</span>
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
