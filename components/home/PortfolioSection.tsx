"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, ExternalLink, X, Code, Smartphone, Cloud, Layers } from "lucide-react";

const divisions = [
  {
    id: "software-ai",
    number: "01",
    bgImage: "/division01.png",
    image: "/finance.jpg",
    subtitle: "AI & SOFTWARE DIVISION",
    title: "Software Innovation & Enterprise Platforms",
    description:
      "At Riolabz, we don't just build websites; we engineer intelligent enterprise software ecosystems designed to scale, adapt, and provide measurable value.",
    features: [
      "Custom Microservice & Cloud Architectures",
      "High-Performance Next.js & React Platforms",
      "SOC-2 Enterprise Security & Data Encryption",
      "Scalable API Integrations & Realtime Telemetry",
    ],
    primaryBtn: "View Projects",
    secondaryBtn: "Learn More",
    icon: Code,
    gradient: "from-[#0f172a] via-[#1e293b] to-slate-900",
    modalProjects: [
      { name: "Nexus Global Finance", type: "FinTech Platform", metric: "4.8M Active Users" },
      { name: "Enterprise ERP Portal", type: "Custom ERP System", metric: "99.99% Uptime" },
    ],
    zIndex: "z-10",
  },
  {
    id: "mobile-apps",
    number: "02",
    bgImage: "/division02.png",
    image: "/health.jpg",
    subtitle: "MOBILE APP DIVISION",
    title: "Cross-Platform Mobile Application Hub",
    description:
      "Delivering native-grade iOS and Android mobile products that reach users wherever they are. Built with React Native and modern cloud backends for flawless performance.",
    features: [
      "Cross-Platform iOS & Android Development",
      "Offline-First Synchronization & Caching",
      "Biometric Authentication & Secure Storage",
      "Automated CI/CD Store Deployment",
    ],
    primaryBtn: "View Mobile Apps",
    secondaryBtn: "App Architecture",
    icon: Smartphone,
    gradient: "from-slate-900 via-blue-950 to-slate-900",
    modalProjects: [
      { name: "VitaCure Telehealth", type: "HealthTech iOS & Android", metric: "50k+ Daily Consults" },
      { name: "Luxura Retail App", type: "E-Commerce App", metric: "$120M+ GMV" },
    ],
    zIndex: "z-20",
  },
  {
    id: "cloud-ai",
    number: "03",
    bgImage: "/division03.png",
    image: "/cloud.jpg",
    subtitle: "CLOUD & AI DIVISION",
    title: "Cloud DevOps & Enterprise AI Solutions",
    description:
      "Transforming raw business data into actionable intelligence. We deploy automated GCP/AWS cloud pipelines, custom LLMs, and 24/7 SLA infrastructure.",
    features: [
      "Automated GCP & AWS Cloud Orchestration",
      "Custom AI Models & Workflow Automation",
      "24/7 SLA Monitoring & Incident Response",
      "High-Availability Database Clustering",
    ],
    primaryBtn: "View Cloud Projects",
    secondaryBtn: "Talk to Architect",
    icon: Cloud,
    gradient: "from-slate-900 via-slate-800 to-indigo-950",
    modalProjects: [
      { name: "Cloud Telemetry Engine", type: "DevOps Infrastructure", metric: "< 15ms Latency" },
      { name: "Predictive Analytics Suite", type: "AI Engine", metric: "98% Accuracy" },
    ],
    zIndex: "z-30",
  },
  {
    id: "automation-iot",
    number: "04",
    bgImage: "/division04.png",
    image: "/automation.jpg",
    subtitle: "AUTOMATION & SYSTEMS DIVISION",
    title: "Smart Hardware & Enterprise Automation",
    description:
      "Bringing intelligence to your physical infrastructure with custom IoT hardware integration, automated surveillance, and real-time environment monitoring.",
    features: [
      "Integrated IoT & Smart Hardware Hubs",
      "Automated Surveillance & Access Control",
      "Adaptive Sensor Telemetry & Analytics",
      "Edge Computing & On-Premise Integration",
    ],
    primaryBtn: "Explore Automation",
    secondaryBtn: "Hardware Specs",
    icon: Layers,
    gradient: "from-slate-900 via-teal-950 to-slate-950",
    modalProjects: [
      { name: "Smart Hub Controller", type: "IoT Telemetry", metric: "10k+ Devices" },
      { name: "Biometric Access Core", type: "Hardware Security", metric: "Zero Breach" },
    ],
    zIndex: "z-40",
  },
];

export const PortfolioSection: React.FC = () => {
  const [activeModal, setActiveModal] = useState<typeof divisions[0] | null>(null);

  return (
    <section className="pt-20 pb-8 bg-white border-t border-slate-200/80 relative">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-slate-300 bg-slate-50 text-slate-800 text-xs font-mono font-semibold uppercase tracking-widest shadow-2xs">
              COMPLETED WORKS &amp; DIVISIONS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-heading font-black text-slate-900 tracking-tight"
          >
            Our Production Divisions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed"
          >
            Explore our specialized engineering divisions and delivered systems.
          </motion.p>
        </div>
      </div>

      {/* Sticky Stacking Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {divisions.map((item, index) => {
          const isReverse = index % 2 !== 0;
          const isLast = index === divisions.length - 1;
          return (
            <div
              key={item.id}
              className={`sticky top-20 ${item.zIndex} ${isLast ? "mb-0" : "mb-[20vh]"} transition-all duration-300`}
            >
              <div className="relative bg-white rounded-3xl border border-slate-300 p-6 sm:p-8 lg:p-10 shadow-[0_-10px_40px_rgba(0,0,0,0.08)] overflow-hidden group">
                
                {/* Full Card Background Image */}
                <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden rounded-3xl">
                  <Image
                    src={item.bgImage}
                    alt={`Division ${item.number} Background`}
                    fill
                    priority={index === 0 || index === 3}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    className="object-cover opacity-35 group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Soft Light Overlay so background image is clearly visible */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/75 to-transparent" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  {/* Content Side */}
                  <div className={`lg:col-span-6 space-y-4 ${isReverse ? "lg:order-2" : "lg:order-1"}`}>
                    <div>
                      <span className="inline-block text-xs font-mono font-bold text-[#2563eb] tracking-widest uppercase mb-1">
                        {item.subtitle}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-heading font-black text-slate-900 leading-tight">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
                      {item.description}
                    </p>

                    {/* Feature Check List */}
                    <ul className="space-y-2 pt-1">
                      {item.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2.5 text-slate-700 text-xs sm:text-sm font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#2563eb] flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Division Action Buttons */}
                    <div className="pt-3 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => setActiveModal(item)}
                        className="px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm transition-all duration-200 shadow-md flex items-center gap-2"
                      >
                        <span>{item.primaryBtn}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <Link
                        href="/services"
                        className="px-6 py-2.5 rounded-full bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs sm:text-sm border border-slate-300 transition-all duration-200 shadow-xs"
                      >
                        {item.secondaryBtn}
                      </Link>
                    </div>
                  </div>

                  {/* Visual Side Frame */}
                  <div className={`lg:col-span-6 ${isReverse ? "lg:order-1" : "lg:order-2"}`}>
                    {item.image ? (
                      /* High-Resolution Project Image Visual */
                      <div className="relative h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden border border-slate-200 shadow-xl group">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Overlay gradient & badge */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent p-5 flex flex-col justify-between">
                          <div className="flex justify-between items-center">
                            <span className="text-[10px] font-mono text-white bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded font-semibold border border-white/20">
                              FEATURED PROJECT
                            </span>
                            <button
                              onClick={() => setActiveModal(item)}
                              className="text-xs font-mono text-white bg-[#2563eb] hover:bg-blue-600 px-3 py-1 rounded-full shadow-md transition-colors"
                            >
                              View Specs
                            </button>
                          </div>

                          <div className="text-white space-y-1">
                            <div className="text-xs font-mono text-slate-300">{item.modalProjects[0].type}</div>
                            <div className="text-base sm:text-lg font-bold">{item.modalProjects[0].name}</div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Simulated High-Tech Visual Frame */
                      <div className={`relative h-64 sm:h-72 lg:h-80 rounded-2xl bg-gradient-to-br ${item.gradient} p-6 border border-white/10 shadow-xl flex flex-col justify-between overflow-hidden group`}>
                        {/* Top status bar inside frame */}
                        <div className="flex items-center justify-between relative z-10">
                          <div className="flex items-center gap-2">
                            <item.icon className="w-5 h-5 text-white" />
                            <span className="text-xs font-mono text-slate-300 font-semibold uppercase tracking-wider">
                              DIVISION {item.number}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded font-semibold border border-emerald-500/20">
                            VERIFIED DEPLOYMENT
                          </span>
                        </div>

                        {/* Middle Card Mockup inside visual */}
                        <div className="relative z-10 bg-slate-900/90 backdrop-blur-xl p-4 rounded-xl border border-white/15 shadow-xl space-y-2 group-hover:scale-[1.02] transition-transform duration-300">
                          <div className="text-xs font-mono text-slate-400">Featured System</div>
                          <div className="text-base font-bold text-white">{item.modalProjects[0].name}</div>
                          <div className="flex items-center justify-between text-xs text-slate-300 pt-2 border-t border-white/10 font-mono">
                            <span>{item.modalProjects[0].type}</span>
                            <span className="text-[#00f0b5] font-bold">{item.modalProjects[0].metric}</span>
                          </div>
                        </div>

                        {/* Bottom CTA trigger inside frame */}
                        <div className="relative z-10 flex items-center justify-between text-xs font-mono text-slate-300">
                          <span>Riolabz Production Stack</span>
                          <button
                            onClick={() => setActiveModal(item)}
                            className="text-white hover:text-[#00f0b5] flex items-center gap-1 underline"
                          >
                            Explore Projects <ExternalLink className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Projects Modal */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-xl w-full border border-slate-200 shadow-2xl space-y-6 relative"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-[#2563eb] uppercase tracking-wider">
                  {activeModal.subtitle}
                </span>
                <h4 className="text-2xl font-heading font-black text-slate-900">
                  {activeModal.title} — Delivered Projects
                </h4>
              </div>

              <div className="space-y-4 pt-2">
                {activeModal.modalProjects.map((p) => (
                  <div key={p.name} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="text-base font-bold text-slate-900">{p.name}</div>
                      <div className="text-xs text-slate-500 font-mono mt-0.5">{p.type}</div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-mono text-xs font-bold border border-emerald-200">
                      {p.metric}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setActiveModal(null)}
                  className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors"
                >
                  Close Showcase
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
