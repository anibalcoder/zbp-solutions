import { Service } from '@/interfaces';
import { Globe, LayoutDashboard, Shuffle } from 'lucide-react';

export const APP_SERVICES: Service[] = [
  {
    id: 'web-system',
    title: 'Sistema Web',
    features: ['Optimización SEO', 'Diseño Responsive', 'High Performance'],
    icon: Globe,
  },
  {
    id: 'landing-page',
    title: 'Landing Page',
    features: [
      'Diseño enfocado en conversión',
      'Integración con formularios',
      'Carga rápida y optimizada',
    ],
    icon: LayoutDashboard,
  },
  {
    id: 'enterprise-systems',
    title: 'Sistemas Empresariales',
    features: ['ERP / CRM web', 'Integración con APIs', 'Arquitectura segura'],
    icon: Shuffle,
  },
];
