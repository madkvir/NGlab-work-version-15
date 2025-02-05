const getServerPageLang = async (translations, params) => {
  const { locale } = await params;
  let language: string | number | symbol;
  if (locale === "uk") {
    language = "ua";
  } else {
    language = (locale as keyof typeof translations) ?? "en";
  }
  return language.toString();
};

export default getServerPageLang;
