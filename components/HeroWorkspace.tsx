"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Layers, CheckCircle2, Sliders, Sparkles, Copy, Check } from "lucide-react";

export default function HeroWorkspace() {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);
  const [interactiveMode, setInteractiveMode] = useState(true);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center pt-36 pb-24 px-6 overflow-hidden">
      
      {/* Central Interactive Hero Content */}
      <div className="text-center max-w-4xl mx-auto z-20 relative">
        
        {/* Interactive Mode Toggle Pill */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-neutral-200 rounded-full shadow-xs mb-6 cursor-pointer hover:border-neutral-400 transition-all"
          onClick={() => setInteractiveMode(!interactiveMode)}
        >
          <span className={`w-2 h-2 rounded-full ${interactiveMode ? "bg-emerald-500 animate-pulse" : "bg-neutral-400"}`} />
          <span className="text-xs font-mono text-neutral-700">
            Canvas Mode: <strong className="text-neutral-900">{interactiveMode ? "Active" : "Static"}</strong>
          </span>
          <Sliders className="w-3.5 h-3.5 text-neutral-400 ml-1" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-neutral-900 leading-[0.95]"
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
          High-end modular systems, live interactive canvas elements, and micro-interactions designed to make your interface look alive.
        </motion.p>

        {/* Interactive Simulator Card (Right in the center to eliminate empty space) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-10 max-w-2xl mx-auto bg-white border border-neutral-200 rounded-3xl p-6 shadow-xl text-left"
        >
          {/* Card Header Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setActiveTab("preview")}
                className={`px-3 py-1 text-xs font-mono rounded-lg transition-colors ${activeTab === "preview" ? "bg-neutral-900 text-white" : "text-neutral-500 hover:bg-neutral-100"}`}
              >
                Live Preview
              </button>
              <button 
                onClick={() => setActiveTab("code")}
                className={`px-3 py-1 text-xs font-mono rounded-lg transition-colors ${activeTab === "code" ? "bg-neutral-900 text-white" : "text-neutral-500 hover:bg-neutral-100"}`}
              >
                Snippet
              </button>
            </div>
            <button 
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1 text-xs font-mono bg-neutral-50 border border-neutral-200 rounded-lg hover:bg-neutral-100 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-neutral-500" />}
              <span>{copied ? "Copied" : "Copy Code"}</span>
            </button>
          </div>

          {/* Card Body Content */}
          <div className="pt-6 min-h-[160px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {activeTab === "preview" ? (
                <motion.div 
                  key="preview"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full flex flex-col items-center justify-center"
                >
                  <div className={`w-full p-6 rounded-2xl border transition-all duration-500 flex items-center justify-between ${interactiveMode ? "bg-blue-50/50 border-blue-200 shadow-inner" : "bg-neutral-50 border-neutral-200"}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-neutral-900">Dynamic Spring State</h4>
                        <p className="text-xs text-neutral-500">Interactive physics damping active</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-white border border-blue-200 text-blue-700 text-xs font-mono font-bold rounded-full shadow-xs">
                      {interactiveMode ? "LIVE 60FPS" : "STATIC"}
                    </span>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="code"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full bg-neutral-900 text-neutral-200 p-4 rounded-xl font-mono text-xs overflow-x-auto"
                >
                  <pre>{`import { motion } from "framer-motion";\n\nexport const SpringCard = () => (\n  <motion.div whileHover={{ scale: 1.02 }} className="p-6 bg-blue-50 rounded-2xl">\n    <h4>Dynamic Spring State</h4>\n  </motion.div>\n);`}</pre>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Action Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 flex justify-center gap-4"
        >
          <a 
            href="#catalog"
            className="px-8 py-4 bg-neutral-900 text-white text-sm font-semibold rounded-full hover:bg-blue-600 transition-all shadow-md"
          >
            Explore Component Vault
          </a>
        </motion.div>
      </div>

      {/* Scattered Floating Canvas Elements (Only render if interactiveMode is true) */}
      <AnimatePresence>
        {interactiveMode && (
          <div className="absolute inset-0 pointer-events-none max-w-7xl mx-auto hidden lg:block overflow-hidden">
            
            {/* Floating Notification Bubble 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [0, -10, 0] }}
              exit={{ opacity: 0 }}
              transition={{ y: { repeat: Infinity, duration: 5, ease: "easeInOut" } }}
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [0, 12, 0] }}
              exit={{ opacity: 0 }}
              transition={{ y: { repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 } }}
              className="absolute top-52 right-24 p-3 bg-white border border-neutral-200 rounded-2xl shadow-lg pointer-events-auto flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold text-neutral-800">VS Code</span>
            </motion.div>

            {/* Floating Tool Badge: Layers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [0, -8, 0] }}
              exit={{ opacity: 0 }}
              transition={{ y: { repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 } }}
              className="absolute bottom-32 left-28 p-3 bg-white border border-neutral-200 rounded-2xl shadow-lg pointer-events-auto flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold text-neutral-800">Design Systems</span>
            </motion.div>

            {/* Floating Mini UI Preview Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [0, 10, 0], rotate: [-1, 1, -1] }}
              exit={{ opacity: 0 }}
              transition={{ y: { repeat: Infinity, duration: 8, ease: "easeInOut", delay: 0.5 } }}
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
        )}
      </AnimatePresence>

    </section>
  );
}
