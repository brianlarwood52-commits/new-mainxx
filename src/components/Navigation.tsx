'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/journey', label: 'THE ROAD' },
  { href: '/campfire', label: 'CAMPFIRE' },
  { href: '/devotions', label: 'JOURNAL' },
  { href: '/about', label: 'THE STORY' },
  { href: '/contact', label: 'CONTACT' },
]

export default function Navigation() {
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
                      ? 'bg-stone-950/95 backdrop-blur-sm py-2' 
                      : 'nav-documentary py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <Logo size="sm" />
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

      {/* Mobile Menu - Full screen overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-stone-950/98 backdrop-blur-md transition-all duration-500
                   ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ top: '60px' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {/* Logo in mobile menu */}
          <Logo size="lg" showText />
          
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-cinematic text-3xl text-dust-300 hover:text-cyan-400 tracking-widest transition-colors"
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
