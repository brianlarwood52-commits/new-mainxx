'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, FileText } from 'lucide-react'

export default function TermsPage() {
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
            <FileText className="h-10 w-10 text-cyan-500" />
            <h1 className="font-cinematic text-5xl md:text-6xl text-dust-100 tracking-wider">
              TERMS OF USE
            </h1>
          </div>
          <p className="text-dust-400 font-mono text-sm">
            Last updated: December 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-invert prose-lg max-w-none space-y-8">
            
            <div className="space-y-4">
              <h2 className="font-cinematic text-2xl text-dust-100 tracking-wider">ACCEPTANCE OF TERMS</h2>
              <p className="text-dust-300 font-serif leading-relaxed">
                By accessing and using the Running to God website, you accept and agree to be bound by 
                these Terms of Use. If you do not agree to these terms, please do not use this website.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-cinematic text-2xl text-dust-100 tracking-wider">USE OF CONTENT</h2>
              <p className="text-dust-300 font-serif leading-relaxed">
                The content on this website, including text, devotions, and written materials, is provided 
                for personal, non-commercial use only. You may share links to our content but may not 
                reproduce or republish substantial portions without permission.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-cinematic text-2xl text-dust-100 tracking-wider">INTELLECTUAL PROPERTY</h2>
              <p className="text-dust-300 font-serif leading-relaxed">
                All content on this website is the property of Running to God Ministry and/or its 
                content creators and is protected by copyright and other intellectual property laws.
              </p>
              <div className="bg-stone-900/50 border border-stone-800 p-6 rounded-lg">
                <p className="text-cyan-400 font-mono text-sm tracking-wider mb-2">IMPORTANT</p>
                <p className="text-dust-300 font-serif">
                  <strong>All photographs and videos</strong> on this website are © Brian Larwood and are 
                  protected by copyright. No reproduction, distribution, modification, or use of any 
                  photographic or video content is permitted without prior written consent from Brian Larwood.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="font-cinematic text-2xl text-dust-100 tracking-wider">DISCLAIMER</h2>
              <p className="text-dust-300 font-serif leading-relaxed">
                This website provides spiritual content and personal reflections. It is not intended to 
                replace professional counseling, medical advice, or pastoral care. If you are in crisis, 
                please seek appropriate professional help.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-cinematic text-2xl text-dust-100 tracking-wider">LIMITATION OF LIABILITY</h2>
              <p className="text-dust-300 font-serif leading-relaxed">
                Running to God Ministry shall not be liable for any damages arising from your use of 
                this website or reliance on any content provided herein.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-cinematic text-2xl text-dust-100 tracking-wider">USER CONDUCT</h2>
              <p className="text-dust-300 font-serif leading-relaxed">
                When using our contact forms or any interactive features, you agree to:
              </p>
              <ul className="text-dust-400 font-serif space-y-2 list-disc list-inside">
                <li>Provide accurate information</li>
                <li>Respect others in any communications</li>
                <li>Not submit harmful, offensive, or illegal content</li>
                <li>Not attempt to disrupt or harm the website</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-cinematic text-2xl text-dust-100 tracking-wider">CHANGES TO TERMS</h2>
              <p className="text-dust-300 font-serif leading-relaxed">
                We reserve the right to modify these Terms of Use at any time. Continued use of the 
                website after changes constitutes acceptance of the new terms.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-cinematic text-2xl text-dust-100 tracking-wider">GOVERNING LAW</h2>
              <p className="text-dust-300 font-serif leading-relaxed">
                These terms are governed by the laws of Western Australia, Australia.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-cinematic text-2xl text-dust-100 tracking-wider">CONTACT</h2>
              <p className="text-dust-300 font-serif leading-relaxed">
                For questions about these Terms of Use, please{' '}
                <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 underline">
                  contact us
                </Link>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
