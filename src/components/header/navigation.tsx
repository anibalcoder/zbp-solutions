'use client';

import { NAVIGATION_LINKS } from '@/constants/navigation-links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationProps {
  children?: React.ReactNode;
}

export function Navigation({ children }: NavigationProps) {
  const pathname = usePathname();

  return (
    <ul
      className={
        'flex-1 flex flex-col md:flex-row items-center justify-center gap-y-6 gap-x-9'
      }
    >
      {NAVIGATION_LINKS.map((link) => {
        const active =
          link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);

        return (
          <li key={link.name}>
            <Link
              className={`block font-medium text-2xl md:text-base p-3 md:p-0 rounded-lg transition-colors ${
                active ? 'text-highlight' : 'text-white'
              }`}
              href={link.href}
              aria-label={link.ariaLabel}
            >
              {link.name}
            </Link>
          </li>
        );
      })}

      {children}
    </ul>
  );
}
