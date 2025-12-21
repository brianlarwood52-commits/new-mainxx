'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Flame, Quote, Users, ArrowRight, ExternalLink } from 'lucide-react'

export default function CampfirePage() {
  return (
    <div className="min-h-screen">
      
      {/* ===== HERO ===== */}
      <section className="relative h-[60vh] flex items-end vignette film-grain">
        <div className="absolute inset-0 bg-gradient-to-b from-night-900 via-campfire-900/30 to-stone-950" />
        
        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full star"
              style={{
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 60}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Campfire glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <div className="w-64 h-32 bg-campfire-500/30 blur-3xl fire-glow" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20 w-full">
          <p className="location-tag mb-4">STORIES FROM THE ROADSIDE</p>
          <h1 className="font-cinematic text-6xl md:text-8xl text-dust-100 tracking-wider title-card mb-4">
            THE CAMPFIRE
          </h1>
          <p className="text-xl text-dust-300 font-serif max-w-2xl">
            Every journey has its characters. The people you meet on the road become part of your story forever.
          </p>
        </div>
      </section>

      {/* ===== FEATURED ENCOUNTER: CATMAN ===== */}
      <section className="py-20 bg-stone-950/70 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <Users className="h-6 w-6 text-campfire-500" />
            <p className="font-mono text-xs text-campfire-500 tracking-widest">PEOPLE OF THE ROAD</p>
          </div>
          
          {/* Catman Feature */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden worn-photo">
              <Image
                src="/images/catman.jpg"
                alt="Kentaro Jin - The Strange Catman - walking across Australia"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="font-mono text-xs text-dust-400">© Brian Larwood</p>
              </div>
            </div>
            
            {/* Story */}
            <div>
              <p className="font-mono text-xs text-earth-500 tracking-widest mb-2">ENCOUNTER</p>
              <h2 className="font-cinematic text-4xl md:text-5xl text-dust-100 tracking-wider mb-4">
                THE STRANGE CATMAN
              </h2>
              <p className="font-mono text-sm text-cyan-500 mb-6">KENTARO JIN • JAPAN 🇯🇵</p>
              
              <div className="space-y-4 text-dust-300 font-serif leading-relaxed">
                <p>
                  It was a <strong className="text-campfire-400">scorching hot day</strong>—the kind where 
                  the heat shimmers off the road and you question every life decision that led you here. 
                  I was about <strong className="text-dust-100">two hours out of Norseman</strong>, heading 
                  west, when I spotted something that made me pull over immediately.
                </p>
                <p>
                  A man. In a full leopard-print bodysuit. Pushing a wheelbarrow. Walking towards Sydney. 
                  In <em>this</em> heat.
                </p>
                <p>
                  Meet <strong className="text-dust-100">Kentaro Jin</strong>—a Japanese construction worker 
                  who decided to walk over <strong className="text-cyan-400">5,000 kilometres</strong> across 
                  Australia. Not for speed. Not for records. But to spread kindness, positivity, and joy 
                  to everyone he meets.
                </p>
                <p>
                  He sleeps in a tent by the roadside. Walks 10 hours a day. Visits schools to inspire 
                  kids to follow their dreams. Gives high-fives to passing cars. All while dressed as a leopard 
                  in 40-degree heat.
                </p>
              </div>

              <div className="bg-campfire-900/20 border border-campfire-800/30 rounded-lg p-4 my-6">
                <p className="font-mono text-xs text-campfire-400 tracking-widest mb-2">📍 THE ENCOUNTER</p>
                <p className="text-dust-300 font-serif text-sm">
                  <strong>Location:</strong> Approximately 2 hours east of Norseman, WA<br />
                  <strong>Conditions:</strong> Extreme heat<br />
                  <strong>Direction:</strong> He was heading east towards Esperance & Sydney
                </p>
              </div>

              <blockquote className="my-8 pl-4 border-l-2 border-campfire-500">
                <p className="font-serif italic text-dust-400 text-lg">
                  &ldquo;Australia is a very big country, and very nice people… I really like the journey. 
                  Every town, there are so many kinds of people, and they are kind to me. I love each town.&rdquo;
                </p>
                <cite className="font-mono text-xs text-campfire-500 mt-2 block">
                  — KENTARO JIN
                </cite>
              </blockquote>

              <div className="bg-stone-900/50 border border-stone-800 rounded-lg p-6 mb-6">
                <p className="font-mono text-xs text-earth-500 tracking-widest mb-3">THE JOURNEY</p>
                <ul className="space-y-2 text-dust-400 font-serif text-sm">
                  <li>🚶 <strong>Distance:</strong> 5,000+ kilometres</li>
                  <li>📍 <strong>Route:</strong> Carnarvon → Albany → Esperance → Sydney</li>
                  <li>🏕️ <strong>Method:</strong> Walking with a wheelbarrow, sleeping roadside</li>
                  <li>💪 <strong>Daily:</strong> 10 hours of walking</li>
                  <li>❤️ <strong>Mission:</strong> Spreading kindness and inspiring others</li>
                </ul>
              </div>

              <p className="text-dust-400 font-serif italic">
                Two journeys. Two strangers. One road. Sometimes the people you meet become 
                the most memorable part of the adventure.
              </p>

              <a 
                href="https://www.instagram.com/thestrangecatman/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-cyan-400 hover:text-cyan-300 font-mono text-sm transition-colors"
              >
                Follow Catman&apos;s journey on Instagram
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MORE STORIES COMING ===== */}
      <section className="py-20 bg-stone-950/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <Flame className="h-12 w-12 text-campfire-500 mx-auto mb-6" />
            <h2 className="font-cinematic text-4xl text-dust-100 tracking-wider mb-4">
              MORE STORIES TO COME
            </h2>
            <p className="text-dust-400 font-serif text-lg max-w-2xl mx-auto">
              6,859 kilometres of road means countless encounters—grey nomads at roadhouses, 
              locals with stories to tell, and characters you couldn&apos;t make up if you tried.
            </p>
          </div>

          {/* Placeholder story cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'The Grey Nomads', location: 'Nullarbor Roadhouse', desc: 'Three years on the road and counting...' },
              { title: 'The Roadhouse Owner', location: 'Norseman', desc: '"East," I said. He just nodded.' },
              { title: 'Solitude & Stars', location: 'Israelite Bay', desc: 'Sometimes the best conversations are with yourself.' },
            ].map((story, i) => (
              <div key={i} className="bg-stone-900/50 border border-stone-800 rounded-lg p-6">
                <p className="font-mono text-xs text-dust-600 tracking-widest mb-2">{story.location.toUpperCase()}</p>
                <h3 className="font-cinematic text-xl text-dust-200 tracking-wider mb-3">{story.title}</h3>
                <p className="text-dust-500 font-serif text-sm italic">{story.desc}</p>
                <p className="text-dust-700 font-mono text-xs mt-4">Coming soon...</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SCRIPTURE ===== */}
      <section className="py-20 bg-night-950/50 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Quote className="h-10 w-10 text-campfire-500/50 mx-auto mb-6" />
          <blockquote className="text-2xl md:text-3xl font-serif italic text-dust-300 leading-relaxed mb-6">
            &ldquo;Do not forget to show hospitality to strangers, for by so doing some people 
            have shown hospitality to angels without knowing it.&rdquo;
          </blockquote>
          <cite className="font-mono text-sm text-dust-600 tracking-widest">
            — HEBREWS 13:2
          </cite>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-stone-950/70 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-mono text-xs text-earth-500 tracking-widest mb-4">CONTINUE</p>
          <h2 className="font-cinematic text-4xl md:text-5xl text-dust-100 tracking-wider mb-6">
            EXPLORE THE JOURNEY
          </h2>
          <p className="text-dust-400 font-serif text-lg mb-8 max-w-xl mx-auto">
            Every stop along the way has its own story. Trace the route and discover what each place revealed.
          </p>
          <Link href="/journey" className="btn-expedition inline-flex items-center gap-3">
            THE ROAD
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
