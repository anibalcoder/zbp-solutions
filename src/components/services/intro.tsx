export function Intro() {
  return (
    <header className="max-w-2xl mx-auto flex flex-col items-center gap-2">
      {/* Eyebrow */}
      <p className="text-highlight text-sm font-bold uppercase tracking-widest">
        Ecosistema Digital
      </p>

      {/* Title */}
      <h2
        id="services-title"
        className="title flex justify-center flex-wrap gap-3"
      >
        <span className="drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]">
          Nuestros
        </span>

        <span className="bg-linear-to-r from-[#6D5DF6] to-[#D946EF] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(217,70,239,0.6)]">
          Servicios
        </span>
      </h2>

      {/* Description */}
      <p className="description mt-4 text-center">
        Potenciamos tu visión con tecnología de vanguardia y estrategias
        orientadas a resultados. Desde el código hasta la conversión.
      </p>
    </header>
  );
}
