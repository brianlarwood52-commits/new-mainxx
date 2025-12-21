'use client'

import React from 'react'
import Link from 'next/link'
import { Heart, Compass, BookOpen, Mail, ArrowRight } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-sky-100 to-white dark:from-abyss-900 dark:to-abyss-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-16 w-16 text-sky-600 dark:text-sky-400 mx-auto mb-6" />
          <h1 className="font-display text-5xl font-bold text-abyss-900 dark:text-white mb-4">
            About This Ministry
          </h1>
          <p className="text-xl text-abyss-600 dark:text-abyss-300">
            Born from a road trip. Built on faith.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white dark:bg-abyss-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="font-display text-3xl font-bold text-abyss-900 dark:text-white mb-6">
              The Story Behind the Journey
            </h2>
            
            <p className="text-abyss-600 dark:text-abyss-300 mb-6">
              Sometimes God calls us to step away from everything familiar—to leave the 
              comfort of routine and venture into the unknown. That&apos;s exactly what happened 
              when I packed up my car in Perth and headed east across the Nullarbor Plain 
              to Port Lincoln.
            </p>

            <p className="text-abyss-600 dark:text-abyss-300 mb-6">
              What started as a road trip became something far more profound. Along those 
              dusty roads, under vast star-filled skies, and in the quiet moments around 
              evening campfires, I encountered God in ways I never expected.
            </p>

            <p className="text-abyss-600 dark:text-abyss-300 mb-6">
              The endless horizon of the Nullarbor taught me about God&apos;s infinite love. 
              The small towns along the way reminded me of the importance of community. 
              The challenges of the journey—the heat, the solitude, the uncertainty—showed 
              me that faith is forged in difficulty.
            </p>

            <blockquote className="border-l-4 border-sky-500 pl-6 my-8 italic text-abyss-700 dark:text-abyss-300">
              &ldquo;Running to God&rdquo; isn&apos;t about escaping life—it&apos;s about pursuing 
              the One who gives life meaning. Whether you&apos;re on a literal road trip 
              or navigating the highways and byways of everyday life, God is there, 
              waiting to be found.
            </blockquote>

            <h3 className="font-display text-2xl font-semibold text-abyss-900 dark:text-white mt-12 mb-4">
              Our Mission
            </h3>

            <p className="text-abyss-600 dark:text-abyss-300 mb-6">
              This ministry exists to encourage fellow travellers on their faith journey. 
              Through devotions, stories, and shared experiences, we hope to point people 
              towards the God who meets us wherever we are—on the road, in the wilderness, 
              or in the midst of our daily routines.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mt-12">
              <Link href="/devotions" className="card text-center group hover:border-sky-400 transition-all">
                <BookOpen className="h-8 w-8 text-sky-600 dark:text-sky-400 mx-auto mb-3" />
                <h4 className="font-semibold text-abyss-900 dark:text-white">Daily Devotions</h4>
                <p className="text-sm text-abyss-500 dark:text-abyss-400 mt-1">
                  Start your day with encouragement
                </p>
              </Link>

              <Link href="/journey" className="card text-center group hover:border-sky-400 transition-all">
                <Compass className="h-8 w-8 text-sky-600 dark:text-sky-400 mx-auto mb-3" />
                <h4 className="font-semibold text-abyss-900 dark:text-white">The Journey</h4>
                <p className="text-sm text-abyss-500 dark:text-abyss-400 mt-1">
                  Follow the road from Perth to Port Lincoln
                </p>
              </Link>

              <Link href="/contact" className="card text-center group hover:border-sky-400 transition-all">
                <Mail className="h-8 w-8 text-sky-600 dark:text-sky-400 mx-auto mb-3" />
                <h4 className="font-semibold text-abyss-900 dark:text-white">Get in Touch</h4>
                <p className="text-sm text-abyss-500 dark:text-abyss-400 mt-1">
                  Share your story with us
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-sky-600 dark:bg-sky-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-sky-100 mb-8 max-w-2xl mx-auto">
            No matter where you are in life, there&apos;s always a road that leads to God.
          </p>
          <Link 
            href="/journey" 
            className="bg-white text-sky-700 hover:bg-sky-50 px-8 py-4 rounded-lg font-semibold 
                      transition-all shadow-lg inline-flex items-center gap-2"
          >
            Begin the Journey
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
