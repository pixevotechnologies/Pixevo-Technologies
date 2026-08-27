export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'solutions'
  | 'industries'
  | 'portfolio'
  | 'process'
  | 'careers'
  | 'blog'
  | 'contact'
  | 'privacy'
  | 'terms';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  technologies: string[];
  deliverables: string[];
}

export interface SolutionItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  businessImpact: string[];
  keyModules: string[];
  idealFor: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  iconName: string;
  summary: string;
  challenges: string[];
  solutionsProvided: string[];
  keyBenefits: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  category: 'Web Application' | 'Mobile App' | 'AI & Automation' | 'Enterprise Software' | 'E-commerce';
  badge: 'Demo Project' | 'Concept' | 'Prototype';
  shortDesc: string;
  fullOverview: string;
  challenge: string;
  solution: string;
  technologies: string[];
  features: string[];
  architecture: {
    frontend: string;
    backend: string;
    database: string;
    cloud: string;
  };
  metrics: {
    label: string;
    value: string;
  }[];
}

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  durationEstimate: string;
  keyActivities: string[];
}

export interface JobPosition {
  id: string;
  title: string;
  department: 'Engineering' | 'Design' | 'Product' | 'Cloud & DevOps' | 'AI & Automation';
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  location: 'Remote' | 'Hybrid' | 'Global Remote';
  experienceLevel: 'Entry / Intern' | 'Mid-Level' | 'Senior' | 'Lead';
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category:
    | 'Software Development'
    | 'AI'
    | 'Automation'
    | 'Web Development'
    | 'Mobile Apps'
    | 'Business Technology'
    | 'Cybersecurity'
    | 'Digital Transformation';
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
  };
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
  tags: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Development' | 'Security & IP' | 'Pricing & Support';
}

export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  title: string;
  company: string;
  projectScope?: string;
  rating?: number;
  avatarInitials?: string;
  isPlaceholder?: boolean;
}

export interface ContactFormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  serviceRequired: string;
  budget: string;
  projectDetails: string;
  timeline?: string;
}
