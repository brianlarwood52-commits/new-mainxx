'use client'

import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { Heart, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-stone-950/95 border-t border-stone-800 relative z-20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <Logo size="md" />
              <div>
                <p className="font-cinematic text-xl text-dust-100 tracking-widest">
                  RUNNING TO GOD
                </p>
                <p className="font-mono text-[10px] text-dust-600 tracking-widest">
                  6,859.5 KM ROUND TRIP
                </p>
              </div>
            </div>
            <p className="text-dust-500 text-sm leading-relaxed font-serif mb-4">
              A documentary journey across the Australian outback—discovering Jesus Christ 
              on the dusty roads of the Nullarbor.
            </p>
            <div className="flex items-center gap-2 text-dust-600">
              <MapPin className="h-4 w-4" />
              <span className="font-mono text-xs">Swan View, Western Australia</span>
            </div>
          </div>

          {/* Explore */}
          <div>
            <p className="font-mono text-xs text-cyan-500 tracking-widest mb-6">EXPLORE</p>
            <div className="space-y-3">
              <Link href="/" className="block font-mono text-xs text-dust-500 hover:text-dust-200 tracking-wider transition-colors">
                HOME
              </Link>
              <Link href="/journey" className="block font-mono text-xs text-dust-500 hover:text-dust-200 tracking-wider transition-colors">
                THE ROAD
              </Link>
              <Link href="/campfire" className="block font-mono text-xs text-dust-500 hover:text-dust-200 tracking-wider transition-colors">
                CAMPFIRE STORIES
              </Link>
              <Link href="/devotions" className="block font-mono text-xs text-dust-500 hover:text-dust-200 tracking-wider transition-colors">
                JOURNAL / DEVOTIONS
              </Link>
              <Link href="/about" className="block font-mono text-xs text-dust-500 hover:text-dust-200 tracking-wider transition-colors">
                ABOUT / MY STORY
              </Link>
            </div>
          </div>

          {/* Connect & Legal */}
          <div>
            <p className="font-mono text-xs text-cyan-500 tracking-widest mb-6">CONNECT</p>
            <div className="space-y-3">
              <Link href="/contact" className="block font-mono text-xs text-dust-500 hover:text-dust-200 tracking-wider transition-colors">
                CONTACT US
              </Link>
              <Link href="/privacy-policy" className="block font-mono text-xs text-dust-500 hover:text-dust-200 tracking-wider transition-colors">
                PRIVACY POLICY
              </Link>
              <Link href="/terms" className="block font-mono text-xs text-dust-500 hover:text-dust-200 tracking-wider transition-colors">
                TERMS OF USE
              </Link>
              <Link href="/sitemap" className="block font-mono text-xs text-dust-500 hover:text-dust-200 tracking-wider transition-colors">
                SITEMAP
              </Link>
            </div>
          </div>

          {/* Scripture - Jesus focused */}
          <div>
            <p className="font-mono text-xs text-cyan-500 tracking-widest mb-6">THE WAY</p>
            <blockquote className="text-dust-400 text-sm italic font-serif border-l-2 border-cyan-700 pl-4">
              &ldquo;I am the way, the truth, and the life. No one comes to the Father except through me.&rdquo;
              <footer className="mt-3 not-italic font-mono text-xs text-dust-600 tracking-wider">
                — JESUS CHRIST, JOHN 14:6
              </footer>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col gap-4">
            {/* Main copyright & links */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="font-mono text-xs text-dust-700 tracking-wider">
                © {currentYear} RUNNING TO GOD MINISTRY. ALL RIGHTS RESERVED.
              </p>
              
              {/* Quick legal links */}
              <div className="flex items-center gap-4 font-mono text-[10px] text-dust-700 tracking-wider">
                <Link href="/privacy-policy" className="hover:text-dust-400 transition-colors">
                  PRIVACY
                </Link>
                <span className="text-dust-800">|</span>
                <Link href="/terms" className="hover:text-dust-400 transition-colors">
                  TERMS
                </Link>
                <span className="text-dust-800">|</span>
                <Link href="/contact" className="hover:text-dust-400 transition-colors">
                  CONTACT
                </Link>
              </div>
              
              <div className="flex items-center gap-1 font-mono text-xs text-dust-700 tracking-wider">
                MADE WITH <Heart className="h-3 w-3 text-cyan-500 mx-1 fill-current" /> 
                ON THE ROAD
              </div>
            </div>
            
            {/* Media copyright */}
            <div className="text-center border-t border-stone-900 pt-4">
              <p className="font-mono text-[10px] text-dust-700 tracking-wider">
                ALL PHOTOGRAPHS AND VIDEOS © BRIAN LARWOOD. ALL RIGHTS RESERVED.
              </p>
              <p className="font-mono text-[10px] text-dust-800 tracking-wider mt-1">
                NO REPRODUCTION OR USE WITHOUT WRITTEN PERMISSION
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
