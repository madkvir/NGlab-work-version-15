const getServerPageLang = async (params) => {
  try {
    // Обрабатываем params как промис или как обычный объект
    const paramsObj = params && typeof params.then === 'function' ? await params : params;
    const locale = paramsObj?.locale;
    
    if (!locale) {
      console.warn("⚠️ params.locale is undefined. Falling back to 'en'.");
      return "en";
    }

    return locale === "uk" ? "ua" : locale;
  } catch (error) {
    console.error("Error in getServerPageLang:", error);
    return "en"; // Значение по умолчанию в случае ошибки
  }
};

export default getServerPageLang;
