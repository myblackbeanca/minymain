import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import CreatorSection from '../components/CreatorSection';
import Features from '../components/Features';
import ComingSoon from '../components/ComingSoon';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>MINY - 2-Inch Digital Vinyl Record for Creators</title>
        <meta name="description" content="MINY transforms creator content into collectible digital vinyl records. Perfect for musicians, podcasters, and comedians to engage with superfans." />
        <meta name="keywords" content="digital vinyl, creator platform, fan engagement, music collectibles, podcast collectibles, comedy content, MINY" />
        <meta property="og:title" content="MINY - Digital Vinyl Records for Creators" />
        <meta property="og:description" content="Transform your content into collectible experiences with MINY's 2-inch digital vinyl records." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://minyvinyl.com" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1571330735066-03aaa9429d89?auto=format&fit=crop&q=80&w=2070" />
      </Helmet>
      <Hero />
      <CreatorSection />
      <Features />
      <ComingSoon />
    </>
  );
}