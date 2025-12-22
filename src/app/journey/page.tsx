'use client'

import React from 'react'
import Link from 'next/link'
import { MapPin, Fuel, Camera, Tent, Waves, ArrowRight, Anchor, RotateCcw, Coffee, Mountain, Shell, TreePine, ChevronRight } from 'lucide-react'
import { journeyStops } from '@/data/journeyStops'

export default function JourneyPage() {
  return (
    <div className="min-h-screen">
      
      {/* ===== HERO ===== */}
      <section className="relative h-[70vh] flex items-end vignette film-grain">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-600 via-earth-700 to-stone-950" />
        <div className="absolute top-[40%] left-0 right-0 h-px bg-earth-500/30" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-[60%] bg-gradient-to-t from-stone-800 to-transparent opacity-50" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20 w-full">
          <p className="location-tag mb-4">A ROUND TRIP ACROSS THE AUSTRALIAN OUTBACK</p>
          <h1 className="font-cinematic text-6xl md:text-8xl text-dust-100 tracking-wider title-card mb-4">
            THE ROAD
          </h1>
          <p className="text-xl text-dust-300 font-serif max-w-2xl">
            6,859.5 kilometres. {journeyStops.length} stops. Out across the Nullarbor to Port Lincoln, 
            and back via the Eyre Peninsula, Esperance and Israelite Bay.
          </p>
        </div>
      </section>

      {/* ===== ROUTE OVERVIEW ===== */}
      <section className="py-12 bg-stone-900/40 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Outbound */}
            <div className="bg-stone-900 border border-stone-800 rounded-lg p-6">
              <p className="font-mono text-xs text-green-500 tracking-widest mb-3">→ OUTBOUND</p>
              <p className="text-dust-400 text-sm leading-relaxed">
                Swan View → Toodyay → Dowerin → Koorda → Bencubbin → Mukinbudin → 
                Boondi Rock → Coolgardie → Norseman → Caiguna → Madura → Eucla → 
                Border Village → Nullarbor → Mexican Hat → Ceduna → <span className="text-earth-400">Port Lincoln</span>
              </p>
            </div>
            
            {/* Return */}
            <div className="bg-stone-900 border border-blue-900/30 rounded-lg p-6">
              <p className="font-mono text-xs text-blue-400 tracking-widest mb-3">← RETURN (VIA COAST)</p>
              <p className="text-dust-400 text-sm leading-relaxed">
                <span className="text-earth-400">Port Lincoln</span> → Coffin Bay → Colton Bakehouse → Talia Caves → 
                Venus Bay → Penong → Cactus Beach → Point Sinclair → Port Le Hunte → 
                Norseman → <span className="text-bight-400">Esperance</span> → Pink Lake → 
                <span className="text-bight-400">Israelite Bay</span> → Swan View
              </p>
            </div>
          </div>
          <p className="font-mono text-xs text-earth-600 mt-6 text-center">6,859.5 KM TOTAL • {journeyStops.length} STOPS</p>
        </div>
      </section>

      {/* ===== JOURNEY TIMELINE ===== */}
      <section className="py-20 bg-stone-950/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            {journeyStops.map((stop, index) => (
              <article key={index} className="relative">
                {/* Leg dividers */}
                {(index === 0 || journeyStops[index - 1]?.leg !== stop.leg) && (
                  <div className="mb-8 flex items-center gap-3">
                    {stop.leg === 'outbound' && index === 0 && (
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
                        <span className="font-mono text-xs text-earth-500 tracking-widest">TURNAROUND POINT</span>
                        <RotateCcw className="h-4 w-4 text-earth-500 scale-x-[-1]" />
                        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-earth-500/50" />
                      </>
                    )}
                    {stop.leg === 'return' && journeyStops[index - 1]?.leg === 'turnaround' && (
                      <>
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500/50" />
                        <span className="font-mono text-xs text-blue-400 tracking-widest">← THE LONG WAY HOME</span>
                        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-500/50" />
                      </>
                    )}
                  </div>
                )}

                {/* Connecting line */}
                {index < journeyStops.length - 1 && (
                  <div className={`absolute left-5 top-14 bottom-0 w-px bg-gradient-to-b to-transparent
                                ${stop.leg === 'outbound' ? 'from-green-600/30' : 
                                  stop.leg === 'return' ? 'from-blue-500/30' : 'from-earth-600/30'}`}
                       style={{ height: 'calc(100% + 2rem)' }} />
                )}
                
                <div className="flex gap-6">
                  {/* Marker */}
                  <div className="flex-shrink-0 w-10">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 border-stone-900 text-white
                                  ${stop.type === 'start' ? 'bg-green-600' :
                                    stop.type === 'end' ? 'bg-green-600' :
                                    stop.type === 'destination' || stop.type === 'turnaround' ? 'bg-earth-500' :
                                    stop.type === 'landmark' ? 'bg-bight-600' :
                                    stop.type === 'roadhouse' ? 'bg-campfire-600' :
                                    stop.type === 'highlight' ? 'bg-pink-600' :
                                    stop.type === 'border' ? 'bg-purple-600' :
                                    'bg-stone-700'}`}>
                      {stop.type === 'start' && <MapPin className="h-4 w-4" />}
                      {stop.type === 'end' && <MapPin className="h-4 w-4" />}
                      {stop.type === 'destination' && <Anchor className="h-4 w-4" />}
                      {stop.type === 'landmark' && <Camera className="h-4 w-4" />}
                      {stop.type === 'town' && <Fuel className="h-4 w-4" />}
                      {stop.type === 'roadhouse' && <Coffee className="h-4 w-4" />}
                      {stop.type === 'border' && <MapPin className="h-4 w-4" />}
                      {stop.type === 'highlight' && <span className="text-sm">★</span>}
                    </div>
                    <p className="font-mono text-[10px] text-dust-600 text-center mt-1">
                      {stop.km.toLocaleString()}km
                    </p>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <div className={`bg-stone-900/50 border rounded-lg p-5
                                  ${stop.leg === 'return' ? 'border-blue-900/30' : 
                                    stop.type === 'highlight' ? 'border-pink-900/50' : 'border-stone-800'}`}>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <Link 
                            href={`/journey/${stop.slug}`}
                            className="group/link inline-flex items-center gap-2 hover:text-cyan-400 transition-colors"
                          >
                            <h2 className="font-cinematic text-xl md:text-2xl text-dust-100 tracking-wider group-hover/link:text-cyan-400 transition-colors">
                              {stop.location.toUpperCase()}
                            </h2>
                            <ChevronRight className="h-5 w-5 text-dust-600 group-hover/link:text-cyan-400 group-hover/link:translate-x-1 transition-all" />
                          </Link>
                          <p className="font-mono text-xs text-dust-500 tracking-wide">
                            {stop.region}
                          </p>
                        </div>
                        <p className="font-mono text-[10px] text-earth-600 tracking-widest whitespace-nowrap">
                          {stop.coordinates}
                        </p>
                      </div>
                      
                      <p className="text-dust-400 font-serif leading-relaxed">
                        {stop.description}
                      </p>
                      
                      {stop.quote && (
                        <blockquote className="mt-4 pl-3 border-l-2 border-earth-600">
                          <p className="font-serif italic text-dust-500 text-sm">
                            {stop.quote}
                          </p>
                          <cite className="font-mono text-[10px] text-earth-600 mt-1 block">
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
      <section className="py-20 bg-gradient-to-b from-stone-950/70 to-stone-900/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-mono text-xs text-earth-500 tracking-widest mb-4">CONTINUE</p>
          <h2 className="font-cinematic text-4xl md:text-5xl text-dust-100 tracking-wider mb-6">
            GATHER AROUND THE FIRE
          </h2>
          <p className="text-dust-400 font-serif text-lg mb-8 max-w-xl mx-auto">
            Every stop had a story. Some were told at roadhouses. 
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
