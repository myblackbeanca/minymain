import React from 'react';
import { Laugh, Play, Users, Video, Star, MessageCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const features = [
  {
    icon: Video,
    title: 'Exclusive Clips',
    description: 'Share unreleased jokes and behind-the-scenes content with your biggest fans.'
  },
  {
    icon: Play,
    title: 'Live Show Previews',
    description: 'Give fans a sneak peek of upcoming shows and exclusive performance updates.'
  },
  {
    icon: MessageCircle,
    title: 'Fan Interaction',
    description: 'Build your community through comments, reactions, and direct engagement.'
  },
  {
    icon: Star,
    title: 'Premium Content',
    description: 'Monetize exclusive content and special fan-only material.'
  },
  {
    icon: Users,
    title: 'Community Building',
    description: 'Create a dedicated space for your most engaged followers.'
  }
];

export default function Comedians() {
  return (
    <>
      <Helmet>
        <title>MINY for Comedians - Share Your Funniest Moments</title>
        <meta name="description" content="Transform your comedy into collectible experiences. Share exclusive clips, unreleased jokes, and engage with fans through MINY's digital vinyl platform." />
        <meta name="keywords" content="comedy, standup comedy, digital vinyl, fan engagement, exclusive content, MINY" />
        <meta property="og:title" content="MINY for Comedians - Share Your Funniest Moments" />
        <meta property="og:description" content="Transform your comedy into collectible experiences with MINY's digital vinyl platform." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://minyvinyl.com/comedians" />
      </Helmet>

      <section className="pt-32 pb-16 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Laugh className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-white mb-6">Turn Your Comedy Into Collectible Moments</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Connect with fans like never before through exclusive content, behind-the-scenes access, and interactive experiences.
            </p>
            <button className="bg-white text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-purple-100 transition-colors">
              Start Creating
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                <feature.icon className="w-12 h-12 text-purple-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Transform Your Comedy?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join the next generation of comedy engagement. Create unforgettable experiences for your fans.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
            Get Started Now
          </button>
        </div>
      </section>
    </>
  );
}