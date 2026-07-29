"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send, CheckCircle2, Sparkles, Building2, Globe2 } from "lucide-react";
import { ContactFormData } from "@/types";
import { officeHubs } from "@/lib/data/contact";

// Global offices contact section & project proposal form
export const ContactSection: React.FC = () => {
  // Form input state
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    division: "ai-software",
    budget: "$25k-$50k",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeOffice, setActiveOffice] = useState(0);

  // Handle form submission and show success message
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        division: "ai-software",
        budget: "$25k-$50k",
        message: "",
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-28 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background Soft Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-[#2563eb]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-[#00f0b5]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight"
          >
            Let&apos;s Build Your Next<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#00f0b5]">
              Digital Milestone
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg font-normal leading-relaxed"
          >
            Connect with our engineering leadership across Kochi, London, or Dubai for an instant technical consultation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: 3 Global Office Hub Cards */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-heading font-bold text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#2563eb]" />
                <span>Our Global Engineering Hubs</span>
              </h3>
              <span className="text-xs font-mono text-slate-400">3 LOCATIONS</span>
            </div>

            {/* Office Hub Selector */}
            <div className="space-y-4">
              {officeHubs.map((hub, idx) => {
                const isSelected = activeOffice === idx;
                return (
                  <motion.div
                    key={hub.city}
                    onClick={() => setActiveOffice(idx)}
                    whileHover={{ y: -2 }}
                    className={`rounded-2xl border p-6 transition-all duration-300 cursor-pointer overflow-hidden relative ${
                      isSelected
                        ? "bg-white/10 border-[#2563eb] shadow-xl shadow-[#2563eb]/10"
                        : "bg-white/5 border-white/10 hover:border-white/20"
                    }`}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                      
                      {/* Office Image Frame */}
                      <div className="sm:col-span-5 relative h-36 rounded-xl overflow-hidden border border-white/10">
                        <Image
                          src={hub.image}
                          alt={hub.city}
                          fill
                          sizes="200px"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                        <span className="absolute bottom-2 left-2 text-xl">{hub.flag}</span>
                      </div>

                      {/* Details */}
                      <div className="sm:col-span-7 space-y-2">
                        <div className="text-[10px] font-mono font-bold text-[#00f0b5] tracking-widest uppercase">
                          {hub.type}
                        </div>
                        <h4 className="text-lg font-heading font-black text-white">
                          {hub.city}
                        </h4>
                        <div className="flex items-start gap-2 text-xs text-slate-300 leading-snug">
                          <MapPin className="w-3.5 h-3.5 text-[#2563eb] flex-shrink-0 mt-0.5" />
                          <span>{hub.address}</span>
                        </div>
                        <div className="flex flex-col xs:flex-row flex-wrap items-start gap-1.5 sm:gap-4 pt-1 text-xs font-mono text-slate-400">
                          <div className="flex items-center gap-1">
                            <Phone className="w-3 h-3 text-[#00f0b5]" />
                            <span>{hub.phone}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Mail className="w-3 h-3 text-[#2563eb]" />
                            <span className="break-all">{hub.email}</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Project Proposal Form */}
          <div className="lg:col-span-6 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
            <div className="space-y-3 mb-8">
              <span className="text-xs font-mono font-bold text-[#00f0b5] uppercase tracking-widest">
                REQUEST A PROPOSAL
              </span>
              <h3 className="text-2xl font-heading font-black text-white">
                Start Your Project Inquiry
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm">
                Fill out the technical scope below. Our solution architects respond within 12 business hours.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-[#00f0b5] border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-heading font-bold text-white">
                  Proposal Inquiry Received!
                </h4>
                <p className="text-slate-300 text-xs max-w-sm mx-auto">
                  Thank you! Our lead technical architect is reviewing your requirements and will reach out shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 font-medium">FULL NAME *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#2563eb] transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 font-medium">WORK EMAIL *</label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#2563eb] transition-colors"
                    />
                  </div>
                </div>

                {/* Division Selector */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 font-medium">SELECT ENGINEERING DIVISION</label>
                  <select
                    value={formData.division}
                    onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-[#2563eb] transition-colors"
                  >
                    <option value="ai-software">AI &amp; Custom Software Division</option>
                    <option value="mobile-apps">Mobile Application Division</option>
                    <option value="cloud-devops">Cloud Infrastructure &amp; DevOps</option>
                    <option value="automation">Enterprise Automation &amp; Systems</option>
                  </select>
                </div>

                {/* Budget */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 font-medium">ESTIMATED PROJECT BUDGET</label>
                  <div className="grid grid-cols-3 gap-2">
                    {["$10k-$25k", "$25k-$50k", "$50k+"].map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setFormData({ ...formData, budget: b })}
                        className={`py-2 rounded-xl text-xs font-mono font-bold border transition-all ${
                          formData.budget === b
                            ? "bg-[#2563eb] text-white border-[#2563eb] shadow-md"
                            : "bg-white/5 text-slate-400 border-white/10 hover:bg-white/10"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Scope Description */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 font-medium">PROJECT SCOPE DETAILS</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your platform requirements, technology preferences, or delivery timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#2563eb] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#2563eb] hover:bg-blue-600 text-white font-bold text-sm transition-all duration-200 shadow-xl flex items-center justify-center gap-2 group"
                >
                  <span>Submit Technical Proposal</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
