import { ContactItem } from '@/constants/contact-items';
import Link from 'next/link';

export function ContactCard({ icon: Icon, label, value, href }: ContactItem) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label}: ${value}`}
      className="group rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-highlight/40 hover:bg-white/10 flex items-center gap-4 px-5 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight"
    >
      {/* Icon */}
      <span
        aria-hidden="true"
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-highlight transition-colors duration-300 group-hover:border-highlight/40 group-hover:bg-highlight/10"
      >
        <Icon />
      </span>

      {/* Text content */}
      <div className="flex flex-col">
        <span className="text-xs font-medium text-white/50">{label}</span>
        <span className="text-sm font-semibold text-white">{value}</span>
      </div>
    </Link>
  );
}
