"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f9f8f6]/80 backdrop-blur-md border-b border-[#e5e5df]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Clean Editorial Brand */}
        <Link href="/" className="font-serif text-xl tracking-tight text-neutral-900 font-medium">
          onlines<span className="text-blue-600">.</span>
        </Link>

        {/* Minimalist Center Navigation */}
        <nav className="hidden md:flex items-center gap-12 text-sm font-normal text-neutral-600">
          <Link href="/" className="hover:text-black transition-colors">Index</Link>
          <Link href="/catalog" className="hover:text-black transition-colors">Catalog</Link>
          <Link href="/manifesto" className="hover:text-black transition-colors">Manifesto</Link>
          <Link href="/pricing" className="hover:text-black transition-colors">Pricing</Link>
        </nav>

        {/* High-Contrast Action Button */}
        <Link 
          href="/pricing"
          className="px-6 py-3 text-xs font-medium uppercase tracking-wider text-white bg-neutral-900 rounded-full hover:bg-blue-600 transition-all duration-300 shadow-xs"
        >
          Let's talk
        </Link>

      </div>
    </header>
  );
}
