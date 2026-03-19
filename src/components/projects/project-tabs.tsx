'use client';

import { TABS } from '@/constants';
import { ProjectTag } from '@/constants/projects';

export type TabOption = 'All' | ProjectTag;

interface ProjectTabsProps {
  active: TabOption;
  onChange: (tab: TabOption) => void;
}

export function ProjectTabs({ active, onChange }: ProjectTabsProps) {
  function handleKeyDown(
    e: React.KeyboardEvent<HTMLButtonElement>,
    current: number,
  ) {
    const total = TABS.length;
    if (e.key === 'ArrowRight') {
      onChange(TABS[(current + 1) % total].value);
    } else if (e.key === 'ArrowLeft') {
      onChange(TABS[(current - 1 + total) % total].value);
    } else if (e.key === 'Home') {
      onChange(TABS[0].value);
    } else if (e.key === 'End') {
      onChange(TABS[total - 1].value);
    }
  }

  return (
    <div
      role="tablist"
      aria-label="Filtrar proyectos"
      className="flex items-center justify-center flex-wrap gap-2"
    >
      {TABS.map((tab, index) => {
        const isActive = active === tab.value;

        return (
          <button
            key={tab.value}
            role="tab"
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(tab.value)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={[
              'relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 outline-none',
              'focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-background',
              isActive
                ? 'bg-highlight text-white shadow-lg shadow-highlight/40'
                : 'bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white/90',
            ].join(' ')}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
