import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Flame, BookOpen, Quote, MessageCircle, MapPin } from 'lucide-react'
import { campfireDevotions, getCampfireDevotionalById } from '@/data/campfireDevotions'
import { getJourneyStopById } from '@/data/journeyStops'

export async function generateStaticParams() {
  return campfireDevotions.map((devotion) => ({
    id: devotion.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const devotion = getCampfireDevotionalById(id)
  
  if (!devotion) {
    return { title: 'Devotion Not Found' }
  }

  return {
    title: `${devotion.title} - Campfire Devotion`,
    description: devotion.shortDescription,
  }
}

export default async function CampfireDevotionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const devotion = getCampfireDevotionalById(id)
  
  if (!devotion) {
    notFound()
  }

  const currentIndex = campfireDevotions.findIndex(d => d.id === id)
  const prevDevotion = currentIndex > 0 ? campfireDevotions[currentIndex - 1] : null
  const nextDevotion = currentIndex < campfireDevotions.length - 1 ? campfireDevotions[currentIndex + 1] : null
  
  const linkedJourneyStop = devotion.journeyConnection ? getJourneyStopById(devotion.journeyConnection) : null

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero */}
      <section className="relative py-16 overflow-hidden">
        {/* Campfire glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-campfire-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link 
            href="/campfire-devotions"
            className="inline-flex items-center text-campfire-600 dark:text-campfire-400 hover:text-campfire-700 dark:hover:text-campfire-300 mb-8 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Campfire Devotions
          </Link>

          {/* Theme badge */}
          <div className="flex items-center gap-2 mb-4">
            <Flame className="h-5 w-5 text-campfire-500" />
            <span className="text-campfire-600 dark:text-campfire-400 font-medium">{devotion.theme}</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            {devotion.title}
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {devotion.shortDescription}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Decorative campfire scene */}
          <div className="aspect-video bg-gradient-to-b from-night-900 to-night-950 rounded-2xl mb-12 flex items-end justify-center relative overflow-hidden shadow-xl">
            {/* Stars */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 60}%`,
                    opacity: Math.random() * 0.7 + 0.3,
                  }}
                />
              ))}
            </div>
            
            {/* Campfire glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-campfire-500/30 rounded-full blur-3xl" />
            
            {/* Flame icon */}
            <div className="relative mb-8">
              <Flame className="h-16 w-16 text-campfire-400 animate-pulse" />
            </div>
          </div>

          {/* Main devotional content */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            {devotion.fullContent.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Bible Verse */}
          <div className="bg-gradient-to-r from-campfire-50 to-campfire-100 dark:from-campfire-900/30 dark:to-campfire-800/30 rounded-2xl p-8 mb-12 border border-campfire-200 dark:border-campfire-700/50">
            <Quote className="h-8 w-8 text-campfire-500 mb-4" />
            <blockquote className="font-serif text-xl md:text-2xl text-gray-800 dark:text-white italic leading-relaxed mb-4">
              "{devotion.bibleVerse.text}"
            </blockquote>
            <cite className="text-campfire-600 dark:text-campfire-400 font-medium">
              — {devotion.bibleVerse.reference}
            </cite>
          </div>

          {/* Reflection Questions */}
          <div className="bg-sky-50 dark:bg-sky-900/30 rounded-2xl p-8 mb-12 border border-sky-100 dark:border-sky-800/50">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-gray-800 dark:text-white mb-3">
                  Reflection
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {devotion.reflection}
                </p>
              </div>
            </div>
          </div>

          {/* Prayer */}
          <div className="bg-bush-50 dark:bg-bush-900/30 rounded-2xl p-8 mb-12 border border-bush-100 dark:border-bush-800/50">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-bush-500 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-gray-800 dark:text-white mb-3">
                  A Prayer
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                  {devotion.prayer}
                </p>
              </div>
            </div>
          </div>

          {/* Linked Journey Stop */}
          {linkedJourneyStop && (
            <div className="bg-gray-50 dark:bg-night-800/50 rounded-2xl p-6 mb-12 border border-gray-200 dark:border-gray-700/50">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                This devotion is connected to a journey stop
              </p>
              <Link 
                href={`/journey/${linkedJourneyStop.id}`}
                className="flex items-center justify-between p-4 bg-white dark:bg-night-900 rounded-xl hover:shadow-lg transition-all duration-300 group"
              >
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {linkedJourneyStop.title}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {linkedJourneyStop.location}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          )}

          {/* Navigation between devotions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
            {prevDevotion ? (
              <Link 
                href={`/campfire-devotions/${prevDevotion.id}`}
                className="flex items-center gap-3 p-4 bg-white dark:bg-night-800 rounded-xl shadow hover:shadow-lg transition-all duration-300 group flex-1"
              >
                <ArrowLeft className="h-5 w-5 text-gray-400 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Previous</p>
                  <p className="font-medium text-gray-800 dark:text-white">{prevDevotion.title}</p>
                </div>
              </Link>
            ) : <div className="flex-1" />}
            
            {nextDevotion ? (
              <Link 
                href={`/campfire-devotions/${nextDevotion.id}`}
                className="flex items-center gap-3 p-4 bg-white dark:bg-night-800 rounded-xl shadow hover:shadow-lg transition-all duration-300 group flex-1 text-right justify-end"
              >
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Next</p>
                  <p className="font-medium text-gray-800 dark:text-white">{nextDevotion.title}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <Link 
                href="/campfire-devotions"
                className="flex items-center gap-3 p-4 bg-campfire-600 text-white rounded-xl shadow hover:shadow-lg transition-all duration-300 group flex-1 justify-center"
              >
                <span className="font-medium">All Devotions</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
