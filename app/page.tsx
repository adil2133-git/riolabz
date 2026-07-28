import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { MobileMenu } from "@/components/layout/MobileMenu";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#07090f] text-[#f8fafc]">
      <Navbar />
      <MobileMenu />
      <main className="flex-grow pt-32 px-4 text-center">
        <h1 className="text-3xl font-heading font-bold text-white">
          Navbar & Design System Live
        </h1>
        <p className="text-slate-400 text-sm mt-2">
          Scroll down to test glassmorphism effect, or shrink window to test mobile drawer.
        </p>
        <div className="h-[120vh]" /> {/* Scroll spacer */}
      </main>
    </div>
  );
}

