import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, MapPin, BookOpen, Quote } from 'lucide-react'
import { journeyStops, getJourneyStopById } from '@/data/journeyStops'

export async function generateStaticParams() {
  return journeyStops.map((stop) => ({
    id: stop.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const stop = getJourneyStopById(id)
  
  if (!stop) {
    return { title: 'Stop Not Found' }
  }

  return {
    title: `${stop.title} - ${stop.location}`,
    description: stop.shortDescription,
  }
}

export default async function JourneyStopPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const stop = getJourneyStopById(id)
  
  if (!stop) {
    notFound()
  }

  const currentIndex = journeyStops.findIndex(s => s.id === id)
  const prevStop = currentIndex > 0 ? journeyStops[currentIndex - 1] : null
  const nextStop = currentIndex < journeyStops.length - 1 ? journeyStops[currentIndex + 1] : null

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-500/10 to-transparent" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link 
            href="/journey"
            className="inline-flex items-center text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 mb-8 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Journey
          </Link>

          {/* Location badge */}
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="h-5 w-5 text-sky-500" />
            <span className="text-sky-600 dark:text-sky-400 font-medium">{stop.location}</span>
            <span className="text-gray-400 dark:text-gray-500">•</span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">{stop.distance} from Perth</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            {stop.title}
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {stop.shortDescription}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Image placeholder */}
          <div className="aspect-video bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl mb-12 flex items-center justify-center shadow-xl">
            <div className="text-center text-white/80">
              <MapPin className="h-12 w-12 mx-auto mb-3" />
              <p className="text-sm">{stop.imageDescription}</p>
              <p className="text-xs mt-2 opacity-60">Photo coming soon</p>
            </div>
          </div>

          {/* Story content */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            {stop.fullDescription.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Spiritual Lesson Card */}
          <div className="bg-sky-50 dark:bg-sky-900/30 rounded-2xl p-8 mb-12 border border-sky-100 dark:border-sky-800/50">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-gray-800 dark:text-white mb-3">
                  The Spiritual Lesson
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {stop.spiritualLesson}
                </p>
              </div>
            </div>
          </div>

          {/* Bible Verse */}
          <div className="bg-gradient-to-r from-campfire-50 to-campfire-100 dark:from-campfire-900/30 dark:to-campfire-800/30 rounded-2xl p-8 mb-12 border border-campfire-200 dark:border-campfire-700/50">
            <Quote className="h-8 w-8 text-campfire-500 mb-4" />
            <blockquote className="font-serif text-xl md:text-2xl text-gray-800 dark:text-white italic leading-relaxed mb-4">
              "{stop.bibleVerse.text}"
            </blockquote>
            <cite className="text-campfire-600 dark:text-campfire-400 font-medium">
              — {stop.bibleVerse.reference}
            </cite>
          </div>

          {/* Navigation between stops */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
            {prevStop ? (
              <Link 
                href={`/journey/${prevStop.id}`}
                className="flex items-center gap-3 p-4 bg-white dark:bg-night-800 rounded-xl shadow hover:shadow-lg transition-all duration-300 group flex-1"
              >
                <ArrowLeft className="h-5 w-5 text-gray-400 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Previous Stop</p>
                  <p className="font-medium text-gray-800 dark:text-white">{prevStop.title}</p>
                </div>
              </Link>
            ) : <div className="flex-1" />}
            
            {nextStop ? (
              <Link 
                href={`/journey/${nextStop.id}`}
                className="flex items-center gap-3 p-4 bg-white dark:bg-night-800 rounded-xl shadow hover:shadow-lg transition-all duration-300 group flex-1 text-right justify-end"
              >
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Next Stop</p>
                  <p className="font-medium text-gray-800 dark:text-white">{nextStop.title}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <Link 
                href="/journey"
                className="flex items-center gap-3 p-4 bg-sky-600 text-white rounded-xl shadow hover:shadow-lg transition-all duration-300 group flex-1 justify-center"
              >
                <span className="font-medium">Complete the Journey</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
