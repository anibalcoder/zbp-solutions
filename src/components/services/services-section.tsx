import Link from 'next/link';
import { Intro } from './intro';
import { ServiceList } from './service-list';

export function ServicesSection() {
  return (
    <section>
      <div className="wrapper py-20 space-y-20">
        <Intro />
        <ServiceList />

        {/** TODO: Crear un componente CTA para reutilizar */}
        <div className="flex justify-center items-center">
          <Link
            href="/projects"
            className="inline-block w-50 bg-background/50 text-white font-bold border border-[#334155] text-center rounded-full p-4 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Ver Portafolio
          </Link>
        </div>
      </div>
    </section>
  );
}
