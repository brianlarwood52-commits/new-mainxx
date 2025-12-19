import React from 'react'
import Link from 'next/link'
import { Flame, ArrowRight, Heart, Star, Shield, Compass, Sparkles, TreePine, Sun } from 'lucide-react'
import { campfireDevotions, CampfireDevotional } from '@/data/campfireDevotions'

export const metadata = {
  title: 'Campfire Devotions - Evening Devotionals Under the Stars',
  description: 'Gather around the fire for evening devotionals inspired by nights under the Australian stars. Find hope, peace, and connection with God.',
}

const getCategoryIcon = (category: CampfireDevotional['category']) => {
  switch (category) {
    case 'faith': return Compass
    case 'hope': return Star
    case 'love': return Heart
    case 'peace': return TreePine
    case 'courage': return Shield
    case 'trust': return Sun
    case 'healing': return Sparkles
    case 'purpose': return Flame
    default: return Flame
  }
}

const getCategoryColor = (category: CampfireDevotional['category']) => {
  switch (category) {
    case 'faith': return 'bg-sky-100 text-sky-700 dark:bg-sky-900/50 dark:text-sky-300'
    case 'hope': return 'bg-campfire-100 text-campfire-700 dark:bg-campfire-900/50 dark:text-campfire-300'
    case 'love': return 'bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300'
    case 'peace': return 'bg-bush-100 text-bush-700 dark:bg-bush-900/50 dark:text-bush-300'
    case 'courage': return 'bg-outback-100 text-outback-700 dark:bg-outback-900/50 dark:text-outback-300'
    case 'trust': return 'bg-sand-100 text-sand-700 dark:bg-sand-900/50 dark:text-sand-300'
    case 'healing': return 'bg-ocean-100 text-ocean-700 dark:bg-ocean-900/50 dark:text-ocean-300'
    case 'purpose': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300'
    default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900/50 dark:text-gray-300'
  }
}

export default function CampfireDevotionsPage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Campfire glow effect */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-campfire-500/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Animated flame icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-campfire-400 to-campfire-600 rounded-full mb-8 shadow-lg campfire-glow">
            <Flame className="h-10 w-10 text-white" />
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6">
            Campfire Devotions
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
            Gather around the fire. The stars are out, the world is quiet, 
            and it's time to meet with God.
          </p>
          
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            These devotionals are inspired by nights spent camping in the Australian outback, 
            where the only light was the fire and the only sound was the crackle of burning wood.
          </p>
        </div>
      </section>

      {/* Devotions Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campfireDevotions.map((devotion) => {
              const CategoryIcon = getCategoryIcon(devotion.category)
              
              return (
                <Link
                  key={devotion.id}
                  href={`/campfire-devotions/${devotion.id}`}
                  className="group block bg-white/90 dark:bg-night-800/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700/50"
                >
                  {/* Card header with gradient */}
                  <div className="h-32 bg-gradient-to-br from-campfire-400 via-campfire-500 to-campfire-600 relative overflow-hidden">
                    {/* Decorative stars */}
                    <div className="absolute inset-0">
                      <div className="absolute top-4 left-6 w-1 h-1 bg-white rounded-full opacity-60" />
                      <div className="absolute top-8 left-12 w-1.5 h-1.5 bg-white rounded-full opacity-40" />
                      <div className="absolute top-3 right-8 w-1 h-1 bg-white rounded-full opacity-70" />
                      <div className="absolute top-10 right-16 w-1 h-1 bg-white rounded-full opacity-50" />
                      <div className="absolute top-6 left-1/2 w-1 h-1 bg-white rounded-full opacity-60" />
                    </div>
                    
                    {/* Flame icon */}
                    <div className="absolute bottom-4 left-6">
                      <Flame className="h-8 w-8 text-white/80" />
                    </div>
                    
                    {/* Category badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(devotion.category)}`}>
                        <CategoryIcon className="h-3 w-3" />
                        {devotion.category.charAt(0).toUpperCase() + devotion.category.slice(1)}
                      </span>
                    </div>
                  </div>
                  
                  {/* Card content */}
                  <div className="p-6">
                    <p className="text-sm text-campfire-600 dark:text-campfire-400 font-medium mb-2">
                      {devotion.theme}
                    </p>
                    
                    <h3 className="font-serif text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-campfire-600 dark:group-hover:text-campfire-400 transition-colors">
                      {devotion.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                      {devotion.shortDescription}
                    </p>
                    
                    {/* Bible verse preview */}
                    <p className="text-xs text-gray-500 dark:text-gray-400 italic mb-4 line-clamp-2">
                      "{devotion.bibleVerse.text.substring(0, 80)}..."
                    </p>
                    
                    <div className="flex items-center text-campfire-600 dark:text-campfire-400 text-sm font-medium group-hover:text-campfire-700 dark:group-hover:text-campfire-300">
                      Read devotion
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-r from-night-900/90 to-night-950/90 backdrop-blur-sm mt-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Stars */}
          <div className="flex justify-center gap-4 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className="h-4 w-4 text-campfire-300" 
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            ))}
          </div>
          
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">
            Join Us Around the Fire
          </h2>
          
          <p className="text-sky-100 mb-8">
            New devotionals are added regularly. Take time each evening to quiet your heart, 
            open God's Word, and let the warmth of His presence surround you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/daily-fire"
              className="inline-flex items-center justify-center px-6 py-3 bg-campfire-500 hover:bg-campfire-600 text-white font-medium rounded-full transition-all duration-300"
            >
              <Flame className="mr-2 h-5 w-5" />
              Daily Encouragement
            </Link>
            <Link
              href="/journey"
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white/30 hover:bg-white/10 text-white font-medium rounded-full transition-all duration-300"
            >
              Explore the Journey
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
