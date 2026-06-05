import { cn } from "@/lib/utils";
import { DotIcon, ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { CSSProperties } from "react";
import { Badge } from "./ui/badge";

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
    <div
      style={{ "--pattern-size": "48px" } as CSSProperties}
      className={cn("size-full group relative bg-muted overflow-clip rounded-xl", className)}
    >
      {link && <Link href={link} target="_blank" className="absolute z-10 inset-0 size-full" />}
      <div className="size-full flex flex-col">
        <div
          className={cn(
            "w-full h-fit z-10 transition-all px-6 lg:py-6 py-3 flex overflow-hidden items-center justify-between gap-2",
          )}
        >
          <div className="flex items-center gap-0">
            <span className="text-sm text-muted-foreground">{type}</span>
            <DotIcon className="size-4 text-muted-foreground" />
            {
              link
                ? <Link href={link} target="_blank" className="text-sm hover:underline text-muted-foreground inline-flex items-center gap-1 [&_svg]:size-3">
                  {name}
                  <ExternalLinkIcon />
                </Link>
                : <span className="text-sm text-muted-foreground">{name}</span>
            }
          </div>
        </div>
        <div className={cn(
          "size-full",
        )}>
          <div
            className={cn(
              "size-full flex relative items-end overflow-hidden justify-end md:px-6 px-4",
              containerClassName
            )}
          >
            {label &&
              <Badge
                className={cn(
                  "absolute h-fit border-none px-3 transition-colors backdrop-blur-[2px]",
                  "lg:bottom-3 lg:left-3 bottom-2 left-2",
                  "lg:text-base md:text-sm text-xs",
                  fill ? "group-hover:bg-foreground/50 group-hover:text-background bg-transparent text-foreground" : ""
                )}
              >
                {label}
              </Badge>
            }
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export function WallCardImage({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative rounded-t-lg bg-background border block overflow-clip drop-shadow-2xl h-fit w-full transition-transform",
        "[&_img]:object-contain [&_img]:static! [&_img]:block! [&_img]:object-top",
        className
      )}
    >
      {children}
    </div>
  )
}
