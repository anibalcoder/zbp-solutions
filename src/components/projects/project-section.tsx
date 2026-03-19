'use client';

import { useState } from 'react';
import { PROJECTS } from '@/constants/projects';
import { ProjectTabs, TabOption } from './project-tabs';
import { ProjectGrid } from './project-grid';
import { ProjectCta } from '../ctas/project-cta';

export function ProjectSection() {
  const [activeTab, setActiveTab] = useState<TabOption>('All');

  const filtered =
    activeTab === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.tagName === activeTab);

  return (
    <section aria-labelledby="projects-heading" className="overflow-hidden">
      <div className="wrapper relative py-36 flex flex-col gap-16">
        {/* ── Ambient background glows ── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-125 w-200 rounded-full bg-highlight/8 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-40 left-10 h-80 w-80 rounded-full bg-accent/6 blur-[100px]"
        />

        {/* ── Section Header ── */}
        <header className="flex flex-col items-center gap-4 text-center max-w-2xl mx-auto">
          <h2
            id="projects-heading"
            className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15]"
          >
            ZBP Portafolio de{' '}
            <span className="bg-linear-to-r from-highlight to-accent bg-clip-text text-transparent">
              Proyectos
            </span>
          </h2>

          <p className="description text-center max-w-md">
            Explora nuestras soluciones digitales innovadoras y casos de éxito
            en desarrollo de software, desde plataformas e-commerce hasta
            ecosistemas fintech.
          </p>
        </header>

        <ProjectTabs active={activeTab} onChange={setActiveTab} />

        <ProjectGrid projects={filtered} />

        <ProjectCta />
      </div>
    </section>
  );
}
