import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Engage. Collect.
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                {" "}Amplify Your Story.
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Introducing MINY: A 2-Inch Digital Vinyl Record designed to turn your audience into a community of superfans.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-purple-900 px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-purple-100 transition-colors">
                Get Started with MINY
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-white/30 px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-white/10 transition-colors">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-3xl blur-xl"></div>
            <img
              src="https://images.unsplash.com/photo-1571330735066-03aaa9429d89?auto=format&fit=crop&q=80&w=2070"
              alt="MINY vinyl record"
              className="relative rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}