"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote, Sparkles } from "lucide-react";

const testimonials = [
  {
    quote:
      "Riolabz delivered our complex multi-tenant web platform on budget and weeks ahead of schedule. Precision engineering at its finest.",
    author: "Aaron J. Miller",
    role: "CTO, FinTech Matrix (UK)",
    avatar: "/client1.jpg",
    rating: 5,
  },
  {
    quote:
      "Their technical depth and architectural clarity are exceptional. They built our healthcare SaaS platform with flawless 99.99% uptime.",
    author: "David Rhee",
    role: "Founder, HealthTech AI (USA)",
    avatar: "/client2.jpg",
    rating: 5,
  },
  {
    quote:
      "Attention to detail, timely delivery, and proactive communication. Riolabz is our long-term partner for scalable web products.",
    author: "Elena Rodriguez",
    role: "Head of Product, Luxura Global (Dubai)",
    avatar: "/client3.jpg",
    rating: 5,
  },
];

export const TestimonialSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50/80 border-t border-slate-200/80 relative overflow-hidden">
      {/* Background Soft Ambient Light */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-100/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-300 bg-white text-slate-800 text-xs font-mono font-semibold uppercase tracking-widest shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#2563eb]" />
              CLIENT REVIEWS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-heading font-black text-slate-900 tracking-tight"
          >
            Partner Perspectives
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed"
          >
            What technology leaders say about engineering digital products with Riolabz.
          </motion.p>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div className="space-y-6 relative z-10">
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-slate-200 group-hover:text-[#2563eb]/20 transition-colors" />
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 text-base leading-relaxed font-normal italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info with Profile Avatar */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-4 relative z-10">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-slate-200 flex-shrink-0 shadow-sm">
                  <Image
                    src={item.avatar}
                    alt={item.author}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-base font-heading font-bold text-slate-900">
                    {item.author}
                  </h3>
                  <div className="text-xs text-slate-500 font-mono">
                    {item.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
