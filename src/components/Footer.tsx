'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, Mail, Map, BookOpen, Flame, MessageCircle } from 'lucide-react'
import { usePWAInstall } from '@/hooks/usePWAInstall'

const Footer = () => {
  const { isInstalled, isInstallable, installApp } = usePWAInstall();

  const handleInstall = async () => {
    const accepted = await installApp();
    if (accepted) {
      localStorage.removeItem('pwa-install-dismissed');
    }
  };

  return (
    <footer className="relative bg-sky-900/95 dark:bg-night-950/95 backdrop-blur-md text-white border-t border-sky-700/30">
      {/* Road pattern at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/running-to-god-logo.jpg"
                  alt="Running to God"
                  fill
                  className="object-contain rounded"
                />
              </div>
              <span className="font-serif font-bold text-2xl">Running to God</span>
            </div>
            <p className="text-sky-100 text-base leading-relaxed mb-6 max-w-md">
              A journey of faith through the Australian outback. From Perth to Port Lincoln, 
              discovering how to run from ourselves and into the loving arms of God.
            </p>
            <div className="flex items-start space-x-3 text-sky-200 bg-sky-800/40 p-4 rounded-lg border border-sky-700/30">
              <Heart className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <span className="text-sm italic leading-relaxed">
                "Draw near to God, and he will draw near to you." - James 4:8
              </span>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {/* The Journey */}
              <div>
                <h3 className="font-semibold text-base uppercase tracking-wider mb-4 text-sky-300 flex items-center gap-2">
                  <Map className="h-4 w-4" />
                  The Journey
                </h3>
                <ul className="space-y-3">
                  <li><Link href="/journey" className="text-sky-200 hover:text-white transition-colors duration-200 text-sm">The Full Journey</Link></li>
                  <li><Link href="/my-story" className="text-sky-200 hover:text-white transition-colors duration-200 text-sm">My Story</Link></li>
                  <li><Link href="/why-this-ministry" className="text-sky-200 hover:text-white transition-colors duration-200 text-sm">Why This Ministry</Link></li>
                  <li><Link href="/about" className="text-sky-200 hover:text-white transition-colors duration-200 text-sm">About Us</Link></li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="font-semibold text-base uppercase tracking-wider mb-4 text-sky-300 flex items-center gap-2">
                  <Flame className="h-4 w-4" />
                  Resources
                </h3>
                <ul className="space-y-3">
                  <li><Link href="/campfire-devotions" className="text-sky-200 hover:text-white transition-colors duration-200 text-sm">Campfire Devotions</Link></li>
                  <li><Link href="/daily-fire" className="text-sky-200 hover:text-white transition-colors duration-200 text-sm">Daily Encouragement</Link></li>
                  <li><Link href="/healing-pathways" className="text-sky-200 hover:text-white transition-colors duration-200 text-sm">Healing Pathways</Link></li>
                  <li><Link href="/crisis-help" className="text-sky-200 hover:text-white transition-colors duration-200 text-sm">Crisis Help</Link></li>
                </ul>
              </div>

              {/* Bible Study */}
              <div>
                <h3 className="font-semibold text-base uppercase tracking-wider mb-4 text-sky-300 flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Bible Study
                </h3>
                <ul className="space-y-3">
                  <li><Link href="/bible-study" className="text-sky-200 hover:text-white transition-colors duration-200 text-sm">Bible Study Hub</Link></li>
                  <li><Link href="/sda-commentary-search" className="text-sky-200 hover:text-white transition-colors duration-200 text-sm">Commentary Search</Link></li>
                  <li><Link href="/mary-magdalene-apologetic" className="text-sky-200 hover:text-white transition-colors duration-200 text-sm">Mary Magdalene</Link></li>
                </ul>
              </div>

              {/* Prayer */}
              <div>
                <h3 className="font-semibold text-base uppercase tracking-wider mb-4 text-sky-300 flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  Prayer
                </h3>
                <ul className="space-y-3">
                  <li><Link href="/prayer-rock-story" className="text-sky-200 hover:text-white transition-colors duration-200 text-sm">What is Prayer Rock?</Link></li>
                  <li><Link href="/prayer-rock" className="text-sky-200 hover:text-white transition-colors duration-200 text-sm">Prayer Archive</Link></li>
                  <li><Link href="/submit-prayer" className="text-sky-200 hover:text-white transition-colors duration-200 text-sm">Submit a Prayer</Link></li>
                </ul>
              </div>

              {/* Connect */}
              <div>
                <h3 className="font-semibold text-base uppercase tracking-wider mb-4 text-sky-300">Connect</h3>
                <ul className="space-y-3">
                  <li><Link href="/contact" className="text-sky-200 hover:text-white transition-colors duration-200 text-sm">Contact Us</Link></li>
                  <li>
                    <div className="flex items-center space-x-2 text-sky-200 text-sm mt-4">
                      <Mail className="h-4 w-4 flex-shrink-0" />
                      <span className="text-xs">contact@runningtogod.faith</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Install App */}
              {!isInstalled && isInstallable && (
                <div>
                  <h3 className="font-semibold text-base uppercase tracking-wider mb-4 text-sky-300">Install App</h3>
                  <ul className="space-y-3">
                    <li>
                      <button
                        onClick={handleInstall}
                        className="text-sky-200 hover:text-white transition-colors duration-200 text-sm text-left"
                      >
                        Take the journey offline - install our app
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-sky-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 text-sm text-sky-300">
              <Link href="/privacy-policy" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/sitemap" className="hover:text-white transition-colors duration-200">
                Sitemap
              </Link>
              <Link href="/settings" className="hover:text-white transition-colors duration-200">
                Settings
              </Link>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sky-300 text-sm">
                © 2024 Running to God Ministry. All rights reserved.
              </p>
              <p className="text-sky-400 text-xs mt-1">
                Perth to Port Lincoln - A journey of faith through the Australian outback.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
