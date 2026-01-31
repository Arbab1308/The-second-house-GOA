'use client'

import { useEffect, useRef, useState } from 'react'

interface UseInViewOptions {
  triggerOnce?: boolean
  threshold?: number | number[]
  rootMargin?: string
}

export function useInView({
  triggerOnce = true,
  threshold = 0.1,
  rootMargin = '0px',
}: UseInViewOptions = {}) {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (triggerOnce) {
            setTriggered(true)
            observer.unobserve(entry.target)
          }
        } else if (!triggerOnce) {
          setInView(false)
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [triggerOnce, threshold, rootMargin])

  return { ref, inView: triggerOnce ? triggered || inView : inView }
}
