'use client';

import { useState, useRef, useEffect } from 'react';
import {usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { locales, type Locale } from '@/i18n/config';

export function LanguageSwitcherCustom() {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('language');
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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
    const pathWithoutLocale = pathname.split('/').slice(2).join('/');
    router.push(`/${newLocale}/${pathWithoutLocale}`);
  };

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

  return (
    <motion.div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => {
        setIsHovered(true);
        setIsOpen(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsOpen(false);
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-auto rounded-sm cursor-pointer"
      >
        <span className="flex items-center justify-center gap-x-2 px-4 h-full w-full">
          <span className="block">
            <span className="font-mono text-sm leading-4 tracking-normal uppercase relative">
              {languageCodes[currentLocale]}
            </span>
          </span>
        </span>
      </button>

      <motion.div
        className="absolute top-0 left-0 -z-1 h-full w-full rounded-sm bg-white/5 pointer-events-none"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.15, ease: 'linear' }}
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full right-0 mt-2 w-full min-w-max rounded-sm bg-white/5 p-2 overflow-hidden z-50"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15, ease: 'linear' }}
          >
            {locales.map((locale) => (
              <motion.button
                key={locale}
                onClick={() => handleLanguageChange(locale)}
                className="w-full px-2 py-2 text-left cursor-pointer relative group disabled:cursor-default disabled:opacity-50"
                disabled={locale === currentLocale}
                whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                transition={{ duration: 0.15 }}
              >
                <span className="font-mono text-sm leading-4 tracking-normal uppercase">
                  {languageLabels[locale]}
                </span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
