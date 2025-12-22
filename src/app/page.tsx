'use client'

import React from 'react'
import Link from 'next/link'
import Logo from '@/components/Logo'
import { Play, ChevronDown, MapPin, BookOpen, Flame, ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="text-stone-200 overflow-hidden">
      
      {/* ===== OPENING SHOT - Full Screen Hero ===== */}
      <section className="relative h-screen flex items-center justify-center cinematic-bars vignette film-grain">
        {/* Background - simulated outback sunset */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-700 via-earth-700 to-stone-950" />
        
        {/* Horizon line */}
        <div className="absolute top-[35%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-earth-500/50 to-transparent" />
        
        {/* Sun */}
        <div className="absolute top-[25%] left-1/2 -translate-x-1/2">
          <div className="w-32 h-32 rounded-full bg-gradient-to-b from-yellow-200 to-orange-500 blur-md opacity-70" />
        </div>

        {/* Dust particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="dust-particle"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 50}%`,
              animationDelay: `${Math.random() * 15}s`,
            }}
          />
        ))}

        {/* Road vanishing to horizon */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md">
          <svg viewBox="0 0 400 500" className="w-full opacity-80">
            {/* Road surface */}
            <path d="M120,500 L190,150 L210,150 L280,500 Z" fill="#3d3d3d" />
            {/* Road edges - worn */}
            <path d="M120,500 L190,150" stroke="#D4A574" strokeWidth="2" fill="none" opacity="0.4" />
            <path d="M280,500 L210,150" stroke="#D4A574" strokeWidth="2" fill="none" opacity="0.4" />
            {/* Center dashes */}
            <g className="road-dash" stroke="#f5f0e6" strokeWidth="4" fill="none">
              <line x1="200" y1="500" x2="200" y2="150" />
            </g>
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-20 text-center px-4 max-w-5xl">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <Logo size="hero" />
          </div>

          {/* Location tag */}
          <p className="location-tag mb-4 animate-fade-in">
            Swan View → Nullarbor → Port Lincoln → Esperance → Home
          </p>
          
          {/* Main Title */}
          <h1 className="font-cinematic text-5xl sm:text-7xl md:text-8xl text-dust-100 title-card mb-6 tracking-wider leading-none">
            RUNNING TO GOD
          </h1>
          
          {/* Subtitle - journal style */}
          <p className="font-journal text-3xl sm:text-4xl md:text-5xl text-dust-300 mb-8">
            6,859 kilometres of dust, stars, and finding my way back
          </p>

          {/* Play button style CTA */}
          <Link 
            href="/journey" 
            className="inline-flex items-center gap-4 group"
          >
            <div className="w-20 h-20 rounded-full border-2 border-dust-300 flex items-center justify-center group-hover:bg-dust-300/20 transition-all">
              <Play className="h-8 w-8 text-dust-300 ml-1" fill="currentColor" />
            </div>
            <span className="font-mono text-sm tracking-widest text-dust-400 group-hover:text-dust-200 transition-colors">
              BEGIN THE JOURNEY
            </span>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20">
          <ChevronDown className="h-8 w-8 text-dust-500 animate-bounce" />
        </div>

        {/* Credits-style location */}
        <div className="absolute bottom-8 left-8 z-20 font-mono text-xs text-dust-600">
          <p>33.9°S 121.9°E</p>
          <p>ISRAELITE BAY</p>
        </div>

        {/* Credits-style info */}
        <div className="absolute bottom-8 right-8 z-20 font-mono text-xs text-dust-600 text-right">
          <p>OUT VIA NULLARBOR • BACK VIA ESPERANCE</p>
          <p>6,859.5 KM ROUND TRIP</p>
        </div>
      </section>

      {/* ===== THE PREMISE - Documentary intro ===== */}
      <section className="relative py-32 bg-stone-950/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <blockquote className="quote-overlay text-dust-200 mb-8">
            &ldquo;Sometimes you have to drive 2,500 kilometres through nothing to find everything.&rdquo;
          </blockquote>
          <p className="font-mono text-sm text-earth-500 tracking-widest mb-12">
            — A JOURNEY ACROSS THE AUSTRALIAN OUTBACK —
          </p>
          
          {/* Jesus focus statement */}
          <div className="border-t border-stone-800 pt-12 mt-12">
            <p className="font-mono text-xs text-cyan-500 tracking-widest mb-6">THE HEART OF THIS JOURNEY</p>
            <p className="text-2xl md:text-3xl text-dust-300 font-serif italic max-w-2xl mx-auto">
              At the centre of every road, every story, every star-filled night—
              there is <span className="text-cyan-400 not-italic font-cinematic tracking-wider">Jesus Christ</span>, 
              the Son of God.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CHAPTER CARDS - Like documentary sections ===== */}
      <section className="relative py-20 bg-gradient-to-b from-stone-950/70 via-stone-900/60 to-stone-950/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          
          {/* Section title */}
          <div className="text-center mb-16">
            <p className="font-mono text-xs text-earth-500 tracking-widest mb-4">CHAPTERS</p>
            <h2 className="font-cinematic text-5xl md:text-6xl text-dust-100 tracking-wider">
              THE EXPEDITION
            </h2>
          </div>

          {/* Chapter cards */}
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Chapter 1: The Journey */}
            <Link href="/journey" className="group relative">
              <div className="aspect-photo bg-gradient-to-br from-earth-700 to-earth-900 rounded overflow-hidden worn-photo">
                {/* Image placeholder - road vanishing point */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 200 150" className="w-full h-full opacity-30">
                    <path d="M60,150 L95,30 L105,30 L140,150 Z" fill="#4a4a4a" />
                    <line x1="100" y1="150" x2="100" y2="30" stroke="#fff" strokeWidth="2" strokeDasharray="8 6" />
                  </svg>
                </div>
                
                {/* Overlay content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
                  <p className="font-mono text-xs text-earth-400 tracking-widest mb-2">CHAPTER 01</p>
                  <h3 className="font-cinematic text-3xl text-dust-100 tracking-wider group-hover:text-earth-400 transition-colors">
                    THE ROAD
                  </h3>
                  <p className="text-sm text-dust-400 mt-2">
                    6,859 km round trip across the outback
                  </p>
                </div>
              </div>
              
              {/* Hover arrow */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="h-6 w-6 text-earth-400" />
              </div>
            </Link>

            {/* Chapter 2: Campfire Tales */}
            <Link href="/campfire" className="group relative">
              <div className="aspect-photo bg-gradient-to-br from-campfire-600/40 to-stone-900 rounded overflow-hidden worn-photo">
                {/* Campfire glow effect */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                  <div className="w-16 h-16 bg-campfire-500 rounded-full blur-2xl fire-glow opacity-60" />
                </div>
                
                {/* Stars */}
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full star"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 50}%`,
                      animationDelay: `${Math.random() * 3}s`,
                    }}
                  />
                ))}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
                  <p className="font-mono text-xs text-campfire-400 tracking-widest mb-2">CHAPTER 02</p>
                  <h3 className="font-cinematic text-3xl text-dust-100 tracking-wider group-hover:text-campfire-400 transition-colors">
                    THE CAMPFIRE
                  </h3>
                  <p className="text-sm text-dust-400 mt-2">
                    Stories from the roadside
                  </p>
                </div>
              </div>
              
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="h-6 w-6 text-campfire-400" />
              </div>
            </Link>

            {/* Chapter 3: Reflections */}
            <Link href="/devotions" className="group relative">
              <div className="aspect-photo bg-gradient-to-br from-bight-600/30 to-stone-900 rounded overflow-hidden worn-photo">
                {/* Journal lines */}
                <div className="absolute inset-4 border border-dust-600/20 rounded">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute left-4 right-4 h-px bg-dust-600/10"
                      style={{ top: `${20 + i * 10}%` }}
                    />
                  ))}
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
                  <p className="font-mono text-xs text-bight-400 tracking-widest mb-2">CHAPTER 03</p>
                  <h3 className="font-cinematic text-3xl text-dust-100 tracking-wider group-hover:text-bight-400 transition-colors">
                    THE JOURNAL
                  </h3>
                  <p className="text-sm text-dust-400 mt-2">
                    Reflections and devotions
                  </p>
                </div>
              </div>
              
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="h-6 w-6 text-bight-400" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FEATURED SCENE - The Nullarbor ===== */}
      <section className="relative h-screen flex items-center vignette film-grain">
        {/* Background - semi-transparent to show stars */}
        <div className="absolute inset-0 bg-gradient-to-b from-dust-400/90 via-earth-600/85 to-stone-900/80" />
        
        {/* Flat horizon */}
        <div className="absolute top-[40%] left-0 right-0 h-px bg-earth-800" />
        
        {/* Endless flat ground */}
        <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-earth-800 to-earth-600" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="location-tag mb-4">THE NULLARBOR PLAIN</p>
              <h2 className="font-cinematic text-5xl md:text-7xl text-dust-100 tracking-wider mb-6 title-card">
                1,200 KM OF<br />NOTHING
              </h2>
              <p className="text-xl text-dust-300 leading-relaxed mb-6 font-serif">
                No trees. No towns. No distractions. Just the road, the horizon, 
                and a silence so profound it becomes sacred.
              </p>
              <p className="font-journal text-2xl text-dust-400">
                &ldquo;In the emptiness, I finally heard His voice.&rdquo;
              </p>
            </div>
            
            {/* Stats */}
            <div className="space-y-6">
              <div className="border-l-2 border-earth-500 pl-6">
                <p className="font-cinematic text-6xl text-earth-400">146.6</p>
                <p className="font-mono text-xs text-dust-500 tracking-widest">KILOMETRES WITHOUT A TURN</p>
                <p className="text-sm text-dust-400 mt-1">The 90 Mile Straight</p>
              </div>
              <div className="border-l-2 border-earth-500 pl-6">
                <p className="font-cinematic text-6xl text-earth-400">0</p>
                <p className="font-mono text-xs text-dust-500 tracking-widest">PHONE SIGNAL FOR DAYS</p>
              </div>
              <div className="border-l-2 border-earth-500 pl-6">
                <p className="font-cinematic text-6xl text-earth-400">∞</p>
                <p className="font-mono text-xs text-dust-500 tracking-widest">STARS OVERHEAD</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dust particles */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="dust-particle"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 40}%`,
              animationDelay: `${Math.random() * 15}s`,
            }}
          />
        ))}
      </section>

      {/* ===== SCRIPTURE SCENE ===== */}
      <section className="relative py-32 bg-night-950/60 overflow-hidden backdrop-blur-sm">
        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full star"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Milky way band */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rotate-12 opacity-30" />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="location-tag mb-8">CAMPSITE • 2:47 AM</p>
          
          <blockquote className="text-3xl md:text-5xl font-serif italic text-dust-200 leading-relaxed mb-8">
            &ldquo;The heavens declare the glory of God; the skies proclaim the work of his hands.&rdquo;
          </blockquote>
          
          <cite className="font-mono text-sm text-dust-500 tracking-widest">
            — PSALM 19:1
          </cite>

          {/* Campfire glow at bottom */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-16 bg-campfire-500/30 blur-3xl" />
        </div>
      </section>

      {/* ===== JESUS CHARACTER SECTION ===== */}
      <section className="relative py-32 bg-gradient-to-b from-night-950/50 via-stone-950/60 to-stone-900/70 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="font-mono text-xs text-cyan-500 tracking-widest mb-4">THE SON OF GOD</p>
            <h2 className="font-cinematic text-5xl md:text-7xl text-dust-100 tracking-wider title-card">
              KNOWING JESUS
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Compassion */}
            <div className="text-center p-8 border border-stone-800 rounded-lg bg-stone-950/50">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-cyan-500/10 flex items-center justify-center">
                <span className="font-cinematic text-3xl text-cyan-400">♥</span>
              </div>
              <h3 className="font-cinematic text-2xl text-dust-100 tracking-wider mb-4">COMPASSION</h3>
              <p className="text-dust-400 font-serif text-sm leading-relaxed">
                &ldquo;When he saw the crowds, he had compassion on them, because they were harassed and helpless.&rdquo;
              </p>
              <p className="font-mono text-xs text-dust-600 mt-4">MATTHEW 9:36</p>
            </div>

            {/* Grace */}
            <div className="text-center p-8 border border-stone-800 rounded-lg bg-stone-950/50">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-cyan-500/10 flex items-center justify-center">
                <span className="font-cinematic text-3xl text-cyan-400">✝</span>
              </div>
              <h3 className="font-cinematic text-2xl text-dust-100 tracking-wider mb-4">GRACE</h3>
              <p className="text-dust-400 font-serif text-sm leading-relaxed">
                &ldquo;For by grace you have been saved through faith. And this is not your own doing; it is the gift of God.&rdquo;
              </p>
              <p className="font-mono text-xs text-dust-600 mt-4">EPHESIANS 2:8</p>
            </div>

            {/* Truth */}
            <div className="text-center p-8 border border-stone-800 rounded-lg bg-stone-950/50">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-cyan-500/10 flex items-center justify-center">
                <span className="font-cinematic text-3xl text-cyan-400">☀</span>
              </div>
              <h3 className="font-cinematic text-2xl text-dust-100 tracking-wider mb-4">TRUTH</h3>
              <p className="text-dust-400 font-serif text-sm leading-relaxed">
                &ldquo;Then you will know the truth, and the truth will set you free.&rdquo;
              </p>
              <p className="font-mono text-xs text-dust-600 mt-4">JOHN 8:32</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl md:text-2xl text-dust-300 font-serif italic max-w-3xl mx-auto">
              This journey is about discovering who Jesus really is—not religion, not rules, 
              but a relationship with the One who walked dusty roads Himself.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA - Documentary end card ===== */}
      <section className="relative py-32 bg-stone-950/80 backdrop-blur-sm text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="font-mono text-xs text-earth-500 tracking-widest mb-6">
            YOUR JOURNEY AWAITS
          </p>
          
          <h2 className="font-cinematic text-5xl md:text-7xl text-dust-100 tracking-wider mb-8">
            READY TO HIT<br />THE ROAD?
          </h2>
          
          <p className="text-xl text-dust-400 mb-12 font-serif">
            Whether you&apos;re at a crossroads or just need to escape the noise, 
            the road has something to teach you.
          </p>

          <Link href="/journey" className="btn-expedition inline-flex items-center gap-3">
            <MapPin className="h-5 w-5" />
            START THE JOURNEY
          </Link>
        </div>

        {/* Road vanishing at bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-t from-dust-600/50 to-transparent" />
      </section>
    </div>
  )
}
