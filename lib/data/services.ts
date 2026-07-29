import { Cloud, BarChart3, Palette, Code2, ShieldAlert, Rocket, Bot, Smartphone, Cpu } from "lucide-react";
import { ServiceItem, ServiceCard } from "@/types";

export const servicesList: ServiceItem[] = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable AWS & GCP cloud ecosystems with 99.9% fault-tolerant uptime and automated CI/CD.",
    accent: "bg-blue-50 text-blue-600 border-blue-200/60",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & AI",
    description: "Actionable business intelligence and automated workflows driven by enterprise AI models.",
    accent: "bg-emerald-50 text-emerald-600 border-emerald-200/60",
  },
  {
    icon: Palette,
    title: "Product Design (UI/UX)",
    description: "High-fidelity digital interfaces prioritizing conversion, accessibility, and human interaction.",
    accent: "bg-[#00f0b5]/10 text-emerald-700 border-emerald-300/60",
  },
  {
    icon: Code2,
    title: "Custom Software Dev",
    description: "Bespoke web platforms and mobile applications engineered precisely for complex workflows.",
    accent: "bg-indigo-50 text-indigo-600 border-indigo-200/60",
  },
  {
    icon: ShieldAlert,
    title: "Enterprise Security",
    description: "Zero-trust security frameworks, vulnerability assessments, and SOC-2 data compliance.",
    accent: "bg-sky-50 text-sky-600 border-sky-200/60",
  },
  {
    icon: Rocket,
    title: "Digital Growth Strategy",
    description: "Agile product strategies and architecture blueprints designed for fast global scale.",
    accent: "bg-amber-50 text-amber-600 border-amber-200/60",
  },
];

export const serviceCards: ServiceCard[] = [
  {
    id: "web-designing",
    num: "01",
    icon: Code2,
    title: "Web Designing",
    description: "Modular design tokens, Figma wireframes, and responsive UI/UX tailored for conversion.",
    deliverables: ["Figma Component Tokens", "Interactive Wireframes", "WCAG 2.1 AA Accessibility"],
    metric: "100/100 Usability",
    active: false,
  },
  {
    id: "web-development",
    num: "02",
    icon: Code2,
    title: "Web Development",
    description: "Next.js 15 App Router development with sub-second page loads, server components, and SEO.",
    deliverables: ["Next.js App Router", "Server Components", "Headless CMS Integration"],
    metric: "Sub-Second Loads",
    active: true,
  },
  {
    id: "web-application",
    num: "03",
    icon: Bot,
    title: "Web Application",
    description: "Custom enterprise CRM & ERP platforms with LLM RAG pipelines and microservice backends.",
    deliverables: ["Custom Enterprise ERP", "LLM RAG Orchestration", "Go/Python Microservices"],
    metric: "99.99% SLA Uptime",
    active: false,
  },
  {
    id: "mobile-development",
    num: "04",
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform React Native & Flutter applications with 60fps native performance and offline sync.",
    deliverables: ["iOS & Android Native", "Offline-First Sync", "Biometric Auth Security"],
    metric: "60 FPS Native",
    active: false,
  },
  {
    id: "cloud-devops",
    num: "05",
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Multi-cloud Terraform IaC automation, Kubernetes container clusters, and continuous SLA telemetry.",
    deliverables: ["Terraform Multi-Cloud", "Kubernetes Clustering", "Zero-Downtime CI/CD"],
    metric: "Zero Downtime",
    active: false,
  },
  {
    id: "iot-automation",
    num: "06",
    icon: Cpu,
    title: "Industrial Automation",
    description: "Connecting physical hardware machinery, CAN bus/MQTT sensors, and edge controllers into real-time dashboards.",
    deliverables: ["Embedded ARM Firmware", "MQTT/Modbus Protocols", "Real-Time Telemetry UI"],
    metric: "Sub-10ms Latency",
    active: false,
  },
];
