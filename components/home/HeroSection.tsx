"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-28 pb-12 flex items-center overflow-hidden bg-slate-950 text-white font-sans selection:bg-[#2563eb] selection:text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Riolabz Digital Transformation Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-90"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.srcset = "/cloud.jpg";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-transparent to-slate-950/70" />
      </div>

      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-[#2563eb]/20 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl space-y-4 sm:space-y-5">

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-5xl lg:text-5xl font-heading font-black text-white tracking-tight leading-[1.08] drop-shadow-md"
          >
            Result-Driven{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] via-cyan-400 to-[#00f0b5]">
              Digital Solutions
            </span>{" "}
            for Growing Brands.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-200 text-sm sm:text-base font-normal leading-relaxed max-w-2xl drop-shadow-sm"
          >
            Riolabz unifies high-performance web engineering, mobile app development, custom CRM/ERP systems, and scalable multi-cloud solutions into a single evolving execution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3.5 pt-1"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 rounded-full bg-[#2563eb] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm transition-all duration-300 shadow-xl hover:scale-[1.02]"
            >
              <span>Explore Divisions</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all duration-300 backdrop-blur-md hover:border-white/40"
            >
              Schedule Consultation
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-4 border-t border-white/20 grid grid-cols-3 gap-4 max-w-md"
          >
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-black text-white drop-shadow-md">12+</div>
              <div className="text-[10px] sm:text-xs text-[#00f0b5] font-mono mt-0.5 uppercase tracking-wider font-bold">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-black text-white drop-shadow-md">500+</div>
              <div className="text-[10px] sm:text-xs text-[#00f0b5] font-mono mt-0.5 uppercase tracking-wider font-bold">Satisfied Clients</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-black text-white drop-shadow-md">3</div>
              <div className="text-[10px] sm:text-xs text-[#00f0b5] font-mono mt-0.5 uppercase tracking-wider font-bold">Global Hubs</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
