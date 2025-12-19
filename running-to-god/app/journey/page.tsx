import React from 'react'
import Link from 'next/link'
import { MapPin, ArrowRight, Mountain, Waves, Tent, Building, Navigation, Flag } from 'lucide-react'
import { journeyStops, JourneyStop } from '@/data/journeyStops'

export const metadata = {
  title: 'The Journey - Perth to Port Lincoln',
  description: 'Follow the road trip journey from Perth to Port Lincoln across the Australian outback. Each stop tells a story of faith and running to God.',
}

const getTypeIcon = (type: JourneyStop['type']) => {
  switch (type) {
    case 'city': return Building
    case 'desert': return Mountain
    case 'beach': return Waves
    case 'roadhouse': return Navigation
    case 'camp': return Tent
    case 'destination': return Flag
    default: return MapPin
  }
}

const getTypeColor = (type: JourneyStop['type']) => {
  switch (type) {
    case 'city': return 'from-sky-400 to-sky-600'
    case 'desert': return 'from-outback-400 to-outback-600'
    case 'beach': return 'from-ocean-400 to-ocean-600'
    case 'roadhouse': return 'from-sand-400 to-sand-600'
    case 'camp': return 'from-campfire-400 to-campfire-600'
    case 'destination': return 'from-bush-400 to-bush-600'
    default: return 'from-sky-400 to-sky-600'
  }
}

export default function JourneyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-b from-sky-500 to-sky-600 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 stars-bg" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
            <MapPin className="h-4 w-4" />
            2,400+ kilometers of discovery
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            The Journey
          </h1>
          
          <p className="text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed mb-8">
            In 2024, I drove from Perth to Port Lincoln across the Nullarbor Plain. 
            This is the story of that journey — the places, the people, and the 
            spiritual discoveries made along the way.
          </p>
          
          {/* Route visualization */}
          <div className="flex items-center justify-center gap-2 text-sm text-white/80 flex-wrap">
            <span className="font-semibold text-white">Perth</span>
            <ArrowRight className="h-4 w-4" />
            <span>Norseman</span>
            <ArrowRight className="h-4 w-4" />
            <span>Nullarbor</span>
            <ArrowRight className="h-4 w-4" />
            <span>Ceduna</span>
            <ArrowRight className="h-4 w-4" />
            <span className="font-semibold text-white">Port Lincoln</span>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 bg-white dark:bg-night-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-400 via-outback-400 to-bush-400 md:-translate-x-1/2" />
            
            {/* Journey Stops */}
            <div className="space-y-12">
              {journeyStops.map((stop, index) => {
                const Icon = getTypeIcon(stop.type)
                const isEven = index % 2 === 0
                
                return (
                  <div 
                    key={stop.id}
                    className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Timeline node */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${getTypeColor(stop.type)} flex items-center justify-center shadow-lg border-4 border-white dark:border-night-900`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                    </div>
                    
                    {/* Content card */}
                    <div className={`ml-28 md:ml-0 md:w-5/12 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                      <Link 
                        href={`/journey/${stop.id}`}
                        className="block bg-white dark:bg-night-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700/50 card-hover"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{stop.distance} from Perth</p>
                            <h3 className="font-serif text-xl font-bold text-gray-800 dark:text-white">
                              {stop.title}
                            </h3>
                          </div>
                        </div>
                        
                        <p className="text-sm text-sky-600 dark:text-sky-400 font-medium mb-3">
                          {stop.location}
                        </p>
                        
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                          {stop.shortDescription}
                        </p>
                        
                        <span className="inline-flex items-center text-sky-600 dark:text-sky-400 text-sm font-medium group">
                          Read more
                          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-sky-50 dark:bg-night-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Ready to Start Your Own Journey?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            The road to Jesus is different for everyone, but you don't have to walk it alone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/campfire-devotions"
              className="inline-flex items-center justify-center px-6 py-3 bg-campfire-500 hover:bg-campfire-600 text-white font-medium rounded-full transition-all"
            >
              <Tent className="mr-2 h-5 w-5" />
              Campfire Devotions
            </Link>
            <Link
              href="/bible-study"
              className="inline-flex items-center justify-center px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-full transition-all"
            >
              Bible Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
