'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Map, Flame, BookOpen, ChevronDown, Star, Mountain, Waves, Tent, Users } from 'lucide-react'

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section - Road to the Cross */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Sky gradient background matching logo */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-300 via-sky-500 to-sky-700" />
        
        {/* Road and Cross SVG - matching logo design */}
        <div className="absolute inset-0 flex items-end justify-center">
          <svg 
            viewBox="0 0 800 600" 
            className="w-full max-w-4xl h-auto"
            preserveAspectRatio="xMidYMax meet"
          >
            {/* Hills/mountains silhouette */}
            <path 
              d="M 0 400 Q 150 350 300 380 Q 400 320 500 380 Q 650 350 800 400 L 800 600 L 0 600 Z" 
              fill="#0369a1" 
              opacity="0.6"
            />
            <path 
              d="M 0 420 Q 200 380 400 400 Q 600 380 800 420 L 800 600 L 0 600 Z" 
              fill="#0284c7" 
              opacity="0.8"
            />
            
            {/* Perspective lines - left */}
            <line x1="400" y1="150" x2="0" y2="600" stroke="white" strokeWidth="3" opacity="0.5" />
            <line x1="400" y1="150" x2="80" y2="600" stroke="white" strokeWidth="2" opacity="0.35" />
            <line x1="400" y1="150" x2="160" y2="600" stroke="white" strokeWidth="1.5" opacity="0.25" />
            
            {/* Perspective lines - right */}
            <line x1="400" y1="150" x2="800" y2="600" stroke="white" strokeWidth="3" opacity="0.5" />
            <line x1="400" y1="150" x2="720" y2="600" stroke="white" strokeWidth="2" opacity="0.35" />
            <line x1="400" y1="150" x2="640" y2="600" stroke="white" strokeWidth="1.5" opacity="0.25" />
            
            {/* The Road */}
            <polygon points="320,600 400,150 480,600" fill="white" opacity="0.95" />
            
            {/* Road center dashes */}
            <line x1="400" y1="200" x2="400" y2="250" stroke="#0ea5e9" strokeWidth="8" strokeLinecap="round" />
            <line x1="400" y1="290" x2="400" y2="350" stroke="#0ea5e9" strokeWidth="10" strokeLinecap="round" />
            <line x1="400" y1="400" x2="400" y2="480" stroke="#0ea5e9" strokeWidth="12" strokeLinecap="round" />
            <line x1="400" y1="530" x2="400" y2="600" stroke="#0ea5e9" strokeWidth="14" strokeLinecap="round" />
            
            {/* The Cross at horizon */}
            <rect x="380" y="50" width="40" height="130" fill="white" rx="4" className="cross-glow" />
            <rect x="350" y="75" width="100" height="30" fill="white" rx="4" className="cross-glow" />
          </svg>
        </div>

        {/* Content overlay */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center -mt-32">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-28 h-28 md:w-36 md:h-36 animate-float">
              <Image
                src="/logo.png"
                alt="Running to God"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Running to God
          </h1>

          <p className="text-xl md:text-2xl text-white/95 mb-4 drop-shadow-md max-w-2xl mx-auto">
            A Journey of Faith Through the Australian Outback
          </p>
          
          <p className="text-lg text-sky-100 mb-10 max-w-xl mx-auto leading-relaxed">
            From Perth to Port Lincoln — discover what it means to stop running 
            from yourself and start running toward Jesus.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/journey"
              className="group inline-flex items-center px-8 py-4 bg-white text-sky-700 font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Map className="mr-2 h-5 w-5" />
              Start the Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded-full border-2 border-white/40 hover:bg-white/20 hover:border-white/60 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 scroll-indicator">
          <ChevronDown className="h-8 w-8 text-white/70" />
        </div>
      </section>

      {/* About the Journey Section */}
      <section className="py-20 bg-white dark:bg-night-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
              The Road Trip That Changed Everything
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              In 2024, I drove from Perth to Port Lincoln across the Nullarbor Plain — 
              one of the most remote stretches of road on Earth. Along the way, through 
              desert silence and ocean vastness, I discovered what it truly means to 
              run toward God.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Mountain,
                title: 'The Desert',
                description: 'Finding God in the vast emptiness of the Nullarbor — where silence speaks louder than words.',
                color: 'from-outback-400 to-outback-600'
              },
              {
                icon: Waves,
                title: 'The Ocean',
                description: 'The Great Australian Bight — standing at the edge of the world, glimpsing eternity.',
                color: 'from-ocean-400 to-ocean-600'
              },
              {
                icon: Tent,
                title: 'The Camps',
                description: 'Bush tucker, campfires under billion-star skies, and conversations with fellow travelers.',
                color: 'from-campfire-400 to-campfire-600'
              },
              {
                icon: Users,
                title: 'The People',
                description: 'Roadhouse encounters and stranger-friends who became part of the story.',
                color: 'from-sky-400 to-sky-600'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="text-center animate-slide-up card-hover bg-gray-50 dark:bg-night-800 rounded-2xl p-8"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-sky-100 dark:from-night-800 dark:to-night-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
              Resources for Your Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Whether you're just beginning or deep in your walk with Jesus, 
              we have something for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Campfire Devotions',
                description: 'Evening devotionals inspired by nights under the stars. Gather around the fire and meet with God.',
                icon: Flame,
                link: '/campfire-devotions',
                gradient: 'from-campfire-500 to-campfire-600'
              },
              {
                title: 'The Journey',
                description: 'Follow each stop along the Perth to Port Lincoln road trip and the spiritual lessons learned.',
                icon: Map,
                link: '/journey',
                gradient: 'from-sky-500 to-sky-600'
              },
              {
                title: 'Bible Studies',
                description: 'Deep dives into Scripture focused on our relationship with Jesus, the Son of God.',
                icon: BookOpen,
                link: '/bible-study',
                gradient: 'from-bush-500 to-bush-600'
              }
            ].map((resource, index) => (
              <Link
                key={index}
                href={resource.link}
                className="group block bg-white dark:bg-night-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden card-hover"
              >
                <div className={`h-32 bg-gradient-to-br ${resource.gradient} flex items-center justify-center`}>
                  <resource.icon className="h-14 w-14 text-white/90" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-gray-800 dark:text-white mb-3 group-hover:text-sky-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {resource.description}
                  </p>
                  <span className="inline-flex items-center text-sky-600 dark:text-sky-400 font-medium group-hover:text-sky-700">
                    Explore
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Scripture Banner */}
      <section className="py-16 bg-sky-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Star className="h-8 w-8 text-sky-200 mx-auto mb-6" />
          <blockquote className="font-serif text-2xl md:text-3xl text-white italic leading-relaxed mb-4">
            "Come to me, all you who are weary and burdened, and I will give you rest."
          </blockquote>
          <cite className="text-sky-200 text-lg">— Jesus (Matthew 11:28)</cite>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-sky-800 to-sky-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Running?
          </h2>
          <p className="text-xl text-sky-100 mb-10 leading-relaxed max-w-2xl mx-auto">
            The road is long, but you don't have to walk it alone. 
            Jesus is waiting with open arms. Take the first step today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/journey" 
              className="inline-flex items-center px-8 py-4 bg-white text-sky-700 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Map className="mr-2 h-5 w-5" />
              Begin the Journey
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/40 hover:bg-white/10 hover:border-white/60 text-white font-medium rounded-full transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
