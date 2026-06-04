import Header from "@/components/header";
import { Skeleton } from "@/components/ui/skeleton";




export default function Loading() {
  return (
    <>
      <div className="max-w-2xl mx-auto w-full md:pt-12 pt-4 md:px-12 px-4">
        <Header />
      </div>
      <main className="w-full max-w-2xl space-y-6 md:p-12 p-4 mx-auto">
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
    </>
  )
}
