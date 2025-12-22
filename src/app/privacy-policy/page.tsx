'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Shield } from 'lucide-react'

export default function PrivacyPolicyPage() {
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
            <Shield className="h-10 w-10 text-cyan-500" />
            <h1 className="font-cinematic text-5xl md:text-6xl text-dust-100 tracking-wider">
              PRIVACY POLICY
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
              <h2 className="font-cinematic text-2xl text-dust-100 tracking-wider">OVERVIEW</h2>
              <p className="text-dust-300 font-serif leading-relaxed">
                Running to God Ministry (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting 
                your privacy. This Privacy Policy explains how we collect, use, and safeguard your information 
                when you visit our website.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-cinematic text-2xl text-dust-100 tracking-wider">INFORMATION WE COLLECT</h2>
              <p className="text-dust-300 font-serif leading-relaxed">
                We may collect the following types of information:
              </p>
              <ul className="text-dust-400 font-serif space-y-2 list-disc list-inside">
                <li><strong className="text-dust-200">Contact Information:</strong> Name and email address when you use our contact form</li>
                <li><strong className="text-dust-200">Usage Data:</strong> Anonymous information about how you interact with our website</li>
                <li><strong className="text-dust-200">Device Information:</strong> Browser type, operating system, and device type</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-cinematic text-2xl text-dust-100 tracking-wider">HOW WE USE YOUR INFORMATION</h2>
              <p className="text-dust-300 font-serif leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="text-dust-400 font-serif space-y-2 list-disc list-inside">
                <li>Respond to your inquiries and prayer requests</li>
                <li>Improve our website and content</li>
                <li>Send occasional ministry updates (only if you opt-in)</li>
                <li>Ensure the security of our website</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-cinematic text-2xl text-dust-100 tracking-wider">DATA PROTECTION</h2>
              <p className="text-dust-300 font-serif leading-relaxed">
                We implement appropriate security measures to protect your personal information. 
                We do not sell, trade, or rent your personal information to third parties.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-cinematic text-2xl text-dust-100 tracking-wider">COOKIES</h2>
              <p className="text-dust-300 font-serif leading-relaxed">
                We may use cookies to enhance your experience on our website. These are small files 
                stored on your device that help us remember your preferences (such as light/dark mode).
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-cinematic text-2xl text-dust-100 tracking-wider">THIRD-PARTY LINKS</h2>
              <p className="text-dust-300 font-serif leading-relaxed">
                Our website may contain links to other websites. We are not responsible for the 
                privacy practices of these external sites and encourage you to review their policies.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-cinematic text-2xl text-dust-100 tracking-wider">COPYRIGHT NOTICE</h2>
              <p className="text-dust-300 font-serif leading-relaxed">
                All photographs and videos on this website are the exclusive property of Brian Larwood 
                and are protected by copyright law. No reproduction, distribution, or use of any media 
                content is permitted without prior written consent.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-cinematic text-2xl text-dust-100 tracking-wider">CONTACT US</h2>
              <p className="text-dust-300 font-serif leading-relaxed">
                If you have any questions about this Privacy Policy, please{' '}
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
