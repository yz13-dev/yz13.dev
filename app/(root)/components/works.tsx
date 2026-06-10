import { Separator } from "@/components/ui/separator";
import { source } from "@/lib/source";
import { cn } from "@/lib/utils";
import { groupByYear } from "@/utils/group";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import Link from "next/link";

export default async function Works() {
  const sources = source.getPages();
  const works = sources
    .filter(source => source.slugs.includes("work"));
  const groupedWorks = groupByYear(works, source => source.slugs);
  return (
    <section>
      <div className="flex items-center gap-2 py-3">
        <span className="font-medium text-muted-foreground">Блог</span>
        <Separator className="shrink" />
      </div>
      <ul>
        {
          Object
            .entries(groupedWorks)
            .sort(([aYear], [bYear]) => bYear.localeCompare(aYear))
            .map(([year, works]) => {
              return works
                .sort((a, b) => {
                  const aDate = new Date(a.data.date)
                  const bDate = new Date(b.data.date)
                  return bDate.getTime() - aDate.getTime()
                })
                .map((work, index) => {
                  const date = new Date(work.data.date)
                  return (
                    <li key={work.absolutePath}>
                      <Link
                        href={work.path.replace(".mdx", "")}
                        className="flex text-sm group items-center gap-2 justify-between h-9 py-2"
                      >
                        <div className="flex items-center gap-2">
                          <span className={cn("text-muted-foreground", index === 0 ? "opacity-100" : "opacity-0")}>{year}</span>
                          <span className="text-foreground group-hover:bg-secondary transition-all rounded-xl py-0.5 px-1.5">{work.data.title}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-muted-foreground capitalize">
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
