import React from 'react'
import Link from 'next/link'
import { BookOpen, ArrowRight, Heart, Users, Crown, Sparkles } from 'lucide-react'

export const metadata = {
  title: 'Bible Studies - Discover Jesus',
  description: 'Deep dives into Scripture focused on our relationship with Jesus, the Son of God. Explore Bible studies designed to help you know Him more.',
}

// Placeholder studies - will come from Sanity CMS
const bibleStudies = [
  {
    id: 'who-is-jesus',
    title: 'Who is Jesus?',
    description: 'Exploring the identity of Jesus through the Gospels. Who did He claim to be? What did He do? Why does it matter?',
    lessons: 8,
    icon: Crown,
    color: 'from-sky-500 to-sky-600',
  },
  {
    id: 'running-to-the-father',
    title: 'Running to the Father',
    description: 'The story of the Prodigal Son and what it teaches us about God\'s relentless love and welcome.',
    lessons: 6,
    icon: Heart,
    color: 'from-campfire-500 to-campfire-600',
  },
  {
    id: 'following-jesus',
    title: 'Following Jesus',
    description: 'What does it mean to be a disciple? Exploring the call to follow Jesus and what it costs.',
    lessons: 10,
    icon: Users,
    color: 'from-bush-500 to-bush-600',
  },
  {
    id: 'grace-journey',
    title: 'The Grace Journey',
    description: 'Understanding grace — the unearned, undeserved gift that changes everything.',
    lessons: 7,
    icon: Sparkles,
    color: 'from-ocean-500 to-ocean-600',
  },
]

export default function BibleStudyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-b from-sky-500 to-sky-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8">
            <BookOpen className="h-10 w-10 text-white" />
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Bible Studies
          </h1>
          
          <p className="text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed">
            Deep dives into Scripture focused on knowing Jesus — 
            the Son of God who invites us to run into His arms.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white dark:bg-night-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-sky-50 dark:bg-sky-900/30 rounded-2xl p-8 border border-sky-100 dark:border-sky-800/50">
            <h2 className="font-serif text-2xl font-bold text-gray-800 dark:text-white mb-4">
              About These Studies
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Running to God is all about relationship — specifically, our relationship with Jesus, 
              the Son of God. These Bible studies are designed to help you:
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-sky-500 mt-1">•</span>
                Understand who Jesus really is according to Scripture
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-500 mt-1">•</span>
                Experience His love, grace, and invitation personally
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-500 mt-1">•</span>
                Learn what it means to follow Him daily
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-500 mt-1">•</span>
                Discover the joy of running TO God, not from Him
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Studies Grid */}
      <section className="py-16 bg-gray-50 dark:bg-night-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-gray-800 dark:text-white mb-12 text-center">
            Available Studies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bibleStudies.map((study) => (
              <Link
                key={study.id}
                href={`/bible-study/${study.id}`}
                className="group flex bg-white dark:bg-night-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover border border-gray-100 dark:border-gray-700/50"
              >
                <div className={`w-24 flex-shrink-0 bg-gradient-to-br ${study.color} flex items-center justify-center`}>
                  <study.icon className="h-10 w-10 text-white" />
                </div>
                <div className="p-6 flex-1">
                  <h3 className="font-serif text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">
                    {study.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {study.lessons} lessons
                    </span>
                    <span className="inline-flex items-center text-sky-600 dark:text-sky-400 text-sm font-medium">
                      Start study
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Note about theology */}
      <section className="py-16 bg-white dark:bg-night-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            <strong>A note on theology:</strong> While Running to God is not officially affiliated with any denomination, 
            our teaching aligns with Seventh-day Adventist theology. We believe in the authority of Scripture, 
            salvation by grace through faith in Jesus, and the soon return of our Lord.
          </p>
        </div>
      </section>
    </div>
  )
}
