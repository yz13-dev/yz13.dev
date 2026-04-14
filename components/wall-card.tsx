import { cn } from "@/lib/utils";
import { ArrowUpRightIcon, DotIcon } from "lucide-react";
import Link from "next/link";
import { GridCell } from "./grid";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

type WallCardProps = {
  type: string
  name: string
  link?: string
  fill?: boolean
  children?: React.ReactNode
  className?: string
  label?: string
  containerClassName?: string
}
export default function WallCard({ label, className = "", containerClassName = "", type, name, link, children, fill = false }: WallCardProps) {

  return (
    <GridCell className={cn("size-full bg-card", className)}>
      <div className="size-full group flex flex-col">
        <GridCell
          className={cn(
            "w-full h-10 bg-background transition-all pl-4 pr-2 flex overflow-hidden items-center justify-between gap-2",
            fill ? "group-hover:h-10 h-0" : "h-10"
          )}
        >
          <div className="flex items-center gap-0">
            <Link href="" className="text-sm hover:underline text-muted-foreground">{type}</Link>
            <DotIcon className="size-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{name}</span>
          </div>
          <Button variant="ghost" size="xs">
            <span>Открыть</span>
            <ArrowUpRightIcon />
          </Button>
        </GridCell>
        <div className={cn(
          "w-full flex relative items-end overflow-hidden justify-center md:px-8 md:pt-8 px-4 pt-4",
          fill ? "group-hover:h-[calc(100%-40px)] h-full transition-all" : "h-[calc(100%-40px)]",
          containerClassName
        )}
        >
          {label &&
            <Badge
              className={cn(
                "absolute bottom-2 left-2 text-lg h-fit border-none px-3 transition-colors",
                fill ? "group-hover:bg-foreground group-hover:text-background bg-transparent text-foreground" : ""
              )}
            >
              {label}
            </Badge>
          }
          {children}
        </div>
      </div>
    </GridCell>
  )
}
