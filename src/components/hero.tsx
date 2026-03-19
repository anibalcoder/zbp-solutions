import Link from 'next/link';

export function Hero() {
  return (
    <section
      role="region"
      aria-labelledby="hero-title"
      className="wrapper relative py-36"
    >
      <div className="relative max-w-3xl mx-auto flex flex-col gap-8">
        {/* Blur decorativo */}
        <div
          aria-hidden="true"
          className="size-32 absolute right-0 top-0 bg-[rgba(112,0,255,0.3)] blur-3xl rounded-full"
        />
        <div
          aria-hidden="true"
          className="size-32 absolute left-0 bottom-0 bg-[rgba(112,0,255,0.3)] blur-3xl rounded-full"
        />

        {/* Badge */}
        <p
          role="status"
          className="max-w-max text-balance bg-[#171d29] text-accent flex items-center gap-3 font-semibold uppercase text-[12px] lg:text-sm border border-accent/30 px-4 py-2 rounded-full tracking-wider mx-auto"
        >
          <span className="relative flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping motion-reduce:hidden rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
          </span>
          sistemas & apps de siguiente generación
        </p>

        {/* Título */}
        <h1 id="hero-title" className="title">
          Potenciamos tu{' '}
          <span className="block bg-linear-to-r from-accent to-highlight bg-clip-text text-transparent">
            Visión Digital
          </span>
        </h1>

        {/* Descripción */}
        <p className="description text-center">
          Transformamos ideas complejas en interfaces intuitivas y sistemas
          robustos. Especialistas en desarrollo web, software a medida y
          marketing digital estratégico.
        </p>

        {/* CTA */}
        <div className="flex justify-center items-center">
          <Link
            href="/services"
            className="inline-block w-full sm:w-max bg-accent text-background/90 text-lg text-center rounded-full font-semibold px-6 py-4 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Explora Soluciones
          </Link>
        </div>
      </div>
    </section>
  );
}
