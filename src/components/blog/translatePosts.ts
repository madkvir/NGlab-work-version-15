import type { BlogPost } from "@/types/blog";

export function getTranslPosts(posts: BlogPost[], locale: string): BlogPost[] {
  return posts.map((post: BlogPost) => {
    const translation = post.translations?.find((t) => t.locale === locale);
    return {
      ...post,
      locale: translation?.locale || "en",
      title: translation?.title || post.title,
      excerpt: translation?.excerpt || post.excerpt,
      content: translation?.content || post.content,
      category: translation?.category || post.category,
    };
  });
}
