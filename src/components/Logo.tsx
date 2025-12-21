'use client'

import React from 'react'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  }

  return (
    <svg
      viewBox="0 0 100 100"
      className={`${sizes[size]} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="skyGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#0891b2" />
          <stop offset="50%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#67e8f9" />
        </linearGradient>
        <linearGradient id="roadGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#0e7490" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      
      {/* Diamond background */}
      <path
        d="M50 5 L95 50 L50 95 L5 50 Z"
        fill="url(#skyGradient)"
        className="drop-shadow-lg"
      />
      
      {/* Road with perspective lines */}
      <path
        d="M50 85 L35 55 L5 50 L35 45 L50 15"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <path
        d="M50 85 L65 55 L95 50 L65 45 L50 15"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        opacity="0.6"
      />
      
      {/* Center road */}
      <path
        d="M50 85 L45 50 L50 15 L55 50 Z"
        fill="white"
      />
      
      {/* Road dashes */}
      <rect x="48.5" y="60" width="3" height="8" fill="url(#roadGradient)" />
      <rect x="48.5" y="45" width="3" height="8" fill="url(#roadGradient)" />
      <rect x="48.5" y="30" width="3" height="5" fill="url(#roadGradient)" />
      
      {/* Cross at horizon */}
      <rect x="47" y="8" width="6" height="20" fill="white" rx="1" />
      <rect x="42" y="12" width="16" height="5" fill="white" rx="1" />
    </svg>
  )
}
