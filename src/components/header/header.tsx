import Link from 'next/link';
import { FavIcon } from '../icons/favicon';
import { Navigation } from './navigation';
import { MenuMobile } from './menu-mobile';
import { ContactCta } from '../ctas/contact-cta';

export function Header() {
  return (
    <header>
      <div className="max-w-7xl mx-auto flex items-center justify-between py-6 px-6 md:px-12">
        <Link href="/" className="flex items-center gap-3 font-bold text-xl">
          <FavIcon width={40} height={40} />
          <span>
            ZBP <span className="text-highlight">Soluciones</span>
          </span>
        </Link>

        <nav className="hidden md:block">
          <Navigation />
        </nav>

        <ContactCta className="hidden md:block text-sm" />

        <MenuMobile />
      </div>
    </header>
  );
}
