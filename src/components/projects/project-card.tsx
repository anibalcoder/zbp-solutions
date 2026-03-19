import Image from 'next/image';
import { ProjectItem } from '@/interfaces';

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, iconTag, tecnologias, imagen, tagName } = project;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/5 hover:shadow-xl hover:shadow-black/30">
      {/* ── Image ── */}
      <div className="relative aspect-video w-full overflow-hidden bg-[#0d1520]">
        <Image
          src={imagen}
          alt={title}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* ── Body ── */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        {/* Header */}
        <header className="flex items-center gap-2">
          <span aria-hidden="true" className="text-base leading-none">
            {iconTag}
          </span>

          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-highlight">
            {tagName}
          </span>
        </header>

        {/* Title */}
        <h3 className="font-outfit text-base font-bold leading-snug text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="line-clamp-3 text-sm leading-relaxed text-white/50">
          {description}
        </p>

        {/* Footer */}
        <footer>
          <ul
            className="mt-1 flex flex-wrap gap-2"
            aria-label="Tecnologías usadas"
          >
            {tecnologias.map((tech, index) => (
              <li
                key={`${tech}-${index}`}
                className="rounded-full border border-highlight/20 bg-highlight/10 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-highlight/80"
              >
                {tech}
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </article>
  );
}
