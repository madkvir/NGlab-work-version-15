export interface BlogPost {
  // id: string;
  _id?: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  images: string[];
  category: string;
  readTime?: string;
  slug: string;
}
