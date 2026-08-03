
export type BlogPostCategory = "changelog" | "projects";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  cover: string;
  tags: string[];
  category: BlogPostCategory;
  published: boolean;
  readingTime: number;
  publishedAt: string;
  updatedAt: string;
};
