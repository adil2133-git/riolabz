"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUIStore } from "@/lib/store/ui-store";
import { navLinks } from "@/lib/data/navigation";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { toggleMobileMenu, mobileMenuOpen } = useUIStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md py-4 border-b border-slate-200/80 shadow-md"
          : "bg-transparent py-6 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-1">
          <span
            className={`font-heading font-black text-2xl tracking-tight transition-colors ${
              scrolled ? "text-slate-900 group-hover:text-slate-700" : "text-white group-hover:text-slate-200"
            }`}
          >
            riolabz<span className="text-[#2563eb]">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  scrolled
                    ? isActive
                      ? "text-[#2563eb] font-bold"
                      : "text-slate-600 hover:text-slate-900"
                    : isActive
                    ? "text-[#00f0b5] font-bold"
                    : "text-slate-200 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/#contact"
            className={`px-5 py-2.5 rounded-full font-semibold text-xs transition-all duration-300 shadow-sm ${
              scrolled
                ? "bg-slate-900 hover:bg-slate-800 text-white"
                : "bg-white/15 hover:bg-white/25 text-white border border-white/20 backdrop-blur-md"
            }`}
          >
            Get a Quote
          </Link>
        </div>

        <button
          onClick={toggleMobileMenu}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"
          }`}
          aria-label="Toggle Navigation Menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
    </header>
  );
};
