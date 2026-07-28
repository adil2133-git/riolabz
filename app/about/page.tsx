"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Footer } from "@/components/layout/Footer";
import { Sparkles, ShieldCheck, Globe2, Users, Award, Code2, ArrowRight } from "lucide-react";

const teamMembers = [
  {
    name: "Alex Sterling",
    role: "Chief Executive Officer & Founder",
    image: "/pngtree-diverse-team-brainstorming-in-modern-office-image_16793832.jpg",
    location: "London, UK",
  },
  {
    name: "Dr. Ananya Nair",
    role: "VP of Artificial Intelligence & Systems",
    image: "/team-diverse-coworkers-modern-office-discuss-their-project-together.jpg",
    location: "Kochi, India",
  },
  {
    name: "Tariq Al-Mansoor",
    role: "Head of Cloud Infrastructure & Enterprise SLA",
    image: "/trust-team.jpg",
    location: "Dubai, UAE",
  },
];

const companyValues = [
  {
    title: "Engineering Precision",
    description: "Zero technical debt architecture, 100% test coverage, and strict code review standards across all divisions.",
    icon: Code2,
  },
  {
    title: "Transparent Telemetry",
    description: "Real-time client access to daily Git commits, CI/CD build logs, and agile sprint burn-down charts.",
    icon: Award,
  },
  {
    title: "SOC-2 Type II Security",
    description: "Enterprise-grade data encryption, automated vulnerability scanning, and fault-tolerant cloud backends.",
    icon: ShieldCheck,
  },
  {
    title: "Global Multi-Hub Reach",
    description: "24/7 SLA infrastructure management seamlessly operating across Kochi, London, and Dubai centers.",
    icon: Globe2,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <MobileMenu />

      <main className="flex-grow pt-32 pb-24">
        {/* About Hero Section */}
        <section className="relative py-12 overflow-hidden">
          <div className="absolute top-10 right-1/4 w-[500px] h-[350px] bg-blue-100/30 rounded-full blur-[130px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-slate-800 text-xs font-mono font-semibold uppercase tracking-widest shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#2563eb]" />
                  #ABOUT_RIOLABZ
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-slate-900 tracking-tight"
              >
                Architecting Digital Excellence for Global Brands
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-600 text-lg sm:text-xl font-normal leading-relaxed"
              >
                Founded with a mission to unite high-performance software engineering, modern UI/UX design, and fault-tolerant cloud backends into a single evolving execution.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Full Team Photo Banner (PROPORTIONATE NATURAL ASPECT RATIO & OVERLAY) */}
        <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-[340px] sm:h-[400px] lg:h-[460px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900">
            <Image
              src="/full-team.jpg"
              alt="Riolabz Global Engineering Team"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover object-[center_15%]"
              priority
            />
            {/* Dark gradient overlay for clear text contrast and premium cinematic feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20" />

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white z-10 space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00f0b5]/10 border border-[#00f0b5]/30 text-[#00f0b5] font-mono text-xs font-bold uppercase tracking-widest">
                <Users className="w-3.5 h-3.5" />
                OUR ENGINEERING CULTURE
              </span>
              <h2 className="text-2xl sm:text-4xl font-heading font-black text-white max-w-2xl leading-tight">
                50+ Engineers, Designers, &amp; Cloud Architects Working Across 3 Continents
              </h2>
            </div>
          </div>
        </section>

        {/* Values Bento Grid */}
        <section className="py-20 bg-slate-50 border-y border-slate-200/80 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
              <span className="text-xs font-mono font-bold text-[#2563eb] uppercase tracking-widest">OUR CORE PRINCIPLES</span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900">What Drives Riolabz</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyValues.map((val) => {
                const Icon = val.icon;
                return (
                  <div key={val.title} className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-xs space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2563eb] border border-blue-200 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-slate-900">{val.title}</h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{val.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Executive Leadership */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-mono font-bold text-[#2563eb] uppercase tracking-widest">LEADERSHIP TEAM</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900">Guided by Engineering Veterans</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-64 w-full bg-slate-900">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="400px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-95"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-mono">
                    📍 {member.location}
                  </div>
                </div>
                <div className="p-6 space-y-1">
                  <h3 className="text-xl font-heading font-black text-slate-900">{member.name}</h3>
                  <p className="text-xs font-mono text-[#2563eb] font-semibold">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="mt-16 bg-slate-900 rounded-3xl p-8 sm:p-12 text-white text-center space-y-6">
            <h3 className="text-3xl font-heading font-black">Ready to Collaborate with Riolabz?</h3>
            <p className="text-slate-300 text-sm max-w-xl mx-auto">
              Whether building a new enterprise AI platform or scaling cloud infrastructure, our engineering teams are ready.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#2563eb] hover:bg-blue-600 text-white font-bold text-sm transition-all shadow-xl"
            >
              <span>Schedule Architecture Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
