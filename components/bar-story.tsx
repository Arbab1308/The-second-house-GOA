'use client'

import Image from 'next/image'
import { useInView } from '@/hooks/use-in-view'

export default function BarStorySection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const storySteps = [
    {
      image: '/images/bar-finding-voice.jpg',
      title: 'Finding Our Voice',
      description: 'The bartenders began a journey to discover something beyond delicious drinks—a conversation through craft.',
    },
    {
      image: '/images/bunker-lab.jpg',
      title: 'The Laboratory',
      description: 'An upstairs room transformed into a creative laboratory where experiments happen, ideas flourish, and innovation thrives.',
    },
    {
      image: '/images/creative-workspace.jpg',
      title: 'Creative Nights',
      description: 'Music turns up, stools pull close, notebooks fill with half-finished ideas. The space comes alive with possibility.',
    },
    {
      image: '/images/experimental-cocktail.jpg',
      title: 'Experimental Spirit',
      description: 'Bold colors, curious minds, and relentless hunger to learn. Craft meets art in every vibrant creation.',
    },
  ]

  return (
    <section
      id="story"
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
            The Bartender's Journey
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            How an upstairs room became a laboratory for innovation
          </p>
        </div>

        <div className="space-y-20">
          {storySteps.map((step, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              style={{
                animation: inView
                  ? `fadeInUp 0.8s ease-out ${index * 0.15}s both`
                  : 'none',
              }}
            >
              {index % 2 === 0 ? (
                <>
                  <div className="relative overflow-hidden rounded-lg h-96">
                    <Image
                      src={step.image || "/placeholder.svg"}
                      alt={step.title}
                      fill
                      className="object-cover"
                      quality={85}
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl font-serif font-bold mb-4 text-primary">
                      {step.title}
                    </h3>
                    <div className="w-12 h-1 bg-secondary mb-6"></div>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h3 className="text-3xl font-serif font-bold mb-4 text-primary">
                      {step.title}
                    </h3>
                    <div className="w-12 h-1 bg-secondary mb-6"></div>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                  <div className="relative overflow-hidden rounded-lg h-96">
                    <Image
                      src={step.image || "/placeholder.svg"}
                      alt={step.title}
                      fill
                      className="object-cover"
                      quality={85}
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
