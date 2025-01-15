import type { BlogPost } from '../types/blog';

export const generateStaticBlogPages = async (posts: BlogPost[]) => {
  // No need to generate static HTML files since we're using client-side routing
  // The Netlify _redirects file will handle all routes
  return;
};