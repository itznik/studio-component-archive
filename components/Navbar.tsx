"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-between w-full max-w-6xl px-8 py-4 bg-white/90 backdrop-blur-xl border border-neutral-300 rounded-full shadow-sm"
      >
        {/* Left Archive Index */}
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
          <span className="font-mono text-xs font-bold tracking-widest text-neutral-900 uppercase">
            SYS.01 // ARCHIVE
          </span>
        </div>

        {/* Center Links */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-neutral-600">
          <Link href="/" className="hover:text-black transition-colors">Index</Link>
          <Link href="/catalog" className="hover:text-black transition-colors">Catalog</Link>
          <Link href="/manifesto" className="hover:text-black transition-colors">Manifesto</Link>
        </nav>

        {/* Right Action Button */}
        <Link 
          href="/pricing"
          className="px-5 py-2.5 text-xs font-mono font-bold text-white bg-black rounded-full hover:bg-blue-600 transition-all duration-300 shadow-sm"
        >
          GET ACCESS [ $69 ]
        </Link>
      </motion.div>
    </header>
  );
}
