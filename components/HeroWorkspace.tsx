"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Layers, CheckCircle2 } from "lucide-react";

export default function HeroWorkspace() {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center pt-36 pb-24 px-6 overflow-hidden">
      
      {/* Central Headline (Onlines style design-board look) */}
      <div className="text-center max-w-4xl mx-auto z-20 relative">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-neutral-900 leading-[0.95]"
        >
          Components <br />
          <span className="font-light italic text-neutral-500 font-serif">that love</span> the web.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-base sm:text-lg text-neutral-600 max-w-xl mx-auto font-light"
        >
          High-end modular systems and micro-interactions designed to make your interface look alive.
        </motion.p>

        {/* Action Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8 flex justify-center gap-4"
        >
          <a 
            href="#catalog"
            className="px-8 py-4 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-all shadow-md"
          >
            Explore Vault
          </a>
        </motion.div>
      </div>

      {/* Scattered Floating Canvas Elements (Exact Onlines Design-Board Vibe) */}
      <div className="absolute inset-0 pointer-events-none max-w-7xl mx-auto hidden lg:block overflow-hidden">
        
        {/* Floating Notification Bubble 1 */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute top-44 left-16 p-3 bg-white border border-neutral-200 rounded-2xl shadow-lg pointer-events-auto flex items-center gap-3"
        >
          <div className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold">
            —
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-neutral-900">Online</span>
              <span className="text-[10px] text-neutral-400">right now</span>
            </div>
            <p className="text-xs text-neutral-600">Let's build a clean component.</p>
          </div>
          <span className="ml-2 px-2 py-0.5 bg-amber-100 text-amber-800 text-[10px] font-medium rounded-full">Developer</span>
        </motion.div>

        {/* Floating Tool Badge: VS Code */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
          className="absolute top-52 right-24 p-3 bg-white border border-neutral-200 rounded-2xl shadow-lg pointer-events-auto flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Code2 className="w-5 h-5" />
          </div>
          <span className="text-xs font-mono font-bold text-neutral-800">VS Code</span>
        </motion.div>

        {/* Floating Tool Badge: Layers */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-32 left-28 p-3 bg-white border border-neutral-200 rounded-2xl shadow-lg pointer-events-auto flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center">
            <Layers className="w-5 h-5" />
          </div>
          <span className="text-xs font-mono font-bold text-neutral-800">Design Systems</span>
        </motion.div>

        {/* Floating Mini UI Preview Card */}
        <motion.div
          animate={{ y: [0, 10, 0], rotate: [-1, 1, -1] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-24 right-20 w-56 p-4 bg-white border border-neutral-200 rounded-2xl shadow-xl pointer-events-auto"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono text-neutral-400">ANALYTICS_MODULE</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
          </div>
          <div className="h-12 bg-neutral-50 rounded-lg flex items-end px-2 gap-1 pb-1">
            <span className="w-full bg-blue-500 h-[40%] rounded-xs" />
            <span className="w-full bg-blue-500 h-[70%] rounded-xs" />
            <span className="w-full bg-blue-600 h-[90%] rounded-xs" />
            <span className="w-full bg-blue-500 h-[60%] rounded-xs" />
          </div>
        </motion.div>

      </div>

    </section>
  );
}
