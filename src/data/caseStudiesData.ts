import { CaseStudyItem } from '../types';

export const CASE_STUDIES_DATA: CaseStudyItem[] = [
  {
    id: 'ott-streaming',
    title: 'Media & Entertainment: Global OTT Streaming Platform',
    client: 'Leading Digital Media Group',
    industry: 'Media & Entertainment',
    category: 'Cloud Video Streaming Platform',
    tagline: 'Launching an OTT platform that scaled to 1M users in under 6 months with multi-device sync.',
    problem: 'The client faced severe challenges with limited legacy content distribution channels, streaming scalability bottlenecks during live premieres, and inconsistent user experiences across Android, iOS, and Smart TVs.',
    solution: 'Kuchoriya TechSoft delivered a robust, cloud-native OTT solution featuring adaptive bitrate HLS streaming, AI-powered personalized content recommendations, ultra-secure multi-DRM encryption, and synchronized playback across mobile, web, and TV devices.',
    verifiedResults: [
      'Scaled reliably to 1,000,000+ active subscribers within 6 months of rollout',
      '45% increase in daily user session watch-time via AI recommendation engine',
      '99.98% platform uptime during high-concurrency live entertainment broadcasts',
      'Unified single codebase across Smart TV, Web, iOS, and Android clients'
    ],
    techStack: ['React Native', 'Node.js', 'AWS MediaLive', 'HLS / DASH', 'Redis', 'PostgreSQL'],
    verifiedUrl: 'https://kuchoriyatechsoft.com/case-studies',
    badge: '1M+ Active Users'
  },
  {
    id: 'social-ai-app',
    title: 'AI-Powered Social Community & Creator App',
    client: 'Emerging Social Tech Startup',
    industry: 'AI & Social Media',
    category: 'Mobile Social Network & AI Moderation',
    tagline: 'A niche community platform that grew to 2M users with automated AI engagement and moderation.',
    problem: 'The startup needed to launch a scalable social networking mobile app capable of real-time messaging, video sharing, and automated moderation to eliminate toxic content and spam in real time.',
    solution: 'We engineered a high-performance cross-platform mobile application powered by real-time WebSocket communication, AI vision moderation for user-generated content, automated interest-matching algorithms, and smart community notifications.',
    verifiedResults: [
      'Rapidly acquired 2,000,000+ registered community members worldwide',
      '99.4% automated spam and harmful content interception with on-device AI models',
      'Sub-50ms message delivery latency across global WebSocket server clusters',
      'Featured on Google Play and Apple App Store in Community & Social categories'
    ],
    techStack: ['Flutter', 'Python', 'FastAPI', 'PyTorch', 'WebSockets', 'MongoDB'],
    verifiedUrl: 'https://kuchoriyatechsoft.com/case-studies',
    badge: '2M+ Community Members'
  },
  {
    id: 'hipaa-emr',
    title: 'HIPAA-Compliant EMR Integration & Clinical Analytics',
    client: 'HealthTech Provider Network',
    industry: 'Healthcare & MedTech',
    category: 'Enterprise Healthcare Platform',
    tagline: 'Unifying disparate Electronic Medical Records into a secure, interoperable clinical intelligence hub.',
    problem: 'The client faced fragmented clinical data across multiple legacy EHR systems, leading to delayed medical decisions, charting duplication, and severe compliance liabilities under HIPAA privacy guidelines.',
    solution: 'Kuchoriya TechSoft architected a centralized, HIPAA-certified healthcare integration gateway adhering strictly to HL7 and FHIR interoperability protocols. The platform includes end-to-end AES-256 encryption, biometric clinician authentication, and integrated clinical decision-support analytics.',
    verifiedResults: [
      '100% HIPAA and HITECH security compliance verified by third-party audit',
      '40% reduction in clinician charting administrative overhead',
      'Sub-second query response across 2,000,000+ patient health records',
      'Zero downtime migration of 8 legacy clinical database systems'
    ],
    techStack: ['Node.js', 'React', 'HL7 / FHIR', 'AWS GovCloud', 'PostgreSQL', 'Docker'],
    verifiedUrl: 'https://kuchoriyatechsoft.com/case-studies',
    badge: 'Healthcare Security Certified'
  },
  {
    id: 'expensya-fintech',
    title: 'Expensya: Autonomous Corporate Spend Management',
    client: 'Expensya Enterprise',
    industry: 'FinTech & Banking',
    category: 'AI-Driven Financial Automation',
    tagline: 'Automating enterprise expense reporting, OCR receipt extraction, and multi-currency ERP sync.',
    problem: 'Corporate employees and finance teams were bogged down by manual paper receipt uploads, slow reimbursement cycles, and manual audit reviews prone to policy violations and currency conversion errors.',
    solution: 'Kuchoriya TechSoft engineered an intelligent expense management module featuring custom computer vision OCR for automated multi-currency receipt parsing, dynamic organizational approval hierarchy routing, and seamless two-way sync with SAP and Oracle ERP systems.',
    verifiedResults: [
      '80% reduction in expense report processing and reconciliation cycle time',
      '99.2% accuracy in multi-lingual receipt line-item OCR recognition',
      'Automated policy compliance checks eliminating expense fraud',
      'Real-time corporate card transaction reconciliation across 20+ currencies'
    ],
    techStack: ['Python', 'Computer Vision OCR', 'React', 'Node.js', 'PostgreSQL', 'Stripe API'],
    verifiedUrl: 'https://kuchoriyatechsoft.com/portfolio',
    badge: 'FinTech Automation'
  },
  {
    id: 'eduk-platform',
    title: 'eduK: AI-Powered EdTech & Income Platform',
    client: 'eduK Online Learning',
    industry: 'Education & EdTech',
    category: 'Consumer Web & Mobile App',
    tagline: 'Delivering adaptive skill paths and high-concurrency streaming to over 500,000 creators in Latin America.',
    problem: 'eduK required an overhaul of their video delivery infrastructure to handle peak streaming loads across bandwidth-constrained regions, alongside an AI-driven system to match students with real-world income opportunities.',
    solution: 'We engineered a cross-platform mobile application and web portal with adaptive bitrate HLS video caching, offline downloading, and an AI personalization engine that dynamically prescribes course modules and connects graduates directly with freelance job listings.',
    verifiedResults: [
      'Successfully scaled to 500,000+ active learners across Brazil and Latin America',
      '35% improvement in course completion rates via AI-recommended micro-lessons',
      '60% reduction in video buffering and streaming CDN egress costs',
      'Integrated real-time freelance job board generating verifiable member income'
    ],
    techStack: ['React Native', 'Next.js', 'Python', 'FastAPI', 'AWS CloudFront', 'Redis'],
    verifiedUrl: 'https://kuchoriyatechsoft.com/portfolio',
    badge: 'EdTech Scalability'
  },
  {
    id: 'sixt-mobility',
    title: 'Sixt Rent a Car: Contactless Vehicle Mobility App',
    client: 'Sixt Mobility Network',
    industry: 'Automotive & Mobility',
    category: 'Cross-Platform Mobile Ecosystem',
    tagline: 'Empowering travelers with instant digital check-in, dynamic vehicle selection, and real-time fleet telematics.',
    problem: 'Traditional car rental operations suffered from long physical counter queues, manual paper contract signing, and delayed fleet turnaround times during airport peak hours.',
    solution: 'We developed an intuitive mobile application enabling customers to reserve vehicles in seconds, complete instant digital identity verification, select exact vehicles on the lot via interactive lot maps, and unlock vehicles directly using smartphone Bluetooth/NFC credentials.',
    verifiedResults: [
      'Achieved a 4.8 / 5.0 average app store rating across iOS and Android',
      'Over 65% of airport renters transitioned to 100% contactless digital pickup',
      'Reduced average customer vehicle collection time from 18 minutes to under 3 minutes',
      'Real-time GPS fleet telemetry integrated into central dispatch'
    ],
    techStack: ['Flutter', 'Swift', 'Kotlin', 'Google Maps API', 'IoT Telematics', 'AWS'],
    verifiedUrl: 'https://kuchoriyatechsoft.com/portfolio',
    badge: 'Global Mobility Solution'
  }
];

export const CASE_STUDY_CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'Media & Entertainment', label: 'Media & OTT' },
  { id: 'AI & Social Media', label: 'AI & Social Tech' },
  { id: 'Healthcare & MedTech', label: 'Healthcare & EMR' },
  { id: 'FinTech & Banking', label: 'FinTech & Banking' },
  { id: 'Education & EdTech', label: 'Education & EdTech' },
  { id: 'Automotive & Mobility', label: 'Automotive & Mobility' }
];
