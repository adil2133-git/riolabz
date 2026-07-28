"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useUIStore } from "@/lib/store/ui-store";
import { Button } from "@/components/ui/Button";
import { ChevronRight, Mail, MapPin } from "lucide-react";

export const MobileMenu: React.FC = () => {
  const { mobileMenuOpen, setMobileMenuOpen } = useUIStore();
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname, setMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/", desc: "Return to main dashboard overview" },
    { name: "Services", href: "/services", desc: "Explore our 9 core engineering solutions" },
    { name: "About", href: "/about", desc: "Discover our global team and story" },
    { name: "Contact", href: "/contact", desc: "Start your project consultation" },
  ];

  return (
    <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed inset-0 z-40 bg-[#07090f]/95 backdrop-blur-2xl pt-24 px-6 pb-12 flex flex-col justify-between overflow-y-auto md:hidden"
        >
          <div className="space-y-6">
            <div className="text-xs font-tech text-[#818cf8] uppercase tracking-wider mb-2">
              Navigation Menu
            </div>
            <nav className="space-y-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block p-4 rounded-2xl border transition-all duration-200 ${
                      isActive
                        ? "bg-[#6366f1]/15 border-[#6366f1]/40 text-white"
                        : "bg-[#0d1117] border-white/5 text-slate-300 hover:text-white hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-heading text-xl font-bold">{link.name}</span>
                      <ChevronRight className="w-5 h-5 text-slate-500" />
                    </div>
                    <p className="text-xs text-slate-400 mt-1">{link.desc}</p>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="space-y-6 pt-8 border-t border-white/10">
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#f59e0b]" />
                <span>Kochi, India • Manchester, UK • Walnut, USA</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#6366f1]" />
                <span>info@riolabz.com</span>
              </div>
            </div>

            <Button href="/contact" variant="amber" size="lg" className="w-full" showIcon>
              Book Project Consultation
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
