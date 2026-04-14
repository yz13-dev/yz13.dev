
import WallCard from "@/components/wall-card";
import { source } from "@/lib/source";
import { format } from "date-fns";
import { ru } from "date-fns/locale";



export default function Component() {

  const page = source.getPage(["work", "reservia-client"]);

  if (!page) return null;

  return (
    <WallCard
      type="blog"
      name={page.data.title}
      className="aspect-square"
      containerClassName="md:p-8 p-4"
    >
      <div className="size-full justify-end  flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <span className="text-3xl font-serif">{page?.data.title}</span>
          <time dateTime={page?.data.date} className="text-sm text-muted-foreground">
            {format(new Date(page.data.date), "dd MMMM yyyy", { locale: ru })}
          </time>
        </div>
        <span className="text-base leading-relaxed tracking-tight text-balance line-clamp-3">
          {page.data.description}
        </span>
      </div>
    </WallCard>
  )
}
