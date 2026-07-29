import { Code2, TrendingUp, ShieldCheck, Globe2 } from "lucide-react";
import { StatItem, TeamMember, Milestone, CompanyValue } from "@/types";

export const stats: StatItem[] = [
  { value: "12+", label: "Years Excellence" },
  { value: "500+", label: "Enterprise Projects" },
  { value: "99.99%", label: "SLA Uptime" },
  { value: "3", label: "Global Hubs" },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Alex Sterling",
    role: "Chief Executive Officer & Founder",
    bio: "Pioneered Riolabz's international expansion across UK and Middle East tech corridors.",
    image: "/about-leader1.jpg",
    location: "London, UK 🇬🇧",
    spec: "Enterprise Growth & Strategy",
  },
  {
    name: "Dr. Ananya Nair",
    role: "VP of Artificial Intelligence & Systems",
    bio: "PhD in Neural Networks. Leads our AI LLM orchestration and high-concurrency microservices team.",
    image: "/about-leader2.jpg",
    location: "Kochi, India 🇮🇳",
    spec: "AI & Neural Systems",
  },
  {
    name: "Tariq Al-Mansoor",
    role: "Head of Cloud Infrastructure & SLA",
    bio: "AWS & GCP certified architect specializing in multi-region Kubernetes and zero-downtime clustering.",
    image: "/about-leader3.jpg",
    location: "Dubai, UAE 🇦🇪",
    spec: "Multi-Cloud DevOps",
  },
];

export const milestones: Milestone[] = [
  {
    year: "2014",
    title: "Inception in Kochi",
    desc: "Founded as a high-precision software engineering laboratory in Infopark Phase 1.",
  },
  {
    year: "2018",
    title: "Global Expansion",
    desc: "Opened client hubs in London (Canary Wharf) and Dubai Internet City.",
  },
  {
    year: "2022",
    title: "AI & Multi-Cloud Divisions",
    desc: "Launched dedicated LLM RAG pipelines and 24/7 SLA DevOps management.",
  },
  {
    year: "2026",
    title: "500+ Global Enterprises",
    desc: "Trusted technology partner for Fortune 500 brands and high-growth scaleups worldwide.",
  },
];

export const companyValues: CompanyValue[] = [
  {
    title: "Engineering Precision",
    description: "Zero technical debt architecture, 100% test coverage, and strict code review standards across all divisions.",
    icon: Code2,
    badgeBg: "bg-blue-50 text-[#2563eb] border-blue-200",
  },
  {
    title: "Transparent Telemetry",
    description: "Real-time client access to daily Git commits, CI/CD build logs, and agile sprint burn-down charts.",
    icon: TrendingUp,
    badgeBg: "bg-emerald-50 text-emerald-600 border-emerald-200",
  },
  {
    title: "SOC-2 Type II Security",
    description: "Enterprise-grade data encryption, automated vulnerability scanning, and fault-tolerant cloud backends.",
    icon: ShieldCheck,
    badgeBg: "bg-purple-50 text-purple-600 border-purple-200",
  },
  {
    title: "Global Multi-Hub Reach",
    description: "24/7 SLA infrastructure management seamlessly operating across Kochi, London, and Dubai centers.",
    icon: Globe2,
    badgeBg: "bg-[#00f0b5]/15 text-teal-700 border-teal-200",
  },
];
