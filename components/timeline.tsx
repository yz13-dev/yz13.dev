import { cn } from "@/lib/utils";
import { TimelineItem } from "@/utils/timeline";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";


export const TimelineDot = () => {
  return (
    <div className="size-8 shrink-0 flex items-start px-2 justify-start">
      <div className="relative -left-2 size-4 flex items-center justify-center bg-background">
        <div className="size-2 rounded-xs bg-foreground" />
      </div>
    </div>
  );
};


export const TimelineCard = ({ item }: { item: TimelineItem }) => {

  const date = new Date(item.date);
  const formattedDate = date.toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" });

  return (
    <article className="flex items-center gap-0 z-10">
      <TimelineDot />
      <div className="py-2 px-3 h-fit rounded-md hover:bg-secondary w-full transition-colors">
        <div className="relative w-full flex items-center justify-between gap-4">
          {
            item.type === "project" && item.url &&
            <Link href={item.url} className="absolute inset-0" />
          }
          {
            item.type === "work" &&
            <Link href={`/work/${item.id}`} className="absolute inset-0" />
          }
          <div className="flex flex-col w-full gap-0.5">
            <div className="flex w-full items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Работа</Badge>
                <span className="font-medium text-sm">{item.title}</span>
              </div>
              <span className="text-muted-foreground text-sm">{formattedDate}</span>
            </div>
            <span className="text-sm text-muted-foreground">{item.description}</span>
          </div>
        </div>
      </div>
    </article>
  )
}

export const Timeline = ({ children, className = "" }: { className?: string; children?: React.ReactNode }) => {
  return (
    <div className="w-full relative">
      <div className="absolute left-0 top-0 w-8 px-2 h-full flex justify-start">
        <Separator orientation="vertical" className="-z-1" />
      </div>
      <div className={cn("w-full space-y-6", className)}>
        {children}
      </div>
    </div>
  )
}
