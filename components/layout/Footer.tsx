"use client";

import React from "react";
import Link from "next/link";
import { Globe2, ArrowRight, ShieldCheck, Mail, MapPin, Phone } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 pt-16 pb-12 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-blue-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-heading font-black text-white tracking-tight">
                riolabz<span className="text-[#2563eb]">.</span>
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Architecting fault-tolerant web applications, native mobile apps, and enterprise AI software for global leaders across USA, UK, and UAE.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20 w-fit">
              <ShieldCheck className="w-4 h-4 text-[#00f0b5]" />
              <span>ISO 9001:2015 CERTIFIED ARCHITECTURE</span>
            </div>
          </div>

          {/* Col 2: Engineering Divisions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-[#00f0b5] uppercase tracking-wider">
              PRODUCTION DIVISIONS
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-300">
              <li>
                <Link href="#portfolio" className="hover:text-white transition-colors">
                  AI &amp; Software Engineering Division
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-white transition-colors">
                  Mobile Application Division
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-white transition-colors">
                  Cloud Infrastructure &amp; DevOps Division
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-white transition-colors">
                  Automation &amp; Enterprise Systems Division
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Global Hubs (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-[#00f0b5] uppercase tracking-wider">
              GLOBAL ENGINEERING HUBS
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#2563eb]" />
                <span>🇮🇳 Kochi, India (Infopark Phase 1)</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#2563eb]" />
                <span>🇬🇧 London, UK (Canary Wharf)</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#2563eb]" />
                <span>🇦🇪 Dubai, UAE (Internet City)</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Contact (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold text-[#00f0b5] uppercase tracking-wider">
              CONTACT
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#2563eb]" />
                <span>hello@riolabz.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#00f0b5]" />
                <span>+91 484 298 4400</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Riolabz Technologies. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">Security Telemetry</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
