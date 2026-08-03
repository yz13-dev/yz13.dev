import { BlogPost } from "@/types/blog"

export async function GetBlogPosts(): Promise<BlogPost[]> {
  try {

    const response = await fetch("/api/blog/posts")

    const json = await response.json()

    return json

  } catch (error) {
    console.warn(error)
    return []
  }
}
