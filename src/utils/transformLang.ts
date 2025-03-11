const transformLang = (lang) => {
  if (lang === "ua") {
    return "uk";
  } else {
    return lang;
  }
};

export default transformLang;
