'use client';

import { ProjectItem } from '@/interfaces';
import { ProjectCard } from './project-card';
import { useEffect, useRef, useState } from 'react';

interface ProjectGridProps {
  projects: ProjectItem[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [visible, setVisible] = useState<ProjectItem[]>(projects);
  const [fading, setFading] = useState(false);
  const prevRef = useRef(projects);

  useEffect(() => {
    if (projects === prevRef.current) return;
    prevRef.current = projects;

    // 1. Fade out
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFading(true);
    const timer = setTimeout(() => {
      // 2. Swap content
      setVisible(projects);
      setFading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [projects]);

  return (
    <ul
      className={`grid-responsive transition-all duration-200 ${
        fading ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'
      }`}
    >
      {visible.map((project) => (
        <li key={project.title}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
