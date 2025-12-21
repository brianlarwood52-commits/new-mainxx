'use client'

import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { Heart, Compass, BookOpen, Mail, Tent } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-sky-100 dark:bg-abyss-900 border-t border-sky-200 dark:border-abyss-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Logo size="md" />
              <span className="font-display text-xl font-bold text-abyss-900 dark:text-white">
                Running to God
              </span>
            </div>
            <p className="text-abyss-600 dark:text-abyss-400 text-sm max-w-xs">
              A journey of faith from Perth to Port Lincoln. Finding God on the open road, 
              under starlit skies, and around the campfire.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-abyss-900 dark:text-white">
              Explore the Journey
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/journey" 
                  className="text-abyss-600 dark:text-abyss-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors text-sm flex items-center gap-2"
                >
                  <Compass className="h-4 w-4" />
                  The Road Ahead
                </Link>
              </li>
              <li>
                <Link 
                  href="/devotions" 
                  className="text-abyss-600 dark:text-abyss-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors text-sm flex items-center gap-2"
                >
                  <BookOpen className="h-4 w-4" />
                  Daily Devotions
                </Link>
              </li>
              <li>
                <Link 
                  href="/campfire" 
                  className="text-abyss-600 dark:text-abyss-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors text-sm flex items-center gap-2"
                >
                  <Tent className="h-4 w-4" />
                  Campfire Stories
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-abyss-600 dark:text-abyss-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors text-sm flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Scripture */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-abyss-900 dark:text-white">
              Journey Verse
            </h3>
            <blockquote className="scripture text-sm border-l-2 border-sky-500 dark:border-sky-400 pl-4">
              &ldquo;Your word is a lamp for my feet, a light on my path.&rdquo;
              <footer className="text-abyss-500 dark:text-abyss-500 mt-1 not-italic">
                — Psalm 119:105
              </footer>
            </blockquote>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-sky-200 dark:border-abyss-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-abyss-500 dark:text-abyss-500 text-sm">
              © {currentYear} Running to God Ministry. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-abyss-500 dark:text-abyss-500 text-sm">
              Made with <Heart className="h-4 w-4 text-sky-500 dark:text-sky-400 mx-1 fill-current" /> 
              from Perth to Port Lincoln
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
