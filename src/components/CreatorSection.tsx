import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Mic, Laugh, ChevronRight } from 'lucide-react';

const creators = [
  {
    title: 'Independent Artists',
    icon: Music,
    tagline: 'Turn your music into a tangible fan experience.',
    features: [
      'Exclusive Music Releases',
      'Fan Interaction and Insights',
      'Personalized Artwork and Branding'
    ],
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=2070',
    link: 'https://superfan.minyvinyl.com'
  },
  {
    title: 'Podcasters',
    icon: Mic,
    tagline: 'Your stories. Now a collectible experience.',
    features: [
      'Exclusive Content Access',
      'Community Polls & Voice Notes',
      'Episode Highlights and Mini-Mixtapes'
    ],
    image: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&q=80&w=2070',
    link: 'https://podcast.minyvinyl.com'
  },
  {
    title: 'Comedians',
    icon: Laugh,
    tagline: 'Share your funniest moments – now in collectible form.',
    features: [
      'Exclusive Clips and Unreleased Jokes',
      'Live Show Previews and Updates',
      'Fan Interaction through Comments'
    ],
    image: 'https://images.unsplash.com/photo-1603190287605-e6ade32fa852?auto=format&fit=crop&q=80&w=2070',
    link: '/comedians'
  }
];

export default function CreatorSection() {
  return (
    <section id="creators" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Made for You – The Creator</h2>
          <p className="text-xl text-gray-400">Choose your path and start building your superfan community</p>
        </div>
        <div className="space-y-24">
          {creators.map((creator, index) => (
            <div 
              key={creator.title}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="flex-1 relative group">
                <div className="absolute inset-0 bg-purple-600/20 group-hover:bg-purple-600/30 transition-colors rounded-2xl"></div>
                <img
                  src={creator.image}
                  alt={creator.title}
                  className="relative rounded-2xl shadow-2xl transition-transform group-hover:scale-[1.02] duration-500"
                />
              </div>
              <div className="flex-1 space-y-6">
                <creator.icon className="w-12 h-12 text-purple-500" />
                <h3 className="text-3xl font-bold text-white">{creator.title}</h3>
                <p className="text-xl text-gray-400">{creator.tagline}</p>
                <ul className="space-y-4">
                  {creator.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <ChevronRight className="w-5 h-5 text-purple-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {creator.link.startsWith('http') ? (
                  <a
                    href={creator.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full inline-flex items-center gap-2 transition-colors"
                  >
                    Get Started
                    <ChevronRight className="w-5 h-5" />
                  </a>
                ) : (
                  <Link
                    to={creator.link}
                    className="mt-8 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full inline-flex items-center gap-2 transition-colors"
                  >
                    Get Started
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}