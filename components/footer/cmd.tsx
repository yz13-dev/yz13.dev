"use client"
import { projects } from "@/app/(root)/components/projects";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command";
import { GetBlogPosts } from "@/lib/api/blog";
import { BlogPost } from "@/types/blog";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";

export default function Cmd() {

  const [value, setValue] = useState("");

  const { data } = useQuery<BlogPost[]>({
    queryKey: ["blog-posts"],
    queryFn: GetBlogPosts,
  })
  const posts = data || [];

  return (
    <Command
      className="w-full min-w-md rounded-lg border"
      value={value}
      onValueChange={selected => {

        setValue(selected);
      }}
    >
      <CommandInput autoFocus placeholder="Поиск..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Проекты">
          {
            projects
              .map(project => {

                return (
                  <CommandItem value={`project:${project.id}`} key={`cmd/project/${project.id}`}>
                    <div className="size-4 rouned-lg bg-muted">
                      <Image src={project.image} width={16} height={16} alt={project.name} />
                    </div>
                    <span>{project.name}</span>
                  </CommandItem>
                )
              })
          }
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Блог">
          {
            posts
              .map(post => {
                return (
                  <CommandItem value={`blog:${post.slug}`} key={`cmd/blog/${post.slug}`}>
                    <span>{post.title}</span>
                  </CommandItem>
                )
              })
          }
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
