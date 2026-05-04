'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  value: string
  label: string
  subLabel?: string
  light?: boolean
}

export default function AnimatedCounter({
  value,
  label,
  subLabel,
  light = false,
}: AnimatedCounterProps) {
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${
        hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div
        className={`text-4xl md:text-5xl font-bold mb-2 ${
          light ? 'text-forest-800' : 'text-white'
        }`}
      >
        {value}
      </div>
      <div
        className={`text-sm font-medium uppercase tracking-widest ${
          light ? 'text-forest-600' : 'text-forest-300'
        }`}
      >
        {label}
      </div>
      {subLabel && (
        <div
          className={`text-xs mt-1 ${
            light ? 'text-forest-500' : 'text-forest-400'
          }`}
        >
          {subLabel}
        </div>
      )}
    </div>
  )
}
