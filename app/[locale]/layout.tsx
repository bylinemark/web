import Navigation from "@/app/components/ui/navigation/navigation";
import { locales } from "@/i18n/config";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ViewTransitions } from "next-view-transitions";
import { Noto_Sans, Noto_Sans_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const notoSansMono = Noto_Sans_Mono({
  variable: "--font-noto-sans-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Linemark Studio, an international creative agency building the future with brands",
  description:
    "Meet Linemark Studio - a creative studio that pertners with brands to shape the future with collaboration, creativity and craft. Check out what we're building.",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate that the incoming locale is valid
  if (!locales.includes(locale as never)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <ViewTransitions>
      <html lang={locale} className={`${notoSans.variable} ${notoSansMono.variable} h-full antialiased`}>
        <body className="min-h-full flex flex-col">
          <NextIntlClientProvider messages={messages}>
                <Navigation locale={locale} />
                {children}
          </NextIntlClientProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
