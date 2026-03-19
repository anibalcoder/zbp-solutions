import { ProjectTag } from '@/constants';

export interface ProjectItem {
  title: string;
  description: string;
  iconTag: string;
  tagName: ProjectTag;
  tecnologias: string[];
  imagen: string;
}
