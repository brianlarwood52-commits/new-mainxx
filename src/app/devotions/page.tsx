'use client'

import React from 'react'
import Link from 'next/link'
import { BookOpen, ArrowRight, Feather } from 'lucide-react'

const journalEntries = [
  {
    title: 'The Silence That Speaks',
    location: 'Nullarbor Plain',
    km: 1100,
    excerpt: 'I turned off the radio somewhere past Balladonia. Not because I wanted silence—because I was afraid of it. But the silence came anyway. And in it, I heard something I\'d been drowning out for years.',
    verse: 'Be still and know that I am God.',
    verseRef: 'Psalm 46:10',
    date: 'Day 5',
  },
  {
    title: 'When the Road Runs Straight',
    location: '90 Mile Straight',
    km: 950,
    excerpt: '146 kilometres without a single turn. At first it\'s boring. Then it\'s meditative. Then it becomes something else entirely—a lesson in trust. You can\'t see what\'s at the end. You just keep driving.',
    verse: 'Trust in the Lord with all your heart and lean not on your own understanding.',
    verseRef: 'Proverbs 3:5',
    date: 'Day 4',
  },
  {
    title: 'The Weight of Stars',
    location: 'Bunda Cliffs Campsite',
    km: 1450,
    excerpt: 'Lying on my back at 2am, I tried to count them. Gave up after a thousand. How small I am. How vast He is. And somehow, He knows my name.',
    verse: 'He determines the number of the stars and calls them each by name.',
    verseRef: 'Psalm 147:4',
    date: 'Day 7',
  },
]

export default function DevotionsPage() {
  return (
    <div className="min-h-screen bg-stone-950">
      
      {/* ===== HERO ===== */}
      <section className="relative h-[60vh] flex items-end vignette film-grain">
        {/* Paper texture background */}
        <div className="absolute inset-0 bg-gradient-to-b from-dust-200 via-dust-100 to-stone-950" />
        
        {/* Journal lines */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute left-0 right-0 h-px bg-stone-600"
              style={{ top: `${5 + i * 5}%` }}
            />
          ))}
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20 w-full">
          <p className="font-mono text-xs text-earth-700 tracking-widest mb-4">REFLECTIONS FROM THE ROAD</p>
          <h1 className="font-cinematic text-6xl md:text-8xl text-stone-800 tracking-wider title-card mb-4">
            THE JOURNAL
          </h1>
          <p className="text-xl text-stone-600 font-serif max-w-2xl">
            Pages from a worn notebook. Thoughts scribbled by torchlight. 
            Prayers whispered under endless skies.
          </p>
        </div>
      </section>

      {/* ===== JOURNAL ENTRIES ===== */}
      <section className="py-20 bg-stone-950">
        <div className="max-w-3xl mx-auto px-6">
          
          <div className="space-y-16">
            {journalEntries.map((entry, index) => (
              <article key={index} className="group">
                {/* Journal paper styling */}
                <div className="relative bg-dust-100 rounded shadow-xl p-8 md:p-12 journal-paper transform hover:rotate-0 transition-transform"
                     style={{ transform: `rotate(${index % 2 === 0 ? -0.5 : 0.5}deg)` }}>
                  
                  {/* Date tab */}
                  <div className="absolute -top-3 right-8 bg-earth-600 text-dust-100 px-4 py-1 font-mono text-xs tracking-widest">
                    {entry.date}
                  </div>
                  
                  {/* Location */}
                  <p className="font-mono text-xs text-earth-600 tracking-widest mb-2">
                    {entry.location} • KM {entry.km.toLocaleString()}
                  </p>
                  
                  {/* Title */}
                  <h2 className="font-journal text-4xl md:text-5xl text-stone-800 mb-6">
                    {entry.title}
                  </h2>
                  
                  {/* Content */}
                  <p className="font-serif text-lg text-stone-700 leading-relaxed mb-8">
                    {entry.excerpt}
                  </p>
                  
                  {/* Scripture */}
                  <blockquote className="border-l-4 border-earth-400 pl-4">
                    <p className="font-serif italic text-stone-600">
                      &ldquo;{entry.verse}&rdquo;
                    </p>
                    <cite className="font-mono text-xs text-earth-600 mt-2 block not-italic">
                      — {entry.verseRef}
                    </cite>
                  </blockquote>
                  
                  {/* Read more */}
                  <div className="mt-8 flex justify-end">
                    <span className="font-mono text-xs text-earth-600 group-hover:text-earth-800 transition-colors flex items-center gap-2 cursor-pointer">
                      READ FULL ENTRY <ArrowRight className="h-4 w-4" />
                    </span>
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
          <Feather className="h-12 w-12 text-dust-600 mx-auto mb-6" />
          <h2 className="font-cinematic text-3xl md:text-4xl text-dust-200 tracking-wider mb-4">
            MORE PAGES TO COME
          </h2>
          <p className="text-dust-500 font-serif mb-8 max-w-xl mx-auto">
            The journal has many more entries. Stories of doubt, discovery, 
            and the slow work of faith being rebuilt.
          </p>
          <Link href="/about" className="btn-expedition inline-flex items-center gap-3">
            <BookOpen className="h-5 w-5" />
            THE FULL STORY
          </Link>
        </div>
      </section>
    </div>
  )
}
