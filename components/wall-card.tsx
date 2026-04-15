import { cn } from "@/lib/utils";
import { ArrowUpRightIcon, DotIcon } from "lucide-react";
import Link from "next/link";
import { CSSProperties } from "react";
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
    <GridCell className={cn("size-full group relative bg-card overflow-clip", className)}>
      {link && <Link href={link} target="_blank" className="absolute z-10 top-10 w-full h-[calc(100%-40px)] left-0" />}
      <div className="size-full flex flex-col">
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
          {
            link &&
            <Button variant="ghost" size="xs" nativeButton={false} render={<Link href={link} target="_blank" />}>
              <span>Открыть</span>
              <ArrowUpRightIcon />
            </Button>
          }
        </GridCell>
        <div
          style={{ "--pattern-size": "48px" } as CSSProperties}
          className={cn(
            "w-full flex relative items-end overflow-hidden justify-center md:px-8 md:pt-8 px-4 pt-4",
            fill ? "group-hover:h-[calc(100%-40px)] h-full transition-all" : "h-[calc(100%-40px)]",
            containerClassName
          )}
        >
          {label &&
            <Badge
              className={cn(
                "absolute bottom-3 left-3 text-base h-fit border-none px-3 transition-colors backdrop-blur-[2px]",
                fill ? "group-hover:bg-foreground/50 group-hover:text-background bg-transparent text-foreground" : ""
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
