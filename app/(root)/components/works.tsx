"use client"
import { Separator } from "@/components/ui/separator";
import { GetBlogPosts } from "@/lib/api/blog";
import { cn } from "@/lib/utils";
import { BlogPost } from "@/types/blog";
import { groupByYear } from "@/utils/group";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import Link from "next/link";

export default function Works() {
  const { data } = useQuery<BlogPost[]>({
    queryKey: ["blog-posts"],
    queryFn: GetBlogPosts,
  })

  const posts = data || []
  const groupedPosts = groupByYear(posts, (post) => [new Date(post.publishedAt).getFullYear().toString()]);

  return (
    <section>
      <div className="flex items-center gap-2 py-3">
        <span className="font-medium text-secondary">Блог</span>
        <Separator className="shrink" />
      </div>
      <ul>
        {
          Object
            .entries(groupedPosts)
            .sort(([aYear], [bYear]) => bYear.localeCompare(aYear))
            .map(([year, posts]) => {
              return posts
                .sort((a, b) => {
                  const aDate = new Date(a.publishedAt)
                  const bDate = new Date(b.publishedAt)
                  return bDate.getTime() - aDate.getTime()
                })
                .map((post, index) => {
                  const date = new Date(post.publishedAt)
                  return (
                    <li key={post.slug}>
                      <Link
                        href={`https://blog.yz13.dev/${post.slug}`}
                        className="flex text-sm group items-center gap-2 justify-between h-9 py-2"
                      >
                        <div className="flex items-center gap-2">
                          <span className={cn("text-secondary", index === 0 ? "opacity-100" : "opacity-0")}>{year}</span>
                          <span className="text-primary group-hover:bg-muted transition-all rounded-xl py-0.5 px-1.5">{post.title}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-secondary capitalize">
                            {format(date, "dd MMMM", { locale: ru })}
                          </span>
                        </div>
                      </Link>
                    </li>
                  )
                })
            })
        }
      </ul>
    </section>
  )
}
