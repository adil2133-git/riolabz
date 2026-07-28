"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Compass, Code2, Rocket, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

const processStages = [
  {
    id: "01",
    tag: "STAGE 01",
    title: "Discovery & Technical Roadmap",
    subtitle: "Architectural Scoping",
    description:
      "We begin with detailed requirements scoping, system architecture planning, risk analysis, and cloud tech stack selection tailored specifically to your enterprise targets.",
    deliverables: [
      "System Architecture & API Specs",
      "Cloud Infrastructure Roadmap",
      "Technical Risk & Compliance Scoping",
      "Sprint Milestones & Delivery Schedule",
    ],
    icon: Search,
    image: "/process-discovery.jpg",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    id: "02",
    tag: "STAGE 02",
    title: "Modular UI/UX Design",
    subtitle: "Design Systems & Figma Prototypes",
    description:
      "Our design team crafts modular component systems, Figma design tokens, and interactive wireframes to validate user flows and accessibility before writing production code.",
    deliverables: [
      "Figma Design Systems & Tokens",
      "Interactive High-Fidelity Wireframes",
      "Database Schemas & Data Model Diagrams",
      "WCAG 2.1 AA Accessibility Audits",
    ],
    icon: Compass,
    image: "/process-design.jpg",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
  {
    id: "03",
    tag: "STAGE 03",
    title: "Agile Development & Testing",
    subtitle: "Two-Week Sprints & CI/CD Telemetry",
    description:
      "Using two-week agile sprints and test-driven development, we write clean, scalable Next.js and React Native code supported by automated CI/CD pipelines.",
    deliverables: [
      "Two-Week Agile Sprint Deliverables",
      "Automated CI/CD Deployment Pipelines",
      "Unit, Integration & E2E Testing Suites",
      "Daily Git Commits & Code Audits",
    ],
    icon: Code2,
    image: "/process-dev.jpg",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    id: "04",
    tag: "STAGE 04",
    title: "Zero-Downtime Launch & 24/7 SLA",
    subtitle: "Cloud Launch & 24/7 SLA Support",
    description:
      "We execute seamless production deployment onto GCP/AWS cloud clusters, with continuous 24/7 SLA uptime telemetry monitoring, load balancing, and round-the-clock support.",
    deliverables: [
      "Zero-Downtime Production Launch",
      "24/7 Managed SLA Infrastructure Support",
      "Automated Database Backups & Clustering",
      "Continuous Security & Load Audits",
    ],
    icon: Rocket,
    image: "/process-launch.jpg",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
  },
];

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-28 bg-slate-50/70 border-t border-slate-200/80 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#2563eb]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-white text-slate-800 text-xs font-mono font-semibold uppercase tracking-widest shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#2563eb]" />
              ENGINEERED DELIVERY
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-slate-900 tracking-tight"
          >
            How We Build &amp; Deliver
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-lg font-normal leading-relaxed"
          >
            A battle-tested 4-stage methodology for precision software engineering.
          </motion.p>
        </div>

        {/* 4 Process Cards Grid with Custom Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {processStages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-2xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Top Image Frame */}
                <div className="relative h-64 sm:h-72 w-full bg-slate-900 overflow-hidden border-b border-slate-200/80">
                  <Image
                    src={stage.image}
                    alt={stage.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    priority={idx === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                  {/* Top Badges Overlay */}
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                    <span className="px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 text-xs font-mono font-bold shadow-sm">
                      {stage.tag}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border ${stage.badgeColor} bg-white/90 backdrop-blur-md`}>
                      {stage.subtitle}
                    </span>
                  </div>

                  {/* Bottom Stage Title overlay inside image frame */}
                  <div className="absolute bottom-5 left-5 right-5 z-10 text-white flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-heading font-extrabold text-white">
                      {stage.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-8 space-y-6 flex-grow flex flex-col justify-between">
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    {stage.description}
                  </p>

                  {/* Deliverables Checklist Grid */}
                  <div className="pt-2 space-y-3 border-t border-slate-100">
                    <div className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                      DELIVERABLES &amp; OUTPUTS
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {stage.deliverables.map((del) => (
                        <div key={del} className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-slate-50 p-2.5 rounded-lg border border-slate-200/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2563eb] flex-shrink-0" />
                          <span className="line-clamp-1">{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                    <span className="text-xs font-mono text-slate-400 font-semibold">STAGE {stage.id} EXECUTION</span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-[#2563eb] transition-colors"
                    >
                      <span>Explore Scope</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
