"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Users, Globe2, ShieldCheck, Sparkles } from "lucide-react";

const trustPillars = [
  {
    title: "Elite Engineering Talent",
    description: "Top 1% technical stack specialists committed to scalable, clean, test-driven architecture.",
    icon: Code2,
  },
  {
    title: "Agile Transparency",
    description: "Real-time sprint telemetry tracking, daily code commits, and open communication lines.",
    icon: Users,
  },
  {
    title: "Global Multi-Hub Scalability",
    description: "24/7 SLA infrastructure support managed across our Kochi, London, and Dubai centers.",
    icon: Globe2,
  },
];

export const TrustSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: Trust Pillars & Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-slate-800 text-xs font-mono font-semibold uppercase tracking-widest shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#2563eb]" />
                #TRUST_BY_DESIGN
              </span>
              <h2 className="text-4xl sm:text-5xl font-heading font-black text-slate-900 tracking-tight leading-tight">
                Why Global Enterprise Trusts Riolabz
              </h2>
              <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
                Empowering world-class organizations through uncompromised technical rigor and long-term partnership.
              </p>
            </div>

            {/* 3 Pillars List */}
            <div className="space-y-6">
              {trustPillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-heading font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Team Image Card + Giant 12+ Years Metric Overlay (Stitch Design) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-slate-900 group">
              {/* Trust Team Image */}
              <div className="relative h-[480px] sm:h-[540px] w-full">
                <Image
                  src="/trust-team.jpg"
                  alt="Riolabz Technical Excellence Team"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              </div>

              {/* Center Giant Metric Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 p-8 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/15 text-white text-center space-y-2 shadow-2xl">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00f0b5] font-semibold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  <ShieldCheck className="w-4 h-4" />
                  VERIFIED INDUSTRY TRACK RECORD
                </div>
                <div className="text-6xl sm:text-7xl font-heading font-black tracking-tight text-white">
                  12+
                </div>
                <div className="text-sm font-heading font-bold text-slate-200 uppercase tracking-widest">
                  Years of Excellence
                </div>
                <p className="text-xs text-slate-400 font-mono">
                  Successful digital delivery to 500+ global enterprises.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
