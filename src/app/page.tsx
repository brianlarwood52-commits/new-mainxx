'use client'

import React from 'react'
import Link from 'next/link'
import Logo from '@/components/Logo'
import { 
  Compass, 
  BookOpen, 
  Tent, 
  Heart, 
  ArrowRight, 
  MapPin,
  Star,
  Mountain,
  Sunrise
} from 'lucide-react'

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-sky-50 to-white 
                       dark:from-abyss-900 dark:via-abyss-950 dark:to-abyss-950" />
        
        {/* Decorative road lines */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Perspective road effect */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl">
            <svg viewBox="0 0 800 400" className="w-full h-auto opacity-20 dark:opacity-30">
              <defs>
                <linearGradient id="roadGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Road perspective lines */}
              <path d="M400 400 L0 300" stroke="currentColor" strokeWidth="1" fill="none" className="text-sky-600 dark:text-sky-400" />
              <path d="M400 400 L800 300" stroke="currentColor" strokeWidth="1" fill="none" className="text-sky-600 dark:text-sky-400" />
              <path d="M400 400 L200 250" stroke="currentColor" strokeWidth="1" fill="none" className="text-sky-600 dark:text-sky-400" />
              <path d="M400 400 L600 250" stroke="currentColor" strokeWidth="1" fill="none" className="text-sky-600 dark:text-sky-400" />
              <path d="M400 400 L300 200" stroke="currentColor" strokeWidth="1" fill="none" className="text-sky-600 dark:text-sky-400" />
              <path d="M400 400 L500 200" stroke="currentColor" strokeWidth="1" fill="none" className="text-sky-600 dark:text-sky-400" />
              {/* Center road */}
              <path d="M400 400 L400 50" stroke="currentColor" strokeWidth="3" fill="none" className="text-sky-500 dark:text-sky-300" />
            </svg>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <Logo size="xl" className="drop-shadow-xl" />
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="text-abyss-900 dark:text-white">Running to </span>
            <span className="gradient-text">God</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-abyss-600 dark:text-abyss-300 mb-4 animate-slide-up font-display italic">
            A Journey of Faith Across the Nullarbor
          </p>

          {/* Description */}
          <p className="text-lg text-abyss-500 dark:text-abyss-400 max-w-2xl mx-auto mb-8 animate-slide-up">
            From Perth to Port Lincoln, a road trip became a pilgrimage. 
            Discover how the open road, starlit nights, and quiet moments 
            around the campfire led to a deeper connection with God.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link href="/journey" className="btn-primary inline-flex items-center justify-center gap-2">
              <Compass className="h-5 w-5" />
              Begin the Journey
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/about" className="btn-secondary inline-flex items-center justify-center gap-2">
              <Heart className="h-5 w-5" />
              Learn More
            </Link>
          </div>

          {/* Journey Stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 animate-fade-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-600 dark:text-sky-400">2,500+</div>
              <div className="text-sm text-abyss-500 dark:text-abyss-400">Kilometres</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-600 dark:text-sky-400">14</div>
              <div className="text-sm text-abyss-500 dark:text-abyss-400">Days on Road</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-600 dark:text-sky-400">∞</div>
              <div className="text-sm text-abyss-500 dark:text-abyss-400">Starlit Nights</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-600 dark:text-sky-400">1</div>
              <div className="text-sm text-abyss-500 dark:text-abyss-400">Life Changed</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-sky-400 dark:border-sky-500 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-sky-400 dark:bg-sky-500 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Featured Scripture */}
      <section className="py-16 bg-sky-600 dark:bg-sky-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" 
               style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Star className="h-8 w-8 text-sky-200 mx-auto mb-6" />
          <blockquote className="text-2xl sm:text-3xl font-display italic text-white mb-4">
            &ldquo;Trust in the Lord with all your heart and lean not on your own understanding; 
            in all your ways submit to him, and he will make your paths straight.&rdquo;
          </blockquote>
          <cite className="text-sky-200 text-lg">— Proverbs 3:5-6</cite>
        </div>
      </section>

      {/* Ministry Sections */}
      <section className="py-20 bg-white dark:bg-abyss-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-abyss-900 dark:text-white mb-4">
              Explore the Journey
            </h2>
            <p className="text-lg text-abyss-600 dark:text-abyss-400 max-w-2xl mx-auto">
              Whether you&apos;re seeking daily encouragement, stories from the road, 
              or a deeper understanding of faith, there&apos;s a path for you here.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* The Journey Card */}
            <Link href="/journey" className="card group hover:border-sky-400 dark:hover:border-sky-500 transition-all hover:-translate-y-1">
              <div className="h-12 w-12 bg-sky-100 dark:bg-sky-900/50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Compass className="h-6 w-6 text-sky-600 dark:text-sky-400" />
              </div>
              <h3 className="font-display text-xl font-semibold text-abyss-900 dark:text-white mb-2">
                The Journey
              </h3>
              <p className="text-abyss-600 dark:text-abyss-400 text-sm mb-4">
                Follow the road from Perth across the vast Nullarbor to Port Lincoln. 
                Each stop along the way holds lessons about faith and life.
              </p>
              <span className="text-sky-600 dark:text-sky-400 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Start exploring <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            {/* Devotions Card */}
            <Link href="/devotions" className="card group hover:border-sky-400 dark:hover:border-sky-500 transition-all hover:-translate-y-1">
              <div className="h-12 w-12 bg-horizon-100 dark:bg-horizon-900/50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="h-6 w-6 text-horizon-600 dark:text-horizon-400" />
              </div>
              <h3 className="font-display text-xl font-semibold text-abyss-900 dark:text-white mb-2">
                Daily Devotions
              </h3>
              <p className="text-abyss-600 dark:text-abyss-400 text-sm mb-4">
                Start each day with encouraging words, scripture, and reflections 
                inspired by the journey and God&apos;s amazing creation.
              </p>
              <span className="text-sky-600 dark:text-sky-400 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Read today&apos;s devotion <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            {/* Campfire Stories Card */}
            <Link href="/campfire" className="card group hover:border-sky-400 dark:hover:border-sky-500 transition-all hover:-translate-y-1">
              <div className="h-12 w-12 bg-orange-100 dark:bg-orange-900/50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Tent className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="font-display text-xl font-semibold text-abyss-900 dark:text-white mb-2">
                Campfire Stories
              </h3>
              <p className="text-abyss-600 dark:text-abyss-400 text-sm mb-4">
                Gather &apos;round the fire and share in stories of faith, adventure, 
                and the quiet moments where God speaks the loudest.
              </p>
              <span className="text-sky-600 dark:text-sky-400 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Hear the stories <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* The Route Map Section */}
      <section className="py-20 bg-sky-50 dark:bg-abyss-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold text-abyss-900 dark:text-white mb-6">
                The Road Less Travelled
              </h2>
              <p className="text-lg text-abyss-600 dark:text-abyss-400 mb-6">
                What started as a road trip became something more. Driving across 
                the Nullarbor Plain, I found myself on a journey not just across 
                Australia, but towards a deeper understanding of who God is and 
                who I am in Him.
              </p>
              <p className="text-lg text-abyss-600 dark:text-abyss-400 mb-8">
                The endless horizons, the quiet nights under a blanket of stars, 
                the small towns and big conversations—each moment became a 
                stepping stone on the path of faith.
              </p>
              
              {/* Route highlights */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-sky-200 dark:bg-sky-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-sky-600 dark:text-sky-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-abyss-900 dark:text-white">Perth, Western Australia</h4>
                    <p className="text-sm text-abyss-500 dark:text-abyss-400">Where the journey began</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-sky-200 dark:bg-sky-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mountain className="h-5 w-5 text-sky-600 dark:text-sky-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-abyss-900 dark:text-white">The Nullarbor Plain</h4>
                    <p className="text-sm text-abyss-500 dark:text-abyss-400">1,200 km of endless horizon</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-sky-200 dark:bg-sky-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <Sunrise className="h-5 w-5 text-sky-600 dark:text-sky-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-abyss-900 dark:text-white">Port Lincoln, South Australia</h4>
                    <p className="text-sm text-abyss-500 dark:text-abyss-400">Where new beginnings awaited</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual representation */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-sky-200 via-sky-100 to-white 
                             dark:from-abyss-800 dark:via-abyss-850 dark:to-abyss-900 
                             rounded-3xl shadow-xl overflow-hidden">
                {/* Stylized map/journey visual */}
                <svg viewBox="0 0 400 400" className="w-full h-full p-8">
                  {/* Road path */}
                  <path 
                    d="M50 350 Q100 300 150 280 Q200 260 250 200 Q300 140 350 50" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="4"
                    strokeDasharray="10,5"
                    className="text-sky-500 dark:text-sky-400"
                  />
                  
                  {/* Start point - Perth */}
                  <circle cx="50" cy="350" r="12" className="fill-sky-600 dark:fill-sky-500" />
                  <text x="70" y="355" className="fill-abyss-700 dark:fill-abyss-300 text-xs font-medium">Perth</text>
                  
                  {/* Middle - Nullarbor */}
                  <circle cx="200" cy="230" r="8" className="fill-sky-400 dark:fill-sky-500" />
                  <text x="160" y="260" className="fill-abyss-600 dark:fill-abyss-400 text-xs">Nullarbor</text>
                  
                  {/* End point - Port Lincoln */}
                  <circle cx="350" cy="50" r="12" className="fill-horizon-500" />
                  <text x="270" y="45" className="fill-abyss-700 dark:fill-abyss-300 text-xs font-medium">Port Lincoln</text>
                  
                  {/* Cross at destination */}
                  <path d="M350 30 L350 70 M330 50 L370 50" stroke="currentColor" strokeWidth="3" className="text-horizon-500" />
                  
                  {/* Decorative stars */}
                  <circle cx="100" cy="100" r="2" className="fill-sky-400 dark:fill-sky-300 animate-pulse" />
                  <circle cx="300" cy="150" r="2" className="fill-sky-400 dark:fill-sky-300 animate-pulse" />
                  <circle cx="150" cy="50" r="2" className="fill-sky-400 dark:fill-sky-300 animate-pulse" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-sky-700 dark:from-sky-800 dark:to-sky-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10" 
               style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0L60 30L30 60L0 30z\' fill=\'none\' stroke=\'white\' stroke-width=\'0.5\'/%3E%3C/svg%3E")' }} />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-display text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re at a crossroads in life or simply seeking a deeper connection 
            with God, there&apos;s a road waiting for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/journey" 
              className="bg-white text-sky-700 hover:bg-sky-50 px-8 py-4 rounded-lg font-semibold 
                        transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
            >
              <Compass className="h-5 w-5" />
              Begin the Journey
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg 
                        font-semibold transition-all inline-flex items-center justify-center gap-2"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
