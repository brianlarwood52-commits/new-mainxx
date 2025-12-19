import React from 'react'
import Link from 'next/link'
import { MapPin, ArrowRight, Mountain, Waves, Tent, Sun, Building, Navigation } from 'lucide-react'
import { journeyStops, JourneyStop } from '@/data/journeyStops'

export const metadata = {
  title: 'The Journey - Perth to Port Lincoln',
  description: 'Follow the road trip journey from Perth to Port Lincoln across the Australian outback. Each stop tells a story of faith, discovery, and running to God.',
}

const getTypeIcon = (type: JourneyStop['type']) => {
  switch (type) {
    case 'city': return Building
    case 'desert': return Sun
    case 'beach': return Waves
    case 'roadhouse': return Navigation
    case 'camp': return Tent
    case 'destination': return MapPin
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
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-500/20 to-transparent" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 dark:bg-sky-900/50 rounded-full text-sky-700 dark:text-sky-300 text-sm font-medium mb-6">
            <MapPin className="h-4 w-4" />
            2,400+ kilometers of discovery
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6">
            The Journey
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            In 2024, I drove from Perth to Port Lincoln across the Nullarbor Plain. 
            This is the story of that journey - the places, the people, and the spiritual 
            discoveries made along the way.
          </p>
          
          {/* Journey Route Visualization */}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400 flex-wrap">
            <span className="font-semibold text-sky-600 dark:text-sky-400">Perth</span>
            <ArrowRight className="h-4 w-4" />
            <span>Norseman</span>
            <ArrowRight className="h-4 w-4" />
            <span>Nullarbor</span>
            <ArrowRight className="h-4 w-4" />
            <span>Ceduna</span>
            <ArrowRight className="h-4 w-4" />
            <span className="font-semibold text-bush-600 dark:text-bush-400">Port Lincoln</span>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-400 via-outback-400 to-bush-400 transform md:-translate-x-1/2" />
            
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
                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${getTypeColor(stop.type)} flex items-center justify-center shadow-lg border-4 border-white dark:border-night-900`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                    </div>
                    
                    {/* Content card */}
                    <div className={`ml-28 md:ml-0 md:w-5/12 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                      <Link 
                        href={`/journey/${stop.id}`}
                        className="block bg-white/90 dark:bg-night-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700/50"
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
                        
                        <div className="flex items-center text-sky-600 dark:text-sky-400 text-sm font-medium group">
                          Read more
                          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-sky-50/80 dark:bg-night-900/80 backdrop-blur-sm mt-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Ready to Start Your Own Journey?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            The road to God is different for everyone, but you don't have to walk it alone. 
            Explore our resources and connect with a community walking the same path.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/campfire-devotions"
              className="inline-flex items-center justify-center px-6 py-3 bg-campfire-500 hover:bg-campfire-600 text-white font-medium rounded-full transition-all duration-300"
            >
              <Tent className="mr-2 h-5 w-5" />
              Campfire Devotions
            </Link>
            <Link
              href="/bible-study"
              className="inline-flex items-center justify-center px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-full transition-all duration-300"
            >
              Bible Study Guides
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
