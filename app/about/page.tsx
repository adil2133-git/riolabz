"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Footer } from "@/components/layout/Footer";
import { Sparkles, ShieldCheck, Globe2, Users, Code2, ArrowRight, TrendingUp } from "lucide-react";
import { stats, teamMembers, milestones, companyValues } from "@/lib/data/about";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-[#2563eb] selection:text-white">
      <Navbar />
      <MobileMenu />

      <main className="flex-grow pt-28 sm:pt-32 pb-24">
        <section className="relative py-10 sm:py-16 overflow-hidden">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[750px] h-[400px] bg-gradient-radial from-blue-100/50 via-slate-100/50 to-transparent rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-slate-800 text-xs font-mono font-semibold uppercase tracking-widest shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#2563eb]" />
                  #REDEFINING_ENGINEERING
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black text-slate-900 tracking-tight leading-[1.08]"
              >
                We Build Tech That Powers{" "}
                <span className="text-[#2563eb]">
                  Future-Proof Enterprises
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-600 text-base sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto"
              >
                From a vision in Kochi to a global technology partner operating across London and Dubai, Riolabz unites high-concurrency software, modern UI/UX design, and multi-cloud infrastructure.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="pt-4 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
              >
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 text-center shadow-2xs">
                    <div className="text-2xl sm:text-3xl font-heading font-black text-slate-900">{stat.value}</div>
                    <div className="text-[11px] font-mono text-[#2563eb] font-bold uppercase">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[360px] sm:h-[450px] lg:h-[500px] w-full rounded-3xl overflow-hidden border border-slate-200 bg-slate-900 shadow-2xl group"
          >
            <Image
              src="/about-hero.jpg"
              alt="Riolabz Global Workplace Culture"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-10 text-white z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6">
              <div className="space-y-2 max-w-2xl">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00f0b5]/10 border border-[#00f0b5]/30 text-[#00f0b5] font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                  <Users className="w-3.5 h-3.5" />
                  WORLD-CLASS ENGINEERING CULTURE
                </span>
                <h2 className="text-xl sm:text-4xl font-heading font-black text-white leading-tight">
                  50+ Software Engineers, Designers, &amp; Cloud Architects
                </h2>
              </div>

              <div className="flex items-center gap-2 bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 text-xs font-mono text-white self-start sm:self-auto">
                <div className="w-2.5 h-2.5 rounded-full bg-[#00f0b5] animate-pulse" />
                <span>24/7 SLA ACTIVE TELEMETRY</span>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/80 mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-4"
            >
              <span className="text-xs font-mono font-bold text-[#2563eb] uppercase tracking-widest">OUR EVOLUTION</span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 leading-tight">
                A Decade of Engineering Milestones
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                From our roots in Kerala&apos;s tech capital to serving Fortune 500 enterprises in London and Dubai, Riolabz has maintained a single-minded commitment to technical rigor.
              </p>

              <div className="pt-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-all shadow-md"
                >
                  <span>Explore Engineering Divisions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {milestones.map((item, idx) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-2 hover:border-[#2563eb]/40 transition-colors shadow-2xs"
                >
                  <div className="text-2xl font-mono font-black text-[#2563eb]">{item.year}</div>
                  <h3 className="text-lg font-heading font-bold text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50/80 border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto space-y-3 mb-16"
            >
              <span className="text-xs font-mono font-bold text-[#2563eb] uppercase tracking-widest">OUR CORE PRINCIPLES</span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900">What Drives Riolabz</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyValues.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <motion.div
                    key={val.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    whileHover={{ y: -4 }}
                    className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-4 hover:shadow-xl transition-all duration-300"
                  >
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${val.badgeBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-slate-900">{val.title}</h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{val.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto space-y-3 mb-16"
          >
            <span className="text-xs font-mono font-bold text-[#2563eb] uppercase tracking-widest">LEADERSHIP TEAM</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900">Guided by Engineering Veterans</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="relative h-80 w-full bg-slate-900">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="400px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-mono border border-white/15">
                    {member.location}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] font-mono font-bold text-[#00f0b5] bg-slate-950/80 px-2.5 py-1 rounded border border-white/10 uppercase">
                      {member.spec}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-heading font-black text-slate-900">{member.name}</h3>
                  <p className="text-xs font-mono text-[#2563eb] font-semibold">{member.role}</p>
                  <p className="text-slate-600 text-xs leading-relaxed pt-1">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 bg-slate-900 rounded-3xl p-8 sm:p-12 text-white text-center space-y-6 shadow-2xl"
          >
            <h3 className="text-3xl font-heading font-black">Ready to Collaborate with Riolabz?</h3>
            <p className="text-slate-300 text-sm max-w-xl mx-auto">
              Whether building a new enterprise AI platform or scaling cloud infrastructure, our solution architects are ready.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#2563eb] hover:bg-blue-600 text-white font-bold text-sm transition-all shadow-xl hover:scale-[1.02]"
            >
              <span>Schedule Technical Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
