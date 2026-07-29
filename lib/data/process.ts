import { Search, Compass, Code2, Rocket } from "lucide-react";
import { ProcessStage } from "@/types";

export const processStages: ProcessStage[] = [
  {
    id: "01",
    stage: "STAGE 01",
    title: "Discovery & System Blueprint",
    subtitle: "PHASE 01 · REQUIREMENTS",
    shortNav: "01 / Discovery",
    description:
      "Detailed stakeholder interviews, technical stack alignment, and risk analysis tailored to enterprise goals.",
    outcome: "Reduces mid-project scope changes by up to 40%.",
    duration: "EST. DURATION: 2–3 WEEKS",
    deliverables: [
      "Core System & API Specifications",
      "Cloud Infrastructure Roadmap",
      "Security & Compliance Audit",
    ],
    icon: Search,
    image: "/process-discovery.jpg",
    badge: "Architectural Scoping",
  },
  {
    id: "02",
    stage: "STAGE 02",
    title: "Modular UI/UX & Prototyping",
    subtitle: "PHASE 02 · DESIGN SYSTEM",
    shortNav: "02 / UI/UX Design",
    description:
      "Figma component tokens, design systems, and interactive high-fidelity wireframes to validate user flows before coding.",
    outcome: "Increases user onboarding completion by 65%.",
    duration: "EST. DURATION: 2 WEEKS",
    deliverables: [
      "Figma Design Tokens & Components",
      "Interactive Prototype Wireframes",
      "WCAG 2.1 AA Accessibility Specs",
    ],
    icon: Compass,
    image: "/process-design.jpg",
    badge: "Design System Tokens",
  },
  {
    id: "03",
    stage: "STAGE 03",
    title: "Agile Development & QA",
    subtitle: "PHASE 03 · SPRINT EXECUTION",
    shortNav: "03 / Agile Dev",
    description:
      "Two-week agile sprints, test-driven Next.js/React development, automated CI/CD pipelines, and 100% code coverage.",
    outcome: "Accelerates time-to-market with 100% test coverage.",
    duration: "EST. DURATION: 4–6 WEEKS",
    deliverables: [
      "Agile Sprint Code Deliverables",
      "Automated CI/CD Deployment",
      "Unit & E2E Testing Suites",
    ],
    icon: Code2,
    image: "/process-dev.jpg",
    badge: "Automated Testing",
  },
  {
    id: "04",
    stage: "STAGE 04",
    title: "Zero-Downtime Launch & SLA",
    subtitle: "PHASE 04 · DEPLOYMENT",
    shortNav: "04 / Cloud Launch",
    description:
      "Seamless GCP/AWS cloud production deployment with continuous 24/7 SLA uptime telemetry monitoring.",
    outcome: "Guarantees 99.99% uptime with zero deployment outages.",
    duration: "EST. DURATION: 1 WEEK",
    deliverables: [
      "Zero-Downtime Production Launch",
      "24/7 Managed SLA Infrastructure",
      "Automated Database Clustering",
    ],
    icon: Rocket,
    image: "/process-launch.jpg",
    badge: "99.99% SLA Uptime",
  },
];
