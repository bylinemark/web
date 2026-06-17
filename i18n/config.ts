// This file is safe to import in both server and client components
export const locales = ["en", "cs"] as const;
export type Locale = (typeof locales)[number];
