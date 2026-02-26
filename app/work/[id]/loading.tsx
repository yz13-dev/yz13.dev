import { LogoFull } from "@/components/logo-svg";
import { Skeleton } from "@/components/ui/skeleton";




export default function Loading() {
  return (
    <>
      <div className="w-full h-[12.5dvh]" />
      <main className="w-full max-w-2xl space-y-6 px-6 mx-auto">
        <div className="flex items-center justify-between">
          <Skeleton className="w-[38px] h-8" />
          <Skeleton className="w-[38px] h-8" />
        </div>
        <div>
          <div className="py-12 space-y-2">
            <Skeleton className="w-1/2 h-10" />
            <Skeleton className="w-1/3 h-7" />
          </div>
        </div>

        <Skeleton className="w-1/2 h-7" />
        <Skeleton className="w-1/6 h-7" />
        <Skeleton className="w-2/3 h-7" />
        <Skeleton className="w-1/4 h-7" />

        <Skeleton className="w-1/2 h-7" />
        <Skeleton className="w-1/6 h-7" />
        <Skeleton className="w-2/3 h-7" />
        <Skeleton className="w-1/4 h-7" />

        <Skeleton className="w-1/2 h-7" />
        <Skeleton className="w-1/6 h-7" />
        <Skeleton className="w-2/3 h-7" />
        <Skeleton className="w-1/4 h-7" />

        <footer>
          <div className="pt-20 flex items-center justify-between mx-auto w-full">
            <span className="text-sm text-muted-foreground">
              YZ13 - фронтенд разработчик.
            </span>
            <span className="text-sm text-muted-foreground">2026</span>
          </div>
          <LogoFull className="py-20 opacity-10" />
        </footer>
      </main>
    </>
  )
}
