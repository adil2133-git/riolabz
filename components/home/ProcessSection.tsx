"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Search, Compass, Code2, Rocket, CheckCircle2, ArrowRight, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";

const processStages = [
  {
    id: "01",
    stage: "STAGE 01",
    title: "Discovery & Architectural Blueprint",
    subtitle: "TECHNICAL SCOPING",
    shortNav: "01 / Discovery",
    description:
      "Detailed requirements scoping, system architecture blueprinting, and risk analysis tailored to enterprise goals.",
    deliverables: [
      "System Architecture & API Specs",
      "Cloud Infrastructure Roadmap",
      "Sprint Milestones Schedule",
    ],
    icon: Search,
    image: "/process-discovery.jpg",
    badge: "Architectural Scoping",
  },
  {
    id: "02",
    stage: "STAGE 02",
    title: "Modular UI/UX Design & Prototyping",
    subtitle: "DESIGN SYSTEMS & FIGMA",
    shortNav: "02 / UI/UX Design",
    description:
      "Modular design systems, Figma tokens, and interactive wireframes to validate user flows before coding.",
    deliverables: [
      "Figma Design Systems & Tokens",
      "Interactive High-Fidelity Wireframes",
      "Database Schemas & Data Models",
    ],
    icon: Compass,
    image: "/process-design.jpg",
    badge: "Design Token Systems",
  },
  {
    id: "03",
    stage: "STAGE 03",
    title: "Agile Development & Automated QA",
    subtitle: "SPRINTS & CI/CD TELEMETRY",
    shortNav: "03 / Agile Dev",
    description:
      "Two-week agile sprints, test-driven Next.js/React development, automated CI/CD pipelines, and 100% code coverage.",
    deliverables: [
      "Agile Sprint Code Deliverables",
      "Automated CI/CD Deployment",
      "Unit & E2E Testing Suites",
    ],
    icon: Code2,
    image: "/process-dev.jpg",
    badge: "100% Code Coverage",
  },
  {
    id: "04",
    stage: "STAGE 04",
    title: "Zero-Downtime Launch & 24/7 SLA",
    subtitle: "CLOUD DEPLOYMENT & SUPPORT",
    shortNav: "04 / Cloud Launch",
    description:
      "Seamless GCP/AWS cloud production deployment with continuous 24/7 SLA uptime telemetry monitoring.",
    deliverables: [
      "Zero-Downtime Production Launch",
      "24/7 Managed SLA Infrastructure",
      "Automated Database Clustering",
    ],
    icon: Rocket,
    image: "/process-launch.jpg",
    badge: "99.99% SLA Guarantee",
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
        opacity: 0.45,
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
        opacity: 0.45,
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
      className="pt-6 pb-6 bg-slate-950 text-white border-t border-slate-800 relative overflow-hidden flex flex-col justify-center min-h-[520px]"
    >
      {/* Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[300px] bg-[#2563eb]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-[#00f0b5]/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header (Compact layout) */}
        <div className="text-center max-w-xl mx-auto space-y-0.5 mb-2">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border border-white/10 bg-white/5 text-white text-[9px] font-mono font-semibold uppercase tracking-widest">
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
            className="text-slate-400 text-[11px] font-normal leading-tight"
          >
            Swipe horizontally or click cards to travel through our 4-stage execution track.
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
                    ? "bg-[#2563eb] text-white border-[#2563eb] shadow-md shadow-[#2563eb]/20 scale-105"
                    : "bg-white/5 hover:bg-white/10 text-slate-400 border-white/10"
                }`}
              >
                <span>{stage.shortNav}</span>
              </button>
            );
          })}
        </div>

        {/* 3D CURVED TRACK STAGE CAROUSEL (340px Height - Fits 100% in viewport) */}
        <div className="relative max-w-5xl mx-auto flex items-center justify-center h-[330px] sm:h-[350px] [perspective:1200px]">
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
                      ? "border-[#2563eb] bg-slate-900 shadow-[0_0_50px_rgba(37,99,235,0.3)]"
                      : "border-white/15 hover:border-white/30"
                  }`}
                >
                  {/* Top Image Frame (h-28 sm:h-32) */}
                  <div className="relative h-28 sm:h-32 w-full rounded-xl overflow-hidden border border-white/15 bg-slate-950">
                    <Image
                      src={stage.image}
                      alt={stage.title}
                      fill
                      sizes="350px"
                      className="object-cover opacity-90"
                      priority={idx === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-2 left-2 right-2 flex items-center justify-between z-10">
                      <span className="px-2 py-0.5 rounded-full bg-slate-900/90 backdrop-blur-md text-[#00f0b5] text-[9px] font-mono font-bold border border-white/20">
                        {stage.stage}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-slate-900/90 backdrop-blur-md text-white text-[9px] font-mono font-semibold border border-white/15 flex items-center gap-1">
                        <ShieldCheck className="w-2.5 h-2.5 text-[#00f0b5]" />
                        {stage.badge}
                      </span>
                    </div>

                    {/* Stage Watermark Number */}
                    <div className="absolute bottom-1 right-2.5 z-10 text-2xl font-mono font-black text-white/25 select-none">
                      {stage.id}
                    </div>
                  </div>

                  {/* Stage Copy Details */}
                  <div className="space-y-1">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1 text-[9px] font-mono text-[#2563eb] font-bold">
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

                    {/* Deliverables Checklist */}
                    <div className="pt-1 space-y-0.5 border-t border-white/10">
                      <div className="text-[8px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                        KEY STAGE DELIVERABLES
                      </div>
                      <div className="space-y-0.5">
                        {stage.deliverables.map((del) => (
                          <div key={del} className="flex items-center gap-1 text-[9px] text-slate-200 font-medium bg-white/5 px-2 py-0.5 rounded border border-white/10">
                            <CheckCircle2 className="w-2.5 h-2.5 text-[#00f0b5] flex-shrink-0" />
                            <span className="line-clamp-1">{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="pt-1 border-t border-white/10 flex items-center justify-between text-[9px] font-mono">
                    <span className="text-slate-400">RIOLABZ STAGE {stage.id} / 04</span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1 text-[#00f0b5] font-bold hover:text-white transition-colors"
                    >
                      <span>Scope</span>
                      <ArrowRight className="w-2.5 h-2.5" />
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
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#2563eb] text-white border border-white/15 transition-all flex items-center justify-center shadow-lg active:scale-95 text-xs"
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
                  activeIdx === i ? "bg-[#00f0b5] w-6" : "bg-white/20 w-1.5 hover:bg-white/40"
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
