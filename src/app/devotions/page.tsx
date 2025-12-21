'use client'

import React from 'react'
import { BookOpen, Calendar, ArrowRight, Sunrise } from 'lucide-react'

const devotions = [
  {
    title: 'Finding Stillness on the Open Road',
    excerpt: 'In the rush of our daily lives, we often forget to pause. The Nullarbor taught me the power of being still before God.',
    date: 'December 21, 2025',
    verse: 'Be still and know that I am God.',
    verseRef: 'Psalm 46:10',
  },
  {
    title: 'The Road Ahead',
    excerpt: 'We don&apos;t always know where life is taking us, but we can trust the One who holds the map.',
    date: 'December 20, 2025',
    verse: 'Trust in the Lord with all your heart.',
    verseRef: 'Proverbs 3:5',
  },
  {
    title: 'Stars in the Desert Sky',
    excerpt: 'Lying under a blanket of stars in the outback reminded me of how vast God&apos;s creation is—and how loved I am within it.',
    date: 'December 19, 2025',
    verse: 'The heavens declare the glory of God.',
    verseRef: 'Psalm 19:1',
  },
]

export default function DevotionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-sky-100 to-white dark:from-abyss-900 dark:to-abyss-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="h-16 w-16 text-sky-600 dark:text-sky-400 mx-auto mb-6" />
          <h1 className="font-display text-5xl font-bold text-abyss-900 dark:text-white mb-4">
            Daily Devotions
          </h1>
          <p className="text-xl text-abyss-600 dark:text-abyss-300">
            Encouragement for the journey, one day at a time.
          </p>
        </div>
      </section>

      {/* Today's Devotion */}
      <section className="py-16 bg-white dark:bg-abyss-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card bg-gradient-to-br from-sky-50 to-white dark:from-abyss-800 dark:to-abyss-900 border-sky-200 dark:border-sky-800">
            <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 mb-4">
              <Sunrise className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Today&apos;s Devotion</span>
            </div>
            
            <h2 className="font-display text-3xl font-bold text-abyss-900 dark:text-white mb-4">
              Finding Stillness on the Open Road
            </h2>
            
            <blockquote className="border-l-4 border-sky-500 pl-4 mb-6 italic text-abyss-700 dark:text-abyss-300">
              &ldquo;Be still and know that I am God.&rdquo;
              <footer className="mt-1 not-italic text-sm text-abyss-500 dark:text-abyss-400">
                — Psalm 46:10
              </footer>
            </blockquote>
            
            <div className="text-abyss-600 dark:text-abyss-300 space-y-4">
              <p>
                There&apos;s something about driving through the Nullarbor that forces you to slow down—
                not your speed, but your soul. The endless horizon stretches before you, and suddenly 
                the urgent emails, the busy schedules, and the constant noise of modern life seem 
                very far away.
              </p>
              <p>
                In those quiet moments, God speaks. Not in a loud voice, but in the stillness. 
                The psalmist knew this when he wrote, &ldquo;Be still and know that I am God.&rdquo; 
                It&apos;s an invitation to stop striving, to stop worrying, and simply to know.
              </p>
              <p>
                Today, wherever you are, I encourage you to find a moment of stillness. It doesn&apos;t 
                have to be on a remote highway—it could be in your car before work, during a lunch 
                break, or in those quiet minutes before sleep. Be still. And know.
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-sky-200 dark:border-abyss-700">
              <h4 className="font-semibold text-abyss-900 dark:text-white mb-2">Prayer:</h4>
              <p className="text-abyss-600 dark:text-abyss-400 italic">
                Lord, help me to find moments of stillness in my busy life. Quiet my heart and 
                mind so that I can hear Your voice and know Your presence. Amen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Previous Devotions */}
      <section className="py-16 bg-sky-50 dark:bg-abyss-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-abyss-900 dark:text-white mb-8 flex items-center gap-2">
            <Calendar className="h-6 w-6 text-sky-600 dark:text-sky-400" />
            Recent Devotions
          </h2>
          
          <div className="space-y-6">
            {devotions.slice(1).map((devotion, index) => (
              <div key={index} className="card hover:border-sky-400 dark:hover:border-sky-500 transition-all cursor-pointer group">
                <span className="text-xs text-sky-600 dark:text-sky-400 font-medium">
                  {devotion.date}
                </span>
                <h3 className="font-display text-xl font-semibold text-abyss-900 dark:text-white mt-1 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  {devotion.title}
                </h3>
                <p className="text-abyss-600 dark:text-abyss-400 mt-2 line-clamp-2">
                  {devotion.excerpt}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm italic text-abyss-500 dark:text-abyss-500">
                    {devotion.verseRef}
                  </span>
                  <span className="text-sky-600 dark:text-sky-400 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read more <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
