import { commonTranslations } from "../locales/commonTranslations";

const getCommonTranslations = async (params) => {
  try {
    // Обрабатываем params как промис или как обычный объект
    const paramsObj = params && typeof params.then === 'function' ? await params : params;
    const locale = paramsObj?.locale;
    
    if (!locale) {
      console.warn("⚠️ params.locale is undefined. Falling back to 'en'.");
      return commonTranslations.en;
    }

    const language = locale === "uk" ? "ua" : locale;
    return commonTranslations[language] || commonTranslations.en;
  } catch (error) {
    console.error("Error in getCommonTranslations:", error);
    return commonTranslations.en; // Значение по умолчанию в случае ошибки
  }
};

export default getCommonTranslations; 