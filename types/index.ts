import { LucideIcon } from "lucide-react";

export interface NavLink {
  name: string;
  href: string;
}

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: string;
}

export interface ServiceCard {
  id: string;
  num: string;
  icon: LucideIcon;
  title: string;
  description: string;
  deliverables: string[];
  metric: string;
  active: boolean;
}

export interface ProcessStage {
  id: string;
  stage: string;
  title: string;
  subtitle: string;
  shortNav: string;
  description: string;
  outcome: string;
  duration: string;
  deliverables: string[];
  icon: LucideIcon;
  image: string;
  badge: string;
}

export interface ModalProject {
  name: string;
  type: string;
  metric: string;
}

export interface Division {
  id: string;
  number: string;
  bgImage: string;
  image?: string;
  subtitle: string;
  title: string;
  description: string;
  features: string[];
  primaryBtn: string;
  secondaryBtn: string;
  icon: LucideIcon;
  gradient?: string;
  modalProjects: ModalProject[];
  zIndex: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface OfficeHub {
  city: string;
  type: string;
  address: string;
  phone: string;
  email: string;
  image: string;
  flag: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  division: string;
  budget: string;
  message: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  location: string;
  spec: string;
}

export interface Milestone {
  year: string;
  title: string;
  desc: string;
}

export interface CompanyValue {
  title: string;
  description: string;
  icon: LucideIcon;
  badgeBg: string;
}
