'use client'

import React from 'react'
import Image from 'next/image'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showText?: boolean
  className?: string
}

export default function Logo({ size = 'md', showText = false, className = '' }: LogoProps) {
  const sizes = {
    sm: { width: 40, height: 40 },
    md: { width: 56, height: 56 },
    lg: { width: 80, height: 80 },
    xl: { width: 140, height: 140 },
  }

  const { width, height } = sizes[size]

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <Image
        src="/images/running-to-god-logo-small.png"
        alt="Running to God - Road leading to cross"
        width={width}
        height={height}
        className="drop-shadow-lg"
        priority
      />

      {showText && (
        <p 
          className="font-bold text-white tracking-wide mt-2"
          style={{ 
            fontSize: size === 'xl' ? '1.5rem' : size === 'lg' ? '1rem' : '0.75rem',
          }}
        >
          RUNNING TO GOD
        </p>
      )}
    </div>
  )
}
