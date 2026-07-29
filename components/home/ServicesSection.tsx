"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Cloud, BarChart3, Palette, Code2, ShieldAlert, Rocket, ArrowRight } from "lucide-react";
import { servicesList } from "@/lib/data/services";

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200/80 relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 tracking-tight"
          >
            Specialized Expertise
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed"
          >
            Building scalable digital ecosystems through modular architecture and human-centric design.
          </motion.p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.accent}`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-heading font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 group-hover:text-[#2563eb] transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-slate-900 rounded-3xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-xl sm:text-2xl font-heading font-bold">Have a custom technical challenge?</h4>
            <p className="text-slate-400 text-sm">Our engineering architects are ready to design a tailored solution.</p>
          </div>
          <Link
            href="/contact"
            className="px-7 py-3.5 rounded-full bg-white text-slate-900 font-semibold text-sm hover:bg-slate-100 transition-all duration-200 whitespace-nowrap shadow-md"
          >
            Talk to an Architect
          </Link>
        </motion.div>

      </div>
    </section>
  );
};
