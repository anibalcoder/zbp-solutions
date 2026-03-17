import Link from 'next/link';

interface ContactCtaProps {
  className?: string;
}

export function ContactCta({ className }: ContactCtaProps) {
  return (
    <Link
      href="/contact"
      className={`bg-highlight text-white rounded-full py-2.5 px-6 font-bold shadow-[0px_10px_15px_-3px_rgba(13,89,242,0.2),0px_4px_6px_-4px_rgba(13,89,242,0.2)] ${className}`}
    >
      Contáctanos
    </Link>
  );
}
