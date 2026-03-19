import { TechItem } from '@/interfaces';
import { Monitor, Code, Database, Cloud } from 'lucide-react';

export const TECH_STACK: TechItem[] = [
  { id: 'frontend', icon: Monitor, label: 'Frontend' },
  { id: 'code', icon: Code, label: 'Código' },
  { id: 'database', icon: Database, label: 'Base de datos' },
  { id: 'cloud', icon: Cloud, label: 'Cloud' },
];
