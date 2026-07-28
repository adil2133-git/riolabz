"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Footer } from "@/components/layout/Footer";
import { Sparkles, Code2, Smartphone, Cloud, Bot, ShieldCheck, Layers, ArrowRight, CheckCircle2, Search } from "lucide-react";

const detailedServices = [
  {
    id: "ai-software",
    title: "AI & Custom Software Engineering",
    tag: "DIVISION 01",
    subtitle: "High-Concurrency Backend Microservices & LLM Orchestration",
    description:
      "We design and build bespoke enterprise software, high-throughput backend APIs, and custom AI/LLM models integrated seamlessly into your legacy ecosystem.",
    features: [
      "Custom Enterprise ERP & CRM Platforms",
      "LLM Fine-Tuning & RAG Pipeline Orchestration",
      "High-Concurrency Microservices (Node.js/Go/Python)",
      "Automated Business Workflow Engines",
    ],
    techStack: ["Next.js", "Python", "Go", "PostgreSQL", "TensorFlow", "FastAPI"],
    image: "/finance.jpg",
  },
  {
    id: "mobile-apps",
    title: "Mobile Application Division",
    tag: "DIVISION 02",
    subtitle: "Cross-Platform iOS & Android Native Solutions",
    description:
      "Engineered cross-platform mobile apps with 60fps native performance, offline-first synchronization, and enterprise biometrics authentication.",
    features: [
      "React Native & Flutter Cross-Platform Development",
      "Offline Data Synchronization & SQLite Local Storage",
      "Real-time Push Notification & WebSockets Infrastructure",
      "Apple App Store & Google Play Store Telemetry",
    ],
    techStack: ["React Native", "Flutter", "TypeScript", "Swift", "Kotlin", "Firebase"],
    image: "/health.jpg",
  },
  {
    id: "cloud-ai",
    title: "Cloud Infrastructure & DevOps Division",
    tag: "DIVISION 03",
    subtitle: "Multi-Cloud Terraform & Zero-Downtime Infrastructure",
    description:
      "24/7 SLA infrastructure management on GCP and AWS. We automate CI/CD pipelines, container clustering, and real-time load balancing.",
    features: [
      "Terraform & Infrastructure-as-Code (IaC)",
      "Kubernetes (GKE/EKS) Container Orchestration",
      "Automated CI/CD Pipelines (GitHub Actions/GitLab)",
      "SOC-2 Type II Compliance & Security Telemetry",
    ],
    techStack: ["GCP", "AWS", "Terraform", "Docker", "Kubernetes", "Datadog"],
    image: "/cloud.jpg",
  },
  {
    id: "automation-iot",
    title: "Automation & Enterprise Systems",
    tag: "DIVISION 04",
    subtitle: "Edge Computing & Hardware Protocol Integrations",
    description:
      "Bridging digital software with physical hardware through IoT sensor telemetry, edge computing controllers, and automated industrial monitoring.",
    features: [
      "IoT Edge Controller Software Development",
      "Modbus, CAN bus, & MQTT Hardware Protocols",
      "Real-Time Telemetry Dashboards & Anomaly Alerts",
      "Industrial Automated Process Control Systems",
    ],
    techStack: ["MQTT", "Node-RED", "C++", "Python", "InfluxDB", "Grafana"],
    image: "/automation.jpg",
  },
];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredServices = selectedCategory === "all"
    ? detailedServices
    : detailedServices.filter(s => s.id === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <MobileMenu />

      <main className="flex-grow pt-32 pb-24">
        
        {/* Services Hero Header */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute top-10 left-1/3 w-[500px] h-[350px] bg-blue-100/30 rounded-full blur-[130px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-slate-800 text-xs font-mono font-semibold uppercase tracking-widest shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#2563eb]" />
                #ENGINEERING_SERVICES
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-slate-900 tracking-tight max-w-4xl mx-auto"
            >
              Enterprise Engineering Services &amp; Technical Capabilities
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto mt-4"
            >
              Discover our 4 specialized engineering divisions built to deliver scalable, secure, and fault-tolerant software.
            </motion.p>
          </div>
        </section>

        {/* Division Filter Tabs */}
        <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {[
              { id: "all", label: "All Engineering Divisions" },
              { id: "ai-software", label: "AI & Custom Software" },
              { id: "mobile-apps", label: "Mobile Apps" },
              { id: "cloud-ai", label: "Cloud & DevOps" },
              { id: "automation-iot", label: "Automation & Systems" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-5 py-2.5 rounded-full font-mono text-xs font-bold transition-all ${
                  selectedCategory === tab.id
                    ? "bg-[#2563eb] text-white shadow-md scale-105"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </section>

        {/* Detailed Service Cards List */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {filteredServices.map((service, index) => {
            const isReverse = index % 2 !== 0;
            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                {/* Content Side */}
                <div className={`lg:col-span-7 space-y-6 ${isReverse ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-[#2563eb] tracking-widest uppercase bg-blue-100/60 px-3 py-1 rounded-full border border-blue-200">
                      {service.tag}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 pt-2">
                      {service.title}
                    </h2>
                    <p className="text-sm font-mono text-slate-500 font-semibold">{service.subtitle}</p>
                  </div>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-2.5 pt-2">
                    <div className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">
                      KEY TECHNICAL DELIVERABLES
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
                          <CheckCircle2 className="w-4 h-4 text-[#2563eb] flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="pt-2 space-y-2">
                    <div className="text-[11px] font-mono text-slate-500 font-bold uppercase">TECHNOLOGY STACK</div>
                    <div className="flex flex-wrap gap-2">
                      {service.techStack.map((tech) => (
                        <span key={tech} className="px-3 py-1 rounded-full bg-white text-slate-800 text-xs font-mono font-bold border border-slate-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Link */}
                  <div className="pt-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-all shadow-md"
                    >
                      <span>Request Division Blueprint</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                </div>

                {/* Visual Side Image */}
                <div className={`lg:col-span-5 ${isReverse ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-xl group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-6 flex items-end">
                      <span className="text-white text-xs font-mono font-bold bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                        {service.title} ARCHITECTURE
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </section>

      </main>

      <Footer />
    </div>
  );
}
