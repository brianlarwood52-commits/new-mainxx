'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Map, Flame, BookOpen, Users, ChevronDown, Star, Tent, Waves, Mountain, Sun } from 'lucide-react';

const Home = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section - Road to the Cross */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient matching logo colors */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-400 via-sky-500 to-sky-600" />
        
        {/* Road perspective SVG */}
        <div className="absolute inset-0 flex items-end justify-center pb-0">
          <svg 
            viewBox="0 0 800 500" 
            className="w-full max-w-4xl opacity-30"
            preserveAspectRatio="xMidYMax meet"
          >
            {/* Hills */}
            <path d="M 0 350 Q 200 250 400 280 Q 600 310 800 350 L 800 500 L 0 500 Z" fill="#0369a1" opacity="0.8" />
            
            {/* Left perspective lines */}
            <line x1="400" y1="100" x2="0" y2="500" stroke="white" strokeWidth="3" opacity="0.6" />
            <line x1="400" y1="100" x2="80" y2="500" stroke="white" strokeWidth="2" opacity="0.4" />
            <line x1="400" y1="100" x2="160" y2="500" stroke="white" strokeWidth="1.5" opacity="0.3" />
            
            {/* Right perspective lines */}
            <line x1="400" y1="100" x2="800" y2="500" stroke="white" strokeWidth="3" opacity="0.6" />
            <line x1="400" y1="100" x2="720" y2="500" stroke="white" strokeWidth="2" opacity="0.4" />
            <line x1="400" y1="100" x2="640" y2="500" stroke="white" strokeWidth="1.5" opacity="0.3" />
            
            {/* Road */}
            <polygon points="320,500 400,100 480,500" fill="white" opacity="0.9" />
            
            {/* Road center dashes */}
            <line x1="400" y1="150" x2="400" y2="190" stroke="#0ea5e9" strokeWidth="6" />
            <line x1="400" y1="220" x2="400" y2="260" stroke="#0ea5e9" strokeWidth="7" />
            <line x1="400" y1="300" x2="400" y2="350" stroke="#0ea5e9" strokeWidth="8" />
            <line x1="400" y1="400" x2="400" y2="470" stroke="#0ea5e9" strokeWidth="10" />
          </svg>
        </div>

        {/* Cross at horizon */}
        <div className="absolute top-[12%] left-1/2 -translate-x-1/2 z-10">
          <svg width="80" height="120" viewBox="0 0 80 120" className="drop-shadow-2xl">
            <rect x="30" y="0" width="20" height="120" fill="white" rx="3" />
            <rect x="10" y="25" width="60" height="18" fill="white" rx="3" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-32 h-32 md:w-40 md:h-40 animate-float">
              <Image
                src="/running-to-god-logo.jpg"
                alt="Running to God"
                fill
                className="object-contain rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Running <span className="text-sky-200">to</span> God
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            A journey of faith through the Australian outback
          </p>
          
          <p className="text-lg text-sky-100/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            From Perth to Port Lincoln and back - discovering how to run from ourselves 
            and into the loving arms of God. Come explore the desert, the beach, 
            the campfire under the stars, and meet Jesus along the way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/journey"
              className="group inline-flex items-center px-8 py-4 bg-white/95 hover:bg-white text-sky-700 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Map className="mr-2 h-5 w-5" />
              Start the Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            <Link
              href="/my-story"
              className="group inline-flex items-center px-8 py-4 bg-transparent hover:bg-white/10 backdrop-blur-sm text-white font-medium rounded-full border-2 border-white/50 hover:border-white transition-all duration-300"
            >
              Read My Story
            </Link>
          </div>
        </div>

        {/* Scroll Down Arrow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <ChevronDown className="h-8 w-8 text-white/70 animate-bounce drop-shadow-lg" />
        </div>
      </section>

      {/* Journey Preview Section */}
      <section className="py-20 bg-white/95 dark:bg-night-900/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
              The Road Trip That Changed Everything
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              In 2024, I drove from Perth to Port Lincoln across the Nullarbor Plain. 
              Along the way, through the desert silence and ocean vastness, I discovered 
              what it truly means to run to God.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Mountain,
                title: "The Desert",
                description: "Finding God in the vast emptiness of the Nullarbor - where silence speaks louder than words.",
                color: "from-outback-400 to-outback-600"
              },
              {
                icon: Waves,
                title: "The Ocean",
                description: "The Great Australian Bight - standing at the edge of the world, glimpsing eternity.",
                color: "from-ocean-400 to-ocean-600"
              },
              {
                icon: Tent,
                title: "The Camps",
                description: "Bush tucker, campfires under the stars, and conversations with strangers who became friends.",
                color: "from-bush-400 to-bush-600"
              },
              {
                icon: Sun,
                title: "The Roadhouses",
                description: "Oases in the desert - rest stops that taught me about God's provision on life's journey.",
                color: "from-sand-400 to-sand-600"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="group text-center animate-slide-up" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-gradient-to-r from-sky-50/95 to-sky-100/95 dark:from-sky-900/30 dark:to-night-900/30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
              Resources for Your Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Whether you're at the beginning of your spiritual journey or deep in the wilderness, 
              we have something for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Campfire Devotions",
                description: "Evening devotionals inspired by nights under the stars. Gather around the fire and meet with God.",
                link: "/campfire-devotions",
                icon: Flame,
                gradient: "from-campfire-400 to-campfire-600"
              },
              {
                title: "Bible Study Guides",
                description: "Deep dives into Scripture with practical application for your spiritual journey.",
                link: "/bible-study",
                icon: BookOpen,
                gradient: "from-sky-400 to-sky-600"
              },
              {
                title: "The Journey Stories",
                description: "Read about each stop along the Perth to Port Lincoln road trip and the spiritual lessons learned.",
                link: "/journey",
                icon: Map,
                gradient: "from-bush-400 to-bush-600"
              }
            ].map((resource, index) => (
              <Link
                key={index}
                href={resource.link}
                className="group block bg-white/90 dark:bg-night-800/90 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-white/20 dark:border-gray-700/50"
              >
                <div className={`h-40 bg-gradient-to-br ${resource.gradient} flex items-center justify-center relative`}>
                  <resource.icon className="h-16 w-16 text-white/90" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-gray-800 dark:text-white mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {resource.description}
                  </p>
                  <div className="flex items-center text-sky-600 dark:text-sky-400 font-medium group-hover:text-sky-700 dark:group-hover:text-sky-300">
                    Explore
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Scripture Banner */}
      <section className="py-16 bg-sky-600/95 dark:bg-sky-900/95 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Star className="h-8 w-8 text-sky-200 mx-auto mb-6" />
          <blockquote className="font-serif text-2xl md:text-3xl text-white italic leading-relaxed mb-4">
            "Come to me, all you who are weary and burdened, and I will give you rest."
          </blockquote>
          <cite className="text-sky-200 text-lg">— Matthew 11:28</cite>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white/95 dark:bg-night-900/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
                Why "Running to God"?
              </h2>
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  We spend so much of our lives running - running from our past, from our pain, 
                  from the things we don't want to face. But what if instead of running <em>away</em>, 
                  we started running <em>toward</em>?
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  This ministry was born on the red dirt roads of Australia, somewhere between 
                  Perth and Port Lincoln. In the silence of the desert, under a canopy of a billion 
                  stars, I learned that God isn't found in the noise - He's found when we finally 
                  stop running from Him and start running to Him.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Whether you're spiritually curious, returning to faith, or deep in your walk with 
                  Jesus, this journey is for you. Come, let's run to God together.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/why-this-ministry"
                  className="inline-flex items-center px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-full transition-all duration-300"
                >
                  Learn More About This Ministry
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <Map className="h-16 w-16 mx-auto mb-4 opacity-80" />
                  <p className="text-lg opacity-90">Perth → Port Lincoln</p>
                  <p className="text-sm opacity-70">2,400+ km of discovery</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-campfire-500/20 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-sky-400/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-sky-700/95 via-sky-800/95 to-sky-900/95 dark:from-night-900/95 dark:to-night-950/95 backdrop-blur-md text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-sky-100 mb-8 leading-relaxed">
            The road is long, but you don't have to walk it alone. 
            Whether you want to explore the stories, dive into Bible study, 
            or simply need someone to pray with - we're here for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/journey" 
              className="inline-flex items-center px-8 py-4 bg-white text-sky-700 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Map className="mr-2 h-5 w-5" />
              Explore the Journey
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/50 hover:bg-white/10 hover:border-white text-white font-medium rounded-full transition-all duration-300"
            >
              <Users className="mr-2 h-5 w-5" />
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
