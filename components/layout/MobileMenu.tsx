"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useUIStore } from "@/lib/store/ui-store";
import { navLinks } from "@/lib/data/navigation";

// Mobile navigation menu drawer component
export const MobileMenu: React.FC = () => {
  const pathname = usePathname();
  // State from UI store to toggle menu visibility
  const { mobileMenuOpen, setMobileMenuOpen } = useUIStore();

  return (
    <AnimatePresence>
      {/* Show overlay menu when mobile menu state is open */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl pt-24 px-6 pb-12 flex flex-col justify-between overflow-y-auto md:hidden"
        >
          <div className="flex flex-col h-full justify-between pt-6 pb-8">
            {/* List of mobile navigation pages */}
            <nav className="flex flex-col gap-5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-lg font-heading font-semibold transition-colors duration-200 ${
                      isActive
                        ? "text-slate-900 border-l-2 border-slate-900 pl-3"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Action */}
            <div className="pt-8 border-t border-slate-200 flex flex-col gap-4">
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-full bg-slate-900 text-white font-bold text-center text-sm shadow-lg shadow-slate-900/10"
              >
                Get a Quote
              </Link>
              <div className="text-center text-xs text-slate-500 font-mono">
                © {new Date().getFullYear()} Riolabz. All rights reserved.
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
