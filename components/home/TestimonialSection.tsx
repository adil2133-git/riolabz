"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles, Star } from "lucide-react";

const allTestimonials = [
  {
    id: 1,
    name: "Aaron J. Miller",
    role: "Chief Technology Officer",
    company: "FinTech Matrix (UK)",
    avatar: "/client1.jpg",
    quote:
      "We integrated their custom cloud solutions across all departments, and the impact has been incredible. The platform analytics gave us valuable insights to make faster, better decisions.",
    rating: 5,
  },
  {
    id: 2,
    name: "David Rhee",
    role: "Founder & CEO",
    company: "HealthTech AI (USA)",
    avatar: "/client2.jpg",
    quote:
      "Switching to Riolabz platform has been a game-changer for our engineering team. We've seen a 40% increase in productivity, and tasks that used to take hours now take minutes.",
    rating: 5,
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Head of Product",
    company: "Luxura Global (Dubai)",
    avatar: "/client3.jpg",
    quote:
      "As a growing startup, we needed a enterprise solution that could scale with us. Riolabz delivered an intuitive, flexible platform that made collaboration between teams seamless.",
    rating: 5,
  },
  {
    id: 4,
    name: "Marcus Vance",
    role: "VP of Engineering",
    company: "Aether Dynamics (USA)",
    avatar: "/client1.jpg",
    quote:
      "The technical clarity, speed of delivery, and test coverage provided by Riolabz surpassed all expectations. They are our go-to engineering architects.",
    rating: 5,
  },
];

export const TestimonialSection: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % allTestimonials.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + allTestimonials.length) % allTestimonials.length);
  };

  // Get 3 visible testimonials starting from startIndex
  const visibleTestimonials = [
    allTestimonials[startIndex],
    allTestimonials[(startIndex + 1) % allTestimonials.length],
    allTestimonials[(startIndex + 2) % allTestimonials.length],
  ];

  return (
    <section className="py-28 bg-white border-t border-slate-200/80 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-blue-100/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Doodle Highlight */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-slate-800 text-xs font-mono font-semibold uppercase tracking-widest shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#2563eb]" />
              CLIENT TESTIMONIALS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-slate-900 tracking-tight relative inline-block"
          >
            What our Clients are{" "}
            <span className="text-[#2563eb] relative">
              Saying
              {/* Decorative Accent Underline Stroke */}
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-[#00f0b5]"
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M0 15 Q 50 0 100 15"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed pt-2"
          >
            Discover real stories from clients who&apos;ve unlocked growth, efficiency, and success with our solutions.
          </motion.p>
        </div>

        {/* 3-Card Grid matching Syncly reference screenshot */}
        <AnimatePresence mode="wait">
          <motion.div
            key={startIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {visibleTestimonials.map((item, idx) => (
              <motion.div
                key={`${item.id}-${idx}`}
                whileHover={{ y: -8 }}
                className="bg-slate-50/90 hover:bg-slate-50 rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between items-center text-center space-y-6 group"
              >
                {/* Top Avatar Circle */}
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-slate-300 shadow-md group-hover:border-[#2563eb] transition-colors">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>

                {/* Author Name & Role */}
                <div className="space-y-1">
                  <h3 className="text-xl font-heading font-black text-slate-900">
                    {item.name}
                  </h3>
                  <div className="text-xs text-slate-500 font-mono font-medium">
                    {item.role}
                  </div>
                  <div className="text-[11px] font-mono text-[#2563eb] font-semibold">
                    {item.company}
                  </div>
                </div>

                {/* Quote Body */}
                <p className="text-slate-600 text-sm leading-relaxed font-normal flex-grow">
                  &ldquo;{item.quote}&rdquo;
                </p>

                {/* 5-Star Rating at Bottom */}
                <div className="flex items-center justify-center gap-1 text-amber-400 pt-2">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Navigation Arrow Controls */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            onClick={handlePrev}
            aria-label="Previous Testimonials"
            className="w-12 h-12 rounded-full bg-slate-900 text-white hover:bg-[#2563eb] transition-colors flex items-center justify-center shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            {allTestimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setStartIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  startIndex === i ? "bg-[#2563eb] w-8" : "bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            aria-label="Next Testimonials"
            className="w-12 h-12 rounded-full bg-slate-900 text-white hover:bg-[#2563eb] transition-colors flex items-center justify-center shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
