"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function HeroWorkspace() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-20 px-6 max-w-7xl mx-auto">
      
      {/* Editorial Top Grid Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Massive Editorial Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4 block">
            UI/UX Component Studio & Vault
          </span>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif tracking-tight text-neutral-900 leading-[1.02]">
            High-end design <br />
            <span className="italic font-normal text-neutral-600">without the</span> AI noise.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-neutral-600 max-w-xl font-light leading-relaxed">
            Meticulously engineered components, razor-sharp vector SVGs, and fluid motion systems built for elite web creators.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a 
              href="#catalog"
              className="px-8 py-4 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-blue-600 transition-all shadow-md flex items-center gap-2 group"
            >
              <span>Explore Component Vault</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a 
              href="/pricing"
              className="px-8 py-4 bg-transparent border border-neutral-300 text-neutral-900 text-sm font-medium rounded-full hover:bg-neutral-200/50 transition-all"
            >
              View Pricing Matrix
            </a>
          </div>
        </motion.div>

        {/* Right Column: Visual Weight Showcase Frame (Replacing floating garbage cards) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="w-full aspect-[4/5] bg-white border border-neutral-300 rounded-3xl p-6 shadow-xl flex flex-col justify-between overflow-hidden relative group">
            
            {/* Top Bar of Showcase Card */}
            <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-neutral-200" />
                <span className="w-3 h-3 rounded-full bg-neutral-200" />
                <span className="w-3 h-3 rounded-full bg-neutral-200" />
              </div>
              <span className="text-xs font-mono text-neutral-400">preview_v2.tsx</span>
            </div>

            {/* Center Visual Mockup Area */}
            <div className="my-auto py-12 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 rounded-2xl bg-neutral-900 text-white flex items-center justify-center font-serif text-3xl shadow-lg mb-6 group-hover:scale-105 transition-transform duration-500">
                ✦
              </div>
              <h3 className="text-xl font-serif text-neutral-900 font-medium">Bento Motion Module</h3>
              <p className="text-sm text-neutral-500 mt-2 max-w-xs font-light">
                Interactive radial gradients & physics spring damping.
              </p>
            </div>

            {/* Bottom Bar of Showcase Card */}
            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-mono text-neutral-500">
              <span>Tailwind + Framer</span>
              <span className="text-blue-600 font-medium">PRO ASSET</span>
            </div>

          </div>
        </motion.div>

      </div>

    </section>
  );
}
