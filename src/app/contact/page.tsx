'use client'

import React, { useState } from 'react'
import { Mail, Send, MapPin, Heart, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send to a backend
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-sky-100 to-white dark:from-abyss-900 dark:to-abyss-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="h-16 w-16 text-sky-600 dark:text-sky-400 mx-auto mb-6" />
          <h1 className="font-display text-5xl font-bold text-abyss-900 dark:text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-abyss-600 dark:text-abyss-300">
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white dark:bg-abyss-950">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="card text-center py-12">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h2 className="font-display text-2xl font-bold text-abyss-900 dark:text-white mb-2">
                Message Sent!
              </h2>
              <p className="text-abyss-600 dark:text-abyss-400">
                Thank you for reaching out. We&apos;ll get back to you as soon as we can.
              </p>
            </div>
          ) : (
            <div className="card">
              <h2 className="font-display text-2xl font-bold text-abyss-900 dark:text-white mb-6">
                Send a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-abyss-700 dark:text-abyss-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-sky-200 dark:border-abyss-700 
                             bg-white dark:bg-abyss-800 text-abyss-900 dark:text-white
                             focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-abyss-700 dark:text-abyss-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-sky-200 dark:border-abyss-700 
                             bg-white dark:bg-abyss-800 text-abyss-900 dark:text-white
                             focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-abyss-700 dark:text-abyss-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-sky-200 dark:border-abyss-700 
                             bg-white dark:bg-abyss-800 text-abyss-900 dark:text-white
                             focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all resize-none"
                    placeholder="Share your thoughts, prayer requests, or just say hello..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>
          )}

          {/* Additional Info */}
          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            <div className="card text-center">
              <MapPin className="h-8 w-8 text-sky-600 dark:text-sky-400 mx-auto mb-3" />
              <h3 className="font-semibold text-abyss-900 dark:text-white">Based In</h3>
              <p className="text-sm text-abyss-600 dark:text-abyss-400 mt-1">
                Port Lincoln, South Australia
              </p>
            </div>

            <div className="card text-center">
              <Heart className="h-8 w-8 text-sky-600 dark:text-sky-400 mx-auto mb-3" />
              <h3 className="font-semibold text-abyss-900 dark:text-white">Prayer Requests</h3>
              <p className="text-sm text-abyss-600 dark:text-abyss-400 mt-1">
                We&apos;d be honoured to pray for you
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
