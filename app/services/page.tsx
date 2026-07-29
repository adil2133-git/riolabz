"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Footer } from "@/components/layout/Footer";
import { 
  Code2, Smartphone, Cloud, Bot, ArrowRight, 
  CheckCircle2, Sparkles, Send, Mail, Cpu
} from "lucide-react";
import { ServiceCard } from "@/types";
import { serviceCards } from "@/lib/data/services";

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<ServiceCard | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-900 font-sans selection:bg-[#2563eb] selection:text-white">
      <Navbar />
      <MobileMenu />

      <main className="flex-grow">
        <section className="relative h-[360px] sm:h-[420px] lg:h-[460px] bg-slate-900 text-white overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/service-hero2.jpg"
              alt="Services Hero Background"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-80"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.srcset = "/cloud.jpg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-slate-950/70 pointer-events-none" />
          </div>

          <div className="absolute top-0 right-0 w-96 h-full bg-gradient-to-l from-[#2563eb]/20 to-transparent pointer-events-none hidden lg:block" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4 pt-12">

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white drop-shadow-md leading-[1.1]"
            >
              Enterprise Engineering Services &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] via-cyan-400 to-[#00f0b5]">
                Digital Capabilities
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-300 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed"
            >
              Bespoke software architecture, 60fps mobile applications, multi-cloud DevOps, and industrial IoT telemetry engineered for global brands.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex items-center justify-center gap-2 text-xs font-mono text-slate-300 font-semibold pt-1"
            >
              <Link href="/" className="hover:text-[#00f0b5] transition-colors">
                Home
              </Link>
              <span>&gt;</span>
              <span className="text-[#00f0b5]">Services &amp; Capabilities</span>
            </motion.div>
          </div>
        </section>

        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((card, index) => {
              const Icon = card.icon;
              const isHighlight = card.active;

              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.05)] border border-slate-200/80 relative overflow-hidden group hover:shadow-2xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-heading font-black text-slate-900 group-hover:text-[#2563eb] transition-colors leading-tight">
                        {card.title}
                      </h3>
                      <span className="text-[10px] font-mono font-bold text-[#2563eb] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                        {card.metric}
                      </span>
                    </div>

                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-[85%]">
                      {card.description}
                    </p>

                    <div className="pt-6 flex items-center gap-3">
                      <button
                        onClick={() => setSelectedService(card)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xs ${
                          isHighlight
                            ? "bg-[#2563eb] text-white shadow-md scale-105"
                            : "bg-slate-100 group-hover:bg-[#2563eb] text-slate-700 group-hover:text-white"
                        }`}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => setSelectedService(card)}
                        className="text-xs font-mono font-bold text-slate-600 group-hover:text-[#2563eb] transition-colors"
                      >
                        Read more
                      </button>
                    </div>
                  </div>

                  <div className="absolute -bottom-6 -right-6 w-36 h-36 rounded-full bg-slate-100/80 group-hover:bg-blue-50/90 transition-all duration-500 flex items-center justify-center pointer-events-none">
                    <div className="w-20 h-20 text-[#2563eb]/40 group-hover:text-[#2563eb]/80 transition-colors flex items-center justify-center -mt-4 -ml-4">
                      <Icon className="w-12 h-12 stroke-[1.5]" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200 relative overflow-hidden"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2563eb] flex items-center justify-center font-bold">
                      {React.createElement(selectedService.icon, { className: "w-6 h-6" })}
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-[#2563eb] uppercase">DIVISION {selectedService.num}</span>
                      <h3 className="text-xl font-heading font-black text-slate-900">{selectedService.title}</h3>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center font-bold text-sm"
                  >
                    ✕
                  </button>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {selectedService.description}
                </p>

                <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider mb-2">INCLUDED DELIVERABLES:</div>
                  {selectedService.deliverables.map((d) => (
                    <div key={d} className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-[#2563eb]" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 font-bold">SLA: {selectedService.metric}</span>
                  <Link
                    href="/#contact"
                    onClick={() => setSelectedService(null)}
                    className="px-6 py-3 rounded-full bg-[#2563eb] hover:bg-blue-600 text-white font-bold text-xs transition-all shadow-md flex items-center gap-2 hover:scale-[1.02]"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <section className="bg-slate-950 text-white py-12 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/20 text-[#2563eb] border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#2563eb]" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-black text-white">Subscribe now to get latest updates</h3>
                  <p className="text-slate-400 text-xs">Receive our monthly engineering whitepapers and tech insights.</p>
                </div>
              </div>

              <div className="w-full md:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:border-b sm:border-slate-700 sm:pb-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="bg-white/5 sm:bg-transparent border sm:border-0 border-slate-700 rounded-xl sm:rounded-none text-white text-xs placeholder:text-slate-500 focus:outline-none w-full sm:w-64 px-4 sm:px-2 py-3 sm:py-0"
                />
                <button
                  aria-label="Subscribe"
                  className="w-full sm:w-10 h-10 rounded-xl bg-[#2563eb] hover:bg-blue-600 text-white flex items-center justify-center gap-2 transition-all flex-shrink-0 shadow-md text-xs font-semibold"
                >
                  <Send className="w-4 h-4" />
                  <span className="sm:hidden">Subscribe</span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
