import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TrustSection } from "@/components/home/TrustSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <MobileMenu />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <ProcessSection />
        <TrustSection />
        <TestimonialSection />
      </main>
    </div>
  );
}
