"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { navItems } from '@/lib/content';

function hrefToSectionId(href: string) {
  return href.includes('#') ? href.split('#')[1] : '';
}

function isSamePage(pathname: string, href: string, activeSection: string) {
  if (href.includes('#')) {
    const [path, hash] = href.split('#');
    return pathname === path && activeSection === hash;
  }

  return pathname === href;
}

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const isHome = pathname === '/';
  const elevated = !isHome || scrolled || open;

  const observedSectionIds = useMemo(
    () => navItems.map((item) => hrefToSectionId(item.href)).filter(Boolean),
    []
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', open);
    return () => document.body.classList.remove('overflow-hidden');
  }, [open]);

  useEffect(() => {
    if (!isHome || observedSectionIds.length === 0) {
      setActiveSection('');
      return;
    }

    const sections = observedSectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) return;

    const updateActiveFromViewport = () => {
      const viewportAnchor = window.innerHeight * 0.42;
      const current = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= viewportAnchor && rect.bottom >= viewportAnchor;
      });

      if (current) setActiveSection(current.id);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0, 0.15, 0.35, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
    updateActiveFromViewport();
    window.addEventListener('scroll', updateActiveFromViewport, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateActiveFromViewport);
    };
  }, [isHome, observedSectionIds]);

  useEffect(() => setOpen(false), [pathname]);

  const navClass = elevated
    ? 'bg-cream/95 py-3 shadow-sm backdrop-blur text-forest'
    : 'bg-transparent py-6 text-cream';

  const linkClass = (href: string) => {
    const active = isSamePage(pathname, href, activeSection);
    return `transition-colors hover:text-gold focus-visible:text-gold ${active ? 'text-gold' : ''}`;
  };

  return (
    <>
    {pathname !== '/connect' && (
      <Link
        href="/connect"
        className="fixed bottom-0 inset-x-0 z-40 flex items-center justify-center gap-2 bg-forest py-4 text-cream text-sm font-medium tracking-[.06em] shadow-[0_-4px_24px_rgba(27,74,58,.18)] transition-colors hover:bg-sage active:bg-sage lg:hidden"
      >
        Begin the Conversation →
      </Link>
    )}
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${navClass}`}>
      <a className="skip-link" href="#page-content">Skip to content</a>
      <nav className="container flex items-center justify-between" aria-label="Primary navigation">
        <Link href="/" className="font-signature text-4xl leading-none" onClick={() => setOpen(false)}>
          Alexis Lyon
        </Link>

        <div className="hidden items-center gap-7 text-sm font-medium uppercase tracking-[.12em] lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass(item.href)}>
              {item.label}
            </Link>
          ))}
          <Link className="btn btn-gold !px-5 !py-3" href="/connect">Begin</Link>
        </div>

        <button
          className="relative z-[70] flex h-11 w-11 items-center justify-center rounded-full border border-current/25 transition-colors hover:border-gold hover:text-gold lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          type="button"
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span className="relative block h-5 w-6">
            <span className={`absolute left-0 top-0 h-px w-6 bg-current transition-transform duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`absolute left-0 top-2 h-px w-6 bg-current transition-opacity duration-300 ${open ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`absolute left-0 top-4 h-px w-6 bg-current transition-transform duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </span>
        </button>
      </nav>

      <button
        aria-label="Close menu backdrop"
        className={`fixed inset-0 z-[55] bg-forest/45 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => setOpen(false)}
        tabIndex={open ? 0 : -1}
        type="button"
      />

      <aside
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed right-0 top-0 z-[60] flex h-dvh w-[min(86vw,24rem)] flex-col bg-cream px-8 pb-8 pt-28 text-forest shadow-2xl transition-transform duration-500 ease-out lg:hidden ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col gap-6">
          {navItems.map((item) => (
            <Link
              onClick={() => setOpen(false)}
              key={item.href}
              href={item.href}
              className={`font-display text-4xl leading-none transition-colors hover:text-gold ${linkClass(item.href)}`}
            >
              {item.label}
            </Link>
          ))}
          <Link onClick={() => setOpen(false)} className="btn btn-forest mt-4" href="/connect">
            Schedule a Free Consultation
          </Link>
        </div>
      </aside>
    </header>
    </>
  );
}
