'use client'

import React from 'react'
import { Compass } from 'lucide-react'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero'
  showText?: boolean
  className?: string
}

export default function Logo({ size = 'md', showText = false, className = '' }: LogoProps) {
  const sizes = {
    sm: { icon: 20, text: '0.75rem' },
    md: { icon: 28, text: '0.875rem' },
    lg: { icon: 40, text: '1rem' },
    xl: { icon: 56, text: '1.25rem' },
    hero: { icon: 72, text: '1.5rem' },
  }

  const { icon, text } = sizes[size]

  // Minimal placeholder - just an icon until real logo is added
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <Compass 
        className="text-cyan-500" 
        style={{ width: icon, height: icon }}
      />
      {showText && (
        <p 
          className="font-cinematic text-white tracking-wider mt-2"
          style={{ fontSize: text }}
        >
          RUNNING TO GOD
        </p>
      )}
    </div>
  )
}
