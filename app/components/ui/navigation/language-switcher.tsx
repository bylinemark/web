'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import gsap from 'gsap';
import { locales, type Locale } from '@/i18n/config';

export function LanguageSwitcherCustom() {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('language');
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const getCurrentLocale = (): Locale => {
    const parts = pathname.split('/').filter(Boolean);
    const potentialLocale = parts[0];

    if (potentialLocale && (locales as readonly string[]).includes(potentialLocale)) {
      return potentialLocale as Locale;
    }

    return 'en';
  };

  const currentLocale = getCurrentLocale();

  const languageLabels: Record<Locale, string> = {
    en: t('english'),
    cs: t('czech'),
  };

  const languageCodes: Record<Locale, string> = {
    en: 'EN',
    cs: 'CS',
  };

  const handleLanguageChange = (newLocale: Locale) => {
    const parts = pathname.split('/').filter(Boolean);
    const hasLocalePrefix = (locales as readonly string[]).includes(parts[0]);
    const pathWithoutLocale = (hasLocalePrefix ? parts.slice(1) : parts).join('/');
    router.push(`/${newLocale}/${pathWithoutLocale}`);
  };

  // Click-outside handler
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsHovered(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  // Hover overlay animation
  useEffect(() => {
    if (!overlayRef.current) return;
    gsap.to(overlayRef.current, { opacity: isHovered ? 1 : 0.5, duration: 0.15, ease: 'none' });
  }, [isHovered]);

  // Dropdown enter/exit animation
  useEffect(() => {
    const el = dropdownRef.current;
    if (!el) return;

    if (isOpen) {
      gsap.fromTo(
        el,
        { opacity: 0, y: -8 },
        { opacity: 1, y: 0, duration: 0.15, ease: 'none', display: 'block' }
      );
    } else {
      gsap.to(el, {
        opacity: 0,
        y: -8,
        duration: 0.15,
        ease: 'none',
        onComplete: () => gsap.set(el, { display: 'none' }),
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className="relative hidden sm:block"
      onMouseEnter={() => {
        setIsHovered(true);
        setIsOpen(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsOpen(false);
      }}
    >
      {/* Hover overlay first in DOM — sits below button in paint order, no negative z-index needed */}
      <div
        ref={overlayRef}
        className="absolute inset-0 rounded-sm bg-white/15 pointer-events-none"
        style={{ opacity: 0 }}
      />

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative h-14 w-auto rounded-sm cursor-pointer"
      >
        <span className="flex items-center justify-center gap-x-2 px-6 h-full w-full">
          <span className="t-label font-mono">
            {languageCodes[currentLocale]}
          </span>
        </span>
      </button>

      {/* Dropdown — same glass layer as the hover overlay */}
      <div
        ref={dropdownRef}
        className="absolute top-full right-0 mt-2 w-full min-w-max rounded-sm bg-white/15 p-2 z-50"
        style={{ display: 'none', opacity: 0 }}
      >
        {locales.map((locale) => (
          <button
            key={locale}
            onClick={() => handleLanguageChange(locale)}
            className="w-full px-2 py-2 text-left cursor-pointer disabled:cursor-default disabled:opacity-50 hover:bg-white/5 transition-colors duration-150"
            disabled={locale === currentLocale}
          >
            <span className="t-label font-mono">
              {languageLabels[locale]}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
