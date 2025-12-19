// Campfire Devotions - Evening devotionals inspired by nights under the stars
export interface CampfireDevotional {
  id: string;
  title: string;
  theme: string;
  shortDescription: string;
  fullContent: string;
  reflection: string;
  prayer: string;
  bibleVerse: {
    text: string;
    reference: string;
  };
  journeyConnection?: string; // Optional link to a journey stop
  category: 'faith' | 'hope' | 'love' | 'peace' | 'courage' | 'trust' | 'healing' | 'purpose';
}

export const campfireDevotions: CampfireDevotional[] = [
  {
    id: 'light-in-the-darkness',
    title: 'Light in the Darkness',
    theme: 'Finding Hope',
    shortDescription: 'When the night is darkest, the stars shine brightest.',
    fullContent: `There's something magical about building a campfire in the wilderness. You gather the wood, arrange the kindling, and with a single spark, light pushes back the darkness. The flames flicker and dance, casting shadows that remind you just how dark it was before.

I remember a night on the Nullarbor when my campfire was the only light for hundreds of kilometers. No street lights, no house lights, just my small fire against the vast darkness of the Australian outback. In that moment, I understood something about God's light.

The world can feel impossibly dark sometimes. Grief, fear, uncertainty - they press in from every side. But here's the beautiful truth: you don't need a lot of light to make a difference. A single candle can be seen for miles on a dark night. A single flame of faith can pierce through the deepest despair.

Jesus said, "I am the light of the world." He didn't say the light of the comfortable places, or the light of the easy times. He's the light of the WORLD - including every dark corner, every midnight hour, every shadowed valley you'll ever walk through.`,
    reflection: 'Think about a time when you felt surrounded by darkness. What small light guided you through? How might you be a light for someone else today?',
    prayer: 'Lord Jesus, You are the Light of the World. When darkness surrounds me, help me to remember that Your light cannot be overcome. Use me as a light in someone else's darkness today. Give me the courage to shine, even when I feel small and the night feels vast. Amen.',
    bibleVerse: {
      text: 'The light shines in the darkness, and the darkness has not overcome it.',
      reference: 'John 1:5'
    },
    journeyConnection: 'camping-under-stars',
    category: 'hope'
  },
  {
    id: 'still-waters',
    title: 'Still Waters',
    theme: 'Finding Peace',
    shortDescription: 'Learning to be still in a world that never stops moving.',
    fullContent: `The Great Australian Bight isn't always still. Most days, the waves crash against those ancient cliffs with tremendous force - a constant reminder of the ocean's power. But I caught it once on a calm morning, when the water stretched like glass to the horizon.

In that moment of stillness, I could see depths that the churning waves normally hide. Shades of blue I didn't know existed. The clarity was breathtaking.

Our lives are like that ocean. We're constantly churning - busy schedules, endless notifications, racing thoughts that never settle. We've normalized the chaos, forgotten what stillness feels like. And in all that noise, we miss the depths.

God invites us to be still. Not because stillness is easy (it's terrifyingly difficult for most of us), but because stillness is where we meet Him. In the quiet moments, when the waves of our lives settle, we can finally see clearly. We can hear His voice. We can rest.

"Be still and know that I am God." It's not just a suggestion. It's an invitation to a different way of living.`,
    reflection: 'When was the last time you were truly still - no phone, no distractions, just you and God? What would it take to create more moments of stillness in your life?',
    prayer: 'Father, I confess that I'm often too busy to be still. The waves of life keep crashing, and I've forgotten how to rest. Teach me to be still. Help me to trust You enough to stop striving. In the stillness, reveal Yourself to me in new ways. Amen.',
    bibleVerse: {
      text: 'He leads me beside still waters, he restores my soul.',
      reference: 'Psalm 23:2-3'
    },
    journeyConnection: 'great-australian-bight',
    category: 'peace'
  },
  {
    id: 'the-long-road',
    title: 'The Long Road',
    theme: 'Perseverance',
    shortDescription: 'When the journey seems endless, keep putting one foot in front of the other.',
    fullContent: `The Nullarbor Plain has a stretch of road that runs perfectly straight for 146.6 kilometers. That's nearly 100 miles of unchanging horizon. At highway speeds, it takes over an hour and a half - and the view never changes. Same flat earth. Same sparse scrub. Same endless sky.

Somewhere around kilometer 80, I felt a strange despair creeping in. The destination felt impossibly far. The monotony was overwhelming. I started to wonder if I'd ever arrive.

Life has long stretches like this. Seasons where nothing seems to change. Prayers that feel unanswered. Goals that seem no closer despite your efforts. The spiritual wilderness can feel just as endless as the Nullarbor.

But here's what I learned on that long, straight road: the destination IS coming, even when you can't see it. Every kilometer counts. Every day of faithfulness matters. And suddenly, after what feels like forever, the road curves. The landscape changes. And you realize you've been making progress all along.

Don't give up on the long roads. God is doing something in the journey itself.`,
    reflection: 'What "long road" are you on right now? How can you find meaning in the journey, even when the destination feels far away?',
    prayer: 'Lord, I'm tired. This road feels endless, and I can't see the destination. Give me strength for the next kilometer. Help me trust that You're at work even when nothing seems to change. Let me find You in the journey, not just the arrival. Amen.',
    bibleVerse: {
      text: 'Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.',
      reference: 'Galatians 6:9'
    },
    journeyConnection: 'nullarbor-desert',
    category: 'courage'
  },
  {
    id: 'roadhouse-grace',
    title: 'Roadhouse Grace',
    theme: 'God\'s Provision',
    shortDescription: 'Finding unexpected grace in unlikely places.',
    fullContent: `Roadhouses in the outback are strange places. They're not pretty - dusty buildings with faded signs, surrounded by red dirt and not much else. But when you've been driving for hours through emptiness, they're the most beautiful sight in the world.

Cold water. Hot food. Fuel for the car. A chance to stretch your legs and chat with fellow travelers. These simple blessings become extraordinary when you've experienced the desert.

I think we often miss God's grace because we're looking for something more impressive. We want the spectacular miracle, the dramatic intervention. Meanwhile, God is providing roadhouse grace - small mercies scattered along our journey. A kind word when we needed it. An unexpected provision. A moment of rest.

The Israelites wandered for forty years in the wilderness, and God provided manna - simple bread that appeared each morning. It wasn't a feast. It wasn't exciting. But it was enough. It was faithful. It kept them alive for another day.

Look for the roadhouses in your journey. Thank God for the ordinary graces.`,
    reflection: 'What "roadhouse grace" has God provided for you recently? Make a list of small mercies you might have overlooked.',
    prayer: 'Thank You, Father, for Your faithful provision. Forgive me for overlooking the everyday graces You scatter along my path. Open my eyes to see Your hand in the small things - the kind word, the unexpected help, the simple blessings that sustain me on this journey. Amen.',
    bibleVerse: {
      text: 'And my God will meet all your needs according to the riches of his glory in Christ Jesus.',
      reference: 'Philippians 4:19'
    },
    journeyConnection: 'nullarbor-roadhouse',
    category: 'trust'
  },
  {
    id: 'running-home',
    title: 'Running Home',
    theme: 'God\'s Welcome',
    shortDescription: 'The Father is already running to meet you.',
    fullContent: `The most remarkable part of the Prodigal Son story isn't the son's decision to return home. It's what the father does next.

"But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him."

The father was watching. Waiting. And when he saw his son approaching from far off, he did something shocking for a dignified man of that culture: he ran. He gathered up his robes and sprinted toward his wayward child.

I spent a lot of my life running - running from God, from pain, from my past. I thought that if I ever turned around, I'd have a long, shameful walk back. I'd have to earn my way into His presence. Prove myself worthy.

But the Gospel tells a different story. When we turn toward God, we don't walk to Him - He runs to us. Before we can even form our apology, we're wrapped in His embrace. Before we can explain our failures, we're dressed in robes of righteousness.

You don't have to run away anymore. And you don't have to run all the way home alone. Start walking toward the Father, and watch how fast He comes to meet you.`,
    reflection: 'What has kept you from running to God? What lies have you believed about His welcome?',
    prayer: 'Father, I have wandered far. I\'ve been afraid to come home, afraid of what You might say. But Your Word tells me You\'re already running to meet me. Here I am, turning toward You. Wrap me in Your embrace. Welcome me home. Amen.',
    bibleVerse: {
      text: 'But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him.',
      reference: 'Luke 15:20'
    },
    journeyConnection: 'port-lincoln-destination',
    category: 'love'
  },
  {
    id: 'leaving-the-familiar',
    title: 'Leaving the Familiar',
    theme: 'Faith and Risk',
    shortDescription: 'Sometimes faith means leaving what you know behind.',
    fullContent: `Perth is my city. I know its streets, its rhythms, its comfortable predictability. Standing at the edge of that 2,400-kilometer journey, looking east into the unknown, I felt the pull of the familiar behind me and the call of the wilderness ahead.

Every significant journey of faith requires us to leave something behind. Abraham left his homeland. Moses left Pharaoh's palace. Peter left his nets. The disciples left their families and careers. Leaving isn't optional - it's part of the calling.

What are you being asked to leave? Maybe it's not a physical place. Maybe it's a comfortable but unfulfilling life. A limiting belief. A relationship that's holding you back. A version of yourself that no longer serves God's purposes.

Leaving is hard. The familiar is comfortable, even when it's killing us. But here's what I've learned: what's waiting ahead is worth what we leave behind. The wilderness might be scary, but it's where transformation happens. The road might be long, but it leads somewhere beautiful.

You can't embrace what God has for you with hands full of what you're clinging to. Sometimes faith means opening your grip, stepping into the car, and driving east into the unknown.`,
    reflection: 'What is God asking you to leave behind? What fears are keeping you tethered to the familiar?',
    prayer: 'Lord, I hear You calling me forward, but I'm afraid to let go. The familiar feels safe, even when it's not where You want me. Give me courage to leave what I know for what You have prepared. Help me trust that Your plans are better than my comfort. Amen.',
    bibleVerse: {
      text: 'The Lord had said to Abram, "Go from your country, your people and your father\'s household to the land I will show you."',
      reference: 'Genesis 12:1'
    },
    journeyConnection: 'perth-departure',
    category: 'faith'
  }
];

export const getCampfireDevotionalById = (id: string): CampfireDevotional | undefined => {
  return campfireDevotions.find(devotion => devotion.id === id);
};

export const getDevotionsByCategory = (category: CampfireDevotional['category']): CampfireDevotional[] => {
  return campfireDevotions.filter(devotion => devotion.category === category);
};
