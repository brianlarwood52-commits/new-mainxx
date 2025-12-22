'use client'

import React, { useState } from 'react'
import { Mail, Send, CheckCircle, MapPin } from 'lucide-react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-stone-950">
      
      {/* ===== HERO ===== */}
      <section className="relative py-32 vignette">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900 to-stone-950" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="location-tag mb-4">GET IN TOUCH</p>
          <h1 className="font-cinematic text-6xl md:text-7xl text-dust-100 tracking-wider mb-4">
            CONTACT
          </h1>
          <p className="text-xl text-dust-400 font-serif max-w-xl mx-auto">
            Whether you want to share your own road story, ask a question, 
            or just say g&apos;day—we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* ===== CONTACT FORM ===== */}
      <section className="py-16 bg-stone-950">
        <div className="max-w-2xl mx-auto px-6">
          
          {submitted ? (
            <div className="text-center py-16">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h2 className="font-cinematic text-3xl text-dust-100 tracking-wider mb-4">
                MESSAGE SENT
              </h2>
              <p className="text-dust-400 font-serif">
                Thanks for reaching out. We&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              <div>
                <label className="block font-mono text-xs text-dust-500 tracking-widest mb-2">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-4 bg-stone-900 border border-stone-700 rounded
                           text-dust-200 font-serif
                           focus:ring-2 focus:ring-earth-500 focus:border-transparent 
                           transition-all outline-none"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-dust-500 tracking-widest mb-2">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-4 bg-stone-900 border border-stone-700 rounded
                           text-dust-200 font-serif
                           focus:ring-2 focus:ring-earth-500 focus:border-transparent 
                           transition-all outline-none"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-dust-500 tracking-widest mb-2">
                  YOUR MESSAGE
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-4 bg-stone-900 border border-stone-700 rounded
                           text-dust-200 font-serif resize-none
                           focus:ring-2 focus:ring-earth-500 focus:border-transparent 
                           transition-all outline-none"
                  placeholder="Share your story, ask a question, or just say hello..."
                />
              </div>

              <button type="submit" className="btn-expedition w-full flex items-center justify-center gap-3">
                <Send className="h-5 w-5" />
                SEND MESSAGE
              </button>
            </form>
          )}

          {/* Additional info */}
          <div className="mt-16 grid sm:grid-cols-2 gap-8">
            <div className="text-center p-6 bg-stone-900/50 border border-stone-800 rounded">
              <MapPin className="h-8 w-8 text-earth-500 mx-auto mb-3" />
              <p className="font-mono text-xs text-dust-500 tracking-widest mb-1">BASED IN</p>
              <p className="font-serif text-dust-300">Port Lincoln, South Australia</p>
            </div>
            <div className="text-center p-6 bg-stone-900/50 border border-stone-800 rounded">
              <Mail className="h-8 w-8 text-earth-500 mx-auto mb-3" />
              <p className="font-mono text-xs text-dust-500 tracking-widest mb-1">PRAYER REQUESTS</p>
              <p className="font-serif text-dust-300">We&apos;d be honoured to pray for you</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
