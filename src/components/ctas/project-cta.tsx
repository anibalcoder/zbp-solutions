import Link from 'next/link';

export function ProjectCta() {
  return (
    <div className="relative rounded-2xl overflow-hidden border border-highlight/20 bg-linear-to-br from-highlight/10 via-[#0d1e4a]/60 to-[#071230]/80 p-10 sm:p-14 text-center">
      {/* decorative glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/3 h-60 w-60 rounded-full bg-highlight/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 right-1/4 h-60 w-60 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative flex flex-col items-center gap-4">
        <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-white leading-tight">
          ¿Tienes un proyecto en mente?
        </h2>
        <p className="text-white/50 text-sm sm:text-base max-w-sm leading-relaxed">
          Hagamos realidad tu visión con tecnología de vanguardia y diseño
          centrado en el usuario.
        </p>
        <Link
          href="/contact"
          className="mt-2 inline-block bg-highlight text-white font-semibold text-sm px-7 py-3 rounded-full shadow-lg shadow-highlight/40 hover:scale-105 hover:shadow-highlight/60 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Contáctanos ahora
        </Link>
      </div>
    </div>
  );
}
