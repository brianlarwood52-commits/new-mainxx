'use client'

import React, { useEffect, useState, useMemo } from 'react'

interface Star {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  layer: number // 1 = far (slow), 2 = mid, 3 = close (fast)
  animationDuration: number
  animationDelay: number
}

export default function ParallaxStars() {
  const [scrollY, setScrollY] = useState(0)
  const [mounted, setMounted] = useState(false)

  // Generate stars only once using useMemo
  const stars = useMemo(() => {
    const newStars: Star[] = []
    
    // Layer 1 - Far stars (small, slow parallax) - 120 stars
    for (let i = 0; i < 120; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 400, // Extended height for scrolling
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.2,
        layer: 1,
        animationDuration: 3 + Math.random() * 4,
        animationDelay: Math.random() * 5,
      })
    }
    
    // Layer 2 - Mid stars (medium, medium parallax) - 80 stars
    for (let i = 120; i < 200; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 400,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        layer: 2,
        animationDuration: 2 + Math.random() * 3,
        animationDelay: Math.random() * 5,
      })
    }
    
    // Layer 3 - Close stars (larger, fast parallax) - 40 stars
    for (let i = 200; i < 240; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 400,
        size: Math.random() * 2.5 + 1.5,
        opacity: Math.random() * 0.6 + 0.4,
        layer: 3,
        animationDuration: 2 + Math.random() * 2,
        animationDelay: Math.random() * 5,
      })
    }
    
    return newStars
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle scroll for parallax
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate parallax offset based on layer
  const getParallaxOffset = (layer: number) => {
    const speeds = {
      1: 0.03,  // Far - very slow
      2: 0.07,  // Mid - medium
      3: 0.12,  // Close - faster
    }
    return scrollY * (speeds[layer as keyof typeof speeds] || 0.05)
  }

  if (!mounted) {
    return null
  }

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* Deep space gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 15% 15%, rgba(8, 25, 50, 0.5) 0%, transparent 45%),
            radial-gradient(ellipse at 85% 20%, rgba(25, 10, 45, 0.4) 0%, transparent 40%),
            radial-gradient(ellipse at 50% 70%, rgba(5, 35, 55, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 75% 90%, rgba(20, 8, 40, 0.25) 0%, transparent 40%),
            linear-gradient(to bottom, #030508 0%, #080c14 30%, #0a0f18 60%, #0c0a09 100%)
          `,
        }}
      />

      {/* Milky Way band - subtle diagonal wash */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          background: `
            linear-gradient(
              125deg,
              transparent 0%,
              transparent 30%,
              rgba(140, 160, 190, 0.08) 40%,
              rgba(180, 170, 200, 0.12) 50%,
              rgba(140, 160, 190, 0.08) 60%,
              transparent 70%,
              transparent 100%
            )
          `,
          transform: `translateY(${scrollY * 0.02}px)`,
        }}
      />

      {/* Stars - Layer 1 (Far) */}
      <div 
        className="absolute inset-0"
        style={{ 
          transform: `translateY(${-getParallaxOffset(1)}px)`,
        }}
      >
        {stars.filter(s => s.layer === 1).map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full parallax-star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: 'rgba(255, 255, 255, 1)',
              '--star-opacity': star.opacity,
              animationDuration: `${star.animationDuration}s`,
              animationDelay: `${star.animationDelay}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Stars - Layer 2 (Mid) */}
      <div 
        className="absolute inset-0"
        style={{ 
          transform: `translateY(${-getParallaxOffset(2)}px)`,
        }}
      >
        {stars.filter(s => s.layer === 2).map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full parallax-star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: 'rgba(220, 230, 255, 1)',
              '--star-opacity': star.opacity,
              animationDuration: `${star.animationDuration}s`,
              animationDelay: `${star.animationDelay}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Stars - Layer 3 (Close) */}
      <div 
        className="absolute inset-0"
        style={{ 
          transform: `translateY(${-getParallaxOffset(3)}px)`,
        }}
      >
        {stars.filter(s => s.layer === 3).map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full parallax-star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: 'rgba(200, 220, 255, 1)',
              '--star-opacity': star.opacity,
              animationDuration: `${star.animationDuration}s`,
              animationDelay: `${star.animationDelay}s`,
              boxShadow: star.size > 2.5 
                ? `0 0 ${star.size * 3}px rgba(200, 220, 255, 0.6)` 
                : `0 0 ${star.size * 2}px rgba(200, 220, 255, 0.4)`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Shooting stars */}
      <div 
        className="shooting-star-anim absolute"
        style={{
          top: '12%',
          left: '75%',
          width: '80px',
          height: '1px',
          background: 'linear-gradient(to left, rgba(255,255,255,0), rgba(255,255,255,0.9), rgba(200,220,255,0.3))',
          transform: `translateY(${-scrollY * 0.03}px)`,
          boxShadow: '0 0 4px rgba(255,255,255,0.5)',
        }}
      />
      
      <div 
        className="shooting-star-anim-2 absolute"
        style={{
          top: '35%',
          left: '25%',
          width: '60px',
          height: '1px',
          background: 'linear-gradient(to left, rgba(255,255,255,0), rgba(255,255,255,0.7), rgba(200,220,255,0.2))',
          transform: `translateY(${-scrollY * 0.04}px)`,
          boxShadow: '0 0 3px rgba(255,255,255,0.4)',
        }}
      />

      {/* Southern Cross constellation - subtle highlight */}
      <div 
        className="absolute opacity-70"
        style={{
          top: '25%',
          right: '15%',
          transform: `translateY(${-scrollY * 0.05}px)`,
        }}
      >
        {/* Alpha Crucis */}
        <div className="absolute w-2 h-2 rounded-full bg-white parallax-star" 
          style={{ top: 0, left: '50%', boxShadow: '0 0 8px rgba(200,220,255,0.8)', animationDelay: '0s' }} />
        {/* Beta Crucis */}
        <div className="absolute w-1.5 h-1.5 rounded-full bg-white parallax-star" 
          style={{ top: '30px', left: 0, boxShadow: '0 0 6px rgba(200,220,255,0.7)', animationDelay: '0.5s' }} />
        {/* Gamma Crucis */}
        <div className="absolute w-2 h-2 rounded-full bg-white parallax-star" 
          style={{ top: '-35px', left: '50%', boxShadow: '0 0 8px rgba(255,200,150,0.8)', animationDelay: '1s' }} />
        {/* Delta Crucis */}
        <div className="absolute w-1.5 h-1.5 rounded-full bg-white parallax-star" 
          style={{ top: '30px', left: '100%', boxShadow: '0 0 6px rgba(200,220,255,0.7)', animationDelay: '1.5s' }} />
      </div>
    </div>
  )
}
