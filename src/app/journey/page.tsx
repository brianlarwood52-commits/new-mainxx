'use client'

import React from 'react'
import Link from 'next/link'
import { MapPin, Fuel, Camera, Tent, Waves, ArrowRight, Anchor, RotateCcw } from 'lucide-react'

const journeyStops = [
  // OUTBOUND
  {
    km: 0,
    location: 'Swan View',
    region: 'Perth, Western Australia',
    description: 'Packed the car at dawn. The road stretched out ahead—thousands of kilometres of unknown waiting. Left behind the familiar. Drove towards... something.',
    type: 'start',
    coordinates: '31.9°S 116.0°E',
    leg: 'outbound',
  },
  {
    km: 720,
    location: 'Norseman',
    region: 'Gateway to the Nullarbor',
    description: 'Last real town before the crossing. Filled the tank, checked the tyres, bought enough water for a small army. The servo owner asked where I was headed. "East," I said. He just nodded.',
    type: 'town',
    coordinates: '32.2°S 121.8°E',
    leg: 'outbound',
  },
  {
    km: 1100,
    location: 'Caiguna',
    region: 'Start of the 90 Mile Straight',
    description: '146.6 kilometres without a single turn. The longest straight road in Australia. Somewhere around kilometre 50, the road stopped feeling like a road and started feeling like a meditation.',
    type: 'landmark',
    coordinates: '32.3°S 125.5°E',
    leg: 'outbound',
  },
  {
    km: 1400,
    location: 'Nullarbor Roadhouse',
    region: 'The Heart of Nowhere',
    description: 'Met a grey nomad couple who\'d been on the road for three years. "You\'re not running from something," the old man said. "You\'re running to something. I can see it in your eyes."',
    type: 'town',
    coordinates: '31.4°S 130.9°E',
    quote: '"Be still and know that I am God."',
    quoteRef: 'Psalm 46:10',
    leg: 'outbound',
  },
  {
    km: 1650,
    location: 'Bunda Cliffs',
    region: 'Great Australian Bight',
    description: 'Stood at the edge of the continent. 100-metre cliffs dropping straight into the Southern Ocean. Watched whales breach in the distance. Wept. Couldn\'t tell you why.',
    type: 'landmark',
    coordinates: '31.0°S 129.0°E',
    quote: '"The heavens declare the glory of God."',
    quoteRef: 'Psalm 19:1',
    leg: 'outbound',
  },
  {
    km: 1900,
    location: 'Border Village',
    region: 'SA/WA Border',
    description: 'Crossed into South Australia. Changed the clock forward 2.5 hours. Somehow felt like I\'d crossed more than just a timezone.',
    type: 'border',
    coordinates: '31.0°S 129.0°E',
    leg: 'outbound',
  },
  {
    km: 2250,
    location: 'Ceduna',
    region: 'South Australia',
    description: 'End of the Nullarbor. Civilisation returns. A real shower, a real bed. But somehow I missed the silence already.',
    type: 'town',
    coordinates: '32.1°S 133.7°E',
    leg: 'outbound',
  },
  {
    km: 3430,
    location: 'Port Lincoln',
    region: 'Eyre Peninsula, SA',
    description: 'The turnaround point. Parked the car, walked to the water, sat down. Didn\'t move for an hour. Somewhere on that road, I\'d found what I was looking for. Or maybe it found me.',
    type: 'destination',
    coordinates: '34.7°S 135.9°E',
    quote: '"He who began a good work in you will carry it on to completion."',
    quoteRef: 'Philippians 1:6',
    leg: 'turnaround',
  },
  // RETURN
  {
    km: 4610,
    location: 'Back Across the Nullarbor',
    region: 'The Return Journey',
    description: 'Same road, different eyes. What felt empty on the way out now felt full of meaning. The silence wasn\'t lonely anymore—it was peaceful.',
    type: 'journey',
    coordinates: '31.4°S 130.9°E',
    leg: 'return',
  },
  {
    km: 5500,
    location: 'Norseman',
    region: 'Western Australia',
    description: 'Back at the gateway. But this time, instead of heading straight to Perth, I turned south. There was more to see.',
    type: 'town',
    coordinates: '32.2°S 121.8°E',
    leg: 'return',
  },
  {
    km: 5700,
    location: 'Esperance',
    region: 'South Coast, WA',
    description: 'White sand beaches that look like they belong in the Caribbean. Lucky Bay, where kangaroos laze on the sand. A reminder that beauty often hides in unexpected places—and sometimes you have to go the long way to find it.',
    type: 'landmark',
    coordinates: '33.9°S 121.9°E',
    quote: '"The earth is the Lord\'s, and everything in it."',
    quoteRef: 'Psalm 24:1',
    leg: 'return',
  },
  {
    km: 5970,
    location: 'Israelite Bay',
    region: 'The Edge of Nowhere',
    description: 'The road turned to dirt. Then to sand. Then to almost nothing. An abandoned telegraph station. Complete isolation. The kind of place where you have no choice but to stop and listen. Out here, at the edge of everything, the journey finally made sense.',
    type: 'landmark',
    coordinates: '33.6°S 123.9°E',
    leg: 'return',
  },
  {
    km: 6859,
    location: 'Swan View',
    region: 'Perth, Western Australia',
    description: 'Back where I started. But not the same person who left. 6,859.5 kilometres later, the road had done its work. The journey was over. The transformation was just beginning.',
    type: 'end',
    coordinates: '31.9°S 116.0°E',
    leg: 'return',
  },
]

export default function JourneyPage() {
  return (
    <div className="min-h-screen bg-stone-950">
      
      {/* ===== HERO - Cinematic Opening ===== */}
      <section className="relative h-[70vh] flex items-end vignette film-grain">
        {/* Background gradient - sunset over road */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-600 via-earth-700 to-stone-950" />
        
        {/* Horizon */}
        <div className="absolute top-[40%] left-0 right-0 h-px bg-earth-500/30" />
        
        {/* Road */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-[60%] bg-gradient-to-t from-stone-800 to-transparent opacity-50" />
        
        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20 w-full">
          <p className="location-tag mb-4">A ROUND TRIP ACROSS THE AUSTRALIAN OUTBACK</p>
          <h1 className="font-cinematic text-6xl md:text-8xl text-dust-100 tracking-wider title-card mb-4">
            THE ROAD
          </h1>
          <p className="text-xl text-dust-300 font-serif max-w-2xl">
            6,859.5 kilometres. Out across the Nullarbor to Port Lincoln, 
            and back via Esperance and Israelite Bay. Every stop taught me something.
          </p>
        </div>
      </section>

      {/* ===== JOURNEY MAP/TIMELINE ===== */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Route overview */}
          <div className="mb-20">
            <div className="text-center mb-8">
              <p className="font-mono text-xs text-earth-500 tracking-widest mb-4">THE ROUTE</p>
            </div>
            
            {/* Outbound */}
            <div className="mb-6">
              <p className="font-mono text-xs text-green-500 tracking-widest mb-2">→ OUTBOUND</p>
              <div className="flex items-center gap-2 flex-wrap text-sm">
                <span className="font-cinematic text-lg text-dust-300">SWAN VIEW</span>
                <span className="text-earth-600">→</span>
                <span className="font-mono text-xs text-dust-500">NORSEMAN</span>
                <span className="text-earth-600">→</span>
                <span className="font-mono text-xs text-dust-500">NULLARBOR</span>
                <span className="text-earth-600">→</span>
                <span className="font-mono text-xs text-dust-500">CEDUNA</span>
                <span className="text-earth-600">→</span>
                <span className="font-cinematic text-lg text-earth-400">PORT LINCOLN</span>
              </div>
            </div>
            
            {/* Return */}
            <div>
              <p className="font-mono text-xs text-blue-400 tracking-widest mb-2">← RETURN (VIA SOUTH COAST)</p>
              <div className="flex items-center gap-2 flex-wrap text-sm">
                <span className="font-cinematic text-lg text-earth-400">PORT LINCOLN</span>
                <span className="text-earth-600">→</span>
                <span className="font-mono text-xs text-dust-500">NULLARBOR</span>
                <span className="text-earth-600">→</span>
                <span className="font-mono text-xs text-dust-500">NORSEMAN</span>
                <span className="text-earth-600">→</span>
                <span className="font-mono text-xs text-bight-400">ESPERANCE</span>
                <span className="text-earth-600">→</span>
                <span className="font-mono text-xs text-bight-400">ISRAELITE BAY</span>
                <span className="text-earth-600">→</span>
                <span className="font-cinematic text-lg text-dust-300">SWAN VIEW</span>
              </div>
            </div>
            
            <p className="font-mono text-xs text-earth-600 mt-6 text-center">6,859.5 KM TOTAL</p>
          </div>

          {/* Journey entries */}
          <div className="space-y-12">
            {journeyStops.map((stop, index) => (
              <article key={index} className="relative">
                {/* Leg indicator */}
                {(index === 0 || journeyStops[index - 1]?.leg !== stop.leg) && (
                  <div className="mb-6 flex items-center gap-3">
                    {stop.leg === 'outbound' && (
                      <>
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-green-600/50" />
                        <span className="font-mono text-xs text-green-500 tracking-widest">HEADING EAST →</span>
                        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-green-600/50" />
                      </>
                    )}
                    {stop.leg === 'turnaround' && (
                      <>
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-earth-500/50" />
                        <RotateCcw className="h-4 w-4 text-earth-500" />
                        <span className="font-mono text-xs text-earth-500 tracking-widest">TURNAROUND</span>
                        <RotateCcw className="h-4 w-4 text-earth-500 scale-x-[-1]" />
                        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-earth-500/50" />
                      </>
                    )}
                    {stop.leg === 'return' && index > 0 && journeyStops[index - 1]?.leg !== 'return' && (
                      <>
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500/50" />
                        <span className="font-mono text-xs text-blue-400 tracking-widest">← HEADING HOME</span>
                        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-500/50" />
                      </>
                    )}
                  </div>
                )}

                {/* Connecting line */}
                {index < journeyStops.length - 1 && (
                  <div className={`absolute left-6 top-20 bottom-0 w-px bg-gradient-to-b to-transparent
                                ${stop.leg === 'outbound' ? 'from-green-600/50' : 
                                  stop.leg === 'return' ? 'from-blue-500/50' : 'from-earth-600'}`}
                       style={{ height: 'calc(100% + 3rem)' }} />
                )}
                
                <div className="flex gap-8">
                  {/* Kilometre marker */}
                  <div className="flex-shrink-0 w-12">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 border-stone-900
                                  ${stop.type === 'start' ? 'bg-green-600' :
                                    stop.type === 'end' ? 'bg-green-600' :
                                    stop.type === 'destination' ? 'bg-earth-500' :
                                    stop.type === 'landmark' ? 'bg-bight-600' :
                                    stop.type === 'journey' ? 'bg-stone-600' :
                                    'bg-stone-700'}`}>
                      {stop.type === 'start' && <MapPin className="h-5 w-5 text-white" />}
                      {stop.type === 'end' && <MapPin className="h-5 w-5 text-white" />}
                      {stop.type === 'destination' && <Anchor className="h-5 w-5 text-white" />}
                      {stop.type === 'landmark' && <Camera className="h-5 w-5 text-white" />}
                      {stop.type === 'town' && <Fuel className="h-5 w-5 text-white" />}
                      {stop.type === 'border' && <MapPin className="h-5 w-5 text-white" />}
                      {stop.type === 'journey' && <ArrowRight className="h-5 w-5 text-white" />}
                    </div>
                    <p className="font-mono text-xs text-dust-600 text-center mt-2">
                      {stop.km.toLocaleString()}
                    </p>
                    <p className="font-mono text-[10px] text-dust-700 text-center">KM</p>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pb-4">
                    <div className={`bg-stone-900/50 border rounded-lg p-6 md:p-8
                                  ${stop.leg === 'return' ? 'border-blue-900/50' : 'border-stone-800'}`}>
                      {/* Location header */}
                      <div className="mb-4">
                        <p className="font-mono text-xs text-earth-500 tracking-widest mb-1">
                          {stop.coordinates}
                        </p>
                        <h2 className="font-cinematic text-3xl md:text-4xl text-dust-100 tracking-wider">
                          {stop.location.toUpperCase()}
                        </h2>
                        <p className="font-mono text-sm text-dust-500 tracking-wide">
                          {stop.region}
                        </p>
                      </div>
                      
                      {/* Description */}
                      <p className="text-dust-300 font-serif text-lg leading-relaxed">
                        {stop.description}
                      </p>
                      
                      {/* Quote if exists */}
                      {stop.quote && (
                        <blockquote className="mt-6 pl-4 border-l-2 border-earth-600">
                          <p className="font-serif italic text-dust-400">
                            {stop.quote}
                          </p>
                          <cite className="font-mono text-xs text-earth-600 mt-2 block">
                            — {stop.quoteRef}
                          </cite>
                        </blockquote>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-gradient-to-b from-stone-950 to-stone-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-mono text-xs text-earth-500 tracking-widest mb-4">CONTINUE</p>
          <h2 className="font-cinematic text-4xl md:text-5xl text-dust-100 tracking-wider mb-6">
            GATHER AROUND THE FIRE
          </h2>
          <p className="text-dust-400 font-serif text-lg mb-8 max-w-xl mx-auto">
            The road had many stories. Some were told at roadhouses. 
            Others came out under the stars.
          </p>
          <Link href="/campfire" className="btn-expedition inline-flex items-center gap-3">
            <Tent className="h-5 w-5" />
            CAMPFIRE TALES
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
