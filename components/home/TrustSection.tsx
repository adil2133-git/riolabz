"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Code2, Globe2, Sparkles, Award, Lock } from "lucide-react";

export const TrustSection: React.FC = () => {
  return (
    <section className="py-28 bg-slate-50/70 border-t border-slate-200/80 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-blue-100/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-white text-slate-800 text-xs font-mono font-semibold uppercase tracking-widest shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#2563eb]" />
              #TRUST_BY_DESIGN
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-slate-900 tracking-tight"
          >
            Why Global Enterprises Partner With Riolabz
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed"
          >
            Engineered for mission-critical reliability, uncompromised security, and long-term technology leadership.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* BENTO CARD 1: Large Team Hero Card (spans 7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 text-white relative shadow-xl group min-h-[420px] flex flex-col justify-between"
          >
            {/* Background Team Photo */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
              <Image
                src="/trust-team.jpg"
                alt="Riolabz Technical Excellence Team"
                fill
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-30"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40" />
            </div>

            {/* Top Pill & Badge */}
            <div className="p-8 relative z-10 flex justify-between items-center">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#00f0b5] text-xs font-mono font-bold">
                <ShieldCheck className="w-4 h-4" />
                100% VERIFIED SLA TRACK RECORD
              </span>
              <span className="text-xs font-mono text-slate-400 font-bold">ISO 9001:2015 CERTIFIED</span>
            </div>

            {/* Bottom Content & Giant Counter */}
            <div className="p-8 relative z-10 space-y-4">
              <div className="flex items-baseline gap-4">
                <span className="text-6xl sm:text-7xl font-heading font-black text-white tracking-tight">12+</span>
                <span className="text-lg font-heading font-extrabold text-[#00f0b5] uppercase tracking-wider">Years of Excellence</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white leading-snug">
                Powering Scalable Software for 500+ Global Brands
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm font-normal leading-relaxed max-w-xl">
                From high-concurrency microservices to native mobile apps, our engineering teams in India, the UK, and Dubai deliver fault-tolerant architectures built to scale.
              </p>
            </div>
          </motion.div>

          {/* BENTO CARD 2: Elite 1% Engineering Talent (spans 5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-[#2563eb] flex items-center justify-center shadow-2xs group-hover:bg-[#2563eb] group-hover:text-white transition-colors duration-300">
                <Code2 className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-[#2563eb] uppercase tracking-wider">
                  ELITE CODE QUALITY
                </span>
                <h3 className="text-2xl font-heading font-black text-slate-900">
                  Top 1% Engineering Standards
                </h3>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                Strict adherence to clean code principles, modular component design, and zero technical debt.
              </p>
            </div>

            {/* Specs Checklist */}
            <div className="space-y-2.5 pt-4 border-t border-slate-100">
              {[
                "Test-Driven Next.js & React Architectures",
                "SOC-2 Compliant Data Encryption",
                "Continuous Code Telemetry & Peer Audits",
              ].map((feat) => (
                <div key={feat} className="flex items-center gap-2.5 text-xs font-semibold text-slate-800">
                  <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center flex-shrink-0 text-[10px] font-bold">✓</div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* BENTO CARD 3: Global Multi-Hub Presence (spans 5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shadow-2xs group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                <Globe2 className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-wider">
                  GLOBAL ACCESSIBILITY
                </span>
                <h3 className="text-2xl font-heading font-black text-slate-900">
                  3 Global Engineering Hubs
                </h3>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                Seamless round-the-clock collaboration across our offices in Kerala (India), London (UK), and Dubai (UAE).
              </p>
            </div>

            {/* Office Pills */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-mono font-bold border border-slate-200">
                🇮🇳 Kochi, India
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-mono font-bold border border-slate-200">
                🇬🇧 London, UK
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-mono font-bold border border-slate-200">
                🇦🇪 Dubai, UAE
              </span>
            </div>
          </motion.div>

          {/* BENTO CARD 4: Live Telemetry & Transparency (spans 7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#2563eb]" />
                  <span className="text-xs font-mono font-bold text-[#2563eb] uppercase tracking-wider">
                    TRANSPARENCY &amp; SPEED
                  </span>
                </div>
                <h3 className="text-2xl font-heading font-black text-slate-900">
                  Real-Time Sprint Telemetry
                </h3>
              </div>
              <span className="px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-bold border border-blue-200">
                Agile Sprint Velocity
              </span>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed font-normal">
              Clients receive direct access to daily Git commits, automated CI/CD build logs, and transparent sprint burn-down charts.
            </p>

            {/* Metrics Telemetry Strip */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-center">
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-xl font-heading font-black text-slate-900">99.8%</div>
                <div className="text-[10px] font-mono text-slate-500 uppercase">Sprint Velocity</div>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-xl font-heading font-black text-[#00f0b5]">100/100</div>
                <div className="text-[10px] font-mono text-slate-500 uppercase">Code Score</div>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-xl font-heading font-black text-emerald-600">0 Breaches</div>
                <div className="text-[10px] font-mono text-slate-500 uppercase">Security Audit</div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
