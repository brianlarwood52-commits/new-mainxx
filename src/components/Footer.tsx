'use client'

import React from 'react'
import Link from 'next/link'
import { Flame, Heart, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative bg-gray-900/90 dark:bg-black/90 backdrop-blur-md text-white border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Flame className="h-8 w-8 text-flame-400" />
              <span className="font-serif font-semibold text-xl">Shame to Flame</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              A safe place for healing and hope. We believe that no matter how deep your pain,
              God's love can transform your shame into flame - turning your story into a testimony
              of His grace and restoration.
            </p>
            <div className="flex items-center space-x-2 text-flame-300">
              <Heart className="h-4 w-4" />
              <span className="text-sm italic">"He heals the brokenhearted and binds up their wounds." - Psalm 147:3</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-flame-300">About</h3>
            <ul className="space-y-2">
              <li><Link href="/my-story" className="text-gray-300 hover:text-flame-300 transition-colors duration-200">My Story</Link></li>
              <li><Link href="/why-this-ministry" className="text-gray-300 hover:text-flame-300 transition-colors duration-200">Why This Ministry</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-flame-300 transition-colors duration-200">About Us</Link></li>
            </ul>
            <h3 className="font-semibold text-lg mb-4 mt-6 text-flame-300">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/crisis-help" className="text-gray-300 hover:text-flame-300 transition-colors duration-200">Crisis Help</Link></li>
              <li><Link href="/healing-pathways" className="text-gray-300 hover:text-flame-300 transition-colors duration-200">Healing Pathways</Link></li>
              <li><Link href="/daily-fire" className="text-gray-300 hover:text-flame-300 transition-colors duration-200">Daily Fire</Link></li>
              <li><Link href="/ministry-hub" className="text-gray-300 hover:text-flame-300 transition-colors duration-200">Ministry Hub</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-flame-300">Study Library</h3>
            <ul className="space-y-2">
              <li><Link href="/mary-magdalene-apologetic" className="text-gray-300 hover:text-flame-300 transition-colors duration-200">Mary Magdalene</Link></li>
              <li><Link href="/bible-study" className="text-gray-300 hover:text-flame-300 transition-colors duration-200">Bible Study Hub</Link></li>
              <li><Link href="/sda-commentary-search" className="text-gray-300 hover:text-flame-300 transition-colors duration-200">SDA Commentary</Link></li>
            </ul>
            <h3 className="font-semibold text-lg mb-4 mt-6 text-flame-300">Prayer Rock</h3>
            <ul className="space-y-2">
              <li><Link href="/prayer-rock-story" className="text-gray-300 hover:text-flame-300 transition-colors duration-200">The Story</Link></li>
              <li><Link href="/prayer-rock" className="text-gray-300 hover:text-flame-300 transition-colors duration-200">The Archive</Link></li>
              <li><Link href="/submit-prayer" className="text-gray-300 hover:text-flame-300 transition-colors duration-200">Submit Prayer</Link></li>
            </ul>
            <h3 className="font-semibold text-lg mb-4 mt-6 text-flame-300">Connect</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-gray-300 hover:text-flame-300 transition-colors duration-200">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <p className="text-gray-400 text-sm">
              © 2024 Shame to Flame Ministry. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Walking together toward healing and hope.
            </p>
          </div>
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-flame-300 text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link
                href="/sitemap"
                className="text-gray-400 hover:text-flame-300 text-sm transition-colors duration-200"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
