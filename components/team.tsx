'use client'

import Image from 'next/image'
import { useInView } from '@/hooks/use-in-view'

export default function TeamSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const team = [
    {
      image: '/images/chef-jyoti.jpg',
      name: 'Chef Jyoti',
      role: 'Head Chef & Mentor',
      bio: 'Visionary guide whose memories and experiences find their way onto every plate.',
    },
    {
      image: '/images/bartender-technique.jpg',
      name: 'The Bartenders',
      role: 'Master Craftspeople',
      bio: 'A hungry team of innovators with ten years of relentless pursuit of excellence and learning.',
    },
    {
      image: '/images/dishari-philosophy.jpg',
      name: 'Dishari',
      role: 'Creative Vision',
      bio: 'Design philosophy: Every decision begins with a question. Chef\'s stories come alive in every detail.',
    },
  ]

  return (
    <section
      id="team"
      ref={ref}
      className="py-24 bg-primary text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-16"
          style={{
            animation: inView ? 'fadeInUp 0.8s ease-out' : 'none',
          }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Meet Our Team
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Guided by passion, driven by curiosity, united by excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <div
              key={index}
              className="text-center"
              style={{
                animation: inView
                  ? `scaleIn 0.8s ease-out ${index * 0.15}s both`
                  : 'none',
              }}
            >
              <div className="relative overflow-hidden rounded-lg h-80 md:h-96 mb-6 group">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  quality={85}
                />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-2">
                {member.name}
              </h3>
              <p className="text-secondary font-semibold mb-4">
                {member.role}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-16 text-center"
          style={{
            animation: inView ? 'fadeInUp 0.8s ease-out 0.4s both' : 'none',
          }}
        >
          <p className="text-xl font-serif italic text-gray-200 mb-6">
            "The Second House changed how we tell stories. Every design decision began with a question."
          </p>
          <p className="text-secondary font-semibold">— Dishari</p>
        </div>
      </div>
    </section>
  )
}
