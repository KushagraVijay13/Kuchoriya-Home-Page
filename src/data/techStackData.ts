import { TechnologyItem } from '../types';

export const TECH_CATEGORIES = [
  'All Technologies',
  'AI & Data',
  'Frontend',
  'Mobile',
  'Backend',
  'Cloud & DevOps',
  'Database & Web3'
] as const;

export const TECH_STACK_DATA: TechnologyItem[] = [
  // AI & Data
  { name: 'OpenAI GPT-4o', category: 'AI & Data', icon: 'Sparkles', popularFor: 'Enterprise LLM reasoning' },
  { name: 'Google Gemini', category: 'AI & Data', icon: 'Cpu', popularFor: 'Multimodal intelligence' },
  { name: 'LangChain & LangGraph', category: 'AI & Data', icon: 'Network', popularFor: 'Autonomous agent swarms' },
  { name: 'PyTorch', category: 'AI & Data', icon: 'Binary', popularFor: 'Custom deep learning models' },
  { name: 'TensorFlow', category: 'AI & Data', icon: 'Cpu', popularFor: 'Production ML deployment' },
  { name: 'Pinecone / Milvus', category: 'AI & Data', icon: 'Database', popularFor: 'High-speed vector embeddings' },

  // Frontend
  { name: 'React', category: 'Frontend', icon: 'Atom', popularFor: 'Dynamic interactive interfaces' },
  { name: 'Next.js', category: 'Frontend', icon: 'Layers', popularFor: 'Server-rendered SEO platforms' },
  { name: 'TypeScript', category: 'Frontend', icon: 'Code', popularFor: 'Type-safe enterprise architecture' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'Palette', popularFor: 'Responsive modern UI systems' },
  { name: 'Vue.js / Nuxt', category: 'Frontend', icon: 'Layout', popularFor: 'High-speed single-page apps' },

  // Mobile
  { name: 'Flutter', category: 'Mobile', icon: 'Smartphone', popularFor: 'Cross-platform native 60fps apps' },
  { name: 'React Native', category: 'Mobile', icon: 'Tablet', popularFor: 'Universal iOS & Android codebases' },
  { name: 'Swift (iOS)', category: 'Mobile', icon: 'Apple', popularFor: 'Native Apple ecosystem performance' },
  { name: 'Kotlin (Android)', category: 'Mobile', icon: 'Bot', popularFor: 'Native Android material apps' },

  // Backend
  { name: 'Node.js', category: 'Backend', icon: 'Server', popularFor: 'High-concurrency microservices' },
  { name: 'Python (FastAPI / Django)', category: 'Backend', icon: 'Terminal', popularFor: 'Data engineering & AI backbones' },
  { name: 'Go (Golang)', category: 'Backend', icon: 'Zap', popularFor: 'Ultra-low latency network services' },
  { name: 'Java / Spring Boot', category: 'Backend', icon: 'Shield', popularFor: 'Enterprise transaction systems' },
  { name: '.NET Core', category: 'Backend', icon: 'Grid', popularFor: 'Legacy enterprise integration' },

  // Cloud & DevOps
  { name: 'Amazon Web Services (AWS)', category: 'Cloud & DevOps', icon: 'Cloud', popularFor: 'Scalable cloud infrastructure' },
  { name: 'Google Cloud Platform (GCP)', category: 'Cloud & DevOps', icon: 'CloudRain', popularFor: 'Big data & Vertex AI hosting' },
  { name: 'Microsoft Azure', category: 'Cloud & DevOps', icon: 'CloudLightning', popularFor: 'Enterprise hybrid cloud' },
  { name: 'Docker & Kubernetes', category: 'Cloud & DevOps', icon: 'Box', popularFor: 'Container cluster orchestration' },
  { name: 'Terraform', category: 'Cloud & DevOps', icon: 'Wrench', popularFor: 'Infrastructure-as-Code (IaC)' },

  // Database & Web3
  { name: 'PostgreSQL', category: 'Database & Web3', icon: 'Database', popularFor: 'ACID relational transactions' },
  { name: 'MongoDB', category: 'Database & Web3', icon: 'FileText', popularFor: 'Flexible document data models' },
  { name: 'Redis', category: 'Database & Web3', icon: 'Gauge', popularFor: 'Sub-millisecond memory caching' },
  { name: 'Solidity & Ethereum', category: 'Database & Web3', icon: 'Coins', popularFor: 'Smart contract development' },
  { name: 'Polygon / Arbitrum', category: 'Database & Web3', icon: 'Blocks', popularFor: 'Gas-optimized L2 blockchain' }
];
