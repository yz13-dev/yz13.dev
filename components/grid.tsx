import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";
import { HorizontalLine, VerticalLine } from "./line";

export function GridWrapper({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "size-full grid 2xl:grid-cols-10 xl:grid-cols-8 lg:grid-cols-8 md:grid-cols-6 grid-cols-3 grid-rows-6",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function GridCell({
  children,
  className = "",
  strokeDasharray,
  ...props
}: {
  strokeDasharray?: string;
  children?: React.ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn("relative", className)}
      {...props}
    >
      <VerticalLine className="absolute top-0 -left-px" strokeDasharray={strokeDasharray} />
      <HorizontalLine className="absolute -top-px left-0" strokeDasharray={strokeDasharray} />
      <VerticalLine className="absolute bottom-0 right-0" strokeDasharray={strokeDasharray} />
      <HorizontalLine className="absolute bottom-0 right-0" strokeDasharray={strokeDasharray} />
      {children}
    </div>
  );
}

export function GridRow({
  count,
  className = "",
}: {
  count: number;
  className?: string;
}) {
  return Array.from({ length: count }).map((_, i) => (
    // 2xl:grid-cols-10 xl:grid-cols-8 lg:grid-cols-8 md:grid-cols-6 grid-cols-3
    <GridCell
      key={`cell/${i}`}
      data-cell={i + 1}
      className={cn(
        "2xl:data-[cell=9]:data-[edge=false]:block data-[cell=9]:data-[edge=false]:hidden",
        "2xl:data-[cell=8]:data-[edge=false]:block data-[cell=8]:data-[edge=false]:hidden",
        "lg:data-[cell=7]:data-[edge=false]:block data-[cell=7]:data-[edge=false]:hidden",
        "lg:data-[cell=6]:data-[edge=false]:block data-[cell=6]:data-[edge=false]:hidden",
        "md:data-[cell=5]:data-[edge=false]:block data-[cell=5]:data-[edge=false]:hidden",
        "md:data-[cell=4]:data-[edge=false]:block data-[cell=4]:data-[edge=false]:hidden",
        "md:data-[cell=3]:data-[edge=false]:block data-[cell=3]:data-[edge=false]:hidden",
        className,
      )}
      data-edge={i === 0 || i === count - 1}
    />
  ));
}

export default function Grid({ className = "" }: { className?: string }) {
  return (
    <GridWrapper className={className}>
      {/*---row---*/}
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      {/*---row---*/}
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      {/*---row---*/}
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      {/*---row---*/}
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      {/*---row---*/}
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      {/*---row---*/}
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell />
    </GridWrapper>
  );
}
