'use client'

import React from 'react'
import { MapPin, Compass, Sun, Moon as MoonIcon, Tent, Camera, Coffee } from 'lucide-react'

const journeyStops = [
  {
    location: 'Perth, Western Australia',
    description: 'Where it all began. Packing the car, saying goodbye to the familiar, and heading east into the unknown.',
    icon: MapPin,
    day: 'Day 1',
    verse: '"For I know the plans I have for you," declares the Lord.',
    verseRef: 'Jeremiah 29:11',
  },
  {
    location: 'Norseman',
    description: 'The gateway to the Nullarbor. A small mining town where the sealed road ends and the adventure truly begins.',
    icon: Compass,
    day: 'Day 3',
    verse: 'The Lord himself goes before you and will be with you.',
    verseRef: 'Deuteronomy 31:8',
  },
  {
    location: 'The Nullarbor Plain',
    description: 'Endless horizons stretching in every direction. In the vastness, I found both solitude and the presence of God.',
    icon: Sun,
    day: 'Days 4-7',
    verse: 'Be still and know that I am God.',
    verseRef: 'Psalm 46:10',
  },
  {
    location: 'Bunda Cliffs',
    description: 'Standing at the edge of the continent, watching the Southern Ocean crash against ancient limestone.',
    icon: Camera,
    day: 'Day 5',
    verse: 'The heavens declare the glory of God.',
    verseRef: 'Psalm 19:1',
  },
  {
    location: 'Ceduna',
    description: 'The first town in South Australia. A warm bed, a hot meal, and conversations with fellow travellers.',
    icon: Coffee,
    day: 'Day 8',
    verse: 'A cheerful look brings joy to the heart.',
    verseRef: 'Proverbs 15:30',
  },
  {
    location: 'Port Lincoln',
    description: 'Journey&apos;s end, but really a new beginning. Finding purpose, community, and a deeper faith.',
    icon: Tent,
    day: 'Day 14',
    verse: 'He who began a good work in you will carry it on to completion.',
    verseRef: 'Philippians 1:6',
  },
]

export default function JourneyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-sky-100 to-white dark:from-abyss-900 dark:to-abyss-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Compass className="h-16 w-16 text-sky-600 dark:text-sky-400 mx-auto mb-6" />
          <h1 className="font-display text-5xl font-bold text-abyss-900 dark:text-white mb-4">
            The Journey
          </h1>
          <p className="text-xl text-abyss-600 dark:text-abyss-300">
            2,500 kilometres. 14 days. One life-changing road trip.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white dark:bg-abyss-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-sky-200 dark:bg-sky-800" />
            
            <div className="space-y-12">
              {journeyStops.map((stop, index) => (
                <div key={index} className="relative flex gap-6">
                  {/* Icon */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-sky-100 dark:bg-sky-900 
                                rounded-full flex items-center justify-center border-4 border-white dark:border-abyss-950">
                    <stop.icon className="h-6 w-6 text-sky-600 dark:text-sky-400" />
                  </div>
                  
                  {/* Content */}
                  <div className="card flex-1 -mt-2">
                    <span className="text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                      {stop.day}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-abyss-900 dark:text-white mt-1">
                      {stop.location}
                    </h3>
                    <p className="text-abyss-600 dark:text-abyss-400 mt-2">
                      {stop.description}
                    </p>
                    <blockquote className="mt-4 pl-4 border-l-2 border-sky-400 dark:border-sky-500 italic text-abyss-500 dark:text-abyss-300 text-sm">
                      &ldquo;{stop.verse}&rdquo;
                      <footer className="mt-1 not-italic text-abyss-400 dark:text-abyss-500">
                        — {stop.verseRef}
                      </footer>
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Continue Section */}
      <section className="py-16 bg-sky-50 dark:bg-abyss-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-abyss-900 dark:text-white mb-4">
            More Stories Coming Soon
          </h2>
          <p className="text-abyss-600 dark:text-abyss-400">
            Each stop along the way has stories, lessons, and moments where God showed up. 
            Check back as we share more from the journey.
          </p>
        </div>
      </section>
    </div>
  )
}
