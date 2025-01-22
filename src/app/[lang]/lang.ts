import 'server-only'

const dictionaries = {
  en: () =>
    import("../../../public/lang/en.json").then((module) => module.default),
  fr: () =>
    import("../../../public/lang/fr.json").then((module) => module.default),
};

export type Locale = "en" | "fr";

export const getDictionary = async (locale: Locale) => {
  console.log("------>locale", locale);

  if (!dictionaries[locale]) {
    throw new Error(`Locale '${locale}' not supported`);
  }
  return dictionaries[locale]();
};
