'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Map, Home, Compass, Flame, BookOpen, User, Mail, Shield, FileText } from 'lucide-react'

export default function SitemapPage() {
  const sections = [
    {
      title: 'Main Pages',
      links: [
        { href: '/', label: 'Home', icon: Home, description: 'Start your journey here' },
        { href: '/journey', label: 'The Road', icon: Compass, description: 'Follow the 6,859 km journey' },
        { href: '/campfire', label: 'Campfire Stories', icon: Flame, description: 'Stories from the roadside' },
        { href: '/devotions', label: 'Journal / Devotions', icon: BookOpen, description: 'Reflections and daily devotions' },
      ]
    },
    {
      title: 'About',
      links: [
        { href: '/about', label: 'About / My Story', icon: User, description: 'The story behind the journey' },
        { href: '/contact', label: 'Contact Us', icon: Mail, description: 'Get in touch' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { href: '/privacy-policy', label: 'Privacy Policy', icon: Shield, description: 'How we handle your data' },
        { href: '/terms', label: 'Terms of Use', icon: FileText, description: 'Website terms and conditions' },
      ]
    },
  ]

  return (
    <div className="min-h-screen bg-stone-950/80 backdrop-blur-sm">
      
      {/* Header */}
      <section className="relative py-20 border-b border-stone-800">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-dust-500 hover:text-dust-300 transition-colors mb-8 font-mono text-sm">
            <ArrowLeft className="h-4 w-4" />
            BACK TO HOME
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <Map className="h-10 w-10 text-cyan-500" />
            <h1 className="font-cinematic text-5xl md:text-6xl text-dust-100 tracking-wider">
              SITEMAP
            </h1>
          </div>
          <p className="text-dust-400 font-serif text-lg">
            Find your way around the Running to God website
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-cinematic text-2xl text-cyan-500 tracking-wider mb-6">
                  {section.title.toUpperCase()}
                </h2>
                <div className="grid gap-4">
                  {section.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group flex items-start gap-4 p-4 border border-stone-800 rounded-lg hover:border-cyan-700 hover:bg-stone-900/50 transition-all"
                    >
                      <link.icon className="h-6 w-6 text-dust-600 group-hover:text-cyan-500 transition-colors mt-1" />
                      <div>
                        <p className="font-mono text-sm text-dust-200 group-hover:text-cyan-400 tracking-wider transition-colors">
                          {link.label.toUpperCase()}
                        </p>
                        <p className="text-dust-500 font-serif text-sm mt-1">
                          {link.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </div>
  )
}
