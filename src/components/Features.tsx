import React from 'react';
import { BarChart2, Palette, Lock, Users, Smartphone } from 'lucide-react';

const features = [
  {
    icon: BarChart2,
    title: 'Fan Data & Insights',
    description: 'Know your audience. MINY provides real-time analytics on fan interactions, replays, and comments.'
  },
  {
    icon: Palette,
    title: 'Collectible Artwork',
    description: 'Each MINY record comes with custom artwork, tailored to your brand and style.'
  },
  {
    icon: Lock,
    title: 'Exclusive Content',
    description: 'Unlock a new revenue stream by providing fans with access to exclusive content.'
  },
  {
    icon: Users,
    title: 'Community Building',
    description: 'From comments to polls, turn your audience into an interactive community.'
  },
  {
    icon: Smartphone,
    title: 'Easy-to-Use Technology',
    description: 'Just tap the MINY to a phone, and fans are instantly connected to your world.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Features for All Creators</h2>
          <p className="text-xl text-gray-600">Everything you need to build and engage your community</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <feature.icon className="w-12 h-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}