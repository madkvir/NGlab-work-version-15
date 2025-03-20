import slugify from "slugify";

export const generateSlug = (title: string, locale) => {
  if (title) {
    // title
    //   .toLowerCase()
    //   .replace(/[^\w\s-]/g, "") // Remove special characters
    //   .replace(/\s+/g, "-") // Replace spaces with hyphens
    //   .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
    //   .trim();
    const slug = slugify(title, {
      lower: true,
      strict: true,
      locale: locale,
    });
    return slug;
  }
};
