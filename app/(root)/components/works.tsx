import { source } from "@/lib/source";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import Link from "next/link";

function groupByYear<T>(works: T[], getSlugs: (item: T) => string[]): Record<string, T[]> {
  return works
    .reduce((acc, work) => {
      const slugs = getSlugs(work);
      const year = slugs.find(slug => slug.startsWith("20"));
      if (year) {
        acc[year] = acc[year] || [];
        acc[year].push(work);
      }
      return acc;
    }, {} as Record<string, typeof works>);
}

export default async function Works() {
  const sources = source.getPages();
  const works = sources
    .filter(source => source.slugs.includes("work"));
  const groupedWorks = groupByYear(works, source => source.slugs);
  return (
    <div className="max-w-2xl mx-auto w-full md:p-12 p-4">
      {
        Object
          .entries(groupedWorks)
          .sort(([aYear], [bYear]) => bYear.localeCompare(aYear))
          .map(([year, works]) => {
            return works.map((work, index) => {
              const date = new Date(work.data.date)
              return (
                <Link
                  href={work.path.replace(".mdx", "")}
                  key={work.absolutePath}
                  className="flex text-sm group items-center gap-2 justify-between h-9 py-2"
                >
                  <div className="flex items-center gap-2">
                    <span className={cn("text-muted-foreground", index === 0 ? "opacity-100" : "opacity-0")}>{year}</span>
                    <span className="text-foreground group-hover:bg-secondary transition-all rounded-xl py-0.5 px-1.5">{work.data.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground capitalize">
                      {format(date, "LLLL", { locale: ru })}
                    </span>
                  </div>
                </Link>
              )
            })
          })
      }
    </div>
  )
}
