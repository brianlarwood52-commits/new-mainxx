'use client'

import React, { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Settings, Map, BookOpen, Flame, Users, Heart, MessageCircle } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [journeyDropdownOpen, setJourneyDropdownOpen] = useState(false)
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false)
  const [studyDropdownOpen, setStudyDropdownOpen] = useState(false)
  const [prayerDropdownOpen, setPrayerDropdownOpen] = useState(false)
  const pathname = usePathname()
  const journeyTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const resourcesTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const studyTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const prayerTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleJourneyMouseEnter = () => {
    if (journeyTimeoutRef.current) clearTimeout(journeyTimeoutRef.current)
    setJourneyDropdownOpen(true)
  }
  const handleJourneyMouseLeave = () => {
    journeyTimeoutRef.current = setTimeout(() => setJourneyDropdownOpen(false), 150)
  }

  const handleResourcesMouseEnter = () => {
    if (resourcesTimeoutRef.current) clearTimeout(resourcesTimeoutRef.current)
    setResourcesDropdownOpen(true)
  }
  const handleResourcesMouseLeave = () => {
    resourcesTimeoutRef.current = setTimeout(() => setResourcesDropdownOpen(false), 150)
  }

  const handleStudyMouseEnter = () => {
    if (studyTimeoutRef.current) clearTimeout(studyTimeoutRef.current)
    setStudyDropdownOpen(true)
  }
  const handleStudyMouseLeave = () => {
    studyTimeoutRef.current = setTimeout(() => setStudyDropdownOpen(false), 150)
  }

  const handlePrayerMouseEnter = () => {
    if (prayerTimeoutRef.current) clearTimeout(prayerTimeoutRef.current)
    setPrayerDropdownOpen(true)
  }
  const handlePrayerMouseLeave = () => {
    prayerTimeoutRef.current = setTimeout(() => setPrayerDropdownOpen(false), 150)
  }

  const journeyItems = [
    { path: '/journey', label: 'The Full Journey', icon: Map },
    { path: '/my-story', label: 'My Story', icon: Heart },
    { path: '/why-this-ministry', label: 'Why This Ministry', icon: Users },
    { path: '/about', label: 'About Us', icon: Users },
  ]

  const resourceItems = [
    { path: '/campfire-devotions', label: 'Campfire Devotions', icon: Flame },
    { path: '/daily-fire', label: 'Daily Encouragement', icon: Flame },
    { path: '/healing-pathways', label: 'Healing Pathways', icon: Heart },
    { path: '/crisis-help', label: 'Crisis Help', icon: Heart },
  ]

  const studyItems = [
    { path: '/bible-study', label: 'Bible Study Hub', icon: BookOpen },
    { path: '/sda-commentary-search', label: 'Commentary Search', icon: BookOpen },
    { path: '/mary-magdalene-apologetic', label: 'Mary Magdalene Study', icon: BookOpen },
  ]

  const prayerItems = [
    { path: '/prayer-rock-story', label: 'What is Prayer Rock?', icon: MessageCircle },
    { path: '/prayer-rock', label: 'Prayer Archive', icon: MessageCircle },
    { path: '/submit-prayer', label: 'Submit a Prayer', icon: MessageCircle },
  ]

  const getLinkClass = (path: string) => `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
    pathname === path
      ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300'
      : 'text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900/30'
  }`

  const getDropdownButtonClass = (items: { path: string }[]) => `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-1 ${
    items.some(item => pathname === item.path)
      ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300'
      : 'text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900/30'
  }`

  const getDropdownLinkClass = (path: string) => `block px-4 py-2 text-sm transition-all duration-200 ${
    pathname === path
      ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300'
      : 'text-gray-600 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900/30'
  }`

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-night-900/90 backdrop-blur-md shadow-lg z-50 transition-all duration-300 border-b border-sky-200/30 dark:border-sky-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10">
              <Image
                src="/running-to-god-logo.jpg"
                alt="Running to God"
                fill
                className="object-contain rounded"
                priority
              />
            </div>
            <span className="font-serif font-bold text-xl text-gray-800 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-200">
              Running to God
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link href="/" className={getLinkClass('/')}>
              Home
            </Link>

            {/* The Journey Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleJourneyMouseEnter}
              onMouseLeave={handleJourneyMouseLeave}
            >
              <button className={getDropdownButtonClass(journeyItems)}>
                <span>The Journey</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${journeyDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`absolute top-full left-0 pt-1 transition-all duration-200 ${journeyDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="w-56 bg-white dark:bg-night-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 py-1">
                  {journeyItems.map((item) => (
                    <Link key={item.path} href={item.path} className={getDropdownLinkClass(item.path)}>
                      <span className="flex items-center gap-2">
                        <item.icon className="h-4 w-4" />
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleResourcesMouseEnter}
              onMouseLeave={handleResourcesMouseLeave}
            >
              <button className={getDropdownButtonClass(resourceItems)}>
                <span>Resources</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${resourcesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`absolute top-full left-0 pt-1 transition-all duration-200 ${resourcesDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="w-56 bg-white dark:bg-night-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 py-1">
                  {resourceItems.map((item) => (
                    <Link key={item.path} href={item.path} className={getDropdownLinkClass(item.path)}>
                      <span className="flex items-center gap-2">
                        <item.icon className="h-4 w-4" />
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Bible Study Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleStudyMouseEnter}
              onMouseLeave={handleStudyMouseLeave}
            >
              <button className={getDropdownButtonClass(studyItems)}>
                <span>Bible Study</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${studyDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`absolute top-full left-0 pt-1 transition-all duration-200 ${studyDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="w-56 bg-white dark:bg-night-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 py-1">
                  {studyItems.map((item) => (
                    <Link key={item.path} href={item.path} className={getDropdownLinkClass(item.path)}>
                      <span className="flex items-center gap-2">
                        <item.icon className="h-4 w-4" />
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Prayer Dropdown */}
            <div
              className="relative"
              onMouseEnter={handlePrayerMouseEnter}
              onMouseLeave={handlePrayerMouseLeave}
            >
              <button className={getDropdownButtonClass(prayerItems)}>
                <span>Prayer</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${prayerDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`absolute top-full left-0 pt-1 transition-all duration-200 ${prayerDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="w-56 bg-white dark:bg-night-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 py-1">
                  {prayerItems.map((item) => (
                    <Link key={item.path} href={item.path} className={getDropdownLinkClass(item.path)}>
                      <span className="flex items-center gap-2">
                        <item.icon className="h-4 w-4" />
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/contact" className={getLinkClass('/contact')}>
              Contact
            </Link>

            <Link href="/settings" className={`${getLinkClass('/settings')} flex items-center gap-1`}>
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </Link>
            
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900/30 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white/95 dark:bg-night-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 animate-fade-in max-h-[80vh] overflow-y-auto">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${getLinkClass('/')}`}
              >
                Home
              </Link>

              {/* Mobile Journey Section */}
              <div>
                <button
                  onClick={() => setJourneyDropdownOpen(!journeyDropdownOpen)}
                  className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300"
                >
                  <span className="flex items-center gap-2"><Map className="h-5 w-5" /> The Journey</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${journeyDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {journeyDropdownOpen && (
                  <div className="pl-4 space-y-1 mt-1">
                    {journeyItems.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`block px-3 py-2 rounded-md text-sm ${getDropdownLinkClass(item.path)}`}
                      >
                        <span className="flex items-center gap-2">
                          <item.icon className="h-4 w-4" />
                          {item.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Resources Section */}
              <div>
                <button
                  onClick={() => setResourcesDropdownOpen(!resourcesDropdownOpen)}
                  className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300"
                >
                  <span className="flex items-center gap-2"><Flame className="h-5 w-5" /> Resources</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${resourcesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {resourcesDropdownOpen && (
                  <div className="pl-4 space-y-1 mt-1">
                    {resourceItems.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`block px-3 py-2 rounded-md text-sm ${getDropdownLinkClass(item.path)}`}
                      >
                        <span className="flex items-center gap-2">
                          <item.icon className="h-4 w-4" />
                          {item.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Bible Study Section */}
              <div>
                <button
                  onClick={() => setStudyDropdownOpen(!studyDropdownOpen)}
                  className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300"
                >
                  <span className="flex items-center gap-2"><BookOpen className="h-5 w-5" /> Bible Study</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${studyDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {studyDropdownOpen && (
                  <div className="pl-4 space-y-1 mt-1">
                    {studyItems.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`block px-3 py-2 rounded-md text-sm ${getDropdownLinkClass(item.path)}`}
                      >
                        <span className="flex items-center gap-2">
                          <item.icon className="h-4 w-4" />
                          {item.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Prayer Section */}
              <div>
                <button
                  onClick={() => setPrayerDropdownOpen(!prayerDropdownOpen)}
                  className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300"
                >
                  <span className="flex items-center gap-2"><MessageCircle className="h-5 w-5" /> Prayer</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${prayerDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {prayerDropdownOpen && (
                  <div className="pl-4 space-y-1 mt-1">
                    {prayerItems.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`block px-3 py-2 rounded-md text-sm ${getDropdownLinkClass(item.path)}`}
                      >
                        <span className="flex items-center gap-2">
                          <item.icon className="h-4 w-4" />
                          {item.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${getLinkClass('/contact')}`}
              >
                Contact
              </Link>

              <Link
                href="/settings"
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium ${getLinkClass('/settings')}`}
              >
                <Settings className="h-5 w-5" />
                Settings
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
