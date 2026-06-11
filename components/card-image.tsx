"use client"
import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { Skeleton } from "./ui/skeleton";

export default function CardImage({ className = "", src, alt, ...props }: ImageProps) {

  const [loaded, setLoaded] = useState<boolean>(false);

  return (
    <>
      {
        loaded === false &&
        <Skeleton className={cn("static! block! w-full z-10", className)} />
      }
      <Image
        className={cn(
          !loaded ? "absolute! opacity-0" : "static! opacity-100",
          "transition-opacity will-change-auto",
          className
        )}
        src={src}
        alt={alt}
        {...props}
        onLoad={() => setLoaded(true)}
      />
    </>
  )
}
