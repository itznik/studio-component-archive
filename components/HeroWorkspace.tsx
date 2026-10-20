"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Figma, Sparkles, Terminal } from "lucide-react";

export default function HeroWorkspace() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-4 overflow-hidden">
      
      {/* Floating Interactive Badge Pill */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8 px-4 py-1.5 bg-white border border-studioBorder rounded-full shadow-xs flex items-center gap-2 text-xs font-mono text-neutral-600"
      >
        <Sparkles className="w-3.5 h-3.5 text-studioAccent" />
        <span>HIGH-FIDELITY DESIGN ASSETS FOR ELITE BUILDERS</span>
      </motion.div>

      {/* Massive Editorial Headline */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-4xl mx-auto z-10"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-studioDark leading-[1.05]">
          Engineered <br />
          <span className="font-light italic text-neutral-500">components</span> for the web.
        </h1>
        <p className="mt-6 text-base md:text-lg text-neutral-600 max-w-xl mx-auto font-normal">
          Hand-crafted visual systems, reactive motion blocks, and high-weight UI modules built to break away from generic AI templates.
        </p>
      </motion.div>

      {/* Call to Action Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-10 flex flex-col sm:flex-row items-center gap-4 z-10"
      >
        <a 
          href="#catalog"
          className="w-full sm:w-auto px-8 py-4 bg-studioDark text-white text-sm font-medium rounded-full hover:bg-studioAccent transition-all shadow-md text-center"
        >
          Explore Component Vault
        </a>
        <a 
          href="/pricing"
          className="w-full sm:w-auto px-8 py-4 bg-white border border-studioBorder text-studioDark text-sm font-medium rounded-full hover:bg-neutral-50 transition-all text-center"
        >
          View All-Access Pass
        </a>
      </motion.div>

      {/* Floating Studio Elements / Floating Cards (Inspired by Onlines style) */}
      <div className="absolute inset-0 pointer-events-none max-w-7xl mx-auto hidden lg:block overflow-hidden">
        
        {/* Floating Card 1: Code Snippet */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute top-40 left-12 p-4 bg-white/90 backdrop-blur border border-studioBorder rounded-xl shadow-lg w-64 text-left pointer-events-auto"
        >
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-studioBorder text-xs font-mono text-neutral-400">
            <span>motion.tsx</span>
            <Terminal className="w-3.5 h-3.5 text-studioAccent" />
          </div>
          <p className="font-mono text-[11px] text-neutral-600">
            {`const spring = { stiffness: 400, damping: 30 };`}
          </p>
          <div className="mt-3 flex items-center gap-2">
            <span className="px-2 py-0.5 bg-blue-50 text-studioAccent text-[10px] font-mono rounded">PRO ASSET</span>
          </div>
        </motion.div>

        {/* Floating Card 2: Status Pill */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
          className="absolute top-60 right-16 p-3 bg-white/90 backdrop-blur border border-studioBorder rounded-xl shadow-lg pointer-events-auto flex items-center gap-3"
        >
          <div className="w-8 h-8 rounded-full bg-studioDark text-white flex items-center justify-center font-mono text-xs font-bold">
            UI
          </div>
          <div>
            <p className="text-xs font-bold text-studioDark">Interactive Bento</p>
            <p className="text-[10px] text-neutral-400 font-mono">Status: Verified</p>
          </div>
        </motion.div>

        {/* Floating Tool Badge */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-28 left-24 p-3 bg-white/90 backdrop-blur border border-studioBorder rounded-lg shadow-md pointer-events-auto flex items-center gap-2"
        >
          <Code2 className="w-4 h-4 text-studioAccent" />
          <span className="text-xs font-mono font-medium">Tailwind v3.4 Ready</span>
        </motion.div>

      </div>

    </section>
  );
}
