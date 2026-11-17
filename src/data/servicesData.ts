import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    category: 'engineering',
    shortDesc: 'Native iOS & Android and high-performance cross-platform apps built for scale and retention.',
    fullDesc: 'We design and engineer enterprise-grade mobile applications for iOS, Android, and cross-platform ecosystems. From consumer apps to mission-critical field operations, our mobile solutions combine fluid UI, offline resilience, secure API integrations, and robust cloud synchronisation.',
    iconName: 'Smartphone',
    deliverables: [
      'Native iOS (Swift) & Android (Kotlin) apps',
      'Cross-platform Flutter & React Native solutions',
      'App Store Optimization (ASO) & seamless deployment',
      'Offline-first architectures & background sync',
      'Biometric authentication & secure data storage'
    ],
    techStack: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'GraphQL'],
    officialUrl: 'https://kuchoriyatechsoft.com/mobile-app-development-company'
  },
  {
    id: 'custom-web',
    title: 'Web & Custom Software Development',
    category: 'engineering',
    shortDesc: 'Scalable SaaS platforms, bespoke web portals, and complex enterprise backbones.',
    fullDesc: 'We architect and build tailored web applications and custom software that align strictly with your business workflows. Using modern component architectures and microservices, we ensure zero technical debt, high throughput, and seamless third-party ERP/CRM interoperability.',
    iconName: 'Globe',
    deliverables: [
      'Custom SaaS product engineering from 0 to 1',
      'Modern web applications (React, Next.js, Node.js)',
      'Enterprise workflow management systems',
      'Robust REST & GraphQL API architectures',
      'Legacy software modernization & refactoring'
    ],
    techStack: ['Next.js', 'React', 'Node.js', 'Python', 'TypeScript', 'PostgreSQL'],
    officialUrl: 'https://kuchoriyatechsoft.com/software-development-company'
  },
  {
    id: 'ai-genai',
    title: 'Artificial Intelligence & Generative AI',
    category: 'ai',
    shortDesc: 'Turn proprietary business data into predictive insights, custom LLMs, and automated intelligence.',
    fullDesc: 'We unlock competitive advantages with enterprise-grade AI. Our machine learning engineers build custom LLM fine-tuning pipelines, Retrieval-Augmented Generation (RAG) engines, predictive analytics models, and intelligent visual recognition algorithms tailored to your industry domain.',
    iconName: 'Cpu',
    deliverables: [
      'Custom LLM fine-tuning & domain adaptation',
      'Enterprise RAG systems with vector search',
      'Predictive analytics & automated forecasting',
      'Computer vision & intelligent document parsing',
      'Responsible AI governance & data privacy guardrails'
    ],
    techStack: ['OpenAI', 'Gemini', 'LangChain', 'PyTorch', 'Pinecone', 'Python'],
    officialUrl: 'https://kuchoriyatechsoft.com/artificial-intelligence-development'
  },
  {
    id: 'ai-agents',
    title: 'AI Agent Development & Automation',
    category: 'ai',
    shortDesc: 'Autonomous multi-agent workflows that execute complex tasks, automate reasoning, and reduce overhead.',
    fullDesc: 'Empower your enterprise with autonomous agentic systems. We design multi-agent swarms and intelligent assistants capable of multi-step decision making, tool invocation, customer interaction, document generation, and continuous process optimization without human bottlenecks.',
    iconName: 'Bot',
    deliverables: [
      'Multi-agent collaborative systems & orchestration',
      'Autonomous customer support & reasoning agents',
      'Automated robotic process automation (RPA) workflows',
      'CRM, ERP, and database tool-calling pipelines',
      'Real-time agent monitoring & human-in-the-loop controls'
    ],
    techStack: ['CrewAI', 'LangGraph', 'AutoGPT', 'FastAPI', 'Redis', 'Python'],
    officialUrl: 'https://kuchoriyatechsoft.com/artificial-intelligence-development'
  },
  {
    id: 'ui-ux',
    title: 'UI/UX & Product Design',
    category: 'design',
    shortDesc: 'Human-centered user experiences, design systems, and high-conversion enterprise interfaces.',
    fullDesc: 'Great software starts with empathetic, conversion-focused design. Our product designers conduct thorough user research, journey mapping, wireframing, and interactive design system creation. We bridge the gap between aesthetic beauty and engineering feasibility.',
    iconName: 'Palette',
    deliverables: [
      'End-to-end product discovery & journey mapping',
      'Scalable Figma design systems & component libraries',
      'High-fidelity interactive clickable prototypes',
      'Accessibility audit & WCAG 2.1 compliance',
      'Conversion-rate optimization (CRO) UI refactors'
    ],
    techStack: ['Figma', 'Design Systems', 'Prototyping', 'User Testing', 'WCAG 2.1'],
    officialUrl: 'https://kuchoriyatechsoft.com/ui-ux-design-services'
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps Engineering',
    category: 'cloud-web3',
    shortDesc: 'Resilient cloud infrastructure, automated CI/CD pipelines, and zero-downtime scalability.',
    fullDesc: 'We modernize and safeguard your digital infrastructure across AWS, Azure, and Google Cloud. Our DevOps engineers implement Infrastructure-as-Code (Terraform), container orchestration (Kubernetes), automated security compliance, and disaster recovery architectures.',
    iconName: 'Cloud',
    deliverables: [
      'Cloud-native architecture on AWS, GCP & Azure',
      'Automated CI/CD deployment pipelines (GitHub Actions, GitLab)',
      'Kubernetes container orchestration & Docker clustering',
      'FinOps cloud cost optimization & auditing',
      '24/7 infrastructure observability & proactive monitoring'
    ],
    techStack: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Prometheus'],
    officialUrl: 'https://kuchoriyatechsoft.com/cloud-computing-services'
  },
  {
    id: 'blockchain',
    title: 'Blockchain Development',
    category: 'cloud-web3',
    shortDesc: 'Audited smart contracts, decentralized applications (dApps), and verifiable enterprise Web3.',
    fullDesc: 'We build secure, enterprise-grade decentralized solutions. From EVM-compatible smart contracts and decentralized finance (DeFi) protocols to asset tokenization and transparent supply chain ledgers, we ensure bulletproof cryptography and gas-optimized efficiency.',
    iconName: 'ShieldCheck',
    deliverables: [
      'Audited smart contract development (Solidity, Rust)',
      'Custom decentralized applications (dApps) & Web3 portals',
      'Asset tokenization & private consortium ledgers',
      'Secure custodial & non-custodial wallet integrations',
      'Layer 2 scaling solutions (Arbitrum, Polygon, Optimism)'
    ],
    techStack: ['Solidity', 'Ethereum', 'Polygon', 'Web3.js', 'Ethers.js', 'IPFS'],
    officialUrl: 'https://kuchoriyatechsoft.com/blockchain-development'
  },
  {
    id: 'ecommerce',
    title: 'eCommerce Development',
    category: 'engineering',
    shortDesc: 'Headless eCommerce, omnichannel storefronts, and high-converting checkout flows.',
    fullDesc: 'We develop high-velocity eCommerce platforms engineered for maximum conversion. Whether building headless storefronts with Next.js Commerce or implementing enterprise Shopify Plus and Magento solutions, we optimize site speed, inventory sync, and seamless checkout.',
    iconName: 'ShoppingBag',
    deliverables: [
      'Headless eCommerce architecture & sub-second load times',
      'Shopify Plus & Magento enterprise store development',
      'Omnichannel inventory & order management synchronization',
      'Global payment gateways (Stripe, PayPal, Adyen) integration',
      'Personalized recommendation engines & AI search'
    ],
    techStack: ['Shopify Plus', 'Magento', 'Next.js Commerce', 'Stripe', 'Algolia', 'Tailwind'],
    officialUrl: 'https://kuchoriyatechsoft.com/ecommerce-development-company'
  },
  {
    id: 'enterprise-ondemand',
    title: 'Enterprise & On-Demand Solutions',
    category: 'engineering',
    shortDesc: 'End-to-end platforms for logistics, ride-hailing, food delivery, and digital health operations.',
    fullDesc: 'We build mission-critical on-demand platforms that synchronize consumers, service providers, and operational dispatch in real time. Features include live GPS routing, algorithmic queue matching, multi-tier commission settlements, and comprehensive executive dashboards.',
    iconName: 'Layers',
    deliverables: [
      'Three-sided on-demand ecosystem (User, Driver/Provider, Admin)',
      'Real-time geolocation tracking & dynamic route optimization',
      'Automated dispatching & algorithmic load balancing',
      'Multi-currency automated billing & driver payouts',
      'Comprehensive business intelligence & analytics suites'
    ],
    techStack: ['Node.js', 'WebSockets', 'Google Maps API', 'Redis', 'PostgreSQL', 'Kafka'],
    officialUrl: 'https://kuchoriyatechsoft.com/solutions'
  }
];

export const SERVICE_CATEGORIES = [
  { id: 'all', label: 'All Services' },
  { id: 'ai', label: 'AI & Automation' },
  { id: 'engineering', label: 'Custom Engineering' },
  { id: 'cloud-web3', label: 'Cloud & Web3' },
  { id: 'design', label: 'UI/UX Design' }
];
