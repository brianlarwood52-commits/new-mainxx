'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Mail, Heart, Send, CheckCircle, MessageCircle, Map, BookOpen } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // For now, open mailto link
    // Will be connected to Sanity/Supabase later
    const mailtoLink = `mailto:hello@runningtogod.faith?subject=${encodeURIComponent(formData.subject || 'Contact from Running to God')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`
    window.open(mailtoLink, '_blank')
    
    setShowSuccess(true)
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-sky-500 to-sky-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-16 w-16 text-white/80 mx-auto mb-6" />
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed">
            Whether you have questions, need prayer, or just want to share your story — 
            we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-white dark:bg-night-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              href="/journey"
              className="flex items-center gap-4 p-6 bg-sky-50 dark:bg-sky-900/30 rounded-xl hover:shadow-lg transition-all group"
            >
              <Map className="h-10 w-10 text-sky-500" />
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white group-hover:text-sky-600 transition-colors">
                  Explore the Journey
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Perth to Port Lincoln
                </p>
              </div>
            </Link>
            
            <Link 
              href="/campfire-devotions"
              className="flex items-center gap-4 p-6 bg-campfire-50 dark:bg-campfire-900/30 rounded-xl hover:shadow-lg transition-all group"
            >
              <MessageCircle className="h-10 w-10 text-campfire-500" />
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white group-hover:text-campfire-600 transition-colors">
                  Campfire Devotions
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Evening devotionals
                </p>
              </div>
            </Link>
            
            <Link 
              href="/bible-study"
              className="flex items-center gap-4 p-6 bg-bush-50 dark:bg-bush-900/30 rounded-xl hover:shadow-lg transition-all group"
            >
              <BookOpen className="h-10 w-10 text-bush-500" />
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white group-hover:text-bush-600 transition-colors">
                  Bible Studies
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Deep dives into Scripture
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50 dark:bg-night-800">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-night-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700/50">
            <h2 className="font-serif text-2xl font-bold text-gray-800 dark:text-white mb-2 text-center">
              Send Us a Message
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
              We read every message and respond personally.
            </p>
            
            {showSuccess ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Your email client should have opened. Send the message and we'll respond soon.
                </p>
                <button
                  onClick={() => setShowSuccess(false)}
                  className="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-lg transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white dark:bg-night-800 text-gray-900 dark:text-white"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white dark:bg-night-800 text-gray-900 dark:text-white"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white dark:bg-night-800 text-gray-900 dark:text-white"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white dark:bg-night-800 text-gray-900 dark:text-white resize-none"
                    placeholder="Share your heart with us..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-sky-600 hover:bg-sky-700 disabled:bg-gray-400 text-white font-medium rounded-lg transition-all"
                >
                  {isSubmitting ? (
                    <span>Opening email...</span>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
          
          {/* Direct email */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-2">Or email us directly:</p>
            <a 
              href="mailto:hello@runningtogod.faith"
              className="inline-flex items-center gap-2 text-sky-600 dark:text-sky-400 hover:text-sky-700 font-medium"
            >
              <Mail className="h-5 w-5" />
              hello@runningtogod.faith
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
