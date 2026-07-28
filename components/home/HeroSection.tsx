"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Layers, ShieldCheck, Cpu } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] pt-36 pb-24 flex items-center overflow-hidden bg-white">
      {/* Background Soft Ambient Light Gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-radial from-slate-100 via-blue-50/50 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-blue-100/30 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.06] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: Clean Minimal White Copy */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Tag / Hashtag Eyebrow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-slate-800 text-xs font-mono font-semibold tracking-wider uppercase shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#2563eb]" />
                #BuildingDigitalFutures
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-[64px] font-heading font-black text-slate-900 tracking-tight leading-[1.06]"
            >
              Result-Driven{" "}
              <span className="text-[#2563eb]">Digital Solutions</span> for Growing Brands.
            </motion.h1>

            {/* Paragraph Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-slate-600 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl"
            >
              Riolabz unifies high-performance web engineering, mobile app development, custom CRM/ERP systems, and scalable cloud solutions into a single evolving execution.
            </motion.p>

            {/* Action Button Group */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-slate-900/10 hover:scale-[1.02]"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-300 transition-all duration-300 shadow-xs hover:border-slate-400"
              >
                Get a Quote
              </Link>
            </motion.div>

            {/* Trust Stats Counter Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="pt-8 border-t border-slate-100 grid grid-cols-3 gap-6 max-w-lg"
            >
              <div>
                <div className="text-3xl font-heading font-black text-slate-900">12+</div>
                <div className="text-xs text-slate-500 font-mono mt-1 uppercase tracking-wider">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-black text-slate-900">500+</div>
                <div className="text-xs text-slate-500 font-mono mt-1 uppercase tracking-wider">Satisfied Clients</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-black text-slate-900">3</div>
                <div className="text-xs text-slate-500 font-mono mt-1 uppercase tracking-wider">Global Hubs</div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Floating Interactive Visual Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Soft Ambient Shadow Card Wrapper */}
            <div className="relative rounded-3xl bg-slate-50 border border-slate-200/80 p-7 shadow-2xl space-y-6">
              {/* Card Title Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-300" />
                  <div className="w-3 h-3 rounded-full bg-slate-300" />
                  <div className="w-3 h-3 rounded-full bg-slate-300" />
                  <span className="text-xs font-mono text-slate-500 ml-2">Digital Ecosystem</span>
                </div>
                <span className="text-xs font-mono font-semibold text-[#2563eb] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200/60">
                  PRODUCTION READY
                </span>
              </div>

              {/* Service Capabilities Cards Stack */}
              <div className="space-y-3.5">
                <motion.div
                  whileHover={{ y: -2 }}
                  className="bg-white p-4.5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-xl bg-slate-900 text-white">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-mono uppercase tracking-wider">Engineering</div>
                      <div className="text-sm font-bold text-slate-900">Web &amp; Mobile Applications</div>
                    </div>
                  </div>
                  <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded">100% SLA</span>
                </motion.div>

                <motion.div
                  whileHover={{ y: -2 }}
                  className="bg-white p-4.5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-xl bg-blue-50 text-[#2563eb]">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-mono uppercase tracking-wider">Enterprise</div>
                      <div className="text-sm font-bold text-slate-900">CRM, ERP &amp; Cloud Systems</div>
                    </div>
                  </div>
                  <ShieldCheck className="w-4 h-4 text-[#2563eb]" />
                </motion.div>
              </div>

              {/* Global Offices Badge Strip */}
              <div className="pt-2 flex flex-wrap items-center justify-between text-xs text-slate-500 font-mono border-t border-slate-200/80">
                <span className="flex items-center gap-1.5">📍 Kochi, India</span>
                <span className="flex items-center gap-1.5">📍 London, UK</span>
                <span className="flex items-center gap-1.5">📍 Dubai, UAE</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
