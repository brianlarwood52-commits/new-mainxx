'use client'

import React from 'react'
import { Tent, Flame, Star, ArrowRight } from 'lucide-react'

const stories = [
  {
    title: 'The Roadhouse at Twilight',
    excerpt: 'A chance encounter with a truck driver who shared more than just coffee—he shared wisdom that changed how I see my journey.',
    category: 'People on the Road',
  },
  {
    title: 'When the Car Broke Down',
    excerpt: 'Stranded on the Nullarbor with no phone signal. What seemed like disaster became one of the most meaningful experiences of the trip.',
    category: 'Challenges & Faith',
  },
  {
    title: 'Camping at the Cliffs',
    excerpt: 'Watching the sunset paint the Bunda Cliffs in gold and pink, I understood something new about God&apos;s artistry.',
    category: 'Creation Moments',
  },
]

export default function CampfirePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-sky-100 to-white dark:from-abyss-900 dark:to-abyss-950 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="relative inline-block mb-6">
            <Tent className="h-16 w-16 text-sky-600 dark:text-sky-400" />
            <Flame className="h-8 w-8 text-orange-500 absolute -bottom-2 -right-2 animate-pulse" />
          </div>
          <h1 className="font-display text-5xl font-bold text-abyss-900 dark:text-white mb-4">
            Campfire Stories
          </h1>
          <p className="text-xl text-abyss-600 dark:text-abyss-300">
            Gather &apos;round and share in tales from the road.
          </p>
        </div>
        
        {/* Decorative stars in dark mode */}
        <div className="absolute inset-0 pointer-events-none">
          <Star className="absolute top-20 left-1/4 h-4 w-4 text-sky-300 dark:text-sky-500 opacity-0 dark:opacity-50" />
          <Star className="absolute top-32 right-1/4 h-3 w-3 text-sky-300 dark:text-sky-500 opacity-0 dark:opacity-50" />
          <Star className="absolute bottom-20 left-1/3 h-4 w-4 text-sky-300 dark:text-sky-500 opacity-0 dark:opacity-50" />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white dark:bg-abyss-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-abyss-600 dark:text-abyss-300">
            There&apos;s something magical about sitting around a campfire as the stars come out. 
            It&apos;s where stories are shared, lessons are learned, and connections are made. 
            This is our virtual campfire—a place to share the stories that emerged from 
            the journey across Australia.
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16 bg-sky-50 dark:bg-abyss-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-abyss-900 dark:text-white mb-8 text-center">
            Stories from the Road
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <div key={index} className="card group hover:border-orange-400 dark:hover:border-orange-500 transition-all hover:-translate-y-1 cursor-pointer">
                <span className="text-xs font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-wider">
                  {story.category}
                </span>
                <h3 className="font-display text-xl font-semibold text-abyss-900 dark:text-white mt-2 mb-3 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  {story.title}
                </h3>
                <p className="text-abyss-600 dark:text-abyss-400 text-sm mb-4">
                  {story.excerpt}
                </p>
                <span className="text-sky-600 dark:text-sky-400 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read the story <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-700 dark:to-orange-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Flame className="h-12 w-12 text-white mx-auto mb-4 animate-pulse" />
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            More Stories Coming Soon
          </h2>
          <p className="text-orange-100 max-w-2xl mx-auto">
            Every journey has more stories than can be told in a single sitting. 
            Check back regularly as we continue to share tales from the road 
            and the lessons learned along the way.
          </p>
        </div>
      </section>
    </div>
  )
}
