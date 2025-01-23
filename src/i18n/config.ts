export type Locale = (typeof locales)[number];

export const locales = ["az",'ru', "en"] as const;
export const defaultLocale: Locale = "az";
