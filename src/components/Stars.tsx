'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from '@/context/ThemeContext'

interface Star {
  id: number
  left: number
  top: number
  delay: number
  size: number
}

export default function Stars() {
  const { theme } = useTheme()
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    // Generate random stars
    const newStars: Star[] = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 4,
      size: Math.random() * 2 + 1,
    }))
    setStars(newStars)
  }, [])

  if (theme !== 'dark') return null

  return (
    <div className="stars" aria-hidden="true">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            animationDelay: `${star.delay}s`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
        />
      ))}
    </div>
  )
}
