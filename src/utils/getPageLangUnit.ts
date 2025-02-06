import { useParams } from "next/navigation";

const getPageLangUnit = (translations) => {
  const { locale } = useParams();
  let language: string | number | symbol;
  if (locale === "uk") {
    language = "ua";
  } else {
    language = (locale as keyof typeof translations) ?? "en";
  }
  return language.toString();
};

export default getPageLangUnit;
