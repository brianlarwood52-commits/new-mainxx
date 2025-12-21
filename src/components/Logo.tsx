'use client'

import React from 'react'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero'
  showText?: boolean
  className?: string
}

export default function Logo({ size = 'md', showText = false, className = '' }: LogoProps) {
  const sizes = {
    sm: { width: 50, height: 50 },
    md: { width: 70, height: 70 },
    lg: { width: 100, height: 100 },
    xl: { width: 160, height: 160 },
    hero: { width: 220, height: 220 },
  }

  const { width, height } = sizes[size]

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        <defs>
          {/* Main gradient - cyan/teal */}
          <linearGradient id="logoGradient" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#67e8f9" />
            <stop offset="50%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>
          
          {/* Darker gradient for lower diamond */}
          <linearGradient id="logoDarkGradient" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#0891b2" />
            <stop offset="100%" stopColor="#0e7490" />
          </linearGradient>

          {/* Hill/horizon gradient */}
          <linearGradient id="hillGradient" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>
        </defs>

        {/* Upper diamond (sky) */}
        <path
          d="M50 5 L95 50 L50 50 L5 50 Z"
          fill="url(#logoGradient)"
        />
        
        {/* Lower diamond */}
        <path
          d="M50 50 L95 50 L50 95 L5 50 Z"
          fill="url(#logoDarkGradient)"
        />

        {/* Rolling hills at horizon */}
        <path
          d="M5 50 Q25 42 50 48 Q75 42 95 50 L50 70 Z"
          fill="url(#hillGradient)"
        />

        {/* Road perspective lines - left side */}
        <path
          d="M50 95 L30 55 L5 50"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M50 95 L38 60 L20 52"
          stroke="white"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />

        {/* Road perspective lines - right side */}
        <path
          d="M50 95 L70 55 L95 50"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M50 95 L62 60 L80 52"
          stroke="white"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />

        {/* Main road surface */}
        <path
          d="M50 95 L44 55 L48 25 L50 18 L52 25 L56 55 Z"
          fill="white"
        />

        {/* Road center dashes */}
        <rect x="49" y="70" width="2" height="8" fill="#0891b2" />
        <rect x="49" y="58" width="2" height="6" fill="#0891b2" />
        <rect x="49" y="48" width="2" height="5" fill="#0891b2" />
        <rect x="49.5" y="40" width="1" height="4" fill="#0891b2" />

        {/* Cross at horizon */}
        <rect x="47" y="8" width="6" height="22" fill="white" rx="1" />
        <rect x="42" y="12" width="16" height="5" fill="white" rx="1" />
      </svg>

      {showText && (
        <p 
          className="font-bold text-white tracking-wide mt-2"
          style={{ 
            fontSize: size === 'hero' ? '1.75rem' : size === 'xl' ? '1.5rem' : size === 'lg' ? '1rem' : '0.75rem',
          }}
        >
          RUNNING TO GOD
        </p>
      )}
    </div>
  )
}
