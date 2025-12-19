// Journey stops from the Perth to Port Lincoln road trip
export interface JourneyStop {
  id: string;
  title: string;
  location: string;
  distance: string; // from Perth
  type: 'city' | 'desert' | 'beach' | 'roadhouse' | 'camp' | 'destination';
  shortDescription: string;
  fullDescription: string;
  spiritualLesson: string;
  bibleVerse: {
    text: string;
    reference: string;
  };
  imageDescription: string; // Placeholder for when photos are added
}

export const journeyStops: JourneyStop[] = [
  {
    id: 'perth-departure',
    title: 'The Departure',
    location: 'Perth, Western Australia',
    distance: '0 km',
    type: 'city',
    shortDescription: 'Where every journey begins - leaving the familiar behind.',
    fullDescription: `Perth - the most isolated capital city in the world. Standing on the edge of a continent, looking east across thousands of kilometers of wilderness. This is where my journey began - not just a road trip, but a pilgrimage of the soul.

Leaving Perth meant leaving comfort, routine, and everything familiar. The city lights faded in my rearview mirror as the road stretched endlessly toward the rising sun. Sometimes the hardest part of any journey is simply choosing to begin.`,
    spiritualLesson: 'Every spiritual journey begins with a choice to leave our comfort zone. God called Abraham to leave everything familiar. Sometimes we have to step into the unknown before we can find what we\'re truly seeking.',
    bibleVerse: {
      text: 'The Lord had said to Abram, "Go from your country, your people and your father\'s household to the land I will show you."',
      reference: 'Genesis 12:1'
    },
    imageDescription: 'Perth city skyline at dawn, with the open road stretching east'
  },
  {
    id: 'norseman-gateway',
    title: 'The Gateway',
    location: 'Norseman, WA',
    distance: '725 km',
    type: 'roadhouse',
    shortDescription: 'The last town before the Nullarbor - point of no return.',
    fullDescription: `Norseman is the last town before you commit to crossing the Nullarbor Plain. Here, you fill up with fuel, check your tyres, and mentally prepare for what lies ahead. The sign says "No Services for 187 km" - and that's just the beginning.

This small mining town sits at the crossroads of decision. Turn back to civilization, or press forward into the wilderness. I stood at the service station, watching other travelers make the same choice. Some turned around. But something was calling me forward.`,
    spiritualLesson: 'There are moments in our spiritual lives when we reach a point of no return. We can\'t go back to who we were before. God is calling us forward into the unknown, and faith means trusting Him even when we can\'t see the road ahead.',
    bibleVerse: {
      text: 'Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.',
      reference: 'Proverbs 3:5-6'
    },
    imageDescription: 'The Norseman welcome sign with the vast desert stretching behind'
  },
  {
    id: 'nullarbor-desert',
    title: 'The Wilderness',
    location: 'Nullarbor Plain',
    distance: '1,000 km',
    type: 'desert',
    shortDescription: 'A treeless plain where heaven meets earth.',
    fullDescription: `"Nullarbor" means "no trees" in Latin, and the name doesn't lie. For hundreds of kilometers, there's nothing but flat, red earth meeting an impossibly big sky. The road stretches in a perfect straight line to the horizon. You can see for 50 kilometers in every direction - and see absolutely nothing.

In this emptiness, something strange happens. The noise in your head slowly fades. The constant chatter of modern life, the worries, the to-do lists - they all seem so small out here. In the silence of the Nullarbor, you can finally hear yourself think. And if you're willing to listen, you can hear something more.`,
    spiritualLesson: 'Jesus often withdrew to lonely places to pray. There\'s something about the wilderness that strips away distractions and brings us face to face with God. Sometimes we need emptiness to be filled with His presence.',
    bibleVerse: {
      text: 'But Jesus often withdrew to lonely places and prayed.',
      reference: 'Luke 5:16'
    },
    imageDescription: 'The endless Nullarbor Plain stretching to the horizon'
  },
  {
    id: 'great-australian-bight',
    title: 'The Edge of the World',
    location: 'Great Australian Bight',
    distance: '1,200 km',
    type: 'beach',
    shortDescription: 'Where the land meets the Southern Ocean in spectacular cliffs.',
    fullDescription: `Suddenly, the flat desert ends in sheer cliffs dropping hundreds of meters straight into the churning Southern Ocean. The Great Australian Bight is one of the most dramatic coastlines on Earth - and one of the most remote.

I stood at the lookout point, watching waves crash against the base of the cliffs. The ocean stretched to Antarctica, nothing but water for thousands of kilometers. In that moment, I felt both incredibly small and strangely significant. If God made all of this - the thundering waves, the ancient cliffs, the endless sky - then surely He knows me too.`,
    spiritualLesson: 'The vastness of creation reminds us of our Creator\'s power and majesty. Yet the same God who crafted the oceans and carved the cliffs knows every hair on our head. We are small, but we are loved.',
    bibleVerse: {
      text: 'When I consider your heavens, the work of your fingers, the moon and the stars, which you have set in place, what is mankind that you are mindful of them?',
      reference: 'Psalm 8:3-4'
    },
    imageDescription: 'The dramatic cliffs of the Great Australian Bight'
  },
  {
    id: 'nullarbor-roadhouse',
    title: 'The Oasis',
    location: 'Nullarbor Roadhouse',
    distance: '1,300 km',
    type: 'roadhouse',
    shortDescription: 'A lonely outpost serving weary travelers in the middle of nowhere.',
    fullDescription: `Roadhouses in the Nullarbor are more than service stations - they're lifelines. After hours of driving through nothing, the sight of a roadhouse feels like finding water in the desert. Cold drinks, hot food, fuel for the car and fuel for the soul.

I met people from all over the world at these roadhouses. Backpackers, grey nomads, truck drivers, and fellow seekers. We'd share stories over coffee, strangers connected by the shared experience of crossing this vast land. In those brief encounters, I glimpsed something beautiful about human connection.`,
    spiritualLesson: 'God provides oases in our wilderness journeys. Sometimes it\'s a kind word from a stranger, an unexpected blessing, or a moment of rest when we need it most. He is faithful to sustain us.',
    bibleVerse: {
      text: 'And my God will meet all your needs according to the riches of his glory in Christ Jesus.',
      reference: 'Philippians 4:19'
    },
    imageDescription: 'A roadhouse in the middle of the Nullarbor at sunset'
  },
  {
    id: 'camping-under-stars',
    title: 'Under the Stars',
    location: 'Rest Area, SA Border',
    distance: '1,500 km',
    type: 'camp',
    shortDescription: 'A night of camping that changed my perspective forever.',
    fullDescription: `I pulled into a rest area as the sun was setting, painting the desert in shades of orange and purple. That night, I camped under a sky I\'ll never forget. With no light pollution for hundreds of kilometers, the Milky Way blazed across the heavens like a river of light.

I lay on my swag, wrapped in the cool desert air, staring up at a billion stars. The universe felt both impossibly vast and strangely intimate. Somewhere between the Southern Cross and the horizon, my problems seemed to shrink. What had felt so overwhelming in the city became small against the backdrop of eternity.`,
    spiritualLesson: 'The heavens declare the glory of God. When we step away from artificial lights and distractions, we can see both the majesty of God\'s creation and our place in His eternal story.',
    bibleVerse: {
      text: 'The heavens declare the glory of God; the skies proclaim the work of his hands.',
      reference: 'Psalm 19:1'
    },
    imageDescription: 'The Milky Way stretching across the night sky over the outback'
  },
  {
    id: 'ceduna-coast',
    title: 'The Turning Point',
    location: 'Ceduna, South Australia',
    distance: '1,750 km',
    type: 'city',
    shortDescription: 'Back to civilization, but changed by the journey.',
    fullDescription: `Ceduna marks the end of the Nullarbor crossing. Suddenly there are trees again, buildings, people going about their daily lives. It felt strange to be back in civilization after days in the wilderness.

I sat at a cafe by the marina, watching fishing boats bob in the harbor. The ocean here was calmer than the Bight - protected, gentle. I realized I felt different too. The restlessness that had driven me to start this journey had quieted. Something had shifted in the silence of the desert.`,
    spiritualLesson: 'Wilderness experiences change us. When we return to normal life, we bring back something precious - a deeper awareness of God, a clearer sense of purpose, and a heart that has learned to be still.',
    bibleVerse: {
      text: 'Be still, and know that I am God.',
      reference: 'Psalm 46:10'
    },
    imageDescription: 'Ceduna marina at sunset'
  },
  {
    id: 'port-lincoln-destination',
    title: 'The Destination',
    location: 'Port Lincoln, South Australia',
    distance: '2,400 km',
    type: 'destination',
    shortDescription: 'Journey\'s end - but really, a new beginning.',
    fullDescription: `Port Lincoln sits at the southern tip of Eyre Peninsula, a beautiful fishing town known for its tuna and its stunning Boston Bay. After 2,400 kilometers of road, desert, and coast, I had arrived.

But standing at the water\'s edge, I realized something important: the destination was never really the point. The journey itself had been the destination. Every kilometer, every roadhouse conversation, every star-filled night - they had all led me here, but they had also transformed me along the way.

I understood now why I had felt called to make this trip. I had been running - running from pain, from confusion, from questions I didn\'t want to face. But somewhere in the desert, I had stopped running away and started running toward. Toward healing. Toward truth. Toward God.`,
    spiritualLesson: 'Sometimes God calls us on journeys not to get us somewhere new, but to transform us along the way. The destination matters less than who we become on the road. And the beautiful truth is that when we run to God, He is already running to meet us.',
    bibleVerse: {
      text: 'But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him.',
      reference: 'Luke 15:20'
    },
    imageDescription: 'Port Lincoln harbor at dawn'
  }
];

export const getJourneyStopById = (id: string): JourneyStop | undefined => {
  return journeyStops.find(stop => stop.id === id);
};

export const getStopsByType = (type: JourneyStop['type']): JourneyStop[] => {
  return journeyStops.filter(stop => stop.type === type);
};
