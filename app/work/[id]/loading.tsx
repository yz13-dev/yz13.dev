import Footer from "@/components/footer";
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

      </main>
      <Footer className="mx-auto" />
    </>
  )
}
