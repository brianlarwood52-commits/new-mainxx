import React from 'react'
import Link from 'next/link'
import { ArrowLeft, MapPin, Camera, Info, ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react'
import { journeyStops } from '@/data/journeyStops'

// Generate static params for all journey stops
export function generateStaticParams() {
  return journeyStops.map((stop) => ({
    slug: stop.slug,
  }))
}

// Interesting facts for each location
const locationFacts: Record<string, {
  facts: string[]
  didYouKnow?: string
  wildlife?: string[]
  bestTime?: string
  warning?: string
}> = {
  'swan-view': {
    facts: [
      'Swan View is located in the Perth Hills, about 24km east of Perth CBD',
      'The suburb was named after the view of the Swan River valley visible from the area',
      'Home to the historic Swan View Tunnel, a heritage-listed railway tunnel built in 1896',
      'The John Forrest National Park, WA\'s first national park (1898), is nearby',
    ],
    didYouKnow: 'The original railway line through Swan View was one of the steepest in Australia, climbing 300 metres in just 18 kilometres.',
    wildlife: ['Kangaroos', 'Kookaburras', 'Black cockatoos', 'Echidnas'],
  },
  'toodyay': {
    facts: [
      'Toodyay is one of Western Australia\'s oldest inland towns, established in 1836',
      'The name comes from the Noongar word "Duidgee" meaning "place of plenty"',
      'The town was devastated by bushfires in 2009, destroying 38 homes',
      'Home to the famous Toodyay Moondyne Festival celebrating bushranger Moondyne Joe',
    ],
    didYouKnow: 'Moondyne Joe escaped from Toodyay jail so many times that a special escape-proof cell was built—which he also escaped from!',
    wildlife: ['Wedge-tailed eagles', 'Goannas', 'Western grey kangaroos'],
    bestTime: 'April-May for the Moondyne Festival',
  },
  'dowerin': {
    facts: [
      'Dowerin hosts the annual Dowerin GWN7 Machinery Field Days, one of Australia\'s largest agricultural shows',
      'The town was named after "Daren" the Aboriginal name for a nearby hill',
      'Population of around 500 people, but the Field Days attract over 25,000 visitors',
      'Established in 1897 during the wheat boom',
    ],
    didYouKnow: 'The Dowerin Field Days have been running since 1965 and showcase over 600 exhibitors across 100 hectares.',
    bestTime: 'August for the Field Days',
  },
  'koorda': {
    facts: [
      'Koorda means "tomorrow" in the local Noongar language',
      'The town is known for its wildflowers in spring',
      'Population of approximately 400 people',
      'Major industries include wheat, sheep, and canola farming',
    ],
    didYouKnow: 'Koorda is part of the "Wheatbelt Way" tourist drive showcasing the region\'s agricultural heritage.',
    bestTime: 'September-October for wildflower season',
    wildlife: ['Malleefowl', 'Thorny devils', 'Honey possums'],
  },
  'bencubbin': {
    facts: [
      'Home to the Bencubbin Gravity Discovery Centre and Observatory',
      'The name comes from the Aboriginal word meaning "place of many trees"',
      'Famous for its extremely dark skies, perfect for stargazing',
      'The town celebrates the annual Bencubbin Light Show',
    ],
    didYouKnow: 'Bencubbin\'s skies are so dark it\'s one of the best places in the world to observe the Milky Way with the naked eye.',
    bestTime: 'New moon periods for stargazing',
  },
  'mukinbudin': {
    facts: [
      'The name means "place of the white gums" in Noongar',
      'Known for producing some of Australia\'s finest wheat',
      'Features unique rock formations including Weira Rock',
      'The town has maintained authentic country charm since 1924',
    ],
    didYouKnow: 'Mukinbudin receives only about 300mm of rainfall per year, yet produces significant grain harvests.',
    wildlife: ['Pink cockatoos', 'Emus', 'Wedge-tailed eagles'],
  },
  'boondi-rock': {
    facts: [
      'Boondi Rock is an ancient granite outcrop estimated to be over 2.6 billion years old',
      'The rock features a natural water catchment system used by early settlers',
      'Aboriginal people used the site for thousands of years',
      'The surrounding area is home to rare and endangered wildlife',
    ],
    didYouKnow: 'The granite outcrops of this region are some of the oldest exposed rocks on Earth, predating most life forms.',
    wildlife: ['Western spiny-tailed skinks', 'Numbats', 'Pygmy possums'],
  },
  'coolgardie': {
    facts: [
      'Gold was discovered here in 1892, sparking one of Australia\'s biggest gold rushes',
      'At its peak, Coolgardie had a population of 15,000 and 23 hotels',
      'The town now has a population of around 800',
      'Home to the famous Coolgardie Safe, an evaporative cooler invented here',
    ],
    didYouKnow: 'Coolgardie was once the third-largest town in Western Australia and had the first stock exchange in WA.',
    bestTime: 'Autumn and spring for comfortable temperatures',
  },
  'norseman': {
    facts: [
      'Named after a horse called "Norseman" whose owner noticed it pawing at gold-rich ground in 1894',
      'Known as "The Gateway to the Nullarbor"',
      'Last reliable services before the 1,200km Nullarbor crossing',
      'Home to the Beacon Hill Lookout with panoramic views',
    ],
    didYouKnow: 'A statue of the horse Norseman stands in the main street, commemorating the accidental gold discovery.',
    warning: 'Last major town for fuel and supplies before crossing the Nullarbor. Stock up!',
  },
  'caiguna-roadhouse': {
    facts: [
      'Marks the start of the famous 90 Mile Straight—the longest straight road in Australia',
      'The straight stretches 146.6 kilometres without a single curve',
      'The roadhouse serves as a vital rest stop for Nullarbor travellers',
      'Named after an Aboriginal word meaning "place of many wattle trees"',
    ],
    didYouKnow: 'The 90 Mile Straight is certified by Guinness World Records as Australia\'s longest straight road.',
    warning: 'Driver fatigue is a serious risk on the straight. Take regular breaks!',
  },
  'madura-roadhouse': {
    facts: [
      'Situated at the base of the dramatic Madura Pass',
      'The pass descends 90 metres from the Nullarbor Plain to the coastal plain',
      'Once a staging post for horse teams in the 1890s',
      'Famous for its camel rides and friendly resident camels',
    ],
    didYouKnow: 'Madura was originally a horse staging post on the old telegraph line route across the Nullarbor.',
    wildlife: ['Feral camels', 'Wedge-tailed eagles', 'Southern right whales (seasonal)'],
  },
  'eucla': {
    facts: [
      'Home to the historic Eucla Telegraph Station, built in 1877',
      'The old telegraph station is slowly being consumed by sand dunes',
      'Located just 12km from the SA border',
      'Once the busiest telegraph station in Australia',
    ],
    didYouKnow: 'The Eucla Telegraph Station transmitted millions of words during its operation, connecting Perth to Adelaide.',
    bestTime: 'Early morning to see the sand dunes at their most photogenic',
  },
  'border-village': {
    facts: [
      'Marks the border between Western Australia and South Australia',
      'Clocks change by 1.5 hours when crossing (sometimes 2.5 during daylight saving)',
      'A quarantine checkpoint prevents fruit, vegetables, and honey crossing',
      'The border was surveyed in 1921',
    ],
    didYouKnow: 'The time difference at Border Village is unique—WA doesn\'t observe daylight saving, creating unusual time jumps.',
    warning: 'Quarantine laws are strictly enforced. Dispose of all prohibited items before crossing.',
  },
  'nullarbor-roadhouse': {
    facts: [
      'Located at the heart of the Nullarbor Plain',
      'The name "Nullarbor" comes from Latin meaning "no trees"',
      'The roadhouse is one of the most isolated service stations in Australia',
      'Grey nomads and road trains are regular visitors',
    ],
    didYouKnow: 'The Nullarbor Plain is the world\'s largest single piece of limestone, covering over 200,000 square kilometres.',
    wildlife: ['Wombats', 'Wedge-tailed eagles', 'Dingoes', 'Saltbush-dwelling lizards'],
  },
  'mexican-hat': {
    facts: [
      'Named for a rock formation that resembles a sombrero',
      'One of the most spectacular viewpoints on the Bunda Cliffs',
      'The cliffs here drop 100 metres sheer into the Southern Ocean',
      'Prime whale watching location from May to October',
    ],
    didYouKnow: 'The Bunda Cliffs stretch for over 200 kilometres and are some of the longest uninterrupted sea cliffs in the world.',
    wildlife: ['Southern right whales', 'Sea lions', 'Dolphins', 'Various seabirds'],
    bestTime: 'June-September for whale watching',
  },
  'ceduna': {
    facts: [
      'Known as the "Gateway to the Nullarbor" from the east',
      'Famous for its oysters from nearby Denial Bay',
      'Home to the annual Australian Oysterfest',
      'Aboriginal name meaning "a place to sit down and rest"',
    ],
    didYouKnow: 'Ceduna is one of Australia\'s most important grain export ports, handling millions of tonnes annually.',
    bestTime: 'September for the Oysterfest',
    wildlife: ['Australian sea lions at Point Labatt', 'Great white sharks (cage diving available)'],
  },
  'port-lincoln': {
    facts: [
      'Home to Australia\'s largest commercial fishing fleet',
      'Known as the "Seafood Capital of Australia"',
      'Has a larger marina than Sydney Harbour',
      'Cage diving with great white sharks is a major tourist attraction',
    ],
    didYouKnow: 'Port Lincoln\'s tuna industry was so successful that it produced more millionaires per capita than anywhere else in Australia.',
    wildlife: ['Great white sharks', 'Australian sea lions', 'Dolphins', 'Bluefin tuna'],
    bestTime: 'January for Tunarama Festival',
  },
  'coffin-bay': {
    facts: [
      'World-renowned for its premium oysters',
      'Named by Matthew Flinders in 1802 after his friend Sir Isaac Coffin',
      'The national park features stunning coastal scenery',
      'Oyster farm tours are a popular attraction',
    ],
    didYouKnow: 'Coffin Bay oysters are considered among the finest in the world due to the pristine waters and unique growing conditions.',
    wildlife: ['Ospreys', 'White-bellied sea eagles', 'Dolphins'],
    bestTime: 'Year-round for fresh oysters',
  },
  'colton-bakehouse': {
    facts: [
      'Famous throughout South Australia for its award-winning pies and pastries',
      'A must-stop for anyone travelling the Eyre Peninsula',
      'Traditional country bakehouse established for decades',
      'Known for its massive vanilla slices and meat pies',
    ],
    didYouKnow: 'Colton Bakehouse has won numerous SA Bakery of the Year awards and attracts visitors from hundreds of kilometres away.',
    bestTime: 'Early morning for the freshest pastries',
  },
  'talia-caves': {
    facts: [
      'Spectacular sea caves carved by millions of years of wave action',
      'Features "The Tub" and "The Woolshed" caves',
      'The caves can be dangerous during rough seas and high tides',
      'Aboriginal people used the area for thousands of years',
    ],
    didYouKnow: 'The Woolshed Cave is so named because the sound of waves inside resembles the noise of a working woolshed.',
    warning: 'Check tide times before visiting. Caves can flood quickly during high tide.',
    bestTime: 'Low tide for safe exploration',
  },
  'venus-bay': {
    facts: [
      'Named by Matthew Flinders in 1802 during his circumnavigation of Australia',
      'Features pristine beaches with crystal-clear water',
      'The bay is protected from most ocean swells',
      'Popular for fishing, swimming, and camping',
    ],
    didYouKnow: 'Matthew Flinders observed the transit of Venus from this location, hence the name.',
    wildlife: ['Stingrays', 'Dolphins', 'Numerous fish species'],
    bestTime: 'Summer for swimming, year-round for fishing',
  },
  'penong': {
    facts: [
      'Known as the "Windmill Capital of Australia"',
      'Features a collection of over 100 historic windmills',
      'Gateway to Point Sinclair and Cactus Beach',
      'The windmills were essential for early settlers to access groundwater',
    ],
    didYouKnow: 'Penong\'s windmill museum preserves the history of water harvesting in one of Australia\'s driest regions.',
    bestTime: 'Any time—the windmills are always photogenic',
  },
  'cactus-beach': {
    facts: [
      'Considered one of the best surf breaks in Australia',
      'Features three main breaks: Cactus, Castles, and Caves',
      'A pilgrimage site for serious surfers worldwide',
      'Named for the cacti growing near the beach',
    ],
    didYouKnow: 'Cactus Beach has hosted numerous professional surfing events and is known for its powerful, barreling waves.',
    warning: 'The waves here are powerful and suitable only for experienced surfers. Sharks are present in the area.',
    bestTime: 'Autumn and winter for best swells',
  },
  'point-sinclair': {
    facts: [
      'One of Australia\'s most remote coastal communities',
      'Named after explorer John Sinclair',
      'Features dramatic cliffs and pristine waters',
      'A shack community with no mains power or water',
    ],
    didYouKnow: 'Point Sinclair residents live completely off-grid, using solar power and rainwater tanks.',
    wildlife: ['Whales', 'Sea lions', 'Dolphins', 'Ospreys'],
  },
  'port-le-hunte-jetty': {
    facts: [
      'Historic timber jetty built in the late 1800s',
      'Once used for shipping grain and supplies',
      'Now a popular fishing and photography location',
      'One of the most photographed jetties in South Australia',
    ],
    didYouKnow: 'The jetty sunsets here are legendary, with photographers travelling from across Australia to capture them.',
    bestTime: 'Sunset for spectacular photography',
  },
  'norseman-return': {
    facts: [
      'On the return journey, Norseman serves as the gateway south to Esperance',
      'The road to Esperance passes through pristine bushland',
      'This was a pivotal decision point—turn for home, or explore more',
      'The southern route adds 400km but reveals stunning coastal scenery',
    ],
    didYouKnow: 'The Norseman-Esperance road was once so rough it was known as the "Esperance Punisher."',
  },
  'esperance': {
    facts: [
      'Home to Lucky Bay, voted Australia\'s whitest beach',
      'Kangaroos regularly relax on the white sand beaches',
      'The Great Ocean Drive features 11 stunning beaches',
      'Named by French explorer Bruni d\'Entrecasteaux in 1792',
    ],
    didYouKnow: 'The turquoise waters of Esperance are so clear because the sand is pure silica quartz with no impurities.',
    wildlife: ['Beach-lounging kangaroos', 'Cape Barren geese', 'Sea lions', 'Dolphins'],
    bestTime: 'November-April for best beach weather',
  },
  'pink-lake': {
    facts: [
      'The lake appears bright pink due to algae and high salt concentration',
      'The colour is most vibrant in summer and from above',
      'Officially named Lake Hillier (though often confused with other pink lakes)',
      'The pink colour is caused by Dunaliella salina algae and halobacteria',
    ],
    didYouKnow: 'Unlike some other pink lakes, the water in Pink Lake near Esperance retains its colour even when collected in a container.',
    bestTime: 'Summer midday for most vibrant pink colour',
  },
  'israelite-bay': {
    facts: [
      'One of the most isolated places in Australia accessible by 4WD',
      'Home to a ruined 1877 telegraph station',
      'Named after the ship "Israelite" wrecked nearby in 1872',
      'The telegraph station was abandoned in 1927',
    ],
    didYouKnow: 'Israelite Bay was once a thriving telegraph and sandalwood export town, with over 100 residents. Today it\'s completely abandoned.',
    warning: '4WD only. Carry recovery gear, satellite communication, and extra supplies. No mobile phone coverage.',
    wildlife: ['Sea eagles', 'Malleefowl', 'Numbats', 'Humpback whales (seasonal)'],
  },
  'swan-view-return': {
    facts: [
      '6,859.5 kilometres completed',
      'The journey ended where it began—but everything had changed',
      'The Jeep had carried faithfully across the harshest terrain in Australia',
      'Some journeys change you forever',
    ],
    didYouKnow: 'The total driving time for this journey was approximately 80+ hours—not counting stops, exploration, and the time spent just... being.',
  },
}

export default function LocationPage({ params }: { params: { slug: string } }) {
  const slug = params.slug
  
  // Find the stop
  const stop = journeyStops.find(s => s.slug === slug)
  const facts = locationFacts[slug]
  
  // Find previous and next stops for navigation
  const currentIndex = journeyStops.findIndex(s => s.slug === slug)
  const prevStop = currentIndex > 0 ? journeyStops[currentIndex - 1] : null
  const nextStop = currentIndex < journeyStops.length - 1 ? journeyStops[currentIndex + 1] : null

  if (!stop) {
    return (
      <div className="min-h-screen bg-stone-950/80 backdrop-blur-sm flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-cinematic text-4xl text-dust-100 mb-4">LOCATION NOT FOUND</h1>
          <Link href="/journey" className="text-cyan-400 hover:text-cyan-300">
            Return to The Road
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-stone-950/80 backdrop-blur-sm">
      
      {/* Hero */}
      <section className="relative py-20 border-b border-stone-800">
        <div className="max-w-5xl mx-auto px-6">
          <Link href="/journey" className="inline-flex items-center gap-2 text-dust-500 hover:text-dust-300 transition-colors mb-8 font-mono text-sm">
            <ArrowLeft className="h-4 w-4" />
            BACK TO THE ROAD
          </Link>
          
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <p className="font-mono text-xs text-cyan-500 tracking-widest mb-3">
                KM {stop.km.toLocaleString()} • {stop.leg.toUpperCase()} LEG
              </p>
              <h1 className="font-cinematic text-5xl md:text-7xl text-dust-100 tracking-wider title-card">
                {stop.location.toUpperCase()}
              </h1>
              <p className="font-mono text-sm text-dust-500 tracking-wide mt-2">
                {stop.region}
              </p>
            </div>
            <div className="text-right">
              <p className="font-mono text-xs text-earth-600 tracking-widest">
                {stop.coordinates}
              </p>
            </div>
          </div>
          
          <p className="text-xl text-dust-300 font-serif max-w-3xl mt-6">
            {stop.description}
          </p>
          
          {stop.quote && (
            <blockquote className="mt-8 pl-4 border-l-2 border-cyan-600">
              <p className="font-serif italic text-dust-400 text-lg">
                {stop.quote}
              </p>
              <cite className="font-mono text-xs text-cyan-600 mt-2 block">
                — {stop.quoteRef}
              </cite>
            </blockquote>
          )}
        </div>
      </section>

      {/* Photo Gallery Placeholder */}
      <section className="py-16 border-b border-stone-800">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <Camera className="h-6 w-6 text-cyan-500" />
            <h2 className="font-cinematic text-2xl text-dust-100 tracking-wider">PHOTOS & VIDEOS</h2>
          </div>
          
          {/* Placeholder grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div 
                key={i}
                className="aspect-photo bg-stone-900/50 border border-stone-800 rounded-lg flex flex-col items-center justify-center text-dust-600"
              >
                <ImageIcon className="h-8 w-8 mb-2 opacity-50" />
                <p className="font-mono text-xs">Coming Soon</p>
              </div>
            ))}
          </div>
          
          <p className="text-center text-dust-600 font-serif mt-8 italic">
            Photos and videos from {stop.location} will be added soon...
          </p>
        </div>
      </section>

      {/* Interesting Facts */}
      {facts && (
        <section className="py-16 border-b border-stone-800">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-8">
              <Info className="h-6 w-6 text-earth-500" />
              <h2 className="font-cinematic text-2xl text-dust-100 tracking-wider">INTERESTING FACTS</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Facts list */}
              <div className="space-y-4">
                {facts.facts.map((fact, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="font-mono text-cyan-500 text-sm">{String(i + 1).padStart(2, '0')}</span>
                    <p className="text-dust-300 font-serif">{fact}</p>
                  </div>
                ))}
              </div>
              
              {/* Side content */}
              <div className="space-y-6">
                {facts.didYouKnow && (
                  <div className="bg-cyan-900/20 border border-cyan-800/30 rounded-lg p-6">
                    <p className="font-mono text-xs text-cyan-400 tracking-widest mb-3">DID YOU KNOW?</p>
                    <p className="text-dust-200 font-serif">{facts.didYouKnow}</p>
                  </div>
                )}
                
                {facts.wildlife && (
                  <div className="bg-stone-900/50 border border-stone-800 rounded-lg p-6">
                    <p className="font-mono text-xs text-earth-500 tracking-widest mb-3">WILDLIFE</p>
                    <div className="flex flex-wrap gap-2">
                      {facts.wildlife.map((animal, i) => (
                        <span key={i} className="px-3 py-1 bg-stone-800 rounded-full text-dust-400 font-mono text-xs">
                          {animal}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {facts.bestTime && (
                  <div className="bg-stone-900/50 border border-stone-800 rounded-lg p-6">
                    <p className="font-mono text-xs text-earth-500 tracking-widest mb-3">BEST TIME TO VISIT</p>
                    <p className="text-dust-300 font-serif">{facts.bestTime}</p>
                  </div>
                )}
                
                {facts.warning && (
                  <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-6">
                    <p className="font-mono text-xs text-red-400 tracking-widest mb-3">⚠️ HEADS UP</p>
                    <p className="text-dust-300 font-serif">{facts.warning}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* My Story placeholder */}
      <section className="py-16 border-b border-stone-800">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="h-6 w-6 text-campfire-500" />
            <h2 className="font-cinematic text-2xl text-dust-100 tracking-wider">MY STORY HERE</h2>
          </div>
          
          <div className="bg-stone-900/30 border border-stone-800 border-dashed rounded-lg p-8 text-center">
            <p className="text-dust-500 font-serif italic">
              Personal stories, reflections, and journal entries from {stop.location} coming soon...
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-between items-center">
            {prevStop ? (
              <Link 
                href={`/journey/${prevStop.slug}`}
                className="group flex items-center gap-3 text-dust-500 hover:text-dust-200 transition-colors"
              >
                <ChevronLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <p className="font-mono text-xs text-dust-600">PREVIOUS STOP</p>
                  <p className="font-cinematic text-lg tracking-wider">{prevStop.location.toUpperCase()}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            
            {nextStop ? (
              <Link 
                href={`/journey/${nextStop.slug}`}
                className="group flex items-center gap-3 text-dust-500 hover:text-dust-200 transition-colors text-right"
              >
                <div>
                  <p className="font-mono text-xs text-dust-600">NEXT STOP</p>
                  <p className="font-cinematic text-lg tracking-wider">{nextStop.location.toUpperCase()}</p>
                </div>
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <Link 
                href="/journey"
                className="group flex items-center gap-3 text-cyan-500 hover:text-cyan-400 transition-colors"
              >
                <div className="text-right">
                  <p className="font-mono text-xs">JOURNEY COMPLETE</p>
                  <p className="font-cinematic text-lg tracking-wider">BACK TO THE ROAD</p>
                </div>
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
