'use client';

import { useState } from 'react';
import { ChevronDownIcon, Send } from 'lucide-react';
import { APP_SERVICES } from '@/constants';
import { Service } from '@/interfaces';

function FormInput({
  id,
  label,
  type = 'text',
  placeholder,
  required = false,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-white/70">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={type === 'email' ? 'email' : 'off'}
        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 transition-all duration-200 outline-none focus:border-highlight/60 focus:bg-white/8 focus:ring-1 focus:ring-highlight/40 hover:border-white/20"
      />
    </div>
  );
}

function FormSelect({
  id,
  label,
  options,
  required = false,
}: {
  id: string;
  label: string;
  options: Service[];
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-white/70">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          name={id}
          required={required}
          className="w-full appearance-none rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 pr-10 text-sm text-white transition-all duration-200 outline-none focus:border-highlight/60 focus:ring-1 focus:ring-highlight/40 hover:border-white/20 cursor-pointer"
        >
          {options.map((opt) => (
            <option
              key={opt.id}
              value={opt.title}
              className="bg-background text-white"
            >
              {opt.title}
            </option>
          ))}
        </select>

        <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/50" />
      </div>
    </div>
  );
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Formulario de consulta de proyecto"
      className="flex flex-col gap-4"
    >
      {/* Row 1: name + email */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormInput
          id="nombre"
          label="Nombre Completo"
          placeholder="Ej. Juan Pérez"
          required
        />
        <FormInput
          id="correo"
          label="Correo Electrónico"
          type="email"
          placeholder="juan@empresa.com"
          required
        />
      </div>

      {/* Row 2: company + service */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormInput
          id="empresa"
          label="Empresa"
          placeholder="Nombre de tu negocio"
        />
        <FormSelect
          id="servicio"
          label="Servicio Requerido"
          options={APP_SERVICES}
        />
      </div>

      {/* Textarea */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="mensaje" className="text-sm font-medium text-white/70">
          Tu Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          placeholder="Cuéntanos brevemente sobre tu idea o necesidad..."
          className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 transition-all duration-200 outline-none focus:border-highlight/60 focus:ring-1 focus:ring-highlight/40 hover:border-white/20"
        />
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
        className="contact-submit-btn mt-1 flex w-full items-center justify-center gap-2.5 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <span
              className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
              aria-hidden="true"
            />
            Enviando…
          </>
        ) : (
          <>
            Enviar Mensaje
            <Send className="size-5" />
          </>
        )}
      </button>
    </form>
  );
}
