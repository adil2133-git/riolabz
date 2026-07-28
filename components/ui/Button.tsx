"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "amber";
  size?: "sm" | "md" | "lg";
  href?: string;
  showIcon?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  showIcon = false,
  children,
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#6366f1]/50 disabled:opacity-50 disabled:pointer-events-none";

  const sizeClasses = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5 shadow-lg",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-[#6366f1] to-[#4f46e5] text-white hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] hover:scale-[1.02] active:scale-[0.98]",
    secondary:
      "bg-[#151b26] text-white border border-white/10 hover:border-[#6366f1]/50 hover:bg-[#1e2738] hover:shadow-md",
    outline:
      "bg-transparent text-white border border-[#6366f1]/40 hover:bg-[#6366f1]/10 hover:border-[#6366f1]",
    ghost:
      "bg-transparent text-slate-300 hover:text-white hover:bg-white/5",
    amber:
      "bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-slate-950 font-semibold hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:scale-[1.02] active:scale-[0.98]",
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {showIcon && (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`group ${combinedClasses}`}>
        {content}
      </Link>
    );
  }

  return (
    <button className={`group ${combinedClasses}`} {...props}>
      {content}
    </button>
  );
};
