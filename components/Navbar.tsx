"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-between w-full max-w-5xl px-6 py-3 bg-white/80 backdrop-blur-md border border-studioBorder rounded-full shadow-sm"
      >
        {/* Left Archive Index */}
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-studioAccent animate-pulse" />
          <span className="font-mono text-xs font-bold tracking-wider text-studioDark uppercase">
            SYS.01 // ARCHIVE
          </span>
        </div>

        {/* Center Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
          <Link href="/" className="hover:text-studioDark transition-colors">Index</Link>
          <Link href="/components" className="hover:text-studioDark transition-colors">Catalog</Link>
          <Link href="/manifesto" className="hover:text-studioDark transition-colors">Manifesto</Link>
        </nav>

        {/* Right Action Button */}
        <Link 
          href="/pricing"
          className="px-4 py-2 text-xs font-mono font-bold text-white bg-studioDark rounded-full hover:bg-studioAccent transition-all duration-300"
        >
          GET ACCESS [ $69 ]
        </Link>
      </motion.div>
    </header>
  );
}
