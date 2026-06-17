import { getRequestConfig } from "next-intl/server";
import { headers } from "next/headers";
import { locales } from "./config";

export type Locale = (typeof locales)[number];

export default getRequestConfig(async () => {
  let locale = "en";
  try {
    const headersList = await headers();
    const headerLocale = headersList.get("x-locale");
    if (headerLocale && (locales as readonly string[]).includes(headerLocale)) {
      locale = headerLocale;
    }
  } catch (e) {
    console.warn("Could not read locale from headers:", e);
  }

  try {
    return {
      locale: locale,
      messages: (await import(`../messages/${locale}.json`)).default,
    };
  } catch (e) {
    console.error(`Failed to load translations for locale ${locale}:`, e);
    return {
      locale: "en",
      messages: (await import(`../messages/en.json`)).default,
    };
  }
});
