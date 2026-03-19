import { CONTACT_ITEMS } from '@/constants';
import { ContactCard } from './contact-card';
import { ContactForm } from './contact-form';
import { TECH_STACK } from '@/constants';

export function ContactSection() {
  return (
    <section id="contacto" aria-labelledby="contact-heading">
      <div className="wrapper relative py-20">
        {/* Subtle background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-highlight/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:items-center">
          {/* ───── LEFT COLUMN ───── */}
          <div className="flex flex-col gap-8">
            <span className="text-xs font-semibold tracking-widest text-highlight uppercase">
              Transformación Digital
            </span>

            <h2
              id="contact-heading"
              className="font-outfit text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              Hablemos de tu
              <span className=" block contact-gradient-text">
                próximo proyecto
              </span>
            </h2>

            <p className="description text-left">
              Impulsamos tu transformación digital con tecnología de vanguardia
              y estrategias de marketing de alto impacto.
            </p>

            <ul className="flex flex-col gap-4">
              {CONTACT_ITEMS.map((item) => (
                <li key={item.label}>
                  <ContactCard {...item} />
                </li>
              ))}
            </ul>
          </div>

          {/* ───── RIGHT COLUMN – Form Card ───── */}
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/40 backdrop-blur-sm sm:p-8">
            <header className="mb-6">
              <h3 className="font-outfit text-xl font-bold text-white sm:text-2xl">
                Consulta de Proyecto
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/50">
                Completa el formulario y nos pondremos en contacto en menos de
                24&nbsp;horas.
              </p>
            </header>

            <ContactForm />

            <footer className="mt-6 flex items-center gap-3 border-t border-white/8 pt-5">
              <p className="text-[10px] font-semibold tracking-widest text-white/30 uppercase">
                Tecnologías que dominamos
              </p>

              <ul className="flex items-center gap-3 text-white/30">
                {TECH_STACK.map(({ id, icon: Icon, label }) => (
                  <li key={id}>
                    <Icon aria-label={label} className="size-5" />
                  </li>
                ))}
              </ul>
            </footer>
          </article>
          {/* ───── END RIGHT COLUMN ───── */}
        </div>
      </div>
    </section>
  );
}
