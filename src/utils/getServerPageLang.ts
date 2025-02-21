const getServerPageLang = (params) => {
  if (!params?.locale) {
    console.warn("⚠️ params.locale is undefined. Falling back to 'en'.");
    return "en";
  }

  return params.locale === "uk" ? "ua" : params.locale;
};

export default getServerPageLang;
