import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#products', label: 'Products' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.href.slice(1))).filter(
      (el): el is HTMLElement => el !== null,
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive('#' + entry.target.id);
        });
      },
      { threshold: 0.4 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-navy-700/60 bg-navy-950/85 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-4 md:px-16 lg:px-24">
        <a href="#hero" className="font-display text-lg font-bold tracking-tight text-ink">
          D<span className="text-accent">.</span>ONAM
        </a>

        <ul className="hidden gap-9 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-xs uppercase tracking-widest transition-colors ${
                  active === link.href ? 'text-accent-soft' : 'text-navy-400 hover:text-accent-soft'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-navy-700/60 bg-navy-950/95 px-6 pb-4 pt-2 md:hidden">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm uppercase tracking-widest text-navy-400 hover:text-accent-soft"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
