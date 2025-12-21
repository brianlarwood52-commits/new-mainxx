'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from '@/context/ThemeContext'
import { Sun, Moon, Menu, X, MapPin } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/journey', label: 'THE ROAD' },
  { href: '/campfire', label: 'CAMPFIRE' },
  { href: '/devotions', label: 'JOURNAL' },
  { href: '/about', label: 'THE STORY' },
  { href: '/contact', label: 'CONTACT' },
]

export default function Navigation() {
  const { theme, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700
                    ${scrolled 
                      ? 'bg-stone-950/95 backdrop-blur-sm py-3' 
                      : 'nav-documentary py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-8 h-8 border border-earth-500 rounded-sm flex items-center justify-center group-hover:bg-earth-500/20 transition-all">
              <MapPin className="h-4 w-4 text-earth-500" />
            </div>
            <div className="hidden sm:block">
              <p className="font-cinematic text-lg text-dust-100 tracking-widest leading-none">
                RUNNING TO GOD
              </p>
              <p className="font-mono text-[10px] text-dust-600 tracking-widest">
                SWAN VIEW, PERTH • 6,859 KM
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-xs tracking-widest text-dust-400 hover:text-dust-100 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-dust-500 hover:text-dust-200 transition-colors"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-dust-400 hover:text-dust-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Full screen overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-stone-950/98 backdrop-blur-md transition-all duration-500
                   ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ top: '60px' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-cinematic text-4xl text-dust-300 hover:text-earth-400 tracking-widest transition-colors"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: isOpen ? 'fadeInUp 0.5s ease-out forwards' : 'none'
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
