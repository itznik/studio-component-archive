"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Terminal, Code2, ArrowUpRight } from "lucide-react";

export default function HeroWorkspace() {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center pt-40 pb-24 px-6 overflow-hidden">
      
      {/* Editorial Badge Pill */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8 px-5 py-2 bg-white border border-neutral-300 rounded-full shadow-xs flex items-center gap-2.5 text-xs font-mono text-neutral-700 uppercase tracking-wider"
      >
        <Sparkles className="w-3.5 h-3.5 text-blue-600" />
        <span>HIGH-FIDELITY DESIGN SYSTEMS FOR ELITE BUILDERS</span>
      </motion.div>

      {/* Massive Editorial Headline */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-5xl mx-auto z-10"
      >
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-neutral-900 leading-[0.95]">
          Engineered <br />
          <span className="font-light italic text-neutral-400 font-serif">components</span> for the web.
        </h1>
        <p className="mt-8 text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto font-normal leading-relaxed">
          Hand-crafted visual systems, reactive motion blocks, and high-weight UI modules built to break away from generic AI templates.
        </p>
      </motion.div>

      {/* High-Impact Action Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-12 flex flex-col sm:flex-row items-center gap-4 z-10 w-full sm:w-auto justify-center"
      >
        <a 
          href="#catalog"
          className="w-full sm:w-auto px-8 py-4 bg-black text-white text-sm font-semibold rounded-full hover:bg-blue-600 transition-all shadow-md flex items-center justify-center gap-2 group"
        >
          <span>Explore Component Vault</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
        <a 
          href="/pricing"
          className="w-full sm:w-auto px-8 py-4 bg-white border border-neutral-300 text-neutral-900 text-sm font-semibold rounded-full hover:bg-neutral-100 transition-all text-center shadow-xs"
        >
          View All-Access Pass
        </a>
      </motion.div>

      {/* Floating Studio Cards (Visible on larger screens) */}
      <div className="absolute inset-0 pointer-events-none max-w-7xl mx-auto hidden lg:block overflow-hidden">
        
        {/* Floating Card 1 */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute top-44 left-8 p-5 bg-white/95 backdrop-blur-md border border-neutral-300 rounded-2xl shadow-xl w-72 text-left pointer-events-auto"
        >
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-200 text-xs font-mono text-neutral-400">
            <span>motion.tsx</span>
            <Terminal className="w-3.5 h-3.5 text-blue-600" />
          </div>
          <p className="font-mono text-xs text-neutral-700">
            {`const spring = { stiffness: 400, damping: 30 };`}
          </p>
          <div className="mt-4 flex items-center gap-2">
            <span className="px-2.5 py-1 bg-blue-50 text-blue-600 text-[10px] font-mono font-bold rounded-md">PRO ASSET</span>
          </div>
        </motion.div>

        {/* Floating Card 2 */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
          className="absolute top-52 right-12 p-4 bg-white/95 backdrop-blur-md border border-neutral-300 rounded-2xl shadow-xl pointer-events-auto flex items-center gap-3.5"
        >
          <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-mono text-sm font-bold">
            UI
          </div>
          <div>
            <p className="text-sm font-bold text-neutral-900">Interactive Bento</p>
            <p className="text-xs text-neutral-400 font-mono">Status: Verified</p>
          </div>
        </motion.div>

      </div>

    </section>
  );
}
