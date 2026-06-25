import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Project } from "@/types/project";
import { groupByYear } from "@/utils/group";
import { stage } from "@/utils/stage";
import { ExternalLinkIcon, GlobeIcon } from "lucide-react";
import Link from "next/link";


export const projects: Project[] = [
  {
    id: "imc-yz13",
    name: "IMC",
    year: 2026,
    image: "https://imc.yz13.dev/favicon.ico",
    stage: "in-dev",
    domain: null, // "imc.yz13.dev",
    link: null// "https://imc.yz13.dev",
  },
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
    stage: "in-dev",
    domain: null, // "hostkitjs.ru",
    link: null, // "https://hostkitjs.ru",
  },
  {
    id: "yz13-site",
    name: "YZ13 Site",
    year: 2026,
    image: "https://yz13.site/favicon.ico",
    stage: "in-dev",
    domain: null, // "yz13.site",
    link: null, // "https://yz13.site",
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
              return projects
                .map((project, index) => {
                  return (
                    <li
                      key={project.id}
                      className="group text-sm relative"
                    >
                      {project.link && <Link href={project.link} className="absolute inset-0 size-full" />}
                      <div className="flex text-sm items-center gap-2 justify-between h-9 py-2">
                        <div className="flex items-center px-1.5 gap-2">
                          <span className={cn("text-muted-foreground", index === 0 ? "opacity-100" : "opacity-0")}>{year}</span>
                          <div className="flex items-center gap-0.5">
                            <div className="size-4 rouned-lg bg-muted">
                              <Avatar className="size-4">
                                <AvatarImage src={project.image} alt={project.name} />
                                <AvatarFallback className="capitalize"><GlobeIcon /></AvatarFallback>
                              </Avatar>
                            </div>
                            <span className="text-foreground group-hover:bg-secondary transition-all rounded-xl py-0.5 px-1.5">{project.name}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {
                            project.stage &&
                            <span className="text-muted-foreground group-hover:text-foreground">{stage[project.stage]}</span>
                          }
                          {
                            project.domain &&
                            <div className="flex items-center gap-2">
                              <span className="text-muted-foreground group-hover:text-foreground">{project.domain}</span>
                              <ExternalLinkIcon className="size-3 text-muted-foreground group-hover:text-foreground" />
                            </div>
                          }
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
