export interface ServiceItem {
  id: string;
  title: string;
  category: 'ai' | 'engineering' | 'cloud-web3' | 'design';
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
  techStack: string[];
  officialUrl?: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  iconName: string;
  headline: string;
  challenges: string;
  solutions: string[];
  compliance: string[];
  metrics: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  client: string;
  industry: string;
  category: string;
  tagline: string;
  problem: string;
  solution: string;
  verifiedResults: string[];
  techStack: string[];
  verifiedUrl: string;
  badge?: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  designation: string;
  company: string;
  location: string;
  projectScope: string;
  quote: string;
  rating: number;
  platform: 'Clutch' | 'GoodFirms' | 'Google' | 'Direct';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface OfficeLocation {
  country: string;
  city: string;
  address: string;
  phone: string;
  isHQ?: boolean;
}

export interface TechnologyItem {
  name: string;
  category: 'AI & Data' | 'Frontend' | 'Mobile' | 'Backend' | 'Cloud & DevOps' | 'Database & Web3';
  icon: string;
  popularFor: string;
}
