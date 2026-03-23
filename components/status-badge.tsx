import { getURL } from "@/lib/domain";
import { cn } from "@/lib/utils";
import { isDevelopment } from "@/utils/env";
import { Skeleton } from "./ui/skeleton";

export const StatusBadgeSkeleton = ({
  className = "",
}: {
  className?: string;
}) => {
  return <Skeleton className={cn("w-56 h-9", className)} />;
};

const PORT = process.env.PORT || 5173

export default async function StatusBadge({ className = "", variant = "ghost", size = "default", ...props }: ButtonProps) {
  if (isDevelopment()) return <StatusBadgeSkeleton className="h-9 w-56" />

  const url = getURL(`/badge?variant=${variant}&lang=ru`, "status");

  return <iframe src={url} loading="lazy" className={cn("h-9 w-64", className)} />
}
