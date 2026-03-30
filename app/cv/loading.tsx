import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="w-full max-w-2xl space-y-8 md:p-12 p-4">
      <div className="h-10 w-full mt-2">
        <Skeleton className="h-full w-1/2" />
      </div>

    </main>
  );
}
