const getServerPageLang = async (translations, params) => {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale;
  let language: string | number | symbol;
  if (locale === "uk") {
    language = "ua";
  } else {
    language = (locale as keyof typeof translations) ?? "en";
  }
  return language.toString();
};

export default getServerPageLang;
