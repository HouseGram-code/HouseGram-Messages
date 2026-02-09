import React from 'react';
import { Content } from '../types';

interface HeroProps {
  content: Content['hero'];
}

export default function Hero({ content }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[80vh] flex flex-col justify-center">
      {/* Background Decor - Clean White */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
         {/* Blobs removed as requested for cleaner aesthetic */}
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10 text-center">
        
        {/* Headline */}
        <h1 
          className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-slate-900 animate-fade-in-up" 
          style={{ animationDelay: '0.2s', lineHeight: 1.1 }}
        >
          {content.title}
        </h1>

      </div>
    </section>
  );
}