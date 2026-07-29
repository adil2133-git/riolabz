"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Footer } from "@/components/layout/Footer";
import { Sparkles, ShieldCheck, Globe2, Users, Award, Code2, ArrowRight, TrendingUp, CheckCircle2, Building2, Zap, Rocket } from "lucide-react";

const stats = [
  { value: "12+", label: "Years Excellence" },
  { value: "500+", label: "Enterprise Projects" },
  { value: "99.99%", label: "SLA Uptime" },
  { value: "3", label: "Global Hubs" },
];

const teamMembers = [
  {
    name: "Alex Sterling",
    role: "Chief Executive Officer & Founder",
    bio: "Pioneered Riolabz's international expansion across UK and Middle East tech corridors.",
    image: "/about-leader1.jpg",
    location: "London, UK 🇬🇧",
    spec: "Enterprise Growth & Strategy",
  },
  {
    name: "Dr. Ananya Nair",
    role: "VP of Artificial Intelligence & Systems",
    bio: "PhD in Neural Networks. Leads our AI LLM orchestration and high-concurrency microservices team.",
    image: "/about-leader2.jpg",
    location: "Kochi, India 🇮🇳",
    spec: "AI & Neural Systems",
  },
  {
    name: "Tariq Al-Mansoor",
    role: "Head of Cloud Infrastructure & SLA",
    bio: "AWS & GCP certified architect specializing in multi-region Kubernetes and zero-downtime clustering.",
    image: "/about-leader3.jpg",
    location: "Dubai, UAE 🇦🇪",
    spec: "Multi-Cloud DevOps",
  },
];

const milestones = [
  {
    year: "2014",
    title: "Inception in Kochi",
    desc: "Founded as a high-precision software engineering laboratory in Infopark Phase 1.",
  },
  {
    year: "2018",
    title: "Global Expansion",
    desc: "Opened client hubs in London (Canary Wharf) and Dubai Internet City.",
  },
  {
    year: "2022",
    title: "AI & Multi-Cloud Divisions",
    desc: "Launched dedicated LLM RAG pipelines and 24/7 SLA DevOps management.",
  },
  {
    year: "2026",
    title: "500+ Global Enterprises",
    desc: "Trusted technology partner for Fortune 500 brands and high-growth scaleups worldwide.",
  },
];

const companyValues = [
  {
    title: "Engineering Precision",
    description: "Zero technical debt architecture, 100% test coverage, and strict code review standards across all divisions.",
    icon: Code2,
    accent: "border-[#2563eb]",
  },
  {
    title: "Transparent Telemetry",
    description: "Real-time client access to daily Git commits, CI/CD build logs, and agile sprint burn-down charts.",
    icon: TrendingUp,
    accent: "border-[#00f0b5]",
  },
  {
    title: "SOC-2 Type II Security",
    description: "Enterprise-grade data encryption, automated vulnerability scanning, and fault-tolerant cloud backends.",
    icon: ShieldCheck,
    accent: "border-indigo-500",
  },
  {
    title: "Global Multi-Hub Reach",
    description: "24/7 SLA infrastructure management seamlessly operating across Kochi, London, and Dubai centers.",
    icon: Globe2,
    accent: "border-emerald-500",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white selection:bg-[#2563eb] selection:text-white">
      <Navbar />
      <MobileMenu />

      <main className="flex-grow pt-28 pb-20">
        
        {/* HERO SECTION */}
        <section className="relative py-16 overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-radial from-[#2563eb]/20 via-[#00f0b5]/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto space-y-6">
              
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white text-xs font-mono font-semibold uppercase tracking-widest shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#00f0b5]" />
                  #REDEFINING_ENGINEERING
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black text-white tracking-tight leading-[1.08]"
              >
                We Build Tech That Powers<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] via-cyan-400 to-[#00f0b5]">
                  Future-Proof Enterprises
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-300 text-base sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto"
              >
                From a vision in Kochi to a global technology partner operating across London and Dubai, Riolabz unites high-concurrency software, modern UI/UX design, and multi-cloud infrastructure.
              </motion.p>

              {/* Stats Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="pt-4 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
              >
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                    <div className="text-2xl sm:text-3xl font-heading font-black text-white">{stat.value}</div>
                    <div className="text-[11px] font-mono text-slate-400 font-semibold">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

            </div>
          </div>
        </section>

        {/* CINEMATIC HERO IMAGE FRAME */}
        <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="relative h-[360px] sm:h-[450px] lg:h-[500px] w-full rounded-3xl overflow-hidden border border-white/15 bg-slate-900 shadow-2xl group"
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

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00f0b5]/10 border border-[#00f0b5]/30 text-[#00f0b5] font-mono text-xs font-bold uppercase tracking-widest">
                  <Users className="w-3.5 h-3.5" />
                  WORLD-CLASS ENGINEERING CULTURE
                </span>
                <h2 className="text-2xl sm:text-4xl font-heading font-black text-white leading-tight">
                  50+ Software Engineers, Designers, &amp; Cloud Architects
                </h2>
              </div>

              <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/15 text-xs font-mono text-slate-300">
                <div className="w-2.5 h-2.5 rounded-full bg-[#00f0b5] animate-pulse" />
                <span>24/7 SLA ACTIVE TELEMETRY</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* MILESTONES / OUR STORY */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10 mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono font-bold text-[#00f0b5] uppercase tracking-widest">OUR EVOLUTION</span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-white leading-tight">
                A Decade of Engineering Milestones
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                From our roots in Kerala&apos;s tech capital to serving Fortune 500 enterprises in London and Dubai, Riolabz has maintained a single-minded commitment to technical rigor.
              </p>

              <div className="pt-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2563eb] hover:bg-blue-600 text-white font-bold text-xs transition-all shadow-lg"
                >
                  <span>Explore Engineering Divisions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {milestones.map((item) => (
                <div key={item.year} className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-2 hover:border-[#2563eb]/40 transition-colors">
                  <div className="text-2xl font-mono font-black text-[#00f0b5]">{item.year}</div>
                  <h3 className="text-lg font-heading font-bold text-white">{item.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* VALUES BENTO GRID */}
        <section className="py-20 bg-slate-900/60 border-y border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
              <span className="text-xs font-mono font-bold text-[#2563eb] uppercase tracking-widest">OUR CORE PRINCIPLES</span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-white">What Drives Riolabz</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyValues.map((val) => {
                const Icon = val.icon;
                return (
                  <div key={val.title} className={`bg-white/5 p-8 rounded-3xl border ${val.accent} hover:bg-white/10 transition-all duration-300 space-y-4 shadow-xl`}>
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 text-[#00f0b5] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-white">{val.title}</h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{val.description}</p>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* EXECUTIVE LEADERSHIP SHOWCASE */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-mono font-bold text-[#00f0b5] uppercase tracking-widest">LEADERSHIP TEAM</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-white">Guided by Engineering Veterans</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white/5 rounded-3xl border border-white/10 overflow-hidden shadow-2xl hover:border-[#2563eb]/50 transition-all duration-300 group flex flex-col justify-between">
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
                  <h3 className="text-xl font-heading font-black text-white">{member.name}</h3>
                  <p className="text-xs font-mono text-[#2563eb] font-semibold">{member.role}</p>
                  <p className="text-slate-400 text-xs leading-relaxed pt-1">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="mt-20 bg-gradient-to-r from-slate-900 via-[#2563eb]/20 to-slate-900 rounded-3xl p-8 sm:p-12 border border-white/15 text-white text-center space-y-6 shadow-2xl">
            <h3 className="text-3xl font-heading font-black">Ready to Collaborate with Riolabz?</h3>
            <p className="text-slate-300 text-sm max-w-xl mx-auto">
              Whether building a new enterprise AI platform or scaling cloud infrastructure, our solution architects are ready.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#2563eb] hover:bg-blue-600 text-white font-bold text-sm transition-all shadow-xl"
            >
              <span>Schedule Technical Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
