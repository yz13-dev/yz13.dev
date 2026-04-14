import { cn } from "@/lib/utils";
import { Suspense } from "react";
import { ThemeSwitcher } from "./kibo-ui/theme-switcher";
import { LogoFull } from "./logo-svg";
import StatusBadge, { StatusBadgeSkeleton } from "./status-badge";

export default function Footer({ className = "" }: { className?: string }) {
  return (
    <footer className={cn("container mx-auto space-y-8 md:p-12 p-4", className)}>
      <div className="flex items-center justify-between mx-auto w-full">
        <span className="text-sm text-muted-foreground">
          YZ13 - фуллстек разработчик / 2026
        </span>
        <ThemeSwitcher />
      </div>
      <div className="flex justify-start mx-auto w-full">
        <Suspense fallback={<StatusBadgeSkeleton />}>
          <StatusBadge />
        </Suspense>
      </div>
      <LogoFull className="py-20 opacity-10" />
    </footer>
  );
}
