'use client';

import { MenuIcon, XIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ContactCta } from '../ctas/contact-cta';
import { Navigation } from './navigation';

export function MenuMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('menu-open', isMenuOpen);
  }, [isMenuOpen]);

  return (
    <nav className="md:hidden">
      <button
        aria-label="Abrir menú"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
        className="cursor-pointer"
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        <MenuIcon className="size-6" />
      </button>

      <div
        className={`fixed inset-0 bg-[#121930] flex flex-col transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-end items-center px-6 md:px-12 py-6">
          <button
            aria-label="Cerrar menú"
            className="cursor-pointer"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            <XIcon className="size-6" />
          </button>
        </div>

        <Navigation>
          <ContactCta className="text-lg mt-6" />
        </Navigation>
      </div>
    </nav>
  );
}
