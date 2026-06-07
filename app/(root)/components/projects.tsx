import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { groupByYear } from "@/utils/group";
import { ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: "ui-yz13",
    name: "YZ13/UI",
    year: 2026,
    image: "https://ui.yz13.dev/favicon.ico",
    domain: "ui.yz13.dev",
    link: "https://ui.yz13.dev",
  },
  {
    id: "hostkitjs",
    name: "HostkitJS",
    year: 2026,
    image: "https://hostkitjs.ru/favicon.ico",
    domain: "hostkitjs.ru",
    link: "https://hostkitjs.ru",
  },
  {
    id: "yz13-site",
    name: "YZ13 Site",
    year: 2026,
    image: "https://yz13.site/favicon.ico",
    domain: "yz13.site",
    link: "https://yz13.site",
  },
  {
    id: "checkhouse",
    name: "Checkhouse",
    year: 2026,
    image: "https://checkhouse.app/favicon.ico",
    domain: "checkhouse.app",
    link: "https://checkhouse.app",
  },
  {
    id: "yz13-dev",
    name: "YZ13 портфолио",
    year: 2026,
    image: "https://yz13.dev/favicon.ico",
    domain: "yz13.dev",
    link: "https://yz13.dev",
  }
]

export default function Projects() {

  const groupedProjects = groupByYear(projects, item => [item.year.toString()])

  return (
    <section>
      <div className="flex items-center gap-2 py-3">
        <span className="font-medium text-muted-foreground">Проекты</span>
        <Separator className="shrink" />
      </div>
      <ul>
        {
          Object
            .entries(groupedProjects)
            .sort(([aYear], [bYear]) => bYear.localeCompare(aYear))
            .map(([year, projects]) => {
              return projects.map((project, index) => {
                return (
                  <li
                    key={project.id}
                    className="group text-sm relative"
                  >
                    <Link href={project.link} className="absolute inset-0 size-full" />
                    <div className="flex text-sm items-center gap-2 justify-between h-9 py-2">
                      <div className="flex items-center gap-2">
                        <span className={cn("text-muted-foreground", index === 0 ? "opacity-100" : "opacity-0")}>{year}</span>
                        <div className="flex items-center gap-0.5">
                          <div className="size-4 rouned-lg bg-muted">
                            <Image src={project.image} width={16} height={16} alt={project.name} />
                          </div>
                          <span className="text-foreground group-hover:bg-secondary transition-all rounded-xl py-0.5 px-1.5">{project.name}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground group-hover:text-foreground">{project.domain}</span>
                        <ExternalLinkIcon className="size-3 text-muted-foreground group-hover:text-foreground" />
                      </div>
                    </div>
                  </li>
                )
              })
            })
        }
      </ul>
    </section>
  )
}
