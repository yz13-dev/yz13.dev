"use client"
import { projects } from "@/app/(root)/components/projects";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command";
import { source } from "@/lib/source";
import Image from "next/image";
import { useState } from "react";

function getCommandValue(value: string): [string, string] {
  try {
    const [search, slug] = value.split(":");
    return [search, slug];
  } catch {
    return [value, ""];
  }
}

export default function Cmd() {

  const [value, setValue] = useState("");

  const sources = source.getPages();
  const works = sources
    .filter(source => source.slugs.includes("work"));

  return (
    <Command
      className="w-full min-w-md rounded-lg border"
      value={value}
      onValueChange={selected => {

        const [search, slug] = getCommandValue(selected);

        console.log(search, slug)
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
            works
              .map(work => {
                return (
                  <CommandItem value={`blog:${work.data.id}`} key={`cmd/work/${work.absolutePath}`}>
                    <span>{work.data.title}</span>
                  </CommandItem>
                )
              })
          }
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
