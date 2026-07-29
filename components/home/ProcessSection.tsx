"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Search, Compass, Code2, Rocket, CheckCircle2, ArrowRight, ShieldCheck, ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";

const processStages = [
  {
    id: "01",
    stage: "STAGE 01",
    title: "Discovery & System Blueprint",
    subtitle: "PHASE 01 · REQUIREMENTS",
    shortNav: "01 / Discovery",
    description:
      "Detailed stakeholder interviews, technical stack alignment, and risk analysis tailored to enterprise goals.",
    outcome: "Reduces mid-project scope changes by up to 40%.",
    duration: "EST. DURATION: 2–3 WEEKS",
    deliverables: [
      "Core System & API Specifications",
      "Cloud Infrastructure Roadmap",
      "Security & Compliance Audit",
    ],
    icon: Search,
    image: "/process-discovery.jpg",
    badge: "Architectural Scoping",
  },
  {
    id: "02",
    stage: "STAGE 02",
    title: "Modular UI/UX & Prototyping",
    subtitle: "PHASE 02 · DESIGN SYSTEM",
    shortNav: "02 / UI/UX Design",
    description:
      "Figma component tokens, design systems, and interactive high-fidelity wireframes to validate user flows before coding.",
    outcome: "Increases user onboarding completion by 65%.",
    duration: "EST. DURATION: 2 WEEKS",
    deliverables: [
      "Figma Design Tokens & Components",
      "Interactive Prototype Wireframes",
      "WCAG 2.1 AA Accessibility Specs",
    ],
    icon: Compass,
    image: "/process-design.jpg",
    badge: "Design System Tokens",
  },
  {
    id: "03",
    stage: "STAGE 03",
    title: "Agile Development & QA",
    subtitle: "PHASE 03 · SPRINT EXECUTION",
    shortNav: "03 / Agile Dev",
    description:
      "Two-week agile sprints, test-driven Next.js/React development, automated CI/CD pipelines, and 100% code coverage.",
    outcome: "Accelerates time-to-market with 100% test coverage.",
    duration: "EST. DURATION: 4–6 WEEKS",
    deliverables: [
      "Agile Sprint Code Deliverables",
      "Automated CI/CD Deployment",
      "Unit & E2E Testing Suites",
    ],
    icon: Code2,
    image: "/process-dev.jpg",
    badge: "Automated Testing",
  },
  {
    id: "04",
    stage: "STAGE 04",
    title: "Zero-Downtime Launch & SLA",
    subtitle: "PHASE 04 · DEPLOYMENT",
    shortNav: "04 / Cloud Launch",
    description:
      "Seamless GCP/AWS cloud production deployment with continuous 24/7 SLA uptime telemetry monitoring.",
    outcome: "Guarantees 99.99% uptime with zero deployment outages.",
    duration: "EST. DURATION: 1 WEEK",
    deliverables: [
      "Zero-Downtime Production Launch",
      "24/7 Managed SLA Infrastructure",
      "Automated Database Clustering",
    ],
    icon: Rocket,
    image: "/process-launch.jpg",
    badge: "99.99% SLA Uptime",
  },
];

export const ProcessSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % processStages.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + processStages.length) % processStages.length);
  };

  const goToStage = (index: number) => {
    setActiveIdx(index);
  };

  // ONLY capture HORIZONTAL scroll swipes (deltaX), ignore vertical deltaY
  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) > 25) {
      if (e.deltaX > 0) {
        handleNext();
      } else if (e.deltaX < 0) {
        handlePrev();
      }
    }
  };

  // Responsive 3D Arc offsets
  const getCardStyle = (index: number) => {
    const total = processStages.length;
    let diff = (index - activeIdx + total) % total;
    if (diff > total / 2) diff -= total;

    if (diff === 0) {
      // CENTER ACTIVE CARD
      return {
        x: 0,
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
        zIndex: 30,
        rotateY: 0,
        pointerEvents: "auto" as const,
      };
    } else if (diff === -1 || (diff === total - 1 && activeIdx === 0)) {
      // LEFT PREVIEW CARD
      return {
        x: -380,
        scale: 0.8,
        opacity: 0.5,
        filter: "blur(3px)",
        zIndex: 10,
        rotateY: 18,
        pointerEvents: "auto" as const,
      };
    } else if (diff === 1 || (diff === -(total - 1) && activeIdx === total - 1)) {
      // RIGHT PREVIEW CARD
      return {
        x: 380,
        scale: 0.8,
        opacity: 0.5,
        filter: "blur(3px)",
        zIndex: 10,
        rotateY: -18,
        pointerEvents: "auto" as const,
      };
    } else {
      // FAR HIDDEN CARDS
      return {
        x: diff > 0 ? 600 : -600,
        scale: 0.65,
        opacity: 0,
        filter: "blur(5px)",
        zIndex: 0,
        rotateY: diff > 0 ? -30 : 30,
        pointerEvents: "none" as const,
      };
    }
  };

  return (
    <section
      onWheel={handleWheel}
      className="pt-8 pb-8 bg-slate-950 text-white relative overflow-hidden flex flex-col justify-center min-h-[520px]"
    >
      {/* Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[300px] bg-[#2563eb]/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-[#00f0b5]/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-0.5 mb-2">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-[#00f0b5] text-[9px] font-mono font-bold uppercase tracking-widest">
              <Sparkles className="w-2.5 h-2.5 text-[#00f0b5]" />
              ENGINEERED DELIVERY
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl sm:text-2xl lg:text-3xl font-heading font-black text-white tracking-tight"
          >
            How We Build &amp; Deliver
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 text-[11px] font-medium leading-tight"
          >
            Swipe or click through our 4-stage delivery process.
          </motion.p>
        </div>

        {/* Stage Navigation Pills */}
        <div className="flex items-center justify-center gap-1.5 flex-wrap mb-3 relative z-40">
          {processStages.map((stage, idx) => {
            const isActive = activeIdx === idx;
            return (
              <button
                key={stage.id}
                onClick={() => goToStage(idx)}
                className={`px-3 py-1 rounded-full font-mono text-[10px] font-bold transition-all duration-300 flex items-center gap-1 border ${
                  isActive
                    ? "bg-[#2563eb] text-white border-[#2563eb] shadow-md shadow-[#2563eb]/25 scale-105"
                    : "bg-white/10 hover:bg-white/20 text-slate-200 border-white/20"
                }`}
              >
                <span>{stage.shortNav}</span>
              </button>
            );
          })}
        </div>

        {/* 3D CURVED TRACK STAGE CAROUSEL */}
        <div className="relative max-w-5xl mx-auto flex items-center justify-center h-[380px] sm:h-[410px] [perspective:1200px]">
          {processStages.map((stage, idx) => {
            const style = getCardStyle(idx);
            const isCenter = activeIdx === idx;
            const Icon = stage.icon;

            return (
              <motion.div
                key={stage.id}
                onClick={() => goToStage(idx)}
                animate={{
                  x: style.x,
                  scale: style.scale,
                  opacity: style.opacity,
                  filter: style.filter,
                  rotateY: style.rotateY,
                  zIndex: style.zIndex,
                }}
                transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
                className="absolute w-[270px] sm:w-[310px] lg:w-[340px] cursor-pointer shadow-2xl [transform-style:preserve-3d]"
                style={{ pointerEvents: style.pointerEvents }}
              >
                <div
                  className={`bg-slate-900/95 backdrop-blur-2xl border rounded-2xl p-4 text-white transition-all duration-300 space-y-2.5 ${
                    isCenter
                      ? "border-[#2563eb] bg-slate-900 shadow-[0_0_50px_rgba(37,99,235,0.35)]"
                      : "border-white/15 hover:border-white/30"
                  }`}
                >
                  {/* Top Image Frame (Consistent Blue/Indigo Duotone Overlay) */}
                  <div className="relative h-28 sm:h-32 w-full rounded-xl overflow-hidden border border-white/20 bg-slate-950">
                    <Image
                      src={stage.image}
                      alt={stage.title}
                      fill
                      sizes="350px"
                      className="object-cover opacity-90"
                      priority={idx === 0}
                    />

                    {/* CONSISTENT BRAND DUOTONE OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#2563eb]/45 via-indigo-950/40 to-slate-950/80 mix-blend-multiply pointer-events-none" />
                    <div className="absolute inset-0 bg-[#2563eb]/10 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-2 left-2 right-2 flex items-center justify-between z-10">
                      <span className="px-2 py-0.5 rounded-full bg-slate-900/90 backdrop-blur-md text-[#00f0b5] text-[9px] font-mono font-bold border border-emerald-500/30 shadow-xs">
                        {stage.badge}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-slate-900/90 backdrop-blur-md text-white text-[9px] font-mono font-semibold border border-white/20 flex items-center gap-1 shadow-xs">
                        <ShieldCheck className="w-2.5 h-2.5 text-[#00f0b5]" />
                        VERIFIED
                      </span>
                    </div>

                    {/* Stage Watermark Number */}
                    <div className="absolute bottom-1 right-2.5 z-10 text-2xl font-mono font-black text-white/35 select-none">
                      {stage.id}
                    </div>
                  </div>

                  {/* Stage Copy Details */}
                  <div className="space-y-1">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1 text-[9px] font-mono text-[#00f0b5] font-bold">
                        <Icon className="w-3 h-3 text-[#00f0b5]" />
                        <span>{stage.subtitle}</span>
                      </div>
                      <h3 className="text-sm sm:text-base font-heading font-black text-white leading-tight">
                        {stage.title}
                      </h3>
                    </div>

                    <p className="text-slate-300 text-[10px] leading-snug font-normal line-clamp-2">
                      {stage.description}
                    </p>

                    {/* Business Outcome Impact Badge */}
                    <div className="pt-1 flex items-center gap-1.5 text-[10px] font-mono text-[#00f0b5] font-medium">
                      <TrendingUp className="w-3 h-3 flex-shrink-0" />
                      <span className="line-clamp-1">{stage.outcome}</span>
                    </div>

                    {/* Deliverables Checklist (Sleek Minimal List, No Thick Boxes) */}
                    <div className="pt-2 space-y-1 border-t border-white/10">
                      <div className="text-[9px] font-mono text-slate-400 font-bold uppercase tracking-wider mb-1">
                        KEY DELIVERABLES
                      </div>
                      <div className="space-y-1">
                        {stage.deliverables.map((del) => (
                          <div key={del} className="flex items-center gap-1.5 text-[10px] text-slate-200 font-medium">
                            <CheckCircle2 className="w-3 h-3 text-[#00f0b5] flex-shrink-0 opacity-90" />
                            <span className="line-clamp-1">{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono font-semibold">
                    <span className="text-slate-400 tracking-wide">{stage.duration}</span>
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-1 text-[#00f0b5] hover:text-white transition-colors font-bold"
                    >
                      <span>View Full Scope</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Carousel Controls */}
        <div className="flex items-center justify-center gap-3 mt-3 relative z-40">
          <button
            onClick={handlePrev}
            aria-label="Previous Stage"
            className="w-8 h-8 rounded-full bg-white/15 hover:bg-[#2563eb] text-white border border-white/20 transition-all flex items-center justify-center shadow-lg active:scale-95 text-xs"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>

          {/* Stage Step Indicator Dots */}
          <div className="flex items-center gap-1.5">
            {processStages.map((_, i) => (
              <button
                key={i}
                onClick={() => goToStage(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIdx === i ? "bg-[#00f0b5] w-7" : "bg-white/30 w-1.5 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            aria-label="Next Stage"
            className="w-8 h-8 rounded-full bg-[#2563eb] hover:bg-blue-600 text-white transition-all flex items-center justify-center shadow-lg active:scale-95 text-xs"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
