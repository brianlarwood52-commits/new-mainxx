import React from 'react'
import Link from 'next/link'
import { Heart, Map, BookOpen, Users, ArrowRight, ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'About - Running to God Ministry',
  description: 'Learn about Running to God — a ministry focused on helping people discover their relationship with Jesus through the lens of an Australian outback journey.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-b from-sky-500 to-sky-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            About Running to God
          </h1>
          <p className="text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed">
            A ministry born on the red dirt roads of Australia, somewhere between 
            Perth and Port Lincoln.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white dark:bg-night-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="font-serif text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Why "Running to God"?
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              We spend so much of our lives running — running from our past, from our pain, 
              from the things we don't want to face. But what if instead of running <em>away</em>, 
              we started running <em>toward</em>?
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              This ministry was born on the red dirt roads of Australia, somewhere between 
              Perth and Port Lincoln. In the silence of the desert, under a canopy of a billion 
              stars, I learned that God isn't found in the noise — He's found when we finally 
              stop running from Him and start running to Him.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              The name comes from the story of the Prodigal Son. When the wayward son finally 
              came to his senses and began walking home, his father didn't wait at the door 
              with crossed arms. Instead, "while he was still a long way off, his father saw 
              him and was filled with compassion for him; he ran to his son" (Luke 15:20).
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              That's the heart of this ministry: Jesus is already running toward you. 
              All you have to do is start moving in His direction.
            </p>
          </div>
        </div>
      </section>

      {/* Focus on Jesus */}
      <section className="py-16 bg-sky-50 dark:bg-night-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-night-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700/50">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  Our Focus: Jesus, the Son of God
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Part of the Shame to Flame Ministry Family
                </p>
              </div>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Running to God is specifically focused on our relationship with Jesus Christ — 
              God the Son. While we believe in the Trinity and the full counsel of Scripture, 
              this particular ministry emphasizes what it means to know Jesus personally, 
              to follow Him daily, and to experience His love and grace.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We're part of a family of ministries, each focusing on a different aspect of 
              the Christian journey. Together, we help people encounter the fullness of God.
            </p>
          </div>
        </div>
      </section>

      {/* Sister Sites */}
      <section className="py-16 bg-white dark:bg-night-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            The Ministry Family
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a 
              href="https://shametoflame.faith" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-6 bg-gray-50 dark:bg-night-800 rounded-xl hover:shadow-lg transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-serif text-xl font-bold text-gray-800 dark:text-white group-hover:text-sky-600 transition-colors">
                  Shame to Flame
                </h3>
                <ExternalLink className="h-4 w-4 text-gray-400" />
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                The umbrella ministry. Healing from shame, trauma recovery, and transformation through God's love.
              </p>
            </a>
            
            <a 
              href="https://learnliveforgive.faith" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-6 bg-gray-50 dark:bg-night-800 rounded-xl hover:shadow-lg transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-serif text-xl font-bold text-gray-800 dark:text-white group-hover:text-sky-600 transition-colors">
                  Learn Live Forgive
                </h3>
                <ExternalLink className="h-4 w-4 text-gray-400" />
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Focused on God the Father. Exploring forgiveness, the Father's love, and living in His grace.
              </p>
            </a>
            
            <a 
              href="https://projectreconcile.faith" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-6 bg-gray-50 dark:bg-night-800 rounded-xl hover:shadow-lg transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-serif text-xl font-bold text-gray-800 dark:text-white group-hover:text-sky-600 transition-colors">
                  Project Reconcile
                </h3>
                <ExternalLink className="h-4 w-4 text-gray-400" />
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Focused on the Holy Spirit. The work of reconciliation and the Spirit's transforming power.
              </p>
            </a>
            
            <div className="p-6 bg-sky-50 dark:bg-sky-900/30 rounded-xl border-2 border-sky-200 dark:border-sky-700">
              <h3 className="font-serif text-xl font-bold text-sky-700 dark:text-sky-300 mb-3">
                Running to God
              </h3>
              <p className="text-sky-600 dark:text-sky-400 text-sm">
                You are here! Focused on Jesus, the Son. Relationship, journey, and running into His arms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-sky-600 to-sky-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">
            Start Your Journey Today
          </h2>
          <p className="text-sky-100 mb-8 text-lg">
            Whether you're spiritually curious, returning to faith, or deep in your walk with Jesus — 
            this journey is for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/journey"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-700 font-semibold rounded-full hover:shadow-lg transition-all"
            >
              <Map className="mr-2 h-5 w-5" />
              Explore the Journey
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/40 hover:bg-white/10 text-white font-medium rounded-full transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
