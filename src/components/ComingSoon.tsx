import React from 'react';
import { Youtube, Twitch, Star } from 'lucide-react';

const futureCategories = [
  {
    icon: Youtube,
    title: 'YouTube Creators',
    description: 'Offer behind-the-scenes footage and exclusive clips'
  },
  {
    icon: Twitch,
    title: 'Twitch DJs and Streamers',
    description: 'Engage your live audience with collectible experiences'
  },
  {
    icon: Star,
    title: 'Virtual Artists',
    description: 'Tap into exclusive content that keeps your fans coming back'
  }
];

export default function ComingSoon() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Coming Soon – Q3 2025</h2>
          <p className="text-xl text-gray-300">Expanding the MINY Family</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {futureCategories.map((category) => (
            <div key={category.title} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <category.icon className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
              <p className="text-gray-300">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}