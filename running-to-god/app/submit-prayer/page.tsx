'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Heart, Send, CheckCircle, HandHeart, Sparkles, ChevronDown, ChevronUp } from 'lucide-react'
import { submitPrayer } from '@/lib/supabase'

export default function SubmitPrayerPage() {
  const [prayerRequest, setPrayerRequest] = useState('')
  const [allowSharing, setAllowSharing] = useState(false)
  const [showContactInfo, setShowContactInfo] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Anonymous by default - only include contact info if they chose to provide it
      const result = await submitPrayer({
        name: showContactInfo && name ? name : null,
        email: showContactInfo && email ? email : null,
        is_anonymous: !showContactInfo || (!name && !email),
        prayer_request: prayerRequest,
        allow_sharing: allowSharing,
        source: 'running-to-god',
      })

      if (result.success) {
        setShowSuccess(true)
        setPrayerRequest('')
        setAllowSharing(false)
        setShowContactInfo(false)
        setName('')
        setEmail('')
      } else {
        throw new Error(result.error || 'Form submission failed')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      // Fallback to mailto
      const emailSubject = 'Prayer Request - Running to God'
      const emailBody = `
Prayer Request Submission

${showContactInfo && name ? `Name: ${name}` : 'Anonymous'}
${showContactInfo && email ? `Email: ${email}` : ''}
Allow Sharing as Testimony: ${allowSharing ? 'Yes' : 'No'}

Prayer Request:
${prayerRequest}

---
Sent from Running to God
      `.trim()
      const mailtoLink = `mailto:hello@runningtogod.faith?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
      window.open(mailtoLink, '_blank')
      setShowSuccess(true)
    }

    setIsSubmitting(false)
  }

  if (showSuccess) {
    return (
      <div className="min-h-screen">
        <section className="py-24 bg-gradient-to-b from-sky-500 to-sky-600">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white dark:bg-night-900 rounded-2xl shadow-2xl p-12">
              <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
              <h1 className="font-serif text-3xl font-bold text-gray-800 dark:text-white mb-4">
                Your Prayer Has Been Received
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                God hears you. He knows your heart. We are lifting you up in prayer.
              </p>
              <blockquote className="text-lg italic text-sky-600 dark:text-sky-400 mb-8">
                "Draw near to God, and he will draw near to you." — James 4:8
              </blockquote>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setShowSuccess(false)}
                  className="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-lg transition-colors"
                >
                  Submit Another Prayer
                </button>
                <Link
                  href="/journey"
                  className="px-6 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-night-700 dark:hover:bg-night-600 text-gray-700 dark:text-white font-medium rounded-lg transition-colors"
                >
                  Continue the Journey
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-sky-500 to-sky-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HandHeart className="h-16 w-16 text-white/90 mx-auto mb-6 animate-float" />
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Submit a Prayer Request
          </h1>
          <p className="text-xl text-sky-100 leading-relaxed max-w-2xl mx-auto">
            God already knows who you are and what you need. 
            Share your heart — no personal information required.
          </p>
        </div>
      </section>

      {/* Prayer Form */}
      <section className="py-16 bg-white dark:bg-night-900">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Reassurance */}
          <div className="bg-sky-50 dark:bg-sky-900/30 rounded-2xl p-6 mb-8 border border-sky-100 dark:border-sky-800/50">
            <div className="flex items-start gap-4">
              <Heart className="h-8 w-8 text-sky-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-serif text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  This is a Safe Space
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Your prayer request is between you and God. We don't need your name, your email, 
                  or any personal details. Just share what's on your heart, and we will pray for you.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white dark:bg-night-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700/50">
            {/* Prayer Request - the only required field */}
            <div className="mb-6">
              <label htmlFor="prayerRequest" className="block text-lg font-medium text-gray-700 dark:text-gray-200 mb-3">
                Your Prayer Request
              </label>
              <textarea
                id="prayerRequest"
                value={prayerRequest}
                onChange={(e) => setPrayerRequest(e.target.value)}
                required
                rows={8}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white dark:bg-night-900 text-gray-900 dark:text-white resize-none text-lg"
                placeholder="Share what's on your heart. God is listening..."
              />
            </div>

            {/* Optional: Share as testimony */}
            <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={allowSharing}
                  onChange={(e) => setAllowSharing(e.target.checked)}
                  className="h-5 w-5 mt-0.5 text-sky-600 focus:ring-sky-500 border-gray-300 rounded"
                />
                <span className="text-gray-700 dark:text-gray-300">
                  If God answers this prayer, you may share it as a testimony to encourage others
                  <span className="block text-sm text-gray-500 dark:text-gray-400 mt-1">
                    (Your name will never be shared)
                  </span>
                </span>
              </label>
            </div>

            {/* Optional: Contact info (expandable) */}
            <div className="mb-8">
              <button
                type="button"
                onClick={() => setShowContactInfo(!showContactInfo)}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                {showContactInfo ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
                <span className="text-sm">
                  {showContactInfo ? 'Hide contact info' : 'Want to include your name or email? (optional)'}
                </span>
              </button>

              {showContactInfo && (
                <div className="mt-4 space-y-4 pl-7 animate-fade-in">
                  <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                    Only provide this if you'd like us to follow up with you personally. 
                    It's completely optional.
                  </p>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name (optional)
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white dark:bg-night-900 text-gray-900 dark:text-white"
                      placeholder="First name is fine"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email (optional)
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent bg-white dark:bg-night-900 text-gray-900 dark:text-white"
                      placeholder="Only if you'd like a personal response"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Privacy note */}
            <div className="bg-gray-50 dark:bg-night-900/50 rounded-xl p-4 mb-6">
              <div className="flex items-start gap-2">
                <Sparkles className="h-5 w-5 text-sky-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Privacy:</strong> We don't track your location or collect any data beyond 
                  what you share here. Your prayer is confidential.
                </p>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting || !prayerRequest.trim()}
              className="w-full inline-flex items-center justify-center px-8 py-4 bg-sky-600 hover:bg-sky-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium rounded-xl text-lg transition-all"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3" />
                  Submitting Prayer...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5 mr-2" />
                  Submit Prayer Request
                </>
              )}
            </button>
          </form>

          {/* Scripture */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-sky-50 to-ocean-50 dark:from-sky-900/30 dark:to-ocean-900/30 rounded-xl p-6 border border-sky-100 dark:border-sky-800/50">
              <Heart className="h-8 w-8 text-sky-500 mx-auto mb-4" />
              <blockquote className="font-serif text-lg text-gray-700 dark:text-gray-200 italic leading-relaxed mb-3">
                "Cast all your anxiety on him because he cares for you."
              </blockquote>
              <cite className="text-sky-600 dark:text-sky-400">— 1 Peter 5:7</cite>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
