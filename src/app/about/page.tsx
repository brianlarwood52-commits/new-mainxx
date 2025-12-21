'use client'

import React from 'react'
import Link from 'next/link'
import { Quote, MapPin, ArrowRight } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-950">
      
      {/* ===== HERO ===== */}
      <section className="relative h-[60vh] flex items-end vignette film-grain">
        <div className="absolute inset-0 bg-gradient-to-b from-earth-700 via-earth-800 to-stone-950" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20 w-full">
          <p className="location-tag mb-4">A JOURNEY TO JESUS</p>
          <h1 className="font-cinematic text-6xl md:text-8xl text-dust-100 tracking-wider title-card mb-4">
            WHY THE ROAD
          </h1>
          <p className="text-xl text-dust-300 font-serif max-w-2xl">
            Before there was a journey, there was a question. 
            Before there was a destination, there was a Saviour waiting to be found.
          </p>
        </div>
      </section>

      {/* ===== THE STORY ===== */}
      <section className="py-20 bg-stone-950">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Opening quote */}
          <div className="mb-16 text-center">
            <Quote className="h-12 w-12 text-earth-600/50 mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-serif italic text-dust-300 leading-relaxed">
              &ldquo;I didn&apos;t know what I was looking for. I just knew I wouldn&apos;t find it where I was.&rdquo;
            </blockquote>
          </div>
          
          {/* Story content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="space-y-8 text-dust-300 font-serif text-lg leading-relaxed">
              
              <p className="first-letter:text-6xl first-letter:font-cinematic first-letter:text-earth-500 first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                There comes a moment when the walls of your life start closing in. 
                When the routine that once felt like stability begins to feel like a prison. 
                When you wake up one morning and realise you don&apos;t recognise the person in the mirror anymore.
              </p>

              <p>
                For me, that moment came in Perth. Good job. Nice apartment. 
                Everything I was supposed to want. And a growing emptiness that no amount of 
                success or distraction could fill.
              </p>

              <p>
                So I did what any sensible person would do: I bought a map, packed my car, 
                and pointed it east towards the Nullarbor. 2,500 kilometres of nothing 
                seemed like exactly what I needed.
              </p>

              <div className="border-l-2 border-earth-600 pl-6 my-12 italic text-dust-400">
                <p>
                  I told people I was going on a road trip. What I didn&apos;t tell them 
                  was that I was running. Running from questions I didn&apos;t want to answer. 
                  Running from a faith I&apos;d let grow cold. Running from myself.
                </p>
              </div>

              <p>
                What I found on that road—in the endless horizons, the roadhouse conversations, 
                the nights under more stars than I knew existed—was exactly what I&apos;d been 
                running from. And it was exactly what I needed.
              </p>

              <p>
                God doesn&apos;t always speak in churches. Sometimes He speaks in the silence 
                of the Nullarbor. Sometimes He speaks through a stranger at a roadhouse. 
                Sometimes He speaks in the beauty of cliffs dropping into an endless ocean.
              </p>

              <p>
                And at the centre of it all—I found <strong className="text-cyan-400">Jesus</strong>. 
                Not the Jesus I thought I knew. Not rules and religion. But the real Jesus—
                the One who walked dusty roads just like this one, who sat with broken people, 
                who offers grace when we least deserve it.
              </p>

              <p>
                This ministry exists because of that road and that encounter. Every kilometre 
                taught me something about His character—His compassion, His patience, His 
                relentless love. Every story points back to Him.
              </p>

              <p>
                And maybe—just maybe—you&apos;re on your own road right now, 
                looking for the same thing I was. Looking for Jesus.
              </p>

              <p className="font-journal text-3xl text-cyan-400 text-center my-12">
                He&apos;s already walking beside you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-gradient-to-b from-stone-950 to-stone-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cinematic text-4xl md:text-5xl text-dust-100 tracking-wider mb-6">
            YOUR ROAD AWAITS
          </h2>
          <p className="text-dust-400 font-serif text-lg mb-8 max-w-xl mx-auto">
            Whatever crossroads you&apos;re standing at, whatever questions you&apos;re asking—
            the journey starts with a single step.
          </p>
          <Link href="/journey" className="btn-expedition inline-flex items-center gap-3">
            <MapPin className="h-5 w-5" />
            BEGIN THE JOURNEY
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
