/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Play } from 'lucide-react';
import { useState } from 'react';
import heroImage from './images/hero_lifestyle.png';

export default function App() {
  const [isHovered, setIsHovered] = useState(false);

  // VSL Link (External Affiliate Redirect)
  const VSL_LINK = "https://getsumatratonic.com/welcome/#aff=gpushkar053d13";

  const CTAButton = ({ className = "" }) => (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <a 
        href={VSL_LINK}
        target="_blank"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative w-full max-w-lg py-6 px-8 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold text-xl md:text-2xl text-center shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:shadow-[0_0_30px_rgba(234,88,12,0.5)] transition-all active:scale-[0.98] flex items-center justify-center gap-3 overflow-hidden"
      >
         <motion.div 
          className="absolute inset-0 bg-white/10"
          initial={{ x: '-100%' }}
          animate={isHovered ? { x: '100%' } : { x: '-100%' }}
          transition={{ duration: 0.5 }}
        />
        <span>Watch the 2-minute video to see what’s really going on →</span>
      </a>
      <p className="text-xs text-gray-400 font-medium tracking-wide">Takes less than 2 minutes</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-orange-100 selection:text-orange-900">
      {/* Main Content Container */}
      <main className="max-w-xl mx-auto px-6 pt-4 pb-12 md:pt-8 text-center">
        
        {/* 1. Headline & Curiosity Subheadline */}
        <div className="space-y-4 flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-slate-900"
            id="main-headline"
          >
            Struggling with stubborn belly fat? <span className="text-orange-600">What if everything you’ve been told is slightly wrong…</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-2 text-slate-500 text-lg font-medium"
          >
            <p>Discover the <span className="text-slate-900 font-extrabold">small overlooked shift</span> that flips the script on what most people get wrong about stubborn fat.</p>
          </motion.div>

          {/* 2. Above-the-fold CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="w-full pt-2"
          >
            <CTAButton />
          </motion.div>

          {/* 3. Simplified Trust Bullets */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-1 text-sm font-semibold text-slate-400">
            <span className="flex items-center gap-1.5">✔ No strict diets</span>
            <span className="flex items-center gap-1.5">✔ No exhausting workouts</span>
            <span className="flex items-center gap-1.5">✔ Simple daily routine</span>
          </div>
        </div>

        {/* 4. Hero Section (Image with Play Button) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 mb-6 relative group cursor-pointer"
          onClick={() => window.open(VSL_LINK, '_blank')}
        >
          <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-slate-100 shadow-2xl relative">
            <img 
              src={heroImage} 
              alt="The discovery" 
              className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            {/* Play Overlay Restored */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors">
              <div className="w-16 h-16 bg-white/95 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-md group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 text-orange-600 fill-orange-600 ml-1" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* 5. Reduced Story Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="space-y-4 text-lg leading-relaxed text-slate-700 mb-8 text-center md:text-left"
        >
          <p>
            I spent years trying ‘healthy’ diets and exhausting workouts… and nothing really worked.
          </p>
          <p className="font-bold text-slate-900 border-l-4 border-orange-500 pl-4 py-2 bg-orange-50/50 italic">
            Then I stumbled upon an unexpected discovery that changed how I understood fat loss forever.
          </p>
        </motion.section>

        {/* 6. Post-Story CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="w-full"
        >
          <CTAButton />
        </motion.div>

      </main>

      {/* 7. Minimal Footer */}
      <footer className="max-w-xl mx-auto px-6 pb-12 text-center text-[10px] text-gray-400 border-t border-gray-50 pt-8 mt-4">
        <p className="mb-2">
          This site is not endorsed by or affiliated with Meta Platforms, Inc.
        </p>
        <div className="flex justify-center gap-4 underline opacity-60">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Contact</span>
        </div>
      </footer>
    </div>
  );
}
