'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Mail, Heart, Send, CheckCircle, HandHeart, Map, Flame, BookOpen, ExternalLink } from 'lucide-react'
import { submitContact } from '@/lib/supabase'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    requestType: 'general'
  })

  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await submitContact({
        name: formData.name,
        email: formData.email,
        request_type: formData.requestType,
        subject: formData.subject,
        message: formData.message,
        source: 'running-to-god',
      })

      if (result.success) {
        setShowSuccess(true)
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          requestType: 'general'
        })
      } else {
        throw new Error(result.error || 'Form submission failed')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      // Fallback to mailto
      const emailSubject = formData.subject || `${formData.requestType} - Contact from Running to God`
      const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Request Type: ${formData.requestType}
Subject: ${formData.subject}

Message:
${formData.message}

---
Sent from Running to God Contact Form
      `.trim()
      const mailtoLink = `mailto:hello@runningtogod.faith?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
      window.open(mailtoLink, '_blank')
      setShowSuccess(true)
    }

    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-sky-500 to-sky-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-16 w-16 text-white/90 mx-auto mb-6" />
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed">
            Whether you have questions, want to share your story, or need support — 
            we're here to walk alongside you.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-white dark:bg-night-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Prayer Request - Featured */}
            <Link 
              href="/submit-prayer"
              className="flex flex-col items-center p-8 bg-gradient-to-br from-sky-50 to-sky-100 dark:from-sky-900/30 dark:to-sky-800/30 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-sky-200 dark:border-sky-700/50"
            >
              <HandHeart className="h-12 w-12 text-sky-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-serif text-xl font-bold text-gray-800 dark:text-white mb-2 text-center">
                Prayer Request
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center text-sm mb-4">
                Submit a prayer anonymously — no personal info needed
              </p>
              <span className="inline-flex items-center text-sky-600 dark:text-sky-400 font-medium">
                Submit Prayer
                <ExternalLink className="ml-2 h-4 w-4" />
              </span>
            </Link>

            {/* Journey */}
            <Link 
              href="/journey"
              className="flex flex-col items-center p-8 bg-gray-50 dark:bg-night-800 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <Map className="h-12 w-12 text-outback-500 mb-4" />
              <h3 className="font-serif text-xl font-bold text-gray-800 dark:text-white mb-2 text-center">
                Explore the Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                Perth to Port Lincoln road trip
              </p>
            </Link>

            {/* Campfire Devotions */}
            <Link 
              href="/campfire-devotions"
              className="flex flex-col items-center p-8 bg-gray-50 dark:bg-night-800 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <Flame className="h-12 w-12 text-campfire-500 mb-4" />
              <h3 className="font-serif text-xl font-bold text-gray-800 dark:text-white mb-2 text-center">
                Campfire Devotions
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                Evening devotionals under the stars
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form - For when they need a response */}
      <section className="py-16 bg-gray-50 dark:bg-night-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-night-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700/50">
            <h2 className="font-serif text-2xl font-bold text-gray-800 dark:text-white mb-2 text-center">
              Send Us a Message
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
              Use this form when you need us to respond. We read every message personally.
            </p>
            
            {showSuccess ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Thank you for reaching out. We'll respond within 24-48 hours.
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
                      placeholder="How should we address you?"
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
                      placeholder="So we can respond to you"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="requestType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    What's This About?
                  </label>
                  <select
                    id="requestType"
                    name="requestType"
                    value={formData.requestType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white dark:bg-night-800 text-gray-900 dark:text-white"
                  >
                    <option value="general">General Question</option>
                    <option value="bible-study">Bible Study Signup</option>
                    <option value="testimony">Share Your Story/Testimony</option>
                    <option value="partnership">Ministry Partnership</option>
                    <option value="technical">Technical Issue</option>
                  </select>
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
                    placeholder="Brief description"
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
                    placeholder="What would you like to share or ask?"
                  />
                </div>

                <div className="bg-sky-50 dark:bg-sky-900/30 rounded-lg p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    <strong>Note:</strong> For prayer requests, we recommend using our{' '}
                    <Link href="/submit-prayer" className="text-sky-600 dark:text-sky-400 hover:underline">
                      anonymous prayer form
                    </Link>{' '}
                    — no personal info needed.
                  </p>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-sky-600 hover:bg-sky-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                      Sending...
                    </>
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

      {/* Crisis Resources */}
      <section className="py-12 bg-red-50 dark:bg-red-900/20 border-t-4 border-red-200 dark:border-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">
            Need Immediate Help?
          </h2>
          <p className="text-gray-700 dark:text-gray-200 text-center mb-6">
            If you're in crisis, please reach out to these professional support services:
          </p>
          
          <div className="bg-white dark:bg-night-800 rounded-xl p-6 shadow-lg">
            <div className="bg-red-100 dark:bg-red-900/40 border-2 border-red-500 rounded-lg p-4 mb-6 text-center">
              <p className="text-red-900 dark:text-red-200 font-bold">
                If you are in immediate danger, call 000 (Australia) or your local emergency number.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-night-900 rounded-lg text-center">
                <a href="https://www.lifeline.org.au/" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-800 dark:text-white hover:text-sky-600 transition-colors">
                  Lifeline Australia
                </a>
                <p className="text-xl font-bold text-red-600 dark:text-red-400">13 11 14</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">24/7 Crisis Support</p>
              </div>
              
              <div className="p-4 bg-gray-50 dark:bg-night-900 rounded-lg text-center">
                <a href="https://988lifeline.org/" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-800 dark:text-white hover:text-sky-600 transition-colors">
                  US Suicide Prevention
                </a>
                <p className="text-xl font-bold text-red-600 dark:text-red-400">988</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">24/7 Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-12 bg-sky-800 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-sky-100 leading-relaxed">
            We read every message personally and respond with care. 
            Your journey matters to us.
          </p>
        </div>
      </section>
    </div>
  )
}
