import createMiddleware from 'next-intl/middleware';
import { locales } from '@/i18n/config';
import { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: 'en',
  localePrefix: 'as-needed',
});

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  let locale = 'en';

  for (const loc of locales) {
    if (pathname.startsWith(`/${loc}/`) || pathname === `/${loc}`) {
      locale = loc;
      break;
    }
  }

  const response = intlMiddleware(request);
  response.headers.set('x-locale', locale);

  return response;
}

export const config = {
  matcher: [
    '/',
    '/(cs|de|en|ko)/:path*',
    '/((?!_next|_vercel|.*\\..*).*)',
  ],
};
