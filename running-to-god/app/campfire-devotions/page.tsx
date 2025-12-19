import React from 'react'
import Link from 'next/link'
import { Flame, ArrowRight, Star, Heart, Shield, Compass, BookOpen } from 'lucide-react'

export const metadata = {
  title: 'Campfire Devotions - Evening Devotionals Under the Stars',
  description: 'Gather around the fire for evening devotionals inspired by nights under the Australian stars. Find hope, peace, and connection with Jesus.',
}

// Placeholder devotions - will come from Sanity CMS
const devotions = [
  {
    id: 'light-in-darkness',
    title: 'Light in the Darkness',
    theme: 'Finding Hope',
    excerpt: 'When the night is darkest, the stars shine brightest. Discover how Jesus is the light that cannot be overcome.',
    category: 'hope',
    icon: Star,
  },
  {
    id: 'still-waters',
    title: 'Still Waters',
    theme: 'Finding Peace',
    excerpt: 'Learning to be still in a world that never stops moving. The ocean teaches us about God\'s peace.',
    category: 'peace',
    icon: Heart,
  },
  {
    id: 'the-long-road',
    title: 'The Long Road',
    theme: 'Perseverance',
    excerpt: 'When the journey seems endless, keep putting one foot in front of the other. God is with you.',
    category: 'courage',
    icon: Shield,
  },
  {
    id: 'roadhouse-grace',
    title: 'Roadhouse Grace',
    theme: 'God\'s Provision',
    excerpt: 'Finding unexpected grace in unlikely places. God provides oases in our wilderness.',
    category: 'trust',
    icon: Compass,
  },
  {
    id: 'running-home',
    title: 'Running Home',
    theme: 'God\'s Welcome',
    excerpt: 'The Father is already running to meet you. You don\'t have to earn your way back.',
    category: 'love',
    icon: Heart,
  },
  {
    id: 'leaving-familiar',
    title: 'Leaving the Familiar',
    theme: 'Faith and Risk',
    excerpt: 'Sometimes faith means leaving what you know behind. Abraham\'s call echoes through the ages.',
    category: 'faith',
    icon: Compass,
  },
]

export default function CampfireDevotionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-b from-night-900 via-night-800 to-campfire-900/50 overflow-hidden">
        {/* Stars background */}
        <div className="absolute inset-0 stars-bg opacity-60" />
        
        {/* Campfire glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-campfire-500/30 rounded-full blur-3xl" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-campfire-400 to-campfire-600 rounded-full mb-8 shadow-lg campfire-glow">
            <Flame className="h-10 w-10 text-white animate-campfire-flicker" />
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Campfire Devotions
          </h1>
          
          <p className="text-xl text-campfire-100 max-w-2xl mx-auto leading-relaxed mb-4">
            Gather around the fire. The stars are out, the world is quiet, 
            and it's time to meet with Jesus.
          </p>
          
          <p className="text-lg text-campfire-200/70 max-w-xl mx-auto">
            These devotionals are inspired by nights spent camping in the Australian outback.
          </p>
        </div>
      </section>

      {/* Devotions Grid */}
      <section className="py-16 bg-white dark:bg-night-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {devotions.map((devotion) => (
              <Link
                key={devotion.id}
                href={`/campfire-devotions/${devotion.id}`}
                className="group block bg-white dark:bg-night-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover border border-gray-100 dark:border-gray-700/50"
              >
                {/* Card header */}
                <div className="h-32 bg-gradient-to-br from-night-800 via-night-900 to-campfire-900/50 relative overflow-hidden">
                  {/* Stars */}
                  <div className="absolute inset-0 stars-bg opacity-40" />
                  
                  {/* Flame icon */}
                  <div className="absolute bottom-4 left-6">
                    <Flame className="h-8 w-8 text-campfire-400/80" />
                  </div>
                  
                  {/* Category icon */}
                  <div className="absolute top-4 right-4">
                    <devotion.icon className="h-6 w-6 text-white/60" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <p className="text-sm text-campfire-600 dark:text-campfire-400 font-medium mb-2">
                    {devotion.theme}
                  </p>
                  
                  <h3 className="font-serif text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-campfire-600 dark:group-hover:text-campfire-400 transition-colors">
                    {devotion.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {devotion.excerpt}
                  </p>
                  
                  <span className="inline-flex items-center text-campfire-600 dark:text-campfire-400 text-sm font-medium">
                    Read devotion
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-night-900 to-night-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 text-campfire-300 animate-star-twinkle" style={{ animationDelay: `${i * 0.3}s` }} />
            ))}
          </div>
          
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">
            Join Us Around the Fire
          </h2>
          
          <p className="text-sky-100 mb-8">
            New devotionals are added regularly. Take time each evening to quiet your heart 
            and let the warmth of Jesus' presence surround you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/bible-study"
              className="inline-flex items-center justify-center px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-full transition-all"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Bible Studies
            </Link>
            <Link
              href="/journey"
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white/30 hover:bg-white/10 text-white font-medium rounded-full transition-all"
            >
              Explore the Journey
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
