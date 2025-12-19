'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Map, BookOpen, Flame, MessageCircle, Home, Users, Settings } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [journeyOpen, setJourneyOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  const navLinkClass = (path: string) => 
    `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
      isActive(path)
        ? 'bg-sky-100 text-sky-700 dark:bg-sky-900/50 dark:text-sky-300'
        : 'text-gray-700 dark:text-gray-200 hover:bg-sky-50 dark:hover:bg-sky-900/30 hover:text-sky-600'
    }`

  const journeyItems = [
    { path: '/journey', label: 'The Full Journey', icon: Map },
    { path: '/journey/perth', label: 'Perth - The Start', icon: Map },
    { path: '/journey/nullarbor', label: 'The Nullarbor', icon: Map },
    { path: '/journey/port-lincoln', label: 'Port Lincoln', icon: Map },
  ]

  const resourceItems = [
    { path: '/campfire-devotions', label: 'Campfire Devotions', icon: Flame },
    { path: '/bible-study', label: 'Bible Studies', icon: BookOpen },
    { path: '/about', label: 'About This Ministry', icon: Users },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/95 dark:bg-night-900/95 backdrop-blur-md shadow-lg z-50 border-b border-sky-100 dark:border-sky-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
              <Image
                src="/logo.png"
                alt="Running to God"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-serif font-bold text-xl text-gray-800 dark:text-white group-hover:text-sky-600 transition-colors">
              Running to God
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link href="/" className={navLinkClass('/')}>
              <span className="flex items-center gap-1">
                <Home className="h-4 w-4" />
                Home
              </span>
            </Link>

            {/* Journey Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setJourneyOpen(true)}
              onMouseLeave={() => setJourneyOpen(false)}
            >
              <button className={`${navLinkClass('/journey')} flex items-center gap-1`}>
                <Map className="h-4 w-4" />
                The Journey
                <ChevronDown className={`h-4 w-4 transition-transform ${journeyOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {journeyOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white dark:bg-night-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 py-2 animate-fade-in">
                  {journeyItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-sky-50 dark:hover:bg-sky-900/30 hover:text-sky-600"
                    >
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button className={`${navLinkClass('/campfire-devotions')} flex items-center gap-1`}>
                <Flame className="h-4 w-4" />
                Resources
                <ChevronDown className={`h-4 w-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {resourcesOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white dark:bg-night-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 py-2 animate-fade-in">
                  {resourceItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-sky-50 dark:hover:bg-sky-900/30 hover:text-sky-600"
                    >
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/contact" className={navLinkClass('/contact')}>
              <span className="flex items-center gap-1">
                <MessageCircle className="h-4 w-4" />
                Contact
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-sky-50 dark:hover:bg-sky-900/30"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 dark:border-gray-700 animate-fade-in">
            <div className="space-y-2">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={`block ${navLinkClass('/')}`}
              >
                <span className="flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  Home
                </span>
              </Link>

              {/* Mobile Journey Section */}
              <div className="space-y-1">
                <button
                  onClick={() => setJourneyOpen(!journeyOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 text-gray-700 dark:text-gray-200"
                >
                  <span className="flex items-center gap-2">
                    <Map className="h-5 w-5" />
                    The Journey
                  </span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${journeyOpen ? 'rotate-180' : ''}`} />
                </button>
                {journeyOpen && (
                  <div className="pl-6 space-y-1">
                    {journeyItems.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-sky-600"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Resources Section */}
              <div className="space-y-1">
                <button
                  onClick={() => setResourcesOpen(!resourcesOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 text-gray-700 dark:text-gray-200"
                >
                  <span className="flex items-center gap-2">
                    <Flame className="h-5 w-5" />
                    Resources
                  </span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                {resourcesOpen && (
                  <div className="pl-6 space-y-1">
                    {resourceItems.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-sky-600"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className={`block ${navLinkClass('/contact')}`}
              >
                <span className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Contact
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
