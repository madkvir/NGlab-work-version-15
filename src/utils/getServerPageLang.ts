const getServerPageLang = async (params) => {
  const { locale } = await params;
  if (!locale) {
    console.warn("⚠️ params.locale is undefined. Falling back to 'en'.");
    return "en";
  }

  return locale === "uk" ? "ua" : locale;
};

export default getServerPageLang;
