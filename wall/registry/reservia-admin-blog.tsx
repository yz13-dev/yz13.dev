"use client"
import WallCard from "@/components/wall-card";
import { GetBlogPosts } from "@/lib/api/blog";
import { BlogPost } from "@/types/blog";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

export const date = "2026-04-13"

export default function Component() {

  const { data } = useQuery<BlogPost[]>({
    queryKey: ["blog-posts"],
    queryFn: GetBlogPosts,
  })
  const post = data?.find(post => post.slug === "reservia-admin");

  if (!post) return null;

  return (
    <WallCard
      type="blog"
      name={post.title}
      className="aspect-square pattern-dots"
      containerClassName="md:p-8 p-4 bg-linear-to-tr from-muted to-transparent"
      link={`https://blog.yz13.dev/${post.slug}`}
    >
      <div className="size-full justify-end flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <span className="text-4xl font-serif">{post.title}</span>
          <time dateTime={post.publishedAt} className="text-sm text-muted-foreground">
            {format(new Date(post.publishedAt), "dd MMMM yyyy", { locale: ru })}
          </time>
        </div>
        <span className="text-base leading-relaxed tracking-tight text-balance line-clamp-3">
          {post.description}
        </span>
      </div>
    </WallCard>
  )
}
