import { Code, Smartphone, Cloud, Layers } from "lucide-react";
import { Division } from "@/types";

export const divisions: Division[] = [
  {
    id: "software-ai",
    number: "01",
    bgImage: "/division01.png",
    image: "/finance.jpg",
    subtitle: "AI & SOFTWARE DIVISION",
    title: "Software Innovation & Enterprise Platforms",
    description:
      "At Riolabz, we don't just build websites; we engineer intelligent enterprise software ecosystems designed to scale, adapt, and provide measurable value.",
    features: [
      "Custom Microservice & Cloud Architectures",
      "High-Performance Next.js & React Platforms",
      "SOC-2 Enterprise Security & Data Encryption",
      "Scalable API Integrations & Realtime Telemetry",
    ],
    primaryBtn: "View Projects",
    secondaryBtn: "Learn More",
    icon: Code,
    gradient: "from-[#0f172a] via-[#1e293b] to-slate-900",
    modalProjects: [
      { name: "Nexus Global Finance", type: "FinTech Platform", metric: "4.8M Active Users" },
      { name: "Enterprise ERP Portal", type: "Custom ERP System", metric: "99.99% Uptime" },
    ],
    zIndex: "z-10",
  },
  {
    id: "mobile-apps",
    number: "02",
    bgImage: "/division02.png",
    image: "/health.jpg",
    subtitle: "MOBILE APP DIVISION",
    title: "Cross-Platform Mobile Application Hub",
    description:
      "Delivering native-grade iOS and Android mobile products that reach users wherever they are. Built with React Native and modern cloud backends for flawless performance.",
    features: [
      "Cross-Platform iOS & Android Development",
      "Offline-First Synchronization & Caching",
      "Biometric Authentication & Secure Storage",
      "Automated CI/CD Store Deployment",
    ],
    primaryBtn: "View Mobile Apps",
    secondaryBtn: "App Architecture",
    icon: Smartphone,
    gradient: "from-slate-900 via-blue-950 to-slate-900",
    modalProjects: [
      { name: "VitaCure Telehealth", type: "HealthTech iOS & Android", metric: "50k+ Daily Consults" },
      { name: "Luxura Retail App", type: "E-Commerce App", metric: "$120M+ GMV" },
    ],
    zIndex: "z-20",
  },
  {
    id: "cloud-ai",
    number: "03",
    bgImage: "/division03.png",
    image: "/cloud.jpg",
    subtitle: "CLOUD & AI DIVISION",
    title: "Cloud DevOps & Enterprise AI Solutions",
    description:
      "Transforming raw business data into actionable intelligence. We deploy automated GCP/AWS cloud pipelines, custom LLMs, and 24/7 SLA infrastructure.",
    features: [
      "Automated GCP & AWS Cloud Orchestration",
      "Custom AI Models & Workflow Automation",
      "24/7 SLA Monitoring & Incident Response",
      "High-Availability Database Clustering",
    ],
    primaryBtn: "View Cloud Projects",
    secondaryBtn: "Talk to Architect",
    icon: Cloud,
    gradient: "from-slate-900 via-slate-800 to-indigo-950",
    modalProjects: [
      { name: "Cloud Telemetry Engine", type: "DevOps Infrastructure", metric: "< 15ms Latency" },
      { name: "Predictive Analytics Suite", type: "AI Engine", metric: "98% Accuracy" },
    ],
    zIndex: "z-30",
  },
  {
    id: "automation-iot",
    number: "04",
    bgImage: "/division04.png",
    image: "/automation.jpg",
    subtitle: "AUTOMATION & SYSTEMS DIVISION",
    title: "Smart Hardware & Enterprise Automation",
    description:
      "Bringing intelligence to your physical infrastructure with custom IoT hardware integration, automated surveillance, and real-time environment monitoring.",
    features: [
      "Integrated IoT & Smart Hardware Hubs",
      "Automated Surveillance & Access Control",
      "Adaptive Sensor Telemetry & Analytics",
      "Edge Computing & On-Premise Integration",
    ],
    primaryBtn: "Explore Automation",
    secondaryBtn: "Hardware Specs",
    icon: Layers,
    gradient: "from-slate-900 via-teal-950 to-slate-950",
    modalProjects: [
      { name: "Smart Hub Controller", type: "IoT Telemetry", metric: "10k+ Devices" },
      { name: "Biometric Access Core", type: "Hardware Security", metric: "Zero Breach" },
    ],
    zIndex: "z-40",
  },
];
