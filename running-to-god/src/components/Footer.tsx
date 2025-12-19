'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, Mail, Map, BookOpen, Flame, ExternalLink } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-sky-900 dark:bg-night-950 text-white">
      {/* Road line decoration */}
      <div className="h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Running to God"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-serif font-bold text-2xl">Running to God</span>
            </div>
            <p className="text-sky-100 leading-relaxed mb-6 max-w-md">
              A journey of faith through the Australian outback. Discover the road from 
              Perth to Port Lincoln, and learn what it means to run from ourselves 
              and into the loving arms of Jesus.
            </p>
            <div className="flex items-start space-x-3 bg-sky-800/50 p-4 rounded-lg border border-sky-700/50">
              <Heart className="h-5 w-5 mt-0.5 flex-shrink-0 text-sky-300" />
              <span className="text-sm italic text-sky-200">
                "Draw near to God, and he will draw near to you." — James 4:8
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {/* The Journey */}
              <div>
                <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-sky-300 flex items-center gap-2">
                  <Map className="h-4 w-4" />
                  The Journey
                </h3>
                <ul className="space-y-3">
                  <li><Link href="/journey" className="text-sky-200 hover:text-white transition-colors text-sm">The Full Journey</Link></li>
                  <li><Link href="/journey/perth" className="text-sky-200 hover:text-white transition-colors text-sm">Perth - The Start</Link></li>
                  <li><Link href="/journey/nullarbor" className="text-sky-200 hover:text-white transition-colors text-sm">The Nullarbor</Link></li>
                  <li><Link href="/journey/port-lincoln" className="text-sky-200 hover:text-white transition-colors text-sm">Port Lincoln</Link></li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-sky-300 flex items-center gap-2">
                  <Flame className="h-4 w-4" />
                  Resources
                </h3>
                <ul className="space-y-3">
                  <li><Link href="/campfire-devotions" className="text-sky-200 hover:text-white transition-colors text-sm">Campfire Devotions</Link></li>
                  <li><Link href="/bible-study" className="text-sky-200 hover:text-white transition-colors text-sm">Bible Studies</Link></li>
                  <li><Link href="/about" className="text-sky-200 hover:text-white transition-colors text-sm">About Us</Link></li>
                </ul>
              </div>

                          {/* Connect */}
                          <div>
                            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-sky-300">
                              Connect
                            </h3>
                            <ul className="space-y-3">
                              <li><Link href="/submit-prayer" className="text-sky-200 hover:text-white transition-colors text-sm">Submit Prayer</Link></li>
                              <li><Link href="/contact" className="text-sky-200 hover:text-white transition-colors text-sm">Contact Us</Link></li>
                              <li>
                                <div className="flex items-center space-x-2 text-sky-200 text-sm mt-4">
                                  <Mail className="h-4 w-4 flex-shrink-0" />
                                  <span className="text-xs">hello@runningtogod.faith</span>
                                </div>
                              </li>
                            </ul>
                          </div>
            </div>
          </div>
        </div>

        {/* Sister Sites */}
        <div className="border-t border-sky-800 pt-8 mb-8">
          <h4 className="text-sm font-medium text-sky-300 mb-4 text-center">Part of the Shame to Flame Ministry Family</h4>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="https://shametoflame.faith" target="_blank" rel="noopener noreferrer" className="text-sky-200 hover:text-white transition-colors flex items-center gap-1">
              Shame to Flame <ExternalLink className="h-3 w-3" />
            </a>
            <span className="text-sky-700">•</span>
            <a href="https://learnliveforgive.faith" target="_blank" rel="noopener noreferrer" className="text-sky-200 hover:text-white transition-colors flex items-center gap-1">
              Learn Live Forgive <ExternalLink className="h-3 w-3" />
            </a>
            <span className="text-sky-700">•</span>
            <a href="https://projectreconcile.faith" target="_blank" rel="noopener noreferrer" className="text-sky-200 hover:text-white transition-colors flex items-center gap-1">
              Project Reconcile <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-sky-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-sky-300">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sky-300 text-sm">
                © 2024 Running to God Ministry. All rights reserved.
              </p>
              <p className="text-sky-400 text-xs mt-1">
                Perth to Port Lincoln — A journey of faith through the Australian outback.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
