export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  images: string[];
  category: string;
  author: string;
  date: string;
  readTime?: string;
  createdAt?: string;
  updatedAt?: string;
}
