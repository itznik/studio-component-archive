"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COMPONENTS_DATA, ComponentItem } from "@/data/components.ts";
import { Lock, ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";

const categories = ["All", "Bento", "SVGs", "Motion", "Headers"];

export default function ComponentVault() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredComponents = selectedCategory === "All" 
    ? COMPONENTS_DATA 
    : COMPONENTS_DATA.filter(item => item.category === selectedCategory);

  return (
    <section id="catalog" className="py-24 px-6 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-neutral-200">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-2">
            INDEX // 02
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 tracking-tight">
            The Component Vault.
          </h2>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 text-xs font-mono rounded-full transition-all duration-300 ${
                selectedCategory === cat 
                  ? "bg-neutral-900 text-white shadow-sm" 
                  : "bg-white border border-neutral-200 text-neutral-600 hover:border-neutral-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Matrix */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredComponents.map((item: ComponentItem) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              key={item.id}
              className="group relative bg-white border border-neutral-200 rounded-3xl p-6 shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Meta Tag */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                  CAT // {item.category}
                </span>
                {item.isPro ? (
                  <span className="px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200/60 text-[10px] font-mono font-bold rounded-full flex items-center gap-1">
                    <Lock className="w-3 h-3" /> PRO [$9]
                  </span>
                ) : (
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200/60 text-[10px] font-mono font-bold rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> FREE
                  </span>
                )}
              </div>

              {/* Interactive Visual Canvas Box */}
              <div className="w-full h-44 bg-neutral-50 rounded-2xl border border-neutral-100 flex items-center justify-center relative overflow-hidden group-hover:bg-neutral-100/60 transition-colors">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />
                <div className="relative z-10 w-12 h-12 rounded-xl bg-white border border-neutral-200 shadow-md flex items-center justify-center font-serif text-xl group-hover:scale-110 transition-transform duration-500">
                  ✦
                </div>
              </div>

              {/* Title & Description */}
              <div className="mt-6">
                <h3 className="text-xl font-serif font-medium text-neutral-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-500 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Action Link */}
              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-400">React + Tailwind</span>
                <Link
                  href={`/components/${item.id}`}
                  className="w-9 h-9 rounded-full bg-neutral-900 text-white flex items-center justify-center group-hover:bg-blue-600 transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

    </section>
  );
}
