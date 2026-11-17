export interface IndustryProject {
  id: string;
  name: string;
  shortLabel: string;
  iconName: string;
  projectTitle: string;
  headline: string;
  clientType: string;
  problem: string;
  solution: string;
  verifiedResults: string[];
  compliance: string[];
  techStack: string[];
  visualType: 'media' | 'healthcare' | 'fintech' | 'edtech' | 'logistics' | 'travel' | 'ecommerce' | 'realestate' | 'manufacturing';
}

export const INDUSTRIES_PROJECTS_DATA: IndustryProject[] = [
  {
    id: 'media',
    name: 'Media & Entertainment',
    shortLabel: 'Entertainment & Media',
    iconName: 'Tv',
    projectTitle: 'EPIX Global OTT Video Streaming Platform',
    headline: 'High-concurrency streaming architecture scaled to 1M+ active subscribers within 6 months.',
    clientType: 'Global Entertainment & Broadcast Network',
    problem: 'The client faced severe buffering during peak live broadcasts, fragmented multi-screen video delivery, and subscriber drop-off on mobile devices.',
    solution: 'Kuchoriya TechSoft engineered a cloud-native OTT streaming platform featuring adaptive HLS/DASH bitrate video encoding, multi-CDN traffic steering, Widevine/FairPlay studio DRM, and AI-driven personalized watchlists.',
    verifiedResults: [
      'Scaled to 1,000,000+ active subscribers in under 6 months',
      'Reduced video buffering time by 58% across mobile networks',
      'Cross-platform delivery for iOS, Android, Web, and Smart TV',
      'Studio-grade DRM with zero piracy leaks'
    ],
    compliance: ['Studio DRM (Widevine & FairPlay)', 'COPPA', 'GDPR Compliant'],
    techStack: ['React', 'Next.js', 'AWS CloudFront', 'HLS / DASH', 'Node.js', 'Redis'],
    visualType: 'media'
  },
  {
    id: 'healthcare',
    name: 'Healthcare & MedTech',
    shortLabel: 'Healthcare',
    iconName: 'HeartPulse',
    projectTitle: 'Unified HIPAA-Compliant EMR Clinical Hub',
    headline: 'Unifying 8 disparate EHR hospital networks into a real-time clinical intelligence platform.',
    clientType: 'Integrated Health Delivery Network',
    problem: 'Clinicians were bogged down by fragmented patient charting across legacy silos, causing slow diagnostic handoffs and severe HIPAA audit liabilities.',
    solution: 'We engineered an HL7/FHIR compliant interoperability engine with biometric clinician login, sub-second patient record query, and embedded AI clinical documentation assistants.',
    verifiedResults: [
      '100% HIPAA and HITECH certified with zero compliance breaches',
      '40% reduction in clinician charting overhead per patient encounter',
      'Sub-second query response over 2,000,000+ encrypted patient records',
      'Real-time automated vital telemetry alerts'
    ],
    compliance: ['HIPAA Compliant', 'HITECH', 'HL7 / FHIR Standards', 'SOC 2 Type II'],
    techStack: ['Node.js', 'React', 'HL7 FHIR', 'AWS GovCloud', 'PostgreSQL', 'Docker'],
    visualType: 'healthcare'
  },
  {
    id: 'fintech',
    name: 'Banking & Fintech',
    shortLabel: 'Banking & Finance',
    iconName: 'Building2',
    projectTitle: 'Autonomous Expense & Corporate Spend Platform',
    headline: 'Multi-currency AI spend management automating corporate reconciliations across 20+ currencies.',
    clientType: 'Expensya Global Enterprise',
    problem: 'Manual paper receipts and slow expense approvals created severe reimbursement backlogs, currency conversion errors, and audit vulnerabilities.',
    solution: 'Kuchoriya TechSoft built an enterprise spend optimization system with custom computer vision OCR for automated line-item extraction, smart corporate card sync, and direct SAP/Oracle ERP integration.',
    verifiedResults: [
      '80% reduction in expense processing and audit cycle time',
      '99.2% accuracy in multi-lingual receipt line-item OCR recognition',
      'Automated policy compliance eliminating expense fraud',
      'Processed over $50M in corporate transactions with 99.999% uptime'
    ],
    compliance: ['PCI-DSS Level 1', 'SOC 2 Type II', 'GDPR', 'ISO 27001'],
    techStack: ['Python', 'Computer Vision OCR', 'React', 'FastAPI', 'PostgreSQL', 'Stripe'],
    visualType: 'fintech'
  },
  {
    id: 'education',
    name: 'Education & EdTech',
    shortLabel: 'Education',
    iconName: 'GraduationCap',
    projectTitle: 'eduK: AI-Powered Learning & Creator Platform',
    headline: 'Adaptive learning pathways and high-concurrency video delivery for 500,000+ creators.',
    clientType: 'eduK LATAM Online Learning',
    problem: 'Monolithic legacy video infrastructure caused streaming buffering in bandwidth-constrained regions, alongside low course completion rates.',
    solution: 'We architected a cross-platform mobile and web ecosystem with adaptive bitrate caching, offline lesson downloads, and an AI recommendation engine connecting learners to freelance job boards.',
    verifiedResults: [
      '500,000+ active registered students across Brazil & Latin America',
      '35% improvement in course completion rates via AI micro-lessons',
      '60% reduction in video streaming CDN bandwidth egress costs',
      'Built-in freelance marketplace generating verifiable creator income'
    ],
    compliance: ['FERPA Compliant', 'COPPA', 'WCAG 2.1 AA'],
    techStack: ['Flutter', 'Next.js', 'Python', 'AWS MediaLive', 'Redis', 'PostgreSQL'],
    visualType: 'edtech'
  },
  {
    id: 'logistics',
    name: 'Logistics & Transportation',
    shortLabel: 'Logistics & Supply Chain',
    iconName: 'Truck',
    projectTitle: 'Real-Time Fleet Telematics & Dynamic Route Dispatch',
    headline: 'Algorithmic route optimization and GPS telematics reducing fleet transit hours by 22%.',
    clientType: 'Regional Freight Carrier & Dispatch',
    problem: 'Disjointed driver communication, fuel waste from sub-optimal multi-stop routing, and blind shipment tracking for enterprise shippers.',
    solution: 'We engineered an end-to-end logistics platform featuring algorithmic multi-stop route dispatch, IoT driver telematics, electronic proof-of-delivery (e-POD), and automated freight broker matching.',
    verifiedResults: [
      '22% reduction in fleet transit hours and deadhead miles',
      'Real-time GPS vehicle tracking updated every 3 seconds',
      'Zero paper bills of lading with digital sign-on-glass',
      'Automated predictive vehicle maintenance scheduling'
    ],
    compliance: ['ELD Mandate', 'DOT / FMCSA Compliance', 'ISO 9001'],
    techStack: ['Node.js', 'WebSockets', 'Google Maps API', 'Kafka', 'PostgreSQL', 'React'],
    visualType: 'logistics'
  },
  {
    id: 'travel',
    name: 'Travel & Hospitality',
    shortLabel: 'Travel & Mobility',
    iconName: 'Compass',
    projectTitle: 'Sixt Rent a Car Contactless Mobility App',
    headline: 'Empowering travelers with digital keyless vehicle unlock and 3-minute airport vehicle pickup.',
    clientType: 'Sixt Mobility Network Partner',
    problem: 'Airport rental counter queues averaged 18 minutes, creating negative customer sentiment and delayed vehicle turnover during peak flight arrivals.',
    solution: 'Kuchoriya TechSoft engineered a cross-platform mobile app enabling instant digital ID verification, interactive lot map vehicle selection, and digital key unlock via Bluetooth/NFC credentials.',
    verifiedResults: [
      '4.8 / 5.0 average app store rating across iOS and Android',
      '65%+ of airport customers transitioned to 100% contactless pickup',
      'Reduced average vehicle collection time from 18 minutes to under 3 minutes',
      'Dynamic pricing engine maximizing fleet utilization'
    ],
    compliance: ['IATA Standards', 'PCI-DSS', 'GDPR Compliant'],
    techStack: ['Flutter', 'Swift', 'Kotlin', 'Bluetooth BLE', 'AWS IoT', 'Node.js'],
    visualType: 'travel'
  },
  {
    id: 'ecommerce',
    name: 'eCommerce & Retail',
    shortLabel: 'eCommerce & Retail',
    iconName: 'ShoppingCart',
    projectTitle: 'Headless High-Conversion Omnichannel Storefront',
    headline: 'Sub-second headless storefront delivering a 28% increase in mobile checkout conversion.',
    clientType: 'OmniChannel Direct-to-Consumer Brand',
    problem: 'Monolithic e-commerce platform suffered from 4.2-second mobile load times, high cart abandonment, and out-of-sync multi-warehouse inventory.',
    solution: 'We architected a headless Next.js Commerce storefront with edge caching, automated Shopify Plus inventory synchronization, and an AI-driven product recommendation engine.',
    verifiedResults: [
      'Mobile page load speeds dropped to 780 milliseconds',
      '28% measured increase in mobile checkout conversion rate',
      'Real-time inventory sync across 4 fulfillment warehouses',
      'One-click multi-currency checkout via Stripe & Apple Pay'
    ],
    compliance: ['PCI-DSS Level 1', 'SCA 3DS2', 'GDPR / CCPA'],
    techStack: ['Next.js Commerce', 'Shopify Plus API', 'Tailwind', 'Stripe', 'Algolia'],
    visualType: 'ecommerce'
  },
  {
    id: 'realestate',
    name: 'Real Estate & PropTech',
    shortLabel: 'Real Estate',
    iconName: 'Home',
    projectTitle: 'Smart PropTech 3D Portal & Tenant Management',
    headline: 'Streamlining listings and digital lease execution across 5,000+ properties.',
    clientType: 'Dubai Properties Partner Network',
    problem: 'Stale MLS property listings, cumbersome in-person viewing coordination, and paper-heavy leasing agreements slowed vacancy turnaround.',
    solution: 'We developed an interactive PropTech portal featuring 3D virtual tours, real-time MLS/IDX synchronization, automated tenant credit scoring, and digital lease signing.',
    verifiedResults: [
      'Reduced average property leasing cycle by 14 days',
      'Over 5,000 residential and commercial listings syndicated in real time',
      'Integrated 3D walkthroughs boosting lead engagement by 45%',
      'Automated tenant rent collections and maintenance ticketing'
    ],
    compliance: ['RESO Web API', 'Fair Housing Standards', 'ADA Compliance'],
    techStack: ['React', 'Three.js (3D Tours)', 'Node.js', 'PostgreSQL', 'AWS S3'],
    visualType: 'realestate'
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Industrial',
    shortLabel: 'Manufacturing & IoT',
    iconName: 'Factory',
    projectTitle: 'Smart Factory IoT Telemetry & Predictive Maintenance',
    headline: 'Reducing factory line downtime by 35% with computer vision and edge IoT telemetry.',
    clientType: 'Industrial Equipment & Component Manufacturer',
    problem: 'Unplanned machine failures cost thousands of dollars per hour, and manual product defect inspection allowed faulty units to reach dispatch.',
    solution: 'Kuchoriya TechSoft implemented edge IoT sensor ingestion pipelines, real-time vibration telemetry dashboards, and computer vision cameras for automated defect detection on production conveyor lines.',
    verifiedResults: [
      '35% reduction in unplanned factory line equipment downtime',
      '99.6% defect detection accuracy using edge computer vision',
      'Automated maintenance work-order generation in SAP ERP',
      'Real-time executive OEE (Overall Equipment Effectiveness) dashboards'
    ],
    compliance: ['Industry 4.0 Standards', 'ISO 9001 & 14001', 'OSHA Standards'],
    techStack: ['Python', 'OpenCV', 'AWS IoT Greengrass', 'TimescaleDB', 'React', 'Docker'],
    visualType: 'manufacturing'
  }
];
