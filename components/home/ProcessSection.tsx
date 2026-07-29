"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Search, Compass, Code2, Rocket, CheckCircle2, ArrowRight, ShieldCheck, ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";
import { processStages } from "@/lib/data/process";

// 4-Stage 3D interactive process carousel component
export const ProcessSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // Navigate to next stage card
  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % processStages.length);
  };

  // Navigate to previous stage card
  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + processStages.length) % processStages.length);
  };

  const goToStage = (index: number) => {
    setActiveIdx(index);
  };

  // Handle horizontal mouse wheel scroll
  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) > 25) {
      if (e.deltaX > 0) handleNext();
      else if (e.deltaX < 0) handlePrev();
    }
  };

  // Handle touch swipe start position on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // Detect horizontal touch swipe left or right on mobile
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) {
      if (delta > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  const getCardStyle = (index: number, containerWidth: number) => {
    const total = processStages.length;
    let diff = (index - activeIdx + total) % total;
    if (diff > total / 2) diff -= total;

    const sideOffset = Math.min(containerWidth * 0.55, 340);
    const farOffset = Math.min(containerWidth * 0.85, 560);

    if (diff === 0) {
      return {
        x: 0, scale: 1, opacity: 1, filter: "blur(0px)",
        zIndex: 30, rotateY: 0, pointerEvents: "auto" as const,
      };
    } else if (diff === -1 || (diff === total - 1 && activeIdx === 0)) {
      return {
        x: -sideOffset, scale: 0.82, opacity: 0.45, filter: "blur(2px)",
        zIndex: 10, rotateY: 16, pointerEvents: "auto" as const,
      };
    } else if (diff === 1 || (diff === -(total - 1) && activeIdx === total - 1)) {
      return {
        x: sideOffset, scale: 0.82, opacity: 0.45, filter: "blur(2px)",
        zIndex: 10, rotateY: -16, pointerEvents: "auto" as const,
      };
    } else {
      return {
        x: diff > 0 ? farOffset : -farOffset, scale: 0.65, opacity: 0,
        filter: "blur(5px)", zIndex: 0,
        rotateY: diff > 0 ? -28 : 28, pointerEvents: "none" as const,
      };
    }
  };

  return (
    <section
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="pt-8 pb-8 bg-slate-950 text-white relative overflow-hidden flex flex-col justify-center min-h-[480px] sm:min-h-[520px]"
    >
      {/* Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[300px] bg-[#2563eb]/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-[#00f0b5]/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-0.5 mb-2">

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
        <div
          id="process-carousel"
          className="relative max-w-5xl mx-auto w-full flex items-center justify-center h-[380px] sm:h-[410px] [perspective:1200px]"
        >
          {processStages.map((stage, idx) => {
            const containerWidth = typeof window !== "undefined" ? Math.min(window.innerWidth, 1024) : 800;
            const style = getCardStyle(idx, containerWidth);
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
                className="absolute w-[260px] sm:w-[300px] lg:w-[340px] cursor-pointer shadow-2xl [transform-style:preserve-3d]"
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
