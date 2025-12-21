'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from '@/context/ThemeContext'
import Logo from './Logo'
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Home,
  Compass,
  BookOpen,
  Heart,
  Mail,
  Tent
} from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/journey', label: 'The Journey', icon: Compass },
  { href: '/devotions', label: 'Devotions', icon: BookOpen },
  { href: '/campfire', label: 'Campfire Stories', icon: Tent },
  { href: '/about', label: 'About', icon: Heart },
  { href: '/contact', label: 'Contact', icon: Mail },
]

export default function Navigation() {
  const { theme, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
                    ${scrolled 
                      ? 'bg-white/95 dark:bg-abyss-900/95 shadow-lg' 
                      : 'bg-transparent'} 
                    backdrop-blur-md border-b border-sky-200/50 dark:border-abyss-700/50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Logo size="md" className="transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold text-abyss-900 dark:text-white">
                Running to God
              </span>
              <span className="text-xs text-sky-600 dark:text-sky-400 -mt-0.5 hidden sm:block">
                A Journey of Faith
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-abyss-700 hover:text-sky-600 dark:text-abyss-200 dark:hover:text-sky-400 
                         transition-colors font-medium flex items-center gap-1.5 text-sm"
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </Link>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="relative p-2.5 rounded-full bg-sky-100 dark:bg-abyss-800 
                       hover:bg-sky-200 dark:hover:bg-abyss-700 transition-all
                       group overflow-hidden border border-sky-200 dark:border-abyss-600"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              <div className="relative w-5 h-5">
                {/* Sun Icon */}
                <Sun 
                  className={`h-5 w-5 text-horizon-500 absolute inset-0 transition-all duration-300
                            ${theme === 'light' ? 'rotate-0 opacity-100 scale-100' : 'rotate-90 opacity-0 scale-75'}`}
                />
                {/* Moon Icon */}
                <Moon 
                  className={`h-5 w-5 text-sky-300 absolute inset-0 transition-all duration-300
                            ${theme === 'dark' ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-75'}`}
                />
              </div>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-sky-100 dark:hover:bg-abyss-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-abyss-700 dark:text-abyss-200" />
              ) : (
                <Menu className="h-6 w-6 text-abyss-700 dark:text-abyss-200" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden transition-all duration-300 overflow-hidden
                   ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-4 py-4 space-y-1 bg-white/95 dark:bg-abyss-900/95 backdrop-blur-md 
                       border-t border-sky-200/50 dark:border-abyss-700/50">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg
                       text-abyss-700 hover:text-sky-600 hover:bg-sky-50
                       dark:text-abyss-200 dark:hover:text-sky-400 dark:hover:bg-abyss-800
                       transition-colors font-medium"
            >
              <link.icon className="h-5 w-5" />
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
