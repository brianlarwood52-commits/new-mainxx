'use client'

import React from 'react'

const OutbackBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Base gradient - sky blue matching logo */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-400 via-sky-500 to-sky-700 dark:from-night-950 dark:via-night-900 dark:to-sky-900" />
      
      {/* Animated stars for dark mode */}
      <div className="absolute inset-0 dark:block hidden">
        <div className="stars" />
        <div className="stars2" />
        <div className="stars3" />
      </div>
      
      {/* Road perspective lines - matching logo style */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-3/4 opacity-20 dark:opacity-10">
        <svg 
          viewBox="0 0 800 600" 
          className="w-full h-full"
          preserveAspectRatio="xMidYMax slice"
        >
          {/* Left perspective lines */}
          <line x1="400" y1="150" x2="0" y2="600" stroke="white" strokeWidth="2" opacity="0.5" />
          <line x1="400" y1="150" x2="50" y2="600" stroke="white" strokeWidth="1.5" opacity="0.4" />
          <line x1="400" y1="150" x2="100" y2="600" stroke="white" strokeWidth="1" opacity="0.3" />
          
          {/* Right perspective lines */}
          <line x1="400" y1="150" x2="800" y2="600" stroke="white" strokeWidth="2" opacity="0.5" />
          <line x1="400" y1="150" x2="750" y2="600" stroke="white" strokeWidth="1.5" opacity="0.4" />
          <line x1="400" y1="150" x2="700" y2="600" stroke="white" strokeWidth="1" opacity="0.3" />
          
          {/* Center road */}
          <polygon points="350,600 400,150 450,600" fill="white" opacity="0.15" />
          
          {/* Road center dashes */}
          <line x1="400" y1="200" x2="400" y2="250" stroke="white" strokeWidth="4" strokeDasharray="15,30" opacity="0.3" />
        </svg>
      </div>
      
      {/* Horizon glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
      
      {/* Cross silhouette at horizon (subtle) */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 opacity-10 dark:opacity-5">
        <svg width="60" height="80" viewBox="0 0 60 80">
          <rect x="24" y="0" width="12" height="80" fill="white" rx="2" />
          <rect x="8" y="20" width="44" height="12" fill="white" rx="2" />
        </svg>
      </div>
      
      {/* Subtle dust particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${50 + Math.random() * 50}%`,
              animation: `dust-particles ${15 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
      
      {/* Gradient overlay for content readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent dark:from-night-950/50" />
    </div>
  )
}

export default OutbackBackground
