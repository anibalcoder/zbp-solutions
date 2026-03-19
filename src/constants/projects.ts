import { ProjectItem } from '@/interfaces';

export type ProjectTag = 'Web' | 'Landing' | 'Empresarial';

export const PROJECTS: ProjectItem[] = [
  {
    title: 'E-commerce Evolution',
    description:
      'Full-stack e-commerce platform with seamless multi-currency payments and real-time inventory management.',
    iconTag: '⚛',
    tagName: 'Web',
    tecnologias: ['React', 'Node.js', 'MongoDB'],
    imagen: 'https://anibalcoder.vercel.app/projects/tres-en-raya.webp',
  },
  {
    title: 'Fintech App Design',
    description:
      'Modern fintech interface featuring biometric authentication and live stock market data tracking.',
    iconTag: '📱',
    tagName: 'Empresarial',
    tecnologias: ['Flutter', 'Firebase', 'Dart'],
    imagen: 'https://anibalcoder.vercel.app/projects/tres-en-raya.webp',
  },
  {
    title: 'SaaS Dashboard Pro',
    description:
      'High-performance dashboard for enterprise resource planning with automated cloud deployments.',
    iconTag: '🖥',
    tagName: 'Web',
    tecnologias: ['Next.js', 'Tailwind', 'AWS'],
    imagen: 'https://anibalcoder.vercel.app/projects/tres-en-raya.webp',
  },
  {
    title: 'HealthTech Mobile',
    description:
      'Intuitive mobile health tracking system with secure doctor-patient messaging and appointment scheduling.',
    iconTag: '❤',
    tagName: 'Landing',
    tecnologias: ['React Native', 'GraphQL'],
    imagen: 'https://anibalcoder.vercel.app/projects/tres-en-raya.webp',
  },
  {
    title: 'Logistics Cloud',
    description:
      'Scalable logistics management system with AI-driven route optimization and real-time package tracking.',
    iconTag: '☁',
    tagName: 'Empresarial',
    tecnologias: ['Python', 'Django', 'PostgreSQL'],
    imagen: 'https://anibalcoder.vercel.app/projects/tres-en-raya.webp',
  },
  {
    title: 'AI Analytics Portal',
    description:
      'Advanced data visualization portal utilizing machine learning to predict market trends and consumer behavior.',
    iconTag: '🤖',
    tagName: 'Web',
    tecnologias: ['Vue.js', 'TensorFlow', 'D3.js'],
    // imagen: '/projects/ai-analytics.png',
    imagen: 'https://anibalcoder.vercel.app/projects/tres-en-raya.webp',
  },
];
